import { TOOLS } from '../content/site'

export default function Tools() {
  return (
    <>
      <section className="wrap page-hero">
        <div>
          <h1>Tools</h1>
          <p>
            A short stack for the workshop. Use one editor, one agent, Git, and
            a runtime you can install on a student laptop. Switch vendors later.
            Do not collect five chat apps first.
          </p>
        </div>
        <div className="page-visual">
          <img
            src="/images/workstation.jpg"
            alt="Overhead view of a laptop, notebook, and coffee on a wooden desk"
            width={1280}
            height={720}
          />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          {TOOLS.map((group) => (
            <div className="tool-group" key={group.group} style={{ marginBottom: '2.4rem' }}>
              <h2>{group.group}</h2>
              {group.items.map((item) => (
                <article className="tool" key={item.name}>
                  <h3>{item.name}</h3>
                  <p>{item.use}</p>
                  <a href={item.url} rel="noreferrer">
                    Docs
                  </a>
                </article>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
