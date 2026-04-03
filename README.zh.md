<div align="center">

# Net-Runner

### 智能红队评估框架

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![License](https://img.shields.io/badge/许可-教育用途-red?style=for-the-badge)](#许可证)

**12 个专业代理 &middot; 141 个红队工具 &middot; 17 个能力包 &middot; 9 个渗透测试技能 &middot; 6 个工作流**

*自然语言交流，Net-Runner 处理一切。*

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · **中文** · [العربية](README.ar.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [हिन्दी](README.hi.md) · [Deutsch](README.de.md)

---

</div>

> **警告**
> **仅**在您获得明确授权的目标上使用。Net-Runner 专为合法、授权的渗透测试和教育目的而设计。

## 什么是 Net-Runner？

Net-Runner 是一个多代理红队框架，将自然语言指令转化为结构化的安全评估。您与**任务负责人**对话——它将侦察、利用、报告等所有工作委派给专门的专业代理。

<details>
<summary><strong>为什么选择 Net-Runner？</strong></summary>

- **自然语言** — 无需记忆命令参数或语法；描述您想测试的内容即可
- **多代理编排** — 并行运行的专业代理，每个都具有深厚的工具知识
- **内置护栏** — 范围守卫检查点防止越界操作
- **证据优先** — 每个操作都被记录，每个发现都可追溯
- **持久记忆** — 基于 RAG 的跨会话检索，按代理和按项目
- **141 个工具已接入** — 从 `nmap` 到 `BloodHound` 再到 `Ghidra`，随时可执行

</details>

---

## 快速开始

```bash
bun install
bun run build
node dist/cli.mjs
```

然后输入自然语言指令：

```
评估 https://target.example — 先进行侦察，然后测试 Web 漏洞。
```

---

## 工作原理

| 步骤 | 执行内容 |
|------|---------|
| **1. 检测** | 解析评估意图，识别目标 |
| **2. 初始化** | 创建 `.netrunner/` 目录，使用安全默认值（未确认授权、只读影响） |
| **3. 注入** | 将范围、授权和限制附加到每个模型回合 |
| **4. 委派** | 根据工作流和发现将工作路由到专业代理 |
| **5. 守卫** | 在任何高影响操作前执行范围守卫检查点 |
| **6. 记录** | 实时记录证据、执行状态和发现 |
| **7. 记忆** | 按代理和按项目持久化知识，用于未来会话 |
| **8. 报告** | 生成结构化的、以证据为基础的评估输出 |

---

## 专业代理

| 代理 | 专长 |
|:-----|:-----|
| **任务负责人** | 编排、工作流路由、技能协调 |
| **侦察专家** | 网络发现、DNS、OSINT、子域枚举 |
| **Web 测试专家** | XSS、SQLi、SSRF、认证绕过、CMS 扫描 |
| **API 测试专家** | GraphQL、JWT、IDOR、批量分配、模式分析 |
| **网络测试专家** | SMB、SSH、FTP、服务利用、流量分析 |
| **利用专家** | Payload 生成、PoC 执行、受控利用 |
| **权限提升专家** | SUID、内核利用、令牌滥用、容器逃逸 |
| **横向移动专家** | 凭据重用、枢纽转发、端口转发 |
| **AD 专家** | LDAP/Kerberos、信任滥用、ADCS、BloodHound |
| **复测专家** | 复现发现、验证修复 |
| **证据专家** | 工件管理、证据链、数字取证 |
| **报告专家** | 严重性分级、执行摘要、修复建议 |

---

## 工作流

| 工作流 | 目标环境 | 关键能力包 |
|:-------|:---------|:----------|
| `web-app-testing` | Web 应用 | 侦察、Web、利用 |
| `api-testing` | REST / GraphQL / SOAP | 侦察、API、利用 |
| `lab-target-testing` | HTB / 实验室 / 内网 | 网络、利用、AD、权限提升 |
| `ctf-mode` | CTF 挑战 | 侦察、Web、二进制、利用 |
| `ad-testing` | Active Directory | AD、网络、数据库、权限提升 |
| `wifi-testing` | 802.11 无线网络 | WiFi、网络、利用 |

---

## 工具覆盖

**141 个工具，覆盖 17 个能力包** — 包括 `nmap`、`nuclei`、`sqlmap`、`msfconsole`、`bloodhound`、`ghidra`、`volatility3`、`trivy`、`aircrack-ng` 等。

完整分类列表请参阅[主 README](README.md)。

---

## 许可证

本仓库**仅供教育用途**和**授权安全测试**使用。

---

<div align="center">

*为以目标思考而非以命令行参数思考的操作员而构建。*

</div>
