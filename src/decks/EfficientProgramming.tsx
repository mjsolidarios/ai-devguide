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

export default function EfficientProgramming() {
  return (
    <DeckShell>
      <TitleSlide
        kicker="Talk 3 · 50 minutes"
        title="Efficient Programming with AI"
        subtitle="Speed is not more tokens per minute. Speed is fewer unreviewed mistakes between idea and a green build."
        notes="Connect to Talk 1's loop and Talk 2's integrity. This hour is the daily craft."
      />

      <StatementSlide
        title="Efficiency is a pipeline, not a keystroke."
        body="Specify the change. Pin it with a test. Generate a patch. Review the diff. Run the suite. Then commit something small enough to revert."
      />

      <BulletsSlide
        title="A default workflow"
        items={[
          'Write the acceptance check in one sentence.',
          'Fail a test or type error on purpose.',
          'Point the agent at that failure, not at the whole app.',
          'Accept hunks the way you would from a junior teammate.',
          'Leave a commit message a future you can search.',
        ]}
      />

      <TwoColSlide
        title="What to put in context"
        leftTitle="High value"
        leftItems={[
          'The failing command output',
          'The interface you must not break',
          'Two example files in the same style',
          'The ticket or lab constraint',
        ]}
        rightTitle="Low value"
        rightItems={[
          'The entire src tree',
          'Unrelated READMEs',
          'Six earlier chat turns',
          'Motivation and apology',
        ]}
      />

      <CodeSlide
        title="Start from a failing check"
        language="javascript"
        highlightRanges={[1, [3, 8]]}
        code={`// npm test -- normalize.test.js

test("normalize handles an empty list", () => {
  expect(normalize([])).toEqual([]);
});

test("normalize does not divide by zero", () => {
  expect(normalize([0, 0, 0])).toEqual([0, 0, 0]);
});`}
        notes="Students skip this and then cannot tell if the agent succeeded."
      />

      <BulletsSlide
        title="Debugging with an agent"
        items={[
          'Paste the stack trace and the one function you changed.',
          'Ask for three hypotheses, ranked, before any edit.',
          'Test the cheapest hypothesis yourself.',
          'If the agent wants to rewrite the module, stop and bisect.',
          'Keep a repro script. Chats evaporate. Scripts do not.',
        ]}
      />

      <StatementSlide
        title="Read every diff as if a stranger wrote it."
        body="Agents are fluent and locally consistent. That is exactly why a deleted validation or a widened type slips through. Review for intent, not for whether it compiles."
      />

      <TwoColSlide
        title="Review checklist"
        leftTitle="Must catch"
        leftItems={[
          'Removed tests or weaker assertions',
          'New network or file access',
          'Copied licenses you did not choose',
          'Formatting noise hiding a logic change',
        ]}
        rightTitle="Can defer"
        rightItems={[
          'Import order',
          'Comment tone',
          'Perfect naming',
          'Optional refactors nearby',
        ]}
      />

      <BulletsSlide
        title="Refactors that stay safe"
        items={[
          'One mechanical change per commit: rename, extract, move.',
          'Do not restyle and rewrite behavior in the same patch.',
          'Prefer the compiler and tests as the agent\'s scoreboard.',
          'If coverage drops, the refactor is not done.',
        ]}
      />

      <CodeSlide
        title="A commit the agent should learn to write"
        language="text"
        code={`fix(auth): reject empty refresh tokens

The agent scaffolded the handler. I removed the
fallback that treated missing tokens as anonymous
users and added a regression test.`}
      />

      <BulletsSlide
        title="Shortcuts that waste the afternoon"
        items={[
          'Regenerating the same file because you skipped the spec.',
          'Accepting a new library for a ten-line helper.',
          'Chat-driven architecture with no diagram.',
          'Asking the model to "make it production ready" with no definition.',
        ]}
      />

      <TwoColSlide
        title="Local and cloud"
        leftTitle="Stay local when"
        leftItems={[
          'The repo is private coursework',
          'You are iterating on tests',
          'The task is mechanical',
          'You need an audit trail on disk',
        ]}
        rightTitle="Use cloud when"
        rightItems={[
          'You need a stronger model',
          'The problem is unfamiliar',
          'You are comparing designs',
          'The vendor logs are acceptable',
        ]}
      />

      <BulletsSlide
        title="Make the environment agent-ready"
        items={[
          'One command that typechecks, lints, and tests.',
          'Editor rules or AGENTS.md that name that command.',
          'MCP only for tools you would run yourself.',
          'A .gitignore that already excludes secrets and build output.',
        ]}
      />

      <StatementSlide
        title="Measure your week, not your keystrokes."
        body="Count merged, understood changes. Count incidents you caught in review. Do not count lines the model produced. That number will flatter you and teach you nothing."
      />

      <RecapSlide
        title="Leave with a daily practice"
        items={[
          'Check first, patch second, review always.',
          'Small diffs. Named commits. A command the agent can run.',
          'Efficiency is fewer surprises after you press merge.',
          'Responsible use from Talk 2 still applies at full speed.',
        ]}
      />

      <CloseSlide notes="Close the morning. Point back to the hub for tools, setup, and the responsible AI page." />
    </DeckShell>
  )
}
