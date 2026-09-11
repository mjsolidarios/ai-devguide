import { RESPONSIBLE } from '../content/site'

export default function ResponsibleAI() {
  return (
    <>
      <section className="wrap page-hero">
        <div>
          <h1>Responsible AI</h1>
          <p>
            These talks treat AI as a power tool. The operator stays
            accountable for grades, users, and the diff. Use this page as the
            house rules for demos and coursework.
          </p>
        </div>
        <div className="page-visual">
          <img
            src="/images/responsibility.jpg"
            alt="A desk scale beside stacked paper and eyeglasses"
            width={1280}
            height={720}
          />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="stack">
            {RESPONSIBLE.map((rule) => (
              <article className="rule" key={rule.title}>
                <h3>{rule.title}</h3>
                <p className="muted">{rule.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2>A sentence you can put on a slide</h2>
          <p className="section-copy">
            I used an AI coding assistant to draft or review parts of this
            work. I read the output, tested it, and I can explain every change
            I submitted.
          </p>
        </div>
      </section>
    </>
  )
}
