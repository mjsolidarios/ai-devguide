import { MagnifyingGlass } from '@phosphor-icons/react'
import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { TALKS, TOOLS, slug } from '../content/site'

type Entry = { group: string; label: string; hint: string; to: string }

const ENTRIES: Entry[] = [
  { group: 'Pages', label: 'Home', hint: 'Program and talks', to: '/' },
  { group: 'Pages', label: 'Talks', hint: 'All three sessions', to: '/talks' },
  { group: 'Pages', label: 'Tools', hint: 'Editors, agents, study tools', to: '/tools' },
  { group: 'Pages', label: 'Demo', hint: 'Same app, two setups', to: '/demo' },
  { group: 'Pages', label: 'Setup', hint: 'What to bring', to: '/setup' },
  { group: 'Pages', label: 'Responsible AI', hint: 'Rules, data, disclosure', to: '/responsible-ai' },
  { group: 'Pages', label: 'Free for students', hint: 'GitHub Education and more', to: '/tools#free' },
  ...TALKS.map((talk) => ({
    group: 'Slides',
    label: talk.title,
    hint: `${talk.code} · ${talk.duration}`,
    to: talk.path,
  })),
  ...TOOLS.flatMap((group) =>
    group.items.map((item) => ({
      group: 'Tools',
      label: item.name,
      hint: group.group,
      to: `/tools#${slug(item.name)}`,
    })),
  ),
]

function matches(entry: Entry, query: string) {
  const q = query.trim().toLowerCase()
  if (!q) return entry.group !== 'Tools'
  return `${entry.label} ${entry.hint}`.toLowerCase().includes(q)
}

/** Mounted only while open, so each opening starts with an empty query. */
export function CommandPalette({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const listId = useId()

  const results = useMemo(
    () => ENTRIES.filter((entry) => matches(entry, query)),
    [query],
  )

  useEffect(() => {
    inputRef.current?.focus()
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
    }
  }, [])

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: 'nearest' })
  }, [active])

  const go = useCallback(
    (entry: Entry | undefined) => {
      if (!entry) return
      onClose()
      if (entry.to.startsWith('/talks/')) {
        window.location.assign(entry.to)
      } else {
        navigate(entry.to)
      }
    },
    [navigate, onClose],
  )

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      onClose()
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((i) => Math.min(i + 1, results.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      go(results[active])
    } else if (event.key === 'Tab') {
      // The input is the only focus stop; keep focus inside the dialog.
      event.preventDefault()
    }
  }

  let lastGroup = ''
  return (
    <div className="cmdk" onKeyDown={onKeyDown}>
      <div className="cmdk-backdrop" onClick={onClose} aria-hidden="true" />
      <div
        className="cmdk-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Search the workshop"
      >
        <div className="cmdk-field">
          <MagnifyingGlass size={18} aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-activedescendant={
              results[active] ? `${listId}-${active}` : undefined
            }
            aria-autocomplete="list"
            placeholder="Search talks, tools, pages…"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setActive(0)
            }}
          />
          <kbd>esc</kbd>
        </div>
        <div className="cmdk-results" id={listId} role="listbox" ref={listRef}>
          {results.length === 0 ? (
            <p className="cmdk-empty">No match for “{query}”. Try a tool name.</p>
          ) : (
            results.map((entry, index) => {
              const heading = entry.group !== lastGroup ? entry.group : null
              lastGroup = entry.group
              return (
                <div key={entry.to + entry.label}>
                  {heading ? <p className="cmdk-group">{heading}</p> : null}
                  <div
                    id={`${listId}-${index}`}
                    data-index={index}
                    role="option"
                    aria-selected={index === active}
                    className="cmdk-item"
                    onMouseMove={() => setActive(index)}
                    onClick={() => go(entry)}
                  >
                    <span>{entry.label}</span>
                    <span className="cmdk-hint">{entry.hint}</span>
                  </div>
                </div>
              )
            })
          )}
        </div>
        <div className="cmdk-foot" aria-hidden="true">
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd> move
          </span>
          <span>
            <kbd>↵</kbd> open
          </span>
          <span>
            <kbd>esc</kbd> close
          </span>
        </div>
      </div>
    </div>
  )
}
