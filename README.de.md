<div align="center">

# Net-Runner 🥷

### Agentisches Red-Team-Framework

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![License](https://img.shields.io/badge/Lizenz-Bildungszwecke-red?style=for-the-badge)](#lizenz)

**12 Spezialagenten · 141 Red-Team-Tools · 17 Fähigkeitspakete · 10 Pentest-Skills · 6 Workflows**

*Sprechen Sie natürlich. Net-Runner erledigt den Rest.*

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [中文](README.zh.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [हिन्दी](README.hi.md) · **Deutsch**

---

</div>

> ⚠️ **Warnung**
> Nur gegen Ziele verwenden, für die Sie eine ausdrückliche Genehmigung haben. Net-Runner ist für legale, autorisierte Sicherheitstests und Bildungszwecke gedacht.

## 🔍 Was ist Net-Runner?

Net-Runner ist ein Multi-Agenten-Framework für Sicherheitstests, das für natürliche Sprache ausgelegt ist.

Sie verbinden ein LLM, beschreiben Ziel und Absicht in normaler Sprache, und Net-Runner setzt die gesamte Laufzeit in Gang:

- es erkennt die Bewertungsabsicht
- es erzeugt eine projektbezogene `.netrunner/`-Laufzeitstruktur
- es injiziert Scope- und Workflow-Kontext in die Sitzung
- es leitet Arbeit bei Bedarf an Spezialagenten weiter
- es speichert Beweise, Speicher und Berichte während der laufenden Bewertung

```text
Sie beschreiben den Auftrag.
Net-Runner plant, delegiert, führt aus, merkt sich Kontext und erstellt Berichte.
```

---

## ✨ Warum es genutzt wird

- **Natürliche Sprache zuerst** — zum Starten müssen keine Kommandos auswendig gelernt werden
- **Ein durchgehendes System** — Agenten, Tools, Beweise, Speicher und Berichte laufen im selben Fluss
- **Spezialagenten** — Rollen für Recon, Web, API, Netzwerk, Exploit, AD, Retest, Evidence und Reporting sind bereits verdrahtet
- **Persistenter Speicher** — nützlicher Kontext kann sitzungsübergreifend per RAG-Abruf geladen werden
- **Beweisorientiert** — Funde, Ausführungsschritte, Freigaben und Berichte bleiben an dasselbe Engagement gebunden

---

## 🚀 Hier starten

### 1. Installieren und bauen

```bash
bun install
bun run build
```

### 2. Modell verbinden

#### `ANTHROPIC_API_KEY`

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
node dist/cli.mjs
```

#### OpenAI

```bash
export OPENAI_API_KEY="sk-..."
export OPENAI_MODEL="gpt-4o"
node dist/cli.mjs
```

#### Google Gemini

```bash
export GEMINI_API_KEY="AIza..."
export GEMINI_MODEL="gemini-2.5-pro"
node dist/cli.mjs
```

#### Ollama

```bash
ollama serve
ollama pull llama3.1:8b
export OPENAI_BASE_URL="http://localhost:11434/v1"
export OPENAI_MODEL="llama3.1:8b"
node dist/cli.mjs
```

#### Jede OpenAI-kompatible API

```bash
export OPENAI_API_KEY="ihr-schlüssel"
export OPENAI_BASE_URL="https://ihr-anbieter.com/v1"
export OPENAI_MODEL="ihr-modell"
node dist/cli.mjs
```

### 3. Natürlich sprechen

```text
Bewerte https://ziel.beispiel. Beginne mit Recon, finde die wichtigste Angriffsfläche, validiere die wahrscheinlichsten Probleme und halte Beweise währenddessen fest.
```

Net-Runner erkennt das Ziel, startet das Engagement, injiziert den richtigen Kontext und beginnt mit seiner agentischen Laufzeit.

---

## ⚙️ So funktioniert es

```text
Sie
  ↓
Haupt-LLM-Sitzung
  ↓
Net-Runner-Laufzeitkontext
  ↓
Spezialagenten + Tools + Speicher + Beweise
  ↓
Strukturierte Bewertungsausgabe
```

| Schritt | Was Net-Runner macht |
|--------|------------------------|
| **1. Erkennen** | Bewertungsabsicht, Zieltyp und wahrscheinlichen Workflow erkennen |
| **2. Starten** | `.netrunner/`-Status für das Engagement anlegen, falls er noch nicht existiert |
| **3. Injizieren** | Scope, Impact-Grenze, Workflow und Standardskills in die aktive Sitzung einfügen |
| **4. Routen** | Hauptlaufzeit und Spezialagenten gemeinsam nutzen, ohne dass Sie Befehle micromanagen müssen |
| **5. Schützen** | Interne Guardrails auf destruktive, persistente oder out-of-scope Aktionen anwenden |
| **6. Aufzeichnen** | Beweise, Ausführungsschritte, Funde, Reviews, Speicher und Berichte in derselben Hülle speichern |

Im Normalfall können Sie:

- ein Ziel angeben
- sagen, welche Art von Bewertung laufen soll
- um Fortsetzung, Vertiefung, Retest, Zusammenfassung oder Bericht bitten
- das System die vorhandene Umgebung, Tools, Speicher und Agenten nutzen lassen

---

## 🕵️ Agenten

Net-Runner behält den ursprünglichen allgemeinen agentischen Fluss bei und ergänzt ihn um spezialisierte Sicherheitsrollen.

| Agent | Aufgabe |
|:------|:--------|
| **Engagement Lead** | Orchestriert die Bewertung, wählt Workflow-Phasen und verteilt Arbeit |
| **Recon Specialist** | Findet Hosts, Dienste, Subdomains, Technologien und Angriffsfläche |
| **Web Testing Specialist** | Prüft Routen, Parameter, Auth-Flows und Web-Schwachstellen |
| **API Testing Specialist** | Prüft APIs, Schemas, JWTs, IDOR-Pfade und Zustandswechsel |
| **Network Testing Specialist** | Behandelt Service-Enumeration, Netzwerkvalidierung und Host-Tests |
| **Exploit Specialist** | Validiert kontrolliert die tatsächliche Auswirkung |
| **Privilege Escalation Specialist** | Behandelt Eskalationspfade nach erstem Zugriff |
| **Lateral Movement Specialist** | Behandelt Pivoting, Vertrauenspfade und Bewegung über mehrere Hosts |
| **AD Specialist** | Konzentriert sich auf Active Directory und Kerberos |
| **Retest Specialist** | Reproduziert Funde und validiert Behebungen |
| **Evidence Specialist** | Organisiert Artefakte und nachvollziehbare Beweise |
| **Reporting Specialist** | Wandelt Beweise in einen sauberen Bericht um |

Auch Kernagenten wie `general-purpose`, `Explore`, `Plan` und `verification` bleiben Teil des Systems.

---

## 🧱 Projektstruktur

```text
.netrunner/
├── engagement.json
├── run-state.json
├── evidence/
│   └── ledger.jsonl
├── findings/
├── reports/
├── artifacts/
├── memory/
│   ├── private.md
│   ├── team.md
│   └── agents/
└── instructions/
```

- `engagement.json` — aktueller Workflow, Ziele, Impact-Grenze und Einschränkungen
- `run-state.json` — Ausführungsschritte und ausstehende Reviews
- `evidence/` — append-only Beweisprotokoll
- `findings/` — strukturierte Finding-Ausgaben
- `reports/` — erzeugte Bewertungsberichte
- `artifacts/` — gesammelte Ausgaben und Unterstützungsdateien
- `memory/` — persistenter Speicher für Operator, Team und Agenten
- `instructions/` — projektspezifische Laufzeitanweisungen

---

## 💬 Beispiel-Prompts

```text
Bewerte https://ziel.beispiel und kartiere die externe Angriffsfläche.
```

```text
Führe das aktuelle Engagement fort, konzentriere dich auf Authentifizierungsschwächen und halte Beweise für alles Reale fest.
```

```text
Gehe zu intrusiver Validierung über und prüfe, ob das identifizierte Problem wirklich ausnutzbar ist.
```

```text
Erstelle einen Bericht aus den aktuellen Beweisen und fasse zuerst die kritischsten Findings zusammen.
```

---

## 📚 Dokumentation

Dieses README ist für den Operatorpfad gedacht. Für technische Details dient `docs/`.

- [Workflow-Überblick](docs/workflows/overview.md)
- [Service-Oberflächen](docs/capabilities/service-surfaces.md)
- `docs/` für Implementierungsdetails, Capability-Mapping und tiefere Laufzeitnotizen

---

## 📜 Lizenz

Dieses Repository ist nur für **Bildungszwecke** und **autorisierte Sicherheitstests** gedacht.

---

<div align="center">

*Gebaut für Operatoren, die in Zielen und Ergebnissen denken, nicht in Flags oder Setup-Ritualen.*

</div>
