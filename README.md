# Code in Context

AI-assisted programming workshop.

Workshop website and three 50-minute [Spectacle](https://nearform.com/open-source/spectacle/) presentations for IT students and developers.

**Author:** [Mark Joseph J. Solidarios](https://github.com/mjsolidarios).

The sessions cover choosing and extending coding agents (AI IDEs, terminal agents such as OpenCode and Antigravity CLI, AGENTS.md, Agent Skills, and MCP servers), studying with AI under course rules (Gemini Notebook, ChatGPT desktop, Grok, Google Stitch, and GitHub Education benefits), and a live demo that builds the same app with and without skills and MCP before fixing a bug with a failing test. Slides reveal one point per click, and code slides step through highlighted lines. Each deck has speaker notes with timing. `content.pdf` is the original program reference.

The shared JavaScript example normalizes a small array of finite, non-negative numbers. Runnable snippets use `.mjs` files and Node’s built-in test runner; no test package is required.

## Design

The visual system is locked in `design.md` (Cobalt theme: Space Grotesk, IBM Plex Sans and Mono, one cobalt accent, graphite code cards). Tokens live in `src/tokens.css`; slide colours mirror them in `src/theme/spectacleTheme.ts`. Press `Ctrl+K` / `Cmd+K` on the site for the command palette.

## Talks

| Route | Topic |
| --- | --- |
| `/talks/agentic-coding` | Agentic Coding |
| `/talks/ai-for-students` | Effective Use of AI as an IT Student |
| `/talks/efficient-programming` | Efficient Programming with AI |

Companion pages: `/tools` (tools and student benefits), `/demo` (files and scorecard for the two-setup demo), `/setup`, `/responsible-ai`.

## Prerequisites

- A supported Node.js LTS release compatible with Vite (22.12+ on the 22.x line, for example)
- Git and a code editor
- Optional access to an AI coding assistant for the workshop exercises

Viewing the site and slides only requires a browser. GitHub and hosting accounts are optional for participants.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

```bash
npm run build
npm run preview
```

## Spectacle

- Arrow keys: next and previous step (items reveal one at a time)
- `Ctrl+K` / `Cmd+K`: command bar
- `Alt+Shift+F`: fullscreen
- `Alt+Shift+P`: presenter mode
- `Alt+Shift+O`: overview
- `?exportMode=true`: print-friendly export

## Content references

Tool descriptions link to official documentation on the Tools page. Slide notes cite sources for MCP, project instructions, and the Node.js test runner:

- [MCP architecture](https://modelcontextprotocol.io/docs/learn/architecture)
- [Agent Skills specification](https://agentskills.io/home)
- [Project instructions with AGENTS.md](https://developers.openai.com/codex/guides/agents-md/)
- [Node.js test runner](https://nodejs.org/api/test.html)
- [Vite runtime requirements](https://vite.dev/guide/)

Responsible-use guidance is general advice. Assignment and institutional rules determine what assistance is permitted and how it must be disclosed.

## Vercel

This is a Vite SPA. `vercel.json` rewrites client routes to `index.html`.

1. Push this repository to GitHub (the author account is [mjsolidarios](https://github.com/mjsolidarios)).
2. Import the project in Vercel. Framework preset: Vite. Output: `dist`.
3. Deploy. Talk URLs such as `/talks/agentic-coding` will load on refresh.

```bash
npx vercel --prod
```

## License

MIT. Workshop content remains attributed to Mark Joseph J. Solidarios.
