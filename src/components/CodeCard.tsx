import type { ReactNode } from 'react'

/** A graphite code card with a filename caption. No fake window chrome. */
export function CodeCard({
  file,
  note,
  code,
  className = '',
}: {
  file: string
  note?: ReactNode
  code: string
  className?: string
}) {
  return (
    <figure className={`code-card ${className}`}>
      <figcaption>
        <code>{file}</code>
        {note ? <span>{note}</span> : null}
      </figcaption>
      <pre>
        <code>{code}</code>
      </pre>
    </figure>
  )
}
