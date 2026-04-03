<div align="center">

# Net-Runner 🥷

### 에이전트 기반 레드팀 평가 프레임워크

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![License](https://img.shields.io/badge/라이선스-교육용-red?style=for-the-badge)](#라이선스)

**12개 전문 에이전트 &middot; 141개 레드팀 도구 &middot; 17개 기능 팩 &middot; 10개 펜테스트 스킬 &middot; 6개 워크플로우**

*자연스럽게 말하세요. Net-Runner가 나머지를 처리합니다.*

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [中文](README.zh.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · **한국어** · [हिन्दी](README.hi.md) · [Deutsch](README.de.md)

---

</div>

> ⚠️ **경고**
> 명시적으로 허가받은 대상에**만** 사용하세요. Net-Runner는 합법적이고 승인된 침투 테스트 및 교육 목적으로 설계되었습니다.

> 참고: 이 번역 README는 간단한 개요입니다. 운영자를 위한 전체 최신 기준 문서는 [README.md](README.md)와 `docs/`에 있습니다.

## 🔍 Net-Runner란?

Net-Runner는 자연어 지시를 구조화된 보안 평가로 변환하는 멀티 에이전트 레드팀 프레임워크입니다. **참여 리더**와 대화하면, 정찰, 익스플로잇, 보고서 작성 등 모든 작업을 전문 에이전트에게 위임합니다.

<details>
<summary><strong>왜 Net-Runner인가?</strong></summary>

- **자연어** — 플래그나 구문을 외울 필요 없이 테스트하고 싶은 것을 설명하면 됩니다
- **멀티 에이전트 오케스트레이션** — 병렬 전문 에이전트, 각각 깊은 도구 지식 보유
- **내장 가드레일** — 범위 가드 체크포인트가 경계 밖 행동을 방지
- **증거 우선** — 모든 행동이 기록되고, 모든 발견이 추적 가능
- **영구 메모리** — 세션 간 RAG 기반 검색, 에이전트별 및 프로젝트별
- **141개 도구 연결** — `nmap`부터 `BloodHound`, `Ghidra`까지 실행 준비 완료

</details>

---

## 🚀 빠른 시작

```bash
bun install
bun run build
node dist/cli.mjs
```

자연어로 지시를 입력하세요:

```
https://target.example 평가 — 정찰부터 시작하고, 웹 취약점 테스트 진행.
```

Net-Runner는 의도를 자동으로 감지하고 안전한 기본값으로 인게이지먼트를 초기화한 뒤 작업을 시작합니다.

---

## 🤖 LLM 프로바이더 연결

Net-Runner는 여러 LLM 프로바이더를 지원합니다. 시작 전에 환경 변수를 설정하세요.

### `ANTHROPIC_API_KEY` 사용

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
node dist/cli.mjs
```

### OpenAI

```bash
export OPENAI_API_KEY="sk-..."
export OPENAI_MODEL="gpt-4o"          # 선택사항
node dist/cli.mjs
```

### Google Gemini

```bash
export GEMINI_API_KEY="AIza..."
export GEMINI_MODEL="gemini-2.5-pro"   # 선택사항
node dist/cli.mjs
```

### Ollama (로컬)

```bash
ollama serve
ollama pull llama3.1:8b
export OPENAI_BASE_URL="http://localhost:11434/v1"
export OPENAI_MODEL="llama3.1:8b"
node dist/cli.mjs
```

### OpenAI 호환 API

LM Studio, vLLM, Together AI, Groq, Fireworks 또는 호환되는 모든 엔드포인트에서 작동:

```bash
export OPENAI_API_KEY="your-key"
export OPENAI_BASE_URL="https://your-provider.com/v1"
export OPENAI_MODEL="your-model-name"
node dist/cli.mjs
```

---

## ⚙️ 작동 방식

| 단계 | 실행 내용 |
|------|---------|
| **1. 탐지** | 평가 의도 분석, 대상 식별 |
| **2. 초기화** | `.netrunner/`를 안전한 기본값으로 생성 |
| **3. 주입** | 범위, 인가, 제한을 각 모델 턴에 첨부 |
| **4. 위임** | 워크플로우와 발견에 따라 전문 에이전트에 작업 배정 |
| **5. 보호** | 고영향 행동 전 범위 가드 체크포인트 |
| **6. 기록** | 증거와 발견을 실시간으로 기록 |
| **7. 기억** | 에이전트별, 프로젝트별 지식을 미래 세션을 위해 영구 저장 |
| **8. 보고** | 증거 기반 구조화된 평가 출력 생성 |

---

## 🕵️ 전문 에이전트

| 에이전트 | 전문 분야 |
|:---------|:---------|
| **참여 리더** | 오케스트레이션, 워크플로우 라우팅, 스킬 조정 |
| **정찰 전문가** | 네트워크 발견, DNS, OSINT, 서브도메인 열거 |
| **웹 테스트** | XSS, SQLi, SSRF, 인증 우회, CMS 스캔 |
| **API 테스트** | GraphQL, JWT, IDOR, 대량 할당, 스키마 분석 |
| **네트워크 테스트** | SMB, SSH, FTP, 서비스 익스플로잇, 트래픽 분석 |
| **익스플로잇 전문가** | 페이로드 생성, PoC 실행, 통제된 익스플로잇 |
| **권한 상승** | SUID, 커널 익스플로잇, 토큰 남용, 컨테이너 탈출 |
| **측면 이동** | 자격 증명 재사용, 피벗팅, 포트 포워딩 |
| **AD 전문가** | LDAP/Kerberos, 신뢰 남용, ADCS, BloodHound |
| **리테스트 전문가** | 발견 재현, 수정 검증 |
| **증거 전문가** | 아티팩트 큐레이션, 보관 체인, 포렌식 |
| **보고 전문가** | 심각도 분류, 경영진 요약, 수정 가이드 |

---

## 📋 워크플로우

| 워크플로우 | 대상 환경 | 주요 팩 |
|:---------|:---------|:-------|
| `web-app-testing` | 웹 애플리케이션 | 정찰, 웹, 익스플로잇 |
| `api-testing` | REST / GraphQL / SOAP | 정찰, API, 익스플로잇 |
| `lab-target-testing` | HTB / 랩 / 내부 | 네트워크, 익스플로잇, AD, 권한상승 |
| `ctf-mode` | CTF 챌린지 | 정찰, 웹, 바이너리, 익스플로잇 |
| `ad-testing` | Active Directory | AD, 네트워크, 데이터베이스, 권한상승 |
| `wifi-testing` | 802.11 무선 네트워크 | WiFi, 네트워크, 익스플로잇 |

---

## 🛠️ 도구 커버리지

**17개 기능 팩에 걸친 141개 도구** — `nmap`, `nuclei`, `sqlmap`, `msfconsole`, `bloodhound`, `ghidra`, `volatility3`, `trivy`, `aircrack-ng` 등 포함.

카테고리별 전체 목록은 [메인 README](README.md)를 참조하세요.

---

## 📜 라이선스

이 저장소는 **교육 목적** 및 **승인된 보안 테스트**에만 사용할 수 있습니다.

---

<div align="center">

*플래그가 아닌 목표로 생각하는 운영자를 위해 구축되었습니다.*

</div>
