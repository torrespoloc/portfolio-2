# Design Plan: /presentation Web Viewer Overhaul

**Goal:** Update the /presentation slide viewer with tighter copy, more personality, tool icons, real project assets, and a new AI-process slide.

**Design Direction:** See `docs/designpowers/briefs/2026-05-25-presentation-overhaul.md`

---

## Task 1: Add "How my design process evolved with AI" slide

**Files:** `src/app/presentation/page.tsx`

- [ ] Define new slide content in SLIDES array (insert after "How I work" slide, slide 5)
- [ ] Content: before/after of AI in workflow, tools used (Figma → Figma + Cursor + Claude Code + V0 + Storybook), speed gains, quality impact
- [ ] Use a cards or grid layout for the tool ecosystem

**Verification:** New slide renders between "How I work" and "Why Jiro" with correct content

---

## Task 2: Condense copy + personality pass (early slides 1–6 + new AI slide 5b)

**Files:** `src/app/presentation/page.tsx`

- [ ] Slide 2 (One-line) — tighter, punchier
- [ ] Slide 3 (Why I care) — keep the story, cut ~30% of words
- [ ] Slide 4 (How I work) — shorter card descriptions
- [ ] Slide 5 (Why Jiro) — more voice, less CV
- [ ] Slide 6 (First 90 days) — shorter phase descriptions

**Verification:** Each slide has visibly less text while retaining key message

---

## Task 3: Condense copy + personality pass (XY slides 7–15)

**Files:** `src/app/presentation/page.tsx`

- [ ] Slide 7 (XY Context) — shorter, more direct
- [ ] Slide 8 (My Role) — punchier bullets
- [ ] Slide 9 (What I found) — tighter paragraph
- [ ] Slide 10 (Reframe) — keep the before/after structure, shorter text
- [ ] Slide 11 (Exploration) — shorter option descriptions
- [ ] Slide 12 (What I built) — shorter item descriptions
- [ ] Slide 13 (Impact) — tighter bullets
- [ ] Slide 14 (Reflection) — shorter

**Verification:** XY section reads faster but keeps all key beats

---

## Task 4: Condense copy + personality pass (remaining slides 16–18)

**Files:** `src/app/presentation/page.tsx`

- [ ] Slide 15 (Waldo) — tighter, more voice
- [ ] Slide 16 (Other work) — punchier entries
- [ ] Slide 17 (What I bring) — shorter table descriptions
- [ ] Slide 18 (Contact) — unchanged (minimal copy)

**Verification:** Remaining slides match the condensed, personality-driven tone

---

## Task 5: Add tool icons to web viewer

**Files:** `src/app/presentation/page.tsx`

- [ ] Create a reusable ToolIcons component in the file
- [ ] Add to "How I work" slide (Figma, Cursor, Claude Code, Storybook, Linear, V0)
- [ ] Add to "How my design process evolved with AI" slide (the same + ChatGPT, Perplexity, Maze)
- [ ] Add to "My Role" slide (Figma, Cursor, GitHub, Linear, Claude Code)

**Verification:** Tool icons render on all three slides with correct logos

---

## Task 6: Swap/add real project assets

**Files:** `src/app/presentation/page.tsx`

- [ ] XY slide: verify user-types.png and xy-platform.png load (they're the best assets)
- [ ] XY What I built: add Storybook screenshot
- [ ] Waldo: add journey-map-preview.png or a mockup grid, swap if better assets exist
- [ ] Other work: add images for Fundr (dashboard-premium.png) and 7dish (homepage-after.png)

**Verification:** Each project slide has at least one real screenshot from that project
