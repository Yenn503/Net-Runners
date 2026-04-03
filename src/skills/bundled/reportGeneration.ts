import { getNetRunnerSkillDefinition } from '../../security/skillDefinitions.js'
import { registerBundledSkill } from '../bundledSkills.js'

export function registerReportGenerationSkill(): void {
  const definition = getNetRunnerSkillDefinition('report-generation')
  if (!definition) {
    throw new Error('Missing Net-Runner skill definition: report-generation')
  }

  registerBundledSkill({
    name: definition.name,
    description: definition.description,
    allowedTools: ['Read', 'Write', 'Edit', 'Grep', 'Glob', 'TodoWrite'],
    argumentHint: '[report scope or audience]',
    async getPromptForCommand(args) {
      return [
        {
          type: 'text',
          text: `# Report Generation

Transform the current Net-Runner evidence chain into an operator-ready assessment report.

Report context:
${args || 'No explicit report audience was supplied. Default to a technical assessment report with a concise executive summary.'}

Instructions:
1. Treat the evidence ledger as the source of truth and use findings or artifacts only when they are linked from that ledger.
2. Preserve the distinction between validated facts, analyst interpretation, and unresolved questions.
3. For each finding, include severity, CVSS, CWE, OWASP, MITRE ATT&CK, compliance references, reproduction, impact, remediation, and retest criteria.
4. Summarize the engagement methodology, scope, and key attack-path outcomes without overstating risk.
5. Produce report-ready markdown that can be handed to the reporting specialist or written directly to the report path.

Output format:
- Executive summary
- Methodology and scope
- Findings with full classification and evidence references
- Remediation priorities
- Retest criteria and open questions`,
        },
      ]
    },
  })
}
