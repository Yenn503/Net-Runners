import { getBuiltInAgents } from '../src/tools/AgentTool/builtInAgents.ts'
import { AGENT_TOOL_NAME } from '../src/tools/AgentTool/constants.ts'
import { SEND_MESSAGE_TOOL_NAME } from '../src/tools/SendMessageTool/constants.ts'

type CoreAgentType =
  | 'general-purpose'
  | 'statusline-setup'
  | 'engagement-lead'
  | 'Explore'
  | 'Plan'
  | 'verification'

const requiredCoreAgents: CoreAgentType[] = [
  'general-purpose',
  'statusline-setup',
  'engagement-lead',
  'Explore',
  'Plan',
  'verification',
]

const readOnlyCoreAgents: Array<'Explore' | 'Plan' | 'verification'> = [
  'Explore',
  'Plan',
  'verification',
]

const builtInByType = new Map(getBuiltInAgents().map(agent => [agent.agentType, agent]))
const errors: string[] = []

for (const agentType of requiredCoreAgents) {
  if (!builtInByType.has(agentType)) {
    errors.push(`Missing required core runtime agent: ${agentType}`)
  }
}

for (const agentType of readOnlyCoreAgents) {
  const agent = builtInByType.get(agentType)
  if (!agent) continue
  const disallowed = new Set(agent.disallowedTools ?? [])
  if (!disallowed.has('Edit')) {
    errors.push(`${agentType} must disallow Edit for read-only behavior.`)
  }
  if (!disallowed.has('Write')) {
    errors.push(`${agentType} must disallow Write for read-only behavior.`)
  }
}

const engagementLead = builtInByType.get('engagement-lead')
if (!engagementLead) {
  errors.push('Missing engagement-lead agent.')
} else {
  const tools = new Set(engagementLead.tools ?? [])
  if (!tools.has(AGENT_TOOL_NAME)) {
    errors.push(`engagement-lead must include ${AGENT_TOOL_NAME}.`)
  }
  if (!tools.has(SEND_MESSAGE_TOOL_NAME)) {
    errors.push(`engagement-lead must include ${SEND_MESSAGE_TOOL_NAME}.`)
  }
  if (engagementLead.memory !== 'project') {
    errors.push('engagement-lead must use project-scoped memory.')
  }
}

console.log('Net-Runner Core Agent Runtime Validation')
console.log(`status: ${errors.length === 0 ? 'PASS' : 'FAIL'}`)
console.log('required core agents:')
for (const agentType of requiredCoreAgents) {
  console.log(`- ${agentType}`)
}

if (errors.length > 0) {
  console.log('\nerrors:')
  for (const error of errors) {
    console.log(`- ${error}`)
  }
  process.exit(1)
}
