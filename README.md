# Code in Context

AI-assisted programming workshop.

Workshop website and three 50-minute [Spectacle](https://nearform.com/open-source/spectacle/) presentations for IT students and developers.

**Author:** [Mark Joseph J. Solidarios](https://github.com/mjsolidarios).

The sessions cover task briefs and agent tools, studying with AI under course rules, and testing and reviewing a code change. Each deck includes a worked example, an exercise, and speaker notes with timing and discussion guidance. `content.pdf` is the original topic reference.

The shared JavaScript example normalizes a small array of finite, non-negative numbers. Learners specify normal, empty, and all-zero behavior, then test a patch for both correct values and a new array result. Runnable snippets use `.mjs` files and Node’s built-in test runner; no test package is required.

## Talks

| Route | Topic |
| --- | --- |
| `/talks/agentic-coding` | Agentic Coding |
| `/talks/ai-for-students` | Effective Use of AI as an IT Student |
| `/talks/efficient-programming` | Efficient Programming with AI |

Companion pages: `/tools`, `/setup`, `/responsible-ai`.

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

- Arrow keys: next and previous slide
- `Ctrl+K` / `Cmd+K`: command bar
- `Alt+Shift+F`: fullscreen
- `Alt+Shift+P`: presenter mode
- `Alt+Shift+O`: overview
- `?exportMode=true`: print-friendly export

## Content references

Tool descriptions link to official documentation on the Tools page. Slide notes cite sources for MCP, project instructions, and the Node.js test runner:

- [MCP architecture](https://modelcontextprotocol.io/docs/learn/architecture)
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
