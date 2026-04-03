<div align="center">

# Net-Runner 🥷

### エージェント型レッドチーム評価フレームワーク

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![License](https://img.shields.io/badge/ライセンス-教育目的-red?style=for-the-badge)](#ライセンス)

**12の専門エージェント &middot; 141のレッドチームツール &middot; 17の能力パック &middot; 10のペンテストスキル &middot; 6つのワークフロー**

*自然に話しかけてください。Net-Runnerが残りを処理します。*

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [中文](README.zh.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [Русский](README.ru.md) · **日本語** · [한국어](README.ko.md) · [हिन्दी](README.hi.md) · [Deutsch](README.de.md)

---

</div>

> ⚠️ **警告**
> 明示的に許可されたターゲットに**のみ**使用してください。Net-Runnerは合法的で許可されたペネトレーションテストおよび教育目的のために設計されています。

> 注記: この翻訳版 README は簡潔な概要です。運用者向けの完全で最新の参照は [README.md](README.md) と `docs/` にあります。

## 🔍 Net-Runnerとは？

Net-Runnerは、自然言語の指示を構造化されたセキュリティ評価に変換するマルチエージェントのレッドチームフレームワークです。**エンゲージメントリーダー**と会話すると、偵察、エクスプロイト、レポート作成などすべてを専門エージェントに委任します。

<details>
<summary><strong>なぜNet-Runner？</strong></summary>

- **自然言語** — フラグや構文を覚える必要なし；テストしたい内容を説明するだけ
- **マルチエージェントオーケストレーション** — 並列の専門エージェント、各々がツールの深い知識を持つ
- **組み込みガードレール** — スコープガードのチェックポイントが境界外の行動を防止
- **エビデンスファースト** — すべてのアクションが記録され、すべての発見が追跡可能
- **永続メモリ** — セッション間のRAGベース検索、エージェントごとおよびプロジェクトごと
- **141ツール接続済み** — `nmap`から`BloodHound`、`Ghidra`まで実行可能

</details>

---

## 🚀 クイックスタート

```bash
bun install
bun run build
node dist/cli.mjs
```

自然言語で指示を入力：

```
https://target.example を評価 — まず偵察から始めて、次にWebの脆弱性をテスト。
```

---

## 🤖 LLMプロバイダーの接続

Net-Runnerは複数のLLMプロバイダーに対応しています。起動前に環境変数を設定してください。

### `ANTHROPIC_API_KEY` を使う

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
node dist/cli.mjs
```

### OpenAI

```bash
export OPENAI_API_KEY="sk-..."
export OPENAI_MODEL="gpt-4o"          # オプション
node dist/cli.mjs
```

### Google Gemini

```bash
export GEMINI_API_KEY="AIza..."
export GEMINI_MODEL="gemini-2.5-pro"   # オプション
node dist/cli.mjs
```

### Ollama（ローカル）

```bash
ollama serve
ollama pull llama3.1:8b
export OPENAI_BASE_URL="http://localhost:11434/v1"
export OPENAI_MODEL="llama3.1:8b"
node dist/cli.mjs
```

### OpenAI互換 API

LM Studio、vLLM、Together AI、Groq、Fireworks、または任意の互換エンドポイントで動作：

```bash
export OPENAI_API_KEY="your-key"
export OPENAI_BASE_URL="https://your-provider.com/v1"
export OPENAI_MODEL="your-model-name"
node dist/cli.mjs
```

---

## ⚙️ 動作の仕組み

| ステップ | 実行内容 |
|---------|---------|
| **1. 検出** | 評価意図を解析、ターゲットを特定 |
| **2. 初期化** | `.netrunner/`を安全なデフォルト値で作成 |
| **3. 注入** | スコープ、認可、制限を各モデルターンに付加 |
| **4. 委任** | ワークフローと発見に基づき専門エージェントに作業を振り分け |
| **5. 防護** | 高影響アクション前にスコープガードチェックポイント |
| **6. 記録** | エビデンスと発見をリアルタイムで記録 |
| **7. 記憶** | エージェントごと・プロジェクトごとに知識を永続化 |
| **8. 報告** | エビデンスに基づく構造化評価出力を生成 |

---

## 🕵️ 専門エージェント

| エージェント | 専門分野 |
|:-----------|:---------|
| **エンゲージメントリーダー** | オーケストレーション、ワークフロールーティング、スキル調整 |
| **偵察スペシャリスト** | ネットワーク探索、DNS、OSINT、サブドメイン列挙 |
| **Webテスト** | XSS、SQLi、SSRF、認証バイパス、CMSスキャン |
| **APIテスト** | GraphQL、JWT、IDOR、マスアサインメント、スキーマ分析 |
| **ネットワークテスト** | SMB、SSH、FTP、サービスエクスプロイト、トラフィック分析 |
| **エクスプロイトスペシャリスト** | ペイロード生成、PoC実行、制御されたエクスプロイト |
| **権限昇格** | SUID、カーネルエクスプロイト、トークン悪用、コンテナエスケープ |
| **ラテラルムーブメント** | 認証情報の再利用、ピボッティング、ポートフォワーディング |
| **ADスペシャリスト** | LDAP/Kerberos、信頼悪用、ADCS、BloodHound |
| **リテストスペシャリスト** | 発見の再現、修正の検証 |
| **エビデンススペシャリスト** | アーティファクト管理、証拠チェーン、フォレンジック |
| **レポートスペシャリスト** | 深刻度分類、エグゼクティブサマリー、修復ガイダンス |

---

## 📋 ワークフロー

| ワークフロー | ターゲット環境 | 主要パック |
|:-----------|:-------------|:---------|
| `web-app-testing` | Webアプリケーション | 偵察、Web、エクスプロイト |
| `api-testing` | REST / GraphQL / SOAP | 偵察、API、エクスプロイト |
| `lab-target-testing` | HTB / ラボ / 内部ネットワーク | ネットワーク、エクスプロイト、AD、権限昇格 |
| `ctf-mode` | CTFチャレンジ | 偵察、Web、バイナリ、エクスプロイト |
| `ad-testing` | Active Directory | AD、ネットワーク、データベース、権限昇格 |
| `wifi-testing` | 802.11無線ネットワーク | WiFi、ネットワーク、エクスプロイト |

---

## 🛠️ ツールカバレッジ

**17の能力パックにわたる141ツール** — `nmap`、`nuclei`、`sqlmap`、`msfconsole`、`bloodhound`、`ghidra`、`volatility3`、`trivy`、`aircrack-ng`など。

カテゴリ別の完全なリストは[メインREADME](README.md)をご覧ください。

---

## 📜 ライセンス

このリポジトリは**教育目的**および**許可されたセキュリティテスト**のみを対象としています。

---

<div align="center">

*フラグではなく目標で考えるオペレーターのために構築。*

</div>
