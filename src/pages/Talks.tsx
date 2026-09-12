import { Link } from 'react-router-dom'
import { TALKS } from '../content/site'

export default function Talks() {
  return (
    <section className="wrap page-fill">
      <h1 className="page-title">Talks</h1>
      <p className="section-copy">
        Open a talk and follow along. Arrow keys move slides. Fullscreen with
        Alt+Shift+F. Hub in the footer returns here.
      </p>
      <div className="talks-stack">
        {TALKS.map((talk) => (
          <Link key={talk.slug} className="talk" to={talk.path}>
            <span className="talk-code">
              {talk.code} · {talk.duration}
            </span>
            <h3>{talk.title}</h3>
            <p>{talk.blurb}</p>
            <span className="talk-meta">{talk.updates.join(' / ')}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
