// ---------------------------------------------------------------------------
// MITRE ATT&CK Technique Reference Library
// ---------------------------------------------------------------------------
// Curated set of Enterprise ATT&CK techniques referenced by the APT group
// profiles in this subsystem.  Each entry maps to the official MITRE page.
// Source: https://attack.mitre.org/techniques/enterprise/
// ---------------------------------------------------------------------------

import type { MitreTechnique, MitreTacticId } from './types.js'

export const TECHNIQUE_LIBRARY: Record<string, MitreTechnique> = {
  // ── Reconnaissance (TA0043) ───────────────────────────────────────────
  'T1595': {
    id: 'T1595',
    name: 'Active Scanning',
    tactics: ['TA0043'],
    url: 'https://attack.mitre.org/techniques/T1595/',
  },
  'T1595.001': {
    id: 'T1595.001',
    name: 'Active Scanning: Scanning IP Blocks',
    tactics: ['TA0043'],
    url: 'https://attack.mitre.org/techniques/T1595/001/',
  },
  'T1595.002': {
    id: 'T1595.002',
    name: 'Active Scanning: Vulnerability Scanning',
    tactics: ['TA0043'],
    url: 'https://attack.mitre.org/techniques/T1595/002/',
  },
  'T1589': {
    id: 'T1589',
    name: 'Gather Victim Identity Information',
    tactics: ['TA0043'],
    url: 'https://attack.mitre.org/techniques/T1589/',
  },
  'T1589.001': {
    id: 'T1589.001',
    name: 'Gather Victim Identity Information: Credentials',
    tactics: ['TA0043'],
    url: 'https://attack.mitre.org/techniques/T1589/001/',
  },
  'T1589.002': {
    id: 'T1589.002',
    name: 'Gather Victim Identity Information: Email Addresses',
    tactics: ['TA0043'],
    url: 'https://attack.mitre.org/techniques/T1589/002/',
  },
  'T1590': {
    id: 'T1590',
    name: 'Gather Victim Network Information',
    tactics: ['TA0043'],
    url: 'https://attack.mitre.org/techniques/T1590/',
  },
  'T1591': {
    id: 'T1591',
    name: 'Gather Victim Org Information',
    tactics: ['TA0043'],
    url: 'https://attack.mitre.org/techniques/T1591/',
  },
  'T1593': {
    id: 'T1593',
    name: 'Search Open Websites/Domains',
    tactics: ['TA0043'],
    url: 'https://attack.mitre.org/techniques/T1593/',
  },
  'T1594': {
    id: 'T1594',
    name: 'Search Victim-Owned Websites',
    tactics: ['TA0043'],
    url: 'https://attack.mitre.org/techniques/T1594/',
  },
  'T1596': {
    id: 'T1596',
    name: 'Search Open Technical Databases',
    tactics: ['TA0043'],
    url: 'https://attack.mitre.org/techniques/T1596/',
  },
  'T1597': {
    id: 'T1597',
    name: 'Search Closed Sources',
    tactics: ['TA0043'],
    url: 'https://attack.mitre.org/techniques/T1597/',
  },

  // ── Resource Development (TA0042) ─────────────────────────────────────
  'T1583': {
    id: 'T1583',
    name: 'Acquire Infrastructure',
    tactics: ['TA0042'],
    url: 'https://attack.mitre.org/techniques/T1583/',
  },
  'T1583.001': {
    id: 'T1583.001',
    name: 'Acquire Infrastructure: Domains',
    tactics: ['TA0042'],
    url: 'https://attack.mitre.org/techniques/T1583/001/',
  },
  'T1583.006': {
    id: 'T1583.006',
    name: 'Acquire Infrastructure: Web Services',
    tactics: ['TA0042'],
    url: 'https://attack.mitre.org/techniques/T1583/006/',
  },
  'T1584': {
    id: 'T1584',
    name: 'Compromise Infrastructure',
    tactics: ['TA0042'],
    url: 'https://attack.mitre.org/techniques/T1584/',
  },
  'T1587': {
    id: 'T1587',
    name: 'Develop Capabilities',
    tactics: ['TA0042'],
    url: 'https://attack.mitre.org/techniques/T1587/',
  },
  'T1587.001': {
    id: 'T1587.001',
    name: 'Develop Capabilities: Malware',
    tactics: ['TA0042'],
    url: 'https://attack.mitre.org/techniques/T1587/001/',
  },
  'T1588': {
    id: 'T1588',
    name: 'Obtain Capabilities',
    tactics: ['TA0042'],
    url: 'https://attack.mitre.org/techniques/T1588/',
  },
  'T1588.001': {
    id: 'T1588.001',
    name: 'Obtain Capabilities: Malware',
    tactics: ['TA0042'],
    url: 'https://attack.mitre.org/techniques/T1588/001/',
  },
  'T1588.002': {
    id: 'T1588.002',
    name: 'Obtain Capabilities: Tool',
    tactics: ['TA0042'],
    url: 'https://attack.mitre.org/techniques/T1588/002/',
  },
  'T1585': {
    id: 'T1585',
    name: 'Establish Accounts',
    tactics: ['TA0042'],
    url: 'https://attack.mitre.org/techniques/T1585/',
  },
  'T1586': {
    id: 'T1586',
    name: 'Compromise Accounts',
    tactics: ['TA0042'],
    url: 'https://attack.mitre.org/techniques/T1586/',
  },

  // ── Initial Access (TA0001) ───────────────────────────────────────────
  'T1566': {
    id: 'T1566',
    name: 'Phishing',
    tactics: ['TA0001'],
    url: 'https://attack.mitre.org/techniques/T1566/',
  },
  'T1566.001': {
    id: 'T1566.001',
    name: 'Phishing: Spearphishing Attachment',
    tactics: ['TA0001'],
    url: 'https://attack.mitre.org/techniques/T1566/001/',
  },
  'T1566.002': {
    id: 'T1566.002',
    name: 'Phishing: Spearphishing Link',
    tactics: ['TA0001'],
    url: 'https://attack.mitre.org/techniques/T1566/002/',
  },
  'T1566.003': {
    id: 'T1566.003',
    name: 'Phishing: Spearphishing via Service',
    tactics: ['TA0001'],
    url: 'https://attack.mitre.org/techniques/T1566/003/',
  },
  'T1190': {
    id: 'T1190',
    name: 'Exploit Public-Facing Application',
    tactics: ['TA0001'],
    url: 'https://attack.mitre.org/techniques/T1190/',
  },
  'T1133': {
    id: 'T1133',
    name: 'External Remote Services',
    tactics: ['TA0001'],
    url: 'https://attack.mitre.org/techniques/T1133/',
  },
  'T1078': {
    id: 'T1078',
    name: 'Valid Accounts',
    tactics: ['TA0001', 'TA0003', 'TA0004', 'TA0005'],
    url: 'https://attack.mitre.org/techniques/T1078/',
  },
  'T1078.003': {
    id: 'T1078.003',
    name: 'Valid Accounts: Local Accounts',
    tactics: ['TA0001', 'TA0003', 'TA0004', 'TA0005'],
    url: 'https://attack.mitre.org/techniques/T1078/003/',
  },
  'T1078.004': {
    id: 'T1078.004',
    name: 'Valid Accounts: Cloud Accounts',
    tactics: ['TA0001', 'TA0003', 'TA0004', 'TA0005'],
    url: 'https://attack.mitre.org/techniques/T1078/004/',
  },
  'T1199': {
    id: 'T1199',
    name: 'Trusted Relationship',
    tactics: ['TA0001'],
    url: 'https://attack.mitre.org/techniques/T1199/',
  },
  'T1195': {
    id: 'T1195',
    name: 'Supply Chain Compromise',
    tactics: ['TA0001'],
    url: 'https://attack.mitre.org/techniques/T1195/',
  },
  'T1195.002': {
    id: 'T1195.002',
    name: 'Supply Chain Compromise: Compromise Software Supply Chain',
    tactics: ['TA0001'],
    url: 'https://attack.mitre.org/techniques/T1195/002/',
  },
  'T1189': {
    id: 'T1189',
    name: 'Drive-by Compromise',
    tactics: ['TA0001'],
    url: 'https://attack.mitre.org/techniques/T1189/',
  },
  'T1091': {
    id: 'T1091',
    name: 'Replication Through Removable Media',
    tactics: ['TA0001', 'TA0008'],
    url: 'https://attack.mitre.org/techniques/T1091/',
  },

  // ── Execution (TA0002) ────────────────────────────────────────────────
  'T1059': {
    id: 'T1059',
    name: 'Command and Scripting Interpreter',
    tactics: ['TA0002'],
    url: 'https://attack.mitre.org/techniques/T1059/',
  },
  'T1059.001': {
    id: 'T1059.001',
    name: 'Command and Scripting Interpreter: PowerShell',
    tactics: ['TA0002'],
    url: 'https://attack.mitre.org/techniques/T1059/001/',
  },
  'T1059.003': {
    id: 'T1059.003',
    name: 'Command and Scripting Interpreter: Windows Command Shell',
    tactics: ['TA0002'],
    url: 'https://attack.mitre.org/techniques/T1059/003/',
  },
  'T1059.005': {
    id: 'T1059.005',
    name: 'Command and Scripting Interpreter: Visual Basic',
    tactics: ['TA0002'],
    url: 'https://attack.mitre.org/techniques/T1059/005/',
  },
  'T1059.006': {
    id: 'T1059.006',
    name: 'Command and Scripting Interpreter: Python',
    tactics: ['TA0002'],
    url: 'https://attack.mitre.org/techniques/T1059/006/',
  },
  'T1059.007': {
    id: 'T1059.007',
    name: 'Command and Scripting Interpreter: JavaScript',
    tactics: ['TA0002'],
    url: 'https://attack.mitre.org/techniques/T1059/007/',
  },
  'T1204': {
    id: 'T1204',
    name: 'User Execution',
    tactics: ['TA0002'],
    url: 'https://attack.mitre.org/techniques/T1204/',
  },
  'T1204.001': {
    id: 'T1204.001',
    name: 'User Execution: Malicious Link',
    tactics: ['TA0002'],
    url: 'https://attack.mitre.org/techniques/T1204/001/',
  },
  'T1204.002': {
    id: 'T1204.002',
    name: 'User Execution: Malicious File',
    tactics: ['TA0002'],
    url: 'https://attack.mitre.org/techniques/T1204/002/',
  },
  'T1203': {
    id: 'T1203',
    name: 'Exploitation for Client Execution',
    tactics: ['TA0002'],
    url: 'https://attack.mitre.org/techniques/T1203/',
  },
  'T1047': {
    id: 'T1047',
    name: 'Windows Management Instrumentation',
    tactics: ['TA0002'],
    url: 'https://attack.mitre.org/techniques/T1047/',
  },
  'T1053': {
    id: 'T1053',
    name: 'Scheduled Task/Job',
    tactics: ['TA0002', 'TA0003', 'TA0004'],
    url: 'https://attack.mitre.org/techniques/T1053/',
  },
  'T1053.005': {
    id: 'T1053.005',
    name: 'Scheduled Task/Job: Scheduled Task',
    tactics: ['TA0002', 'TA0003', 'TA0004'],
    url: 'https://attack.mitre.org/techniques/T1053/005/',
  },
  'T1569': {
    id: 'T1569',
    name: 'System Services',
    tactics: ['TA0002'],
    url: 'https://attack.mitre.org/techniques/T1569/',
  },
  'T1569.002': {
    id: 'T1569.002',
    name: 'System Services: Service Execution',
    tactics: ['TA0002'],
    url: 'https://attack.mitre.org/techniques/T1569/002/',
  },

  // ── Persistence (TA0003) ──────────────────────────────────────────────
  'T1547': {
    id: 'T1547',
    name: 'Boot or Logon Autostart Execution',
    tactics: ['TA0003', 'TA0004'],
    url: 'https://attack.mitre.org/techniques/T1547/',
  },
  'T1547.001': {
    id: 'T1547.001',
    name: 'Boot or Logon Autostart Execution: Registry Run Keys / Startup Folder',
    tactics: ['TA0003', 'TA0004'],
    url: 'https://attack.mitre.org/techniques/T1547/001/',
  },
  'T1136': {
    id: 'T1136',
    name: 'Create Account',
    tactics: ['TA0003'],
    url: 'https://attack.mitre.org/techniques/T1136/',
  },
  'T1136.001': {
    id: 'T1136.001',
    name: 'Create Account: Local Account',
    tactics: ['TA0003'],
    url: 'https://attack.mitre.org/techniques/T1136/001/',
  },
  'T1136.003': {
    id: 'T1136.003',
    name: 'Create Account: Cloud Account',
    tactics: ['TA0003'],
    url: 'https://attack.mitre.org/techniques/T1136/003/',
  },
  'T1543': {
    id: 'T1543',
    name: 'Create or Modify System Process',
    tactics: ['TA0003', 'TA0004'],
    url: 'https://attack.mitre.org/techniques/T1543/',
  },
  'T1543.003': {
    id: 'T1543.003',
    name: 'Create or Modify System Process: Windows Service',
    tactics: ['TA0003', 'TA0004'],
    url: 'https://attack.mitre.org/techniques/T1543/003/',
  },
  'T1505': {
    id: 'T1505',
    name: 'Server Software Component',
    tactics: ['TA0003'],
    url: 'https://attack.mitre.org/techniques/T1505/',
  },
  'T1505.003': {
    id: 'T1505.003',
    name: 'Server Software Component: Web Shell',
    tactics: ['TA0003'],
    url: 'https://attack.mitre.org/techniques/T1505/003/',
  },
  'T1098': {
    id: 'T1098',
    name: 'Account Manipulation',
    tactics: ['TA0003', 'TA0004'],
    url: 'https://attack.mitre.org/techniques/T1098/',
  },
  'T1098.001': {
    id: 'T1098.001',
    name: 'Account Manipulation: Additional Cloud Credentials',
    tactics: ['TA0003', 'TA0004'],
    url: 'https://attack.mitre.org/techniques/T1098/001/',
  },
  'T1574': {
    id: 'T1574',
    name: 'Hijack Execution Flow',
    tactics: ['TA0003', 'TA0004', 'TA0005'],
    url: 'https://attack.mitre.org/techniques/T1574/',
  },
  'T1574.001': {
    id: 'T1574.001',
    name: 'Hijack Execution Flow: DLL Search Order Hijacking',
    tactics: ['TA0003', 'TA0004', 'TA0005'],
    url: 'https://attack.mitre.org/techniques/T1574/001/',
  },
  'T1546': {
    id: 'T1546',
    name: 'Event Triggered Execution',
    tactics: ['TA0003', 'TA0004'],
    url: 'https://attack.mitre.org/techniques/T1546/',
  },

  // ── Privilege Escalation (TA0004) ─────────────────────────────────────
  'T1068': {
    id: 'T1068',
    name: 'Exploitation for Privilege Escalation',
    tactics: ['TA0004'],
    url: 'https://attack.mitre.org/techniques/T1068/',
  },
  'T1548': {
    id: 'T1548',
    name: 'Abuse Elevation Control Mechanism',
    tactics: ['TA0004', 'TA0005'],
    url: 'https://attack.mitre.org/techniques/T1548/',
  },
  'T1134': {
    id: 'T1134',
    name: 'Access Token Manipulation',
    tactics: ['TA0004', 'TA0005'],
    url: 'https://attack.mitre.org/techniques/T1134/',
  },
  'T1055': {
    id: 'T1055',
    name: 'Process Injection',
    tactics: ['TA0004', 'TA0005'],
    url: 'https://attack.mitre.org/techniques/T1055/',
  },

  // ── Defense Evasion (TA0005) ──────────────────────────────────────────
  'T1027': {
    id: 'T1027',
    name: 'Obfuscated Files or Information',
    tactics: ['TA0005'],
    url: 'https://attack.mitre.org/techniques/T1027/',
  },
  'T1027.005': {
    id: 'T1027.005',
    name: 'Obfuscated Files or Information: Indicator Removal from Tools',
    tactics: ['TA0005'],
    url: 'https://attack.mitre.org/techniques/T1027/005/',
  },
  'T1070': {
    id: 'T1070',
    name: 'Indicator Removal',
    tactics: ['TA0005'],
    url: 'https://attack.mitre.org/techniques/T1070/',
  },
  'T1070.004': {
    id: 'T1070.004',
    name: 'Indicator Removal: File Deletion',
    tactics: ['TA0005'],
    url: 'https://attack.mitre.org/techniques/T1070/004/',
  },
  'T1070.006': {
    id: 'T1070.006',
    name: 'Indicator Removal: Timestomp',
    tactics: ['TA0005'],
    url: 'https://attack.mitre.org/techniques/T1070/006/',
  },
  'T1036': {
    id: 'T1036',
    name: 'Masquerading',
    tactics: ['TA0005'],
    url: 'https://attack.mitre.org/techniques/T1036/',
  },
  'T1140': {
    id: 'T1140',
    name: 'Deobfuscate/Decode Files or Information',
    tactics: ['TA0005'],
    url: 'https://attack.mitre.org/techniques/T1140/',
  },
  'T1218': {
    id: 'T1218',
    name: 'System Binary Proxy Execution',
    tactics: ['TA0005'],
    url: 'https://attack.mitre.org/techniques/T1218/',
  },
  'T1218.011': {
    id: 'T1218.011',
    name: 'System Binary Proxy Execution: Rundll32',
    tactics: ['TA0005'],
    url: 'https://attack.mitre.org/techniques/T1218/011/',
  },
  'T1562': {
    id: 'T1562',
    name: 'Impair Defenses',
    tactics: ['TA0005'],
    url: 'https://attack.mitre.org/techniques/T1562/',
  },
  'T1562.001': {
    id: 'T1562.001',
    name: 'Impair Defenses: Disable or Modify Tools',
    tactics: ['TA0005'],
    url: 'https://attack.mitre.org/techniques/T1562/001/',
  },
  'T1112': {
    id: 'T1112',
    name: 'Modify Registry',
    tactics: ['TA0005'],
    url: 'https://attack.mitre.org/techniques/T1112/',
  },
  'T1550': {
    id: 'T1550',
    name: 'Use Alternate Authentication Material',
    tactics: ['TA0005', 'TA0008'],
    url: 'https://attack.mitre.org/techniques/T1550/',
  },
  'T1550.001': {
    id: 'T1550.001',
    name: 'Use Alternate Authentication Material: Application Access Token',
    tactics: ['TA0005', 'TA0008'],
    url: 'https://attack.mitre.org/techniques/T1550/001/',
  },
  'T1550.002': {
    id: 'T1550.002',
    name: 'Use Alternate Authentication Material: Pass the Hash',
    tactics: ['TA0005', 'TA0008'],
    url: 'https://attack.mitre.org/techniques/T1550/002/',
  },
  'T1550.003': {
    id: 'T1550.003',
    name: 'Use Alternate Authentication Material: Pass the Ticket',
    tactics: ['TA0005', 'TA0008'],
    url: 'https://attack.mitre.org/techniques/T1550/003/',
  },
  'T1553': {
    id: 'T1553',
    name: 'Subvert Trust Controls',
    tactics: ['TA0005'],
    url: 'https://attack.mitre.org/techniques/T1553/',
  },
  'T1202': {
    id: 'T1202',
    name: 'Indirect Command Execution',
    tactics: ['TA0005'],
    url: 'https://attack.mitre.org/techniques/T1202/',
  },
  'T1497': {
    id: 'T1497',
    name: 'Virtualization/Sandbox Evasion',
    tactics: ['TA0005', 'TA0007'],
    url: 'https://attack.mitre.org/techniques/T1497/',
  },

  // ── Credential Access (TA0006) ────────────────────────────────────────
  'T1003': {
    id: 'T1003',
    name: 'OS Credential Dumping',
    tactics: ['TA0006'],
    url: 'https://attack.mitre.org/techniques/T1003/',
  },
  'T1003.001': {
    id: 'T1003.001',
    name: 'OS Credential Dumping: LSASS Memory',
    tactics: ['TA0006'],
    url: 'https://attack.mitre.org/techniques/T1003/001/',
  },
  'T1003.003': {
    id: 'T1003.003',
    name: 'OS Credential Dumping: NTDS',
    tactics: ['TA0006'],
    url: 'https://attack.mitre.org/techniques/T1003/003/',
  },
  'T1003.006': {
    id: 'T1003.006',
    name: 'OS Credential Dumping: DCSync',
    tactics: ['TA0006'],
    url: 'https://attack.mitre.org/techniques/T1003/006/',
  },
  'T1110': {
    id: 'T1110',
    name: 'Brute Force',
    tactics: ['TA0006'],
    url: 'https://attack.mitre.org/techniques/T1110/',
  },
  'T1110.001': {
    id: 'T1110.001',
    name: 'Brute Force: Password Guessing',
    tactics: ['TA0006'],
    url: 'https://attack.mitre.org/techniques/T1110/001/',
  },
  'T1110.003': {
    id: 'T1110.003',
    name: 'Brute Force: Password Spraying',
    tactics: ['TA0006'],
    url: 'https://attack.mitre.org/techniques/T1110/003/',
  },
  'T1558': {
    id: 'T1558',
    name: 'Steal or Forge Kerberos Tickets',
    tactics: ['TA0006'],
    url: 'https://attack.mitre.org/techniques/T1558/',
  },
  'T1558.003': {
    id: 'T1558.003',
    name: 'Steal or Forge Kerberos Tickets: Kerberoasting',
    tactics: ['TA0006'],
    url: 'https://attack.mitre.org/techniques/T1558/003/',
  },
  'T1558.004': {
    id: 'T1558.004',
    name: 'Steal or Forge Kerberos Tickets: AS-REP Roasting',
    tactics: ['TA0006'],
    url: 'https://attack.mitre.org/techniques/T1558/004/',
  },
  'T1552': {
    id: 'T1552',
    name: 'Unsecured Credentials',
    tactics: ['TA0006'],
    url: 'https://attack.mitre.org/techniques/T1552/',
  },
  'T1552.001': {
    id: 'T1552.001',
    name: 'Unsecured Credentials: Credentials In Files',
    tactics: ['TA0006'],
    url: 'https://attack.mitre.org/techniques/T1552/001/',
  },
  'T1555': {
    id: 'T1555',
    name: 'Credentials from Password Stores',
    tactics: ['TA0006'],
    url: 'https://attack.mitre.org/techniques/T1555/',
  },
  'T1556': {
    id: 'T1556',
    name: 'Modify Authentication Process',
    tactics: ['TA0006', 'TA0003', 'TA0005'],
    url: 'https://attack.mitre.org/techniques/T1556/',
  },
  'T1528': {
    id: 'T1528',
    name: 'Steal Application Access Token',
    tactics: ['TA0006'],
    url: 'https://attack.mitre.org/techniques/T1528/',
  },
  'T1539': {
    id: 'T1539',
    name: 'Steal Web Session Cookie',
    tactics: ['TA0006'],
    url: 'https://attack.mitre.org/techniques/T1539/',
  },
  'T1557': {
    id: 'T1557',
    name: 'Adversary-in-the-Middle',
    tactics: ['TA0006', 'TA0009'],
    url: 'https://attack.mitre.org/techniques/T1557/',
  },
  'T1621': {
    id: 'T1621',
    name: 'Multi-Factor Authentication Request Generation',
    tactics: ['TA0006'],
    url: 'https://attack.mitre.org/techniques/T1621/',
  },

  // ── Discovery (TA0007) ────────────────────────────────────────────────
  'T1087': {
    id: 'T1087',
    name: 'Account Discovery',
    tactics: ['TA0007'],
    url: 'https://attack.mitre.org/techniques/T1087/',
  },
  'T1087.002': {
    id: 'T1087.002',
    name: 'Account Discovery: Domain Account',
    tactics: ['TA0007'],
    url: 'https://attack.mitre.org/techniques/T1087/002/',
  },
  'T1082': {
    id: 'T1082',
    name: 'System Information Discovery',
    tactics: ['TA0007'],
    url: 'https://attack.mitre.org/techniques/T1082/',
  },
  'T1083': {
    id: 'T1083',
    name: 'File and Directory Discovery',
    tactics: ['TA0007'],
    url: 'https://attack.mitre.org/techniques/T1083/',
  },
  'T1046': {
    id: 'T1046',
    name: 'Network Service Discovery',
    tactics: ['TA0007'],
    url: 'https://attack.mitre.org/techniques/T1046/',
  },
  'T1135': {
    id: 'T1135',
    name: 'Network Share Discovery',
    tactics: ['TA0007'],
    url: 'https://attack.mitre.org/techniques/T1135/',
  },
  'T1069': {
    id: 'T1069',
    name: 'Permission Groups Discovery',
    tactics: ['TA0007'],
    url: 'https://attack.mitre.org/techniques/T1069/',
  },
  'T1069.002': {
    id: 'T1069.002',
    name: 'Permission Groups Discovery: Domain Groups',
    tactics: ['TA0007'],
    url: 'https://attack.mitre.org/techniques/T1069/002/',
  },
  'T1018': {
    id: 'T1018',
    name: 'Remote System Discovery',
    tactics: ['TA0007'],
    url: 'https://attack.mitre.org/techniques/T1018/',
  },
  'T1016': {
    id: 'T1016',
    name: 'System Network Configuration Discovery',
    tactics: ['TA0007'],
    url: 'https://attack.mitre.org/techniques/T1016/',
  },
  'T1049': {
    id: 'T1049',
    name: 'System Network Connections Discovery',
    tactics: ['TA0007'],
    url: 'https://attack.mitre.org/techniques/T1049/',
  },
  'T1033': {
    id: 'T1033',
    name: 'System Owner/User Discovery',
    tactics: ['TA0007'],
    url: 'https://attack.mitre.org/techniques/T1033/',
  },
  'T1007': {
    id: 'T1007',
    name: 'System Service Discovery',
    tactics: ['TA0007'],
    url: 'https://attack.mitre.org/techniques/T1007/',
  },
  'T1482': {
    id: 'T1482',
    name: 'Domain Trust Discovery',
    tactics: ['TA0007'],
    url: 'https://attack.mitre.org/techniques/T1482/',
  },
  'T1615': {
    id: 'T1615',
    name: 'Group Policy Discovery',
    tactics: ['TA0007'],
    url: 'https://attack.mitre.org/techniques/T1615/',
  },
  'T1580': {
    id: 'T1580',
    name: 'Cloud Infrastructure Discovery',
    tactics: ['TA0007'],
    url: 'https://attack.mitre.org/techniques/T1580/',
  },

  // ── Lateral Movement (TA0008) ─────────────────────────────────────────
  'T1021': {
    id: 'T1021',
    name: 'Remote Services',
    tactics: ['TA0008'],
    url: 'https://attack.mitre.org/techniques/T1021/',
  },
  'T1021.001': {
    id: 'T1021.001',
    name: 'Remote Services: Remote Desktop Protocol',
    tactics: ['TA0008'],
    url: 'https://attack.mitre.org/techniques/T1021/001/',
  },
  'T1021.002': {
    id: 'T1021.002',
    name: 'Remote Services: SMB/Windows Admin Shares',
    tactics: ['TA0008'],
    url: 'https://attack.mitre.org/techniques/T1021/002/',
  },
  'T1021.004': {
    id: 'T1021.004',
    name: 'Remote Services: SSH',
    tactics: ['TA0008'],
    url: 'https://attack.mitre.org/techniques/T1021/004/',
  },
  'T1021.006': {
    id: 'T1021.006',
    name: 'Remote Services: Windows Remote Management',
    tactics: ['TA0008'],
    url: 'https://attack.mitre.org/techniques/T1021/006/',
  },
  'T1570': {
    id: 'T1570',
    name: 'Lateral Tool Transfer',
    tactics: ['TA0008'],
    url: 'https://attack.mitre.org/techniques/T1570/',
  },
  'T1080': {
    id: 'T1080',
    name: 'Taint Shared Content',
    tactics: ['TA0008'],
    url: 'https://attack.mitre.org/techniques/T1080/',
  },
  'T1563': {
    id: 'T1563',
    name: 'Remote Service Session Hijacking',
    tactics: ['TA0008'],
    url: 'https://attack.mitre.org/techniques/T1563/',
  },

  // ── Collection (TA0009) ───────────────────────────────────────────────
  'T1560': {
    id: 'T1560',
    name: 'Archive Collected Data',
    tactics: ['TA0009'],
    url: 'https://attack.mitre.org/techniques/T1560/',
  },
  'T1560.001': {
    id: 'T1560.001',
    name: 'Archive Collected Data: Archive via Utility',
    tactics: ['TA0009'],
    url: 'https://attack.mitre.org/techniques/T1560/001/',
  },
  'T1119': {
    id: 'T1119',
    name: 'Automated Collection',
    tactics: ['TA0009'],
    url: 'https://attack.mitre.org/techniques/T1119/',
  },
  'T1005': {
    id: 'T1005',
    name: 'Data from Local System',
    tactics: ['TA0009'],
    url: 'https://attack.mitre.org/techniques/T1005/',
  },
  'T1039': {
    id: 'T1039',
    name: 'Data from Network Shared Drive',
    tactics: ['TA0009'],
    url: 'https://attack.mitre.org/techniques/T1039/',
  },
  'T1114': {
    id: 'T1114',
    name: 'Email Collection',
    tactics: ['TA0009'],
    url: 'https://attack.mitre.org/techniques/T1114/',
  },
  'T1114.002': {
    id: 'T1114.002',
    name: 'Email Collection: Remote Email Collection',
    tactics: ['TA0009'],
    url: 'https://attack.mitre.org/techniques/T1114/002/',
  },
  'T1056': {
    id: 'T1056',
    name: 'Input Capture',
    tactics: ['TA0009', 'TA0006'],
    url: 'https://attack.mitre.org/techniques/T1056/',
  },
  'T1056.001': {
    id: 'T1056.001',
    name: 'Input Capture: Keylogging',
    tactics: ['TA0009', 'TA0006'],
    url: 'https://attack.mitre.org/techniques/T1056/001/',
  },
  'T1113': {
    id: 'T1113',
    name: 'Screen Capture',
    tactics: ['TA0009'],
    url: 'https://attack.mitre.org/techniques/T1113/',
  },
  'T1530': {
    id: 'T1530',
    name: 'Data from Cloud Storage',
    tactics: ['TA0009'],
    url: 'https://attack.mitre.org/techniques/T1530/',
  },
  'T1213': {
    id: 'T1213',
    name: 'Data from Information Repositories',
    tactics: ['TA0009'],
    url: 'https://attack.mitre.org/techniques/T1213/',
  },

  // ── Command and Control (TA0011) ──────────────────────────────────────
  'T1071': {
    id: 'T1071',
    name: 'Application Layer Protocol',
    tactics: ['TA0011'],
    url: 'https://attack.mitre.org/techniques/T1071/',
  },
  'T1071.001': {
    id: 'T1071.001',
    name: 'Application Layer Protocol: Web Protocols',
    tactics: ['TA0011'],
    url: 'https://attack.mitre.org/techniques/T1071/001/',
  },
  'T1071.003': {
    id: 'T1071.003',
    name: 'Application Layer Protocol: Mail Protocols',
    tactics: ['TA0011'],
    url: 'https://attack.mitre.org/techniques/T1071/003/',
  },
  'T1105': {
    id: 'T1105',
    name: 'Ingress Tool Transfer',
    tactics: ['TA0011'],
    url: 'https://attack.mitre.org/techniques/T1105/',
  },
  'T1573': {
    id: 'T1573',
    name: 'Encrypted Channel',
    tactics: ['TA0011'],
    url: 'https://attack.mitre.org/techniques/T1573/',
  },
  'T1573.001': {
    id: 'T1573.001',
    name: 'Encrypted Channel: Symmetric Cryptography',
    tactics: ['TA0011'],
    url: 'https://attack.mitre.org/techniques/T1573/001/',
  },
  'T1573.002': {
    id: 'T1573.002',
    name: 'Encrypted Channel: Asymmetric Cryptography',
    tactics: ['TA0011'],
    url: 'https://attack.mitre.org/techniques/T1573/002/',
  },
  'T1572': {
    id: 'T1572',
    name: 'Protocol Tunneling',
    tactics: ['TA0011'],
    url: 'https://attack.mitre.org/techniques/T1572/',
  },
  'T1090': {
    id: 'T1090',
    name: 'Proxy',
    tactics: ['TA0011'],
    url: 'https://attack.mitre.org/techniques/T1090/',
  },
  'T1090.002': {
    id: 'T1090.002',
    name: 'Proxy: External Proxy',
    tactics: ['TA0011'],
    url: 'https://attack.mitre.org/techniques/T1090/002/',
  },
  'T1102': {
    id: 'T1102',
    name: 'Web Service',
    tactics: ['TA0011'],
    url: 'https://attack.mitre.org/techniques/T1102/',
  },
  'T1132': {
    id: 'T1132',
    name: 'Data Encoding',
    tactics: ['TA0011'],
    url: 'https://attack.mitre.org/techniques/T1132/',
  },
  'T1001': {
    id: 'T1001',
    name: 'Data Obfuscation',
    tactics: ['TA0011'],
    url: 'https://attack.mitre.org/techniques/T1001/',
  },
  'T1568': {
    id: 'T1568',
    name: 'Dynamic Resolution',
    tactics: ['TA0011'],
    url: 'https://attack.mitre.org/techniques/T1568/',
  },
  'T1219': {
    id: 'T1219',
    name: 'Remote Access Software',
    tactics: ['TA0011'],
    url: 'https://attack.mitre.org/techniques/T1219/',
  },

  // ── Exfiltration (TA0010) ─────────────────────────────────────────────
  'T1041': {
    id: 'T1041',
    name: 'Exfiltration Over C2 Channel',
    tactics: ['TA0010'],
    url: 'https://attack.mitre.org/techniques/T1041/',
  },
  'T1048': {
    id: 'T1048',
    name: 'Exfiltration Over Alternative Protocol',
    tactics: ['TA0010'],
    url: 'https://attack.mitre.org/techniques/T1048/',
  },
  'T1567': {
    id: 'T1567',
    name: 'Exfiltration Over Web Service',
    tactics: ['TA0010'],
    url: 'https://attack.mitre.org/techniques/T1567/',
  },
  'T1567.002': {
    id: 'T1567.002',
    name: 'Exfiltration Over Web Service: Exfiltration to Cloud Storage',
    tactics: ['TA0010'],
    url: 'https://attack.mitre.org/techniques/T1567/002/',
  },
  'T1029': {
    id: 'T1029',
    name: 'Scheduled Transfer',
    tactics: ['TA0010'],
    url: 'https://attack.mitre.org/techniques/T1029/',
  },
  'T1537': {
    id: 'T1537',
    name: 'Transfer Data to Cloud Account',
    tactics: ['TA0010'],
    url: 'https://attack.mitre.org/techniques/T1537/',
  },

  // ── Impact (TA0040) ───────────────────────────────────────────────────
  'T1485': {
    id: 'T1485',
    name: 'Data Destruction',
    tactics: ['TA0040'],
    url: 'https://attack.mitre.org/techniques/T1485/',
  },
  'T1486': {
    id: 'T1486',
    name: 'Data Encrypted for Impact',
    tactics: ['TA0040'],
    url: 'https://attack.mitre.org/techniques/T1486/',
  },
  'T1489': {
    id: 'T1489',
    name: 'Service Stop',
    tactics: ['TA0040'],
    url: 'https://attack.mitre.org/techniques/T1489/',
  },
  'T1490': {
    id: 'T1490',
    name: 'Inhibit System Recovery',
    tactics: ['TA0040'],
    url: 'https://attack.mitre.org/techniques/T1490/',
  },
  'T1496': {
    id: 'T1496',
    name: 'Resource Hijacking',
    tactics: ['TA0040'],
    url: 'https://attack.mitre.org/techniques/T1496/',
  },
  'T1491': {
    id: 'T1491',
    name: 'Defacement',
    tactics: ['TA0040'],
    url: 'https://attack.mitre.org/techniques/T1491/',
  },
  'T1531': {
    id: 'T1531',
    name: 'Account Access Removal',
    tactics: ['TA0040'],
    url: 'https://attack.mitre.org/techniques/T1531/',
  },
  'T1657': {
    id: 'T1657',
    name: 'Financial Theft',
    tactics: ['TA0040'],
    url: 'https://attack.mitre.org/techniques/T1657/',
  },
}

export function getTechnique(id: string): MitreTechnique | undefined {
  return TECHNIQUE_LIBRARY[id]
}

export function getTechniquesByTactic(tacticId: MitreTacticId): MitreTechnique[] {
  return Object.values(TECHNIQUE_LIBRARY).filter(t =>
    t.tactics.includes(tacticId),
  )
}

export function resolveTechniqueIds(ids: string[]): MitreTechnique[] {
  return ids
    .map(id => TECHNIQUE_LIBRARY[id])
    .filter((t): t is MitreTechnique => t !== undefined)
}
