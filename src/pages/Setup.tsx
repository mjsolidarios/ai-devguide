import { PREREQUISITES, SETUP_STEPS, SPECTACLE_KEYS } from '../content/site'

export default function Setup() {
  return (
    <>
      <section className="wrap page-hero">
        <div>
          <h1>Prerequisites and setup</h1>
          <p>
            Arrive with Git, Node, an editor, and access to one AI coding tool.
            This repository is a Vite app: the hub plus three Spectacle decks.
            Deploy on Vercel from Git with no extra servers.
          </p>
        </div>
        <div className="page-visual">
          <img
            src="/images/hero.jpg"
            alt="Rows of desks in a quiet computer laboratory"
            width={1280}
            height={720}
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Prerequisites</h2>
          <p className="section-copy">
            The talks assume you already write programs. They do not teach Git
            from zero.
          </p>
          <div className="stack">
            {PREREQUISITES.map((item) => (
              <article className="prereq" key={item.title}>
                <h3>{item.title}</h3>
                <p className="muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Local setup</h2>
          <p className="section-copy">
            Node 20.19 or 22 is the current baseline. After install, keep the
            tab at localhost:5173 while you present.
          </p>
          <div className="stack">
            {SETUP_STEPS.map((step, index) => (
              <article className="step" key={step.title}>
                <h3>
                  {index + 1}. {step.title}
                </h3>
                <p className="muted">{step.detail}</p>
                <code className="cmd">{step.command}</code>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Spectacle controls</h2>
          <p className="section-copy">
            Presenter mode needs a second window of the same deck. Notes live
            on that window only.
          </p>
          <table className="keys">
            <tbody>
              {SPECTACLE_KEYS.map((row) => (
                <tr key={row.keys}>
                  <td>
                    <kbd>{row.keys}</kbd>
                  </td>
                  <td>{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Vercel</h2>
          <p className="section-copy">
            Import the GitHub repository, keep the Vite preset, and leave the
            output directory as dist. vercel.json already rewrites unknown paths
            to index.html so talk URLs survive a refresh.
          </p>
          <code className="cmd">npm run build && npx vercel --prod</code>
        </div>
      </section>
    </>
  )
}
