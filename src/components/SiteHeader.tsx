import { NavLink } from 'react-router-dom'

const links = [
  { to: '/talks', label: 'Talks' },
  { to: '/tools', label: 'Tools' },
  { to: '/setup', label: 'Prerequisites' },
  { to: '/responsible-ai', label: 'Responsible AI' },
]

export function SiteHeader() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand" end>
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          Code in Context
        </NavLink>
        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
