// ---------------------------------------------------------------------------
// Industry → APT Threat Profiles
// ---------------------------------------------------------------------------
// Maps each industry sector to its most relevant threat actors, common
// initial-access vectors, and high-value targets that APTs pursue.
// Used by the APT simulation workflow selector to recommend the right
// simulation when a red team specifies their client's industry.
// ---------------------------------------------------------------------------

import type { IndustryThreatProfile } from './types.js'

export const INDUSTRY_PROFILES: IndustryThreatProfile[] = [
  // ── Government, Diplomacy, Policy, NGOs, Think Tanks ──────────────────
  {
    sector: 'government',
    label: 'Government, Diplomacy & Policy',
    description:
      'Government ministries, diplomatic missions, policy bodies, NGOs, think tanks, and intelligence agencies. The most targeted sector globally — nearly every nation-state APT includes government entities.',
    primaryThreats: ['apt29', 'apt28', 'turla', 'kimsuky', 'apt42', 'magic-hound'],
    secondaryThreats: ['mustang-panda', 'violet-typhoon', 'ke3chang', 'patchwork', 'volt-typhoon', 'muddywater', 'lapsus'],
    commonInitialAccess: [
      'Spearphishing with weaponized documents (T1566.001)',
      'Spearphishing links to credential-harvesting pages (T1566.002)',
      'Exploit public-facing VPN/email appliances (T1190)',
      'Abuse of valid cloud credentials (T1078.004)',
      'Trusted relationship compromise via IT service providers (T1199)',
    ],
    highValueTargets: [
      'Classified and sensitive policy documents',
      'Diplomatic communications and cable traffic',
      'Intelligence reports and assessments',
      'Personnel records and security clearance data',
      'Authentication infrastructure (AD, identity providers)',
      'Email systems (Exchange, M365)',
    ],
  },

  // ── Telecommunications, ISPs, Networking ──────────────────────────────
  {
    sector: 'telecommunications',
    label: 'Telecommunications & ISPs',
    description:
      'Telecom carriers, ISPs, satellite communications, and networking equipment providers. Targeted for lawful-intercept data, call detail records, and as pivot points into downstream customers.',
    primaryThreats: ['salt-typhoon', 'gallium', 'apt41', 'oilrig'],
    secondaryThreats: ['thrip', 'blacktech', 'unc3886', 'apt39', 'muddywater', 'lapsus'],
    commonInitialAccess: [
      'Exploit public-facing network appliances and routers (T1190)',
      'External remote service abuse — VPN, SSH (T1133)',
      'Valid account compromise (T1078)',
      'Supply-chain compromise of network equipment firmware (T1195.002)',
    ],
    highValueTargets: [
      'Call detail records (CDRs) and metadata',
      'Lawful-intercept infrastructure',
      'Network routing tables and BGP configurations',
      'Customer databases and subscriber data',
      'Core network infrastructure (SS7, Diameter, GTP)',
      'Network edge devices (routers, firewalls, load balancers)',
    ],
  },

  // ── Critical Infrastructure, Energy, Utilities, OT/ICS ────────────────
  {
    sector: 'critical-infrastructure',
    label: 'Critical Infrastructure & OT/ICS',
    description:
      'Power grids, water treatment, gas pipelines, transportation systems, and industrial control environments. Targeted for pre-positioning (Volt Typhoon), destructive operations (Sandworm), and long-term access.',
    primaryThreats: ['volt-typhoon', 'sandworm', 'apt33', 'muddywater'],
    secondaryThreats: ['apt39', 'lapsus', 'oilrig'],
    commonInitialAccess: [
      'Exploit public-facing OT/IT boundary systems (T1190)',
      'Valid account abuse on VPN and remote access (T1078)',
      'External remote services — RDP, VPN (T1133)',
      'Living-off-the-land via built-in OS tools (no malware drop)',
      'Spearphishing against engineering and operations staff (T1566.001)',
    ],
    highValueTargets: [
      'SCADA and HMI systems',
      'Programmable logic controllers (PLCs)',
      'Engineering workstations with OT network access',
      'Historian databases',
      'Safety instrumented systems (SIS)',
      'IT/OT boundary jump hosts',
      'Power grid dispatch and control systems',
    ],
  },

  // ── Energy (standalone for oil/gas/nuclear) ───────────────────────────
  {
    sector: 'energy',
    label: 'Energy, Oil & Gas',
    description:
      'Oil and gas operators, nuclear facilities, renewable energy, and energy trading. Overlaps with critical infrastructure but also includes corporate espionage against energy companies.',
    primaryThreats: ['apt33', 'sandworm', 'oilrig', 'muddywater'],
    secondaryThreats: ['volt-typhoon', 'ke3chang', 'blind-eagle', 'lapsus'],
    commonInitialAccess: [
      'Spearphishing with industry-themed lures (T1566.001)',
      'Password spraying against cloud/VPN portals (T1110.003)',
      'Exploit public-facing web apps (T1190)',
      'Credential abuse via compromised contractors (T1199)',
    ],
    highValueTargets: [
      'Drilling and production data',
      'SCADA systems for pipeline and refinery control',
      'Energy trading platforms and pricing data',
      'Engineering schematics and plant designs',
      'Corporate strategy and M&A documents',
    ],
  },

  // ── Defense, Aerospace, Maritime, Transportation ──────────────────────
  {
    sector: 'defense',
    label: 'Defense, Aerospace & Maritime',
    description:
      'Defense contractors, aerospace manufacturers, military logistics, maritime operators, and transportation systems. Heavily targeted for weapons programs, ship designs, and classified technical data.',
    primaryThreats: ['apt40', 'apt28', 'lazarus', 'apt33'],
    secondaryThreats: ['ta2541', 'turla', 'volt-typhoon', 'magic-hound', 'tropic-trooper', 'violet-typhoon', 'ke3chang'],
    commonInitialAccess: [
      'Spearphishing with defense/aviation themed documents (T1566.001)',
      'Exploit public-facing web applications (T1190)',
      'Watering hole attacks on industry forums (T1189)',
      'Trusted relationship abuse via subcontractors (T1199)',
      'Supply-chain compromise of development tools (T1195.002)',
    ],
    highValueTargets: [
      'Weapons system designs and specifications',
      'Classified military communications',
      'Ship and aircraft engineering data',
      'Defense procurement and contract information',
      'Satellite communication infrastructure',
      'Military logistics and deployment data',
    ],
  },

  // ── Healthcare, Biotech, Pharma ───────────────────────────────────────
  {
    sector: 'healthcare',
    label: 'Healthcare, Biotech & Pharma',
    description:
      'Hospitals, pharmaceutical companies, biotech research, medical device manufacturers, and public health organizations. Targeted for patient data, drug research, vaccine IP, and ransomware revenue.',
    primaryThreats: ['apt29', 'silk-typhoon', 'apt40', 'deep-panda'],
    secondaryThreats: ['tropic-trooper', 'apt18', 'andariel', 'apt42', 'exotic-lily', 'lapsus'],
    commonInitialAccess: [
      'Exploit public-facing web applications — especially Exchange (T1190)',
      'Spearphishing researchers and executives (T1566.001)',
      'Valid account abuse on cloud/SaaS platforms (T1078.004)',
      'Supply-chain compromise of medical software (T1195.002)',
    ],
    highValueTargets: [
      'Electronic health records (EHR/EMR systems)',
      'Clinical trial data and drug research',
      'Vaccine and treatment IP',
      'Medical device control systems',
      'Patient PII and insurance data',
      'Pharmaceutical manufacturing processes',
    ],
  },

  // ── Financial Services, Banking, Crypto ───────────────────────────────
  {
    sector: 'financial-services',
    label: 'Financial Services & Crypto',
    description:
      'Banks, investment firms, payment processors, insurance companies, cryptocurrency exchanges, and ATM networks. Targeted for direct financial theft, SWIFT abuse, crypto wallet theft, and insider trading data.',
    primaryThreats: ['apt38', 'lazarus', 'andariel', 'fin7'],
    secondaryThreats: ['silence', 'carbanak', 'oilrig', 'gallium', 'blind-eagle', 'contagious-interview', 'scattered-spider'],
    commonInitialAccess: [
      'Spearphishing with financial-themed lures (T1566.001)',
      'Watering hole attacks on financial news sites (T1189)',
      'Supply-chain compromise of financial software (T1195.002)',
      'Social engineering of developers — fake job interviews (T1566.003)',
      'Credential abuse and MFA fatigue (T1621)',
    ],
    highValueTargets: [
      'SWIFT messaging infrastructure',
      'Core banking systems and databases',
      'ATM networks and card processing systems',
      'Cryptocurrency hot wallets and signing keys',
      'Trading platforms and order management systems',
      'Customer PII and financial records',
      'Payment card data (PCI scope)',
    ],
  },

  // ── Technology, IT Services, Cloud, SaaS ──────────────────────────────
  {
    sector: 'technology',
    label: 'Technology, Cloud & SaaS',
    description:
      'Software companies, cloud providers, managed service providers, IT service firms, and SaaS platforms. Targeted as both end targets and as pivots to reach downstream customers (supply-chain).',
    primaryThreats: ['apt29', 'silk-typhoon', 'apt41', 'scattered-spider'],
    secondaryThreats: ['teamtnt', 'contagious-interview', 'exotic-lily', 'unc3886', 'lapsus'],
    commonInitialAccess: [
      'Cloud credential compromise — OAuth, SAML abuse (T1078.004)',
      'Supply-chain compromise of software packages (T1195.002)',
      'Trusted relationship abuse through MSP access (T1199)',
      'Social engineering targeting developers (T1566.003)',
      'Exploit public-facing cloud management consoles (T1190)',
      'MFA fatigue / push bombing (T1621)',
    ],
    highValueTargets: [
      'Source code repositories',
      'CI/CD pipelines and build infrastructure',
      'Cloud management consoles (AWS, Azure, GCP)',
      'Identity providers and SSO infrastructure',
      'Customer data across SaaS platforms',
      'Signing keys and certificates',
      'Container orchestration (Kubernetes) control planes',
    ],
  },

  // ── Manufacturing, Industrial, Engineering ────────────────────────────
  {
    sector: 'manufacturing',
    label: 'Manufacturing & Engineering',
    description:
      'Manufacturers, construction firms, engineering companies, electronics, and semiconductor producers. Targeted for trade secrets, manufacturing processes, and pre-positioning in supply chains.',
    primaryThreats: ['volt-typhoon', 'apt41', 'blacktech', 'kimsuky'],
    secondaryThreats: ['lapsus', 'ta2541', 'apt18'],
    commonInitialAccess: [
      'Exploit public-facing applications (T1190)',
      'Spearphishing with engineering/procurement themes (T1566.001)',
      'Valid account abuse on remote access (T1078)',
      'Trusted relationship via equipment vendors (T1199)',
    ],
    highValueTargets: [
      'CAD/CAM designs and engineering blueprints',
      'Manufacturing process and recipe data',
      'Supply-chain management systems',
      'Industrial control systems on factory floors',
      'Semiconductor design files (GDSII)',
      'Quality control and testing data',
    ],
  },

  // ── Education, Universities, Research ─────────────────────────────────
  {
    sector: 'education',
    label: 'Education & Research',
    description:
      'Universities, research institutions, academic laboratories, and student/faculty networks. Targeted for cutting-edge research, defense-adjacent academic work, and as soft targets for credential harvesting.',
    primaryThreats: ['kimsuky', 'turla', 'silk-typhoon'],
    secondaryThreats: ['apt40', 'magic-hound', 'tropic-trooper', 'lapsus'],
    commonInitialAccess: [
      'Spearphishing faculty and researchers (T1566.001, T1566.002)',
      'Exploit public-facing web applications and portals (T1190)',
      'Credential theft from academic SSO systems (T1078)',
      'Watering hole attacks on academic collaboration platforms (T1189)',
    ],
    highValueTargets: [
      'Unpublished research papers and grant proposals',
      'Defense-funded research data',
      'Student and faculty PII',
      'Research collaboration platforms',
      'High-performance computing clusters',
      'Intellectual property in STEM fields',
    ],
  },

  // ── Media, Journalists, Civil Society ─────────────────────────────────
  {
    sector: 'media',
    label: 'Media, Journalists & Civil Society',
    description:
      'News organizations, journalists, human rights groups, dissidents, and civil society organizations. Targeted for surveillance, source identification, and narrative control.',
    primaryThreats: ['magic-hound', 'apt42'],
    secondaryThreats: ['lazarus', 'fin7', 'lapsus'],
    commonInitialAccess: [
      'Highly personalized spearphishing (T1566.001, T1566.002, T1566.003)',
      'Fake social media outreach and trust building (T1585)',
      'Watering hole attacks on news/blog platforms (T1189)',
      'Credential harvesting from email/social media accounts (T1078)',
    ],
    highValueTargets: [
      'Journalist source databases and communications',
      'Unpublished investigative reports',
      'Whistleblower identities and contact information',
      'Editorial systems and content management platforms',
      'Personal devices of targeted individuals',
    ],
  },

  // ── Retail ────────────────────────────────────────────────────────────
  {
    sector: 'retail',
    label: 'Retail & E-Commerce',
    description:
      'Retail chains, e-commerce platforms, point-of-sale operators, and supply-chain logistics. Targeted for payment card data, customer PII, and supply-chain compromise.',
    primaryThreats: ['fin7', 'scattered-spider'],
    secondaryThreats: ['apt41', 'lapsus'],
    commonInitialAccess: [
      'Spearphishing with invoice/shipping lures (T1566.001)',
      'Exploit public-facing e-commerce applications (T1190)',
      'Social engineering of helpdesk staff (T1566.003)',
      'Supply-chain compromise of POS software (T1195.002)',
    ],
    highValueTargets: [
      'Point-of-sale systems and payment card data',
      'Customer PII and loyalty program databases',
      'E-commerce platform backends',
      'Supply-chain and inventory management systems',
      'Gift card and loyalty point systems',
    ],
  },

  // ── Legal ─────────────────────────────────────────────────────────────
  {
    sector: 'legal',
    label: 'Legal & Professional Services',
    description:
      'Law firms, consulting firms, and professional services organizations. Targeted because they hold sensitive client data — mergers, IP disputes, litigation strategy, and privileged communications.',
    primaryThreats: ['silk-typhoon', 'apt29'],
    secondaryThreats: ['apt41', 'scattered-spider'],
    commonInitialAccess: [
      'Spearphishing partners and associates (T1566.001)',
      'Exploit public-facing web applications (T1190)',
      'Credential abuse on cloud platforms (T1078.004)',
      'Trusted relationship compromise via client portals (T1199)',
    ],
    highValueTargets: [
      'Attorney-client privileged communications',
      'M&A deal data and due diligence materials',
      'Litigation strategy documents',
      'Intellectual property case files',
      'Client contact databases',
    ],
  },
]

export function findIndustryProfile(sector: IndustryThreatProfile['sector']): IndustryThreatProfile | undefined {
  return INDUSTRY_PROFILES.find(p => p.sector === sector)
}

export function getIndustriesForAptGroup(aptGroupId: string): IndustryThreatProfile[] {
  return INDUSTRY_PROFILES.filter(
    p => p.primaryThreats.includes(aptGroupId) || p.secondaryThreats.includes(aptGroupId),
  )
}
