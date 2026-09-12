import { RESPONSIBLE } from '../content/site'

export default function ResponsibleAI() {
  return (
    <>
      <section className="wrap page-hero">
        <div>
          <h1>Responsible AI</h1>
          <p>
            Use these checks when studying or reviewing AI-assisted code.
            For assessed work, follow the assignment instructions and your
            institution’s policy; this guide does not set course rules.
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
          <h2>An example disclosure</h2>
          <p className="section-copy">
            “I used [tool and version, if available] on [date] to suggest edge
            cases for normalize(). I wrote the implementation and tests, checked
            the empty and all-zero inputs, and ran the tests with Node.js.”
            Replace this example with an accurate account of your work and use
            the format your instructor requires.
          </p>
        </div>
      </section>
    </>
  )
}
