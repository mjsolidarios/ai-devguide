export const AUTHOR = {
  name: 'Mark Joseph J. Solidarios',
  shortName: 'M. J. Solidarios',
  github: 'https://github.com/mjsolidarios',
  handle: 'mjsolidarios',
} as const

export const SLIDO = {
  url: 'https://app.sli.do/event/r6h2SrAjuuSYBbkBwW39nZ',
  qr: '/images/slido-qr.png',
} as const

export const WORKSHOP = {
  title: 'Code in Context',
  subtitle: 'The modern developer’s guide to AI',
  tagline:
    'Three 50-minute sessions for IT students and developers. Brief a coding agent, extend it with skills and MCP servers, study with source-grounded tools, and review every change before you keep it.',
} as const

export function slug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const TALKS = [
  {
    slug: 'agentic-coding',
    path: '/talks/agentic-coding',
    code: 'Talk 1',
    stage: '1.0',
    time: '8:20–9:10',
    duration: '50 min',
    title: 'Agentic Coding',
    blurb:
      'How a coding agent works, where it runs, and how to extend it. Compare AI IDEs and terminal agents, write project instructions, add a skill, and connect an MCP server without handing over more access than the task needs.',
    updates: ['AI IDEs and terminal agents', 'Skills and MCP', 'Task briefs'],
    sample: {
      file: '.agents/skills/regression-test/SKILL.md',
      code: `---
name: regression-test
description: Add a failing test before fixing
  a bug. Use when the user reports a bug.
---

1. Reproduce with the smallest input.
2. Write a test that fails for that reason.
3. Fix it; run the new test and the suite.`,
    },
  },
  {
    slug: 'ai-for-students',
    path: '/talks/ai-for-students',
    code: 'Talk 2',
    stage: '2.0',
    time: '9:20–10:10',
    duration: '50 min',
    title: 'Effective Use of AI as an IT Student',
    blurb:
      'Study with a notebook grounded in your own sources, pick the right assistant for the job, claim the free tools your student status unlocks, and document the help you used under your course rules.',
    updates: ['Gemini Notebook', 'GitHub Education', 'Stitch, Grok, ChatGPT desktop'],
    sample: {
      file: 'Gemini Notebook · prompt',
      code: `Using only my sources, explain how
Array.map differs from a for loop.
Cite each claim.

Which syllabus topics have no matching
lecture notes in these sources?`,
    },
  },
  {
    slug: 'efficient-programming',
    path: '/talks/efficient-programming',
    code: 'Talk 3',
    stage: '3.0',
    time: '10:20–11:10',
    duration: '50 min',
    title: 'Efficient Programming with AI',
    blurb:
      'Watch a mobile app for thesis consultations built twice: once from a bare prompt, once with project instructions, a skill, and two MCP servers. Then fix a real bug with a failing test and review the patch line by line.',
    updates: ['Same app, two setups', 'Regression tests', 'Diff review'],
    sample: {
      file: 'normalize.test.mjs',
      code: `test("normal, empty, and all-zero inputs", () => {
  assert.deepEqual(normalize([2, 4]), [0.5, 1]);
  assert.deepEqual(normalize([]), []);
  assert.deepEqual(normalize([0, 0]), [0, 0]);
});`,
    },
  },
] as const

export const PROGRAM = [
  { time: '7:00', label: 'Registration' },
  { time: '8:00', label: 'Opening' },
  { time: '8:20', label: 'Talk 1' },
  { time: '9:10', label: 'Q&A' },
  { time: '9:20', label: 'Talk 2' },
  { time: '10:10', label: 'Break' },
  { time: '10:20', label: 'Talk 3' },
  { time: '11:10', label: 'Q&A' },
  { time: '11:20', label: 'Awarding' },
  { time: '11:50', label: 'Close' },
] as const

export type Tool = {
  name: string
  use: string
  access: string
  url: string
}

export type ToolGroup = {
  id: string
  group: string
  intro: string
  items: Tool[]
}

export const TOOLS: ToolGroup[] = [
  {
    id: 'ides',
    group: 'AI IDEs',
    intro:
      'An editor with an agent built in. You see the diff before it lands, and you can stop the agent mid-run.',
    items: [
      {
        name: 'Cursor',
        use: 'A VS Code–based editor with an agent that searches the codebase, edits several files, and runs terminal commands. Reads project rules and Agent Skills.',
        access: 'Free tier with limits; paid plans for heavier use.',
        url: 'https://cursor.com/docs/agent/overview',
      },
      {
        name: 'VS Code + GitHub Copilot',
        use: 'Completions, chat, and agent mode inside VS Code. Supports MCP servers and Agent Skills from the same workspace.',
        access: 'Free for verified students through the Copilot Student plan.',
        url: 'https://code.visualstudio.com/docs/agents/overview',
      },
      {
        name: 'Google Antigravity',
        use: 'Google’s agent-first IDE. Agents plan, edit, and check work in the editor, terminal, and a browser, and report back with artifacts you can review.',
        access: 'Sign in with a Google account; check current plan limits.',
        url: 'https://antigravity.google/',
      },
      {
        name: 'Windsurf',
        use: 'An AI editor built around an agent that keeps track of what you are doing across files and the terminal.',
        access: 'Free tier with limits.',
        url: 'https://windsurf.com/',
      },
      {
        name: 'JetBrains IDEs + AI Assistant',
        use: 'IntelliJ IDEA, PyCharm, WebStorm and the rest, with an AI assistant and agent. A good fit if your course already uses JetBrains tools.',
        access: 'IDEs free for students via the JetBrains student licence.',
        url: 'https://www.jetbrains.com/ai/',
      },
    ],
  },
  {
    id: 'terminal',
    group: 'Terminal agents',
    intro:
      'Agents that live in your shell. They work with any editor and are easy to script, but a terminal app still sends context to a cloud model unless you configure otherwise.',
    items: [
      {
        name: 'Claude Code',
        use: 'Anthropic’s coding agent for the terminal, IDEs, and desktop. Reads CLAUDE.md, loads Agent Skills, and connects to MCP servers.',
        access: 'Requires a Claude plan or API key.',
        url: 'https://code.claude.com/docs/en/overview',
      },
      {
        name: 'Codex',
        use: 'OpenAI’s coding agent as a CLI and inside the ChatGPT desktop app. Reads AGENTS.md and supports skills. Check its approval and sandbox modes first.',
        access: 'Included with ChatGPT plans, with usage limits.',
        url: 'https://developers.openai.com/codex/cli/',
      },
      {
        name: 'Gemini CLI',
        use: 'An open-source terminal agent from Google with file, shell, and web tools, plus MCP and skills support.',
        access: 'Free tier with a personal Google account.',
        url: 'https://geminicli.com/docs/',
      },
      {
        name: 'Antigravity CLI',
        use: 'The terminal side of Google Antigravity. The command is agy. It edits across files, runs commands with your permission, and can spawn subagents for parallel work.',
        access: 'Google Sign-In on first run; check current limits.',
        url: 'https://antigravity.google/docs/cli/overview',
      },
      {
        name: 'OpenCode',
        use: 'An open-source terminal agent that works with many model providers. Plan and Build modes, LSP diagnostics, MCP, and Agent Skills. /init writes an AGENTS.md for you.',
        access: 'Free and open source; you pay your chosen model provider.',
        url: 'https://opencode.ai/docs/',
      },
      {
        name: 'GitHub Copilot CLI',
        use: 'Copilot’s agent in the terminal. Uses the same skills and MCP configuration as Copilot in VS Code.',
        access: 'Counts against Copilot AI credits.',
        url: 'https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli',
      },
    ],
  },
  {
    id: 'extend',
    group: 'Extending an agent',
    intro:
      'Three different jobs. Instructions say how this project works. A skill teaches a repeatable procedure. An MCP server connects the agent to a tool or data source.',
    items: [
      {
        name: 'AGENTS.md',
        use: 'A plain Markdown file of project rules: build and test commands, conventions, what not to touch. Read by Codex, OpenCode, Cursor, Copilot and others; Claude Code reads CLAUDE.md.',
        access: 'A file in your repo.',
        url: 'https://agents.md/',
      },
      {
        name: 'Agent Skills',
        use: 'A folder with a SKILL.md file: a name, a description, and step-by-step instructions, plus optional scripts and references. The agent loads only the name and description until the task calls for the full skill.',
        access: 'Open standard. One skill works across Claude Code, Codex, Gemini CLI, Copilot, Cursor, OpenCode and more.',
        url: 'https://agentskills.io/home',
      },
      {
        name: 'Model Context Protocol (MCP)',
        use: 'A protocol for connecting an AI app to servers that expose tools, resources, and prompts: a browser, a database, current library docs, your issue tracker.',
        access: 'Open protocol. Each server has its own access and data rules.',
        url: 'https://modelcontextprotocol.io/docs/learn/architecture',
      },
    ],
  },
  {
    id: 'study',
    group: 'Study, research, and design',
    intro:
      'Tools for learning and planning rather than editing code. Check your course rules before using them on assessed work.',
    items: [
      {
        name: 'Gemini Notebook',
        use: 'Formerly NotebookLM. Upload your lecture PDFs, docs, and links; answers cite the passage they came from. Also makes audio overviews, quizzes, and flashcards from your sources.',
        access: 'Free tier with a Google account.',
        url: 'https://notebooklm.google/',
      },
      {
        name: 'ChatGPT desktop',
        use: 'One app for Chat, Work, and Codex on macOS and Windows. With permission it can read local files and open apps. Decide what it may see before you turn that on.',
        access: 'Free tier; Codex and heavier use need a paid plan.',
        url: 'https://chatgpt.com/download/',
      },
      {
        name: 'Grok',
        use: 'xAI’s assistant on grok.com, in its apps, and on X. Useful for real-time search of recent posts; treat what it finds as leads to check, not as sources.',
        access: 'Free tier with message limits. Student offers vary by country.',
        url: 'https://grok.com/',
      },
      {
        name: 'Google Stitch',
        use: 'Turns a text prompt or a sketch into UI screens, links them into a clickable prototype, and exports to Figma or HTML/CSS. Good for a capstone mock-up before you write code.',
        access: 'Free through Google Labs with monthly generation limits.',
        url: 'https://stitch.withgoogle.com/',
      },
    ],
  },
  {
    id: 'base',
    group: 'Version control and runtimes',
    intro: 'What the shared exercises actually need.',
    items: [
      {
        name: 'Git and GitHub',
        use: 'Git to inspect diffs and save commits; GitHub to share a repository or review a pull request. Local exercises only need Git.',
        access: 'Free. GitHub Pro is free for verified students.',
        url: 'https://github.com/',
      },
      {
        name: 'Node.js',
        use: 'Runs the JavaScript examples and most MCP servers started with npx. Use a supported LTS release, such as Node 22.12+ on the 22.x line.',
        access: 'Free.',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Vercel',
        use: 'An optional place to deploy a web project. Not needed for any exercise.',
        access: 'Free hobby tier.',
        url: 'https://vercel.com/',
      },
    ],
  },
]

export const STUDENT_BENEFITS = [
  {
    name: 'GitHub Student Developer Pack',
    what: 'GitHub Pro, Codespaces hours, and offers from partner companies: a JetBrains licence, cloud credits, a free domain name for a year, and learning platforms.',
    how: 'Apply at education.github.com with your school email or proof of enrolment. Verification can take a few days.',
    url: 'https://education.github.com/pack',
  },
  {
    name: 'GitHub Copilot Student',
    what: 'Unlimited code completions plus a monthly allowance of AI credits for chat, agent mode, code review, and the Copilot CLI. Models are picked automatically.',
    how: 'Unlocked once your GitHub Education status is approved. Enable it in your Copilot settings.',
    url: 'https://docs.github.com/en/copilot/how-tos/manage-your-account/get-free-access-to-copilot-pro',
  },
  {
    name: 'JetBrains student licence',
    what: 'Every JetBrains IDE, renewed yearly while you are a student.',
    how: 'Apply with your school email or through your GitHub Education status.',
    url: 'https://www.jetbrains.com/academy/student-pack/',
  },
  {
    name: 'Google Stitch and Gemini Notebook',
    what: 'Both have free tiers with a personal Google account; Stitch sets a monthly generation limit.',
    how: 'Sign in and check the current limits on each product page.',
    url: 'https://stitch.withgoogle.com/',
  },
] as const

export const PREREQUISITES = [
  {
    title: 'An editor you know',
    detail: 'Open a project and use the integrated terminal before the session. VS Code, Cursor, Antigravity, or your usual editor is fine.',
  },
  {
    title: 'Git for saving and reviewing changes',
    detail: 'Check git --version. Practise git status, git diff, and making a commit. A GitHub account is optional, but you need one for the student benefits.',
  },
  {
    title: 'Node.js for the code exercises',
    detail: 'Check node --version. Use a supported LTS release, such as Node 22.12+ on the 22.x line. The examples use the built-in test runner; MCP servers in the demo start with npx.',
  },
  {
    title: 'Access to one AI coding tool',
    detail: 'Any one agent from the Tools page is enough. If you are a verified student, Copilot Student costs nothing. You can also pair with someone or follow the supplied examples.',
  },
  {
    title: 'A small personal repo',
    detail: 'Bring code you understand and are allowed to share with your chosen tool. Commit your work first and remove credentials or personal data from the exercise files.',
  },
  {
    title: 'Basic programming experience',
    detail: 'You should be able to read a function, trace an array operation, and interpret an error message.',
  },
] as const

export const RESPONSIBLE = [
  {
    title: 'Review what you submit',
    body: 'Read the changed code, run the relevant checks, and explain why the change works. Record anything you could not verify so a reviewer can assess it.',
  },
  {
    title: 'Check the assignment rules',
    body: 'A course may allow explanations, restrict generated code, or prohibit AI for an assessment. Read the instructions and ask the instructor if they are unclear. Disclosure does not make prohibited use acceptable.',
  },
  {
    title: 'Keep secrets out of prompts',
    body: 'Use synthetic data and short, redacted examples. Check what your tool sends to its model provider and what it retains. A terminal interface does not mean the model runs locally.',
  },
  {
    title: 'Vet skills and MCP servers before installing',
    body: 'A skill can include scripts; an MCP server runs with the access you give it. Install from sources you can read, prefer official servers, and treat content a tool fetches as data, not instructions.',
  },
  {
    title: 'Check claims against evidence',
    body: 'Reproduce reported errors, check APIs in the documentation for your version, and open original sources before citing them. A cited notebook answer can still misread its source.',
  },
  {
    title: 'Say when AI helped',
    body: 'Follow the disclosure format required by your course, publisher, or project. Name the tool, what it helped with, what you changed, and how you checked the result.',
  },
] as const

export const SPECTACLE_KEYS = [
  { keys: 'Right / Left', action: 'Next or previous step' },
  { keys: 'Alt+Shift+F', action: 'Fullscreen' },
  { keys: 'Alt+Shift+O', action: 'Slide overview' },
] as const
