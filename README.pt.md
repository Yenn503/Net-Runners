<div align="center">

# Net-Runner 🥷

### Framework de Avalia&ccedil;&atilde;o Red Team com Agentes Aut&ocirc;nomos

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![License](https://img.shields.io/badge/Licen%C3%A7a-Uso%20Educacional-red?style=for-the-badge)](#licen%C3%A7a)

**12 Agentes Especialistas &middot; 141 Ferramentas Red Team &middot; 17 Pacotes de Capacidade &middot; 10 Habilidades de Pentest &middot; 6 Workflows**

*Fale naturalmente. O Net-Runner cuida do resto.*

[English](README.md) · [Espa&ntilde;ol](README.es.md) · [Fran&ccedil;ais](README.fr.md) · [中文](README.zh.md) · [العربية](README.ar.md) · **Portugu&ecirc;s** · [Русский](README.ru.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [हिन्दी](README.hi.md) · [Deutsch](README.de.md)

---

</div>

> ⚠️ **Aviso**
> Use **apenas** em alvos para os quais voc&ecirc; tem autoriza&ccedil;&atilde;o expl&iacute;cita. O Net-Runner foi projetado para testes de penetra&ccedil;&atilde;o legais, autorizados e para fins educacionais.

> Nota: Este README traduzido é uma visão geral resumida. A referência completa e atualizada para operadores está em [README.md](README.md) e `docs/`.

## 🔍 O que &eacute; o Net-Runner?

Net-Runner &eacute; um framework multi-agente de red team que transforma instru&ccedil;&otilde;es em linguagem natural em avalia&ccedil;&otilde;es de seguran&ccedil;a estruturadas. Voc&ecirc; fala com o **L&iacute;der de Engajamento** &mdash; ele delega reconhecimento, explora&ccedil;&atilde;o, relat&oacute;rios e tudo mais para agentes especialistas dedicados.

<details>
<summary><strong>Por que Net-Runner?</strong></summary>

- **Linguagem natural** &mdash; sem memorizar flags ou sintaxe; descreva o que quer testar
- **Orquestra&ccedil;&atilde;o multi-agente** &mdash; agentes especialistas em paralelo, cada um com conhecimento profundo de ferramentas
- **Guardrails integrados** &mdash; checkpoints de escopo impedem a&ccedil;&otilde;es fora dos limites
- **Evid&ecirc;ncia primeiro** &mdash; cada a&ccedil;&atilde;o &eacute; registrada, cada descoberta &eacute; rastre&aacute;vel
- **Mem&oacute;ria persistente** &mdash; recupera&ccedil;&atilde;o RAG entre sess&otilde;es, por agente e por projeto
- **141 ferramentas conectadas** &mdash; de `nmap` a `BloodHound` at&eacute; `Ghidra`, prontas para executar

</details>

---

## 🚀 In&iacute;cio R&aacute;pido

```bash
bun install
bun run build
node dist/cli.mjs
```

Digite uma instru&ccedil;&atilde;o em linguagem natural:

```
Avaliar https://alvo.exemplo — come&ccedil;ar com reconhecimento, depois testar vulnerabilidades web.
```

---

## 🤖 Conectar um Provedor LLM

Net-Runner funciona com m&uacute;ltiplos provedores de LLM. Configure as vari&aacute;veis de ambiente antes de iniciar.

### Com `ANTHROPIC_API_KEY`

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
node dist/cli.mjs
```

### OpenAI

```bash
export OPENAI_API_KEY="sk-..."
export OPENAI_MODEL="gpt-4o"          # opcional
node dist/cli.mjs
```

### Google Gemini

```bash
export GEMINI_API_KEY="AIza..."
export GEMINI_MODEL="gemini-2.5-pro"   # opcional
node dist/cli.mjs
```

### Ollama (Local)

```bash
ollama serve
ollama pull llama3.1:8b
export OPENAI_BASE_URL="http://localhost:11434/v1"
export OPENAI_MODEL="llama3.1:8b"
node dist/cli.mjs
```

### Qualquer API compat&iacute;vel com OpenAI

Funciona com LM Studio, vLLM, Together AI, Groq, Fireworks ou qualquer endpoint compat&iacute;vel:

```bash
export OPENAI_API_KEY="sua-chave"
export OPENAI_BASE_URL="https://seu-provedor.com/v1"
export OPENAI_MODEL="nome-do-modelo"
node dist/cli.mjs
```

---

## ⚙️ Como Funciona

| Etapa | O que Acontece |
|-------|---------------|
| **1. Detectar** | Analisar inten&ccedil;&atilde;o de avalia&ccedil;&atilde;o, identificar alvos |
| **2. Inicializar** | Criar envelope `.netrunner/` com padr&otilde;es seguros |
| **3. Injetar** | Anexar escopo, autoriza&ccedil;&atilde;o e restri&ccedil;&otilde;es a cada turno |
| **4. Delegar** | Direcionar trabalho aos agentes especialistas |
| **5. Proteger** | Checkpoint de escopo antes de a&ccedil;&otilde;es de alto impacto |
| **6. Registrar** | Registrar evid&ecirc;ncias e descobertas em tempo real |
| **7. Lembrar** | Persistir conhecimento por agente e projeto para sess&otilde;es futuras |
| **8. Relatar** | Gerar sa&iacute;da de avalia&ccedil;&atilde;o estruturada baseada em evid&ecirc;ncias |

---

## 🕵️ Agentes Especialistas

| Agente | Foco |
|:-------|:-----|
| **L&iacute;der de Engajamento** | Orquestra&ccedil;&atilde;o, roteamento de workflows, coordena&ccedil;&atilde;o |
| **Especialista em Reconhecimento** | Descoberta de rede, DNS, OSINT, enumera&ccedil;&atilde;o de subdom&iacute;nios |
| **Teste Web** | XSS, SQLi, SSRF, bypass de autentica&ccedil;&atilde;o, varredura CMS |
| **Teste API** | GraphQL, JWT, IDOR, atribui&ccedil;&atilde;o em massa, an&aacute;lise de esquemas |
| **Teste de Rede** | SMB, SSH, FTP, explora&ccedil;&atilde;o de servi&ccedil;os, an&aacute;lise de tr&aacute;fego |
| **Especialista em Explora&ccedil;&atilde;o** | Gera&ccedil;&atilde;o de payloads, execu&ccedil;&atilde;o de PoC controlada |
| **Escala&ccedil;&atilde;o de Privil&eacute;gios** | SUID, exploits de kernel, abuso de tokens, escape de cont&ecirc;ineres |
| **Movimento Lateral** | Reutiliza&ccedil;&atilde;o de credenciais, pivoteamento, redirecionamento de portas |
| **Especialista AD** | LDAP/Kerberos, abuso de confian&ccedil;a, ADCS, BloodHound |
| **Especialista em Reteste** | Reproduzir descobertas, validar remedia&ccedil;&atilde;o |
| **Especialista em Evid&ecirc;ncias** | Cura&ccedil;&atilde;o de artefatos, cadeia de cust&oacute;dia, forense |
| **Especialista em Relat&oacute;rios** | Classifica&ccedil;&atilde;o de severidade, resumo executivo, remedia&ccedil;&atilde;o |

---

## 📋 Workflows

| Workflow | Ambiente Alvo | Pacotes Chave |
|:---------|:-------------|:-------------|
| `web-app-testing` | Aplica&ccedil;&otilde;es web | recon, web, explora&ccedil;&atilde;o |
| `api-testing` | REST / GraphQL / SOAP | recon, api, explora&ccedil;&atilde;o |
| `lab-target-testing` | HTB / Labs / Interno | rede, explora&ccedil;&atilde;o, AD, privesc |
| `ctf-mode` | Desafios CTF | recon, web, bin&aacute;rio, explora&ccedil;&atilde;o |
| `ad-testing` | Active Directory | AD, rede, banco de dados, privesc |
| `wifi-testing` | Redes 802.11 | wifi, rede, explora&ccedil;&atilde;o |

---

## 🛠️ Cobertura de Ferramentas

**141 ferramentas em 17 pacotes de capacidade** &mdash; incluindo `nmap`, `nuclei`, `sqlmap`, `msfconsole`, `bloodhound`, `ghidra`, `volatility3`, `trivy`, `aircrack-ng` e muito mais.

Para a lista completa por categoria, consulte o [README principal](README.md).

---

## 📜 Licen&ccedil;a

Este reposit&oacute;rio &eacute; para **uso educacional** e **testes de seguran&ccedil;a autorizados** apenas.

---

<div align="center">

*Constru&iacute;do para operadores que pensam em objetivos, n&atilde;o em flags.*

</div>
