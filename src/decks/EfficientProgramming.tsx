import { DEMO_APP, DEMO_FILES, DEMO_PROMPT, RUNS, SCORECARD } from '../content/demo'
import {
  BulletsSlide,
  CloseSlide,
  CodeSlide,
  DeckShell,
  RecapSlide,
  SectionSlide,
  StatementSlide,
  TitleSlide,
  TwoColSlide,
} from './kit'

const [runA, runB] = RUNS
const [agentsFile, skillFile, mcpFile] = DEMO_FILES

export default function EfficientProgramming() {
  return (
    <DeckShell>
      <TitleSlide
        kicker="Talk 3 · 50 minutes"
        title="Efficient Programming with AI"
        subtitle="Build one app twice to see what setup changes, then fix a bug with a failing test and review the patch."
        notes="Timing: two-setup demo 22 min (start both runs early, they need time); bug fix and review 20 min; exercise 6 min; recap 2 min. Before the talk: two empty folders, the same agent and model in both, Run B's files already in place, Node installed, and Expo Go on a phone on the same Wi-Fi. Open /demo on a second screen for the scorecard."
      />

      <SectionSlide
        label="Part 1"
        title="Same app, two setups"
        agenda={['The prompt', 'Run A: bare', 'Run B: instructions, skill, MCP', 'Score both']}
        notes="Start Run A and Run B as soon as the prompt slide is up, then explain Run B's files while they work. Do not coach either agent mid-run; that breaks the comparison."
      />

      <StatementSlide
        title={DEMO_APP.name}
        body={`${DEMO_APP.summary} Same agent, same model, same prompt, two empty folders. The only difference is what sits in the folder before the agent starts.`}
        notes="Say out loud that this is one run each, not a benchmark. Results vary between runs, so the scorecard is about what to look for, not a verdict."
      />

      <CodeSlide
        title="The prompt, word for word, in both runs"
        language="markdown"
        code={DEMO_PROMPT}
        points={[
          'No hints about tests, versions, or accessibility.',
          'Run B gets those from its files, not from the prompt.',
          'Start both runs now.',
        ]}
        notes="Paste the prompt into both sessions. If your agent has a plan mode, use the same mode in both."
      />

      <TwoColSlide
        title="What each agent has to work with"
        leftTitle={`${runA.label} · ${runA.title}`}
        leftItems={[...runA.setup]}
        rightTitle={`${runB.label} · ${runB.title}`}
        rightItems={[...runB.setup]}
        notes="Everything in Run B's folder was covered in Talk 1: instructions, a skill, and MCP servers. Now we see them working together."
      />

      <CodeSlide
        title={`Run B · ${agentsFile.path}`}
        language={agentsFile.language}
        code={agentsFile.code}
        highlightRanges={[
          [1, 3],
          [5, 9],
          [11, 16],
        ]}
        points={[
          'Commands the agent can run to check itself.',
          'A dependency rule, so the diff stays small.',
          'A definition of done that names the skill.',
        ]}
        notes="The 'Done means' line is doing a lot of work. Without it, an agent decides for itself when to stop."
      />

      <CodeSlide
        title={`Run B · ${skillFile.path}`}
        language={skillFile.language}
        code={skillFile.code}
        highlightRanges={[
          [1, 5],
          [9, 10],
          [11, 12],
          [13, 14],
          [15, 16],
          [17, 18],
        ]}
        notes="Walk the steps one click at a time. Step 2 needs the Playwright MCP server; step 3 is an accessibility check most people skip; step 5 asks for evidence rather than a claim."
      />

      <CodeSlide
        title={`Run B · ${mcpFile.path}`}
        language={mcpFile.language}
        code={mcpFile.code}
        highlightRanges={[
          [3, 6],
          [7, 10],
        ]}
        points={[
          'Context7: current Expo and React Native docs.',
          'Playwright: opens the web preview at phone size for the skill.',
          'OpenCode users: the same servers go in opencode.json.',
        ]}
        notes="The /demo page on the site shows the opencode.json equivalent. Check both runs' progress now."
      />

      <TwoColSlide
        title="While they run, watch for"
        leftTitle={runA.label}
        leftItems={[...runA.watch]}
        rightTitle={runB.label}
        rightItems={[...runB.watch]}
        notes="Narrate what each agent is doing. If Run B calls Context7, point it out. If Run A finishes first, that is not a win yet; we haven't checked anything."
      />

      <BulletsSlide
        title="Score both runs"
        items={[...SCORECARD]}
        notes="Use the scorecard on the /demo page and tick each line for each run with the room. Run npm test and npx expo export yourself in both folders, then open each app in Expo Go; do not take either agent's word for it. The web preview is not a phone, so the Expo Go check matters. Whatever the result, the discussion is about which line the setup affected."
      />

      <StatementSlide
        title="The setup does not make the model smarter"
        body="It gives the agent current docs, a definition of done, and a way to look at its own work. When Run B does better, check which of those three made the difference. When it doesn’t, that tells you what to add to your own setup."
        notes="Keep this honest. Sometimes the bare run is fine for a toy app. The setup pays off on the second, third, and tenth task in the same repo, because the files stay and the prompt does not."
      />

      <SectionSlide
        label="Part 2"
        title="Fix a bug with a failing test"
        agenda={['Reproduce', 'Test', 'Patch', 'Review']}
        notes="Twenty minutes. Back to normalize() from Talks 1 and 2."
      />

      <StatementSlide
        title="The change we will make"
        body="Fix normalize() for all-zero input while keeping ordinary and empty inputs working. It must return a new array and leave the original unchanged. We judge the patch with tests and a diff."
        notes="Input contract from the earlier talks: a small array of finite, non-negative numbers. Do not quietly widen the task to validation or a different formula."
      />

      <BulletsSlide
        title="A workflow for a small fix"
        items={[
          'Commit the current work and reproduce the reported behaviour.',
          'Write a test that fails because of the bug.',
          'Give the agent the requirement, relevant files, and failing result.',
          'Review the patch and run the focused test plus project checks.',
          'Commit the fix with a short explanation of the behaviour change.',
        ]}
        notes="This is the regression-test skill from Talk 1, done by hand. An import error is not evidence that a test caught the bug; read the failure."
      />

      <CodeSlide
        title="A test file you can run"
        language="javascript"
        code={`// normalize.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { normalize } from "./normalize.mjs";

test("normal, empty, and all-zero inputs", () => {
  assert.deepEqual(normalize([2, 4]), [0.5, 1]);
  assert.deepEqual(normalize([]), []);
  assert.deepEqual(normalize([0, 0]), [0, 0]);
});
// Run: node --test normalize.test.mjs`}
        highlightRanges={[
          [2, 4],
          [7, 8],
          [9, 9],
          [11, 11],
        ]}
        notes="Source: https://nodejs.org/api/test.html . Save the flawed function in normalize.mjs with export. The all-zero assertion should fail with NaN; the first two pass. No test package needed."
      />

      <BulletsSlide
        title="Debugging with an agent"
        items={[
          'Report the smallest input that reproduces the failure.',
          'Ask which operation explains the actual result.',
          'Test that explanation before accepting an edit.',
          'Change one cause at a time; rerun the same reproduction.',
          'Keep the reproduction as a regression test.',
        ]}
        notes="For [0, 0], largest is zero and each division is 0/0. Ask what would disprove that explanation."
      />

      <CodeSlide
        title="A patch to compare with your own"
        language="javascript"
        code={`// normalize.mjs
// Input: small arrays of finite, non-negative numbers.
export function normalize(scores) {
  if (scores.length === 0) return [];
  const largest = Math.max(...scores);
  if (largest === 0) return scores.map(() => 0);
  return scores.map(score => score / largest);
}`}
        highlightRanges={[
          [4, 4],
          [6, 6],
          [7, 7],
        ]}
        points={[
          'Empty input: explicit, not an accident of map.',
          'All zeros: no division by zero.',
          'map returns a new array every time.',
        ]}
        notes="Ask learners to explain each branch before using it. This does not validate input or handle huge arrays; those need their own requirements."
      />

      <TwoColSlide
        title="Review checklist"
        leftTitle="Behaviour"
        leftItems={[
          'Normal inputs still give the expected values.',
          'Empty and all-zero inputs are handled.',
          'The input array is unchanged.',
          'The result is a new array.',
        ]}
        rightTitle="Scope and evidence"
        rightItems={[
          'Existing assertions still check the requirements.',
          'No unrelated edits or new packages.',
          'The reported commands ran on this patch.',
          'Unverified cases are written down.',
        ]}
        notes="The same checklist applied to the Thesis Consult runs. Use it to ask specific questions, not as proof of correctness."
      />

      <BulletsSlide
        title="Exercise · catch an incomplete fix"
        items={[
          'Suppose the zero branch returns scores directly.',
          'Run the tests. Explain why they still pass.',
          'Add a test that the output is a different array object.',
          'Check that a normal call leaves its input unchanged.',
        ]}
        notes="6 minutes. Example: const zeros = [0, 0]; assert.notStrictEqual(normalize(zeros), zeros); const scores = [2, 4]; normalize(scores); assert.deepEqual(scores, [2, 4]); The direct-return variant matches values but breaks the new-array requirement."
      />

      <TwoColSlide
        title="Where the tool and the model run"
        leftTitle="Tool execution"
        leftItems={[
          'Commands and MCP servers may run on your laptop.',
          'A hosted workspace runs them remotely.',
          'Permissions decide what they can reach.',
        ]}
        rightTitle="Model processing"
        rightItems={[
          'A terminal app may send context to a cloud model.',
          'Local inference depends on the configured provider.',
          'Check retention and connected-service settings.',
        ]}
        notes="Separate where commands execute from where inference happens. Playwright MCP runs locally; Context7 is a remote server that receives your library queries."
      />

      <RecapSlide
        title="Take this to your next project"
        items={[
          'Write AGENTS.md with commands and a definition of done.',
          'Turn a check you repeat into a skill.',
          'Add an MCP server only when the agent lacks a capability.',
          'Start every fix with a failing test, and read the diff.',
        ]}
        notes="Ask two participants which line they will try first. Q&A follows."
      />

      <CloseSlide
        notes="Ten minutes of Q&A. The /demo page has every file from the two-setup demo so participants can repeat it at home."
      />
    </DeckShell>
  )
}
