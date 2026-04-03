<div align="center">

# Net-Runner

### Agentenbasiertes Red-Team-Bewertungsframework

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![License](https://img.shields.io/badge/Lizenz-Bildungszwecke-red?style=for-the-badge)](#lizenz)

**12 Spezialagenten &middot; 141 Red-Team-Tools &middot; 17 F&auml;higkeitspakete &middot; 9 Pentest-Skills &middot; 6 Workflows**

*Sprechen Sie nat&uuml;rlich. Net-Runner erledigt den Rest.*

[English](README.md) · [Espa&ntilde;ol](README.es.md) · [Fran&ccedil;ais](README.fr.md) · [中文](README.zh.md) · [العربية](README.ar.md) · [Portugu&ecirc;s](README.pt.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [हिन्दी](README.hi.md) · **Deutsch**

---

</div>

> **Warnung**
> Verwenden Sie dies **ausschlie&szlig;lich** bei Zielen, f&uuml;r die Sie eine ausdr&uuml;ckliche Genehmigung haben. Net-Runner ist f&uuml;r legale, autorisierte Penetrationstests und Bildungszwecke konzipiert.

## Was ist Net-Runner?

Net-Runner ist ein Multi-Agenten-Red-Team-Framework, das nat&uuml;rlichsprachliche Anweisungen in strukturierte Sicherheitsbewertungen umwandelt. Sie sprechen mit dem **Einsatzleiter** &mdash; dieser delegiert Aufkl&auml;rung, Exploitation, Berichterstattung und alles andere an spezialisierte Agenten.

<details>
<summary><strong>Warum Net-Runner?</strong></summary>

- **Nat&uuml;rliche Sprache** &mdash; keine Flags oder Syntax auswendig lernen; beschreiben Sie, was Sie testen m&ouml;chten
- **Multi-Agenten-Orchestrierung** &mdash; parallele Spezialagenten, jeder mit tiefem Tool-Wissen
- **Eingebaute Leitplanken** &mdash; Scope-Guard-Checkpoints verhindern Aktionen au&szlig;erhalb der Grenzen
- **Beweise zuerst** &mdash; jede Aktion wird protokolliert, jeder Fund ist nachverfolgbar
- **Persistenter Speicher** &mdash; RAG-basierter Abruf &uuml;ber Sitzungen hinweg, pro Agent und pro Projekt
- **141 verbundene Tools** &mdash; von `nmap` &uuml;ber `BloodHound` bis `Ghidra`, bereit zur Ausf&uuml;hrung

</details>

---

## Schnellstart

```bash
bun install
bun run build
node dist/cli.mjs
```

Geben Sie eine nat&uuml;rlichsprachliche Anweisung ein:

```
Bewerte https://target.example &mdash; beginne mit Aufkl&auml;rung, dann teste auf Web-Schwachstellen.
```

---

## Funktionsweise

| Schritt | Was passiert |
|---------|-------------|
| **1. Erkennung** | Bewertungsabsicht analysieren, Ziele identifizieren |
| **2. Initialisierung** | `.netrunner/` mit sicheren Standardwerten erstellen |
| **3. Injektion** | Scope, Autorisierung und Einschr&auml;nkungen an jeden Modell-Turn anh&auml;ngen |
| **4. Delegation** | Arbeit basierend auf Workflow und Erkenntnissen an Spezialagenten weiterleiten |
| **5. Schutz** | Scope-Guard-Checkpoint vor jeder Aktion mit hoher Auswirkung |
| **6. Aufzeichnung** | Beweise und Erkenntnisse in Echtzeit protokollieren |
| **7. Erinnerung** | Wissen pro Agent und Projekt f&uuml;r zuk&uuml;nftige Sitzungen speichern |
| **8. Bericht** | Strukturierte, evidenzbasierte Bewertungsausgabe erstellen |

---

## Spezialagenten

| Agent | Spezialisierung |
|:------|:---------------|
| **Einsatzleiter** | Orchestrierung, Workflow-Routing, Skill-Koordination |
| **Aufkl&auml;rungsspezialist** | Netzwerkerkennung, DNS, OSINT, Subdomain-Enumeration |
| **Web-Testing** | XSS, SQLi, SSRF, Auth-Bypass, CMS-Scanning |
| **API-Testing** | GraphQL, JWT, IDOR, Mass-Assignment, Schema-Analyse |
| **Netzwerk-Testing** | SMB, SSH, FTP, Service-Exploitation, Traffic-Analyse |
| **Exploit-Spezialist** | Payload-Generierung, PoC-Ausf&uuml;hrung, kontrollierte Exploitation |
| **Privilege Escalation** | SUID, Kernel-Exploits, Token-Missbrauch, Container-Escape |
| **Lateral Movement** | Credential-Wiederverwendung, Pivoting, Port-Forwarding |
| **AD-Spezialist** | LDAP/Kerberos, Trust-Missbrauch, ADCS, BloodHound |
| **Retest-Spezialist** | Funde reproduzieren, Behebung validieren |
| **Beweis-Spezialist** | Artefakt-Kuration, Beweiskette, Forensik |
| **Berichts-Spezialist** | Schweregrad-Klassifizierung, Executive Summary, Behebungsempfehlungen |

---

## Workflows

| Workflow | Zielumgebung | Schl&uuml;sselpakete |
|:---------|:-------------|:-------------------|
| `web-app-testing` | Webanwendungen | Aufkl&auml;rung, Web, Exploitation |
| `api-testing` | REST / GraphQL / SOAP | Aufkl&auml;rung, API, Exploitation |
| `lab-target-testing` | HTB / Labs / Intern | Netzwerk, Exploitation, AD, Privesc |
| `ctf-mode` | CTF-Challenges | Aufkl&auml;rung, Web, Bin&auml;r, Exploitation |
| `ad-testing` | Active Directory | AD, Netzwerk, Datenbank, Privesc |
| `wifi-testing` | 802.11-Drahtlosnetzwerke | WiFi, Netzwerk, Exploitation |

---

## Tool-Abdeckung

**141 Tools in 17 F&auml;higkeitspaketen** &mdash; einschlie&szlig;lich `nmap`, `nuclei`, `sqlmap`, `msfconsole`, `bloodhound`, `ghidra`, `volatility3`, `trivy`, `aircrack-ng` und mehr.

Die vollst&auml;ndige Liste nach Kategorien finden Sie in der [Haupt-README](README.md).

---

## Lizenz

Dieses Repository ist **ausschlie&szlig;lich f&uuml;r Bildungszwecke** und **autorisierte Sicherheitstests** bestimmt.

---

<div align="center">

*Gebaut f&uuml;r Operateure, die in Zielen denken, nicht in Flags.*

</div>
