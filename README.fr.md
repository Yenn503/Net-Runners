<div align="center">

# Net-Runner

### Framework d'&Eacute;valuation Red Team avec Agents Autonomes

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![License](https://img.shields.io/badge/Licence-Usage%20%C3%89ducatif-red?style=for-the-badge)](#licence)

**12 Agents Sp&eacute;cialistes &middot; 141 Outils Red Team &middot; 17 Packs de Capacit&eacute;s &middot; 9 Comp&eacute;tences Pentest &middot; 6 Workflows**

*Parlez naturellement. Net-Runner s'occupe du reste.*

[English](README.md) · [Espa&ntilde;ol](README.es.md) · **Fran&ccedil;ais** · [中文](README.zh.md) · [العربية](README.ar.md) · [Portugu&ecirc;s](README.pt.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [हिन्दी](README.hi.md) · [Deutsch](README.de.md)

---

</div>

> **Avertissement**
> Utilisez **uniquement** sur des cibles pour lesquelles vous avez une autorisation explicite. Net-Runner est con&ccedil;u pour des tests de p&eacute;n&eacute;tration l&eacute;gaux, autoris&eacute;s et &agrave; des fins &eacute;ducatives.

## Qu'est-ce que Net-Runner ?

Net-Runner est un framework multi-agents de red team qui transforme des instructions en langage naturel en &eacute;valuations de s&eacute;curit&eacute; structur&eacute;es. Vous parlez au **Responsable de Mission** &mdash; il d&eacute;l&egrave;gue la reconnaissance, l'exploitation, le reporting et tout le reste &agrave; des agents sp&eacute;cialistes d&eacute;di&eacute;s.

<details>
<summary><strong>Pourquoi Net-Runner ?</strong></summary>

- **Langage naturel** &mdash; pas besoin de m&eacute;moriser des flags ou syntaxes ; d&eacute;crivez ce que vous voulez tester
- **Orchestration multi-agents** &mdash; agents sp&eacute;cialistes en parall&egrave;le, chacun avec une connaissance approfondie des outils
- **Garde-fous int&eacute;gr&eacute;s** &mdash; des points de contr&ocirc;le de p&eacute;rim&egrave;tre emp&ecirc;chent les actions hors limites
- **&Eacute;vidence d'abord** &mdash; chaque action est enregistr&eacute;e, chaque d&eacute;couverte est tra&ccedil;able
- **M&eacute;moire persistante** &mdash; r&eacute;cup&eacute;ration RAG entre sessions, par agent et par projet
- **141 outils connect&eacute;s** &mdash; de `nmap` &agrave; `BloodHound` en passant par `Ghidra`, pr&ecirc;ts &agrave; ex&eacute;cuter

</details>

---

## D&eacute;marrage Rapide

```bash
bun install
bun run build
node dist/cli.mjs
```

Puis tapez une instruction en langage naturel :

```
&Eacute;valuer https://cible.exemple — commencer par la reconnaissance, puis tester les vuln&eacute;rabilit&eacute;s web.
```

---

## Comment &ccedil;a Marche

| &Eacute;tape | Ce qui se passe |
|--------|----------------|
| **1. D&eacute;tecter** | Analyser l'intention d'&eacute;valuation, identifier les cibles |
| **2. Initialiser** | Cr&eacute;er l'enveloppe `.netrunner/` avec des valeurs s&ucirc;res par d&eacute;faut |
| **3. Injecter** | Attacher le p&eacute;rim&egrave;tre, l'autorisation et les restrictions &agrave; chaque tour |
| **4. D&eacute;l&eacute;guer** | Diriger le travail vers les agents sp&eacute;cialistes |
| **5. Prot&eacute;ger** | Point de contr&ocirc;le avant chaque action &agrave; fort impact |
| **6. Enregistrer** | Logger les preuves et d&eacute;couvertes en temps r&eacute;el |
| **7. M&eacute;moriser** | Persister les connaissances par agent et par projet |
| **8. Rapporter** | G&eacute;n&eacute;rer un rapport structur&eacute; bas&eacute; sur les preuves |

---

## Agents Sp&eacute;cialistes

| Agent | Domaine |
|:------|:--------|
| **Responsable de Mission** | Orchestration, routage des workflows, coordination |
| **Sp&eacute;cialiste Reconnaissance** | D&eacute;couverte r&eacute;seau, DNS, OSINT, &eacute;num&eacute;ration de sous-domaines |
| **Test Web** | XSS, SQLi, SSRF, contournement d'authentification, scan CMS |
| **Test API** | GraphQL, JWT, IDOR, assignation massive, analyse de sch&eacute;mas |
| **Test R&eacute;seau** | SMB, SSH, FTP, exploitation de services, analyse de trafic |
| **Sp&eacute;cialiste Exploitation** | G&eacute;n&eacute;ration de payloads, ex&eacute;cution de PoC contr&ocirc;l&eacute;e |
| **Escalade de Privil&egrave;ges** | SUID, exploits kernel, abus de tokens, &eacute;vasion de conteneurs |
| **Mouvement Lat&eacute;ral** | R&eacute;utilisation de credentials, pivoting, redirection de ports |
| **Sp&eacute;cialiste AD** | LDAP/Kerberos, abus de confiance, ADCS, BloodHound |
| **Sp&eacute;cialiste Retest** | Reproduire les d&eacute;couvertes, valider la rem&eacute;diation |
| **Sp&eacute;cialiste &Eacute;vidence** | Curation d'artefacts, cha&icirc;ne de custody, forensique |
| **Sp&eacute;cialiste Rapports** | Classement de s&eacute;v&eacute;rit&eacute;, r&eacute;sum&eacute; ex&eacute;cutif, rem&eacute;diation |

---

## Workflows

| Workflow | Environnement Cible | Packs Cl&eacute;s |
|:---------|:--------------------|:----------|
| `web-app-testing` | Applications web | recon, web, exploitation |
| `api-testing` | REST / GraphQL / SOAP | recon, api, exploitation |
| `lab-target-testing` | HTB / Labs / Interne | r&eacute;seau, exploitation, AD, privesc |
| `ctf-mode` | D&eacute;fis CTF | recon, web, binaire, exploitation |
| `ad-testing` | Active Directory | AD, r&eacute;seau, base de donn&eacute;es, privesc |
| `wifi-testing` | R&eacute;seaux 802.11 | wifi, r&eacute;seau, exploitation |

---

## Couverture d'Outils

**141 outils dans 17 packs de capacit&eacute;s** &mdash; incluant `nmap`, `nuclei`, `sqlmap`, `msfconsole`, `bloodhound`, `ghidra`, `volatility3`, `trivy`, `aircrack-ng` et bien plus.

Consultez le [README principal](README.md) pour la liste compl&egrave;te par cat&eacute;gorie.

---

## Licence

Ce d&eacute;p&ocirc;t est destin&eacute; &agrave; un **usage &eacute;ducatif** et &agrave; des **tests de s&eacute;curit&eacute; autoris&eacute;s** uniquement.

---

<div align="center">

*Con&ccedil;u pour les op&eacute;rateurs qui pensent en objectifs, pas en flags.*

</div>
