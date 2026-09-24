import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { DEMO_PROMPT } from '../content/demo'
import { AUTHOR, PROGRAM, TALKS, WORKSHOP } from '../content/site'

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <div>
          <h1>{WORKSHOP.title}</h1>
          <p className="hero-sub">{WORKSHOP.subtitle}</p>
          <p className="lede">{WORKSHOP.tagline}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/talks">
              Open talks <ArrowRight size={16} weight="bold" />
            </Link>
            <Link className="btn btn-ghost" to="/tools">
              Tools
            </Link>
          </div>
        </div>
        <figure className="hero-visual">
          <img
            src="/images/hero.jpg"
            alt="Empty computer laboratory in late afternoon light"
            width={1280}
            height={720}
            fetchPriority="high"
          />
          <figcaption className="hero-caption">
            Workshop by {AUTHOR.name}
          </figcaption>
        </figure>
      </section>

      <section className="section" id="talks">
        <div className="wrap">
          <h2>Talks</h2>
          <p className="section-copy">
            Each session mixes explanation, a worked example, and a short
            exercise. Slides reveal one point at a time; follow along or jump
            to the topic you need.
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

      <section className="section section-forest">
        <div className="wrap demo-band">
          <div>
            <h2>One prompt, two agents</h2>
            <p>
              In Talk 3, the same agent builds the same app twice: once from a
              bare prompt, once with AGENTS.md, a skill, and two MCP servers.
              You score both runs. The files are on the demo page so you can
              repeat it at home.
            </p>
            <Link className="btn btn-light" to="/demo">
              See the demo setup <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
          <pre className="demo-prompt">
            <code>{DEMO_PROMPT}</code>
          </pre>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Program</h2>
          <p className="section-copy">
            Morning schedule, from registration to close.
          </p>
          <ol className="program">
            {PROGRAM.map((slot) => (
              <li className="program-item" key={slot.time + slot.label}>
                <span>{slot.time}</span>
                <strong>{slot.label}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Before you arrive</h2>
          <p className="section-copy">
            Set up one editor and one agent, and apply for student benefits
            early. Bring a small project, or follow the examples in the slides.
          </p>
          <div className="guide-list">
            <Link className="guide-row" to="/tools">
              <h3>Tools</h3>
              <p>
                AI IDEs, terminal agents, skills and MCP, study tools, and what
                is free for students.
              </p>
            </Link>
            <Link className="guide-row" to="/demo">
              <h3>Demo</h3>
              <p>
                The prompt, AGENTS.md, skill, and MCP configs from the
                two-setup demo, plus a scorecard.
              </p>
            </Link>
            <Link className="guide-row" to="/setup">
              <h3>Prerequisites</h3>
              <p>What to bring, and how to follow the talks in the browser.</p>
            </Link>
            <Link className="guide-row" to="/responsible-ai">
              <h3>Responsible AI</h3>
              <p>
                Course rules, private data, vetting skills and servers, and
                disclosing assistance.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
