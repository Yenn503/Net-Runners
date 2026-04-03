// ---------------------------------------------------------------------------
// APT Simulation — Public API
// ---------------------------------------------------------------------------
// Single entry point for the APT simulation subsystem.  All other modules
// in the engine should import from this file rather than reaching into
// individual submodules.
// ---------------------------------------------------------------------------

// ── Re-exports: types ───────────────────────────────────────────────────
export type {
  MitreTacticId,
  MitreTechnique,
  Attribution,
  IndustrySector,
  AptGroup,
  AptSource,
  AttackChainPhase,
  AptAttackChain,
  IndustryThreatProfile,
  AptSimulationWorkflow,
  AptSimulationRegistry,
} from './types.js'

export { MITRE_TACTIC_LABELS } from './types.js'

// ── Re-exports: techniques ──────────────────────────────────────────────
export {
  TECHNIQUE_LIBRARY,
  getTechnique,
  getTechniquesByTactic,
  resolveTechniqueIds,
} from './techniques.js'

// ── Re-exports: APT groups ──────────────────────────────────────────────
export {
  APT_GROUPS,
  findAptGroup,
  findAptGroupsByAttribution,
  findAptGroupsByIndustry,
} from './aptGroups.js'

// ── Re-exports: industry mapping ────────────────────────────────────────
export {
  INDUSTRY_PROFILES,
  findIndustryProfile,
  getIndustriesForAptGroup,
} from './industryMapping.js'

// ── Re-exports: attack chains ───────────────────────────────────────────
export {
  ATTACK_CHAINS,
  findAttackChain,
  findAttackChainsByIndustry,
  getAttackChainForSimulation,
} from './attackChains.js'

// ── Re-exports: simulation workflows ────────────────────────────────────
export {
  APT_SIMULATION_WORKFLOWS,
  findAptSimulationWorkflow,
  findWorkflowsByIndustry,
  findWorkflowsByAptGroup,
  listAvailableSimulations,
} from './aptWorkflows.js'

// ── Composite lookups ───────────────────────────────────────────────────

import type { AptSimulationRegistry, IndustrySector } from './types.js'
import { APT_GROUPS } from './aptGroups.js'
import { ATTACK_CHAINS } from './attackChains.js'
import { INDUSTRY_PROFILES } from './industryMapping.js'
import { APT_SIMULATION_WORKFLOWS } from './aptWorkflows.js'
import { findAptGroup } from './aptGroups.js'
import { findAttackChain } from './attackChains.js'
import { findIndustryProfile } from './industryMapping.js'
import { findWorkflowsByIndustry } from './aptWorkflows.js'

/**
 * Returns the full registry — useful for serialization, debugging, or
 * passing the entire dataset to an LLM prompt.
 */
export function getAptSimulationRegistry(): AptSimulationRegistry {
  return {
    groups: APT_GROUPS,
    attackChains: ATTACK_CHAINS,
    industryProfiles: INDUSTRY_PROFILES,
    workflows: APT_SIMULATION_WORKFLOWS,
  }
}

/**
 * Given an industry sector, returns a ready-to-use simulation context:
 * the industry profile, relevant APT groups, available attack chains,
 * and matching simulation workflows.
 */
export function getSimulationContextForIndustry(sector: IndustrySector) {
  const profile = findIndustryProfile(sector)
  if (!profile) {
    return null
  }

  const primaryGroups = profile.primaryThreats
    .map(id => findAptGroup(id))
    .filter(Boolean)

  const secondaryGroups = profile.secondaryThreats
    .map(id => findAptGroup(id))
    .filter(Boolean)

  const chains = profile.primaryThreats
    .map(id => findAttackChain(id))
    .filter(Boolean)

  const workflows = findWorkflowsByIndustry(sector)

  return {
    profile,
    primaryGroups,
    secondaryGroups,
    chains,
    workflows,
  }
}

/**
 * Builds a prompt-injectable summary for a specific APT simulation.
 * Used by the engagement system to inject APT context into the LLM.
 */
export function formatAptSimulationPrompt(workflowId: string): string | null {
  const workflow = APT_SIMULATION_WORKFLOWS.find(w => w.id === workflowId)
  if (!workflow) {
    return null
  }

  const group = findAptGroup(workflow.aptGroupId)
  if (!group) {
    return null
  }

  const chain = findAttackChain(workflow.aptGroupId)

  const lines: string[] = [
    '[Net-Runner APT Simulation Context]',
    `simulation_workflow=${workflow.id}`,
    `apt_group=${group.name} (${group.aliases.join(', ')})`,
    `attribution=${group.attribution}`,
    `target_industry=${workflow.targetIndustry}`,
    `recommended_impact=${workflow.recommendedImpact}`,
    `technique_count=${group.techniques.length}`,
    `sources=${group.sources.map(s => s.url).join(' | ')}`,
    '',
    workflow.simulationGuidance,
  ]

  if (chain) {
    lines.push('')
    lines.push('ATTACK CHAIN PHASES:')
    for (const phase of chain.phases) {
      const agents = phase.suggestedAgents.join(', ')
      const tools = phase.suggestedTools.length > 0
        ? phase.suggestedTools.join(', ')
        : 'use built-in tools'
      lines.push(
        `  ${phase.order}. [${phase.tacticId}] ${phase.label} — ${phase.description} (agents: ${agents}; tools: ${tools})`,
      )
    }
  }

  lines.push('[/Net-Runner APT Simulation Context]')

  return lines.join('\n')
}

/**
 * Quick stats for display / README purposes.
 */
export function getAptSimulationStats() {
  const uniqueIndustries = new Set(
    INDUSTRY_PROFILES.map(p => p.sector),
  )
  const uniqueTechniques = new Set(
    APT_GROUPS.flatMap(g => g.techniques),
  )

  return {
    totalGroups: APT_GROUPS.length,
    totalAttackChains: ATTACK_CHAINS.length,
    totalWorkflows: APT_SIMULATION_WORKFLOWS.length,
    totalIndustries: uniqueIndustries.size,
    totalUniqueTechniques: uniqueTechniques.size,
    groupsByAttribution: {
      russia: APT_GROUPS.filter(g => g.attribution === 'russia').length,
      china: APT_GROUPS.filter(g => g.attribution === 'china').length,
      northKorea: APT_GROUPS.filter(g => g.attribution === 'north-korea').length,
      iran: APT_GROUPS.filter(g => g.attribution === 'iran').length,
      cybercrime: APT_GROUPS.filter(g => g.attribution === 'cybercrime').length,
      other: APT_GROUPS.filter(g => g.attribution === 'unknown').length,
    },
  }
}
