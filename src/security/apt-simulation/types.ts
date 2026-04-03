// ---------------------------------------------------------------------------
// APT Simulation – Core Type Definitions
// ---------------------------------------------------------------------------
// These types underpin the entire APT simulation subsystem.  They are kept in
// a single file so every other module can import from one place.
// ---------------------------------------------------------------------------

import type { CapabilityPackName, SecurityWorkflow } from '../workflows.js'
import type { NetRunnerAgentType } from '../agentTypes.js'
import type { NetRunnerSkillName } from '../skillDefinitions.js'
import type { ImpactLevel } from '../guardrails.js'

// ── MITRE ATT&CK Tactic IDs (Enterprise matrix) ────────────────────────────

export type MitreTacticId =
  | 'TA0043' // Reconnaissance
  | 'TA0042' // Resource Development
  | 'TA0001' // Initial Access
  | 'TA0002' // Execution
  | 'TA0003' // Persistence
  | 'TA0004' // Privilege Escalation
  | 'TA0005' // Defense Evasion
  | 'TA0006' // Credential Access
  | 'TA0007' // Discovery
  | 'TA0008' // Lateral Movement
  | 'TA0009' // Collection
  | 'TA0011' // Command and Control
  | 'TA0010' // Exfiltration
  | 'TA0040' // Impact

export const MITRE_TACTIC_LABELS: Record<MitreTacticId, string> = {
  TA0043: 'Reconnaissance',
  TA0042: 'Resource Development',
  TA0001: 'Initial Access',
  TA0002: 'Execution',
  TA0003: 'Persistence',
  TA0004: 'Privilege Escalation',
  TA0005: 'Defense Evasion',
  TA0006: 'Credential Access',
  TA0007: 'Discovery',
  TA0008: 'Lateral Movement',
  TA0009: 'Collection',
  TA0011: 'Command and Control',
  TA0010: 'Exfiltration',
  TA0040: 'Impact',
}

// ── MITRE ATT&CK Technique Reference ────────────────────────────────────────

export type MitreTechnique = {
  /** e.g. "T1566" or "T1566.001" for a sub-technique */
  id: string
  /** Human-readable name, e.g. "Phishing: Spearphishing Attachment" */
  name: string
  /** Which tactic(s) this technique maps to */
  tactics: MitreTacticId[]
  /** MITRE ATT&CK permalink */
  url: string
}

// ── Nation-State / Attribution ───────────────────────────────────────────────

export type Attribution =
  | 'russia'
  | 'china'
  | 'north-korea'
  | 'iran'
  | 'unknown'
  | 'cybercrime'

// ── Industry Sector ─────────────────────────────────────────────────────────

export type IndustrySector =
  | 'government'
  | 'telecommunications'
  | 'critical-infrastructure'
  | 'defense'
  | 'healthcare'
  | 'financial-services'
  | 'technology'
  | 'manufacturing'
  | 'education'
  | 'media'
  | 'energy'
  | 'retail'
  | 'legal'

// ── APT Group Definition ────────────────────────────────────────────────────

export type AptGroup = {
  /** Internal lookup key, e.g. "apt29" */
  id: string
  /** Primary display name */
  name: string
  /** All known aliases across vendors */
  aliases: string[]
  /** Nation-state or criminal attribution */
  attribution: Attribution
  /** Short description of the group's objectives */
  description: string
  /** Industries this group is most associated with */
  targetIndustries: IndustrySector[]
  /** MITRE ATT&CK technique IDs this group is known to use */
  techniques: string[]
  /** Source URLs for TTP mapping and advisories */
  sources: AptSource[]
  /** When this profile was last reviewed/updated (ISO date) */
  lastReviewed: string
}

export type AptSource = {
  label: string
  url: string
  /** "mitre" | "cisa" | "microsoft" | "vendor" | "ncsc" | "mandiant" */
  type: 'mitre' | 'cisa' | 'microsoft' | 'vendor' | 'ncsc' | 'mandiant' | 'other'
}

// ── Attack Chain ────────────────────────────────────────────────────────────
// An ordered sequence of phases that models how a specific APT group
// typically progresses through an intrusion.

export type AttackChainPhase = {
  /** Kill-chain phase order (1-based) */
  order: number
  /** MITRE tactic this phase maps to */
  tacticId: MitreTacticId
  /** Human label for this phase */
  label: string
  /** What the APT typically does in this phase */
  description: string
  /** MITRE ATT&CK technique IDs used in this phase */
  techniques: string[]
  /** Net-Runner tools relevant to simulating this phase */
  suggestedTools: string[]
  /** Net-Runner specialist agents best suited for this phase */
  suggestedAgents: NetRunnerAgentType[]
}

export type AptAttackChain = {
  /** Links to the APT group id */
  aptGroupId: string
  /** Human-readable chain name */
  name: string
  /** Description of the overall attack pattern */
  description: string
  /** Ordered phases */
  phases: AttackChainPhase[]
  /** Which industries this chain is most relevant for */
  relevantIndustries: IndustrySector[]
  /** Recommended max impact level for simulation */
  recommendedImpact: ImpactLevel
}

// ── Industry Threat Profile ─────────────────────────────────────────────────

export type IndustryThreatProfile = {
  sector: IndustrySector
  label: string
  description: string
  /** APT group IDs most relevant to this industry, priority ordered */
  primaryThreats: string[]
  /** Additional APT group IDs to consider */
  secondaryThreats: string[]
  /** Common initial-access vectors seen in this industry */
  commonInitialAccess: string[]
  /** Key assets threat actors target in this industry */
  highValueTargets: string[]
}

// ── APT Simulation Workflow ─────────────────────────────────────────────────
// Extends the base SecurityWorkflow concept with APT-specific metadata.

export type AptSimulationWorkflow = {
  /** Workflow ID used for selection */
  id: string
  /** Display label */
  label: string
  /** Description */
  description: string
  /** Which APT group this workflow simulates */
  aptGroupId: string
  /** Industry context this simulation is designed for */
  targetIndustry: IndustrySector
  /** The attack chain to follow */
  attackChainId: string
  /** Capability packs to activate */
  capabilityPacks: CapabilityPackName[]
  /** Skills to load */
  defaultSkills: NetRunnerSkillName[]
  /** Agents to deploy */
  specialistAgents: NetRunnerAgentType[]
  /** Recommended impact level */
  recommendedImpact: ImpactLevel
  /** Simulation guidance injected into the LLM prompt */
  simulationGuidance: string
}

// ── Lookup / Registry ───────────────────────────────────────────────────────

export type AptSimulationRegistry = {
  groups: AptGroup[]
  attackChains: AptAttackChain[]
  industryProfiles: IndustryThreatProfile[]
  workflows: AptSimulationWorkflow[]
}
