import {
  BulletsSlide,
  CloseSlide,
  CodeSlide,
  DeckShell,
  RecapSlide,
  StatementSlide,
  TitleSlide,
  TwoColSlide,
} from './kit'

export default function AgenticCoding() {
  return (
    <DeckShell>
      <TitleSlide
        kicker="Talk 1 · 50 minutes"
        title="Agentic Coding"
        subtitle="From line completion to a loop that plans, uses tools, and checks its own work."
        notes="Open with the shift students already feel: Copilot completes a line. Agents complete a ticket."
      />

      <StatementSlide
        title="Autocomplete writes tokens. Agents pursue outcomes."
        body="An agent is a model wrapped in a loop: read the repo, plan a change, call tools, observe the result, and continue until a check passes or a budget runs out."
        notes="Write the loop on a board if the room allows: observe, plan, act, verify."
      />

      <BulletsSlide
        title="The loop, in practice"
        items={[
          'Observe: open files, search the repo, read the failing test.',
          'Plan: name the change in one sentence before touching code.',
          'Act: edit, generate, run commands, query docs through tools.',
          'Verify: tests, types, linters, a human reading the diff.',
          'Stop: when the check is green, or when the loop is thrashing.',
        ]}
        notes="Thrashing is the new failure mode: the agent keeps editing without a better hypothesis."
      />

      <TwoColSlide
        title="What changed since Copilot"
        leftTitle="2011 to 2023"
        leftItems={[
          'Search and Stack Overflow',
          'Snippet completion',
          'Chat in a side panel',
          'You paste context by hand',
        ]}
        rightTitle="2024 to 2026"
        rightItems={[
          'Repo-wide edits',
          'Tool-calling agents',
          'MCP servers for local context',
          'Skills, rules, and AGENTS.md',
        ]}
      />

      <BulletsSlide
        title="Tools worth knowing this year"
        items={[
          'Cursor: editor with agent mode, rules, and inline review.',
          'Claude Code, Codex, Gemini CLI, Grok: terminal agents that run your toolchain.',
          'GitHub Copilot: still strong for completion and PR review.',
          'MCP: a shared protocol so those agents can use the same tools.',
        ]}
        notes="Do not sell a single vendor. Students should be able to switch."
      />

      <StatementSlide
        kicker="Protocol"
        title="MCP is USB for models."
        body="Instead of a custom plugin per chat app, you expose a server: filesystem, GitHub, browser, issue tracker, docs. The agent discovers tools and calls them with structured arguments."
      />

      <CodeSlide
        title="A small MCP-shaped tool"
        language="javascript"
        highlightRanges={[[1, 3], [5, 12]]}
        code={`const tools = [
  { name: "run_tests", description: "Run the project test suite" },
  { name: "read_file", description: "Read a source file by path" },
];

async function callTool(name, args, repo) {
  if (name === "run_tests") return repo.test();
  if (name === "read_file") return repo.read(args.path);
  throw new Error("Unknown tool");
}`}
        notes="This is a sketch, not a production server. Point people at modelcontextprotocol.io after class."
      />

      <StatementSlide
        kicker="Context engineering"
        title="The prompt is the least of it."
        body="Quality now comes from what the agent can see: tests, types, ADRs, failing logs, and a short project brief. Dumping the whole repo into the window is not a strategy."
      />

      <BulletsSlide
        title="Feed the agent a contract"
        items={[
          'A one-page goal: what done looks like.',
          'The failing test or screenshot, not a vague complaint.',
          'File paths you already suspect, if you have them.',
          'Commands that are allowed: test, lint, typecheck.',
          'Commands that are not: migrate production, force-push, rm -rf.',
        ]}
      />

      <CodeSlide
        title="AGENTS.md as a repo handshake"
        language="markdown"
        code={`# AGENTS.md

This is a Vite + React workshop site.

- Use npm, not yarn.
- Do not add new UI libraries.
- Keep slides left-aligned and light.
- Run npm run build before you open a PR.
- Never commit .env files or API keys.`}
        notes="Show your own repo's AGENTS.md if you add one later. The point is: agents read this."
      />

      <TwoColSlide
        title="Spec-driven beats vibe-driven"
        leftTitle="Vibe coding"
        leftItems={[
          'Chat until it looks right',
          'No test until the demo',
          'Diff is unreadable',
          'You cannot explain the change',
        ]}
        rightTitle="Spec-driven"
        rightItems={[
          'Write the check first',
          'Name files and APIs',
          'Agent implements the spec',
          'You review against the spec',
        ]}
      />

      <BulletsSlide
        title="When agents fail"
        items={[
          'They invent APIs that do not exist in your version.',
          'They fix the test by deleting the assertion.',
          'They loop on the same three files and never look elsewhere.',
          'They ignore project conventions because the training prior is louder.',
          'They leak secrets that were sitting in .env.example comments.',
        ]}
      />

      <StatementSlide
        title="Keep a human on the merge button."
        body="Autonomy is a slider, not a switch. Raise it for boilerplate and well-tested chores. Lower it for auth, money, grading, and anything you could not defend in a code review."
      />

      <BulletsSlide
        title="A student practice for this week"
        items={[
          'Pick one failing test in a personal project.',
          'Write a five-line spec in the PR description.',
          'Let the agent propose a patch. Do not apply it yet.',
          'Read every hunk. Run the suite yourself.',
          'Merge only what you can explain out loud.',
        ]}
      />

      <RecapSlide
        title="Take into Talk 2"
        items={[
          'Agents loop with tools. They do not understand your grade.',
          'MCP, rules, and AGENTS.md are how you constrain that loop.',
          'Context and specs beat longer prompts.',
          'Verification is the job. Generation is the assistant.',
        ]}
      />

      <CloseSlide notes="Hold for 10 minutes of questions. Icebreaker: who has let an agent open a PR?" />
    </DeckShell>
  )
}
