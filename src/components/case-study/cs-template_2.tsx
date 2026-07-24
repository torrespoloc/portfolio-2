"use client"

import { useEffect, useRef, useState } from "react"
import * as React from "react"

import { motion, useInView } from "framer-motion"
import { LINKS } from "@/lib/constants"
import { SectionDivider } from "@/components/ui/section-divider"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

// ─── Content Width ───
// Text-heavy sections use a centered reading width.
const contentWidth = "max-w-[940px] mx-auto"
const metaStripWidth = "w-full"

const heroWidth = "max-w-[940px] mx-auto px-6 md:px-10"

// ─── Shared section layout classes ───
// Single-column stack: heading, body, and visuals stack vertically
// for easier reading and skimming.
export const sectionGrid = "flex flex-col gap-6"
export const sectionLeft = ""
export const sectionRight = ""
export const sectionFull = "w-[calc(100%+48px)] md:w-[calc(100%+80px)] -mx-6 md:-mx-10"

// ─── Section header: nav font token, blue eyebrow ───
// Design system: section headings stay compact and use the sidebar nav mono treatment.
export const sectionHeader = "font-mono font-semibold text-[13px] leading-[1.2] tracking-[0.12em] uppercase text-brand-blue sm:text-sm"

export interface CaseStudyMeta {
  role: string
  duration: string
  team: string
  tools: React.ReactNode
}

export interface CaseStudyTemplatePraProps {
  /** Project headline, rendered full-width at the top */
  headline: React.ReactNode
  /** Hero visual (video or image), full-width below the headline */
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
// Do NOT place visuals in a side-by-side grid with supporting text, the text
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

// ─── Case study section, parent-managed spacing and dividers ───
// Consistent vertical padding + SectionDivider between sections.
// The template owns spacing; pages just provide content.
export function CaseStudySection({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <>
      <SectionDivider />
      <section id={id} className={`${contentWidth} px-6 md:px-10 py-6 ${className}`}>
        {children}
      </section>
    </>
  )
}

// ─── Case study section, full bleed, no padding ───
// Use for sections where background colors need to fill edge-to-edge
// (e.g., "Want a walkthrough?" closing CTA cards).
// Omits contentWidth, px-*, and py-* so the background reaches full width.
export function CaseStudySectionFullBleed({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <>
      <SectionDivider />
      <section id={id} className={className}>
        {children}
      </section>
    </>
  )
}
// ─────────────────────────────────────────────

// ─── Empty section, divider + spacing, no content ───
// Use between content sections for visual breathing room.
export function EmptySection({ divider = true }: { divider?: boolean }) {
  return (
    <>
      {divider && <SectionDivider />}
      <div className="h-24" aria-hidden="true" />
    </>
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
      { label: "Phase 1", ids: ["phase-1"] },
      { label: "Phase 2", ids: ["phase-2"] },
      { label: "Phase 3", ids: ["phase-3"] },
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
    <div className="min-h-screen bg-hero-bg text-foreground relative">
      <div className="mx-auto w-full max-w-[1400px] min-h-screen lg:flex relative">
        {/* Outer projection lines, z-40 stays above the side nav's z-30 fill */}
        <div className="absolute inset-y-0 left-0 w-px bg-hero-border pointer-events-none opacity-70 z-40" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-px bg-hero-border pointer-events-none opacity-70 z-10" aria-hidden="true" />
        {/* Between sidebar and content, z-40 stays above the side nav's z-30 fill */}
        <div className="absolute inset-y-0 left-[268px] w-px bg-hero-border pointer-events-none opacity-70 z-40 hidden lg:block" aria-hidden="true" />

      {/* ─── SIDE NAV ─── */}
      <nav
        className={`hidden lg:block w-[268px] shrink-0 sticky top-0 self-start z-30 transition-all duration-300 max-h-screen overflow-y-auto ${
          navActive ? "bg-background" : "bg-transparent"
        }`}
      >
        <div className="flex flex-col gap-1 w-full px-4 pt-8">
          {(availableSections.length > 0 ? availableSections : [{ label: "Hero", id: "hero" }, { label: "Problem", id: "problem" }, { label: "Solution", id: "solution" }, { label: "Phase 1", id: "phase-1" }, { label: "Phase 2", id: "phase-2" }, { label: "Phase 3", id: "phase-3" }, { label: "Impact", id: "impact" }, { label: "Walkthrough", id: "walkthrough" }, { label: "Reflection", id: "reflection" }]).map(({ label, id }) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  const el = document.getElementById(id)
                  el?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
                className={`w-full text-left px-4 py-2.5 text-sm font-mono uppercase tracking-[0.12em] transition-colors ${
                  navActive
                    ? "text-hero-muted hover:text-foreground hover:bg-secondary/80"
                    : "text-hero-muted hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {label}
              </button>
            ))}
        </div>
      </nav>

      {/* ─── MAIN (right pane) ─── */}
      <main className="flex-1 min-w-0 relative px-6 lg:px-[160px]">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-[160px] hidden lg:block w-px bg-hero-border pointer-events-none opacity-70 z-10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-[160px] hidden lg:block w-px bg-hero-border pointer-events-none opacity-70 z-10"
        />

        <EmptySection divider={false} />
        <SectionDivider />

        {/* Headline, hero width (content + 48px per side); color wash spans full-width */}
        <section id="hero" className="relative pt-20 lg:pt-12 pb-12 overflow-hidden">
          {/* Subtle color wash behind the headline */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-[10%] w-[500px] h-[500px] rounded-full bg-chartreuse/[0.04] blur-3xl" />
            <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-brand-blue/[0.04] blur-3xl" />
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

        {heroImage ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="w-full"
            >
              <div className="overflow-hidden ring-1 ring-hero-border">
                {heroImage}
              </div>
            </motion.div>
          </>
        ) : (
          <EmptySection />
        )}

        {/* Body content */}
        <div>
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
          >
            {/* Meta grid, pill-style tags with accent colors */}
            <SectionReveal className={metaStripWidth}>
              <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 overflow-hidden divide-x divide-hero-border/70 bg-background">
                {metaFields.map((m, i) => {
                  const colorSet =
                    metaTheme === "purple-orange" ? { dot: "bg-highlight", bg: "bg-secondary/70", label: "text-hero-muted", value: "text-foreground" } :
                    metaTheme === "teal-orange" ? { dot: "bg-highlight", bg: "bg-secondary/70", label: "text-hero-muted", value: "text-foreground" } :
                    metaTheme === "cyan-gray" ? { dot: "bg-brand-blue", bg: "bg-secondary/70", label: "text-hero-muted", value: "text-foreground" } :
                    metaTheme === "dark-teal-orange" ? { dot: "bg-highlight", bg: "bg-secondary/70", label: "text-hero-muted", value: "text-foreground" } :
                    { dot: "bg-brand-blue", bg: "bg-secondary/70", label: "text-hero-muted", value: "text-foreground" }
                  return (
                    <div
                      key={m.label}
                      className={`p-4 ${colorSet.bg}`}
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

          {children}
        </div>
      </main>

    </div>
  </div>
  )
}
