import {
  BulletsSlide,
  CloseSlide,
  CodeSlide,
  DeckShell,
  RecapSlide,
  SectionSlide,
  StatementSlide,
  TableSlide,
  TitleSlide,
  TwoColSlide,
} from './kit'

export default function AiForStudents() {
  return (
    <DeckShell>
      <TitleSlide
        kicker="Talk 2"
        title="Effective Use of AI as an IT Student"
        subtitle="Study from your own sources, pick the right assistant for the job, claim the free tools you qualify for, and keep your learning your own."
      />

      <StatementSlide
        title="Set a learning goal first"
        body="Today’s example: explain array mapping, spot a division by zero, and test the edge cases. After using AI, close the chat and solve a similar problem on your own. That is how you find out what you actually learned."
        notes="'Finish the lab' is a task. 'Trace a loop and explain its exit condition' is a skill you can check. Name the skill before you open the chat."
      />

      <TwoColSlide
        title="Check what the assignment permits"
        leftTitle="Uses to ask about"
        leftItems={[
          'Hints on your own attempt.',
          'Generated practice questions.',
          'Comparing possible designs.',
          'Reviewing code you wrote.',
        ]}
        rightTitle="Rules to confirm"
        rightItems={[
          'Whether AI is allowed on this assessment.',
          'Whether generated code may be included.',
          'What assistance must be disclosed.',
          'Whether prompts or logs are required.',
        ]}
        notes="Rules differ between courses and even between assignments in the same course. If the instructions are unclear, ask your instructor before using AI on assessed work."
      />

      <BulletsSlide
        title="A study routine to try"
        items={[
          'Attempt it, and mark the line or concept you cannot explain.',
          'Ask for one hint about that specific difficulty.',
          'Write the next version yourself and predict its output.',
          'Run it, compare with your prediction, and explain the difference.',
          'Close the chat and try a new input or a related problem.',
        ]}
        notes="Give yourself 10 to 15 minutes on your own before asking. If the model hands over a full solution, set it aside and go back to the question you were trying to answer."
      />

      <CodeSlide
        title="Ask for a hint, not an answer"
        language="markdown"
        code={`I am practising JavaScript array methods.
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
        highlightRanges={[
          [1, 2],
          [4, 9],
          [10, 12],
        ]}
        notes="The last line matters most: it stops the model from jumping straight to the fix, so you still do the thinking."
      />

      <CodeSlide
        title="More prompts that teach instead of solve"
        language="markdown"
        code={`Explain this error message in plain words.
Do not fix my code. Tell me where to look.

I think this loop runs n times. Am I right?
Show me how to check it myself.

Here are two ways to write this function.
Which is easier to read, and why?

Give me three inputs that could break this.`}
        highlightRanges={[
          [1, 2],
          [4, 5],
          [7, 8],
          [10, 10],
        ]}
        points={[
          'Read the error before you ask.',
          'State your guess, then test it.',
          'Compare options you wrote.',
          'Hunt for edge cases.',
        ]}
      />

      <SectionSlide
        label="Part 1"
        title="Pick the tool for the job"
        agenda={['Study from your sources', 'Ask, search, and do', 'Design before you code']}
        notes="Features and free limits change often. The Tools page on the hub links to the current docs for each tool."
      />

      <StatementSlide
        title="Gemini Notebook: answers grounded in your own material"
        body="Formerly NotebookLM. Upload your syllabus, lecture slides, and lab handouts, and the answers cite the passage they came from. It stays inside your sources instead of the whole internet, which is exactly what you want when studying for a course."
        notes="Free with a Google account, with limits. Notebooks also sync with the Gemini app. Do not upload material your course says you cannot share."
      />

      <BulletsSlide
        title="A notebook for one course"
        items={[
          'Add the syllabus, lecture PDFs, and lab handouts as sources.',
          'Ask a question, then click each citation and read the passage.',
          'Generate a quiz or flashcards; answer before you look.',
          'Make an audio overview for review on the commute.',
          'Ask what the sources do not cover, and take that to class.',
        ]}
        notes="Clicking the citation is the habit to build. A cited answer can still misread its source."
      />

      <CodeSlide
        title="Prompts that keep it grounded"
        language="markdown"
        code={`Using only my sources, explain how Array.map
differs from a for loop. Cite each claim.

Quiz me with five questions on week 3.
Wait for my answer after each one.

Which topics in the syllabus have no
matching lecture notes in these sources?`}
        highlightRanges={[
          [1, 2],
          [4, 5],
          [7, 8],
        ]}
        notes="'Using only my sources' and 'Cite each claim' are the key phrases. The third prompt finds gaps in your notes, which is more useful than another summary."
      />

      <TableSlide
        title="Which assistant for which job"
        columns={['Tool', 'Good for', 'Watch for']}
        rows={[
          ['Gemini Notebook', 'Studying from your own course material with citations.', 'Only as good as the sources you add.'],
          ['ChatGPT desktop', 'Chat, research reports, and Codex in one app on Mac and Windows.', 'Work with Apps can read open editors and files.'],
          ['Grok', 'Real-time search of recent posts and news on X.', 'Posts are leads, not sources.'],
          ['Google Stitch', 'Turning a description into UI screens and a clickable prototype.', 'Output is a sketch; check contrast and real data.'],
        ]}
        notes="There is no single best assistant. Each of these does one job better than the others."
      />

      <TwoColSlide
        title="ChatGPT desktop"
        leftTitle="What it does"
        leftItems={[
          'Chat for questions and explanations.',
          'Work for research and finished documents.',
          'Codex for building and reviewing code.',
          'Available on macOS and Windows.',
        ]}
        rightTitle="Before you turn things on"
        rightItems={[
          'Work with Apps can read open editors and terminals.',
          'Grant file and app access one at a time.',
          'Check data controls and chat history settings.',
          'Codex and heavy use need a paid plan.',
        ]}
        notes="An app that can read your editor can also read any secrets in it, such as API keys in a .env file."
      />

      <TwoColSlide
        title="Grok"
        leftTitle="Useful for"
        leftItems={[
          'What developers are saying about a release today.',
          'Finding recent threads, announcements, and demos.',
          'A second opinion on an explanation.',
        ]}
        rightTitle="Keep in mind"
        rightItems={[
          'Posts can be wrong, old, or jokes.',
          'Open the original link before you cite anything.',
          'Free tier has message limits; student offers vary by country.',
        ]}
        notes="Real-time access to X is Grok's strength, and its weakness for coursework: a popular post is not necessarily an accurate one. Check the student offer's eligibility rules for your country."
      />

      <StatementSlide
        title="Google Stitch: design the screens before you write code"
        body="Describe who uses your app and what they need to do. Stitch generates linked UI screens, lets you click through them as a prototype, and exports to Figma or HTML/CSS. Use it to argue about the design, then build it yourself."
        notes="Free through Google Labs with monthly generation limits. Generated screens tend to look alike, so adapt them to your users."
      />

      <BulletsSlide
        title="A Stitch workflow for a capstone"
        items={[
          'Write two sentences: who the users are and their main task.',
          'Generate the key screens and link them into a flow.',
          'Click through it with a classmate and note where they hesitate.',
          'Export to Figma or HTML, then check contrast, labels, and real data.',
          'Keep the prompt and export with your project for disclosure.',
        ]}
        notes="The hesitation notes are the real output. A polished prototype that confuses users is a cheap mistake to catch before any code exists."
      />

      <SectionSlide
        label="Part 2"
        title="Claim what your student status unlocks"
        agenda={['GitHub Education', 'Copilot Student', 'JetBrains and more']}
        notes="Most of these cost nothing but need a verified student account."
      />

      <TableSlide
        title="GitHub Education, in short"
        columns={['Benefit', 'What you get', 'Note']}
        rows={[
          ['Student Developer Pack', 'Partner offers: cloud credits, a free domain for a year, learning platforms.', 'Offers vary; check each one.'],
          ['Copilot Student', 'Unlimited completions plus monthly AI credits for chat, agents, review, and CLI.', 'Models are picked automatically.'],
          ['GitHub Pro + Codespaces', 'Pro features and cloud dev environments.', 'While you are a student.'],
          ['JetBrains licence', 'Every JetBrains IDE, renewed yearly.', 'Through the pack or JetBrains directly.'],
        ]}
        notes="Terms change; check education.github.com for the current details."
      />

      <BulletsSlide
        title="How to apply"
        items={[
          'Add and verify your school email on your GitHub account.',
          'Apply at education.github.com and upload proof of enrolment if asked.',
          'Wait for approval. It can take a few days.',
          'Enable Copilot Student, then sign in from your editor.',
        ]}
        notes="Most rejections come from an unverified school email or an unreadable proof photo. Apply this week, not the night before a project deadline."
      />

      <SectionSlide
        label="Part 3"
        title="Stay honest and safe"
        agenda={['Spot mistakes', 'Disclose', 'Protect data']}
      />

      <BulletsSlide
        title="How AI gets code wrong"
        items={[
          'It invents functions, flags, or packages that do not exist.',
          'It uses syntax from an older or newer version than yours.',
          'It fixes the symptom, like hiding an error, not the cause.',
          'It agrees with a wrong idea because you stated it confidently.',
          'It sounds equally sure when it is right and when it is wrong.',
        ]}
      />

      <BulletsSlide
        title="Verify an AI explanation"
        items={[
          'Run a small example and compare it with the explanation.',
          'Check API names and parameters in the docs for your version.',
          'Open a cited source and find the passage that supports the claim.',
          'Trace each step before accepting a complexity claim.',
        ]}
        notes="Try it: is normalize() constant time? Finding the maximum and mapping the array both depend on the array's length, so it is linear."
      />

      <BulletsSlide
        title="Document the help you used"
        items={[
          'Name the tool and date; add a model or version if shown.',
          'State what it did: explain an error, suggest tests, draft code.',
          'Describe what you wrote, changed, rejected, and checked.',
          'Use the required disclosure format and keep records if asked.',
        ]}
        notes="Disclosing help and being allowed to use it are separate questions: writing it down does not make a restricted use acceptable."
      />

      <CodeSlide
        title="A disclosure you can adapt"
        language="markdown"
        code={`AI assistance: I used [tool] on [date] to
suggest edge cases for normalize().

I wrote the function and the tests myself.
I rejected one suggestion that changed the
expected output instead of fixing the bug.

I checked normal, empty, and all-zero
inputs by running the tests.`}
        highlightRanges={[
          [1, 2],
          [4, 6],
          [8, 9],
        ]}
        points={[
          'What the tool did.',
          'What you did, and what you rejected.',
          'How you checked it.',
        ]}
      />

      <TwoColSlide
        title="Prepare an example you can share"
        leftTitle="Remove or replace"
        leftItems={[
          'API keys and passwords.',
          'Student names, grades, and IDs.',
          'Private messages and internal records.',
          'Material you are not allowed to share.',
        ]}
        rightTitle="Use instead"
        rightItems={[
          'An obvious placeholder credential.',
          'Invented rows with the same shape.',
          'A short description of the behaviour.',
          'Your own minimal example and test.',
        ]}
        notes="This applies to notebook uploads and desktop-app file access too. A desktop or terminal app can still send what it reads to a remote model."
      />

      <SectionSlide
        label="Part 4 · Live demo"
        title="Watch generative AI used the right way"
        agenda={['1 · Hint', '2 · Verify', '3 · Review', '4 · Practice', '5 · Feedback', '6 · Record']}
        notes="Follow along with the prompts on screen. Each one is short enough to copy into your own chats."
      />

      <BulletsSlide
        title="What to watch for in the demo"
        items={[
          'The code is written and run before the AI is opened.',
          'Every prompt gives context and asks for one specific thing.',
          'No AI answer is accepted until it is checked by running code.',
          'The fix is written by hand; the AI only reviews it.',
          'The chat ends with a record of what the AI contributed.',
        ]}
      />

      <TwoColSlide
        title="A weak prompt and a strong one"
        leftTitle="Weak"
        leftItems={[
          'fix my code',
          'No context: which language, which input?',
          'Asks for an answer, not understanding.',
          'Nothing you can check afterwards.',
        ]}
        rightTitle="Strong"
        rightItems={[
          'Says what you are learning and shows your attempt.',
          'Gives the input, the output, and what you expected.',
          'Asks for one hint or one explanation.',
          'Asks how to check the answer yourself.',
        ]}
      />

      <CodeSlide
        title="Step 1 · Describe the problem, ask for a hint"
        language="markdown"
        code={`I am learning JavaScript. This function should
scale scores so the largest becomes 1.

function normalize(scores) {
  const largest = Math.max(...scores);
  return scores.map(score => score / largest);
}

normalize([2, 4]) gives [0.5, 1], as expected.
normalize([0, 0]) gives [NaN, NaN].

Do not fix it. Give me one hint about why.`}
        highlightRanges={[
          [1, 2],
          [9, 10],
          [12, 12],
        ]}
        points={[
          'Context: what you are learning.',
          'Evidence: real input and output.',
          'Limit: a hint, not a solution.',
        ]}
      />

      <CodeSlide
        title="Step 2 · Check the explanation yourself"
        language="markdown"
        code={`You said 0 / 0 produces NaN in JavaScript.
Give me two lines I can run in the browser
console to confirm that.

Also, what does Math.max() return when the
array is empty? Tell me how to test it
instead of just telling me the answer.`}
        highlightRanges={[
          [1, 3],
          [5, 7],
        ]}
        points={[
          'Turn the claim into something you can run.',
          'Run it before you believe it.',
          'Ask about the edge case you noticed.',
        ]}
        notes="In the console, 0 / 0 is NaN and Math.max() with no arguments is -Infinity. An empty array still returns [] because map has nothing to divide."
      />

      <CodeSlide
        title="Step 3 · Write the fix, then ask for a review"
        language="markdown"
        code={`Here is my fix. Do not rewrite it.

function normalize(scores) {
  const largest = Math.max(...scores);
  if (largest === 0) return scores.map(() => 0);
  return scores.map(score => score / largest);
}

List inputs it might still get wrong, and
explain which ones matter for my task.`}
        highlightRanges={[
          [1, 1],
          [5, 5],
          [9, 10],
        ]}
        points={[
          'The fix is yours; the AI only reviews it.',
          '"Do not rewrite it" keeps your version.',
          'Decide which suggestions are in scope.',
        ]}
        notes="Expected results after the fix: [3, 6] gives [0.5, 1], [] gives [], [0, 0] gives [0, 0], and [0, 5, 10] gives [0, 0.5, 1]. The reviewer may mention negative numbers or text values; those are outside this task, so note them rather than chase them."
      />

      <CodeSlide
        title="Step 4 · Generate practice, not answers"
        language="markdown"
        code={`Write three short practice problems like
this one, about dividing by a value that
could be zero. Do not include solutions.

Generate ten fake student records with a
name, ID, and grade for testing. Make every
value obviously invented.`}
        highlightRanges={[
          [1, 3],
          [5, 7],
        ]}
        points={[
          'Generated practice checks what you learned.',
          'Generated test data keeps real people out of your prompts.',
        ]}
      />

      <CodeSlide
        title="Step 5 · Get feedback on your writing"
        language="markdown"
        code={`Here is the README I wrote for my project.
Point out sentences that are unclear or
missing a step. Do not rewrite it for me.

What would a new user still not know
after reading it?`}
        highlightRanges={[
          [1, 3],
          [5, 6],
        ]}
        points={[
          'Generative AI can write for you; ask it to critique instead.',
          'Your words, your understanding, your grade.',
        ]}
      />

      <CodeSlide
        title="Step 6 · Close with a record"
        language="markdown"
        code={`List every suggestion you made in this
conversation, and mark which ones I used.
Keep it short so I can check it against
my notes.`}
        highlightRanges={[[1, 4]]}
        points={[
          'A starting point for your disclosure.',
          'Check it: the summary can be wrong too.',
        ]}
      />

      <RecapSlide
        title="Before submitting assessed work"
        items={[
          'Confirm that the assistance you used is permitted.',
          'Explain the code and check it against the requirements.',
          'Verify sources and remove private data from shared records.',
          'Include the disclosure and evidence the course requires.',
        ]}
      />

      <CloseSlide />
    </DeckShell>
  )
}
