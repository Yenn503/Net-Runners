<div align="center">

# Net-Runner 🥷

### Agentic Red-Team Assessment Framework

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![License](https://img.shields.io/badge/License-Educational%20Use-red?style=for-the-badge)](#license)

**12 Specialist Agents · 141 Red-Team Tools · 17 Capability Packs · 10 Pentest Skills · 6 Workflows**

*Speak naturally. Net-Runner handles the rest.*

**English** · [Español](README.es.md) · [Français](README.fr.md) · [中文](README.zh.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [हिन्दी](README.hi.md) · [Deutsch](README.de.md)

---

</div>

> ⚠️ **Warning**
> Use **only** on targets you are explicitly authorized to test. Net-Runner is designed for legal, authorized penetration testing and educational purposes.

## 🔍 What Is Net-Runner?

Net-Runner is a multi-agent security testing framework built for natural-language operation.

You connect an LLM, describe the target and goal in plain English, and Net-Runner brings the full engine into play:

- it detects assessment intent
- it creates a project-scoped `.netrunner/` runtime envelope
- it injects scope and workflow context into the session
- it routes work to specialist agents when needed
- it records evidence, memory, and reports as the assessment runs

For most users, the experience should feel simple:

```text
You describe the job.
Net-Runner plans, delegates, executes, remembers, and reports.
```

---

## ✨ Why People Use It

- **Natural language first** — no need to memorize commands to get started
- **One inline system** — agents, tools, evidence, memory, and reporting run in the same flow
- **Specialist agents** — recon, web, API, network, exploit, AD, retest, evidence, and reporting roles are already wired in
- **Persistent memory** — useful context can be recalled across sessions through RAG-backed retrieval
- **Evidence-first operation** — findings, execution steps, approvals, and reports stay tied to the same engagement

---

## 🚀 Start Here

### 1. Install and build

```bash
bun install
bun run build
```

### 2. Connect a model

Pick the provider you want and set the matching environment variables.

#### `ANTHROPIC_API_KEY`

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
node dist/cli.mjs
```

#### OpenAI

```bash
export OPENAI_API_KEY="sk-..."
export OPENAI_MODEL="gpt-4o"
node dist/cli.mjs
```

#### Google Gemini

```bash
export GEMINI_API_KEY="AIza..."
export GEMINI_MODEL="gemini-2.5-pro"
node dist/cli.mjs
```

#### Ollama

```bash
ollama serve
ollama pull llama3.1:8b
export OPENAI_BASE_URL="http://localhost:11434/v1"
export OPENAI_MODEL="llama3.1:8b"
node dist/cli.mjs
```

#### Any OpenAI-compatible API

```bash
export OPENAI_API_KEY="your-key"
export OPENAI_BASE_URL="https://your-provider.com/v1"
export OPENAI_MODEL="your-model-name"
node dist/cli.mjs
```

### 3. Speak naturally

Example:

```text
Assess https://target.example. Start with recon, find the main attack surface, validate the most likely issues, and keep evidence as you go.
```

Net-Runner will detect the target, start an engagement, inject the right context, and begin using its agentic runtime.

---

## ⚙️ How It Works

```text
You
  ↓
Main LLM session
  ↓
Net-Runner runtime context
  ↓
Specialist agents + tools + memory + evidence
  ↓
Structured assessment output
```

### What happens after one prompt

| Step | What Net-Runner does |
|------|----------------------|
| **1. Detect** | Recognizes assessment intent, target type, and likely workflow |
| **2. Bootstrap** | Creates `.netrunner/` state for the engagement if it does not already exist |
| **3. Inject** | Adds scope, impact boundary, workflow, and default skills into the live session |
| **4. Route** | Uses the main runtime and specialist agents together instead of making you micromanage commands |
| **5. Guard** | Applies internal guardrails to destructive, persistence-heavy, and out-of-scope actions |
| **6. Record** | Saves evidence, execution steps, findings, reviews, memory, and reports inside the same envelope |

### What the user experiences

You do not need to keep re-prompting the system with setup steps.

In the normal path, you can:

- give it a target
- tell it what kind of assessment to run
- ask it to continue, deepen, retest, summarize, or report
- let it use the environment, tools, memory, and agents already available to it

---

## 🕵️ Agents

Net-Runner keeps the original general agentic flow intact and adds specialist security roles on top.

| Agent | What it does |
|:------|:-------------|
| **Engagement Lead** | Orchestrates the assessment, chooses workflow phases, and routes work |
| **Recon Specialist** | Finds hosts, services, subdomains, technologies, and attack surface |
| **Web Testing Specialist** | Tests routes, parameters, auth flows, and web vulnerabilities |
| **API Testing Specialist** | Tests APIs, schemas, JWTs, IDOR paths, and state transitions |
| **Network Testing Specialist** | Handles service enumeration, network validation, and host-level testing |
| **Exploit Specialist** | Validates proof-of-impact in a controlled way |
| **Privilege Escalation Specialist** | Handles post-access escalation paths |
| **Lateral Movement Specialist** | Handles pivots, trust paths, and multi-host movement |
| **AD Specialist** | Handles Active Directory and Kerberos-focused testing |
| **Retest Specialist** | Reproduces findings and validates fixes |
| **Evidence Specialist** | Organizes artifacts and traceable evidence |
| **Reporting Specialist** | Turns evidence into a clean assessment report |

Core runtime agents such as `general-purpose`, `Explore`, `Plan`, and `verification` still remain part of the system.

---

## 🧱 Project Structure

Net-Runner keeps assessment state in a project-scoped `.netrunner/` directory.

```text
.netrunner/
├── engagement.json
├── run-state.json
├── evidence/
│   └── ledger.jsonl
├── findings/
├── reports/
├── artifacts/
├── memory/
│   ├── private.md
│   ├── team.md
│   └── agents/
└── instructions/
```

What those parts are for:

- `engagement.json` — current workflow, targets, impact boundary, restrictions
- `run-state.json` — execution steps and pending reviews
- `evidence/` — append-only evidence ledger
- `findings/` — structured finding outputs
- `reports/` — generated assessment reports
- `artifacts/` — collected outputs and supporting files
- `memory/` — persistent operator, team, and agent memory
- `instructions/` — project-scoped runtime instructions

---

## 💬 Example Prompts

```text
Assess https://target.example and map the external attack surface.
```

```text
Continue the current engagement, focus on authentication weaknesses, and capture evidence for anything real.
```

```text
Escalate to intrusive validation and verify whether the identified issue is actually exploitable.
```

```text
Generate a report from the current evidence and summarize the highest-risk findings first.
```

---

## 📚 Documentation

Keep the main README for the operator path. Use the docs for deeper technical detail.

- [Workflow Overview](docs/workflows/overview.md)
- [Service Surfaces](docs/capabilities/service-surfaces.md)
- `docs/` for implementation detail, capability mapping, and deeper runtime notes

---

## 📜 License

This repository is for **educational use** and **authorized security testing** only.

---

<div align="center">

*Built for operators who think in targets and outcomes, not flags and setup rituals.*

</div>
