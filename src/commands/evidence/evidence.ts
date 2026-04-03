import type { LocalCommandCall } from '../../types/command.js'
import { readEngagementManifest } from '../../security/engagement.js'
import {
  appendEvidenceEntry,
  countEvidenceEntriesByType,
  readEvidenceEntries,
  type ComplianceReference,
  type EvidenceSeverity,
  type FindingEntry,
  type MitreAttackReference,
  type OwaspCategory,
} from '../../security/evidence.js'
import { buildCvssScore, lookupMitreAttack, mapCweToOwasp } from '../../security/findingClassification.js'
import { getCwd } from '../../utils/cwd.js'

const VALID_SEVERITIES: EvidenceSeverity[] = [
  'info',
  'low',
  'medium',
  'high',
  'critical',
]

function getHelpText(): string {
  return `Net-Runner evidence commands:
- /evidence status
- /evidence note <text>
- /evidence finding <severity> <title> | <evidence> | [recommendation] | [metadata-json]
- /evidence artifact <label> | <path> | [description]
- /evidence close [summary]`
}

function parsePipeFields(value: string): string[] {
  return value
    .split('|')
    .map(field => field.trim())
    .filter(field => field.length > 0)
}

type FindingMetadataInput = {
  cweIds?: string[]
  cvss?: {
    version?: '3.1' | '4.0'
    vector: string
    baseScore: number
    baseSeverity?: 'none' | 'low' | 'medium' | 'high' | 'critical'
  }
  mitreAttack?: Array<string | MitreAttackReference>
  owaspCategory?: OwaspCategory[]
  compliance?: ComplianceReference[]
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function normalizeFindingMetadata(
  rawMetadata?: string,
): Pick<
  FindingEntry,
  'cweIds' | 'cvss' | 'mitreAttack' | 'owaspCategory' | 'compliance'
> {
  if (!rawMetadata) {
    return {}
  }

  let parsed: unknown
  try {
    parsed = JSON.parse(rawMetadata)
  } catch {
    throw new Error(
      'Invalid finding metadata JSON. Expected a JSON object with optional cweIds, cvss, mitreAttack, owaspCategory, and compliance fields.',
    )
  }

  if (!isObject(parsed)) {
    throw new Error('Finding metadata must be a JSON object.')
  }

  const metadata = parsed as FindingMetadataInput
  const cweIds = Array.isArray(metadata.cweIds)
    ? metadata.cweIds.filter((value): value is string => typeof value === 'string')
    : undefined
  const cvss =
    metadata.cvss &&
    typeof metadata.cvss.vector === 'string' &&
    typeof metadata.cvss.baseScore === 'number'
      ? buildCvssScore(metadata.cvss.vector, metadata.cvss.baseScore)
      : undefined
  const mitreAttack = Array.isArray(metadata.mitreAttack)
    ? metadata.mitreAttack.flatMap(reference => {
        if (typeof reference === 'string') {
          return lookupMitreAttack([reference])
        }
        return isObject(reference) && typeof reference.techniqueId === 'string'
          ? [reference as MitreAttackReference]
          : []
      })
    : undefined
  const owaspCategory =
    Array.isArray(metadata.owaspCategory) && metadata.owaspCategory.length > 0
      ? metadata.owaspCategory
      : cweIds && cweIds.length > 0
        ? mapCweToOwasp(cweIds)
        : undefined
  const compliance =
    Array.isArray(metadata.compliance) && metadata.compliance.length > 0
      ? metadata.compliance.filter(
          (value): value is ComplianceReference =>
            isObject(value) &&
            typeof value.framework === 'string' &&
            Array.isArray(value.controls),
        )
      : undefined

  return {
    cweIds,
    cvss,
    mitreAttack,
    owaspCategory,
    compliance,
  }
}

const call: LocalCommandCall = async args => {
  const cwd = getCwd()
  const trimmed = args.trim()

  if (!trimmed) {
    return { type: 'text', value: getHelpText() }
  }

  const [subcommand, ...rest] = trimmed.split(/\s+/)
  const manifest = await readEngagementManifest(cwd)
  if (!manifest) {
    return {
      type: 'text',
      value:
        'No Net-Runner engagement found in this workspace. Run `/engagement init` first.',
    }
  }

  if (subcommand === 'status') {
    const counts = countEvidenceEntriesByType(await readEvidenceEntries(cwd))
    return {
      type: 'text',
      value: `Net-Runner evidence status:
- session starts: ${counts.session_start}
- session ends: ${counts.session_end}
- findings: ${counts.finding}
- notes: ${counts.note}
- artifacts: ${counts.artifact}
- guardrails: ${counts.guardrail}
- execution steps: ${counts.execution_step}
- approvals: ${counts.approval}`,
    }
  }

  if (subcommand === 'note') {
    const note = rest.join(' ').trim()
    if (!note) {
      return { type: 'text', value: 'Usage: /evidence note <text>' }
    }
    await appendEvidenceEntry(cwd, { type: 'note', note })
    return { type: 'text', value: 'Added evidence note.' }
  }

  if (subcommand === 'finding') {
    const severity = (rest[0] ?? '').toLowerCase()
    if (!VALID_SEVERITIES.includes(severity as EvidenceSeverity)) {
      return {
        type: 'text',
        value:
          'Usage: /evidence finding <severity> <title> | <evidence> | [recommendation] | [metadata-json]\nValid severities: info, low, medium, high, critical',
      }
    }

    const fields = parsePipeFields(rest.slice(1).join(' '))
    const [title, evidence, recommendation, rawMetadata] = fields
    if (!title || !evidence) {
      return {
        type: 'text',
        value:
          'Usage: /evidence finding <severity> <title> | <evidence> | [recommendation] | [metadata-json]',
      }
    }

    let metadata: Pick<
      FindingEntry,
      'cweIds' | 'cvss' | 'mitreAttack' | 'owaspCategory' | 'compliance'
    >
    try {
      metadata = normalizeFindingMetadata(rawMetadata)
    } catch (error) {
      return {
        type: 'text',
        value: error instanceof Error ? error.message : 'Invalid finding metadata.',
      }
    }

    await appendEvidenceEntry(cwd, {
      type: 'finding',
      severity: severity as EvidenceSeverity,
      title,
      evidence,
      recommendation,
      ...metadata,
    })
    return { type: 'text', value: 'Added evidence finding.' }
  }

  if (subcommand === 'artifact') {
    const fields = parsePipeFields(rest.join(' '))
    const [label, path, description] = fields
    if (!label || !path) {
      return {
        type: 'text',
        value: 'Usage: /evidence artifact <label> | <path> | [description]',
      }
    }

    await appendEvidenceEntry(cwd, {
      type: 'artifact',
      label,
      path,
      description,
    })
    return { type: 'text', value: 'Added evidence artifact.' }
  }

  if (subcommand === 'close') {
    const summary = rest.join(' ').trim() || 'Engagement session closed.'
    await appendEvidenceEntry(cwd, { type: 'session_end', summary })
    return { type: 'text', value: 'Recorded session end in evidence ledger.' }
  }

  return { type: 'text', value: getHelpText() }
}

export { call }
