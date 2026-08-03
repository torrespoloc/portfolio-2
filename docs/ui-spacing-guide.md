# UI Spacing Guide — Case Study Pages

## 8px Grid System

All desktop and tablet structural spacing values **must** be multiples of 8px.
Mobile values follow a 4px grid.

| Tailwind | px | Valid use |
|----------|----|-----------|
| `0` | 0 | No gap (grid cells, hairline separators) |
| `0.5` | 2 | Micro-spacing only (icon offsets, tight label-value coupling) |
| `1` | 4 | Micro-spacing (badge padding, tight gaps) — mobile default |
| `2` | 8 | List item gaps, eyebrow-to-heading, tight card padding |
| `4` | 16 | Standard section padding, list gaps, card padding |
| `6` | 24 | Medium breathing room |
| `8` | 32 | Section vertical padding (desktop) |
| `10` | 40 | Section vertical padding (desktop generous) |
| `12` | 48 | Large section gaps |
| `16` | 64 | Major section breathing room |
| `20` | 80 | Page-level spacing |
| `24` | 96 | EmptySection height, large breaks |

### 4px half-steps — intentionally allowed

These values break the 8px grid for micro-spacing where tight visual coupling is the intent:

| Class | px | Where |
|-------|----|-------|
| `mb-1`, `mt-1`, `py-1`, `pt-1`, `gap-1` | 4 | Badge labels, icon-to-text offsets, tight label stacks |
| `mt-0.5` | 2 | Icon alignment micro-adjustments |
| `gap-0`, `gap-px` | 0-1 | Hairline grid dividers between cards |

**Rule**: 4px values are for micro-relationships (label-to-value, icon-to-text). Structural gaps (between sections, cards, list items) must use 8px multiples.

---

## Spacing Tokens (globals.css)

```
--spacing-container: 1504px   (page max-width)
--spacing-content:   944px    (case study reading width)
--spacing-sidebar:   272px    (side nav width)
--spacing-media-col: 440px    (about page media column)
--spacing-image-md:  464px
--spacing-image-lg:  560px
--spacing-card-min:  504px
--spacing-text-max:  704px
```

---

## Section-Level Spacing

### CaseStudySection

The shared wrapper that owns spacing between sections:

```tsx
<section id={id} className="max-w-content mx-auto px-6 md:px-10 py-8 md:py-10">
```

- **Horizontal**: `px-6` (24px mobile) / `md:px-10` (40px desktop) — both 8px grid
- **Vertical**: `py-8` (32px mobile) / `md:py-10` (40px desktop) — both 8px grid
- **Divider**: Preceded by `<SectionDivider />` (1px hairline)

Total gap between sections = 1px divider + 32/40px padding = clean visual separation without excessive whitespace.

### EmptySection

Used **once per page** before the closing CTA for a dramatic pause:

```tsx
<SectionDivider />
<div className="h-24" aria-hidden="true" />  {/* 96px */}
```

Previously overused (33 instances across 4 pages). Now reduced to 1 per page.

### CaseStudySectionFullBleed

For edge-to-edge backgrounds (closing CTAs). Omits all padding — the inner content provides its own spacing.

### SectionDivider

```tsx
<div className="h-px bg-hero-border/60" aria-hidden="true" />
```

Single hairline, no vertical margin. Spacing comes from the section padding around it.

---

## Line-Height Hierarchy

### Headings
```
leading-[1.15]  on all section headings (text-xl through text-3xl)
leading-[1.05]  on hero headlines (text-4xl through text-5xl)
```
Tight leading for display/heading text. Creates a crisp, modern editorial feel.

### Long-form narrative body (4+ lines)
```
leading-relaxed  (1.625x)
```
Used for: Phase body paragraphs, problem descriptions, research narratives, user quotes.

At `text-base` (16px): 26px line height. At `text-lg` (18px): 29.25px.
This is generous but correct for sustained reading of multi-line paragraphs.

### Short descriptive paragraphs (1-3 lines)
```
leading-snug  (1.375x)
```
Used for: Feature descriptions, "Why:" explanatory notes, short intro paragraphs, CTA descriptions.

At `text-base` (16px): 22px line height. At `text-lg` (18px): 24.75px.
~15% tighter than `leading-relaxed`. Keeps short text blocks visually cohesive.

### Bullet lists
```
leading-snug  (1.375x)
```
Used for: All ▸ style lists, disc-style bullet lists, reflection/outcome list items.

### Labels and captions
Token defaults (`text-label`: 1.3, `text-body-sm`: 1.55, `text-xs`: 1.543).
No explicit leading class needed — the design tokens handle it.

### Quotes (blockquote)
```
leading-relaxed  (1.625x)
```
Kept at relaxed leading — quotes are pull-quotes that need breathing room for impact.

---

## Text Content Patterns

### Section eyebrow
```
text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-2
```
8px gap (`mb-2`) to the content below. Consistent across all sections.

### Section heading
```
text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground
```
Sits in `sectionLeft` column. Paired with body in `sectionRight` via `sectionGrid`.

### Feature description paragraph (short)
```
text-base lg:text-lg text-ink-muted leading-snug
```
1-3 lines. Describes a feature or concept. Changed from `leading-relaxed`.

### Feature description paragraph (long narrative)
```
text-base lg:text-lg text-ink-muted leading-relaxed
```
4+ lines. Educational or narrative content. Kept at relaxed leading.

### "Why:" explanatory note
```
text-body-sm lg:text-body text-ink-muted italic leading-snug
```
Short supporting context below bullet lists. Changed from `leading-relaxed`.

### ▸ Bullet list
```
space-y-2 text-body text-ink-muted leading-snug
```
Each item: `flex gap-2` with `▸` icon at `mt-1` (4px micro-offset for optical alignment).

### Disc bullet list
```
text-base lg:text-lg text-ink-muted leading-snug list-disc pl-4 space-y-2
```
Standard `<ul>` with disc markers. `pl-4` (16px indent), `space-y-2` (8px between items).

### Short intro paragraph
```
text-base lg:text-lg text-ink-muted leading-snug mb-6 max-w-2xl
```
1-2 line section introductions. `mb-6` (24px) to the content below. `max-w-2xl` caps line length.

---

## What Changed — July 2026 Audit

### Line-height fixes

| Pattern | Before | After | Reason |
|---------|--------|-------|--------|
| Feature descriptions (1-3 lines) | `leading-relaxed` | `leading-snug` | Short text looked airy at 1.625x |
| "Why:" italic notes | `leading-relaxed` | `leading-snug` | Supporting context, should be compact |
| ▸ bullet lists | no explicit leading | `leading-snug` | Consistency with other list text |
| Short intro paragraphs | no explicit leading | `leading-snug` | Explicit control vs browser default |
| Outcome/reflection list items | `leading-relaxed` | `leading-snug` | List items benefit from tighter coupling |
| Brand stat descriptions | `leading-relaxed` | `leading-snug` | 1-line descriptions in stat cards |
| PhaseHeader body | `leading-relaxed` | **kept** `leading-relaxed` | Narrative text, needs readability |
| Long-form problem/research text | `leading-relaxed` | **kept** `leading-relaxed` | 4+ line paragraphs for sustained reading |
| User quotes (blockquote) | `leading-relaxed` | **kept** `leading-relaxed` | Quotes need breathing room |

### Structural fixes

| Fix | File | Detail |
|-----|------|--------|
| `<br /><br />` → `<br />` | Waldo | Double line breaks created ~52px gaps; single breaks ~26px |
| `mb-5` → `mb-4` | SideNook | Constraint callout paragraph now on 8px grid (20→16px) |
| `mb-3` → `mb-2` | All 4 pages | Eyebrow-to-content gaps now 8px (was 12px) |
| `p-3` → `p-4` | All 4 pages | Card padding now 16px (was 12px) |
| `pl-5` → `pl-4` | All 4 pages | List indentation now 16px (was 20px) |
| `space-y-3` → `space-y-4` | SideNook, Fundr | Standardized to 16px list gaps |
| `space-y-5` → `space-y-4` | All 4 pages | Standardized to 16px list gaps |
| `gap-5` → `gap-4` | All 4 pages | Grid gaps now 16px |
| `lg:p-7` → `lg:p-8` | Fundr | 28→32px, on 8px grid |
| `px-3` → `px-4` | SideNook, Waldo | Chip/badge padding 12→16px |
| 29 EmptySections removed | All 4 pages | Kept 1 per page before closing CTA |

### Files touched

| File | Changes |
|------|---------|
| `cs-template_2.tsx` | CaseStudySection `py-6`→`py-8 md:py-10` |
| `work/sidenook/page.tsx` | 14 line-height fixes, 1 mb-5→mb-4, 5 bullet list leading additions |
| `work/waldo/page.tsx` | 6 `<br /><br />`→`<br />`, 1 outcome list, 1 stat description |
| `work/fundr/page.tsx` | 6 intro leading additions, 4 bullet list leading additions, 2 feature description fixes |
| `work/xy/page.tsx` | 1 intro leading addition, 1 feature description fix, 3 reflection list item fixes |

### Design tokens referenced

```
text-body:    1.125rem / line-height 1.5    (18px / 27px)
text-body-sm: 1rem     / line-height 1.55   (16px / 24.8px)
text-label:   0.875rem / line-height 1.3    (14px / 18.2px)
text-xs:      0.875rem / line-height 1.543  (14px / 21.6px)
```

At desktop (`>= 1024px`), `text-xs` and `text-label` are bumped to 1rem (16px) via a media query.
