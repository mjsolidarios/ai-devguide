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

export default function AiForStudents() {
  return (
    <DeckShell>
      <TitleSlide
        kicker="Talk 2 · 50 minutes"
        title="Effective Use of AI as an IT Student"
        subtitle="Ask useful questions, check the answers, and practice solving the problem yourself."
        notes="Timing: learning goals and permitted use 10 min; worked example 10 min; disclosure and verification 10 min; exercise 10 min; project discussion and debrief 10 min. Use a hypothetical assignment for discussion so nobody needs to reveal their own assessment history."
      />

      <StatementSlide
        title="Set a learning goal"
        body="For today’s example, aim to explain array mapping, identify division by zero, and test edge cases. After using AI, close the conversation and solve a similar problem to check what you can do independently."
        notes="Ask participants to name a specific skill they are practicing this week. “Finish the lab” is a task outcome; “trace a loop and explain its exit condition” gives them something to check."
      />

      <TwoColSlide
        title="Check what the assignment permits"
        leftTitle="Uses to ask about"
        leftItems={[
          'Getting hints on your own attempt.',
          'Generating practice questions.',
          'Comparing possible designs.',
          'Reviewing code you wrote.',
        ]}
        rightTitle="Rules to confirm"
        rightItems={[
          'Whether AI is allowed on this assessment.',
          'Whether generated code may be included.',
          'What assistance must be disclosed.',
          'Whether prompts or other process records are required.',
        ]}
        notes="These are questions, not a policy for any institution. An instructor may permit one use and prohibit another. If the instructions are unclear, ask before using AI on assessed work."
      />

      <BulletsSlide
        title="A study routine to try"
        items={[
          'Make an attempt and mark the line or concept you cannot explain.',
          'Ask for one hint or a question about that specific difficulty.',
          'Write the next version yourself and predict its output.',
          'Run it, compare the result with your prediction, and explain the difference.',
          'Close the chat and try a new input or a related problem.',
        ]}
        notes="Suggest a short independent attempt, such as 10 to 15 minutes, as a workshop routine rather than a rule for all learners. If the model gives a full solution, set it aside and return to the question you were trying to answer."
      />

      <CodeSlide
        title="Ask for a hint about your attempt"
        language="markdown"
        code={`I am practicing JavaScript array methods.
Here is my attempt:

\`\`\`javascript
function normalize(scores) {
  const largest = Math.max(...scores);
  return scores.map(score => score / largest);
}
\`\`\`
Predict the output for [2, 4] and [0, 0].
Ask me one question about the difference.
Wait for my answer before suggesting a fix.`}
        notes="Work through this for 10 minutes. [2, 4] gives [0.5, 1]. [0, 0] gives [NaN, NaN] because each division is 0/0. A useful hint is “What is largest when every score is zero?” An empty array maps to an empty array even though Math.max() returns -Infinity. The exercise assumes finite, non-negative inputs."
      />

      <StatementSlide
        title="When course instructions are unclear"
        body="Ask the instructor about the intended use before applying it to assessed work: “May I use an AI tool to suggest edge cases for tests I write myself? What record of that help should I submit?”"
        notes="Disclosure and permission answer different questions. Recording assistance does not override a restriction. Use an unrelated practice problem while waiting for clarification."
      />

      <BulletsSlide
        title="Document the help you used"
        items={[
          'Name the tool and date; include a model or version if available.',
          'State what it did: explain an error, suggest tests, or draft code.',
          'Describe what you wrote, changed, rejected, and checked.',
          'Use the required disclosure format and retain records if asked.',
        ]}
        notes="Example: “I used [tool] on [date] to suggest edge cases for normalize(). I wrote the function and tests and checked normal, empty, and all-zero inputs.” Adapt the statement to what actually happened. A disclosure about a tool does not replace citations to sources used in the work."
      />

      <TwoColSlide
        title="Prepare an example you can share"
        leftTitle="Remove or replace"
        leftItems={[
          'API keys and passwords.',
          'Student names, grades, and identifiers.',
          'Private messages and internal records.',
          'Research or assessment material you cannot share.',
        ]}
        rightTitle="Use instead"
        rightItems={[
          'An obvious placeholder credential.',
          'Invented rows with the same data structure.',
          'A short description of the relevant behavior.',
          'Your own minimal example and failing test.',
        ]}
        notes="Check automatic context too: an assistant may read attached files or repository content. A terminal interface can use a remote model. Review the tool’s data handling and the rules for the material before sharing it."
      />

      <BulletsSlide
        title="Verify an AI explanation"
        items={[
          'Run a small example and compare its output with the explanation.',
          'Check API names and parameters in the docs for your version.',
          'Open a cited source and find the passage supporting the claim.',
          'Trace each step of an algorithm before accepting its complexity claim.',
        ]}
        notes="Ask participants how they would check a claim that normalize() is constant time. Both finding the maximum and mapping the array depend on its length. Avoid a live demo that relies on the model making a particular mistake."
      />

      <StatementSlide
        title="Exercise · trace, fix, and explain"
        body="Work for 10 minutes without AI. Trace the earlier function for [3, 6], [], and [0, 0]. Add a branch for the all-zero case, then explain to a partner why it is needed."
        notes="Give 3 minutes to trace, 4 to implement, and 3 to explain. Expected results under the workshop contract: [0.5, 1], [], and [0, 0]. A branch returning scores.map(() => 0) when largest === 0 handles the zero case while returning a new array. Check that the input is not mutated."
      />

      <BulletsSlide
        title="Check the explanation with a partner"
        items={[
          'For [3, 6], explain why the output is [0.5, 1].',
          'For [0, 0], identify which operation produced NaN.',
          'For [], explain why the returned array is empty.',
          'Try [0, 5, 10] and predict the output before running it.',
        ]}
        notes="Answers: largest is 6 for the first input; 0/0 produces NaN; mapping an empty array produces no elements; the transfer example gives [0, 0.5, 1]. If someone gets stuck, ask them to write each intermediate value rather than showing the finished function."
      />

      <TwoColSlide
        title="Explain a project you built"
        leftTitle="Include in the README"
        leftItems={[
          'The problem and who the project is for.',
          'Setup and test commands that work.',
          'One design choice and its tradeoff.',
          'Known limits and any required AI disclosure.',
        ]}
        rightTitle="Be ready to demonstrate"
        rightItems={[
          'Run the project from the setup instructions.',
          'Trace a request or input through the code.',
          'Explain a test and the bug it catches.',
          'Make a small change and check the result.',
        ]}
        notes="These are ways to make a project understandable to a reviewer. Avoid assumptions about what every employer expects or whether a particular commit history proves authorship."
      />

      <StatementSlide
        title="Keep a record of what you learned"
        body="After a study session, write the error you encountered, why it happened, and how you checked the fix. Add one related problem to try later without assistance."
        notes="Example note: “All-zero input made the divisor zero. I added a branch that returns a new array of zeros. Next I will write tests to check that the function leaves the original array unchanged.”"
      />

      <RecapSlide
        title="Before submitting assessed work"
        items={[
          'Confirm that the assistance you used is permitted.',
          'Explain the code and check it against the assignment requirements.',
          'Verify sources and remove private data from shared records.',
          'Include the disclosure and process evidence the course requires.',
        ]}
        notes="Use the final discussion to ask participants for one question they would ask an instructor and one concept they can now explain. The scheduled break follows this session."
      />

      <CloseSlide
        notes="Invite a final question if time permits, then take the scheduled break. Talk 3 uses the same function to practice tests and patch review."
      />

    </DeckShell>
  )
}
