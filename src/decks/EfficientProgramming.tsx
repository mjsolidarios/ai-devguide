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
        subtitle="Reproduce a bug, test the expected behavior, and review a small patch."
        notes="Timing: scope and context 10 min; tests and implementation 15 min; review exercise 10 min; workflow discussion 10 min; debrief 5 min. Participants can use the brief from Talk 1 and the normalize() example from Talk 2."
      />

      <StatementSlide
        title="The change we will make"
        body="Fix normalize() for all-zero input while preserving ordinary and empty inputs. It should return a new array and leave the original unchanged. We will use tests and a diff to judge the patch."
        notes="Keep the input contract from the earlier talks: a small array of finite, non-negative numbers. Do not silently broaden the task to validation or a different normalization formula."
      />

      <BulletsSlide
        title="A workflow for a small fix"
        items={[
          'Save the current work and reproduce the reported behavior.',
          'Write a test that fails because of the bug.',
          'Give the agent the requirement, relevant files, and failing result.',
          'Review the patch and run the focused test plus relevant project checks.',
          'Commit the fix with a short explanation of the behavior change.',
        ]}
        notes="An import error or missing dependency is not evidence that a regression test caught the bug. Read the failure and confirm it identifies the behavior you intend to change."
      />

      <TwoColSlide
        title="Context for this change"
        leftTitle="Provide at the start"
        leftItems={[
          'The normalize() function and its file path.',
          'Expected outputs for normal, empty, and zero inputs.',
          'The failing test output and run command.',
          'The input contract and no-mutation requirement.',
        ]}
        rightTitle="Inspect if needed"
        rightItems={[
          'Callers that depend on the return value.',
          'Nearby tests and naming conventions.',
          'Runtime or package versions behind an error.',
          'Project instructions and required checks.',
        ]}
        notes="Keep relevant history if it explains a decision. Ask the agent to inspect missing context instead of sending unrelated files or assuming a longer prompt must be better."
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
        notes="Source for the built-in runner: https://nodejs.org/api/test.html . First save the earlier flawed function in normalize.mjs and add export before function. Run the command in the directory containing both files. Confirm that the all-zero assertion fails with NaN values; the first two assertions should pass. No npm test script or external test package is needed."
      />

      <BulletsSlide
        title="Debugging with an agent"
        items={[
          'Report the smallest input that reproduces the failure.',
          'Ask which operation explains the actual result.',
          'Test that explanation before accepting an edit.',
          'Change one cause at a time and rerun the same reproduction.',
          'Keep the reproduction as a regression test.',
        ]}
        notes="For [0, 0], largest is zero and dividing each score by it produces NaN. Ask what would disprove that explanation. A normal-input failure would suggest an additional problem. Reserve about 15 minutes across the test, debugging, and reference-patch slides."
      />

      <StatementSlide
        title="Read the patch against the requirements"
        body="Check what changed in the function, tests, and dependencies. Ask whether each change is needed for the reported bug and whether the tests still assert the promised behavior."
        notes="Review the patch itself, even when the assistant gives a convincing summary. Test changes can be appropriate, but changing an expected value requires a reason grounded in the specification."
      />

      <TwoColSlide
        title="Review checklist"
        leftTitle="Behavior"
        leftItems={[
          'Normal inputs still produce the expected values.',
          'Empty and all-zero inputs are handled.',
          'The input array is unchanged.',
          'The result is a new array.',
        ]}
        rightTitle="Scope and evidence"
        rightItems={[
          'Existing assertions still check the requirements.',
          'No unrelated edits or new packages appeared.',
          'The reported commands ran on this patch.',
          'Unverified cases are recorded for the reviewer.',
        ]}
        notes="For larger changes, also inspect access checks, network calls, file writes, and dependency changes when relevant. Use the checklist to ask specific questions rather than treating it as proof of correctness."
      />

      <BulletsSlide
        title="Keep refactors separate from bug fixes"
        items={[
          'Fix the observed behavior in a focused patch.',
          'Use existing tests to check behavior before a refactor.',
          'Make a rename, extraction, or move independently when possible.',
          'Review assertions as well as test counts and coverage.',
        ]}
        notes="Coverage tells you which code ran, not whether the assertions checked the correct result. A refactor can preserve a coverage percentage while changing behavior."
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
        notes="Run the test file against this implementation. The empty branch makes that case explicit; the all-zero branch avoids division by zero. map returns a new array. This example does not validate inputs or handle arbitrarily large arrays; those require separate requirements. Ask learners to explain each branch before using it."
      />

      <BulletsSlide
        title="Exercise · catch an incomplete fix"
        items={[
          'Suppose the zero-input branch returns scores directly.',
          'Run the existing tests. Explain why they still pass.',
          'Add a test that checks the output is a different array object.',
          'Check that a normal call leaves its input unchanged.',
          'Run both patches and explain which requirement the new test checks.',
        ]}
        notes="Allow 10 minutes: 2 to discuss, 5 to write tests, 3 to compare. Example inside a new test: const zeros = [0, 0]; assert.notStrictEqual(normalize(zeros), zeros); const scores = [2, 4]; normalize(scores); assert.deepEqual(scores, [2, 4]); The direct-return variant violates the new-array requirement despite matching values. Keep both value and identity checks."
      />

      <TwoColSlide
        title="Where the tool and model run"
        leftTitle="Tool execution"
        leftItems={[
          'Files and commands may run on your laptop.',
          'A hosted workspace may run them remotely.',
          'Permissions determine what those tools can access.',
          'Review commands that write or publish data.',
        ]}
        rightTitle="Model processing"
        rightItems={[
          'A terminal app may send context to a cloud model.',
          'Local inference depends on the configured provider.',
          'Check retention and connected-service settings.',
          'Use only data you are allowed to share.',
        ]}
        notes="Separate the place commands execute from the place inference happens. Do not assume a desktop or terminal interface keeps repository content offline. Check the documentation and settings for the actual configuration being used."
      />

      <BulletsSlide
        title="Make checks easy to repeat"
        items={[
          'Document the setup and test commands in the repository.',
          'Keep example data free of credentials and personal records.',
          'Give the agent project instructions its tool supports.',
          'Configure access controls separately from written instructions.',
          'Record checks that could not run and why.',
        ]}
        notes="A .gitignore file helps avoid accidental commits; it does not prevent an agent from reading files. Use the tool’s permissions and an appropriate exercise directory. For this example, keep normalize.mjs and normalize.test.mjs together."
      />

      <StatementSlide
        title="Record the work needed to finish"
        body="For a task you try with AI, note time spent explaining it, waiting, correcting output, and reviewing. Record any bugs found after the change. Use those observations to decide which tasks are worth delegating."
        notes="This is a suggested personal comparison, not a claim about measured productivity. A quick generated patch can still require a long review. Compare similar tasks and account for difficulty."
      />

      <RecapSlide
        title="Prepare the change for review"
        items={[
          'Include the requirement and the reproduction.',
          'Keep the diff focused and retain useful regression tests.',
          'List the checks you ran and any remaining limits.',
          'Write a commit message such as “fix: handle all-zero scores”.',
        ]}
        notes="Use the final 5 minutes for participants to describe the bug, the patch, and the test that caught the incomplete fix. A useful commit body explains that zero divisors produced NaN and that the new branch returns a fresh array of zeros."
      />

      <CloseSlide
        notes="The program allows 10 minutes for Q&A. Invite participants to bring a diff or describe a check they would add to their own project. The home page links to tool docs, setup, and responsible-use guidance."
      />

    </DeckShell>
  )
}
