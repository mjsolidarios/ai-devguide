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
        subtitle="A tutor, a rubber duck, and a reviewer. Not a stand-in for the skill the course is measuring."
        notes="Start with a show of hands: used AI on homework this term, cited it, got burned by a hallucinated API."
      />

      <StatementSlide
        title="Effective means you could still pass the exam."
        body="If the chat window disappeared tonight, would the assignment still make sense to you? If the answer is no, the tool used you."
      />

      <TwoColSlide
        title="Two jobs students confuse"
        leftTitle="Legitimate"
        leftItems={[
          'Explain this error in my words',
          'Quiz me on the lecture',
          'Sketch alternative designs',
          'Review my diff for bugs',
          'Translate docs I already opened',
        ]}
        rightTitle="Not legitimate"
        rightItems={[
          'Write the whole lab from the PDF',
          'Fabricate a literature review',
          'Bypass a take-home exam',
          'Submit code you cannot trace',
          'Hide the assistance',
        ]}
      />

      <BulletsSlide
        title="A learning loop that keeps you in it"
        items={[
          'Attempt the problem for 15 minutes without a model.',
          'Ask for a hint or a question, not the finished function.',
          'Implement the next step yourself.',
          'Ask the model to review, then argue with it.',
          'Write a five-line note: what you now understand.',
        ]}
        notes="The 15-minute rule is the most useful habit in the talk. Push it."
      />

      <CodeSlide
        title="Prompts that teach, not replace"
        language="markdown"
        highlightRanges={[[1, 4], [6, 10]]}
        code={`I am a third-year IT student. Here is my attempt:

\`\`\`python
def normalize(scores):
    return scores / max(scores)
\`\`\`

Do not rewrite it yet.
1. What edge cases does this miss?
2. Ask me one question that would make me fix it.`}
      />

      <StatementSlide
        title="Your department already has a policy. Follow it in public."
        body="If the syllabus is silent, default to disclosure: tool name, what it produced, what you changed. Silence reads as concealment when something goes wrong."
      />

      <BulletsSlide
        title="Cite AI the way you would cite a classmate"
        items={[
          'Name the tool and the date you used it.',
          'Say whether it drafted, explained, or reviewed.',
          'Keep the chat or a screenshot if the course asks for process.',
          'You remain the author. The model is not a co-author.',
        ]}
      />

      <TwoColSlide
        title="What never belongs in a prompt"
        leftTitle="Leave it out"
        leftItems={[
          'API keys and .env files',
          'Classmates\' personal data',
          'Unpublished research',
          'Paywalled exam PDFs',
          'Private institutional records',
        ]}
        rightTitle="Safer substitutes"
        rightItems={[
          'Redacted snippets',
          'Synthetic sample rows',
          'Public docs and READMEs',
          'Your own failing test',
          'A minimal reproduction',
        ]}
      />

      <BulletsSlide
        title="Hallucinations you will actually meet"
        items={[
          'A Python module that exists, with a function that does not.',
          'A paper with a real author and a fake title.',
          'A git command that is destructive and overconfident.',
          'A complexity proof that skips the step you needed to learn.',
        ]}
        notes="Live demo if time: ask for a function in an old library version and watch it invent parameters."
      />

      <StatementSlide
        title="Close the chat when you are practicing."
        body="Skill is built in retrieval, not in rereading a generated answer. Timed drills, paper sketches, and closed-book labs are still the point of an IT degree."
      />

      <BulletsSlide
        title="Build a study stack, not a dependency"
        items={[
          'Official docs first, then a model that must quote them.',
          'One notes file per course in your own sentences.',
          'A question bank the model generates and you answer offline.',
          'Weekly recap: three things you can do without autocomplete.',
        ]}
      />

      <TwoColSlide
        title="Portfolio work"
        leftTitle="Looks thin"
        leftItems={[
          'Identical README to a tutorial',
          'No commits, one dump',
          'Features you cannot demo',
          'No mention of AI, or too much',
        ]}
        rightTitle="Looks owned"
        rightItems={[
          'A problem you can narrate',
          'Small, dated commits',
          'Tests and a live URL',
          'A short AI disclosure',
        ]}
      />

      <StatementSlide
        title="Hiring already assumes you used a model."
        body="Interviewers now watch whether you can direct an agent, catch its mistakes, and still write the hard part. That is a skill. Outsourcing the hard part is not."
      />

      <RecapSlide
        title="Take into Talk 3"
        items={[
          'Attempt first. Hint second. Solution last.',
          'Disclose assistance. Protect other people\'s data.',
          'If you cannot explain it, you cannot submit it.',
          'The degree is still about judgment under constraint.',
        ]}
      />

      <CloseSlide notes="Q&A plus icebreaker while snacks move: what is one assignment AI made worse for you?" />
    </DeckShell>
  )
}
