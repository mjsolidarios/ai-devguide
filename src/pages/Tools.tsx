import { ArrowUpRight } from '@phosphor-icons/react'
import { STUDENT_BENEFITS, TOOLS, slug } from '../content/site'

export default function Tools() {
  return (
    <>
      <section className="wrap page-head">
        <h1>Tools</h1>
        <p>
          You need one editor and one agent you can access. Git and Node.js
          cover the shared exercises; everything else is optional. Plans and
          free tiers change often, so check each tool’s docs before relying on
          it.
        </p>
      </section>

      <div className="wrap docs-layout">
        <nav className="docs-index" aria-label="Tool groups">
          <ul>
            {TOOLS.map((group) => (
              <li key={group.id}>
                <a href={`#${group.id}`}>{group.group}</a>
              </li>
            ))}
            <li>
              <a href="#free">Free for students</a>
            </li>
          </ul>
        </nav>

        <div className="docs-main">
          {TOOLS.map((group) => (
            <section className="tool-group" id={group.id} key={group.id}>
              <h2>{group.group}</h2>
              <p className="section-copy">{group.intro}</p>
              <div className="tool-list">
                {group.items.map((item) => (
                  <article className="tool" id={slug(item.name)} key={item.name}>
                    <div className="tool-head">
                      <h3>{item.name}</h3>
                      <a href={item.url} rel="noreferrer" target="_blank">
                        Docs
                        <ArrowUpRight size={12} weight="bold" aria-hidden="true" />
                        <span className="visually-hidden">
                          for {item.name} (opens in a new tab)
                        </span>
                      </a>
                    </div>
                    <p>{item.use}</p>
                    <p className="tool-access">{item.access}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="band" id="free">
        <div className="wrap">
          <h2>Free for students</h2>
          <p className="band-copy">
            Most of these need a verified student account. Apply before you
            need them; approval can take a few days, and offers differ by
            country.
          </p>
          <ol className="benefits">
            {STUDENT_BENEFITS.map((benefit) => (
              <li className="benefit" key={benefit.name}>
                <h3>
                  <a href={benefit.url} rel="noreferrer" target="_blank">
                    {benefit.name}
                  </a>
                </h3>
                <p>{benefit.what}</p>
                <p className="benefit-how">{benefit.how}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
