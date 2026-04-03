// ---------------------------------------------------------------------------
// APT Group Profiles
// ---------------------------------------------------------------------------
// Each profile contains the group's aliases, attribution, target industries,
// MITRE ATT&CK technique IDs, and source URLs.  Technique IDs reference
// entries in techniques.ts.  Sources point to MITRE group pages, CISA
// advisories, and vendor threat-intel reports.
//
// Naming convention: the `id` field uses the most common lowercase shorthand
// (e.g. "apt29").  The `name` field uses the most widely recognized label.
// ---------------------------------------------------------------------------

import type { AptGroup } from './types.js'

// ═══════════════════════════════════════════════════════════════════════════
// RUSSIA-ATTRIBUTED GROUPS
// ═══════════════════════════════════════════════════════════════════════════

export const APT29: AptGroup = {
  id: 'apt29',
  name: 'APT29',
  aliases: ['Cozy Bear', 'Midnight Blizzard', 'NOBELIUM', 'The Dukes', 'UNC2452'],
  attribution: 'russia',
  description:
    'Russian SVR-linked espionage group targeting government, diplomatic entities, NGOs, IT service providers, healthcare, and research institutes. Known for sophisticated supply-chain attacks (SolarWinds) and cloud-focused initial access.',
  targetIndustries: ['government', 'technology', 'healthcare', 'education', 'energy'],
  techniques: [
    'T1566.001', 'T1566.002', 'T1195.002', 'T1078.004', 'T1190',
    'T1059.001', 'T1059.003', 'T1053.005',
    'T1547.001', 'T1098.001', 'T1136.003', 'T1505.003',
    'T1068', 'T1134',
    'T1027', 'T1070.004', 'T1036', 'T1140', 'T1550.001', 'T1562.001',
    'T1003.001', 'T1528', 'T1539', 'T1110.003', 'T1621',
    'T1087.002', 'T1082', 'T1069.002', 'T1018', 'T1580',
    'T1021.001', 'T1021.006', 'T1550.002',
    'T1560.001', 'T1114.002', 'T1005', 'T1530',
    'T1071.001', 'T1573.002', 'T1102', 'T1105',
    'T1041', 'T1567.002',
  ],
  sources: [
    { label: 'MITRE ATT&CK – APT29', url: 'https://attack.mitre.org/groups/G0016/', type: 'mitre' },
    { label: 'CISA – SVR Cloud Access Advisory (2024)', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-057a', type: 'cisa' },
    { label: 'Microsoft – Midnight Blizzard Profile', url: 'https://www.microsoft.com/en-us/security/blog/tag/midnight-blizzard/', type: 'microsoft' },
  ],
  lastReviewed: '2025-04-03',
}

export const APT28: AptGroup = {
  id: 'apt28',
  name: 'APT28',
  aliases: ['Fancy Bear', 'Forest Blizzard', 'Sofacy', 'Strontium', 'Pawn Storm', 'Sednit'],
  attribution: 'russia',
  description:
    'Russian GRU Unit 26165 espionage group best known for government, defense, military, and NATO-adjacent targeting. Aggressive use of credential harvesting, zero-day exploitation, and custom malware.',
  targetIndustries: ['government', 'defense', 'energy', 'media'],
  techniques: [
    'T1566.001', 'T1566.002', 'T1190', 'T1133', 'T1189',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1203', 'T1204.001', 'T1204.002',
    'T1547.001', 'T1053.005', 'T1543.003', 'T1574.001',
    'T1068', 'T1055',
    'T1027', 'T1036', 'T1140', 'T1218.011', 'T1112', 'T1562.001', 'T1497',
    'T1003.001', 'T1110.001', 'T1110.003', 'T1556', 'T1552.001', 'T1557',
    'T1087.002', 'T1082', 'T1083', 'T1016', 'T1049', 'T1033',
    'T1021.001', 'T1021.002', 'T1550.002', 'T1570',
    'T1560.001', 'T1005', 'T1039', 'T1114.002', 'T1056.001', 'T1113',
    'T1071.001', 'T1071.003', 'T1573.001', 'T1105', 'T1090.002',
    'T1041', 'T1048',
  ],
  sources: [
    { label: 'MITRE ATT&CK – APT28', url: 'https://attack.mitre.org/groups/G0007/', type: 'mitre' },
    { label: 'CISA – Russian GRU Cyber Actors', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-296a', type: 'cisa' },
  ],
  lastReviewed: '2025-04-03',
}

export const TURLA: AptGroup = {
  id: 'turla',
  name: 'Turla',
  aliases: ['Venomous Bear', 'Secret Blizzard', 'Snake', 'Uroburos', 'Waterbug'],
  attribution: 'russia',
  description:
    'Russian FSB-linked espionage group with long-running campaigns against government, embassies, military, education, research, and pharma. Known for hijacking other threat actors\' infrastructure.',
  targetIndustries: ['government', 'defense', 'education', 'healthcare'],
  techniques: [
    'T1566.001', 'T1189', 'T1190', 'T1091', 'T1199',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1059.007', 'T1047',
    'T1547.001', 'T1543.003', 'T1505.003', 'T1546',
    'T1055', 'T1068',
    'T1027', 'T1070.004', 'T1070.006', 'T1036', 'T1140', 'T1202', 'T1497',
    'T1003.001', 'T1552.001', 'T1555', 'T1056.001',
    'T1087.002', 'T1082', 'T1083', 'T1046', 'T1135', 'T1016', 'T1033',
    'T1021.001', 'T1021.002', 'T1021.004', 'T1570', 'T1080',
    'T1560.001', 'T1005', 'T1039', 'T1114.002', 'T1113',
    'T1071.001', 'T1573.001', 'T1572', 'T1090.002', 'T1105', 'T1001',
    'T1041', 'T1048',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Turla', url: 'https://attack.mitre.org/groups/G0010/', type: 'mitre' },
    { label: 'CISA – Snake Malware', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-129a', type: 'cisa' },
  ],
  lastReviewed: '2025-04-03',
}

export const SANDWORM: AptGroup = {
  id: 'sandworm',
  name: 'Sandworm',
  aliases: ['APT44', 'ELECTRUM', 'IRIDIUM', 'Voodoo Bear', 'Seashell Blizzard'],
  attribution: 'russia',
  description:
    'Russian GRU Unit 74455 destructive operations group tied to energy, telecom, government, and critical infrastructure attacks. Responsible for NotPetya, Industroyer/CrashOverride, and multiple OT/ICS-targeted campaigns.',
  targetIndustries: ['critical-infrastructure', 'energy', 'government', 'telecommunications'],
  techniques: [
    'T1566.001', 'T1190', 'T1195.002', 'T1133', 'T1078',
    'T1059.001', 'T1059.003', 'T1059.006', 'T1053.005', 'T1569.002',
    'T1547.001', 'T1543.003', 'T1053.005', 'T1505.003',
    'T1068', 'T1055',
    'T1027', 'T1070.004', 'T1036', 'T1140', 'T1562.001',
    'T1003.001', 'T1003.003', 'T1110.001', 'T1552.001',
    'T1087.002', 'T1082', 'T1046', 'T1135', 'T1016', 'T1018',
    'T1021.001', 'T1021.002', 'T1550.002', 'T1570',
    'T1560.001', 'T1005', 'T1039',
    'T1071.001', 'T1105', 'T1573.002', 'T1572',
    'T1041',
    'T1485', 'T1486', 'T1489', 'T1490', 'T1491',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Sandworm', url: 'https://attack.mitre.org/groups/G0034/', type: 'mitre' },
    { label: 'Mandiant – APT44 / Sandworm', url: 'https://www.mandiant.com/resources/blog/apt44-unearthing-sandworm', type: 'mandiant' },
  ],
  lastReviewed: '2025-04-03',
}

// ═══════════════════════════════════════════════════════════════════════════
// CHINA-ATTRIBUTED GROUPS
// ═══════════════════════════════════════════════════════════════════════════

export const APT41: AptGroup = {
  id: 'apt41',
  name: 'APT41',
  aliases: ['Brass Typhoon', 'Wicked Panda', 'Winnti', 'Double Dragon', 'Barium'],
  attribution: 'china',
  description:
    'Dual-mission Chinese state-sponsored group conducting both espionage and financially motivated operations across telecom, technology, healthcare, finance, education, retail, and gaming.',
  targetIndustries: ['technology', 'telecommunications', 'healthcare', 'financial-services', 'manufacturing', 'education', 'retail'],
  techniques: [
    'T1566.001', 'T1190', 'T1195.002', 'T1199',
    'T1059.001', 'T1059.003', 'T1059.006', 'T1053.005', 'T1047',
    'T1547.001', 'T1543.003', 'T1505.003', 'T1574.001', 'T1098',
    'T1068', 'T1055', 'T1134',
    'T1027', 'T1036', 'T1140', 'T1070.004', 'T1553', 'T1218.011', 'T1562.001',
    'T1003.001', 'T1003.003', 'T1558.003', 'T1552.001',
    'T1087.002', 'T1082', 'T1083', 'T1046', 'T1135', 'T1069.002', 'T1482',
    'T1021.001', 'T1021.002', 'T1550.002', 'T1570',
    'T1560.001', 'T1005', 'T1039', 'T1213',
    'T1071.001', 'T1573.001', 'T1105', 'T1090.002', 'T1568',
    'T1041', 'T1567.002',
  ],
  sources: [
    { label: 'MITRE ATT&CK – APT41', url: 'https://attack.mitre.org/groups/G0096/', type: 'mitre' },
    { label: 'Mandiant – APT41 Profile', url: 'https://www.mandiant.com/resources/apt41-dual-espionage-and-cyber-crime-operation', type: 'mandiant' },
  ],
  lastReviewed: '2025-04-03',
}

export const VOLT_TYPHOON: AptGroup = {
  id: 'volt-typhoon',
  name: 'Volt Typhoon',
  aliases: ['BRONZE SILHOUETTE', 'Vanguard Panda', 'DEV-0391'],
  attribution: 'china',
  description:
    'Chinese state-sponsored group focused on pre-positioning within critical infrastructure for potential disruptive activity. Heavy use of living-off-the-land techniques. Targets manufacturing, utilities, transportation, construction, maritime, government, IT, and education.',
  targetIndustries: ['critical-infrastructure', 'manufacturing', 'energy', 'government', 'technology', 'defense'],
  techniques: [
    'T1190', 'T1133', 'T1078',
    'T1059.001', 'T1059.003', 'T1047',
    'T1078', 'T1136.001',
    'T1548',
    'T1218', 'T1036', 'T1027', 'T1070.004', 'T1202', 'T1562.001',
    'T1003.001', 'T1552.001', 'T1555',
    'T1082', 'T1083', 'T1087.002', 'T1046', 'T1135', 'T1016', 'T1049', 'T1033', 'T1007',
    'T1021.001', 'T1021.004', 'T1550.002',
    'T1560.001', 'T1005', 'T1039',
    'T1071.001', 'T1090.002', 'T1572', 'T1105',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Volt Typhoon', url: 'https://attack.mitre.org/groups/G1017/', type: 'mitre' },
    { label: 'CISA – Volt Typhoon Advisory', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a', type: 'cisa' },
    { label: 'Microsoft – Volt Typhoon', url: 'https://www.microsoft.com/en-us/security/blog/2023/05/24/volt-typhoon-targets-us-critical-infrastructure-with-living-off-the-land-techniques/', type: 'microsoft' },
  ],
  lastReviewed: '2025-04-03',
}

export const SALT_TYPHOON: AptGroup = {
  id: 'salt-typhoon',
  name: 'Salt Typhoon',
  aliases: ['GhostEmperor', 'FamousSparrow', 'UNC2286'],
  attribution: 'china',
  description:
    'Chinese state-sponsored group linked to compromises of major U.S. telecoms and ISPs. One of the clearest current examples of telecom-focused espionage.',
  targetIndustries: ['telecommunications', 'government'],
  techniques: [
    'T1190', 'T1133', 'T1078',
    'T1059.001', 'T1059.003',
    'T1505.003', 'T1543.003', 'T1547.001',
    'T1068',
    'T1027', 'T1036', 'T1070.004', 'T1562.001',
    'T1003.001', 'T1552.001',
    'T1082', 'T1046', 'T1016', 'T1087.002',
    'T1021.001', 'T1021.004', 'T1570',
    'T1005', 'T1560.001', 'T1119',
    'T1071.001', 'T1573.002', 'T1105',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Salt Typhoon', url: 'https://attack.mitre.org/groups/G1045/', type: 'mitre' },
    { label: 'CISA – Telecom Hardening Guidance', url: 'https://www.cisa.gov/news-events/alerts/2024/12/04/cisa-and-partners-release-joint-guide-securing-communications-infrastructure', type: 'cisa' },
  ],
  lastReviewed: '2025-04-03',
}

export const SILK_TYPHOON: AptGroup = {
  id: 'silk-typhoon',
  name: 'Silk Typhoon',
  aliases: ['HAFNIUM'],
  attribution: 'china',
  description:
    'Chinese state-sponsored group known for mass exploitation of Exchange Server zero-days. Targets infectious disease researchers, healthcare, law firms, higher education, defense contractors, policy think tanks, and NGOs. Shifted toward IT supply-chain and cloud targeting in 2025.',
  targetIndustries: ['technology', 'healthcare', 'education', 'defense', 'legal', 'government'],
  techniques: [
    'T1190', 'T1195.002', 'T1199', 'T1078.004',
    'T1059.001', 'T1059.003',
    'T1505.003', 'T1136.003', 'T1098.001',
    'T1068',
    'T1027', 'T1070.004', 'T1036',
    'T1003.001', 'T1528', 'T1552.001',
    'T1082', 'T1087.002', 'T1083', 'T1046', 'T1580',
    'T1021.002', 'T1550.001',
    'T1005', 'T1114.002', 'T1530', 'T1213',
    'T1071.001', 'T1105', 'T1102',
    'T1041', 'T1567.002',
  ],
  sources: [
    { label: 'MITRE ATT&CK – HAFNIUM', url: 'https://attack.mitre.org/groups/G0125/', type: 'mitre' },
    { label: 'Microsoft – Silk Typhoon Supply Chain', url: 'https://www.microsoft.com/en-us/security/blog/2025/03/05/silk-typhoon-targeting-it-supply-chain/', type: 'microsoft' },
  ],
  lastReviewed: '2025-04-03',
}

export const GALLIUM: AptGroup = {
  id: 'gallium',
  name: 'GALLIUM',
  aliases: ['Granite Typhoon'],
  attribution: 'china',
  description:
    'Chinese state-sponsored group associated with telecom, financial institutions, and government targeting.',
  targetIndustries: ['telecommunications', 'financial-services', 'government'],
  techniques: [
    'T1190', 'T1133', 'T1078',
    'T1059.001', 'T1059.003',
    'T1505.003', 'T1547.001',
    'T1068',
    'T1027', 'T1036', 'T1070.004',
    'T1003.001', 'T1552.001',
    'T1082', 'T1046', 'T1087.002', 'T1016',
    'T1021.001', 'T1570',
    'T1005', 'T1560.001',
    'T1071.001', 'T1105', 'T1573.001',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – GALLIUM', url: 'https://attack.mitre.org/groups/G0093/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

export const MUSTANG_PANDA: AptGroup = {
  id: 'mustang-panda',
  name: 'Mustang Panda',
  aliases: ['BRONZE PRESIDENT', 'RedDelta', 'TA416', 'Earth Preta'],
  attribution: 'china',
  description:
    'China-linked espionage actor commonly associated with government and geopolitical targeting, especially in Southeast Asia and Europe.',
  targetIndustries: ['government', 'telecommunications', 'defense'],
  techniques: [
    'T1566.001', 'T1566.002', 'T1091',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1204.002',
    'T1547.001', 'T1574.001',
    'T1055',
    'T1027', 'T1036', 'T1140', 'T1574.001', 'T1218.011',
    'T1056.001', 'T1552.001',
    'T1082', 'T1083', 'T1016', 'T1033',
    'T1091',
    'T1560.001', 'T1005', 'T1119', 'T1113',
    'T1071.001', 'T1105', 'T1573.001', 'T1090.002',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Mustang Panda', url: 'https://attack.mitre.org/groups/G0129/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

export const APT40: AptGroup = {
  id: 'apt40',
  name: 'Leviathan / APT40',
  aliases: ['Leviathan', 'Gingham Typhoon', 'TEMP.Periscope', 'BRONZE MOHAWK'],
  attribution: 'china',
  description:
    'Chinese MSS-linked group targeting aerospace, aviation, maritime, transportation, defense industrial base, plus healthcare, academia, and government.',
  targetIndustries: ['defense', 'government', 'healthcare', 'education', 'manufacturing'],
  techniques: [
    'T1566.001', 'T1566.002', 'T1190', 'T1189', 'T1199',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1204.002', 'T1203',
    'T1547.001', 'T1053.005', 'T1505.003', 'T1574.001',
    'T1068', 'T1055',
    'T1027', 'T1036', 'T1140', 'T1070.004', 'T1218.011',
    'T1003.001', 'T1552.001', 'T1110.003',
    'T1087.002', 'T1082', 'T1083', 'T1046', 'T1135', 'T1016',
    'T1021.001', 'T1021.002', 'T1550.002', 'T1570',
    'T1560.001', 'T1005', 'T1039', 'T1114.002',
    'T1071.001', 'T1105', 'T1573.001', 'T1090.002',
    'T1041', 'T1048',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Leviathan', url: 'https://attack.mitre.org/groups/G0065/', type: 'mitre' },
    { label: 'CISA – APT40 Advisory', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-200a', type: 'cisa' },
  ],
  lastReviewed: '2025-04-03',
}

export const BLACKTECH: AptGroup = {
  id: 'blacktech',
  name: 'BlackTech',
  aliases: ['Palmerworm', 'Circuit Panda', 'Manga Taurus'],
  attribution: 'china',
  description:
    'China-linked group targeting media, construction, engineering, electronics, and financial victims, especially in East Asia and the U.S. Often relevant where telecom/network access is part of the intrusion chain.',
  targetIndustries: ['telecommunications', 'manufacturing', 'financial-services', 'media'],
  techniques: [
    'T1190', 'T1199', 'T1133',
    'T1059.001', 'T1059.003',
    'T1547.001', 'T1574.001', 'T1505.003',
    'T1068',
    'T1027', 'T1036', 'T1553', 'T1070.004',
    'T1003.001', 'T1552.001',
    'T1082', 'T1046', 'T1016', 'T1087.002',
    'T1021.001', 'T1021.004', 'T1570',
    'T1005', 'T1560.001',
    'T1071.001', 'T1105', 'T1573.001',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – BlackTech', url: 'https://attack.mitre.org/groups/G0098/', type: 'mitre' },
    { label: 'CISA – BlackTech Advisory', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-270a', type: 'cisa' },
  ],
  lastReviewed: '2025-04-03',
}

export const DEEP_PANDA: AptGroup = {
  id: 'deep-panda',
  name: 'Deep Panda',
  aliases: ['Shell Crew', 'KungFu Kittens', 'PinkPanther'],
  attribution: 'china',
  description:
    'Chinese group known across government, defense, financial, telecom, and notably the Anthem healthcare intrusion.',
  targetIndustries: ['government', 'defense', 'financial-services', 'telecommunications', 'healthcare'],
  techniques: [
    'T1190', 'T1078',
    'T1059.001', 'T1059.003', 'T1047',
    'T1505.003', 'T1547.001',
    'T1068', 'T1055',
    'T1027', 'T1036', 'T1070.004', 'T1140',
    'T1003.001', 'T1552.001',
    'T1082', 'T1087.002', 'T1046', 'T1016',
    'T1021.002', 'T1550.002',
    'T1005', 'T1560.001', 'T1119',
    'T1071.001', 'T1105',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Deep Panda', url: 'https://attack.mitre.org/groups/G0009/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

export const VIOLET_TYPHOON: AptGroup = {
  id: 'violet-typhoon',
  name: 'Violet Typhoon',
  aliases: ['APT31', 'Zirconium', 'Judgment Panda'],
  attribution: 'china',
  description:
    'Chinese MSS-linked group associated with international affairs communities and politically relevant individuals.',
  targetIndustries: ['government', 'defense', 'technology'],
  techniques: [
    'T1566.001', 'T1566.002', 'T1190', 'T1189',
    'T1059.001', 'T1059.003', 'T1204.001',
    'T1547.001', 'T1574.001',
    'T1055',
    'T1027', 'T1036', 'T1140', 'T1070.004',
    'T1552.001', 'T1555',
    'T1082', 'T1083', 'T1016', 'T1033',
    'T1021.001',
    'T1005', 'T1560.001', 'T1113',
    'T1071.001', 'T1105', 'T1573.001',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – APT31', url: 'https://attack.mitre.org/groups/G0128/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

export const KE3CHANG: AptGroup = {
  id: 'ke3chang',
  name: 'Ke3chang',
  aliases: ['APT15', 'Nylon Typhoon', 'Vixen Panda', 'Playful Dragon'],
  attribution: 'china',
  description:
    'China-linked group targeting oil, government, diplomatic, military, and NGOs.',
  targetIndustries: ['government', 'energy', 'defense'],
  techniques: [
    'T1566.001', 'T1190',
    'T1059.001', 'T1059.003', 'T1204.002',
    'T1547.001', 'T1053.005',
    'T1068',
    'T1027', 'T1036', 'T1070.004',
    'T1003.001', 'T1552.001',
    'T1082', 'T1087.002', 'T1046',
    'T1021.002', 'T1570',
    'T1005', 'T1560.001',
    'T1071.001', 'T1105',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Ke3chang', url: 'https://attack.mitre.org/groups/G0004/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

export const THRIP: AptGroup = {
  id: 'thrip',
  name: 'Thrip',
  aliases: ['Lotus Blossom'],
  attribution: 'china',
  description:
    'Group associated with satellite communications, telecoms, and defense contractors.',
  targetIndustries: ['telecommunications', 'defense'],
  techniques: [
    'T1566.001', 'T1190',
    'T1059.001', 'T1059.003',
    'T1547.001', 'T1505.003',
    'T1027', 'T1036',
    'T1003.001', 'T1552.001',
    'T1082', 'T1046', 'T1016',
    'T1021.001',
    'T1005', 'T1560.001',
    'T1071.001', 'T1105',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Thrip', url: 'https://attack.mitre.org/groups/G0076/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

export const TROPIC_TROOPER: AptGroup = {
  id: 'tropic-trooper',
  name: 'Tropic Trooper',
  aliases: ['Pirate Panda', 'KeyBoy', 'Earth Centaur'],
  attribution: 'china',
  description:
    'China-linked group targeting healthcare, government, transportation, and high-tech in Asia-Pacific regions.',
  targetIndustries: ['healthcare', 'government', 'defense', 'technology'],
  techniques: [
    'T1566.001', 'T1190', 'T1189',
    'T1059.001', 'T1059.003', 'T1204.002',
    'T1547.001', 'T1574.001',
    'T1055',
    'T1027', 'T1036', 'T1140',
    'T1003.001', 'T1552.001',
    'T1082', 'T1083', 'T1046',
    'T1021.001',
    'T1005', 'T1560.001',
    'T1071.001', 'T1105', 'T1573.001',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Tropic Trooper', url: 'https://attack.mitre.org/groups/G0081/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

export const UNC3886: AptGroup = {
  id: 'unc3886',
  name: 'UNC3886',
  aliases: [],
  attribution: 'china',
  description:
    'Notable for network infrastructure compromise including Juniper and VMware devices. Relevant for telecom/network edge targeting.',
  targetIndustries: ['telecommunications', 'technology', 'defense'],
  techniques: [
    'T1190', 'T1133',
    'T1059.001', 'T1059.006',
    'T1505.003', 'T1543.003',
    'T1068',
    'T1027', 'T1070.004', 'T1562.001',
    'T1552.001', 'T1003.001',
    'T1082', 'T1046', 'T1016',
    'T1021.004',
    'T1005',
    'T1071.001', 'T1105', 'T1572',
    'T1041',
  ],
  sources: [
    { label: 'Mandiant – UNC3886', url: 'https://www.mandiant.com/resources/blog/unc3886-vmware-esxi-zero-day', type: 'mandiant' },
  ],
  lastReviewed: '2025-04-03',
}

export const APT18: AptGroup = {
  id: 'apt18',
  name: 'APT18',
  aliases: ['Wekby', 'Dynamite Panda', 'TG-0416'],
  attribution: 'china',
  description:
    'China-linked group targeting medical, technology, manufacturing, government, and human-rights-related targets.',
  targetIndustries: ['healthcare', 'technology', 'manufacturing', 'government'],
  techniques: [
    'T1566.001', 'T1190', 'T1189',
    'T1059.001', 'T1059.003', 'T1203',
    'T1547.001',
    'T1068',
    'T1027', 'T1036', 'T1140',
    'T1003.001', 'T1552.001',
    'T1082', 'T1083', 'T1046',
    'T1021.001',
    'T1005', 'T1560.001',
    'T1071.001', 'T1105',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – APT18', url: 'https://attack.mitre.org/groups/G0026/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

// ═══════════════════════════════════════════════════════════════════════════
// NORTH KOREA-ATTRIBUTED GROUPS
// ═══════════════════════════════════════════════════════════════════════════

export const LAZARUS: AptGroup = {
  id: 'lazarus',
  name: 'Lazarus Group',
  aliases: ['HIDDEN COBRA', 'Diamond Sleet', 'Zinc', 'Labyrinth Chollima'],
  attribution: 'north-korea',
  description:
    'Umbrella North Korean state-sponsored group spanning financial theft, crypto theft, espionage, and destructive operations. Responsible for WannaCry, Sony hack, and Bangladesh Bank heist.',
  targetIndustries: ['financial-services', 'technology', 'defense', 'media', 'government'],
  techniques: [
    'T1566.001', 'T1566.002', 'T1189', 'T1190', 'T1195.002',
    'T1059.001', 'T1059.003', 'T1059.006', 'T1059.007', 'T1204.001', 'T1204.002', 'T1203',
    'T1547.001', 'T1053.005', 'T1543.003', 'T1574.001',
    'T1068', 'T1055', 'T1134',
    'T1027', 'T1027.005', 'T1036', 'T1140', 'T1070.004', 'T1218.011', 'T1553', 'T1562.001', 'T1497',
    'T1003.001', 'T1110.001', 'T1552.001', 'T1555', 'T1539',
    'T1082', 'T1083', 'T1087.002', 'T1046', 'T1016', 'T1049', 'T1033',
    'T1021.001', 'T1021.002', 'T1550.002', 'T1570',
    'T1560.001', 'T1005', 'T1056.001', 'T1113', 'T1119',
    'T1071.001', 'T1573.001', 'T1573.002', 'T1105', 'T1102', 'T1090.002', 'T1568',
    'T1041', 'T1048',
    'T1485', 'T1486', 'T1489', 'T1490', 'T1491', 'T1657',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Lazarus Group', url: 'https://attack.mitre.org/groups/G0032/', type: 'mitre' },
    { label: 'CISA – North Korean State-Sponsored Cyber Actors', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-108a', type: 'cisa' },
  ],
  lastReviewed: '2025-04-03',
}

export const APT38: AptGroup = {
  id: 'apt38',
  name: 'APT38',
  aliases: ['BeagleBoyz', 'Bluenoroff', 'Stardust Chollima', 'Sapphire Sleet'],
  attribution: 'north-korea',
  description:
    'North Korean finance-focused group targeting banks, financial institutions, casinos, crypto exchanges, SWIFT endpoints, and ATMs. One of the clearest finance-targeted APTs.',
  targetIndustries: ['financial-services'],
  techniques: [
    'T1566.001', 'T1566.002', 'T1190', 'T1195.002',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1204.002', 'T1569.002',
    'T1547.001', 'T1053.005', 'T1543.003',
    'T1068',
    'T1027', 'T1036', 'T1140', 'T1070.004', 'T1070.006', 'T1218.011', 'T1562.001',
    'T1003.001', 'T1552.001', 'T1555',
    'T1082', 'T1083', 'T1046', 'T1016', 'T1049',
    'T1021.001', 'T1021.002', 'T1570',
    'T1005', 'T1560.001', 'T1119',
    'T1071.001', 'T1573.001', 'T1105', 'T1102',
    'T1041', 'T1029',
    'T1485', 'T1489', 'T1490', 'T1657',
  ],
  sources: [
    { label: 'MITRE ATT&CK – APT38', url: 'https://attack.mitre.org/groups/G0082/', type: 'mitre' },
    { label: 'CISA – BeagleBoyz', url: 'https://www.cisa.gov/news-events/alerts/2020/08/26/north-korean-state-sponsored-cyber-actors-use-beagleboyz-cryptocurrency', type: 'cisa' },
  ],
  lastReviewed: '2025-04-03',
}

export const KIMSUKY: AptGroup = {
  id: 'kimsuky',
  name: 'Kimsuky',
  aliases: ['Velvet Chollima', 'Emerald Sleet', 'Black Banshee', 'Thallium'],
  attribution: 'north-korea',
  description:
    'North Korean espionage group targeting government agencies, think tanks, subject-matter experts, education, business services, and manufacturing.',
  targetIndustries: ['government', 'education', 'manufacturing', 'technology'],
  techniques: [
    'T1566.001', 'T1566.002', 'T1566.003', 'T1189',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1059.007', 'T1204.001', 'T1204.002',
    'T1547.001', 'T1053.005',
    'T1055',
    'T1027', 'T1036', 'T1140', 'T1218.011',
    'T1003.001', 'T1110.003', 'T1552.001', 'T1539', 'T1556',
    'T1082', 'T1083', 'T1087.002', 'T1016', 'T1033',
    'T1021.001',
    'T1005', 'T1560.001', 'T1114.002', 'T1056.001', 'T1113',
    'T1071.001', 'T1071.003', 'T1105', 'T1102', 'T1573.001',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Kimsuky', url: 'https://attack.mitre.org/groups/G0094/', type: 'mitre' },
    { label: 'CISA – Kimsuky Advisory', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-301a', type: 'cisa' },
  ],
  lastReviewed: '2025-04-03',
}

export const ANDARIEL: AptGroup = {
  id: 'andariel',
  name: 'Andariel',
  aliases: ['Onyx Sleet', 'Silent Chollima', 'Plutonium', 'Stonefly'],
  attribution: 'north-korea',
  description:
    'North Korean group conducting operations against ATMs, banks, crypto exchanges, government, military, and defense. Also funds espionage through ransomware against U.S. healthcare entities.',
  targetIndustries: ['financial-services', 'healthcare', 'government', 'defense'],
  techniques: [
    'T1566.001', 'T1190', 'T1189',
    'T1059.001', 'T1059.003', 'T1059.006', 'T1204.002',
    'T1547.001', 'T1053.005', 'T1543.003',
    'T1068', 'T1055',
    'T1027', 'T1036', 'T1140', 'T1070.004', 'T1562.001',
    'T1003.001', 'T1552.001', 'T1110.001',
    'T1082', 'T1083', 'T1046', 'T1087.002', 'T1016',
    'T1021.001', 'T1021.002', 'T1570',
    'T1005', 'T1560.001',
    'T1071.001', 'T1105', 'T1573.001', 'T1219',
    'T1041',
    'T1486', 'T1489', 'T1657',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Andariel', url: 'https://attack.mitre.org/groups/G0138/', type: 'mitre' },
    { label: 'CISA – Andariel / Maui Ransomware', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-187a', type: 'cisa' },
  ],
  lastReviewed: '2025-04-03',
}

export const CONTAGIOUS_INTERVIEW: AptGroup = {
  id: 'contagious-interview',
  name: 'Contagious Interview',
  aliases: ['Famous Chollima', 'CL-STA-0240'],
  attribution: 'north-korea',
  description:
    'Newer North Korea-aligned actor with a focus on cryptocurrency and software developers across Windows, Linux, and macOS.',
  targetIndustries: ['technology', 'financial-services'],
  techniques: [
    'T1566.001', 'T1566.003',
    'T1059.001', 'T1059.006', 'T1059.007', 'T1204.002',
    'T1547.001',
    'T1027', 'T1036', 'T1140',
    'T1552.001', 'T1539',
    'T1082', 'T1083', 'T1016',
    'T1005', 'T1560.001',
    'T1071.001', 'T1105', 'T1102',
    'T1041',
    'T1657',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Contagious Interview', url: 'https://attack.mitre.org/groups/G1034/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

// ═══════════════════════════════════════════════════════════════════════════
// IRAN-ATTRIBUTED GROUPS
// ═══════════════════════════════════════════════════════════════════════════

export const APT42: AptGroup = {
  id: 'apt42',
  name: 'APT42',
  aliases: ['Calanque', 'UNC788'],
  attribution: 'iran',
  description:
    'Iranian surveillance/espionage actor focused on the Middle East but also seen against multiple industries and countries. IRGC-IO linked.',
  targetIndustries: ['government', 'media', 'education', 'healthcare'],
  techniques: [
    'T1566.001', 'T1566.002', 'T1566.003',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1204.001', 'T1204.002',
    'T1547.001', 'T1053.005',
    'T1027', 'T1036', 'T1140',
    'T1110.003', 'T1528', 'T1539', 'T1621',
    'T1082', 'T1083', 'T1087.002', 'T1016',
    'T1005', 'T1114.002', 'T1113',
    'T1071.001', 'T1105', 'T1102',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – APT42', url: 'https://attack.mitre.org/groups/G1044/', type: 'mitre' },
    { label: 'Mandiant – APT42', url: 'https://www.mandiant.com/resources/blog/apt42-charms-cons-compromises', type: 'mandiant' },
  ],
  lastReviewed: '2025-04-03',
}

export const MAGIC_HOUND: AptGroup = {
  id: 'magic-hound',
  name: 'Magic Hound',
  aliases: ['APT35', 'Charming Kitten', 'Mint Sandstorm', 'Phosphorus', 'Newscaster'],
  attribution: 'iran',
  description:
    'Iranian IRGC-linked group going after government, military, academics, journalists, WHO-linked targets, and policy communities. Very strong fit for media/journalist/dissident targeting.',
  targetIndustries: ['government', 'defense', 'media', 'education', 'healthcare'],
  techniques: [
    'T1566.001', 'T1566.002', 'T1566.003', 'T1190', 'T1189',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1204.001', 'T1204.002',
    'T1547.001', 'T1053.005', 'T1543.003',
    'T1068',
    'T1027', 'T1036', 'T1140', 'T1070.004', 'T1218.011',
    'T1003.001', 'T1110.001', 'T1110.003', 'T1528', 'T1539', 'T1621',
    'T1082', 'T1083', 'T1087.002', 'T1016', 'T1033',
    'T1021.001',
    'T1005', 'T1114.002', 'T1056.001', 'T1113', 'T1560.001',
    'T1071.001', 'T1105', 'T1102', 'T1573.001', 'T1219',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Magic Hound', url: 'https://attack.mitre.org/groups/G0059/', type: 'mitre' },
    { label: 'Microsoft – Mint Sandstorm', url: 'https://www.microsoft.com/en-us/security/blog/2023/04/18/nation-state-threat-actor-mint-sandstorm-refines-tradecraft-to-attack-high-value-targets/', type: 'microsoft' },
  ],
  lastReviewed: '2025-04-03',
}

export const APT33: AptGroup = {
  id: 'apt33',
  name: 'APT33',
  aliases: ['Peach Sandstorm', 'Elfin', 'Magnallium', 'Refined Kitten'],
  attribution: 'iran',
  description:
    'Iranian group especially associated with aviation and energy sectors.',
  targetIndustries: ['energy', 'defense', 'government'],
  techniques: [
    'T1566.001', 'T1566.002', 'T1190',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1204.002',
    'T1547.001', 'T1053.005',
    'T1068',
    'T1027', 'T1036', 'T1140',
    'T1110.001', 'T1110.003', 'T1003.001', 'T1552.001',
    'T1082', 'T1083', 'T1087.002', 'T1046',
    'T1021.001', 'T1021.002',
    'T1005', 'T1560.001',
    'T1071.001', 'T1105', 'T1573.001',
    'T1041',
    'T1485', 'T1486',
  ],
  sources: [
    { label: 'MITRE ATT&CK – APT33', url: 'https://attack.mitre.org/groups/G0064/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

export const MUDDY_WATER: AptGroup = {
  id: 'muddywater',
  name: 'MuddyWater',
  aliases: ['Mercury', 'Mango Sandstorm', 'Static Kitten', 'TEMP.Zagros'],
  attribution: 'iran',
  description:
    'Iranian MOIS-linked group targeting telecommunications, local government, defense, and oil and natural gas.',
  targetIndustries: ['telecommunications', 'government', 'defense', 'energy'],
  techniques: [
    'T1566.001', 'T1566.002', 'T1190',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1059.007', 'T1204.002',
    'T1547.001', 'T1053.005',
    'T1055',
    'T1027', 'T1036', 'T1140', 'T1218.011',
    'T1003.001', 'T1110.003', 'T1552.001',
    'T1082', 'T1083', 'T1087.002', 'T1046', 'T1016',
    'T1021.001', 'T1021.006',
    'T1005', 'T1560.001', 'T1113',
    'T1071.001', 'T1105', 'T1219', 'T1573.001',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – MuddyWater', url: 'https://attack.mitre.org/groups/G0069/', type: 'mitre' },
    { label: 'CISA – MuddyWater Advisory', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-055a', type: 'cisa' },
  ],
  lastReviewed: '2025-04-03',
}

export const OILRIG: AptGroup = {
  id: 'oilrig',
  name: 'OilRig',
  aliases: ['APT34', 'Hazel Sandstorm', 'Crambus', 'Helix Kitten'],
  attribution: 'iran',
  description:
    'Iranian group targeting telecommunications, financial, government, energy, and chemical sectors, including supply-chain style operations.',
  targetIndustries: ['telecommunications', 'financial-services', 'government', 'energy'],
  techniques: [
    'T1566.001', 'T1566.002', 'T1190', 'T1133',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1204.002', 'T1053.005',
    'T1547.001', 'T1053.005', 'T1505.003',
    'T1068',
    'T1027', 'T1036', 'T1140', 'T1070.004',
    'T1003.001', 'T1110.001', 'T1552.001', 'T1555', 'T1056.001',
    'T1082', 'T1083', 'T1087.002', 'T1046', 'T1016', 'T1049',
    'T1021.001', 'T1021.002',
    'T1005', 'T1039', 'T1114.002', 'T1560.001',
    'T1071.001', 'T1071.003', 'T1105', 'T1573.001', 'T1132',
    'T1041', 'T1048',
  ],
  sources: [
    { label: 'MITRE ATT&CK – OilRig', url: 'https://attack.mitre.org/groups/G0049/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

export const APT39: AptGroup = {
  id: 'apt39',
  name: 'APT39',
  aliases: ['Chafer', 'Remix Kitten'],
  attribution: 'iran',
  description:
    'Iranian group focused on telecom and government espionage, relevant where critical national infrastructure data is involved.',
  targetIndustries: ['telecommunications', 'government'],
  techniques: [
    'T1566.001', 'T1190', 'T1133',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1204.002',
    'T1547.001', 'T1053.005',
    'T1027', 'T1036', 'T1140',
    'T1003.001', 'T1110.001', 'T1552.001',
    'T1082', 'T1083', 'T1087.002', 'T1046', 'T1016',
    'T1021.001', 'T1021.002',
    'T1005', 'T1560.001', 'T1056.001',
    'T1071.001', 'T1105', 'T1219',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – APT39', url: 'https://attack.mitre.org/groups/G0087/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

// ═══════════════════════════════════════════════════════════════════════════
// OTHER / SOUTH ASIA / MULTI-ATTRIBUTION
// ═══════════════════════════════════════════════════════════════════════════

export const PATCHWORK: AptGroup = {
  id: 'patchwork',
  name: 'Patchwork',
  aliases: ['Hangover', 'Dropping Elephant', 'Chinastrats', 'Monsoon'],
  attribution: 'unknown',
  description:
    'South Asia-attributed group most associated with diplomatic and government agencies.',
  targetIndustries: ['government', 'defense'],
  techniques: [
    'T1566.001', 'T1566.002', 'T1189',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1204.002', 'T1203',
    'T1547.001',
    'T1027', 'T1036', 'T1140',
    'T1056.001', 'T1552.001',
    'T1082', 'T1083', 'T1016', 'T1033',
    'T1005', 'T1113', 'T1560.001',
    'T1071.001', 'T1105', 'T1573.001',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Patchwork', url: 'https://attack.mitre.org/groups/G0040/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

export const BLIND_EAGLE: AptGroup = {
  id: 'blind-eagle',
  name: 'Blind Eagle',
  aliases: ['APT-C-36'],
  attribution: 'unknown',
  description:
    'South America-focused group notably targeting Colombian government, financial, and petroleum sectors.',
  targetIndustries: ['government', 'financial-services', 'energy'],
  techniques: [
    'T1566.001', 'T1566.002',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1204.002',
    'T1547.001',
    'T1027', 'T1036', 'T1140',
    'T1056.001', 'T1552.001',
    'T1082', 'T1083',
    'T1005', 'T1560.001', 'T1113',
    'T1071.001', 'T1105',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Blind Eagle', url: 'https://attack.mitre.org/groups/G1030/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

export const TA2541: AptGroup = {
  id: 'ta2541',
  name: 'TA2541',
  aliases: [],
  attribution: 'unknown',
  description:
    'Persistent actor targeting aviation, aerospace, transportation, manufacturing, and defense with commodity RATs.',
  targetIndustries: ['defense', 'manufacturing'],
  techniques: [
    'T1566.001',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1204.002',
    'T1547.001',
    'T1027', 'T1036', 'T1140',
    'T1082', 'T1083', 'T1016', 'T1033',
    'T1005', 'T1113',
    'T1071.001', 'T1105', 'T1219',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – TA2541', url: 'https://attack.mitre.org/groups/G1018/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

// ═══════════════════════════════════════════════════════════════════════════
// CYBERCRIME / APT-STYLE GROUPS
// ═══════════════════════════════════════════════════════════════════════════

export const FIN7: AptGroup = {
  id: 'fin7',
  name: 'FIN7',
  aliases: ['Carbanak Group', 'Navigator Group', 'Sangria Tempest', 'Carbon Spider'],
  attribution: 'cybercrime',
  description:
    'Best known for retail/payment card crime, but MITRE also lists financial services, cloud services, transport, pharma, media, and utilities.',
  targetIndustries: ['financial-services', 'retail', 'healthcare', 'technology', 'media'],
  techniques: [
    'T1566.001', 'T1566.002', 'T1190',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1059.007', 'T1204.001', 'T1204.002',
    'T1547.001', 'T1053.005', 'T1543.003',
    'T1055', 'T1134',
    'T1027', 'T1027.005', 'T1036', 'T1140', 'T1218.011', 'T1562.001',
    'T1003.001', 'T1552.001', 'T1555', 'T1056.001',
    'T1082', 'T1083', 'T1087.002', 'T1046', 'T1016', 'T1033',
    'T1021.001', 'T1021.002', 'T1570',
    'T1005', 'T1560.001', 'T1113',
    'T1071.001', 'T1105', 'T1573.001', 'T1102',
    'T1041',
    'T1486', 'T1657',
  ],
  sources: [
    { label: 'MITRE ATT&CK – FIN7', url: 'https://attack.mitre.org/groups/G0046/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

export const SILENCE: AptGroup = {
  id: 'silence',
  name: 'Silence',
  aliases: ['Whisper Spider'],
  attribution: 'cybercrime',
  description:
    'Cybercrime group focused on financial institutions, banking systems, ATMs, and card processing.',
  targetIndustries: ['financial-services'],
  techniques: [
    'T1566.001',
    'T1059.001', 'T1059.003', 'T1204.002',
    'T1547.001', 'T1053.005',
    'T1027', 'T1036', 'T1140',
    'T1003.001', 'T1552.001',
    'T1082', 'T1083', 'T1046',
    'T1021.001',
    'T1005', 'T1113', 'T1056.001',
    'T1071.001', 'T1105',
    'T1041',
    'T1657',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Silence', url: 'https://attack.mitre.org/groups/G0091/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

export const CARBANAK: AptGroup = {
  id: 'carbanak',
  name: 'Carbanak',
  aliases: ['Anunak', 'FIN7 (overlap)'],
  attribution: 'cybercrime',
  description:
    'Classic financial institution targeting group. Pioneered many techniques later adopted by banking trojans.',
  targetIndustries: ['financial-services'],
  techniques: [
    'T1566.001',
    'T1059.001', 'T1059.003', 'T1059.005', 'T1204.002',
    'T1547.001', 'T1053.005', 'T1543.003',
    'T1055',
    'T1027', 'T1036', 'T1140', 'T1218.011',
    'T1003.001', 'T1552.001', 'T1056.001',
    'T1082', 'T1083', 'T1046', 'T1016',
    'T1021.001', 'T1021.002',
    'T1005', 'T1113', 'T1560.001',
    'T1071.001', 'T1105',
    'T1041',
    'T1657',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Carbanak', url: 'https://attack.mitre.org/groups/G0008/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

export const SCATTERED_SPIDER: AptGroup = {
  id: 'scattered-spider',
  name: 'Scattered Spider',
  aliases: ['UNC3944', 'Octo Tempest', 'Star Fraud', '0ktapus'],
  attribution: 'cybercrime',
  description:
    'One of the most important APT-style intrusion sets for identity-centric access, social engineering, and cloud/SaaS compromise. Known for SIM swapping, MFA fatigue, and helpdesk social engineering.',
  targetIndustries: ['technology', 'telecommunications', 'financial-services', 'retail'],
  techniques: [
    'T1566.002', 'T1566.003', 'T1078.004', 'T1199',
    'T1059.001', 'T1059.003', 'T1059.006',
    'T1136.003', 'T1098.001', 'T1078.004',
    'T1548',
    'T1550.001', 'T1562.001',
    'T1528', 'T1539', 'T1621', 'T1110.003', 'T1557',
    'T1082', 'T1087.002', 'T1580', 'T1069.002',
    'T1550.001',
    'T1530', 'T1213', 'T1114.002',
    'T1071.001', 'T1102', 'T1219',
    'T1567.002', 'T1537',
    'T1486', 'T1531',
  ],
  sources: [
    { label: 'MITRE ATT&CK – Scattered Spider', url: 'https://attack.mitre.org/groups/G1015/', type: 'mitre' },
    { label: 'Microsoft – Octo Tempest', url: 'https://www.microsoft.com/en-us/security/blog/2023/10/25/octo-tempest-crosses-boundaries-to-facilitate-extortion-encryption-and-destruction/', type: 'microsoft' },
  ],
  lastReviewed: '2025-04-03',
}

export const LAPSUS: AptGroup = {
  id: 'lapsus',
  name: 'LAPSUS$',
  aliases: ['DEV-0537', 'Strawberry Tempest'],
  attribution: 'cybercrime',
  description:
    'High-impact APT-style group that has hit energy, telecom, government, healthcare, technology, media, higher education, and manufacturing.',
  targetIndustries: ['technology', 'telecommunications', 'government', 'healthcare', 'manufacturing', 'media', 'energy', 'education'],
  techniques: [
    'T1566.002', 'T1566.003', 'T1078', 'T1199',
    'T1059.001', 'T1059.003',
    'T1098', 'T1136.003',
    'T1548',
    'T1550.001', 'T1562.001',
    'T1528', 'T1539', 'T1621', 'T1557',
    'T1082', 'T1087.002', 'T1580',
    'T1550.001',
    'T1530', 'T1213', 'T1005',
    'T1071.001', 'T1102', 'T1219',
    'T1567.002',
    'T1531',
  ],
  sources: [
    { label: 'MITRE ATT&CK – LAPSUS$', url: 'https://attack.mitre.org/groups/G1004/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

export const TEAMTNT: AptGroup = {
  id: 'teamtnt',
  name: 'TeamTNT',
  aliases: [],
  attribution: 'cybercrime',
  description:
    'Cloud and container-focused group, usually for cryptomining but operationally important for cloud security testing.',
  targetIndustries: ['technology'],
  techniques: [
    'T1190', 'T1078',
    'T1059.001', 'T1059.006',
    'T1543.003', 'T1136.001',
    'T1068',
    'T1027', 'T1070.004', 'T1562.001',
    'T1552.001', 'T1110.001',
    'T1082', 'T1083', 'T1046', 'T1580',
    'T1021.004',
    'T1005', 'T1119',
    'T1071.001', 'T1105',
    'T1041',
    'T1496',
  ],
  sources: [
    { label: 'MITRE ATT&CK – TeamTNT', url: 'https://attack.mitre.org/groups/G0139/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

export const EXOTIC_LILY: AptGroup = {
  id: 'exotic-lily',
  name: 'EXOTIC LILY',
  aliases: [],
  attribution: 'cybercrime',
  description:
    'Important initial-access broker for IT, cybersecurity, and healthcare targets. Known for highly crafted social engineering.',
  targetIndustries: ['technology', 'healthcare'],
  techniques: [
    'T1566.001', 'T1566.002',
    'T1059.001', 'T1059.003', 'T1204.001', 'T1204.002',
    'T1547.001',
    'T1027', 'T1036',
    'T1082', 'T1083',
    'T1071.001', 'T1105', 'T1102',
    'T1041',
  ],
  sources: [
    { label: 'MITRE ATT&CK – EXOTIC LILY', url: 'https://attack.mitre.org/groups/G1011/', type: 'mitre' },
  ],
  lastReviewed: '2025-04-03',
}

// ═══════════════════════════════════════════════════════════════════════════
// MASTER REGISTRY
// ═══════════════════════════════════════════════════════════════════════════

export const APT_GROUPS: AptGroup[] = [
  // Russia
  APT29, APT28, TURLA, SANDWORM,
  // China
  APT41, VOLT_TYPHOON, SALT_TYPHOON, SILK_TYPHOON, GALLIUM, MUSTANG_PANDA,
  APT40, BLACKTECH, DEEP_PANDA, VIOLET_TYPHOON, KE3CHANG, THRIP,
  TROPIC_TROOPER, UNC3886, APT18,
  // North Korea
  LAZARUS, APT38, KIMSUKY, ANDARIEL, CONTAGIOUS_INTERVIEW,
  // Iran
  APT42, MAGIC_HOUND, APT33, MUDDY_WATER, OILRIG, APT39,
  // Other / South Asia
  PATCHWORK, BLIND_EAGLE, TA2541,
  // Cybercrime / APT-style
  FIN7, SILENCE, CARBANAK, SCATTERED_SPIDER, LAPSUS, TEAMTNT, EXOTIC_LILY,
]

export function findAptGroup(id: string): AptGroup | undefined {
  return APT_GROUPS.find(g => g.id === id)
}

export function findAptGroupsByAttribution(attr: AptGroup['attribution']): AptGroup[] {
  return APT_GROUPS.filter(g => g.attribution === attr)
}

export function findAptGroupsByIndustry(sector: AptGroup['targetIndustries'][number]): AptGroup[] {
  return APT_GROUPS.filter(g => g.targetIndustries.includes(sector))
}
