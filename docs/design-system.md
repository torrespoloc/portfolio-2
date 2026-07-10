# Portfolio Design System

## Visual Language

The portfolio uses a **clean, editorial, border-based visual language**. Every section is separated by visible lines (`border-b`, `border-t`, `border-x`) rather than shadows, rounded cards, or negative space alone. The aesthetic is influenced by architectural drafting and Swiss editorial design.

### Core Principles

| Principle | Rule |
|-----------|------|
| **Zero radius** | `rounded-none` everywhere. No rounded corners on any container, card, or section. |
| **Borders as dividers** | Sections and items are separated by solid `border-hero-border` lines, not shadows or gaps. |
| **Full-bleed sections** | Background colors span edge-to-edge with no inner padding constraints at the section level. |
| **Grid layout** | Content uses CSS Grid with `minmax()` columns and `gap-0` — relying on borders between cells. |
| **Monochrome frame** | The page has a `border-x border-hero-border` container at `max-w-[1504px]` — the content lives between two vertical lines. |

---

## Layout Architecture

```
┌──────────────────────────────────────┐  ← viewport edge
│                                      │
│  │  ┌──────────────────────────┐  │  │  ← border-x container (max-w-[1504px])
│  │  │  Section                 │  │  │
│  │  │  (full-width within      │  │  │
│  │  │   container)             │  │  │
│  │  └──────────────────────────┘  │  │
│  │  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─   │  │  ← SectionDivider (h-px bg-hero-border)
│  │  ┌──────────────────────────┐  │  │
│  │  │  Next Section            │  │  │
│  │  └──────────────────────────┘  │  │
│                                      │
└──────────────────────────────────────┘
```

### Page Container

Every page wraps content in a `border-x border-hero-border` div with `max-w-[1504px] mx-auto`:

```tsx
<div className="mx-auto w-full max-w-[1504px] border-x border-hero-border min-h-screen">
  {/* sections */}
</div>
```

### Section Divider

The `SectionDivider` component is a single pixel line:

```tsx
<div className="h-px bg-hero-border" aria-hidden="true" />
```

### Section Spacing

- Sections within the container are separated by `SectionDivider`
- Entries within a section use `border-b border-hero-border` (or `border-white/15` on dark backgrounds)
- No margin-based spacing between sibling sections — use the border itself

### Standardized Section Padding

All major content sections use consistent padding:

| Context | Classes |
|---------|---------|
| Default section padding | `px-6 py-10 sm:py-12` |
| Label + heading container | `border-b border-hero-border pb-8` (or `border-white/15` on dark bg) |
| Heading to content spacing | `mt-10 md:mt-14 lg:mt-16` (Experience) |
| Entry-to-entry spacing | `space-y-8 md:space-y-10` (within a bordered list) |
| Individual entry padding | `pb-6 md:pb-8` (bordered entry), `last:border-b-0 last:pb-0` (last entry) |
| Inner content grid | `gap-3 md:gap-6 lg:gap-10 md:grid-cols-[minmax(0,400px)_minmax(0,1fr)]` |
| Label-content split grid | `md:grid-cols-[160px_minmax(0,1fr)] md:gap-x-16` |
| Editorial section (About) | `px-6 md:px-10 py-10 sm:py-12` |

---

## Section Types

### 1. Full-Bleed Color Section

A section with a saturated background color spanning the full width. Used for the Experience block.

**Pattern:**
```tsx
<div className="w-full">
  <div className="mx-auto w-full max-w-[1504px]">
    <div className="bg-[#485bfc] px-6 py-10 sm:py-12">
      {/* Content */}
    </div>
  </div>
</div>
```

**Key properties:**
- `border-b border-white/15` between entries (on dark bg)
- Grid layout: `md:grid-cols-[160px_minmax(0,1fr)]` for label + content
- Inner content grid: `md:grid-cols-[minmax(0,400px)_minmax(0,1fr)]`
- Colored dot indicator (`h-3 w-3 rounded-full bg-chartreuse`) before each label
- `text-xs font-semibold uppercase tracking-[0.2em]` for labels
- White text on colored backgrounds

### 2. Border-Based Grid Section

Used for work cards, testimonials. Items are arranged in a CSS Grid with `gap-0` and border dividers between cells.

**Pattern:**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 [&>:nth-child(odd)]:border-r [&>:nth-child(odd)]:border-hero-border">
  {items.map(item => (
    <div className="border-b border-hero-border">{item}</div>
  ))}
</div>
```

### 3. Labeled List Section

Used for the Experience timeline. Each entry has a period label (left column) and content (right column).

**Pattern:**
```tsx
<div className="grid border-b border-hero-border pb-6 md:grid-cols-[160px_minmax(0,1fr)] md:gap-x-16">
  <span className="text-sm font-semibold uppercase tracking-[0.2em]">{period}</span>
  <div>
    {/* Content */}
  </div>
</div>
```

### 4. Editorial Content Section

Used on the About page. Content sections separated by `border-b` dividers, images placed in `border border-hero-border` containers.

---

## Color Tokens

| Token | Value (Light) | Value (Dark) | Usage |
|-------|------|------|-------|
| `--hero-bg` | `#fafafa` | `#151720` | Page background |
| `--hero-text` | `#4d4d4d` | `#c8cad4` | Body text |
| `--hero-text-dark` | `#2f2e31` | `#efeff1` | Headings, bold text |
| `--hero-muted` | `#757575` | `#a3a3a3` | Secondary/meta text |
| `--hero-border` | `#d4d4d4` | `#2d3140` | All border lines |
| `--hero-card` | `#ffffff` | `#1a1d28` | Card backgrounds |
| `--accent` | `#485bfc` | `#6b7fff` | Accent/CTAs, Experience section bg |
| `--chartreuse` | `#ccff00` | `#ccff00` | Highlight dots, NDA badges |

### Tailwind Utilities

All tokens are available as Tailwind utility classes via `@theme inline`:

- `bg-hero-bg`, `text-hero-text`, `text-hero-text-dark`, `text-hero-muted`
- `border-hero-border`, `bg-hero-card`
- `text-accent`, `bg-chartreuse`, `text-chartreuse-foreground`

---

## Typography Scale

| Class | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | 14px (→16px desktop) | 1.35 | Labels, tags, metadata |
| `text-sm` | 16px | 1.5 | Small body, captions |
| `text-label` | 14px (→16px desktop) | 1.3 | Form labels |
| `text-body-sm` | 16px | 1.55 | Secondary body text |
| `text-body` | 18px | 1.5 | Primary body text |
| `text-body-lg` | 20px | 1.55 | Large body, card descriptions |
| `text-[24px] sm:text-[30px]` | 24→30 | 1.05 | Section headings (sm) |
| `text-[30px] sm:text-[40px] lg:text-[54px]` | 30→40→54 | 1.1 | Major section headings |
| `text-[clamp(28px,5.5vw,68px)]` | 28→68 | 1.1 | Hero heading |

### Desktop Floor

On screens ≥ 1024px, `text-xs`, `text-label`, and `text-subtitle` are bumped to 16px:

```css
@media (width >= 64rem) {
  .text-xs,
  .text-label,
  .text-subtitle {
    font-size: 1rem;
  }
}
```

---

## Font Sizes

| Token | Value |
|-------|-------|
| `--text-xs` | 0.875rem |
| `--text-sm` | 1rem |
| `--text-body-sm` | 1rem |
| `--text-body` | 1.125rem |
| `--text-body-lg` | 1.25rem |
| `--text-label` | 0.875rem |

All font sizes use Tailwind tokens — no hardcoded `text-[Xpx]` values outside of responsive heading stacks.

---

## Component Patterns

### Section Headings

All section headings follow a two-line pattern:
1. Uppercase label: `text-xs font-semibold uppercase tracking-[0.2em] text-hero-muted`
2. Main heading (major): `font-heading text-[30px] sm:text-[40px] lg:text-[54px] font-semibold leading-[1.1] tracking-[-0.03em] text-hero-text-dark`
3. Main heading (small): `font-heading text-[24px] font-semibold leading-[1.1] tracking-[-0.03em] text-hero-text-dark sm:text-[30px]` — used for intro/section labels (e.g. "A bit about me")

Both heading sizes share the same font family, weight (`font-semibold`), line-height (`leading-[1.1]`), and letter-spacing (`tracking-[-0.03em]`). Only the font-size stack differs.

### Colored Dot Indicator

Used before labels in colored sections:
```html
<span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-chartreuse" />
```

### Image Containers

Images are placed in `border border-hero-border overflow-hidden` containers (no border radius):
```html
<div className="overflow-hidden border border-hero-border">
  <img src="..." alt="..." className="w-full h-auto object-cover" />
</div>
```

### Content Widths

| Context | Max Width |
|---------|-----------|
| Page container | `max-w-[1504px]` |
| Content blocks | `max-w-[940px]` |
| Section headings | `max-w-[1000px]` |
| Body text | `max-w-[60ch]` / `max-w-[600px]` |

---

## Animation & Motion

### Scroll Reveal

All scroll-triggered animations use Framer Motion with consistent timing:

```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

// Usage:
<motion.div
  variants={fadeUp}
  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
>
  {content}
</motion.div>
```

### Timing

| Element | Duration | Easing |
|---------|----------|--------|
| Section entrance | 0.5-0.55s | `[0.22, 1, 0.36, 1]` |
| Stagger delay | 0.08-0.1s | — |
| Case study card hover | 0.3s | spring |

### Reduced Motion

All motion respects `prefers-reduced-motion` via `MotionConfig` or viewport `once: true`.

---

## Section Organization

### Homepage Sections (in order)

1. **Hero** — Full-height intro with heading, tool cards, CTAs
2. **Trusted By** — Logo grid showing companies
3. **Work** — 2-column case study card grid
4. **Experience** — Full-bleed blue section with timeline
5. **Testimonials** — Grid with featured quote + supporting cards

### About Page Sections

1. **Hero Card** — Headshot + facts in a border-contained card
2. **Content sections** — Alternating text/image layout with `border-b` separators
3. **Video row** — Full-width YouTube embeds in `border border-hero-border` containers
4. **Closing** — Thank you message

---

## Responsive Behavior

| Breakpoint | Width | Grid Changes |
|------------|-------|------|
| Mobile | < 768px | Single column, stacked |
| Tablet | 768px+ | 2-column grids activate |
| Desktop | 1024px+ | Full multi-column layouts, font floor applied |

- Hero HowIWorkCards use a carousel on mobile, 3-column grid on md+
- Work cards use 1 column on mobile, 2 on lg+
- Testimonials use stacked layout on mobile, multi-column on lg+
- Experience uses single column on mobile, 2-column grid on md+
