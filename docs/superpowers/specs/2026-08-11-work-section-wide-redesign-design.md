# Work Section Wide Redesign — Design Spec

**Date:** 2026-08-11
**Status:** Approved

## Problem

The homepage "Works" section (`WorkCardsStack`) shows project thumbnails in a 2-up grid, capping each thumbnail at roughly half the container width. The goal is bigger, more prominent thumbnails per project, without losing or risking the current design while comparing.

## Goal

Build a new 1-column work section variant with larger, side-by-side cards (metadata ~20% left, thumbnail ~80% right), previewable on a throwaway route alongside a full duplicate of the homepage, with zero changes to existing production components.

## Design

### 1. New card component — `src/components/case-study-card-wide.tsx`

- Same props interface as `CaseStudyCard` (`case-study-card.tsx`) — no data model changes, reads from the same `getWorkCards()` source.
- Layout: flex row (not stacked). Left column ~20% width: tag, headline, description, tags, metrics (same content/order as current card's info banner). Right column ~80% width: media (image/video), reusing the same media rendering logic as `CaseStudyCard` (`VideoCarousel` for multi-clip, `<video>` for single video, `<Image>` for image, placeholder icon fallback).
- Same hover/transition treatment as the existing card (scale on hover, shadow transition) for visual consistency with the rest of the site.

### 2. New section component — `src/components/home/work-cards-stack-wide.tsx`

- Mirrors `WorkCardsStack.tsx`: same "Works" heading, same entrance animations (`headingVariants`, `gridVariants`, `cardShellVariants`), same `getWorkCards()` data source and `show7dish` prop.
- Grid changes from `lg:grid-cols-[1fr_auto_1fr]` (2-up) to a single-column stack (`grid-cols-1`), with a horizontal divider between cards instead of the current row/column separator logic.
- Renders `CaseStudyCardWide` instead of `CaseStudyCard`.

### 3. New preview route — `src/app/work-preview/page.tsx`

- Exact duplicate of `src/app/page.tsx`, with `WorkCardsStackWide` swapped in for `WorkCardsStack`. All other sections (Hero, TrustedBy, Experience, Testimonials, AboutSneakPeek) unchanged.
- Not linked from nav or anywhere else in the site — accessed directly via `/work-preview` URL for visual comparison against the live homepage.

### Non-goals / constraints

- No changes to any existing file (`page.tsx`, `WorkCardsStack.tsx`, `case-study-card.tsx`, `lib/data/home`). This work is fully additive.
- No new data fields — the wide card reuses existing `getWorkCards()` output as-is.
- No routing/nav changes — `/work-preview` stays unlisted.

### Resolution path

Once a design is chosen:
- If wide layout wins: swap `WorkCardsStackWide`/`CaseStudyCardWide` into `page.tsx`, delete the old components and `/work-preview` route.
- If current layout wins: delete `work-cards-stack-wide.tsx`, `case-study-card-wide.tsx`, and `src/app/work-preview/`.

## Testing

- Visual check in dev server: load `/` and `/work-preview` side by side, confirm homepage is unaffected and preview renders correctly across breakpoints (mobile/desktop).
- Confirm all 4 visible projects (7dish excluded via `show7dish={false}`, matching current homepage behavior) render with correct media, metadata, and links on the preview route.
