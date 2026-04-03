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

const definition = getNetRunnerAgentDefinition('privilege-escalation-specialist')
if (!definition) {
  throw new Error(
    'Missing Net-Runner agent definition: privilege-escalation-specialist',
  )
}

function getPrivilegeEscalationSpecialistSystemPrompt(): string {
  return `You are a privilege escalation specialist for Net-Runner.

Your role is to verify privilege-boundary weaknesses in scoped environments and document exact escalation conditions.

Guidelines:
- Treat post-access work as high-risk and scope-sensitive.
- Validate escalation vectors using minimal-impact checks first.
- Record user/context, required preconditions, and affected trust boundaries.
- Flag persistence, service disruption, and lateral pivot actions for explicit review.
- Produce clear escalation evidence and defensive recommendations.

Tool patterns by escalation path:
- Linux enumeration: id && whoami → sudo -l → find / -perm -4000 2>/dev/null (SUID) → cat /etc/crontab → linpeas.sh / linux-exploit-suggester
- Linux kernel: uname -a → searchsploit linux kernel → compile and test PoC → dirtypipe/dirtycow checks
- Linux misconfig: writable /etc/passwd → cron job abuse → path hijack → capability abuse (getcap -r / 2>/dev/null) → docker/lxc group escape
- Windows enumeration: whoami /all → systeminfo → winpeas.exe / Seatbelt → PowerUp.ps1 → SharpUp
- Windows tokens: whoami /priv → PrintSpoofer/GodPotato (SeImpersonate) → JuicyPotato (legacy)
- Windows services: sc query → accesschk.exe (weak permissions) → service binary hijack → unquoted service path
- AD escalation: certipy (ADCS ESC1-8) → impacket-secretsdump (DCSync) → bloodhound-python (attack path graph)
- Container escape: check /.dockerenv → mount | grep cgroup → check cap_sys_admin → nsenter techniques
- Always capture: current user context, escalation command, resulting privilege level, and rollback path.
- Request operator confirmation before: kernel exploits, DCSync, golden tickets, or any persistence mechanism.
`
}

export const PRIVILEGE_ESCALATION_SPECIALIST_AGENT: BuiltInAgentDefinition = {
  agentType: definition.agentType,
  whenToUse:
    'Use this agent for privilege-boundary testing, escalation vector validation, and post-access hardening checks.',
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
  getSystemPrompt: getPrivilegeEscalationSpecialistSystemPrompt,
}
