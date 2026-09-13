# Fiber — Design System

The finalized visual system for the portfolio (single scrolling page). This is the exact spec used to build the live reference at the Fiber artifact URL and `Design-C-Fiber.pdf` — treat this file as the source of truth during development; the demo file is the proof it works.

## 1. Color tokens

| Token | Hex / value | Role |
|---|---|---|
| `--bg` | `#08090C` | Page background (html + body) |
| `--glow-teal` | `#2DD4BF` | Primary accent — CTAs, links, active states, numerals, one ambient glow source |
| `--glow-indigo` | `#3B4CCB` | Secondary ambient glow only — never used on text or UI elements, background depth exclusively |
| `--glass` | `rgba(22,26,35,0.42)` | Standard glass panel fill (cards, pillars, timeline items) |
| `--glass-strong` | `rgba(26,31,42,0.55)` | Denser glass fill for small/floating elements (nav, chip) that need more legibility |
| `--glass-border` | `rgba(255,255,255,0.10)` | Resting border on all glass panels |
| `--glass-border-hi` | `rgba(255,255,255,0.28)` | Hover/active border, and the corner-highlight gradient on every panel |
| `--ink` | `#F2F4F7` | Primary text |
| `--muted` | `#9AA3B2` | Secondary text, labels, captions |

No other colors. Semantic states (error/warning, if ever needed) would be separate tokens, not reused from the above — not needed for a portfolio, don't add speculatively.

## 2. Typography

- **Sans (headings + body):** Instrument Sans — weights 400/500/600/700/800, loaded via `next/font/google`.
- **Mono (labels, stats, tags, nav, timestamps):** JetBrains Mono — weights 400/500/700.
- **Scale:** hero `clamp(2.4rem, 6vw, 4.2rem)` / 800 weight; section labels `0.78rem` mono uppercase, `0.12em` letter-spacing; body/lead `1.05–1.08rem` / 400; card titles `~1rem` / 600; stat numerals `1.7–2.1rem` mono 700 with `font-variant-numeric: tabular-nums`.
- Headings use `letter-spacing: -0.02em` (tight); mono labels use positive tracking (`0.05–0.12em`) — this contrast is deliberate, don't tighten mono labels to match headings.

## 3. Spacing & shape

- Section max-width: `980–1040px`, centered, `24px` side padding on mobile.
- Section vertical rhythm: `90px` bottom padding between major sections.
- Card grid gaps: `14–16px`.
- Radius: `16px` on all glass panels, `10px` on buttons, `20px`/`999px` (pill) on chips and nav.

## 4. The glass recipe (exact — this is what was broken before, don't drift from it)

```css
.glass-panel{
  background: rgba(22,26,35,0.42);
  backdrop-filter: blur(22px) saturate(150%);
  -webkit-backdrop-filter: blur(22px) saturate(150%);
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.35);
}
```

Plus a 1px gradient corner-highlight (top-left light catching the glass edge), implemented via a `::before` pseudo-element with a `linear-gradient(135deg, var(--glass-border-hi), transparent 45%)` masked to a 1px ring.

**The one rule that matters:** glassmorphism is invisible against a flat background — blurring solid black looks identical to a plain dark card. Every glass panel MUST have the ambient layer (§5) behind it, spanning the full page, not just the hero. This was the bug in the first pass: the glow was scoped to the hero container only, so every card below it had nothing to blur and looked flat. Don't reintroduce that — the ambient layer is global.

## 5. Ambient background (global, behind everything)

Three blurred glow shapes, `filter: blur(90–110px)`, positioned once and covering the full document height (not just the viewport):

| Glow | Size | Color | Opacity | Position |
|---|---|---|---|---|
| A | 620px | `--glow-teal` | 0.5 | top:-10%, left:-8% |
| B | 560px | `--glow-indigo` | 0.42 | bottom:-12%, right:-6% |
| C | 420px | `--glow-teal` | 0.22 | top:45%, left:60% |

Layered on top: a 1px grid texture (`repeating-linear-gradient`, 28px pitch, `rgba(154,163,178,0.13)`) masked by a soft radial "spotlight" that follows the cursor (`radial-gradient` at `--mx/--my` custom properties updated on `mousemove`, throttled via `requestAnimationFrame`), and a subtle SVG fractal-noise grain overlay at `0.045` opacity for a tactile, non-flat finish.

**In production:** this layer should be `position: fixed` behind the scrolling content (so glass always catches the same ambient light regardless of scroll position — this is intentional, not a bug). If you ever export this page to a static image/PDF/print context, switch it to `position: absolute` with an explicit tall height for that context only — `position: fixed` gets re-rasterized per page by print engines and bloats file size.

## 6. Motion & transitions — full spec

| Interaction | Behavior | Timing/easing | Production implementation |
|---|---|---|---|
| Boot sequence | Full-screen `INITIALIZING SIGNAL_` overlay with blinking mono cursor, fades out once | 750ms delay → 600ms fade | CSS + a `useEffect` timer in React |
| Hero headline reveal | Each word slides up + fades in, staggered | 700ms per word, `cubic-bezier(.2,.8,.2,1)`, 60ms stagger, 150ms start delay | Framer Motion `staggerChildren` |
| Status-chip / live dot | Opacity pulse, loops | 1.8s ease-in-out infinite | CSS keyframes (cheap, always-on, no library needed) |
| Ambient glow drift | Very slow position drift, loops | 22–32s ease-in-out infinite alternate | CSS keyframes |
| Cursor spotlight | Grid brightens in a 260px radius around the cursor | Instant, throttled to animation frame | Vanilla mousemove + rAF (or Framer `useMotionValue` if already in a Framer-driven component) |
| Magnetic buttons | Button shifts toward cursor within its bounds, springs back on leave | Proportional offset (0.25×/0.35× of cursor delta) | Framer Motion `useMotionValue` + `useSpring` |
| 3D card tilt | `rotateX`/`rotateY` up to 8°, based on cursor position over the card | Instant follow, spring back on leave | Framer Motion `useMotionValue` + `useSpring`, or a small custom hook |
| Card hover edge-sweep | A soft diagonal light band sweeps across the card once on hover | 700ms ease | CSS `:hover` transition (cheap, no JS needed) |
| Stat count-up | Numbers animate from 0 to target when scrolled into view | 1100ms, cubic ease-out | GSAP + ScrollTrigger (`onEnter` once per element) |
| Timeline reveal | Items fade/rise in as the section scrolls | Scroll-scrubbed | GSAP ScrollTrigger |

**Reduced motion:** every row above must have a static fallback — no drift, no tilt, no magnetic offset, no boot overlay (or an instant one), counters still land on the correct final number immediately. Gate CSS animations behind `@media (prefers-reduced-motion: reduce)` and gate JS listeners behind `window.matchMedia('(prefers-reduced-motion: reduce)').matches`. This is not optional polish — ship it from the first pass.

## 7. Section-by-section spec

1. **Nav** — floating glass pill, `--glass-strong`, sticky top 16px, blur 20px + saturate 140%.
2. **Hero** — centered, max-width 1040px, chip → headline → subhead → two CTAs (`btn-primary` filled teal / `btn-secondary` glass outline).
3. **Impact** — 6-column glass stat grid (desktop), collapses to 2 columns on mobile.
4. **About** — lead paragraph (max 70ch) + 4-column pillar grid (desktop), 2-column on mobile.
5. **Featured work** — 3-column project card grid + one expanded case-study glass panel below (4-column Problem/Approach/Stack/Outcome layout, collapses to 1 column on mobile) — this expanded layout is what a project card opens into (`Dialog` desktop / `Sheet` mobile per the PRD).
6. **Timeline** — vertical stack of glass rows, date in mono teal, role/company/one-liner.
7. **Skills** — 2×2 glass grid, grouped by the same 4 pillars as About (never a flat tag list).
8. **Contact** — single centered glass panel, email/LinkedIn/résumé links.

## 8. Responsive rules

- Breakpoint: `820px`.
- Grids that are 3–6 columns on desktop collapse to 1–2 columns on mobile (see table in §7).
- Timeline rows go from horizontal (date + content side-by-side) to stacked vertical below the breakpoint.
- Case-study expanded view: 4-column desktop → 1-column mobile.

## 9. What NOT to do (things this iteration got wrong once already)

- Don't scope the ambient glow/grid to a single section's wrapper — it must be a global, fixed, full-page layer or the glass effect on every other section reads as flat.
- Don't rely on `requestAnimationFrame` alone for anything that must have a guaranteed final state (e.g. count-up numbers) — pair it with a `setTimeout` hard fallback, since some rendering contexts (headless print capture, in this project's own experience) never tick `rAF`.
- Don't add a third accent color — indigo is background-depth only, never on text/buttons/tags.
