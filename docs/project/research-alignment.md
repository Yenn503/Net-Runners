# Research Alignment

This repository is the current implementation of the final-year project.

The proposal set out a modular red-team framework with tool debloating, containerised execution, a reasoning layer, and MCP-compatible code execution where that helped. The current repository keeps the same research aim, but the implementation has shifted toward a skills-first runtime with direct tool use and selective MCP integrations.

## What stayed the same

- the project is still about modular red-team workflow design
- the runtime still keeps evidence and reporting inside the same system
- specialist roles still matter for different phases of an assessment
- the work is still focused on reducing bloat and improving control over execution

## What changed

The main change is where framework behavior lives.

Earlier work leaned harder on protocol and integration layers. The current build keeps MCP where it is useful, but most of the actual assessment method now sits in skills, runtime structure, and direct tool execution.

That means:

- skills hold the method
- built-in execution surfaces do most of the work
- specialist agents are used for scoped tasks
- MCP is kept for external systems and typed integration boundaries

## Why the implementation changed

The AI tooling space changed quickly during development. Public runtimes improved, tool calling got better, and it became easier to test what should stay inside the main runtime and what should move out into separate integrations.

So the implementation changed with the evidence instead of staying fixed to the first technical assumption. The research question did not change. The implementation got sharper.

## How this fits the proposal

The proposal outline still maps to the current repository:

- modular architecture is still central
- tool debloating is still part of the design
- runtime control and reasoning still matter
- evidence capture and reporting are still built into the workflow

What changed is the practical answer to the execution layer. The current answer is not "more MCP everywhere." It is "use MCP where it helps, and keep the rest of the framework simple."

## How to describe it in the report

Use a plain description:

1. The project started as a modular red-team framework with language-model support.
2. Early design work gave more weight to MCP-compatible execution and platform layers.
3. Later implementation work showed that a skills-first runtime with direct tool use was a better fit for the main assessment loop.
4. The final build keeps the original aim, but changes the implementation to match what worked best in practice.

## Scope and ethics

Keep the project framed as:

- for authorized targets only
- for lab, educational, and approved security testing use
- focused on workflow design, runtime control, evidence handling, and reporting

That is the clearest academic framing for the repository and the final report.
