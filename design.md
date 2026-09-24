# Design — Code in Context

A locked design system for the workshop hub and its slide decks. Every page
redesign reads this file before emitting code. Extend or amend this file when
the system needs to grow; do not regenerate it per page.

## Genre
modern-minimal (developer-tool register)

## Macrostructure family
- Home: Narrative Workflow. The morning is a real sequence: stages 1.0 → 2.0 → 3.0, one per talk, each with a small code card from that talk.
- Index pages (Talks, Tools): a calm docs-home shape. Page head, a group index, hairline rows. Tools uses a sticky side index on wide screens.
- Content pages (Setup, Responsible AI, Demo): page head + hairline rows or code cards. Typography only.

## Theme · Cobalt
- `--color-paper`    oklch(98.5% 0.004 250)
- `--color-paper-2`  oklch(96% 0.006 252)
- `--color-ink`      oklch(24% 0.02 258)
- `--color-ink-2`    oklch(34% 0.018 257)  body text
- `--color-muted`    oklch(50% 0.016 257)
- `--color-rule`     oklch(91% 0.008 255)
- `--color-accent`   oklch(58% 0.20 256)   the one signal, < 5 % of a viewport
- `--color-graphite` oklch(22% 0.016 260)  code cards and the one dark band per page
- `--color-focus`    = accent

Slides use the same values as hex in `src/theme/spectacleTheme.ts`, because
Spectacle passes colours into SVG attributes.

## Typography
- Display: Space Grotesk 500/600, tracking −0.02 to −0.03em, always roman
- Body: IBM Plex Sans 400/500
- Mono: IBM Plex Mono 400/500 for code, stage numbers, kbd, and meta
- Hero headline ≤ 7 words; display = clamp(2.6rem, 5.6vw, 4.6rem)

## Spacing
4-point named scale in `src/tokens.css`. Pages use named tokens only.

## Shape and depth
Hairlines do the work. 6 px radius on buttons and inputs, 10 px on code cards,
no drop shadows except the command palette panel. No re-drawn window chrome:
code cards carry a filename caption, never traffic-light dots.

## Motion
- Easing: `--ease-out` cubic-bezier(0.16, 1, 0.3, 1); `--ease-in-out` for the palette.
- No scroll-triggered reveals on the site. Slides reveal one row per step (opacity only).
- Reduced motion: transitions ≤ 120 ms opacity, or none.

## Microinteractions
- ⌘K / Ctrl K opens a real command palette (combobox + listbox, Esc closes, focus returns to the trigger).
- Silent success. Hover colour shifts only; no lifts, no scale.
- Focus ring appears instantly: 2 px accent, 3 px offset.

## CTA voice
- Primary: solid cobalt, 6 px radius, verb + destination ("Start at Talk 1").
- Secondary: hairline-bordered ink button or an underlined text link.

## What pages MUST share
Wordmark, the bordered nav with the search pill, Ft1 footer, fonts, the cobalt
accent and its placement, the code-card style, and the CTA voice.

## What pages MAY differ on
Section order and density. At most one graphite band per page.

## Exports

### tokens.css
See `src/tokens.css` — the single source for every `--color-*`, `--font-*`,
`--space-*`, `--text-*`, `--ease-*`, `--dur-*`, and `--radius-*` token.
