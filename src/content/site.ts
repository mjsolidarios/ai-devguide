export const AUTHOR = {
  name: 'Mark Joseph J. Solidarios',
  shortName: 'M. J. Solidarios',
  role: 'Division Chair, Entertainment and Multimedia Computing',
  org: 'College of ICT, West Visayas State University',
  github: 'https://github.com/mjsolidarios',
  handle: 'mjsolidarios',
} as const

export const WORKSHOP = {
  title: 'Code in Context',
  subtitle: "The Modern Developer's Guide to AI",
  tagline:
    'Three 50-minute talks on agentic coding, honest student practice, and getting real work done with AI.',
} as const

export const TALKS = [
  {
    slug: 'agentic-coding',
    path: '/talks/agentic-coding',
    code: 'Talk 1',
    duration: '50 min',
    title: 'Agentic Coding',
    blurb:
      'How coding assistants became agents that plan, call tools, and loop until the tests pass, and where a human still has to sit.',
    updates: [
      'Model Context Protocol',
      'Context engineering',
      'Spec-driven agent loops',
    ],
  },
  {
    slug: 'ai-for-students',
    path: '/talks/ai-for-students',
    code: 'Talk 2',
    duration: '50 min',
    title: 'Effective Use of AI as an IT Student',
    blurb:
      'Use AI as a tutor and reviewer without outsourcing the thinking your degree is supposed to build.',
    updates: [
      'Academic integrity',
      'Learning loops',
      'Citing AI assistance',
    ],
  },
  {
    slug: 'efficient-programming',
    path: '/talks/efficient-programming',
    code: 'Talk 3',
    duration: '50 min',
    title: 'Efficient Programming with AI',
    blurb:
      'A daily workflow: specify, test, generate, review, and ship, without letting the model set the pace.',
    updates: [
      'AI-assisted debugging',
      'Diff review',
      'Repo contracts for agents',
    ],
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
  { time: '11:20', label: 'Close' },
] as const

export const TOOLS = [
  {
    group: 'Editors and agents',
    items: [
      {
        name: 'Visual Studio Code',
        use: 'Default editor. Pair with Copilot or a CLI agent in the integrated terminal.',
        url: 'https://code.visualstudio.com/',
      },
      {
        name: 'Cursor',
        use: 'Agent-first editor with repo-wide edits, inline review, and project rules.',
        url: 'https://www.cursor.com/',
      },
      {
        name: 'Claude Code, Codex, Gemini CLI, Grok',
        use: 'Terminal agents that read files, run commands, and iterate against tests.',
        url: 'https://docs.anthropic.com/en/docs/claude-code',
      },
    ],
  },
  {
    group: 'Version control and hosting',
    items: [
      {
        name: 'Git and GitHub',
        use: 'Small commits, pull requests, and a paper trail of what the agent changed.',
        url: 'https://github.com/',
      },
      {
        name: 'Vercel',
        use: 'Static hosting for this hub and the Spectacle decks. Git push to deploy.',
        url: 'https://vercel.com/',
      },
    ],
  },
  {
    group: 'Protocols and runtime',
    items: [
      {
        name: 'Model Context Protocol (MCP)',
        use: 'Standard way for agents to use docs, issue trackers, browsers, and local tools.',
        url: 'https://modelcontextprotocol.io/',
      },
      {
        name: 'Node.js 20.19+ or 22+',
        use: 'Required to run this project locally and most modern JS toolchains.',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Python 3.12+',
        use: 'Still the default for data, scripting, and many course assignments.',
        url: 'https://www.python.org/',
      },
      {
        name: 'Spectacle',
        use: 'React presentation library used for every talk in this repo.',
        url: 'https://nearform.com/open-source/spectacle/',
      },
    ],
  },
] as const

export const PREREQUISITES = [
  {
    title: 'A current code editor',
    detail: 'VS Code or Cursor. Install GitLens or the GitHub pull request extension if you use VS Code.',
  },
  {
    title: 'Git, with a GitHub account',
    detail: 'You should be able to clone, commit, push, and open a pull request without looking it up.',
  },
  {
    title: 'Node.js 20.19 or newer',
    detail: 'Confirm with node -v. This site and most JS agents expect a current LTS.',
  },
  {
    title: 'Access to one AI coding tool',
    detail: 'Copilot, Cursor, Claude, Codex, Gemini, or Grok. One paid or free tier is enough for the workshop.',
  },
  {
    title: 'A small personal repo',
    detail: 'Bring a project you already understand. Agents are easier to judge on familiar code.',
  },
  {
    title: 'Course basics',
    detail: 'Comfortable with functions, git diffs, and reading error messages. This is not an intro to programming.',
  },
] as const

export const SETUP_STEPS = [
  {
    title: 'Install Node.js',
    detail: 'Use the current LTS from nodejs.org or a version manager such as nvm or fnm.',
    command: 'node -v',
  },
  {
    title: 'Clone this repository',
    detail: 'Work from a local copy so you can present offline after the first install.',
    command: 'git clone https://github.com/mjsolidarios/ai-devguide.git',
  },
  {
    title: 'Install dependencies',
    detail: 'Run this from the project root. A lockfile keeps versions stable across machines.',
    command: 'cd ai-devguide && npm install',
  },
  {
    title: 'Start the hub',
    detail: 'Vite serves the summary pages and every Spectacle deck on one origin.',
    command: 'npm run dev',
  },
  {
    title: 'Open a talk',
    detail: 'From the hub, open Talk 1, 2, or 3. Use the arrow keys. Press Ctrl+K for the Spectacle command bar.',
    command: 'http://localhost:5173',
  },
  {
    title: 'Present',
    detail: 'Alt+Shift+F fullscreen, Alt+Shift+P presenter notes, Alt+Shift+O overview. Export with ?exportMode=true.',
    command: 'Alt+Shift+P',
  },
] as const

export const RESPONSIBLE = [
  {
    title: 'You ship the code',
    body: 'The model has no deadline, no grade, and no license to take blame. If it reaches production or a submission, your name is on it.',
  },
  {
    title: 'Do the thinking the course is measuring',
    body: 'Using AI to explain an error is legitimate study. Pasting the assignment and submitting the first answer is academic dishonesty.',
  },
  {
    title: 'Keep secrets out of prompts',
    body: 'Never paste API keys, passwords, student records, unpublished research, or private chat logs. Treat every prompt as leaving your machine.',
  },
  {
    title: 'Verify before you trust',
    body: 'Run the tests. Read the diff. Check citations. Models still invent APIs, papers, and stack traces that look locally plausible.',
  },
  {
    title: 'Say when AI helped',
    body: 'Coursework, papers, and open source all need attribution. A short note in the README or submission is enough and expected.',
  },
  {
    title: 'Watch cost, bias, and access',
    body: 'Cloud agents cost money and energy. Outputs carry training bias. Prefer tools your classmates can actually obtain.',
  },
] as const

export const SPECTACLE_KEYS = [
  { keys: 'Right / Left', action: 'Next or previous slide' },
  { keys: 'Ctrl+K / Cmd+K', action: 'Command bar' },
  { keys: 'Alt+Shift+F', action: 'Fullscreen' },
  { keys: 'Alt+Shift+P', action: 'Presenter mode' },
  { keys: 'Alt+Shift+O', action: 'Overview' },
] as const
