# MCP Servers

OpenClaude supports Model Context Protocol (MCP) servers. MCP lets the agent call external tools — web scraping, databases, APIs, file systems, and more — beyond what's built in.

## How to Configure

Create a `.mcp.json` file in the root of any project you open with OpenClaude:

```json
{
  "mcpServers": {
    "your-server-name": {
      "command": "npx",
      "args": ["-y", "your-mcp-package"],
      "env": {
        "YOUR_API_KEY": "your-key-here"
      }
    }
  }
}
```

OpenClaude picks up `.mcp.json` automatically when you launch it from that directory. No restart needed after creating the file.

## Firecrawl — Web Scraping and Search

The built-in `WebFetch` tool works for simple pages. For JavaScript-rendered sites, paywalls, full-site crawls, or structured data extraction, [Firecrawl](https://firecrawl.dev) is the recommended MCP server.

**Get an API key at [firecrawl.dev/app/api-keys](https://www.firecrawl.dev/app/api-keys).**

Add this to your project's `.mcp.json`:

```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": ["-y", "firecrawl-mcp"],
      "env": {
        "FIRECRAWL_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

Or use the remote hosted endpoint (no local process needed):

```bash
claude mcp add firecrawl --url https://mcp.firecrawl.dev/YOUR_API_KEY/v2/mcp
```

### What It Adds

Once configured, the agent can call these tools directly:

| Tool | What it does |
|------|-------------|
| `firecrawl_scrape` | Scrape a single URL to clean markdown, handles JS-rendered pages |
| `firecrawl_search` | Web search with optional full-page content extraction |
| `firecrawl_crawl` | Crawl an entire site section (e.g., all `/docs/`) |
| `firecrawl_map` | Discover all URLs on a site |
| `firecrawl_extract` | Pull structured data from pages using a JSON schema |
| `firecrawl_agent` | Autonomous research agent that browses and synthesizes across pages |

### Verify

After adding `.mcp.json`, launch OpenClaude and ask it to scrape a page or search the web. The agent will use Firecrawl automatically when the task involves fetching web content.

For self-hosted Firecrawl instances, add `FIRECRAWL_API_URL` pointing to your instance alongside the API key.

## Other Servers

Any MCP-compatible server works the same way. Add multiple servers under `mcpServers`:

```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": ["-y", "firecrawl-mcp"],
      "env": {
        "FIRECRAWL_API_KEY": "your-key"
      }
    },
    "another-server": {
      "command": "npx",
      "args": ["-y", "another-mcp-package"]
    }
  }
}
```

Browse available MCP servers at [modelcontextprotocol.io](https://modelcontextprotocol.io).
