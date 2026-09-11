import { Link } from 'react-router-dom'
import { TALKS } from '../content/site'

export default function Talks() {
  return (
    <section className="wrap" style={{ padding: '3.2rem 0 5rem' }}>
      <h1
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          letterSpacing: '-0.035em',
          fontWeight: 500,
          color: 'var(--forest)',
          marginBottom: '0.8rem',
        }}
      >
        Presentations
      </h1>
      <p className="section-copy">
        Built with Spectacle. Arrow keys move slides. Ctrl+K opens the command
        bar. Return here from the Hub control on each deck.
      </p>
      <div className="stack">
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
