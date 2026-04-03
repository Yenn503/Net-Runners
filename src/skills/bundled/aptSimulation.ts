import { registerBundledSkill } from '../bundledSkills.js'
import {
  listAvailableSimulations,
  formatAptSimulationPrompt,
  findAptGroup,
  findIndustryProfile,
  getSimulationContextForIndustry,
} from '../../security/apt-simulation/index.js'
import type { IndustrySector } from '../../security/apt-simulation/types.js'

const INDUSTRY_KEYWORDS: Record<string, IndustrySector> = {
  government: 'government',
  diplomatic: 'government',
  policy: 'government',
  ngo: 'government',
  telecom: 'telecommunications',
  telecommunications: 'telecommunications',
  isp: 'telecommunications',
  'critical infrastructure': 'critical-infrastructure',
  ics: 'critical-infrastructure',
  ot: 'critical-infrastructure',
  scada: 'critical-infrastructure',
  utilities: 'critical-infrastructure',
  energy: 'energy',
  oil: 'energy',
  gas: 'energy',
  nuclear: 'energy',
  defense: 'defense',
  aerospace: 'defense',
  maritime: 'defense',
  military: 'defense',
  healthcare: 'healthcare',
  hospital: 'healthcare',
  pharma: 'healthcare',
  biotech: 'healthcare',
  medical: 'healthcare',
  finance: 'financial-services',
  financial: 'financial-services',
  banking: 'financial-services',
  bank: 'financial-services',
  crypto: 'financial-services',
  swift: 'financial-services',
  technology: 'technology',
  cloud: 'technology',
  saas: 'technology',
  'it services': 'technology',
  software: 'technology',
  manufacturing: 'manufacturing',
  industrial: 'manufacturing',
  engineering: 'manufacturing',
  electronics: 'manufacturing',
  education: 'education',
  university: 'education',
  academic: 'education',
  research: 'education',
  media: 'media',
  journalist: 'media',
  'civil society': 'media',
  retail: 'retail',
  'e-commerce': 'retail',
  legal: 'legal',
  'law firm': 'legal',
}

function detectIndustryFromArgs(args: string): IndustrySector | null {
  const lower = args.toLowerCase()
  for (const [keyword, sector] of Object.entries(INDUSTRY_KEYWORDS)) {
    if (lower.includes(keyword)) {
      return sector
    }
  }
  return null
}

function detectAptGroupFromArgs(args: string): string | null {
  const lower = args.toLowerCase()
  const patterns: Array<[RegExp, string]> = [
    [/\bapt[-\s]?29\b|cozy\s*bear|midnight\s*blizzard|nobelium/i, 'apt29'],
    [/\bapt[-\s]?28\b|fancy\s*bear|forest\s*blizzard|sofacy/i, 'apt28'],
    [/\bturla\b|venomous\s*bear|secret\s*blizzard|snake/i, 'turla'],
    [/\bsandworm\b|apt[-\s]?44\b|electrum|iridium/i, 'sandworm'],
    [/\bapt[-\s]?41\b|brass\s*typhoon|wicked\s*panda|winnti/i, 'apt41'],
    [/\bvolt\s*typhoon\b|bronze\s*silhouette/i, 'volt-typhoon'],
    [/\bsalt\s*typhoon\b/i, 'salt-typhoon'],
    [/\bsilk\s*typhoon\b|hafnium/i, 'silk-typhoon'],
    [/\bapt[-\s]?38\b|beagleboyz|bluenoroff/i, 'apt38'],
    [/\blazarus\b|hidden\s*cobra/i, 'lazarus'],
    [/\bkimsuky\b|velvet\s*chollima|emerald\s*sleet/i, 'kimsuky'],
    [/\bscattered\s*spider\b|octo\s*tempest|unc3944/i, 'scattered-spider'],
    [/\bfin[-\s]?7\b|carbanak\s*group|sangria/i, 'fin7'],
    [/\boilrig\b|apt[-\s]?34\b|hazel\s*sandstorm/i, 'oilrig'],
    [/\bmuddywater\b|mango\s*sandstorm|mercury/i, 'muddywater'],
    [/\bmagic\s*hound\b|apt[-\s]?35\b|charming\s*kitten|mint\s*sandstorm/i, 'magic-hound'],
    [/\bapt[-\s]?33\b|peach\s*sandstorm|elfin/i, 'apt33'],
    [/\bapt[-\s]?40\b|leviathan|gingham\s*typhoon/i, 'apt40'],
    [/\bandariel\b|onyx\s*sleet/i, 'andariel'],
    [/\blapsus\b/i, 'lapsus'],
  ]

  for (const [pattern, id] of patterns) {
    if (pattern.test(lower)) {
      return id
    }
  }
  return null
}

export function registerAptSimulationSkill(): void {
  registerBundledSkill({
    name: 'apt-simulation',
    description:
      'Launch an APT threat simulation based on a specific threat actor or target industry. Simulates real-world attack chains mapped to MITRE ATT&CK techniques.',
    allowedTools: [
      'Read', 'Write', 'Edit', 'Grep', 'Glob', 'TodoWrite',
      'Bash', 'Agent',
    ],
    argumentHint: '[APT group name or target industry, e.g. "APT29 against government" or "financial services"]',
    async getPromptForCommand(args) {
      const aptGroupId = detectAptGroupFromArgs(args || '')
      const industry = detectIndustryFromArgs(args || '')

      // Case 1: Specific APT group requested
      if (aptGroupId) {
        const prompt = formatAptSimulationPrompt(
          `apt-sim-${aptGroupId}-${industry || 'government'}`,
        )

        if (prompt) {
          return [{ type: 'text', text: prompt }]
        }

        // Fallback: group exists but no exact workflow match
        const group = findAptGroup(aptGroupId)
        if (group) {
          return [{
            type: 'text',
            text: `# APT Simulation — ${group.name}

You are simulating ${group.name} (${group.aliases.join(', ')}) tradecraft.
Attribution: ${group.attribution}
Target industries: ${group.targetIndustries.join(', ')}
MITRE ATT&CK techniques: ${group.techniques.length} mapped

${group.description}

Sources:
${group.sources.map(s => `- ${s.label}: ${s.url}`).join('\n')}

Follow the group's known attack patterns. Document every phase with evidence. Check scope and impact rules before each action.

Key techniques to simulate: ${group.techniques.slice(0, 15).join(', ')}`,
          }]
        }
      }

      // Case 2: Industry specified but no specific group
      if (industry) {
        const context = getSimulationContextForIndustry(industry)
        if (context) {
          const workflowList = context.workflows.length > 0
            ? context.workflows.map(w => `- **${w.label}** (${w.id}): ${w.description}`).join('\n')
            : 'No pre-built workflows for this industry. Use the primary threat groups below as reference.'

          const primaryList = context.primaryGroups
            .map(g => g ? `- **${g.name}** (${g.aliases.slice(0, 3).join(', ')}): ${g.description.slice(0, 120)}...` : '')
            .filter(Boolean)
            .join('\n')

          return [{
            type: 'text',
            text: `# APT Simulation — ${context.profile.label}

${context.profile.description}

## Available Simulation Workflows
${workflowList}

## Primary Threat Actors
${primaryList}

## Common Initial Access Vectors
${context.profile.commonInitialAccess.map(v => `- ${v}`).join('\n')}

## High-Value Targets in This Industry
${context.profile.highValueTargets.map(t => `- ${t}`).join('\n')}

Select a specific simulation workflow or threat actor to begin. If the operator specifies a group, load that group's attack chain and follow it phase by phase.`,
          }]
        }
      }

      // Case 3: No specific input — list available simulations
      const sims = listAvailableSimulations()
      const simList = sims.map(s => `- **${s.label}** — \`${s.id}\` (${s.targetIndustry})`).join('\n')

      return [{
        type: 'text',
        text: `# APT Simulation

Select an APT simulation workflow or specify a target industry to see relevant threat actors.

## Available Simulations
${simList}

## Supported Industries
government, telecommunications, critical-infrastructure, energy, defense, healthcare, financial-services, technology, manufacturing, education, media, retail, legal

Usage: \`/apt-simulation APT29 against government\` or \`/apt-simulation financial services\``,
      }]
    },
  })
}
