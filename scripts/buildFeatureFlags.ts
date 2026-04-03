export const NET_RUNNER_FEATURE_FLAGS: Record<string, boolean> = {
  VOICE_MODE: false,
  PROACTIVE: false,
  KAIROS: false,
  BRIDGE_MODE: false,
  DAEMON: false,
  AGENT_TRIGGERS: false,
  MONITOR_TOOL: false,
  ABLATION_BASELINE: false,
  DUMP_SYSTEM_PROMPT: false,
  CACHED_MICROCOMPACT: false,
  COORDINATOR_MODE: true,
  CONTEXT_COLLAPSE: false,
  COMMIT_ATTRIBUTION: false,
  TEAMMEM: true,
  UDS_INBOX: false,
  BG_SESSIONS: false,
  AWAY_SUMMARY: false,
  TRANSCRIPT_CLASSIFIER: false,
  WEB_BROWSER_TOOL: false,
  MESSAGE_ACTIONS: false,
  BUDDY: false,
  CHICAGO_MCP: false,
  COWORKER_TYPE_TELEMETRY: false,
}

export function resolveFeatureFlag(
  name: string,
  flags: Record<string, boolean> = NET_RUNNER_FEATURE_FLAGS,
): boolean {
  return flags[name] === true
}

export function createBundleFeatureShim(
  flags: Record<string, boolean> = NET_RUNNER_FEATURE_FLAGS,
): string {
  return `const flags = ${JSON.stringify(flags)};\nexport function feature(name) { return flags[name] === true; }`
}
