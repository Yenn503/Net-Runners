import type {
  ComplianceFramework,
  ComplianceReference,
  CvssScore,
  MitreAttackReference,
  OwaspCategory,
} from './evidence.js'

/**
 * MITRE ATT&CK technique lookup table.
 * Agents use this to tag findings with the correct technique IDs.
 * Covers the most common techniques encountered in penetration testing.
 */
export const MITRE_ATTACK_TECHNIQUES: Record<string, MitreAttackReference> = {
  'T1595': { techniqueId: 'T1595', techniqueName: 'Active Scanning', tacticName: 'Reconnaissance' },
  'T1595.001': { techniqueId: 'T1595', techniqueName: 'Active Scanning', subtechniqueId: 'T1595.001', tacticName: 'Reconnaissance' },
  'T1595.002': { techniqueId: 'T1595', techniqueName: 'Active Scanning', subtechniqueId: 'T1595.002', tacticName: 'Reconnaissance' },
  'T1592': { techniqueId: 'T1592', techniqueName: 'Gather Victim Host Information', tacticName: 'Reconnaissance' },
  'T1590': { techniqueId: 'T1590', techniqueName: 'Gather Victim Network Information', tacticName: 'Reconnaissance' },
  'T1589': { techniqueId: 'T1589', techniqueName: 'Gather Victim Identity Information', tacticName: 'Reconnaissance' },
  'T1591': { techniqueId: 'T1591', techniqueName: 'Gather Victim Org Information', tacticName: 'Reconnaissance' },
  'T1593': { techniqueId: 'T1593', techniqueName: 'Search Open Websites/Domains', tacticName: 'Reconnaissance' },
  'T1596': { techniqueId: 'T1596', techniqueName: 'Search Open Technical Databases', tacticName: 'Reconnaissance' },
  'T1190': { techniqueId: 'T1190', techniqueName: 'Exploit Public-Facing Application', tacticName: 'Initial Access' },
  'T1133': { techniqueId: 'T1133', techniqueName: 'External Remote Services', tacticName: 'Initial Access' },
  'T1078': { techniqueId: 'T1078', techniqueName: 'Valid Accounts', tacticName: 'Initial Access' },
  'T1110': { techniqueId: 'T1110', techniqueName: 'Brute Force', tacticName: 'Credential Access' },
  'T1110.001': { techniqueId: 'T1110', techniqueName: 'Brute Force', subtechniqueId: 'T1110.001', tacticName: 'Credential Access' },
  'T1110.003': { techniqueId: 'T1110', techniqueName: 'Brute Force', subtechniqueId: 'T1110.003', tacticName: 'Credential Access' },
  'T1003': { techniqueId: 'T1003', techniqueName: 'OS Credential Dumping', tacticName: 'Credential Access' },
  'T1552': { techniqueId: 'T1552', techniqueName: 'Unsecured Credentials', tacticName: 'Credential Access' },
  'T1558': { techniqueId: 'T1558', techniqueName: 'Steal or Forge Kerberos Tickets', tacticName: 'Credential Access' },
  'T1558.003': { techniqueId: 'T1558', techniqueName: 'Steal or Forge Kerberos Tickets', subtechniqueId: 'T1558.003', tacticName: 'Credential Access' },
  'T1059': { techniqueId: 'T1059', techniqueName: 'Command and Scripting Interpreter', tacticName: 'Execution' },
  'T1059.001': { techniqueId: 'T1059', techniqueName: 'Command and Scripting Interpreter', subtechniqueId: 'T1059.001', tacticName: 'Execution' },
  'T1059.004': { techniqueId: 'T1059', techniqueName: 'Command and Scripting Interpreter', subtechniqueId: 'T1059.004', tacticName: 'Execution' },
  'T1203': { techniqueId: 'T1203', techniqueName: 'Exploitation for Client Execution', tacticName: 'Execution' },
  'T1068': { techniqueId: 'T1068', techniqueName: 'Exploitation for Privilege Escalation', tacticName: 'Privilege Escalation' },
  'T1548': { techniqueId: 'T1548', techniqueName: 'Abuse Elevation Control Mechanism', tacticName: 'Privilege Escalation' },
  'T1548.001': { techniqueId: 'T1548', techniqueName: 'Abuse Elevation Control Mechanism', subtechniqueId: 'T1548.001', tacticName: 'Privilege Escalation' },
  'T1134': { techniqueId: 'T1134', techniqueName: 'Access Token Manipulation', tacticName: 'Privilege Escalation' },
  'T1611': { techniqueId: 'T1611', techniqueName: 'Escape to Host', tacticName: 'Privilege Escalation' },
  'T1210': { techniqueId: 'T1210', techniqueName: 'Exploitation of Remote Services', tacticName: 'Lateral Movement' },
  'T1021': { techniqueId: 'T1021', techniqueName: 'Remote Services', tacticName: 'Lateral Movement' },
  'T1021.001': { techniqueId: 'T1021', techniqueName: 'Remote Services', subtechniqueId: 'T1021.001', tacticName: 'Lateral Movement' },
  'T1021.002': { techniqueId: 'T1021', techniqueName: 'Remote Services', subtechniqueId: 'T1021.002', tacticName: 'Lateral Movement' },
  'T1021.004': { techniqueId: 'T1021', techniqueName: 'Remote Services', subtechniqueId: 'T1021.004', tacticName: 'Lateral Movement' },
  'T1550': { techniqueId: 'T1550', techniqueName: 'Use Alternate Authentication Material', tacticName: 'Lateral Movement' },
  'T1550.002': { techniqueId: 'T1550', techniqueName: 'Use Alternate Authentication Material', subtechniqueId: 'T1550.002', tacticName: 'Lateral Movement' },
  'T1046': { techniqueId: 'T1046', techniqueName: 'Network Service Discovery', tacticName: 'Discovery' },
  'T1018': { techniqueId: 'T1018', techniqueName: 'Remote System Discovery', tacticName: 'Discovery' },
  'T1087': { techniqueId: 'T1087', techniqueName: 'Account Discovery', tacticName: 'Discovery' },
  'T1087.002': { techniqueId: 'T1087', techniqueName: 'Account Discovery', subtechniqueId: 'T1087.002', tacticName: 'Discovery' },
  'T1482': { techniqueId: 'T1482', techniqueName: 'Domain Trust Discovery', tacticName: 'Discovery' },
  'T1069': { techniqueId: 'T1069', techniqueName: 'Permission Groups Discovery', tacticName: 'Discovery' },
  'T1069.002': { techniqueId: 'T1069', techniqueName: 'Permission Groups Discovery', subtechniqueId: 'T1069.002', tacticName: 'Discovery' },
  'T1016': { techniqueId: 'T1016', techniqueName: 'System Network Configuration Discovery', tacticName: 'Discovery' },
  'T1049': { techniqueId: 'T1049', techniqueName: 'System Network Connections Discovery', tacticName: 'Discovery' },
  'T1082': { techniqueId: 'T1082', techniqueName: 'System Information Discovery', tacticName: 'Discovery' },
  'T1040': { techniqueId: 'T1040', techniqueName: 'Network Sniffing', tacticName: 'Credential Access' },
  'T1557': { techniqueId: 'T1557', techniqueName: 'Adversary-in-the-Middle', tacticName: 'Credential Access' },
  'T1557.001': { techniqueId: 'T1557', techniqueName: 'Adversary-in-the-Middle', subtechniqueId: 'T1557.001', tacticName: 'Credential Access' },
  'T1071': { techniqueId: 'T1071', techniqueName: 'Application Layer Protocol', tacticName: 'Command and Control' },
  'T1572': { techniqueId: 'T1572', techniqueName: 'Protocol Tunneling', tacticName: 'Command and Control' },
  'T1048': { techniqueId: 'T1048', techniqueName: 'Exfiltration Over Alternative Protocol', tacticName: 'Exfiltration' },
  'T1567': { techniqueId: 'T1567', techniqueName: 'Exfiltration Over Web Service', tacticName: 'Exfiltration' },
  'T1562': { techniqueId: 'T1562', techniqueName: 'Impair Defenses', tacticName: 'Defense Evasion' },
  'T1070': { techniqueId: 'T1070', techniqueName: 'Indicator Removal', tacticName: 'Defense Evasion' },
  'T1055': { techniqueId: 'T1055', techniqueName: 'Process Injection', tacticName: 'Defense Evasion' },
  'T1505.003': { techniqueId: 'T1505', techniqueName: 'Server Software Component', subtechniqueId: 'T1505.003', tacticName: 'Persistence' },
  'T1053': { techniqueId: 'T1053', techniqueName: 'Scheduled Task/Job', tacticName: 'Persistence' },
  'T1136': { techniqueId: 'T1136', techniqueName: 'Create Account', tacticName: 'Persistence' },
  'T1098': { techniqueId: 'T1098', techniqueName: 'Account Manipulation', tacticName: 'Persistence' },
  'T1557.002': { techniqueId: 'T1557', techniqueName: 'Adversary-in-the-Middle', subtechniqueId: 'T1557.002', tacticName: 'Credential Access' },
  'T1187': { techniqueId: 'T1187', techniqueName: 'Forced Authentication', tacticName: 'Credential Access' },
  'T1484': { techniqueId: 'T1484', techniqueName: 'Domain Policy Modification', tacticName: 'Defense Evasion' },
}

/**
 * Common CWE IDs mapped to human-readable names.
 * Agents use this to tag findings with standard weakness classifications.
 */
export const COMMON_CWE_IDS: Record<string, string> = {
  'CWE-22': 'Path Traversal',
  'CWE-77': 'Command Injection',
  'CWE-78': 'OS Command Injection',
  'CWE-79': 'Cross-site Scripting (XSS)',
  'CWE-89': 'SQL Injection',
  'CWE-94': 'Code Injection',
  'CWE-200': 'Exposure of Sensitive Information',
  'CWE-209': 'Error Message Information Leak',
  'CWE-250': 'Execution with Unnecessary Privileges',
  'CWE-269': 'Improper Privilege Management',
  'CWE-276': 'Incorrect Default Permissions',
  'CWE-284': 'Improper Access Control',
  'CWE-287': 'Improper Authentication',
  'CWE-295': 'Improper Certificate Validation',
  'CWE-306': 'Missing Authentication for Critical Function',
  'CWE-307': 'Improper Restriction of Excessive Authentication Attempts',
  'CWE-311': 'Missing Encryption of Sensitive Data',
  'CWE-312': 'Cleartext Storage of Sensitive Information',
  'CWE-319': 'Cleartext Transmission of Sensitive Information',
  'CWE-326': 'Inadequate Encryption Strength',
  'CWE-327': 'Use of Broken Crypto Algorithm',
  'CWE-352': 'Cross-Site Request Forgery (CSRF)',
  'CWE-384': 'Session Fixation',
  'CWE-400': 'Uncontrolled Resource Consumption',
  'CWE-434': 'Unrestricted Upload of File with Dangerous Type',
  'CWE-502': 'Deserialization of Untrusted Data',
  'CWE-521': 'Weak Password Requirements',
  'CWE-522': 'Insufficiently Protected Credentials',
  'CWE-532': 'Insertion of Sensitive Info into Log File',
  'CWE-538': 'Insertion of Sensitive Info into Externally-Accessible File',
  'CWE-601': 'URL Redirection to Untrusted Site (Open Redirect)',
  'CWE-611': 'Improper Restriction of XML External Entity Reference (XXE)',
  'CWE-613': 'Insufficient Session Expiration',
  'CWE-639': 'Authorization Bypass Through User-Controlled Key (IDOR)',
  'CWE-668': 'Exposure of Resource to Wrong Sphere',
  'CWE-693': 'Protection Mechanism Failure',
  'CWE-732': 'Incorrect Permission Assignment for Critical Resource',
  'CWE-798': 'Use of Hard-coded Credentials',
  'CWE-862': 'Missing Authorization',
  'CWE-863': 'Incorrect Authorization',
  'CWE-912': 'Hidden Functionality (Backdoor)',
  'CWE-918': 'Server-Side Request Forgery (SSRF)',
  'CWE-1021': 'Improper Restriction of Rendered UI Layers (Clickjacking)',
}

/**
 * Compliance control mapping reference.
 * Maps common finding categories to relevant controls across frameworks.
 */
export const COMPLIANCE_CONTROL_MAP: Record<string, ComplianceReference[]> = {
  'injection': [
    { framework: 'PCI-DSS', controls: ['6.2.4', '6.5.1'] },
    { framework: 'NIST-800-53', controls: ['SI-10', 'SI-16'] },
    { framework: 'SOC2', controls: ['CC6.1', 'CC7.1'] },
    { framework: 'ISO-27001', controls: ['A.14.2.5'] },
  ],
  'broken-auth': [
    { framework: 'PCI-DSS', controls: ['8.2', '8.3', '8.6'] },
    { framework: 'NIST-800-53', controls: ['IA-2', 'IA-5', 'IA-8'] },
    { framework: 'SOC2', controls: ['CC6.1', 'CC6.2'] },
    { framework: 'HIPAA', controls: ['164.312(d)', '164.312(a)(1)'] },
    { framework: 'ISO-27001', controls: ['A.9.2', 'A.9.4'] },
  ],
  'sensitive-data-exposure': [
    { framework: 'PCI-DSS', controls: ['3.4', '4.1', '6.5.3'] },
    { framework: 'NIST-800-53', controls: ['SC-8', 'SC-12', 'SC-28'] },
    { framework: 'SOC2', controls: ['CC6.1', 'CC6.7'] },
    { framework: 'HIPAA', controls: ['164.312(a)(2)(iv)', '164.312(e)(1)'] },
    { framework: 'ISO-27001', controls: ['A.10.1', 'A.18.1.4'] },
  ],
  'access-control': [
    { framework: 'PCI-DSS', controls: ['7.1', '7.2', '7.3'] },
    { framework: 'NIST-800-53', controls: ['AC-3', 'AC-6', 'AC-17'] },
    { framework: 'SOC2', controls: ['CC6.1', 'CC6.3'] },
    { framework: 'HIPAA', controls: ['164.312(a)(1)'] },
    { framework: 'ISO-27001', controls: ['A.9.1', 'A.9.2', 'A.9.4'] },
  ],
  'security-misconfiguration': [
    { framework: 'PCI-DSS', controls: ['2.2', '6.2', '6.3.2'] },
    { framework: 'NIST-800-53', controls: ['CM-6', 'CM-7', 'SI-2'] },
    { framework: 'SOC2', controls: ['CC6.1', 'CC7.1'] },
    { framework: 'ISO-27001', controls: ['A.12.6.1', 'A.14.2.2'] },
    { framework: 'CIS', controls: ['CIS-4', 'CIS-5'] },
  ],
  'cryptographic-failures': [
    { framework: 'PCI-DSS', controls: ['4.1', '4.2', '3.5'] },
    { framework: 'NIST-800-53', controls: ['SC-12', 'SC-13', 'SC-28'] },
    { framework: 'SOC2', controls: ['CC6.1', 'CC6.7'] },
    { framework: 'HIPAA', controls: ['164.312(a)(2)(iv)', '164.312(e)(2)(ii)'] },
    { framework: 'ISO-27001', controls: ['A.10.1.1', 'A.10.1.2'] },
  ],
  'vulnerable-components': [
    { framework: 'PCI-DSS', controls: ['6.2', '6.3.2'] },
    { framework: 'NIST-800-53', controls: ['SI-2', 'RA-5'] },
    { framework: 'SOC2', controls: ['CC7.1'] },
    { framework: 'ISO-27001', controls: ['A.12.6.1'] },
  ],
  'ssrf': [
    { framework: 'PCI-DSS', controls: ['6.2.4', '6.5.9'] },
    { framework: 'NIST-800-53', controls: ['SC-7', 'SI-10'] },
    { framework: 'SOC2', controls: ['CC6.1', 'CC6.6'] },
    { framework: 'ISO-27001', controls: ['A.13.1.1', 'A.14.2.5'] },
  ],
  'privilege-escalation': [
    { framework: 'PCI-DSS', controls: ['7.1', '7.2', '8.7'] },
    { framework: 'NIST-800-53', controls: ['AC-6', 'AC-6(1)', 'AC-6(5)'] },
    { framework: 'SOC2', controls: ['CC6.1', 'CC6.3'] },
    { framework: 'ISO-27001', controls: ['A.9.2.3', 'A.9.4.4'] },
  ],
  'lateral-movement': [
    { framework: 'NIST-800-53', controls: ['AC-4', 'SC-7', 'SI-4'] },
    { framework: 'SOC2', controls: ['CC6.1', 'CC6.6', 'CC7.2'] },
    { framework: 'ISO-27001', controls: ['A.13.1.1', 'A.13.1.3'] },
  ],
  'weak-credentials': [
    { framework: 'PCI-DSS', controls: ['8.2.3', '8.2.4', '8.2.5'] },
    { framework: 'NIST-800-53', controls: ['IA-5', 'IA-5(1)'] },
    { framework: 'SOC2', controls: ['CC6.1'] },
    { framework: 'HIPAA', controls: ['164.312(d)'] },
    { framework: 'ISO-27001', controls: ['A.9.4.3'] },
  ],
}

/**
 * Build a CVSS 3.1 score object from a vector string.
 * Parses the vector to extract the base score severity bucket.
 */
export function buildCvssScore(vector: string, baseScore: number): CvssScore {
  let baseSeverity: CvssScore['baseSeverity'] = 'none'
  if (baseScore >= 9.0) baseSeverity = 'critical'
  else if (baseScore >= 7.0) baseSeverity = 'high'
  else if (baseScore >= 4.0) baseSeverity = 'medium'
  else if (baseScore >= 0.1) baseSeverity = 'low'

  return {
    version: '3.1',
    vector,
    baseScore,
    baseSeverity,
  }
}

/**
 * Look up MITRE ATT&CK references by technique ID strings.
 */
export function lookupMitreAttack(techniqueIds: string[]): MitreAttackReference[] {
  return techniqueIds
    .map(id => MITRE_ATTACK_TECHNIQUES[id])
    .filter((ref): ref is MitreAttackReference => ref !== undefined)
}

/**
 * Look up compliance references by finding category.
 */
export function lookupCompliance(category: string): ComplianceReference[] {
  return COMPLIANCE_CONTROL_MAP[category] ?? []
}

/**
 * Look up OWASP Top 10 category from CWE IDs.
 */
export function mapCweToOwasp(cweIds: string[]): OwaspCategory[] {
  const categories = new Set<OwaspCategory>()

  for (const cwe of cweIds) {
    switch (cwe) {
      case 'CWE-22':
      case 'CWE-284':
      case 'CWE-639':
      case 'CWE-862':
      case 'CWE-863':
        categories.add('A01:2021-Broken-Access-Control')
        break
      case 'CWE-295':
      case 'CWE-311':
      case 'CWE-312':
      case 'CWE-319':
      case 'CWE-326':
      case 'CWE-327':
        categories.add('A02:2021-Cryptographic-Failures')
        break
      case 'CWE-77':
      case 'CWE-78':
      case 'CWE-79':
      case 'CWE-89':
      case 'CWE-94':
      case 'CWE-611':
        categories.add('A03:2021-Injection')
        break
      case 'CWE-200':
      case 'CWE-209':
      case 'CWE-502':
      case 'CWE-668':
        categories.add('A04:2021-Insecure-Design')
        break
      case 'CWE-250':
      case 'CWE-276':
      case 'CWE-732':
        categories.add('A05:2021-Security-Misconfiguration')
        break
      case 'CWE-287':
      case 'CWE-306':
      case 'CWE-307':
      case 'CWE-384':
      case 'CWE-521':
      case 'CWE-522':
      case 'CWE-613':
      case 'CWE-798':
        categories.add('A07:2021-Identification-and-Authentication-Failures')
        break
      case 'CWE-434':
      case 'CWE-912':
        categories.add('A08:2021-Software-and-Data-Integrity-Failures')
        break
      case 'CWE-532':
      case 'CWE-538':
      case 'CWE-693':
        categories.add('A09:2021-Security-Logging-and-Monitoring-Failures')
        break
      case 'CWE-918':
        categories.add('A10:2021-Server-Side-Request-Forgery')
        break
      case 'CWE-400':
      case 'CWE-601':
      case 'CWE-1021':
      case 'CWE-352':
        categories.add('A05:2021-Security-Misconfiguration')
        break
    }
  }

  return [...categories]
}
