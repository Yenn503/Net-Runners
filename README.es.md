<div align="center">

# Net-Runner 🥷

### Marco de Evaluaci&oacute;n Red Team con Agentes Aut&oacute;nomos

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![License](https://img.shields.io/badge/Licencia-Uso%20Educativo-red?style=for-the-badge)](#licencia)

**12 Agentes Especialistas &middot; 141 Herramientas Red Team &middot; 17 Paquetes de Capacidad &middot; 10 Habilidades de Pentest &middot; 6 Flujos de Trabajo**

*Habla naturalmente. Net-Runner se encarga del resto.*

[English](README.md) · **Espa&ntilde;ol** · [Fran&ccedil;ais](README.fr.md) · [中文](README.zh.md) · [العربية](README.ar.md) · [Portugu&ecirc;s](README.pt.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [हिन्दी](README.hi.md) · [Deutsch](README.de.md)

---

</div>

> ⚠️ **Advertencia**
> Usar **&uacute;nicamente** en objetivos para los que tienes autorizaci&oacute;n expl&iacute;cita. Net-Runner est&aacute; dise&ntilde;ado para pruebas de penetraci&oacute;n legales, autorizadas y con fines educativos.

## 🔍 &iquest;Qu&eacute; es Net-Runner?

Net-Runner es un marco multi-agente de red team que convierte instrucciones en lenguaje natural en evaluaciones de seguridad estructuradas. Hablas con el **L&iacute;der de Compromiso** &mdash; &eacute;l delega reconocimiento, explotaci&oacute;n, reporteo y todo lo dem&aacute;s a agentes especialistas dedicados.

<details>
<summary><strong>&iquest;Por qu&eacute; Net-Runner?</strong></summary>

- **Lenguaje natural** &mdash; sin memorizar flags ni sintaxis; describe lo que quieres probar
- **Orquestaci&oacute;n multi-agente** &mdash; agentes especialistas en paralelo, cada uno con conocimiento profundo de herramientas
- **Guardarrieles integrados** &mdash; puntos de control de alcance previenen acciones fuera de l&iacute;mites
- **Evidencia primero** &mdash; cada acci&oacute;n se registra, cada hallazgo es rastreable
- **Memoria persistente** &mdash; recuperaci&oacute;n basada en RAG entre sesiones, por agente y por proyecto
- **141 herramientas conectadas** &mdash; desde `nmap` hasta `BloodHound` y `Ghidra`, listas para ejecutar

</details>

---

## 🚀 Inicio R&aacute;pido

```bash
# Instalar dependencias
bun install

# Compilar el proyecto
bun run build

# Ejecutar
node dist/cli.mjs
```

Luego escribe una instrucci&oacute;n en lenguaje natural:

```
Evaluar https://objetivo.ejemplo — comenzar con reconocimiento, luego probar vulnerabilidades web.
```

---

## 🤖 Conectar un Proveedor LLM

Net-Runner funciona con m&uacute;ltiples proveedores de LLM. Configura las variables de entorno antes de iniciar.

### Con `ANTHROPIC_API_KEY`

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

### Cualquier API compatible con OpenAI

Funciona con LM Studio, vLLM, Together AI, Groq, Fireworks o cualquier endpoint compatible:

```bash
export OPENAI_API_KEY="tu-clave"
export OPENAI_BASE_URL="https://tu-proveedor.com/v1"
export OPENAI_MODEL="nombre-del-modelo"
node dist/cli.mjs
```

---

## ⚙️ C&oacute;mo Funciona

```
T&uacute; ──► L&iacute;der de Compromiso ──► Agentes Especialistas ──► Herramientas (Bash/MCP/Skills)
                │                       │                           │
                ▼                       ▼                           ▼
         Guardarrieles           Cadena de Evidencia         Salida de Herramientas
                │                       │                           │
                └───────────────────────┴───────────────────────────┘
                                        │
                                 .netrunner/
                        (estado, evidencia, memoria, reportes)
```

| Paso | Qu&eacute; Sucede |
|------|------------------|
| **1. Detectar** | Analizar intenci&oacute;n de evaluaci&oacute;n, identificar objetivos |
| **2. Inicializar** | Crear sobre `.netrunner/` con valores seguros por defecto |
| **3. Inyectar** | Adjuntar alcance, autorizaci&oacute;n y restricciones a cada turno |
| **4. Delegar** | Dirigir trabajo a agentes especialistas seg&uacute;n flujo y hallazgos |
| **5. Proteger** | Punto de control de alcance antes de cada acci&oacute;n de alto impacto |
| **6. Registrar** | Registrar evidencia, estado de ejecuci&oacute;n y hallazgos en tiempo real |
| **7. Recordar** | Persistir conocimiento por agente y proyecto para futuras sesiones |
| **8. Reportar** | Generar salida de evaluaci&oacute;n estructurada respaldada por evidencia |

---

## 🕵️ Agentes Especialistas

| Agente | Enfoque |
|:-------|:--------|
| **L&iacute;der de Compromiso** | Orquestaci&oacute;n, enrutamiento de flujos, coordinaci&oacute;n de habilidades |
| **Especialista en Reconocimiento** | Descubrimiento de red, DNS, OSINT, enumeraci&oacute;n de subdominios |
| **Testing Web** | XSS, SQLi, SSRF, bypass de autenticaci&oacute;n, escaneo CMS |
| **Testing API** | GraphQL, JWT, IDOR, asignaci&oacute;n masiva, an&aacute;lisis de esquemas |
| **Testing de Red** | SMB, SSH, FTP, explotaci&oacute;n de servicios, an&aacute;lisis de tr&aacute;fico |
| **Especialista en Explotaci&oacute;n** | Generaci&oacute;n de payloads, ejecuci&oacute;n de PoC, explotaci&oacute;n controlada |
| **Escalaci&oacute;n de Privilegios** | SUID, exploits de kernel, abuso de tokens, escape de contenedores |
| **Movimiento Lateral** | Reutilizaci&oacute;n de credenciales, pivoteo, reenv&iacute;o de puertos |
| **Especialista AD** | LDAP/Kerberos, abuso de confianza, ADCS, BloodHound |
| **Especialista en Retest** | Reproducir hallazgos, validar remediaci&oacute;n |
| **Especialista en Evidencia** | Curaci&oacute;n de artefactos, cadena de custodia, forense |
| **Especialista en Reportes** | Clasificaci&oacute;n de severidad, resumen ejecutivo, remediaci&oacute;n |

---

## 📋 Flujos de Trabajo

| Flujo | Entorno Objetivo | Paquetes Clave |
|:------|:-----------------|:---------------|
| `web-app-testing` | Aplicaciones web | recon, web, explotaci&oacute;n |
| `api-testing` | REST / GraphQL / SOAP | recon, api, explotaci&oacute;n |
| `lab-target-testing` | HTB / Labs / Interno | red, explotaci&oacute;n, AD, privesc |
| `ctf-mode` | Desaf&iacute;os CTF | recon, web, binario, explotaci&oacute;n |
| `ad-testing` | Active Directory | AD, red, base de datos, privesc |
| `wifi-testing` | Redes 802.11 | wifi, red, explotaci&oacute;n |

---

## 🛠️ Cobertura de Herramientas

<div align="center">

**141 herramientas en 17 paquetes de capacidad**

</div>

<details>
<summary><strong>Reconocimiento & OSINT</strong> — 22 herramientas</summary>

`nmap` · `masscan` · `rustscan` · `amass` · `subfinder` · `sublist3r` · `fierce` · `dnsenum` · `theHarvester` · `whois` · `httpx` · `katana` · `whatweb` · `bbot` · `recon-ng` · `spiderfoot` · `sherlock` · `maltego` · `gau` · `waybackurls` · `parsero` · `autorecon`

</details>

<details>
<summary><strong>Testing Web & API</strong> — 28 herramientas</summary>

`nuclei` · `nikto` · `gobuster` · `ffuf` · `feroxbuster` · `dirsearch` · `dirb` · `wpscan` · `joomscan` · `dalfox` · `xsser` · `jaeles` · `dotdotpwn` · `wafw00f` · `wfuzz` · `hakrawler` · `burpsuite` · `zap` · `sqlmap` · `commix` · `graphql-scanner` · `jwt-tool` · `arjun` · `paramspider` · `x8` · `qsreplace` · `uro` · `api-schema-analyzer`

</details>

<details>
<summary><strong>Explotaci&oacute;n & Fuerza Bruta</strong> — 12 herramientas</summary>

`msfconsole` · `msfvenom` · `searchsploit` · `hydra` · `medusa` · `patator` · `hashcat` · `john` · `ophcrack` · `hashid` · `responder` · `pwntools`

</details>

<details>
<summary><strong>Red & Movimiento Lateral</strong> — 14 herramientas</summary>

`netexec` · `crackmapexec` · `evil-winrm` · `smbmap` · `enum4linux` · `enum4linux-ng` · `rpcclient` · `nbtscan` · `arp-scan` · `tcpdump` · `tshark` · `wireshark` · `testssl` · `sslyze`

</details>

<details>
<summary><strong>Active Directory</strong> — 9 herramientas</summary>

`bloodhound` · `impacket-ad-enum` · `impacket-remote-exec` · `ldapdomaindump` · `certipy` · `kerbrute` · `rubeus` · `mimikatz` · `adidnsdump`

</details>

<details>
<summary><strong>An&aacute;lisis Binario & Ingenier&iacute;a Inversa</strong> — 13 herramientas</summary>

`ghidra` · `radare2` · `gdb` · `checksec` · `binwalk` · `ropgadget` · `ropper` · `one-gadget` · `angr` · `objdump` · `libc-database` · `pwninit` · `stegsolve`

</details>

<details>
<summary><strong>Seguridad Cloud & Contenedores</strong> — 12 herramientas</summary>

`trivy` · `prowler` · `scout-suite` · `pacu` · `cloudmapper` · `checkov` · `terrascan` · `kube-bench` · `kube-hunter` · `docker-bench` · `clair` · `falco`

</details>

<details>
<summary><strong>Forense & Evidencia</strong> — 13 herramientas</summary>

`volatility3` · `foremost` · `photorec` · `scalpel` · `bulk-extractor` · `sleuthkit` · `autopsy` · `testdisk` · `exiftool` · `steghide` · `zsteg` · `outguess` · `hashpump`

</details>

---

## 📜 Licencia

Este repositorio es para **uso educativo** y **pruebas de seguridad autorizadas** &uacute;nicamente.

---

<div align="center">

*Construido para operadores que piensan en objetivos, no en flags.*

</div>
