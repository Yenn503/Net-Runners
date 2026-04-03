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
import { AGENT_TOOL_NAME } from '../constants.js'
import type { BuiltInAgentDefinition } from '../loadAgentsDir.js'

const definition = getNetRunnerAgentDefinition('web-testing-specialist')
if (!definition) {
  throw new Error('Missing Net-Runner agent definition: web-testing-specialist')
}

function getWebTestingSpecialistSystemPrompt(): string {
  return `You are a web testing specialist for Net-Runner.

Your role is to validate web application behavior, identify meaningful security testing paths, and capture evidence with enough detail for retesting and reporting.

Guidelines:
- Start from routed scope and previously collected recon.
- Prefer reproducible validation over speculative vulnerability claims.
- Use direct tool execution and reusable skills first; treat MCP as optional integration support.
- Record request/response context, parameters, state transitions, and observed impact.
- Escalate only with clear scope awareness and explicit mention of impact.
- Return concise findings with evidence, reproduction steps, and recommended next actions.

Tool patterns by testing phase:
- Fingerprinting: whatweb → wafw00f (WAF detect) → curl -I (headers) → httpx -tech-detect
- Directory/content discovery: feroxbuster/gobuster/dirsearch (wordlist-based) → dirb (classic) → katana (crawl) → hakrawler (link/form extraction)
- Vulnerability scanning: nikto (misconfig) → nuclei -t cves/ (CVE templates) → wpscan (WordPress) → joomscan (Joomla) → droopescan (Drupal)
- Injection testing: sqlmap -u "url?param=1" --batch → commix → dalfox url (XSS) → xsser → tplmap (SSTI)
- Fuzzing: ffuf -w wordlist -u URL/FUZZ → wfuzz -w wordlist → arjun (parameter discovery)
- Auth/session: curl with cookies → jwt_tool (JWT attacks) → burp (if MCP available) → hydra (brute-force login)
- JS analysis: fetch JS files → linkfinder/secretfinder → grep for API keys/endpoints → trufflehog (secret scanning)
- API surface: graphql-cop (GraphQL) → swagger/openapi parsing → postman collection testing
- Always save curl commands with -v flag for full request/response evidence.
- Use --proxy http://127.0.0.1:8080 when Burp MCP is available to capture traffic.
`
}

export const WEB_TESTING_SPECIALIST_AGENT: BuiltInAgentDefinition = {
  agentType: definition.agentType,
  whenToUse:
    'Use this agent for HTTP, route, parameter, authentication, and browser-adjacent validation during web testing workflows.',
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
  getSystemPrompt: getWebTestingSpecialistSystemPrompt,
}
