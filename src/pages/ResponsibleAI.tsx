import { RESPONSIBLE } from '../content/site'

export default function ResponsibleAI() {
  return (
    <>
      <section className="wrap page-head">
        <h1>Responsible AI</h1>
        <p>
          Use these checks when studying or reviewing AI-assisted code. For
          assessed work, follow the assignment instructions and your
          institution’s policy; this guide does not set course rules.
        </p>
      </section>

      <section className="wrap section-flush">
        <ol className="checklist checklist-wide">
          {RESPONSIBLE.map((rule) => (
            <li key={rule.title}>
              <strong>{rule.title}</strong>
              <span>{rule.body}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>An example disclosure</h2>
            <p className="section-copy">
              Replace it with an accurate account of your work, in the format
              your instructor requires.
            </p>
          </div>
          <blockquote className="disclosure">
            “I used [tool and version, if available] on [date] to suggest edge
            cases for normalize(). I wrote the implementation and tests, checked
            the empty and all-zero inputs, and ran the tests with Node.js.”
          </blockquote>
        </div>
      </section>
    </>
  )
}
