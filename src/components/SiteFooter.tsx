import { AUTHOR, WORKSHOP } from '../content/site'

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>
          {WORKSHOP.title}. Authored by {AUTHOR.name}.
        </p>
        <p>
          <a href={AUTHOR.github}>{AUTHOR.github}</a>
        </p>
      </div>
    </footer>
  )
}
