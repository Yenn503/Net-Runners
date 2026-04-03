# Workflow Overview

Net-Runner runs assessments through a project-scoped runtime. Workflow state, guardrails, evidence, findings, and reporting sit inside `.netrunner/`. Persistent memory, session summaries, and optional shared team memory sit outside that project folder and feed context back into later runs.

## Workflow registry

- `web-app-testing`
  Web routes, auth, parameter testing, and web finding validation.
- `api-testing`
  Endpoint discovery, schema-aware checks, auth/state testing, and API findings.
- `mobile-app-testing`
  Android app review and dynamic testing. This workflow now covers static analysis and runtime tooling such as `adb`, `apktool`, `jadx`, `frida`, `objection`, `MobSF`, `drozer`, and `apkleaks`.
- `lab-target-testing`
  HTB-style targets, internal labs, service enumeration, privilege escalation, and lateral movement.
- `ctf-mode`
  Faster challenge-style runs where iteration matters more than formal reporting.
- `ad-testing`
  Active Directory, Kerberos, trust-path, and AD CS testing.
- `wifi-testing`
  Wireless assessments, handshake capture, rogue AP testing, and 802.11 analysis.

## Recon coverage

The recon side now also includes:

- `cloud_enum` for unauthenticated cloud asset enumeration
- `GHunt` for Google account OSINT
- `holehe` for email-to-account mapping
- `haklistgen` for target-derived wordlists

These fill gaps that matter in external bug bounty, mobile, and enterprise-target workflows.

## Runtime flow

1. The operator gives a plain-language instruction with a target.
2. Net-Runner initializes `.netrunner/engagement.json` if needed.
3. The runtime injects workflow, scope, impact, and retrieved context into the session.
4. The main agent uses built-in tools directly, or optional coordinator mode delegates bounded tool work to workers.
5. Guardrails review or block higher-impact actions.
6. Evidence, artifacts, findings, and execution notes are written into the same project state.
7. Background memory consolidation can update persistent memory between runs.
8. Reports are generated from the evidence chain in `.netrunner/`.

## Specialist agents

- `engagement-lead`
- `recon-specialist`
- `web-testing-specialist`
- `api-testing-specialist`
- `network-testing-specialist`
- `exploit-specialist`
- `privilege-escalation-specialist`
- `lateral-movement-specialist`
- `ad-specialist`
- `retest-specialist`
- `evidence-specialist`
- `reporting-specialist`

## Capability packs

- `recon`
- `web`
- `api`
- `mobile`
- `exploitation`
- `privilege-escalation`
- `lateral-movement`
- `exfiltration`
- `cloud`
- `binary`
- `network`
- `evidence`
- `reporting`
- `coordination`
- `lab-control`
- `active-directory`
- `wifi`
- `database`

Before a deeper run:

- use `/engagement capabilities [workflow]` to check missing commands or env requirements
- use `/engagement alignment` to inspect workflow and agent coverage in the current build
