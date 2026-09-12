import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import {
  AUTHOR,
  PROGRAM,
  TALKS,
  WORKSHOP,
} from '../content/site'

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <div>
          <p className="kicker">College of ICT, WVSU</p>
          <h1>{WORKSHOP.title}</h1>
          <p className="lede">{WORKSHOP.tagline}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/talks">
              Open talks <ArrowRight size={16} weight="bold" />
            </Link>
            <Link className="btn btn-ghost" to="/setup">
              Prerequisites
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/images/hero.jpg"
            alt="Empty computer laboratory in late afternoon light"
            width={1280}
            height={720}
          />
          <p className="hero-caption">
            {AUTHOR.name} · {AUTHOR.org}
          </p>
        </div>
      </section>

      <section className="section" id="talks">
        <div className="wrap">
          <h2>Talks</h2>
          <p className="section-copy">
            Three 50-minute sessions. Open a talk to follow the slides in your
            browser.
          </p>
          <div className="talks">
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
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Program</h2>
          <p className="section-copy">
            Morning schedule, from registration to close.
          </p>
          <div className="program">
            {PROGRAM.map((slot) => (
              <div className="program-item" key={slot.time + slot.label}>
                <span>{slot.time}</span>
                <strong>{slot.label}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Before you arrive</h2>
          <p className="section-copy">
            Bring a working editor, one AI coding tool, and the habits this
            workshop will expect in class.
          </p>
          <div className="guide-list">
            <Link className="guide-row" to="/tools">
              <h3>Tools</h3>
              <p>
                Editors, terminal agents, GitHub, MCP, Node, and Python.
              </p>
            </Link>
            <Link className="guide-row" to="/setup">
              <h3>Prerequisites</h3>
              <p>
                What to bring, and how to follow the talks in the browser.
              </p>
            </Link>
            <Link className="guide-row" to="/responsible-ai">
              <h3>Responsible AI</h3>
              <p>
                Accountability, coursework, privacy, verification, and credit.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
