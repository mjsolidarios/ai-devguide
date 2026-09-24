import { MagnifyingGlass } from '@phosphor-icons/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CommandPalette } from './CommandPalette'

const links = [
  { to: '/talks', label: 'Talks' },
  { to: '/tools', label: 'Tools' },
  { to: '/demo', label: 'Demo' },
  { to: '/setup', label: 'Setup' },
  { to: '/responsible-ai', label: 'Responsible AI' },
]

const isMac =
  typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    triggerRef.current?.focus()
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

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
        <button
          ref={triggerRef}
          type="button"
          className="searchpill"
          onClick={() => setOpen(true)}
          aria-label="Search the workshop"
          aria-keyshortcuts="Control+K Meta+K"
        >
          <MagnifyingGlass size={16} aria-hidden="true" />
          <span className="searchpill-text">Search talks and tools</span>
          <span className="searchpill-kbd" aria-hidden="true">
            <kbd>{isMac ? '⌘' : 'Ctrl'}</kbd>
            <kbd>K</kbd>
          </span>
        </button>
        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
      {open ? <CommandPalette onClose={close} /> : null}
    </header>
  )
}
