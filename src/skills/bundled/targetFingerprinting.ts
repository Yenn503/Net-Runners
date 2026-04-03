import { getNetRunnerSkillDefinition } from '../../security/skillDefinitions.js'
import { registerBundledSkill } from '../bundledSkills.js'

export function registerTargetFingerprintingSkill(): void {
  const definition = getNetRunnerSkillDefinition('target-fingerprinting')
  if (!definition) {
    throw new Error('Missing Net-Runner skill definition: target-fingerprinting')
  }

  registerBundledSkill({
    name: definition.name,
    description: definition.description,
    allowedTools: ['Read', 'Write', 'Edit', 'Bash', 'WebFetch', 'WebSearch', 'TodoWrite'],
    argumentHint: '[target or recon evidence]',
    async getPromptForCommand(args) {
      return [
        {
          type: 'text',
          text: `# Target Fingerprinting

Build a structured target fingerprint for the current Net-Runner engagement.

Target context:
${args || 'No explicit target details were supplied. Start from current engagement context and recon artifacts.'}

Instructions:
1. Consolidate confirmed facts about the target: hostnames, IPs, ports, protocols, web server, frameworks, CMS, runtime, auth stack, data stores, cloud platform, WAF/CDN, and exposed services.
2. Prefer direct shell, file, and web evidence over assumptions. If a fact is inferred rather than confirmed, label it clearly.
3. Produce a structured fingerprint that downstream specialists can reuse without redoing the same reconnaissance.
4. Highlight the likely specialist routes this fingerprint implies: web, api, network, AD, exploitation, post-exploitation, reporting.
5. Save the result as a reusable artifact inside the engagement evidence directory when practical.

Output format:
- Confirmed fingerprint summary
- Unconfirmed hypotheses
- Suggested next specialist and rationale
- Artifact path if a machine-readable fingerprint was written

Favor skill-guided analysis and direct tool execution. Use MCP only when it provides a concrete integration advantage.`,
        },
      ]
    },
  })
}
