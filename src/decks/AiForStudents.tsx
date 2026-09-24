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
        kicker="Talk 2 · 50 minutes"
        title="Effective Use of AI as an IT Student"
        subtitle="Study from your own sources, pick the right assistant for the job, claim the free tools you qualify for, and keep your learning your own."
        notes="Timing: learning goals and permitted use 8 min; tools for the job 17 min; student benefits 7 min; disclosure and verification 8 min; exercise 8 min; recap 2 min. Use a hypothetical assignment for discussion so nobody has to reveal their own assessment history."
      />

      <StatementSlide
        title="Set a learning goal first"
        body="Today’s example: explain array mapping, spot a division by zero, and test the edge cases. After using AI, close the chat and solve a similar problem on your own. That is how you find out what you actually learned."
        notes="Ask participants to name a specific skill they are practising this week. 'Finish the lab' is a task; 'trace a loop and explain its exit condition' is something they can check."
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
        notes="These are questions, not a policy for any institution. An instructor may permit one use and prohibit another. If the instructions are unclear, ask before using AI on assessed work."
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
        notes="Suggest 10 to 15 minutes of independent attempt as a workshop routine, not a rule. If the model hands over a full solution, set it aside and return to the question you were trying to answer."
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
        notes="[2, 4] gives [0.5, 1]. [0, 0] gives [NaN, NaN] because each division is 0/0. A useful hint: 'What is largest when every score is zero?' The last line is the important one: it stops the model from jumping to the fix."
      />

      <SectionSlide
        label="Part 1"
        title="Pick the tool for the job"
        agenda={['Study from your sources', 'Ask, search, and do', 'Design before you code']}
        notes="Seventeen minutes. Each tool gets one job it does well and one thing to watch for. Features and free limits change often; the Tools page links to current docs."
      />

      <StatementSlide
        title="Gemini Notebook: answers grounded in your own material"
        body="Formerly NotebookLM. Upload your syllabus, lecture slides, and lab handouts, and the answers cite the passage they came from. It stays inside your sources instead of the whole internet, which is exactly what you want when studying for a course."
        notes="Google renamed NotebookLM to Gemini Notebook in July 2026; notebooks also sync with the Gemini app. Free with a Google account, with limits. Remind students not to upload material their course says they cannot share."
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
        notes="The citation click is the habit to build. A cited answer can still misread its source. The last line turns the tool into a question generator for the instructor."
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
        notes="'Using only my sources' and 'Cite each claim' are the key phrases. The third prompt finds gaps, which is more useful than another summary."
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
        notes="Resist the urge to pick one 'best' assistant. Each of these does one job better than the others."
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
        notes="OpenAI merged Chat, Work, and Codex into one desktop app in July 2026. The access question is the teaching point: an app that can read your editor can read the secrets in it."
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
        notes="Grok's strength is real-time access to X. That is also its weakness for coursework: popularity is not accuracy. xAI's student offer has required a US .edu email; check eligibility before promising it to anyone."
      />

      <StatementSlide
        title="Google Stitch: design the screens before you write code"
        body="Describe who uses your app and what they need to do. Stitch generates linked UI screens, lets you click through them as a prototype, and exports to Figma or HTML/CSS. Use it to argue about the design, then build it yourself."
        notes="Free through Google Labs with monthly generation limits. Great for capstone proposals and user testing before any code exists. Generated screens tend to share the same look, so change them to fit your users."
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
        notes="The hesitation notes are the real output. A pretty prototype that confuses users is a cheap mistake to catch at this stage."
      />

      <SectionSlide
        label="Part 2"
        title="Claim what your student status unlocks"
        agenda={['GitHub Education', 'Copilot Student', 'JetBrains and more']}
        notes="Seven minutes. This is the most practical part of the morning for many students: most of these cost nothing but need a verified account."
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
        notes="Copilot for students moved to a dedicated Copilot Student plan in March 2026: unlimited completions plus a monthly AI-credit allowance, with models chosen automatically. Check the current terms at education.github.com before quoting numbers."
      />

      <BulletsSlide
        title="How to apply"
        items={[
          'Add and verify your school email on your GitHub account.',
          'Apply at education.github.com and upload proof of enrolment if asked.',
          'Wait for approval. It can take a few days.',
          'Enable Copilot Student, then sign in from your editor.',
        ]}
        notes="Common failure: the school email is not verified, or the proof photo is unreadable. Suggest students apply this week rather than the night before a project deadline."
      />

      <SectionSlide
        label="Part 3"
        title="Stay honest and safe"
        agenda={['Disclose', 'Protect data', 'Verify']}
        notes="Eight minutes."
      />

      <BulletsSlide
        title="Document the help you used"
        items={[
          'Name the tool and date; add a model or version if shown.',
          'State what it did: explain an error, suggest tests, draft code.',
          'Describe what you wrote, changed, rejected, and checked.',
          'Use the required disclosure format and keep records if asked.',
        ]}
        notes="Example: 'I used [tool] on [date] to suggest edge cases for normalize(). I wrote the function and tests and checked normal, empty, and all-zero inputs.' Disclosure and permission are different questions: recording help does not override a restriction."
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
        notes="This applies to notebook uploads and desktop-app file access too. A desktop or terminal interface can still send everything to a remote model."
      />

      <BulletsSlide
        title="Verify an AI explanation"
        items={[
          'Run a small example and compare it with the explanation.',
          'Check API names and parameters in the docs for your version.',
          'Open a cited source and find the passage that supports the claim.',
          'Trace each step before accepting a complexity claim.',
        ]}
        notes="Ask how participants would check a claim that normalize() is constant time. Finding the maximum and mapping the array both depend on its length."
      />

      <StatementSlide
        title="Exercise · trace, fix, and explain"
        body="Eight minutes, no AI. Trace the earlier function for [3, 6], [], and [0, 0]. Add a branch for the all-zero case, then explain to a partner why it is needed and predict the output for [0, 5, 10]."
        notes="3 minutes to trace, 3 to implement, 2 to explain. Expected: [0.5, 1], [], [0, 0], and [0, 0.5, 1]. A branch returning scores.map(() => 0) when largest === 0 handles zeros and returns a new array."
      />

      <RecapSlide
        title="Before submitting assessed work"
        items={[
          'Confirm that the assistance you used is permitted.',
          'Explain the code and check it against the requirements.',
          'Verify sources and remove private data from shared records.',
          'Include the disclosure and evidence the course requires.',
        ]}
        notes="Ask each participant for one tool they will set up this week and one question they will ask an instructor. The break follows."
      />

      <CloseSlide
        notes="Take a final question, then the scheduled break. Talk 3 builds one app twice, with and without skills and MCP, then fixes normalize() with a failing test."
      />
    </DeckShell>
  )
}
