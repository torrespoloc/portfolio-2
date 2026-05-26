export const LINKS = {
  linkedin: "https://www.linkedin.com/in/jackelinetorres",
  github: "https://github.com/torrespoloc",
  email: "hello@jackelinetorres.co",
  framerSite: "https://www.jackelinetorres.co",
  sidenookRepo: "https://github.com/torrespoloc/sidenook-app",
  idocbridge: "https://idocbridge.com",
  resume: "/resume.pdf",
}

export const SITE = {
  name: "Jacki Torres",
  title: "Product Designer",
  tagline: "Designer who ships code, not mockups.",
  description:
    "I design and build across health tech, fintech, and AI — from 0 to 1 and beyond. I care about systems, accessibility, and code that makes it to production.",
  location: "Based in the US",
  languages: "English & Spanish",
  status: "Currently building SideNook, a floating terminal app for Mac",
}

/** Shared SVG noise overlay for hero sections — identical fractal-noise filter used across all case studies */
export const NOISE_OVERLAY =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")"

/** Per-project hero gradient presets — brand-specific */
export const HERO_GRADIENTS = {
  fundr: "linear-gradient(135deg, #0B3B2B 0%, #1A6B4E 40%, #072C1E 100%)",
  xy: "linear-gradient(135deg, #485bfc 0%, #7d8bff 30%, #1c1c1c 100%)",
  sidenook: "linear-gradient(135deg, #06090f 0%, #0f1a2a 30%, #1f3a5c 100%)",
  waldo: "linear-gradient(135deg, #1a1a1a 0%, #2e2e2e 30%, #444 100%)",
  "7dish": "linear-gradient(135deg, #1c1c1c 0%, #2a2a2a 30%, #3d3d3d 100%)",
} as const

export const TOOL_LOGOS: Record<string, string> = {
  Figma: "/logos/figma.png",
  "V0 by Vercel": "/logos/vercel-v0",
  GitHub: "/logos/github.png",
  Storybook: "/logos/storybook.png",
  "Claude Code": "/logos/claude.png",
  Cursor: "/logos/cursor.png",
}

export const NOW = {
  label: "Now",
  prefix: "Building",
  project: "SideNook",
  suffix: "— a floating terminal app for Mac",
  href: "/work/sidenook",
}

export const WORK_CASE_STUDIES = [
  { label: "XY.AI", href: "/work/xy", meta: "Health Tech · AI", logo: "/logos/XY.svg" },
  { label: "Waldo", href: "/work/waldo", meta: "Health Tech · Mobile", logo: "/logos/waldo.svg" },
  { label: "Fundr", href: "/work/fundr", meta: "Fintech · 0→1", logo: "/logos/fundr-logo.svg" },
  { label: "7dish", href: "/work/7dish", meta: "Consumer · Food Tech", logo: null },
  { label: "SideNook", href: "/work/sidenook", meta: "Developer Tools · AI", logo: "/logos/turtle.svg" },
] as const
