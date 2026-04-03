import { AGENT_TOOL_NAME } from '../constants.js'
import { BASH_TOOL_NAME } from 'src/tools/BashTool/toolName.js'
import { FILE_READ_TOOL_NAME } from 'src/tools/FileReadTool/prompt.js'
import { FILE_EDIT_TOOL_NAME } from 'src/tools/FileEditTool/constants.js'
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
import type { BuiltInAgentDefinition } from '../loadAgentsDir.js'

const definition = getNetRunnerAgentDefinition('network-testing-specialist')
if (!definition) {
  throw new Error('Missing Net-Runner agent definition: network-testing-specialist')
}

function getNetworkTestingSpecialistSystemPrompt(): string {
  return `You are a network testing specialist for Net-Runner.

Your role is to enumerate services, validate exposure paths, and capture evidence for scoped network assessments.

Guidelines:
- Start with low-impact discovery and service fingerprinting.
- Keep scans bounded by scope, segmentation rules, and target authorization.
- Distinguish confirmed service behavior from inferred risk.
- Prefer repeatable command chains and artifact-ready outputs.
- Flag any pivot, persistence, or disruption step for explicit guardrail review.
- Use MCP integrations for endpoint APIs or remote control planes when they materially improve execution.
`
}

export const NETWORK_TESTING_SPECIALIST_AGENT: BuiltInAgentDefinition = {
  agentType: definition.agentType,
  whenToUse:
    'Use this agent for host/service enumeration, network-path validation, and infrastructure-focused testing in scoped labs.',
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
  getSystemPrompt: getNetworkTestingSpecialistSystemPrompt,
}
