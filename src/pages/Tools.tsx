import { STUDENT_BENEFITS, TOOLS } from '../content/site'

export default function Tools() {
  return (
    <>
      <section className="wrap page-hero">
        <div>
          <h1>Tools</h1>
          <p>
            You need one editor and one agent you can access. Git and Node.js
            cover the shared exercises; everything else is optional. Plans,
            limits, and free tiers change often, so check each tool’s docs
            before you rely on it.
          </p>
          <nav className="jump" aria-label="Tool groups">
            {TOOLS.map((group) => (
              <a key={group.id} href={`#${group.id}`}>
                {group.group}
              </a>
            ))}
            <a href="#free">Free for students</a>
          </nav>
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

      {TOOLS.map((group) => (
        <section className="section tool-group" id={group.id} key={group.id}>
          <div className="wrap">
            <h2>{group.group}</h2>
            <p className="section-copy">{group.intro}</p>
            <div className="tool-list">
              {group.items.map((item) => (
                <article className="tool" key={item.name}>
                  <h3>{item.name}</h3>
                  <p>{item.use}</p>
                  <p className="tool-access">{item.access}</p>
                  <a href={item.url} rel="noreferrer" target="_blank">
                    Docs
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section section-forest" id="free">
        <div className="wrap">
          <h2>Free for students</h2>
          <p className="section-copy">
            Most of these need a verified student account. Apply before you
            need them; approval can take a few days. Offers differ by country.
          </p>
          <div className="benefits">
            {STUDENT_BENEFITS.map((benefit) => (
              <article className="benefit" key={benefit.name}>
                <h3>
                  <a href={benefit.url} rel="noreferrer" target="_blank">
                    {benefit.name}
                  </a>
                </h3>
                <p>{benefit.what}</p>
                <p className="benefit-how">{benefit.how}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
