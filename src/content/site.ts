export const AUTHOR = {
  name: 'Mark Joseph J. Solidarios',
  shortName: 'M. J. Solidarios',
  github: 'https://github.com/mjsolidarios',
  handle: 'mjsolidarios',
} as const

export const WORKSHOP = {
  title: 'Code in Context',
  subtitle: 'AI-assisted programming workshop',
  tagline:
    'Learn to give coding agents clear tasks, study with AI, and test and review the code they produce. Three 50-minute sessions for IT students and developers.',
} as const

export const TALKS = [
  {
    slug: 'agentic-coding',
    path: '/talks/agentic-coding',
    code: 'Talk 1',
    duration: '50 min',
    title: 'Agentic Coding',
    blurb:
      'Follow an agent through a code change. Write a task brief, choose its tools and permissions, and decide when its work is ready for review.',
    updates: [
      'Model Context Protocol',
      'Task briefs',
      'Permissions and checks',
    ],
  },
  {
    slug: 'ai-for-students',
    path: '/talks/ai-for-students',
    code: 'Talk 2',
    duration: '50 min',
    title: 'Effective Use of AI as an IT Student',
    blurb:
      'Practice asking for hints, checking explanations, and solving a problem without the chat. Learn how to document assistance under your course rules.',
    updates: [
      'Academic integrity',
      'Guided practice',
      'Documenting AI assistance',
    ],
  },
  {
    slug: 'efficient-programming',
    path: '/talks/efficient-programming',
    code: 'Talk 3',
    duration: '50 min',
    title: 'Efficient Programming with AI',
    blurb:
      'Work through a small bug fix: reproduce the failure, write useful tests, inspect the proposed patch, and commit a change you can explain.',
    updates: [
      'AI-assisted debugging',
      'Diff review',
      'Regression tests',
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
        name: 'VS Code and GitHub Copilot',
        use: 'An editor with integrated AI assistance. Agent mode can edit files and run tools; inspect proposed changes and command approvals.',
        url: 'https://code.visualstudio.com/docs/agents/overview',
      },
      {
        name: 'Cursor',
        use: 'An editor with an agent for searching code, editing files, and running terminal commands. Use its diff view to review edits.',
        url: 'https://cursor.com/docs/agent/overview',
      },
      {
        name: 'Claude Code',
        use: 'A coding agent available in the terminal and other interfaces. It can inspect a project, edit code, and run commands.',
        url: 'https://code.claude.com/docs/en/overview',
      },
      {
        name: 'Codex CLI',
        use: 'A terminal coding agent that reads and edits files and runs commands in a project directory. Check its approval and sandbox settings before use.',
        url: 'https://developers.openai.com/codex/cli/',
      },
      {
        name: 'Gemini CLI',
        use: 'A terminal agent with file and shell tools. Review the requested access before letting it work in your repository.',
        url: 'https://geminicli.com/docs/',
      },
    ],
  },
  {
    group: 'Version control and hosting',
    items: [
      {
        name: 'Git and GitHub',
        use: 'Use Git to inspect diffs and save commits. GitHub is useful for sharing a repository or reviewing a pull request; local exercises only need Git.',
        url: 'https://github.com/',
      },
      {
        name: 'Vercel',
        use: 'An optional place to deploy a web project. Hosting and a hosting account are not required for these exercises.',
        url: 'https://vercel.com/',
      },
    ],
  },
  {
    group: 'Protocols and runtimes',
    items: [
      {
        name: 'Model Context Protocol (MCP)',
        use: 'A protocol for connecting AI applications to tools and data. Optional for this workshop; the slides explain how clients and servers exchange requests.',
        url: 'https://modelcontextprotocol.io/docs/learn/architecture',
      },
      {
        name: 'Node.js',
        use: 'Runs the JavaScript examples. Use a supported LTS release; Node 22.12+ on the 22.x line also meets this site’s Vite requirement.',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Python',
        use: 'Optional if you bring a Python project. Use the version and environment specified by that project; the shared exercises use JavaScript.',
        url: 'https://www.python.org/',
      },
    ],
  },
] as const

export const PREREQUISITES = [
  {
    title: 'An editor you know',
    detail: 'Open a project and use the integrated terminal before the session. VS Code, Cursor, or your usual editor is fine; extra extensions are optional.',
  },
  {
    title: 'Git for saving and reviewing changes',
    detail: 'Check git --version. Practice git status, git diff, and making a commit. A command reference is fine. A GitHub account is optional.',
  },
  {
    title: 'Node.js for the code exercises',
    detail: 'Check node --version. Use a supported LTS release, such as Node 22.12+ on the 22.x line. The examples use the built-in test runner, with no test package to install.',
  },
  {
    title: 'Access to one AI coding tool',
    detail: 'Use a tool you already have access to and check that it works before the session. No purchase is required: you can pair with someone or review the supplied examples.',
  },
  {
    title: 'A small personal repo',
    detail: 'Bring code you understand and are allowed to share with your chosen tool. Save your work in Git first and remove credentials or personal data from the exercise files.',
  },
  {
    title: 'Basic programming experience',
    detail: 'You should be able to read a function, trace an array operation, and interpret an error message. The slides include code you can follow even without an AI account.',
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
    title: 'Check claims against evidence',
    body: 'Reproduce reported errors, check APIs in the documentation for your version, and open original sources before citing them. A plausible explanation or a passing test can still miss a bug.',
  },
  {
    title: 'Say when AI helped',
    body: 'Follow the disclosure format required by your course, publisher, or project. Name the tool, what it helped with, what you changed, and how you checked the result. Keep a prompt log if required.',
  },
  {
    title: 'Plan for access and usage limits',
    body: 'Check account limits before an exercise and set a budget if you enable paid usage. Share a non-AI way to complete group work. Review examples for assumptions that exclude users, such as names or addresses in only one format.',
  },
] as const

export const SPECTACLE_KEYS = [
  { keys: 'Right / Left', action: 'Next or previous slide' },
  { keys: 'Alt+Shift+F', action: 'Fullscreen' },
] as const
