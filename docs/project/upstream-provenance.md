# Upstream Provenance

This document explains what `Net-Runner` is built on, how that ties back to the final-year project, and how that relationship should be described properly.

## Public upstream base

The immediate public upstream base for this repository is [OpenClaude](https://github.com/Gitlawb/openclaude).

That should be the main public description of provenance:

- `Net-Runner` builds on OpenClaude as the agentic CLI foundation
- the project then changes that runtime into a red-team focused system
- the contribution is in the architecture, security workflows, specialist agents, evidence handling, and research direction

## Why this matters academically

For the final-year project, the main point is not simply that the runtime came from somewhere else. Most serious software projects build on existing systems.

The key point is what has been changed and why:

- the runtime has been repurposed away from a general coding assistant shape
- the framework now supports explicit security workflows
- specialist-agent ownership has been added for different phases of testing
- the project argues for skills-first execution instead of defaulting to MCP for everything
- evidence, memory, and reporting are tied into one engagement model

That is where the project contribution actually sits.

## Leak context

The wider AI tooling landscape moved very quickly during this project. One relevant industry event was the accidental exposure of Claude Code source through an npm packaging error on **March 31, 2026**, reported by [Axios](https://www.axios.com/2026/03/31/anthropic-leaked-source-code-ai), and the later GitHub takedown confusion reported by [Ars Technica](https://arstechnica.com/ai/2026/04/anthropic-says-its-leak-focused-dmca-effort-unintentionally-hit-legit-github-forks/).

That event can be mentioned in the dissertation as industry context because it:

- showed how quickly agent runtime internals were becoming visible and discussable
- accelerated public analysis of harness design, tool calling, and architecture choices
- reinforced the need to evaluate which parts of modern agent runtimes are actually worth carrying into new systems

But it should not be the main public framing of this repository.

## Recommended wording

The strongest way to describe the project is:

- built on the public OpenClaude fork
- informed by rapid changes in the AI agent ecosystem
- aligned with current research into skills-first orchestration, tool-calling quality, and runtime design
- adapted into a red-team assessment framework that fits the original project aim more closely than earlier iterations

## Wording to avoid

Avoid making the project sound like it depends on the leak for legitimacy.

Avoid public wording such as:

- "built from the Claude Code leak"
- "the leak made the project possible"
- "using the leak was essential"

That weakens the academic framing and distracts from the actual contribution.

## Better framing for the report

The report can say that:

1. the project began with a modular AI red-team research aim
2. the AI agent ecosystem changed significantly during development
3. public agent runtimes and public discussion around runtime design made it possible to reassess assumptions more sharply
4. the project therefore converged on a skills-first, red-team focused runtime built on OpenClaude as the most suitable public implementation base

That keeps the story honest, grounded, and easy to defend.
