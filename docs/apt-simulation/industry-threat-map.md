# Industry → APT Threat Actor Quick Reference

> Use this table to quickly identify which APT groups are most relevant when testing a specific industry.

## Primary Threat Mapping

| Industry | Primary Threats | Nation-State Focus |
|---|---|---|
| **Government** | APT29, APT28, Turla, Kimsuky, APT42, Magic Hound | Russia, North Korea, Iran |
| **Telecommunications** | Salt Typhoon, GALLIUM, APT41, OilRig | China, Iran |
| **Critical Infrastructure** | Volt Typhoon, Sandworm, APT33, MuddyWater | China, Russia, Iran |
| **Energy** | APT33, Sandworm, OilRig, MuddyWater | Iran, Russia |
| **Defense** | APT40, APT28, Lazarus, APT33 | China, Russia, North Korea, Iran |
| **Healthcare** | APT29, Silk Typhoon, APT40, Deep Panda | Russia, China |
| **Financial Services** | APT38, Lazarus, Andariel, FIN7 | North Korea, Cybercrime |
| **Technology** | APT29, Silk Typhoon, APT41, Scattered Spider | Russia, China, Cybercrime |
| **Manufacturing** | Volt Typhoon, APT41, BlackTech, Kimsuky | China, North Korea |
| **Education** | Kimsuky, Turla, Silk Typhoon | North Korea, Russia, China |
| **Media** | Magic Hound, APT42 | Iran |
| **Retail** | FIN7, Scattered Spider | Cybercrime |
| **Legal** | Silk Typhoon, APT29 | China, Russia |

## How to Use This Map

1. **Identify your client's industry** from the table above
2. **Select the primary threat** most relevant to the engagement scope
3. **Run the simulation**: `/apt-simulation [APT group] against [industry]`
4. The simulation will load the attack chain, MITRE techniques, and phase-by-phase guidance

## Available Simulation Workflows

| Workflow | Command |
|---|---|
| APT29 Gov Cloud Espionage | `/apt-simulation APT29 against government` |
| APT28 Gov Credential Harvesting | `/apt-simulation APT28 against government` |
| Volt Typhoon Infrastructure | `/apt-simulation Volt Typhoon critical infrastructure` |
| Sandworm ICS/OT Destructive | `/apt-simulation Sandworm ICS` |
| APT38 SWIFT Heist | `/apt-simulation APT38 financial` |
| Scattered Spider Identity | `/apt-simulation Scattered Spider financial` |
| Salt Typhoon Telecom | `/apt-simulation Salt Typhoon telecom` |
| Silk Typhoon Supply Chain | `/apt-simulation Silk Typhoon technology` |
| Lazarus Healthcare | `/apt-simulation Lazarus healthcare` |
| APT41 Manufacturing | `/apt-simulation APT41 manufacturing` |

## Source

All mappings derived from MITRE ATT&CK group pages, CISA advisories, and vendor threat intelligence reports. See `docs/apt-simulation/README.md` for full source list.

File reference: `src/security/apt-simulation/industryMapping.ts`
