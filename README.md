# Code in Context

The Modern Developer's Guide to AI.

Workshop hub and [Spectacle](https://nearform.com/open-source/spectacle/) decks for a morning program at the College of ICT, West Visayas State University.

**Author:** [Mark Joseph J. Solidarios](https://github.com/mjsolidarios), Division Chair, Entertainment and Multimedia Computing.

Source topics come from `content.pdf` and are updated for current practice: agentic coding, Model Context Protocol, context engineering, student integrity, and review-first workflows.

## Talks

| Route | Topic |
| --- | --- |
| `/talks/agentic-coding` | Agentic Coding |
| `/talks/ai-for-students` | Effective Use of AI as an IT Student |
| `/talks/efficient-programming` | Efficient Programming with AI |

Companion pages: `/tools`, `/setup`, `/responsible-ai`.

## Prerequisites

- Node.js 20.19+ or 22+
- Git and a GitHub account
- VS Code or Cursor
- Access to at least one AI coding assistant

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
