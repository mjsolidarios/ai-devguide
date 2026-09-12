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
        subtitle="Give an agent a clear task, follow its tool calls, and review the resulting change."
        notes="Timing: agent basics 10 min; tools and context 15 min; task example 10 min; exercise 10 min; debrief 5 min. Ask participants to describe one task they have given an AI assistant. Q&A follows this session in the program."
      />

      <StatementSlide
        title="What a coding agent does"
        body="A coding agent uses a model to choose actions, call tools, and inspect results over several steps. It can search a repository, edit files, and run checks within the access its application allows."
        notes="Learning objective: participants should be able to describe the loop, write a bounded task, and identify the evidence needed before accepting a patch. An agent may also stop for input, an error, or a usage limit."
      />

      <BulletsSlide
        title="The loop, in practice"
        items={[
          'Inspect the relevant files and reproduce the reported failure.',
          'Propose a change and state the assumptions it depends on.',
          'Edit the code and run the relevant checks.',
          'Use the result to revise the explanation or the patch.',
          'Stop when the requirements are checked, or ask for help when blocked.',
        ]}
        notes="Walk through an empty-list bug. If a check fails, ask what new evidence it provides before making another edit. A green check only covers the behavior that check exercises."
      />

      <TwoColSlide
        title="Chat assistance and tool use"
        leftTitle="Chat assistance"
        leftItems={[
          'You provide code or an error message.',
          'The model suggests an explanation or patch.',
          'You apply edits and run commands.',
          'You bring the results back to the conversation.',
        ]}
        rightTitle="An agent with tools"
        rightItems={[
          'It can search files you allow it to access.',
          'It can apply a patch across several files.',
          'It can run permitted commands and read output.',
          'You review its actions and final changes.',
        ]}
        notes="These are interaction modes, not a timeline or a ranking. One product may offer both. Use a short chat for a focused explanation; consider an agent when the task needs repository inspection or several tool steps."
      />

      <BulletsSlide
        title="Choose tools for the task"
        items={[
          'Code search finds definitions, callers, and nearby tests.',
          'A file editor applies changes you can inspect in a diff.',
          'A terminal runs the project’s test and build commands.',
          'Documentation tools help check the API version in use.',
        ]}
        notes="Have participants name the tool needed for each step of the empty-list fix. The Tools page links to editor and terminal options; one assistant is enough for the exercise."
      />

      <StatementSlide
        title="Model Context Protocol (MCP)"
        body="MCP defines how an AI application connects to servers that expose tools, resources, and prompts. A client can discover a tool and request a call. The host and server still need to enforce access controls."
        notes="Source: https://modelcontextprotocol.io/docs/learn/architecture . Explain host as the AI application, client as its connection to a server, and server as the program exposing capabilities. Agents can also have built-in tools without MCP."
      />

      <CodeSlide
        title="An example MCP tool definition"
        language="json"
        code={`{
  "name": "read_test_report",
  "description": "Read the latest test report",
  "inputSchema": {
    "type": "object",
    "properties": {},
    "additionalProperties": false
  }
}`}
        notes="This is a tool definition excerpt, not a runnable server. Source: https://modelcontextprotocol.io/docs/learn/architecture . The client discovers definitions through tools/list and requests execution through tools/call. Ask: does this tool run tests? No, its description only promises to read the latest report. Check when that report was produced."
      />

      <StatementSlide
        title="Context for a bug fix"
        body="Give the agent the expected behavior, the actual result, a reproduction, and the relevant file paths. Include version details when an API is involved. Ask it to inspect missing information before it guesses."
        notes="For normalize([0, 0]), report the actual NaN values and specify the desired [0, 0] result. The phrase “fix normalization” leaves the expected behavior unclear."
      />

      <BulletsSlide
        title="A task brief for normalize()"
        items={[
          'Input: a small array of finite, non-negative numbers.',
          'Output: divide each value by the largest value; preserve order.',
          'Edge cases: return [] for []; return zeros for an all-zero array.',
          'Constraints: return a new array; add no packages or unrelated edits.',
          'Check normal input, empty input, zeros, and input preservation.',
        ]}
        notes="This is a workshop example with an explicit input contract. Negative numbers, strings, NaN, and Infinity are outside this exercise. In an application, decide where to validate those inputs before implementation."
      />

      <CodeSlide
        title="Project instructions in AGENTS.md"
        language="markdown"
        code={`# Workshop project

JavaScript modules. Tests use node:test.

- Keep normalize() in normalize.mjs.
- Run: node --test normalize.test.mjs
- Keep changes within the requested task.
- Ask before adding a dependency.
- Do not read credentials or deploy this project.`}
        notes="Source for Codex support: https://developers.openai.com/codex/guides/agents-md/ . File names and instruction loading differ by tool. Check your assistant’s documentation. These are project instructions, not an access-control mechanism; configure filesystem, command, and network permissions separately."
      />

      <TwoColSlide
        title="Scope and permissions"
        leftTitle="For this exercise"
        leftItems={[
          'Read the example function and its tests.',
          'Edit the function and add relevant tests.',
          'Run the named local test command.',
          'Report the diff and test results.',
        ]}
        rightTitle="Outside this task"
        rightItems={[
          'Read credentials or unrelated directories.',
          'Install packages without agreement.',
          'Change expected results to hide a failure.',
          'Push, deploy, or modify a shared database.',
        ]}
        notes="Ask participants to separate task scope from enforced permissions. A sentence in a prompt cannot guarantee a tool will be blocked. Use a disposable project and the narrowest access your application supports."
      />

      <BulletsSlide
        title="Failure signals to investigate"
        items={[
          'A new API call without documentation for the installed version.',
          'A passing test after its assertion was removed or weakened.',
          'Repeated edits without a new explanation of the failure.',
          'Unrelated changes that make the diff harder to review.',
          'Instructions in a fetched page or file asking for unrelated actions.',
        ]}
        notes="For the last example, imagine a retrieved document asks the agent to upload a local file. Treat external content as task data, and inspect any requested action against your original scope. Pause the run if it starts doing unrelated work."
      />

      <StatementSlide
        title="Evidence before accepting a patch"
        body="Compare the diff with the task brief. Run the relevant checks and examine their output. Confirm the agent preserved existing behavior and list any assumptions or checks that remain unresolved."
        notes="Ask whether a passing empty-input test proves normal inputs still work. It does not. Have participants name a normal-input test and a mutation check."
      />

      <BulletsSlide
        title="Exercise · write a task brief"
        items={[
          'Work in pairs for 10 minutes using the normalize() requirements.',
          'Write the requested change, input contract, and expected outputs.',
          'Name the files the agent can edit and the check it should run.',
          'Add a condition that should make it stop and ask for help.',
          'Exchange briefs and identify one missing or ambiguous requirement.',
        ]}
        notes="Spend 3 minutes drafting, 4 reviewing with a partner, and 3 revising. No AI account is needed. Look for normal, empty, and zero inputs; preservation of the original array; and a stop condition such as a need to change the public interface."
      />

      <RecapSlide
        title="Check your task brief"
        items={[
          'Can another person predict the output for each example?',
          'Are file access, edits, and commands limited to the task?',
          'Would the checks catch a plausible but incorrect patch?',
          'Have you specified when the agent should ask for help?',
        ]}
        notes="Use the last 5 minutes to discuss two briefs. Keep each brief for the implementation exercise in Talk 3. Talk 2 focuses on how to use assistance while learning the code."
      />

      <CloseSlide
        notes="The program allows 10 minutes for Q&A after this talk. Invite questions about a task that was hard to specify or a tool action participants would want to review first."
      />

    </DeckShell>
  )
}
