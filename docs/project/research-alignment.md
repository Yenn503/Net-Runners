# Research Alignment

This document explains how the current `Net-Runner` build lines up with the original proposal, the later progress/risk document, and the implementation direction the project has now reached.

## What the project is now

`Net-Runner` is the current implementation artefact for a final-year university project focused on AI-assisted red-team workflows.

The project direction is now:

- modular
- skills-first
- evidence-aware
- specialist-agent driven
- selective with MCP instead of depending on it by default

That still fits the original goal. The point was never "use as much MCP as possible". The point was to build a stronger AI red-team framework with better reasoning, less bloat, and cleaner execution.

The implementation base is the public [OpenClaude](https://github.com/Gitlawb/openclaude) fork, and that is the correct public upstream to reference when describing the project.

## Why the project changed more than once

The AI tooling space moved quickly while I was building this, so the implementation changed as the research and experimentation got sharper.

That change path is:

1. **Original proposal phase**
   The proposal focused on a modular AI-driven red-team framework with containerised execution and stronger MCP-compatible code execution.
2. **Interim platform phase**
   Later work explored building on top of another agent platform so the project could benefit from existing orchestration, memory, and extension systems rather than rebuilding everything from scratch.
3. **Current Net-Runner phase**
   The current implementation keeps the same core research idea but aligns it around skills, direct tool execution, runtime structure, and selective MCP use where it is genuinely useful, using OpenClaude as the public runtime base.

This is not a contradiction. It is the project getting more accurate about what actually works best in practice.

## Industry context

The project also sits inside a fast-moving AI tooling landscape. That matters because architectural choices were being reassessed in real time across the industry.

One relevant event was the accidental Claude Code source exposure on **March 31, 2026**, reported by [Axios](https://www.axios.com/2026/03/31/anthropic-leaked-source-code-ai), and the later cleanup/takedown confusion reported by [Ars Technica](https://arstechnica.com/ai/2026/04/anthropic-says-its-leak-focused-dmca-effort-unintentionally-hit-legit-github-forks/). That event matters as dissertation context because it accelerated discussion around agent harnesses, runtime design, and what parts of those systems were actually worth reusing or rethinking.

That event should be treated as context, not as the main claim of project value.

## What stayed the same

Across the proposal, the change/risk write-up, and the current repository, the same core themes stayed consistent:

- reduce architectural bloat
- improve maintainability
- keep workflows modular
- support red-team style specialist roles
- capture evidence and reporting cleanly
- evaluate how architecture affects agent reliability

Those are the stable research foundations of the project.

## What changed technically

The biggest change is architectural emphasis.

### Earlier emphasis

- more MCP-centric thinking
- more focus on wrapped tool surfaces
- more platform-building around protocol layers

### Current emphasis

- skills-first workflow encoding
- direct use of built-in shell, file, web, and code execution surfaces
- specialist agents for scoped work
- MCP for external integrations and typed boundaries only when it adds real value

This change actually brings the project closer to the original intention of being modular and less bloated.

## How to explain the pivot in the final report

The cleanest way to explain it is:

1. The original proposal identified real problems in AI red-team frameworks: tool bloat, weak modularity, reasoning drift, and execution overhead.
2. Implementation work and further research showed that large MCP-heavy estates do not automatically improve agent quality.
3. Newer agent runtimes showed that reusable skills plus strong execution surfaces can solve a large part of the same problem with less architectural drag.
4. The project therefore refined its implementation approach while keeping the same core research question.

That turns the project evolution into a strength instead of a weakness, because it shows the build adapted to evidence instead of freezing around an earlier assumption.

## Skills-first position

The current `Net-Runner` position is:

- skills should hold methodology
- direct tool execution should handle most assessment work
- specialist agents should be used when task boundaries are clear
- MCP should stay available, but it should not be the default expression of framework behavior

This is the best-fit version of the original idea in the current AI tooling landscape.

## Scope and ethics

The project should continue to be framed as:

- for authorized targets only
- for lab, educational, and approved testing environments
- focused on runtime design, evidence handling, and workflow orchestration
- not intended as an uncontrolled offensive platform

That scope keeps the project academically defensible.

## Documentation rule

The repository docs should reflect the project honestly:

- this is a research prototype
- this version aligns with the original idea more cleanly than the earlier pivots
- the architecture changed because the evidence changed
- the current runtime is skills-first, not MCP-first
- the public upstream base is OpenClaude, while wider Claude Code events belong in the research context rather than the repo headline
