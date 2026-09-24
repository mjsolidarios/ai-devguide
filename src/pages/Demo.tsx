import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DEMO_APP, DEMO_FILES, DEMO_PROMPT, RUNS, SCORECARD } from '../content/demo'

type Scores = Record<string, boolean>

export default function Demo() {
  const [scores, setScores] = useState<Scores>({})
  const toggle = (key: string) =>
    setScores((prev) => ({ ...prev, [key]: !prev[key] }))
  const total = (run: string) =>
    SCORECARD.filter((_, i) => scores[`${run}-${i}`]).length

  return (
    <>
      <section className="wrap page-head">
        <h1>Same app, two setups</h1>
        <p>
          The live demo from <Link to="/talks/efficient-programming">Talk 3</Link>.
          One prompt goes to the same agent twice. Run A starts in an empty
          folder. Run B starts with project instructions, a skill, and two MCP
          servers. Everything you need to repeat it is on this page.
        </p>
      </section>

      <section className="section section-tight">
        <div className="wrap demo-brief">
          <div>
            <h2>{DEMO_APP.name}</h2>
            <p className="section-copy">{DEMO_APP.summary}</p>
          </div>
          <figure className="code-block">
            <figcaption>Prompt · identical in both runs</figcaption>
            <pre>
              <code>{DEMO_PROMPT}</code>
            </pre>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="wrap runs">
          {RUNS.map((run) => (
            <article className={`run run-${run.id}`} key={run.id}>
              <h2>
                {run.label} <span>{run.title}</span>
              </h2>
              <h3>Starts with</h3>
              <ul>
                {run.setup.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <h3>Watch for</h3>
              <ul>
                {run.watch.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Run B’s files</h2>
          <p className="section-copy">
            Put these in the folder before you start the agent. The two MCP
            configs hold the same servers; use the one your agent reads. Other
            agents (Codex, Gemini CLI, Antigravity CLI, Copilot) take the same
            servers in their own config format.
          </p>
          <div className="files">
            {DEMO_FILES.map((file) => (
              <figure className="code-block" key={file.path}>
                <figcaption>
                  <code>{file.path}</code>
                  <span>{file.note}</span>
                </figcaption>
                <pre>
                  <code>{file.code}</code>
                </pre>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Scorecard</h2>
          <p className="section-copy">
            Tick a line only after you have checked it yourself: run the build
            and tests in each folder, open the app, and read the diff. Ticks
            reset when you reload the page.
          </p>
          <table className="scorecard">
            <thead>
              <tr>
                <th scope="col">Check</th>
                <th scope="col">Run A</th>
                <th scope="col">Run B</th>
              </tr>
            </thead>
            <tbody>
              {SCORECARD.map((line, i) => (
                <tr key={line}>
                  <th scope="row">{line}</th>
                  {['a', 'b'].map((run) => {
                    const key = `${run}-${i}`
                    return (
                      <td key={key}>
                        <input
                          type="checkbox"
                          checked={Boolean(scores[key])}
                          onChange={() => toggle(key)}
                          aria-label={`${line}: Run ${run.toUpperCase()}`}
                        />
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Checked</th>
                <td>
                  {total('a')} / {SCORECARD.length}
                </td>
                <td>
                  {total('b')} / {SCORECARD.length}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
  )
}
