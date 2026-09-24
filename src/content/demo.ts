// The live demo in Talk 3: one prompt, two agent setups. Nothing here is a
// recorded result. The presenter runs both sessions and fills in the scorecard.

export const DEMO_APP = {
  name: 'Thesis Consult',
  summary:
    'A mobile app for thesis consultations. A thesis group books one of the adviser’s open time slots and says what they want to discuss; the adviser sees upcoming consultations in order and marks each one done with a short note.',
} as const

export const DEMO_PROMPT = `Build a mobile app for thesis consultations
with Expo (React Native, TypeScript).
A thesis group books a consultation: group name,
topic, and one of the adviser's open time slots.
The adviser sees upcoming consultations in time
order and can mark one as done with a short note.
A booked slot is no longer offered to other groups.`

export const RUNS = [
  {
    id: 'a',
    label: 'Run A',
    title: 'Bare prompt',
    setup: [
      'An empty folder and the prompt above.',
      'No AGENTS.md, no skills, no MCP servers.',
      'The agent relies on what it remembers about Expo and React Native.',
    ],
    watch: [
      'Which package versions it installs, and whether they match the Expo SDK.',
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
      'A ship-check skill that tells the agent how to verify mobile screens.',
      'Context7 MCP for current Expo docs; Playwright MCP to check the web preview at phone size.',
    ],
    watch: [
      'Whether it looks up current Expo docs before writing code.',
      'Whether the skill triggers when the screens are built.',
      'What evidence it reports: test output, phone-size screenshots, an accessibility check.',
    ],
  },
] as const

export const DEMO_FILES = [
  {
    path: 'AGENTS.md',
    language: 'markdown',
    note: 'Project rules. Read at the start of every session.',
    code: `# Thesis Consult

Expo (React Native) + TypeScript. Tests use jest-expo.

## Commands
- Start: npx expo start (scan the QR code with Expo Go)
- Test: npm test
- Typecheck: npx tsc --noEmit
- Bundle check: npx expo export

## Rules
- Keep data in memory; no backend, no auth, no notifications.
- Add Expo and React Native packages with npx expo install.
- Ask before adding anything beyond jest-expo and Testing Library.
- Look up current docs (Context7) before using an Expo API.
- Done means: tests, typecheck, and bundle check pass; ship-check run.`,
  },
  {
    path: '.agents/skills/ship-check/SKILL.md',
    language: 'markdown',
    note: 'A skill. Only the name and description load until the agent needs it.',
    code: `---
name: ship-check
description: Verify a mobile screen before calling it done. Use after
  building or changing any screen, form, or component.
---

# Ship check

1. Run \`npm test\`, \`npx tsc --noEmit\`, and \`npx expo export\`.
   Fix failures first.
2. Start the web preview with \`npx expo start --web\`. With
   Playwright, open it at 390x844 and 360x640; screenshot each.
3. Book a consultation, then mark it done as the adviser. Every
   button needs an accessibility label and a 44x44 touch target.
4. Try an empty group name and a slot that is already booked.
   Both need a clear message next to the field.
5. Report: commands run and their result, screenshots, and
   what still needs checking on a real phone.`,
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
  'Typecheck and npx expo export pass on the first try',
  'Package versions match the Expo SDK',
  'Tests exist and pass',
  'Empty group name and a taken slot are handled',
  'Buttons have accessibility labels and 44pt targets',
  'Runs in Expo Go; layout holds on a 360px-wide phone',
  'Agent reports evidence, not just “Done”',
  'No unrequested dependencies in the diff',
] as const
