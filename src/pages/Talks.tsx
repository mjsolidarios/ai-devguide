import { ArrowRight } from '@phosphor-icons/react'
import { TALKS } from '../content/site'

export default function Talks() {
  return (
    <>
      <section className="wrap page-head">
        <h1>Talks</h1>
        <p>
          Three 50-minute sessions. Each point appears on a click: use the
          arrow keys to step, <kbd>Alt</kbd> <kbd>Shift</kbd> <kbd>F</kbd> for
          fullscreen, and Hub at the bottom left to come back here.
        </p>
      </section>
      <section className="wrap talk-index">
        {TALKS.map((talk) => (
          <a key={talk.slug} className="talk-row" href={talk.path}>
            <span className="talk-num">{talk.stage}</span>
            <span className="talk-main">
              <strong>{talk.title}</strong>
              <span>{talk.blurb}</span>
              <span className="talk-topics">{talk.updates.join(' · ')}</span>
            </span>
            <span className="talk-when">
              {talk.time}
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </span>
          </a>
        ))}
      </section>
    </>
  )
}
