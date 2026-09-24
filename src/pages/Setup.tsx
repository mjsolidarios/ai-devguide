import { PREREQUISITES, SPECTACLE_KEYS } from '../content/site'

export default function Setup() {
  return (
    <>
      <section className="wrap page-head">
        <h1>Setup</h1>
        <p>
          To try the exercises, bring an editor, Git, and Node.js. Access to an
          AI coding tool helps, but you can also pair with someone. Reading the
          slides only needs a browser.
        </p>
      </section>

      <section className="wrap split section-flush">
        <div>
          <h2>What to bring</h2>
          <p className="section-copy">
            The sessions assume basic programming experience. Check these before
            you arrive so exercise time goes into the code.
          </p>
        </div>
        <ol className="checklist">
          {PREREQUISITES.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Following the slides</h2>
            <p className="section-copy">
              Open a talk from the Talks page. These keys work in the slide
              view.
            </p>
          </div>
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
