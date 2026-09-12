import { TOOLS } from '../content/site'

export default function Tools() {
  return (
    <>
      <section className="wrap page-hero">
        <div>
          <h1>Tools</h1>
          <p>
            Choose one editor and one coding assistant you can access. Git and
            Node.js cover the shared exercises. The other tools are optional;
            check each tool’s setup, permissions, and account limits in its docs.
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
