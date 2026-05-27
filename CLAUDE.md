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

## Case Study Card Tags

Tags are used on homepage case study cards. Available tags: fintech, healthtech, macOS, desktop, mobile, SaaS.

| Card | Tags |
|------|------|
| XY | healthtech, SaaS |
| Waldo | healthtech, mobile |
| Fundr | fintech, SaaS |
| SideNook | macOS, desktop |
| 7dish | mobile, SaaS |
