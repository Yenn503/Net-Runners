import { getNetRunnerSkillDefinition } from '../../security/skillDefinitions.js'
import { registerBundledSkill } from '../bundledSkills.js'

export function registerVulnAssessmentSkill(): void {
  const definition = getNetRunnerSkillDefinition('vuln-assessment')
  if (!definition) {
    throw new Error('Missing Net-Runner skill definition: vuln-assessment')
  }

  registerBundledSkill({
    name: definition.name,
    description: definition.description,
    allowedTools: ['Read', 'Write', 'Edit', 'Grep', 'Glob', 'Bash', 'WebFetch', 'WebSearch', 'TodoWrite'],
    argumentHint: '[target area or hypothesis]',
    async getPromptForCommand(args) {
      return [
        {
          type: 'text',
          text: `# Vulnerability Assessment

Run a structured vulnerability assessment for the current Net-Runner engagement.

Assessment focus:
${args || 'No explicit focus area was supplied. Start from the current fingerprint, recon plan, and collected evidence.'}

Instructions:
1. Start from confirmed attack surface and prioritize the most likely high-value weaknesses first.
2. Prefer reproducible validation over speculative claims. Re-run with tighter scope before escalating a weak signal into a finding.
3. Use direct tool execution and short helper scripts before reaching for MCP-backed integrations.
4. For every candidate finding, capture the reproduction path, prerequisites, observed impact, and confidence.
5. Add classification details for validated findings: CWE, CVSS 3.1, MITRE ATT&CK, OWASP Top 10, and relevant compliance mappings.
6. Separate validated findings, disproved hypotheses, and open questions.

Output format:
- Validated findings
- False positives / disproved paths
- Open follow-up checks
- Recommended specialist handoff if exploitation or retest is needed`,
        },
      ]
    },
  })
}
