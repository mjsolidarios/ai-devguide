import {
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Wrench,
} from '@phosphor-icons/react'
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
              Prerequisites and setup
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
          <h2>Three talks, one morning</h2>
          <p className="section-copy">
            Content follows the workshop brief in content.pdf, updated for
            agentic tools, MCP, and student practice in 2026. Each deck is a
            Spectacle presentation.
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
            Registration through close, matching the event run of show.
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
          <h2>Before you present</h2>
          <p className="section-copy">
            The hub is the workshop handout: tools, machine setup, and the
            rules that sit under every demo.
          </p>
          <div className="guide-grid">
            <Link className="guide-card" to="/tools">
              <span className="icon-chip">
                <Wrench size={18} weight="bold" />
              </span>
              <h3>Tools</h3>
              <p>
                Editors, terminal agents, GitHub, MCP, Node, and Spectacle.
              </p>
            </Link>
            <Link className="guide-card" to="/setup">
              <span className="icon-chip">
                <BookOpen size={18} weight="bold" />
              </span>
              <h3>Prerequisites and setup</h3>
              <p>
                What to install, how to run this repo, and Spectacle shortcuts.
              </p>
            </Link>
            <Link className="guide-card" to="/responsible-ai">
              <span className="icon-chip">
                <ShieldCheck size={18} weight="bold" />
              </span>
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
