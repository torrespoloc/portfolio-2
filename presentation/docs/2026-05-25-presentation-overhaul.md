# Design Brief: Jiro Health Presentation Deck Overhaul

## Problem Statement
The current Jiro Health presentation deck is functionally complete (18 slides, 11 layout types, web + .pptx) but reads too verbosely, lacks personality and visual energy, underuses the rich project assets available in the repo, and doesn't showcase how the designer's process has evolved with AI tools.

## Users
Jiro Health hiring team (Chris and team) evaluating Jacki as a senior product designer. They're moving fast, post-MVP, and need someone who can build foundation while shipping. They care about process thinking, healthtech experience, and design maturity.

## Design Direction
1. **Cut verbosity by ~40%** — tighter copy per slide. Bullets instead of paragraphs. Headlines that hit.
2. **Infuse personality** — more of Jacki's voice: direct, sharp, warm when it counts. The "architecture taught me systems" energy.
3. **Surface tool icons** throughout — show the AI-augmented design workflow in action (Figma, Cursor, Claude Code, Storybook, Linear, etc.)
4. **Use real project assets** — swap placeholder/low-value images for actual screenshots from XY, Waldo, Fundr, SideNook, 7dish
5. **New slide: "How my design process evolved with AI"** — dedicated slide showing the before/after of AI in the workflow. Tools, speed gains, quality impact. This is a unique selling point.

## Constraints
- Must maintain both formats: web (`/presentation`) and .pptx (`build-deck.mjs`)
- Must keep existing 18-slide structure (can condense/reorder, not remove major beats)
- Must use existing asset files — no new image generation
- Existing color system: purple (#3B3066), navy (#1A1A2E), warm (#F5F4F0), dark text (#2f2e31)

## Existing Design System
See `CLAUDE.md` — purple accent (#3B3066) for highlights, navy (#1A1A2E) for transitions, warm (#F5F4F0) for card fills, Georgia serif for quotes/headlines, system sans-serif for body.

## Assets Available
- **Tool logos**: 18+ SVG/PNG logos in `public/logos/`
- **Project screenshots**: XY (platform, user types, Storybook), Waldo (25+ screenshots), Fundr (dashboard, pricing), 7dish (before/after), SideNook (terminal screenshots)
- **Brand logos**: Each project has a brand logo
- **Case study heroes**: MP4 previews for each project

## Success Criteria
- Slide copy is visibly shorter, punchier, more quotable
- At least 5+ more real project screenshots used vs current 3
- Tool logos visible on relevant slides (process, tools, workflow context)
- New "design process + AI" slide exists and tells a compelling story
- Personality comes through — the deck sounds like a person, not a resume

## Out of Scope
- New slide types (current 11 cover the needs)
- Brand-new image assets (screenshots, photography)
- Structural reordering of the narrative arc (cover → why → XY → other work → close)
