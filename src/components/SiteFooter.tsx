import { Link } from 'react-router-dom'
import { AUTHOR, WORKSHOP } from '../content/site'

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <p className="footer-mark">{WORKSHOP.title}</p>
          <p className="footer-tag">{WORKSHOP.subtitle}. By {AUTHOR.name}.</p>
        </div>
        <p className="footer-links">
          <Link to="/talks">Talks</Link>
          <Link to="/tools">Tools</Link>
          <a href={AUTHOR.github} rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}
