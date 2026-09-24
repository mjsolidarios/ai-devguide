import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { CodeCard } from '../components/CodeCard'
import { DEMO_FILES, RUNS } from '../content/demo'
import { PROGRAM, TALKS, WORKSHOP } from '../content/site'

const agentsFile = DEMO_FILES[0]

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <div className="hero-copy">
          <h1>{WORKSHOP.title}</h1>
          <p className="hero-sub">{WORKSHOP.subtitle}</p>
          <p className="lede">{WORKSHOP.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={TALKS[0].path}>
              Start at Talk 1 <ArrowRight size={16} weight="bold" />
            </a>
            <Link className="btn btn-ghost" to="/tools">
              Browse tools
            </Link>
          </div>
        </div>
        <CodeCard
          className="hero-card"
          file={agentsFile.path}
          note="the file every agent reads first"
          code={agentsFile.code}
        />
      </section>

      <section className="wrap schedule" aria-labelledby="schedule-title">
        <h2 id="schedule-title" className="visually-hidden">
          Program
        </h2>
        <ol className="ruler">
          {PROGRAM.map((slot) => (
            <li
              key={slot.time + slot.label}
              className={slot.label.startsWith('Talk') ? 'is-talk' : undefined}
            >
              <time>{slot.time}</time>
              <span>{slot.label}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="stages" aria-label="Talks">
        <ol className="wrap stage-list">
          {TALKS.map((talk) => (
            <li className="stage" key={talk.slug}>
              <div className="stage-rule">
                <span className="stage-num">{talk.stage}</span>
                <span className="stage-time">
                  {talk.time} · {talk.duration}
                </span>
              </div>
              <div className="stage-body">
                <div className="stage-copy">
                  <h2>{talk.title}</h2>
                  <p>{talk.blurb}</p>
                  <ul className="stage-topics">
                    {talk.updates.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                  <a className="text-link" href={talk.path}>
                    Open the slides <ArrowRight size={14} weight="bold" />
                  </a>
                </div>
                <CodeCard file={talk.sample.file} code={talk.sample.code} />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="band">
        <div className="wrap band-inner">
          <div>
            <h2>One prompt, two agents</h2>
            <p>
              In Talk 3 the same agent builds the same app twice. You score
              both runs against the same checklist.
            </p>
            <Link className="btn btn-primary" to="/demo">
              See the demo setup <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
          <dl className="band-runs">
            {RUNS.map((run) => (
              <div key={run.id}>
                <dt>
                  <span>{run.label}</span> {run.title}
                </dt>
                <dd>
                  {run.id === 'a'
                    ? run.setup[1]
                    : 'AGENTS.md, a ship-check skill, and the Context7 and Playwright MCP servers.'}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Before you arrive</h2>
            <p className="section-copy">
              Set up one editor and one agent, and apply for student benefits
              early. Press <kbd>Ctrl</kbd> <kbd>K</kbd> anywhere on this site
              to jump to a tool or talk.
            </p>
          </div>
          <div className="index-list">
            <Link to="/tools">
              <strong>Tools</strong>
              <span>AI IDEs, terminal agents, skills and MCP, study tools</span>
            </Link>
            <Link to="/tools#free">
              <strong>Free for students</strong>
              <span>GitHub Education, Copilot Student, JetBrains</span>
            </Link>
            <Link to="/setup">
              <strong>Setup</strong>
              <span>What to bring and how to follow the slides</span>
            </Link>
            <Link to="/responsible-ai">
              <strong>Responsible AI</strong>
              <span>Course rules, private data, disclosure</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
