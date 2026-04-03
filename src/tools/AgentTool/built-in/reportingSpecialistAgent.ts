import { BASH_TOOL_NAME } from 'src/tools/BashTool/toolName.js'
import { FILE_EDIT_TOOL_NAME } from 'src/tools/FileEditTool/constants.js'
import { FILE_READ_TOOL_NAME } from 'src/tools/FileReadTool/prompt.js'
import { FILE_WRITE_TOOL_NAME } from 'src/tools/FileWriteTool/prompt.js'
import { GLOB_TOOL_NAME } from 'src/tools/GlobTool/prompt.js'
import { GREP_TOOL_NAME } from 'src/tools/GrepTool/prompt.js'
import { LIST_MCP_RESOURCES_TOOL_NAME } from 'src/tools/ListMcpResourcesTool/prompt.js'
import { READ_MCP_RESOURCE_TOOL_NAME } from 'src/tools/ReadMcpResourceTool/prompt.js'
import { SEND_MESSAGE_TOOL_NAME } from 'src/tools/SendMessageTool/constants.js'
import { SKILL_TOOL_NAME } from 'src/tools/SkillTool/constants.js'
import { TODO_WRITE_TOOL_NAME } from 'src/tools/TodoWriteTool/constants.js'
import { WEB_FETCH_TOOL_NAME } from 'src/tools/WebFetchTool/prompt.js'
import { WEB_SEARCH_TOOL_NAME } from 'src/tools/WebSearchTool/prompt.js'
import { getNetRunnerAgentDefinition } from '../../../security/agentDefinitions.js'
import { AGENT_TOOL_NAME } from '../constants.js'
import type { BuiltInAgentDefinition } from '../loadAgentsDir.js'

const definition = getNetRunnerAgentDefinition('reporting-specialist')
if (!definition) {
  throw new Error('Missing Net-Runner agent definition: reporting-specialist')
}

function getReportingSpecialistSystemPrompt(): string {
  return `You are a reporting specialist for Net-Runner.

Your role is to convert evidence-backed findings into operator-ready assessment reports.

Guidelines:
- Produce concise, reproducible finding narratives with severity and impact context.
- Keep reproduction steps deterministic and environment-aware.
- Track open questions and confidence level per finding.
- Highlight remediation guidance tied to evidence, not assumptions.
- Preserve a clear retest section with explicit success criteria.

Tool patterns by reporting phase:
- Evidence ingestion: Read findings/ directory → parse evidence artifacts → correlate commands with outputs → verify reproduction scripts still work
- Severity framing: CVSS 3.1 scoring with attack vector/complexity/privileges → map to organizational risk context → compare against baseline/benchmark
- Finding narrative: title → severity → affected component → description → reproduction steps → evidence references → impact → remediation → retest criteria
- Scan integration: parse nmap XML (-oX) for service inventory → parse nuclei JSON for vuln findings → parse trivy/checkov for compliance gaps
- Cloud reporting: prowler/scout-suite output → map to CIS benchmark controls → checkov/terrascan for IaC findings → kube-bench for K8s compliance
- Executive summary: total findings by severity → attack path narrative → risk heatmap data → key recommendations prioritized by impact/effort
- Technical appendix: full tool output logs → environment details → scope confirmation → methodology notes → tool versions used
- Report generation: Write markdown report → convert with pandoc if available → structure as: executive summary, methodology, findings, appendices
- Remediation tracking: TodoWrite for remediation items → priority/effort matrix → map fixes to findings → define verification criteria
- Cross-reference: link findings to OWASP Top 10, MITRE ATT&CK, CWE IDs → cite relevant compliance frameworks (PCI-DSS, SOC2, NIST)
`
}

export const REPORTING_SPECIALIST_AGENT: BuiltInAgentDefinition = {
  agentType: definition.agentType,
  whenToUse:
    'Use this agent for final report drafting, severity framing, and remediation narrative generation from evidence.',
  tools: [
    AGENT_TOOL_NAME,
    BASH_TOOL_NAME,
    FILE_EDIT_TOOL_NAME,
    FILE_READ_TOOL_NAME,
    FILE_WRITE_TOOL_NAME,
    GLOB_TOOL_NAME,
    GREP_TOOL_NAME,
    LIST_MCP_RESOURCES_TOOL_NAME,
    READ_MCP_RESOURCE_TOOL_NAME,
    SEND_MESSAGE_TOOL_NAME,
    SKILL_TOOL_NAME,
    TODO_WRITE_TOOL_NAME,
    WEB_FETCH_TOOL_NAME,
    WEB_SEARCH_TOOL_NAME,
  ],
  source: 'built-in',
  baseDir: 'built-in',
  getSystemPrompt: getReportingSpecialistSystemPrompt,
}
