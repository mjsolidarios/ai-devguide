import { PREREQUISITES, SPECTACLE_KEYS } from '../content/site'

export default function Setup() {
  return (
    <>
      <section className="wrap page-hero">
        <div>
          <h1>Prerequisites</h1>
          <p>
            Arrive with Git, an editor, and access to one AI coding tool. The
            talks are on this site. Open them in your browser.
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
          <h2>What to bring</h2>
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
          <h2>Following the slides</h2>
          <p className="section-copy">
            Open a talk from the hub. These keys work in the slide view.
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
    </>
  )
}
