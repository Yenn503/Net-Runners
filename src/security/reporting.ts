import { mkdir, writeFile } from 'fs/promises'
import { join } from 'path'
import type { EngagementManifest } from './engagement.js'
import type { EvidenceEntry, FindingEntry } from './evidence.js'
import { getReportsDir } from './paths.js'

const SEVERITY_ORDER: Record<FindingEntry['severity'], number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3,
  info: 4,
}

function getFindings(entries: EvidenceEntry[]): FindingEntry[] {
  return entries
    .filter((entry): entry is FindingEntry => entry.type === 'finding')
    .sort((left, right) => SEVERITY_ORDER[left.severity] - SEVERITY_ORDER[right.severity])
}

function formatList(items: string[] | undefined, fallback = 'Not recorded'): string {
  return items && items.length > 0 ? items.join(', ') : fallback
}

function formatMitreAttack(finding: FindingEntry): string {
  if (!finding.mitreAttack || finding.mitreAttack.length === 0) {
    return 'Not recorded'
  }

  return finding.mitreAttack
    .map(reference => {
      const parts = [reference.techniqueId]
      if (reference.subtechniqueId) {
        parts.push(reference.subtechniqueId)
      }

      let label = parts.join(' / ')
      if (reference.techniqueName) {
        label += ` ${reference.techniqueName}`
      }
      if (reference.tacticName) {
        label += ` (${reference.tacticName})`
      }

      return label
    })
    .join(', ')
}

function formatCompliance(finding: FindingEntry): string {
  if (!finding.compliance || finding.compliance.length === 0) {
    return 'Not recorded'
  }

  return finding.compliance
    .map(reference => `${reference.framework}: ${reference.controls.join(', ')}`)
    .join(' | ')
}

function buildFindingSummary(findings: FindingEntry[]): string {
  if (findings.length === 0) {
    return '- No findings recorded'
  }

  const severityCounts = findings.reduce<Record<FindingEntry['severity'], number>>(
    (counts, finding) => {
      counts[finding.severity] += 1
      return counts
    },
    {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
      info: 0,
    },
  )

  const cvssBreakdown = findings
    .filter(finding => finding.cvss)
    .map(
      finding =>
        `${finding.title}: ${finding.cvss?.baseScore.toFixed(1)} ${finding.cvss?.baseSeverity.toUpperCase()}`,
    )

  return [
    `- Total findings: ${findings.length}`,
    `- Severity counts: critical=${severityCounts.critical}, high=${severityCounts.high}, medium=${severityCounts.medium}, low=${severityCounts.low}, info=${severityCounts.info}`,
    `- CVSS coverage: ${cvssBreakdown.length > 0 ? cvssBreakdown.join(' | ') : 'No CVSS metadata recorded'}`,
  ].join('\n')
}

export function generateMarkdownReport(
  manifest: EngagementManifest,
  entries: EvidenceEntry[],
): string {
  const findings = getFindings(entries)
  const notes = entries.filter(entry => entry.type === 'note')
  const artifacts = entries.filter(entry => entry.type === 'artifact')
  const guardrails = entries.filter(entry => entry.type === 'guardrail')
  const executionSteps = entries.filter(entry => entry.type === 'execution_step')
  const approvals = entries.filter(entry => entry.type === 'approval')
  const findingSummary = buildFindingSummary(findings)

  const findingSection =
    findings.length === 0
      ? 'No findings have been recorded yet.'
      : findings
          .map(
            finding =>
              `## [${finding.severity.toUpperCase()}] ${finding.title}

Severity: ${finding.severity.toUpperCase()}${finding.cvss ? ` | CVSS ${finding.cvss.baseScore.toFixed(1)} (${finding.cvss.baseSeverity.toUpperCase()})` : ''}
CVSS Vector: ${finding.cvss?.vector ?? 'Not recorded'}
CWE: ${formatList(finding.cweIds)}
OWASP: ${formatList(finding.owaspCategory)}
MITRE ATT&CK: ${formatMitreAttack(finding)}
Compliance: ${formatCompliance(finding)}
Evidence: ${finding.evidence}
${finding.recommendation ? `Recommendation: ${finding.recommendation}` : 'Recommendation: pending'}
`,
          )
          .join('\n')

  const notesSection =
    notes.length === 0
      ? '- None'
      : notes.map(note => `- ${note.note}`).join('\n')

  const artifactsSection =
    artifacts.length === 0
      ? '- None'
      : artifacts
          .map(artifact => `- ${artifact.label}: ${artifact.path}`)
          .join('\n')

  const guardrailSection =
    guardrails.length === 0
      ? '- None'
      : guardrails
          .map(
            entry =>
              `- ${entry.decision.action.toUpperCase()}: ${entry.plannedAction} (${entry.decision.reason})`,
          )
          .join('\n')

  const executionSection =
    executionSteps.length === 0
      ? '- None'
      : executionSteps
          .map(
            entry =>
              `- ${entry.agentType} | ${entry.status} | tools=${entry.totalToolUseCount ?? 0} | duration_ms=${entry.totalDurationMs ?? 0}${entry.summary ? ` | ${entry.summary}` : ''}`,
          )
          .join('\n')

  const approvalSection =
    approvals.length === 0
      ? '- None'
      : approvals
          .map(
            entry =>
              `- ${entry.status.toUpperCase()} (${entry.reviewId}): ${entry.plannedAction} (${entry.reason})`,
          )
          .join('\n')

  return `# Net-Runner Report

## Engagement

- Name: ${manifest.name}
- Workflow: ${manifest.workflowId}
- Targets: ${manifest.targets.length > 0 ? manifest.targets.join(', ') : 'Not recorded'}
- Authorization: ${manifest.authorization.status} by ${manifest.authorization.authorizedBy}
- Max impact: ${manifest.authorization.maxImpact}
- Scope: ${manifest.authorization.scopeSummary}

## Findings

${findingSummary}

## Detailed Findings

${findingSection}

## Notes

${notesSection}

## Artifacts

${artifactsSection}

## Guardrail Decisions

${guardrailSection}

## Execution Steps

${executionSection}

## Review Decisions

${approvalSection}
`
}

export async function writeMarkdownReport(
  cwd: string,
  manifest: EngagementManifest,
  entries: EvidenceEntry[],
  fileName = 'latest.md',
): Promise<string> {
  const reportsDir = getReportsDir(cwd)
  await mkdir(reportsDir, { recursive: true })
  const reportPath = join(reportsDir, fileName)
  await writeFile(reportPath, generateMarkdownReport(manifest, entries), 'utf8')
  return reportPath
}
