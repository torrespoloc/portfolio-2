@AGENTS.md

# Portfolio-2

Next.js portfolio site at jackelinetorres.co.

## Project Structure

- `src/app/page.tsx` — Homepage with hero section + work cards
- `src/app/layout.tsx` — Root layout (NavBar, fonts)
- `src/app/globals.css` — Tailwind v4 `@theme inline` block + CSS variables
- `src/components/layout/NavBar.tsx` — Navigation bar
- `src/components/case-study/cs-template_2.tsx` — Case study template used by all project pages
- `src/components/ui/button.tsx` — Button component
- `src/lib/constants.ts` — Shared constants (noise overlay, gradients)

## Case Study Pages

| Page | Accent Override | metaTheme |
|------|----------------|-----------|
| `/work/fundr` | `[--accent:#059669]` (emerald) | default |
| `/work/waldo` | `[--accent:#D97706]` (amber) | default |
| `/work/sidenook` | `[--accent:#0891B2]` (cyan) | default |
| `/work/xy` | `[--accent:#3B3066]` (purple) | `purple-orange` |
| `/work/7dish` | `[--accent:#0D9488]` (teal) | `teal-orange` |

## Active Work

**Redesigning the homepage hero** to match the Framer design at `jackelinetorres.co` (Framer project `V2CnnOQI8QY2nOIqrH40-h2hlJ`). Using the unframer MCP server to extract hero CSS, nodes, layout, effects, and links from Framer.

Framer MCP is configured in `.claude/mcp.json`. Access the project via the `/home` route on the unframer server.

## Key Tokens (globals.css @theme inline)

- `--color-accent: var(--accent)` — resolves to `text-accent` utility
- `--color-hero-bg`, `hero-text`, `hero-text-dark`, `hero-muted`, `hero-border` — hero section tokens

## Video Patterns

### 1. Hero video (autoplay, muted, loop — no controls)
Used as `heroImage` prop in `CaseStudyTemplatePra`. Wrapped by the template in a `rounded-xl ring-1 ring-foreground/[0.06]` container.

```tsx
heroImage={
  <video
    src="/fundr/hero-screen.mp4"
    poster="/fundr/hero-poster.jpg"  // optional, prevents flash
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  />
}
```

### 2. Inline demo video (autoplay, muted, loop — no controls)
Used inside case study content sections for feature demos that don't need audio (e.g. SideNook inline clips). Constrained by `contentWidth` (`max-w-6xl mx-auto`).

```tsx
<video src="/sidenook/status-indicator.mp4" autoPlay muted loop playsInline className="w-full h-auto" />
```

### 3. Explainer video (controls, user-initiated audio, no autoplay)
Used for longer-form explainer content where the user controls playback. Placed inside `sectionGrid` / `sectionFull` like other full-width visuals in case studies. Always use `mx-6` for proportional side spacing, `object-cover` + `bg-black` to handle video letterboxing, and `w-full h-full` over `w-full h-auto`.

```tsx
<motion.div
  variants={fadeUp}
  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
  className={sectionFull}
>
  <div className="relative w-[calc(100%-48px)] mx-auto overflow-hidden rounded-xl ring-1 ring-foreground/[0.06] bg-black">
    <video
      src="/fundr/video-explain.mp4"
      controls
      playsInline
      className="w-full h-full object-cover"
      style={{ aspectRatio: "16/9" }}
    />
  </div>
</motion.div>
```

### 4. Inline iframe (same as `<video>` but using `<iframe>`)
Used in Waldo for a demo video. Wrapped in a `bg-black aspect-[4/3]` container with the iframe positioned absolute/fill.

```tsx
<div className="relative overflow-hidden rounded-xl ring-1 ring-foreground/[0.06] bg-black aspect-[4/3]">
  <iframe
    src="/waldo/project-bits.mp4"
    className="absolute inset-0 w-full h-full"
    title="..."
    allow="autoplay"
    loading="lazy"
    style={{ border: 0 }}
  />
</div>
```

### Quick reference

| Pattern | `autoPlay` | `muted` | `loop` | `controls` | When to use |
|---------|-----------|---------|--------|-----------|-------------|
| Hero | yes | yes | yes | no | Background hero visual |
| Inline demo | yes | yes | yes | no | Short feature clips (SideNook) |
| Explainer | no | no | no | yes | Longer explainers with audio (Fundr video-explain) |

Place `.mp4` files in `public/<project>/` (e.g. `public/fundr/video-explain.mp4`). No import needed — reference via `src="/fundr/video-explain.mp4"`.

## Case Study Card Tags

Tags are used on homepage case study cards. Available tags: fintech, healthtech, macOS, desktop, mobile, SaaS.

| Card | Tags |
|------|------|
| XY | healthtech, SaaS |
| Waldo | healthtech, mobile |
| Fundr | fintech, SaaS |
| SideNook | macOS, desktop |
| 7dish | mobile, SaaS |
