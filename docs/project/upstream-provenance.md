# Upstream Provenance

The immediate public upstream base for this repository is [OpenClaude](https://github.com/Gitlawb/openclaude).

That is the right public description of the codebase: Net-Runner builds on OpenClaude as the runtime foundation, then changes that base into a red-team assessment framework.

## What this project adds

The main contribution is not the existence of the upstream. It is the change made on top of it.

This repository adds:

- security-focused workflows
- specialist agent ownership for different assessment phases
- project-scoped engagement state under `.netrunner/`
- evidence capture, findings, and reporting paths
- a skills-first runtime model for the main assessment loop

## How to describe it

The simplest accurate description is:

- built on the public OpenClaude fork
- adapted into a red-team assessment framework
- focused on workflow design, runtime control, evidence capture, and reporting

## Industry context

If the final report needs wider context, keep it short and dated.

One relevant event was the accidental Claude Code source exposure on March 31, 2026, reported by [Axios](https://www.axios.com/2026/03/31/anthropic-leaked-source-code-ai). A later GitHub takedown issue was reported by [Ars Technica](https://arstechnica.com/ai/2026/04/anthropic-says-its-leak-focused-dmca-effort-unintentionally-hit-legit-github-forks/).

That belongs in the dissertation as background on how quickly agent runtimes were changing. It should not be the main public framing of this repository.
