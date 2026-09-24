// The live demo in Talk 3: one prompt, two agent setups. Nothing here is a
// recorded result. The presenter runs both sessions and fills in the scorecard.

export const DEMO_APP = {
  name: 'Consultation Queue',
  summary:
    'A small web app for lab consultations. Students add their name and topic to a queue; the instructor sees who is next and marks them as served.',
} as const

export const DEMO_PROMPT = `Build a consultation queue web app.
Students enter their name and a short topic to join the queue.
The instructor sees the queue in order and can mark the
first student as served. Use React with Vite.`

export const RUNS = [
  {
    id: 'a',
    label: 'Run A',
    title: 'Bare prompt',
    setup: [
      'An empty folder and the prompt above.',
      'No AGENTS.md, no skills, no MCP servers.',
      'The agent relies on what it remembers about React and Vite.',
    ],
    watch: [
      'Which versions it installs, and whether it checked them.',
      'Whether it writes any tests without being asked.',
      'How it decides it is finished: a check, or “Done”.',
    ],
  },
  {
    id: 'b',
    label: 'Run B',
    title: 'Instructions + skill + MCP',
    setup: [
      'The same empty folder and the same prompt.',
      'AGENTS.md with commands, constraints, and a definition of done.',
      'A ship-check skill that tells the agent how to verify UI work.',
      'Context7 MCP for current library docs; Playwright MCP to drive a real browser.',
    ],
    watch: [
      'Whether it looks up current docs before writing code.',
      'Whether the skill triggers when the UI is built.',
      'What evidence it reports: test output, a screenshot, a keyboard check.',
    ],
  },
] as const

export const DEMO_FILES = [
  {
    path: 'AGENTS.md',
    language: 'markdown',
    note: 'Project rules. Read at the start of every session.',
    code: `# Consultation Queue

React + Vite + TypeScript. Tests use Vitest.

## Commands
- Install: npm install
- Dev: npm run dev
- Test: npm test
- Build: npm run build

## Rules
- Keep state in memory; no backend, no auth.
- Ask before adding any dependency beyond react, vite, vitest.
- Look up current docs (Context7) before using a library API.
- Done means: tests pass, build passes, ship-check skill run.`,
  },
  {
    path: '.agents/skills/ship-check/SKILL.md',
    language: 'markdown',
    note: 'A skill. Only the name and description load until the agent needs it.',
    code: `---
name: ship-check
description: Verify a UI change before calling it done. Use after
  building or changing any screen, form, or component.
---

# Ship check

1. Run \`npm test\` and \`npm run build\`. Fix failures first.
2. Start the dev server. With Playwright, open the app at
   375px and 1280px wide; take a screenshot of each.
3. Using only the keyboard, join the queue and mark a
   student served. Focus must be visible at every step.
4. Try an empty name and a duplicate name. Both need a
   clear message next to the field.
5. Report: commands run and their result, screenshots,
   and anything you could not check.`,
  },
  {
    path: '.mcp.json',
    language: 'json',
    note: 'MCP servers for Claude Code. Other agents use their own config file with the same servers.',
    code: `{
  "mcpServers": {
    "context7": {
      "type": "http",
      "url": "https://mcp.context7.com/mcp"
    },
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}`,
  },
  {
    path: 'opencode.json',
    language: 'json',
    note: 'The same two servers in OpenCode. OpenCode also finds skills in .agents/skills.',
    code: `{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "context7": {
      "type": "remote",
      "url": "https://mcp.context7.com/mcp"
    },
    "playwright": {
      "type": "local",
      "command": ["npx", "@playwright/mcp@latest"],
      "enabled": true
    }
  }
}`,
  },
] as const

export const SCORECARD = [
  'npm run build succeeds on the first try',
  'Installed versions match current releases',
  'Tests exist and pass',
  'Empty and duplicate names are handled',
  'Works with keyboard only; focus is visible',
  'Layout holds at 375px wide',
  'Agent reports evidence, not just “Done”',
  'No unrequested dependencies in the diff',
] as const
