# Coordinator Mode - Known Issue

**Status:** Experimental / Not Fully Implemented
**File:** `/Users/testinglaptop/CascadeProjects/Net-Runner/net-runner-release/src/tools/AgentTool/builtInAgents.ts:96-102`

## Issue
The `workerAgent.js` module referenced in `builtInAgents.ts` does NOT exist:

```typescript
if (isEnvTruthy(process.env.NETRUNNER_COORDINATOR_MODE)) {
  const { getCoordinatorAgents } =
    require('../../coordinator/workerAgent.js')  // ← This file doesn't exist
  return getCoordinatorAgents()
}
```

## Current State
- `/src/coordinator/` directory only contains `coordinatorMode.ts`
- No `workerAgent.js` or `workerAgent.ts` file exists
- Dynamic require will fail at runtime if `NETRUNNER_COORDINATOR_MODE=1` is set
- Feature is feature-flagged to prevent accidental activation

## Impact
- Coordinator mode cannot be used (will crash if enabled)
- Main Net-Runner functionality unaffected (flag is off by default)
- Listed as "experimental" in documentation

## Resolution Path
Either:
1. Implement the missing `workerAgent.js` module with `getCoordinatorAgents()` function
2. Remove coordinator mode references entirely from codebase
3. Keep as-is with experimental warning (current approach)

**Noted:** 2026-04-04
**Source:** User asked about why coordinator mode was "experimental" - investigation revealed missing module
