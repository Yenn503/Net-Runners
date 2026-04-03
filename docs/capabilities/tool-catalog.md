# Pentest Tool Catalog

This file is derived from `src/security/pentestToolCatalog.ts`. It lists the imported red-team tools currently registered in Net-Runner.

Tools are grouped by their primary capability area. The command shown on each line is the primary required command recorded for that entry.

Total imported tools: **153**

## Recon (22)

- `amass` — Amass Subdomain Enumeration
- `autorecon` — AutoRecon Multi-Tool Recon
- `bbot` — BBOT Reconnaissance
- `dnsenum` — DNSenum Recon
- `fierce` — Fierce DNS Recon
- `gau` — GAU URL Collection
- `ghunt` — GHunt Google OSINT
- `haklistgen` — Haklistgen Custom Wordlists
- `holehe` — Holehe Email Enumeration
- `maltego` — Maltego OSINT Link Analysis
- `nmap` — Nmap Port Scanner
- `parsero` — Parsero Robots.txt Analyzer
- `recon-ng` — Recon-ng Framework
- `sherlock` — Sherlock Username OSINT
- `spiderfoot` — SpiderFoot OSINT Automation
- `subfinder` — Subfinder Passive Subdomain Discovery
- `sublist3r` — Sublist3r Enumeration
- `theHarvester` — theHarvester OSINT
- `uro` — URO URL Reduction
- `waybackurls` — Wayback URL Collection
- `whatweb` — WhatWeb Technology Fingerprinting
- `whois` — WHOIS Lookup

## Web (28)

- `arjun` — Arjun Parameter Discovery
- `burpsuite` — Burp Suite Integration
- `commix` — Commix Command Injection
- `dalfox` — Dalfox XSS Testing
- `dirb` — DIRB Content Scanner
- `dirsearch` — Dirsearch Discovery
- `dotdotpwn` — DotDotPwn Traversal
- `feroxbuster` — Feroxbuster Content Discovery
- `ffuf` — FFUF Web Fuzzer
- `gobuster` — Gobuster Directory Brute-Forcer
- `hakrawler` — Hakrawler Web Crawler
- `httpx` — HTTPX Probing
- `jaeles` — Jaeles Signature Scanning
- `joomscan` — JoomScan Assessment
- `katana` — Katana Crawling
- `nikto` — Nikto Web Server Scanner
- `nuclei` — Nuclei Template Scanner
- `paramspider` — ParamSpider Discovery
- `qsreplace` — QSReplace Query Mutation
- `sqlmap` — SQLMap SQL Injection
- `sslyze` — SSLyze TLS Scanner
- `testssl` — TestSSL TLS Analysis
- `wafw00f` — WAF Detection
- `wfuzz` — WFuzz Web Fuzzer
- `wpscan` — WPScan Assessment
- `x8` — x8 Parameter Discovery
- `xsser` — XSSer Testing
- `zap-cli` — OWASP ZAP Automation

## API (3)

- `curl` — API Schema Security Analyzer
- `python3` — GraphQL Scanner
- `python3` — JWT Attack Toolkit

## Mobile (8)

- `adb` — ADB Device Bridge
- `apkleaks` — APKLeaks Secret Discovery
- `apktool` — APKTool Reverse Engineering
- `drozer` — Drozer Android Surface Analysis
- `frida` — Frida Runtime Instrumentation
- `jadx` — JADX Decompiled Review
- `docker` — MobSF Mobile Analysis
- `objection` — Objection Mobile Runtime Toolkit

## Network (13)

- `arp-scan` — ARP Scan Discovery
- `enum4linux` — Enum4linux Enumeration
- `masscan` — Masscan High-Speed Enumeration
- `medusa` — Medusa Credential Auditing
- `nbtscan` — NBTScan Discovery
- `netexec` — NetExec SMB/AD Operations
- `patator` — Patator Brute-force Framework
- `responder` — Responder Credential Capture
- `rustscan` — Rustscan Enumeration
- `smbmap` — SMBMap Share Enumeration
- `tcpdump` — Tcpdump Packet Capture
- `tshark` — TShark Terminal Packet Analyzer
- `tshark` — Wireshark/TShark Analysis

## Exploitation (11)

- `searchsploit` — ExploitDB Search
- `hashcat` — Hashcat GPU Password Cracker
- `hashid` — HashID Classification
- `hydra` — Hydra Network Brute-Forcer
- `john` — John the Ripper
- `msfconsole` — Metasploit Framework Console
- `msfvenom` — MSFVenom Payload Generation
- `impacket-mssqlclient` — MSSQL Client (Impacket)
- `mysql` — MySQL Client
- `ophcrack` — Ophcrack Windows Password Cracker
- `sqlite3` — SQLite3 Database Client

## Lateral Movement (1)

- `bloodhound-python` — BloodHound Collection

## Active Directory (12)

- `adidnsdump` — ADIDNSDump DNS Enumeration
- `certipy` — Certipy AD CS Attacks
- `crackmapexec` — CrackMapExec Operations
- `enum4linux-ng` — Enum4linux-ng Enumeration
- `evil-winrm` — Evil-WinRM Shell
- `impacket-GetADUsers` — Impacket AD Enumeration
- `impacket-psexec` — Impacket Remote Execution
- `kerbrute` — Kerbrute Kerberos Attacks
- `ldapdomaindump` — LDAPDomainDump Enumeration
- `python3` — Mimikatz Credential Extraction
- `rpcclient` — RPCClient Enumeration
- `python3` — Rubeus Kerberos Toolkit

## Cloud (13)

- `checkov` — Checkov IaC Scanning
- `clair-scanner` — Clair Container Scanner
- `cloud_enum` — Cloud Enum External Enumeration
- `cloudmapper` — CloudMapper Visualization
- `docker-bench-security` — Docker Bench Hardening
- `falco` — Falco Runtime Monitoring
- `kube-bench` — Kube-Bench Assessment
- `kube-hunter` — Kube-Hunter Assessment
- `pacu` — Pacu Cloud Exploitation
- `prowler` — Prowler Cloud Auditing
- `scout` — ScoutSuite Cloud Auditing
- `terrascan` — Terrascan IaC Scanning
- `trivy` — Trivy Vulnerability Scanning

## Binary / Reverse Engineering (22)

- `python3` — Angr Symbolic Analysis
- `autopsy` — Autopsy Forensics Platform
- `binwalk` — Binwalk Firmware Analysis
- `checksec` — Checksec Hardening Analysis
- `foremost` — Foremost File Carving
- `gdb` — GDB Debugging
- `ghidraRun` — Ghidra Reverse Engineering
- `hashpump` — HashPump Length Extension
- `python3` — Libc Database Lookup
- `objdump` — Objdump Disassembly
- `one_gadget` — One-Gadget Discovery
- `photorec` — PhotoRec File Recovery
- `pwninit` — PwnInit CTF Setup
- `python3` — Pwntools Exploit Development
- `radare2` — Radare2 Analysis
- `ROPgadget` — ROPGadget Discovery
- `ropper` — Ropper Gadget Discovery
- `scalpel` — Scalpel File Carving
- `steghide` — Steghide Analysis
- `fls` — The Sleuth Kit
- `volatility3` — Volatility3 Memory Forensics
- `zsteg` — Zsteg Steganography

## WiFi (13)

- `airbase-ng` — Airbase-ng Rogue Access Point
- `aircrack-ng` — Aircrack-ng Suite
- `airdecap-ng` — Airdecap-ng WiFi Decryption
- `aireplay-ng` — Aireplay-ng Injection
- `airmon-ng` — Airmon-ng Monitor Mode
- `airodump-ng` — Airodump-ng Capture
- `bettercap` — Bettercap MITM Framework
- `eaphammer` — EAPHammer Evil Twin
- `hcxdumptool` — Hcxdumptool Capture
- `hcxpcapngtool` — HcxPcapngTool Capture Converter
- `kismet` — Kismet Wireless IDS
- `mdk4` — MDK4 WiFi Attack Tool
- `wifite` — Wifite Automated WiFi

## Evidence / Forensics (5)

- `bulk_extractor` — Bulk Extractor
- `exiftool` — ExifTool Metadata Extraction
- `outguess` — OutGuess JPEG Steganography
- `stegsolve` — StegSolve Image Analysis
- `testdisk` — TestDisk Partition Recovery

## Coordination / C2 (2)

- `mythic-cli` — Mythic C2 Operations
- `sliver-client` — Sliver C2 Operations
