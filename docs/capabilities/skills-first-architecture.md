# Skills-First Architecture

Net-Runner uses a skills-first runtime.

That means the framework does not treat MCP as the default place to put core behavior. Most assessment method lives in skills, workflow definitions, and the built-in execution surfaces already available in the runtime.

## Runtime parts

The main pieces are:

- workflow definitions that decide which capability packs, skills, and specialist agents belong to a run
- skills that hold the actual method for planning, recon, validation, evidence capture, and reporting
- built-in shell, file, web, and code execution surfaces for the work itself
- retrieval-backed memory surfaces such as relevant-memory recall, agent memory, session summaries, and background consolidation
- an optional coordinator path where the main runtime delegates bounded tool work to workers
- specialist agents for bounded tasks such as recon, API testing, exploitation, retesting, and reporting
- MCP integrations for cases where an external system or typed interface is genuinely useful

## Default execution path

In the normal path:

1. the operator gives Net-Runner a target and a goal
2. the runtime selects or initializes the workflow
3. the active skills shape how the assessment is run
4. the runtime uses built-in tools directly, or the coordinator delegates bounded tool work to workers
5. specialist agents are used when a task has a clear boundary
6. evidence, notes, findings, and retrieved context are written back into the project runtime and persistent memory surfaces that support the next run

## Where MCP fits

MCP is still supported, but it is not the first answer to every problem.

Use MCP when:

- the framework needs to talk to an external platform
- a typed service boundary makes the workflow safer or easier to repeat
- the environment needs explicit orchestration or control outside the main runtime

Do not add MCP just to wrap work that the main runtime can already do cleanly with skills and direct tool use.

## Practical rule for new capabilities

When adding a new capability:

1. check whether the workflow can be expressed with an existing skill and tool surface
2. if not, check whether direct code execution is enough
3. only add MCP when an external integration or typed boundary is actually needed

That rule keeps the framework smaller, easier to reason about, and closer to the way the assessment loop is already working.

## Why it matters in this project

The proposal discussed MCP-compatible execution because it was a sensible design direction at the time. The current repository narrows that down into a more practical rule.

Net-Runner now treats MCP as one integration layer among others, not as the default expression of the whole framework. That is the main architectural shift in the current build.

Use `/engagement capabilities` to check workflow readiness before a run.
Use `/engagement alignment` to inspect agent-to-capability coverage in the current build.
