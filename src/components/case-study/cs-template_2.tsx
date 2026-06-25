"use client"

import { useEffect, useRef, useState } from "react"
import * as React from "react"

import { motion, useInView } from "framer-motion"
import { LINKS } from "@/lib/constants"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

// ─── Content Width ───
// Text/content sections use this width.
const contentWidth = "px-6 sm:px-10 lg:px-16 xl:px-24 max-w-6xl mx-auto"

const heroWidth = "px-6 sm:px-10 max-w-6xl mx-auto"

// ─── Shared section layout classes ───
// Single-column stack: heading, body, and visuals stack vertically
// for easier reading and skimming.
export const sectionGrid = "flex flex-col gap-6"
export const sectionLeft = ""
export const sectionRight = ""
export const sectionFull = ""

// ─── Section header: Playfair Display italic, accent blue ───
export const sectionHeader = "font-[family-name:var(--font-heading)] italic text-2xl sm:text-3xl lg:text-4xl text-accent tracking-tight leading-[1.1]"

export interface CaseStudyMeta {
  role: string
  duration: string
  team: string
  tools: React.ReactNode
}

export interface CaseStudyTemplatePraProps {
  /** Project headline — rendered full-width at the top */
  headline: React.ReactNode
  /** Hero visual (video or image) — full-width below the headline */
  heroImage?: React.ReactNode
  /** Standardized project metadata */
  meta: CaseStudyMeta
  /** Optional meta pill color theme */
  metaTheme?: "purple-orange" | "teal-orange" | "cyan-gray" | "dark-teal-orange" | "default"
  children: React.ReactNode
}

// ─── Visual Placement Rule ───
// Large visuals (screenshots, diagrams, flow charts) must be positioned at
// the bottom of their section, spanning full width below all text content.
// Do NOT place visuals in a side-by-side grid with supporting text — the text
// describes the problem; the visual shows the solution. Stack them vertically.
// ─────────────────────────────

// ─── Scroll-reveal for case study sections ───
// Slide-up + fade + subtle blur for a polished "coming into focus" feel.
// Adjust margin to tune trigger distance.
export function SectionReveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32, scale: 0.96, filter: "blur(8px)" }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : { opacity: 0, y: 32, scale: 0.96, filter: "blur(8px)" }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 20,
        mass: 1,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
// ─────────────────────────────────────────────
export function CaseStudyTemplatePra({ headline, meta, metaTheme, heroImage, children }: CaseStudyTemplatePraProps) {
  const [navActive, setNavActive] = useState(false)
  const [availableSections, setAvailableSections] = useState<{ label: string; id: string }[]>([])

  useEffect(() => {
    const handleScroll = () => {
      setNavActive(window.scrollY > window.innerHeight * 0.45)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = [
      { label: "Hero", ids: ["hero"] },
      { label: "Problem", ids: ["problem"] },
      { label: "Solution", ids: ["solution"] },
      { label: "Impact", ids: ["impact"] },
      { label: "Walkthrough", ids: ["walkthrough"] },
      { label: "Reflection", ids: ["reflection", "reflections"] },
    ]
    const found = sections
      .map((s) => ({ label: s.label, id: s.ids.find((id) => document.getElementById(id)) || s.ids[0] }))
      .filter((s) => document.getElementById(s.id))
    setAvailableSections(found)
  }, [])

  const metaFields: { label: string; value: React.ReactNode }[] = [
    { label: "Role", value: meta.role },
    { label: "Duration", value: meta.duration },
    { label: "Team", value: meta.team },
    { label: "Tools", value: meta.tools },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ─── SIDE NAV ─── */}
      <nav
        className={`fixed left-0 top-0 bottom-0 w-[15vw] hidden lg:flex flex-col z-30 transition-all duration-300 ${
          navActive
            ? "border-r border-foreground/[0.06] bg-background"
            : "border-r border-transparent bg-transparent"
        }`}
      >
        <div className="flex flex-col gap-1 w-full px-4 pt-8">
          {(availableSections.length > 0 ? availableSections : [{ label: "Hero", id: "hero" }, { label: "Problem", id: "problem" }, { label: "Solution", id: "solution" }, { label: "Impact", id: "impact" }, { label: "Walkthrough", id: "walkthrough" }, { label: "Reflection", id: "reflection" }]).map(({ label, id }) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  const el = document.getElementById(id)
                  el?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-mono uppercase tracking-[0.12em] transition-colors ${
                  navActive
                    ? "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.02]"
                }`}
              >
                {label}
              </button>
            ))}
        </div>
      </nav>

      {/* ─── MAIN ─── */}
      <main className="lg:ml-[15vw]">
        {/* Headline — hero width (content + 48px per side); color wash spans full-width */}
        <section id="hero" className="relative pt-20 lg:pt-28 pb-12 overflow-hidden">
          {/* Subtle color wash behind the headline */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-[10%] w-[500px] h-[500px] rounded-full bg-chartreuse/[0.04] blur-3xl" />
            <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-3xl" />
            <div className="absolute bottom-0 left-[40%] w-[300px] h-[300px] rounded-full bg-burgundy/[0.03] blur-3xl" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`relative z-10 ${heroWidth}`}
          >
            {headline}
          </motion.div>
        </section>

        {/* Hero visual — hero width (content + 48px per side) */}
        {heroImage && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className={`${heroWidth} mb-16`}
          >
            <div className="overflow-hidden rounded-xl ring-1 ring-foreground/[0.06]">
              {heroImage}
            </div>
          </motion.div>
        )}

        {/* Body content */}
        <div className="pb-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
          >
            {/* Meta grid — pill-style tags with accent colors */}
            <SectionReveal className={`${contentWidth} pt-6 mt-6 border-t border-foreground/[0.08] mb-16`}>
              <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {metaFields.map((m, i) => {
                  const colorSet =
                    metaTheme === "purple-orange" ? { dot: "bg-highlight", bg: "bg-foreground/[0.04]", label: "text-foreground", value: "text-foreground" } :
                    metaTheme === "teal-orange" ? { dot: "bg-highlight", bg: "bg-foreground/[0.04]", label: "text-foreground", value: "text-foreground" } :
                    metaTheme === "cyan-gray" ? { dot: "bg-accent", bg: "bg-foreground/[0.04]", label: "text-foreground", value: "text-foreground" } :
                    metaTheme === "dark-teal-orange" ? { dot: "bg-highlight", bg: "bg-foreground/[0.04]", label: "text-foreground", value: "text-foreground" } :
                    { dot: "bg-accent", bg: "bg-foreground/[0.04]", label: "text-foreground", value: "text-foreground" }
                  return (
                    <div
                      key={m.label}
                      className={`rounded-2xl px-5 py-4 ${colorSet.bg} ring-1 ring-foreground/[0.06]`}
                    >
                      <dt className="flex items-center gap-1.5 mb-1">
                        <span className={`inline-block h-1.5 w-1.5 rounded-full ${colorSet.dot}`} />
                        <span className={`font-bold font-mono uppercase tracking-[0.18em] ${colorSet.label}`}>
                          {m.label}
                        </span>
                      </dt>
                      <dd className={`text-body-sm leading-snug font-medium ${colorSet.value}`}>
                        {m.value}
                      </dd>
                    </div>
                  )
                })}
              </dl>
            </SectionReveal>
          </motion.div>

          <SectionReveal className={contentWidth}>
            {children}
          </SectionReveal>
        </div>

      </main>
    </div>
  )
}
