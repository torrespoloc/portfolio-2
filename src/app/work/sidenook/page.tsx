"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SideNookMockBefore } from "@/components/case-study/SideNookMockBefore"
import { SideNookMockAfter } from "@/components/case-study/SideNookMockAfter"
import { BeforeAfterSlider } from "@/components/case-study/BeforeAfterSlider"
import {
  ArrowUpRight,
  Sparkles,
  Terminal,
  Layers,
  Lightbulb,
  AlertTriangle,
} from "lucide-react"
import { LINKS } from "@/lib/constants"
import { CaseStudyTemplatePra } from "@/components/case-study/cs-template_2"
import { BurgundySection } from "@/components/case-study/BurgundySection"
import {
  sectionGrid,
  sectionLeft,
  sectionRight,
  sectionFull,
  sectionHeader,
} from "@/components/case-study/cs-template_2"
import { TooltipIcon } from "@/components/ui/tooltip-icon"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

const meta = {
  role: "AI Product Designer + Builder",
  duration: "Concept → v1.0 · April 2026",
  team: "Self-managed, designed, and shipped",
  tools: (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-xs font-mono text-muted-foreground">SwiftUI</span>
      <TooltipIcon src="/logos/claude-chat.png" alt="Claude" tooltip="Claude" className="h-6 w-6 rounded-sm" />
      <TooltipIcon src="/logos/claude-code.png" alt="Claude Code" tooltip="Claude Code" className="h-6 w-6 rounded-sm" />
      <TooltipIcon src="/logos/figma.png" alt="Figma" tooltip="Figma" className="h-6 w-6 rounded-sm" />
      <TooltipIcon src="/logos/cursor.png" alt="Cursor" tooltip="Cursor" className="h-6 w-6 rounded-sm" />
      <TooltipIcon src="/logos/github.png" alt="GitHub" tooltip="GitHub" className="h-6 w-6 rounded-sm" />
    </div>
  ),
}

type Phase = {
  icon: React.ComponentType<{ className?: string }>
  eyebrow: string
  title: string
  body: React.ReactNode
}

const phases: Phase[] = [
  {
    icon: Sparkles,
    eyebrow: "Phase 1",
    title: "Validate the feel before the function.",
    body: <>First milestone: <span className="text-case-highlight font-semibold">the animation with no terminal</span> behind it — just the pill, the spring, the collapse. A sluggish animation would&rsquo;ve undermined the promise from the first interaction. Spring parameters (stiffness 280, damping 22) were iterated in Figma first, then tuned in code. The <span className="text-case-highlight font-semibold">hit area is 14pt</span> — wider than the visible 6pt pill — so the interaction catches without requiring precision.</>,
  },
  {
    icon: Terminal,
    eyebrow: "Phase 2",
    title: "Terminal backend with invisible focus handoff.",
    body: <>Focus routes to the terminal on expand, back to your app on collapse. Making that handoff <span className="text-case-highlight font-semibold">invisible and reliable</span> was the <span className="text-case-highlight font-semibold">hardest design + engineering problem</span> in the project. Users will never notice it &mdash; and that&rsquo;s the point.</>,
  },
  {
    icon: Layers,
    eyebrow: "Phase 3",
    title: "Interactive features that share one mental model.",
    body: <>Drag to any edge (panel adapts geometry automatically), multi-tab, resize handles, pin-to-stay. A panel dragged to the right edge and pinned open while resizing is still <span className="text-case-highlight font-semibold">one mental model</span>. <span className="text-case-highlight font-semibold">Everything composes; nothing surprises.</span></>,
  },
]

const outcomes: React.ReactNode[] = [
  <><span className="text-case-highlight font-semibold">v1.0 shipped April 23, 2026</span> &mdash; on timeline, now in testing with early users.</>,
  <>Zero screen space consumed when collapsed (<span className="text-case-highlight font-semibold">6pt pill</span>).</>,
  <><span className="text-case-highlight font-semibold">Hover-to-use in under 300ms.</span></>,
  <>Works on all Spaces, fullscreen apps, and Mission Control &mdash; <span className="text-case-highlight font-semibold">no special configuration</span> needed.</>,
]

const differently: { title: string; body: React.ReactNode }[] = [
  {
    title: "Accessibility earlier.",
    body: <><span className="text-case-highlight font-semibold">VoiceOver support</span> for terminal output is complex but not optional. Flagged for v2. <span className="text-case-highlight font-semibold">It shouldn&rsquo;t have been.</span></>,
  },
  {
    title: "User testing on collapse timing.",
    body: <>The <span className="text-case-highlight font-semibold">300ms debounce</span> was tuned by feel. It works &mdash; but I&rsquo;d want real usage data before calling it final.</>,
  },
]

// ─── Phase header within Process ───
function PhaseHeader({ p, idx }: { p: Phase; idx: number }) {
  const Icon = p.icon
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={sectionGrid}
    >
      <div className={sectionLeft}>
        <div className="flex items-center gap-3 mb-3">
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-secondary/70 ring-1 ring-hairline text-ink-muted"
          >
            <Icon className="h-4 w-4" />
          </motion.span>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground inline-flex items-center gap-2">
            <span className="relative inline-flex h-1.5 w-1.5">
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: [0, 1.6, 1], opacity: [0, 0.5, 0] }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inline-flex h-full w-full rounded-full bg-accent"
              />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {String(idx + 1).padStart(2, "0")} · {p.eyebrow}
          </p>
        </div>
        <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
          {p.title}
        </h3>
      </div>
      <div className={sectionRight}>
        <p className="text-base lg:text-lg text-ink-muted leading-relaxed">{p.body}</p>
      </div>
    </motion.header>
  )
}

export default function SideNookCaseStudy() {
  return (
    <CaseStudyTemplatePra
      metaTheme="cyan-gray"
      meta={meta}
      heroImage={
        <video
          src="/sidenook/hero-type-2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      }
      headline={
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2.5 py-1 rounded-full ring-1 ring-hairline-strong">
              Developer Tools
            </span>
            <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2.5 py-1 rounded-full ring-1 ring-hairline-strong">
              macOS · personal
            </span>
            <span className="text-label font-mono uppercase tracking-[0.08em] text-chartreuse-foreground bg-chartreuse px-2.5 py-1 rounded-full">
              Building V2
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-foreground leading-[1.05] max-w-4xl">
            A terminal that&rsquo;s a support character, not the main event.
          </h1>
          <p className="max-w-2xl text-base lg:text-lg text-ink-muted leading-relaxed">
            SideNook turns a macOS terminal into an ambient companion: fast when you need it, quiet when you don&rsquo;t. Designed to stay out of the way.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-label font-mono uppercase tracking-[0.18em] text-muted-foreground">
            <span>v1.0 · April 23, 2026</span>
            <span className="hidden sm:inline text-muted-foreground/40">•</span>
            <span>Self-managed, designed, and shipped · designed + built</span>
          </div>
        </div>
      }
    >
      <div className="[--accent:#0891B2] [--accent-2:#B45309]">

      {/* ══════════════════════════════════════════════════════════════════════
      1. WHY THIS PRODUCT EXISTS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="problem" className="pt-16 lg:pt-24 pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-6`}
        >
          Why this product exists
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className={sectionGrid}
        >
          <div className={sectionLeft}>
            <motion.h3
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground"
            >
              A terminal that stays out of the way — until you need it.
            </motion.h3>
          </div>

          <div className={`${sectionRight} space-y-3`}>
            <motion.ul
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-ink-muted leading-relaxed list-disc pl-5 space-y-1.5"
            >
              <li>In AI-assisted workflows &mdash; Claude Code, Cursor, shell agents alongside Figma, Xcode, a browser &mdash; you alt-tab to a terminal <span className="text-case-highlight font-semibold">dozens of times a day</span>.</li>
              <li>Full windows eat screen space. No terminal was <span className="text-case-highlight font-semibold">designed to be ambient</span>.</li>
              <li>SideNook is that terminal. <span className="text-case-highlight font-semibold">Always there, never in the way.</span> Inspired by the iOS volume HUD &mdash; same surfacing-when-needed, vanishing-when-not principle.</li>
            </motion.ul>
          </div>

          {/* Before/After comparison slider */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className={`${sectionFull} space-y-3`}
          >
            <BeforeAfterSlider
              beforeLabel="macOS Terminal"
              afterLabel="SideNook"
              before={
                <video
                  src="/sidenook/macOS-terminal.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              }
              after={
                <video
                  src="/sidenook/hero-type-2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              }
            />
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-ink-muted text-center">
              Fig. 01 — macOS terminal vs. SideNook v1.0. One you tolerate. One that <span className="text-case-highlight font-semibold">feels designed for you</span>.
            </p>
          </motion.div>

          {/* Problem cards */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className={`${sectionFull}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl p-4 bg-background ring-1 ring-hairline">
                <p className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground mb-1">
                  Problem 01
                </p>
                <p className="text-body font-medium text-foreground">Constant context-switching</p>
                <p className="text-body text-ink-muted mt-1">
                  Alt-tabbing breaks flow. Full terminal windows steal space.
                </p>
              </div>
              <div className="rounded-xl p-4 bg-background ring-1 ring-hairline">
                <p className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground mb-1">
                  Problem 02
                </p>
                <p className="text-body font-medium text-foreground">Desktop-bound</p>
                <p className="text-body text-ink-muted mt-1">
                  Terminals assume a stationary setup. They don&apos;t follow you.
                </p>
              </div>
              <div className="rounded-xl p-4 bg-background ring-1 ring-hairline">
                <p className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground mb-1">
                  Problem 03
                </p>
                <p className="text-body font-medium text-foreground">No ambient mode exists</p>
                <p className="text-body text-ink-muted mt-1">
                  Every terminal demands attention. None were designed to be secondary.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      2. PROCESS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="solution" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-3`}
        >
          Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-base lg:text-lg text-muted-foreground mb-6 max-w-2xl"
        >
          Three phases. <span className="text-case-highlight font-semibold">The animation came before the terminal</span> — on purpose.
        </motion.p>

        {/* ── Phase 1: Feel-first ── */}
        <section className="space-y-12 lg:space-y-16 pb-16 lg:pb-20">
          <PhaseHeader p={phases[0]} idx={0} />

          {/* Before/After mockups */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-label font-mono uppercase tracking-[0.2em] text-muted-foreground/80 px-2 py-0.5 rounded-full ring-1 ring-hairline-strong">
                    Before · early concept
                  </span>
                  <span className="text-xs text-muted-foreground/70">Top-bar layout, single-row tabs.</span>
                </div>
                <div className="rounded-2xl overflow-hidden ring-1 ring-hairline">
                  <SideNookMockBefore />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-label font-mono uppercase tracking-[0.2em] text-white px-2 py-0.5 rounded-full bg-accent">
                    After · v1.0 shipped
                  </span>
                  <span className="text-xs text-muted-foreground/70">
                    Left-rail layout, vertical tab list, CL Notes + Help footer.
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden ring-1 ring-hairline">
                  <SideNookMockAfter />
                </div>
              </div>
            </div>
            <figcaption className="text-body-sm font-mono uppercase tracking-[0.18em] text-ink-muted">
              Fig. 01 — The layout <span className="text-case-highlight font-semibold">changed the product</span>. Vertical tabs gave room for features the top-bar concept never had.
            </figcaption>
          </motion.figure>

          {/* Feature: Status Indicator */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionGrid}
          >
            <div className={sectionLeft}>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">Status Indicator</p>
              <h4 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                A subtle indicator. A surprisingly hard problem.
              </h4>
            </div>
            <div className={`${sectionRight} space-y-3`}>
              <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
                A subtle dot shows connection status, running processes, and available updates — <span className="text-case-highlight font-semibold">visible even when fully collapsed</span>.
              </p>
              <ul className="space-y-1.5 text-body text-ink-muted">
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">▸</span>
                  Live connection status for SSH and local sessions
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">▸</span>
                  Yellow pulse when a process pauses waiting for input
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">▸</span>
                  Panel visibility and auto-hide state at a glance
                </li>
              </ul>
              <p className="text-body lg:text-base text-ink-muted italic leading-relaxed">
                <strong className="text-foreground not-italic">Why:</strong> <span className="text-case-highlight font-semibold">Nothing blocks silently.</span> That principle made the status indicator the hardest feature. The states looked simple on paper; making them reliable was not.
              </p>
            </div>
            <div className={`${sectionFull} rounded-2xl overflow-hidden ring-1 ring-hairline bg-background`}>
              <video src="/sidenook/status-indicator.mp4" autoPlay muted loop playsInline className="w-full h-auto" />
            </div>
          </motion.article>
        </section>

        {/* ── Phase 2: Terminal backend + focus handoff ── */}
        <section className="space-y-12 lg:space-y-16 pb-16 lg:pb-20">
          <PhaseHeader p={phases[1]} idx={1} />

          {/* Constraint callout */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-6 lg:p-8 bg-secondary/40 ring-1 ring-hairline"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-secondary/70 ring-1 ring-hairline text-ink-muted">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                Memorable constraint
              </p>
            </div>
            <p className="text-base lg:text-lg text-ink-muted leading-relaxed mb-5">
              A terminal that <span className="text-case-highlight font-semibold">never steals focus</span> sounds obvious &mdash; until <span className="text-case-highlight font-semibold">AppKit</span> disagrees. On macOS, window activation is deeply assumed by the framework. Every interaction had to pass one test: <em>did clicking this cause an app switch?</em> The non-activating panel required deliberate, non-default technical choices across <span className="text-case-highlight font-semibold">every edge case</span> &mdash; Spaces, fullscreen, Mission Control.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-md bg-background ring-1 ring-hairline-strong text-ink-muted">User clicks panel</span>
              <span className="text-muted-foreground/40 text-base">→</span>
              <span className="px-3 py-1.5 rounded-md bg-background ring-1 ring-hairline-strong text-ink-muted">AppKit activates window</span>
              <span className="text-chartreuse/50 text-base">→</span>
              <span className="px-3 py-1.5 rounded-md bg-chartreuse ring-1 ring-chartreuse-foreground/20 text-chartreuse-foreground font-medium">SideNook intercepts ✗</span>
              <span className="text-muted-foreground/40 text-base">→</span>
              <span className="px-3 py-1.5 rounded-md bg-background ring-1 ring-hairline-strong text-ink-muted">No app switch</span>
            </div>
          </motion.aside>

          {/* Feature: CL Notes */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionGrid}
          >
            <div className={sectionLeft}>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">CL Notes</p>
              <h4 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                A notepad that lives where your terminal is.
              </h4>
            </div>
            <div className={`${sectionRight} space-y-3`}>
              <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
                A persistent monospaced notepad built into the panel. Jot commands without leaving your terminal.
              </p>
              <ul className="space-y-1.5 text-body text-ink-muted">
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">▸</span>
                  Line-number gutter, up to 100 lines
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">▸</span>
                  Inline drawer, popover, or full tab
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">▸</span>
                  Auto-saved on every change
                </li>
              </ul>
              <p className="text-body lg:text-base text-ink-muted italic leading-relaxed">
                <strong className="text-foreground not-italic">Why:</strong> When Claude Code generates a command you&rsquo;ll reuse, you <span className="text-case-highlight font-semibold">shouldn&rsquo;t need another app</span> to save it.
              </p>
            </div>
            <div className={`${sectionFull} rounded-2xl overflow-hidden ring-1 ring-hairline bg-background`}>
              <video src="/sidenook/notes-feature.mp4" autoPlay muted loop playsInline className="w-full h-auto" />
            </div>
          </motion.article>

          {/* Feature: Command Line Help */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionGrid}
          >
            <div className={sectionLeft}>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">Command Line Help</p>
              <h4 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                A command reference you never have to go search for.
              </h4>
            </div>
            <div className={`${sectionRight} space-y-3`}>
              <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
                A searchable command reference from a markdown file. Click any row to run it in the active terminal.
              </p>
              <ul className="space-y-1.5 text-body text-ink-muted">
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">▸</span>
                  Real-time filter as you type
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">▸</span>
                  Resizable drawer — 80 to 384pt
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">▸</span>
                  Click-to-send to active terminal
                </li>
              </ul>
              <p className="text-body lg:text-base text-ink-muted italic leading-relaxed">
                <strong className="text-foreground not-italic">Why:</strong> Claude Code generates commands I don&rsquo;t know yet. Googling them <span className="text-case-highlight font-semibold">breaks flow</span>. A local reference <span className="text-case-highlight font-semibold">keeps me in the terminal</span>.
              </p>
            </div>
            <div className={`${sectionFull} rounded-2xl overflow-hidden ring-1 ring-hairline bg-background`}>
              <video src="/sidenook/command-lines-feature.mp4" autoPlay muted loop playsInline className="w-full h-auto" />
            </div>
          </motion.article>
        </section>

        {/* ── Phase 3: Interactive features ── */}
        <section className="space-y-12 lg:space-y-16 pb-16 lg:pb-20">
          <PhaseHeader p={phases[2]} idx={2} />

          {/* Feature: Multitask */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionGrid}
          >
            <div className={sectionLeft}>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">Multitask</p>
              <h4 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                Split views. Independent sessions. One panel.
              </h4>
            </div>
            <div className={`${sectionRight} space-y-3`}>
              <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
                Run multiple terminal sessions side by side. Watch logs, edit configs, run commands <span className="text-case-highlight font-semibold">without juggling windows</span>.
              </p>
              <ul className="space-y-1.5 text-body text-ink-muted">
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">▸</span>
                  Vertical and horizontal split panes
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">▸</span>
                  Independent shell sessions per pane
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">▸</span>
                  Drag to resize — keyboard shortcuts for quick-switch
                </li>
              </ul>
              <p className="text-body lg:text-base text-ink-muted italic leading-relaxed">
                <strong className="text-foreground not-italic">Why:</strong> Running Claude Code, watching builds, editing configs — one session isn&rsquo;t enough. Split panes <span className="text-case-highlight font-semibold">keep context without spawning more windows</span>.
              </p>
            </div>
            <div className={`${sectionFull} rounded-2xl overflow-hidden ring-1 ring-hairline bg-background`}>
              <video src="/sidenook/multitask.mp4" autoPlay muted loop playsInline className="w-full h-auto" />
            </div>
          </motion.article>

          {/* Feature: Personalize */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionGrid}
          >
            <div className={sectionLeft}>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">Personalize</p>
              <h4 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                Every visual element is tunable. Light and dark are both first-class.
              </h4>
            </div>
            <div className={`${sectionRight} space-y-3`}>
              <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
                Curated themes or custom color palettes. Adjustable opacity, blur, and font controls — <span className="text-case-highlight font-semibold">every visual element is tunable</span>.
              </p>
              <ul className="space-y-1.5 text-body text-ink-muted">
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">▸</span>
                  Curated light and dark themes — independent ANSI palettes
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">▸</span>
                  Custom accent color with live preview
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">▸</span>
                  Adjustable panel opacity, blur, and font controls
                </li>
              </ul>
              <p className="text-body lg:text-base text-ink-muted italic leading-relaxed">
                <strong className="text-foreground not-italic">Why:</strong> Coordinating SideNook&rsquo;s accents with Claude Code&rsquo;s own color system — across both appearances — required a full token architecture. <span className="text-case-highlight font-semibold">No hex values in any component.</span>
              </p>
            </div>
            <div className={`${sectionFull} rounded-2xl overflow-hidden ring-1 ring-hairline bg-background`}>
              <video src="/sidenook/color-custom.mp4" autoPlay muted loop playsInline className="w-full h-auto" />
            </div>
          </motion.article>

          {/* PRD scope growth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionGrid}
          >
            <div className={sectionLeft}>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">Scope growth</p>
              <h4 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                The original plan called for 9 features. By ship day, 14 made it in.
              </h4>
            </div>
            <div className={sectionRight}>
              <ul className="text-base lg:text-lg text-ink-muted leading-relaxed list-disc pl-5 space-y-1.5">
                <li>Scope grew organically as each phase revealed the next.</li>
                <li>Features weren&rsquo;t added from a wishlist — they <span className="text-case-highlight font-semibold">earned their place through use</span>.</li>
                <li>The PRD was a starting point, <span className="text-case-highlight font-semibold">not a contract</span>.</li>
              </ul>
            </div>
            <div className={`${sectionFull} w-full overflow-hidden rounded-xl`}>
              <iframe
                src="/sidenook/prd-evolution.html"
                className="w-full"
                title="SideNook PRD evolution — from original scope to shipped v1.0"
                style={{ border: 0, height: "760px", display: "block" }}
              />
            </div>
          </motion.div>
        </section>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      3. OUTCOMES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="impact" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-6`}
        >
          Outcomes
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {outcomes.map((o, i) => (
              <li key={i} className="flex gap-4 p-5 rounded-xl bg-background ring-1 ring-hairline">
                <span className="text-xs font-mono text-muted-foreground/70 shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-body-sm text-foreground/85 leading-relaxed">{o}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      4. BEHIND THE BUILD
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="reflection" className="pb-24 lg:pb-28 space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={sectionHeader}
        >
          Behind the build
        </motion.h2>

        {/* AI-native workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={sectionGrid}
        >
          <div className={sectionLeft}>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-secondary/70 ring-1 ring-hairline text-ink-muted">
                <Lightbulb className="h-4 w-4" />
              </span>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">AI-native workflow</h3>
            </div>
          </div>
          <div className={sectionRight}>
            <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
              Designed in Figma with <span className="text-foreground/85 font-medium">Claude Design</span>, built entirely with{" "}
              <span className="text-foreground/85 font-medium">Claude Code</span>, including{" "}
              <span className="text-foreground/85 font-medium">Figma MCP</span> for design-to-code. <span className="text-case-highlight font-semibold">Not AI as autocomplete &mdash; AI as a collaborator</span> across every phase: design system decisions, interaction logic, implementation, iteration. The project is as much a proof of concept for AI-native development as it is a terminal tool.
            </p>
          </div>
          <div className={`${sectionFull} w-full overflow-hidden rounded-xl ring-1 ring-hairline`}>
            <iframe
              src="/sidenook/toolchain.html"
              className="w-full"
              title="AI-native toolchain — Figma → Claude Design → Claude Code + Figma MCP → SideNook v1.0"
              style={{ border: 0, height: "120px", display: "block" }}
            />
          </div>
        </motion.div>

        {/* Paths I chose not to take */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-secondary/70 ring-1 ring-hairline text-ink-muted">
              <Lightbulb className="h-4 w-4" />
            </span>
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Paths I chose not to take</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex gap-4 p-5 rounded-xl bg-background ring-1 ring-hairline">
              <span className="text-xs font-mono text-muted-foreground/60 shrink-0 pt-0.5">01</span>
              <div>
                <p className="text-body-sm font-semibold text-foreground/85 mb-1">Ship as a VS Code extension</p>
                <p className="text-sm lg:text-base text-hero-muted leading-relaxed">
                  Faster inside an existing app. But that ties SideNook to a single editor. The goal was a <span className="text-case-highlight font-semibold">system-level tool</span> that works with any terminal-based agent &mdash; Claude Code, Cursor, SSH, whatever comes next.
                </p>
              </div>
            </li>
            <li className="flex gap-4 p-5 rounded-xl bg-background ring-1 ring-hairline">
              <span className="text-xs font-mono text-muted-foreground/60 shrink-0 pt-0.5">02</span>
              <div>
                <p className="text-body-sm font-semibold text-foreground/85 mb-1">Make it paid from day one</p>
                <p className="text-sm lg:text-base text-hero-muted leading-relaxed">
                  <span className="text-case-highlight font-semibold">I built this to learn.</span> Charging before the interaction pattern was proven would&rsquo;ve been premature. Free now, donations welcome. A pro tier makes sense if the model proves out &mdash; but not until the core is undeniable.
                </p>
              </div>
            </li>
            <li className="flex gap-4 p-5 rounded-xl bg-background ring-1 ring-hairline">
              <span className="text-xs font-mono text-muted-foreground/60 shrink-0 pt-0.5">03</span>
              <div>
                <p className="text-body-sm font-semibold text-foreground/85 mb-1">Over-engineer the plugin system before shipping</p>
                <p className="text-sm lg:text-base text-hero-muted leading-relaxed">
                  A plugin architecture would be powerful &mdash; custom commands, integrations, themes. But building infrastructure before knowing what people want <span className="text-case-highlight font-semibold">is how side projects die</span>. Ship the terminal, learn from usage, then open the platform.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* What I'd do differently */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-secondary/70 ring-1 ring-hairline text-ink-muted">
              <AlertTriangle className="h-4 w-4" />
            </span>
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">What I&rsquo;d do differently</h3>
          </div>
          <ul className="space-y-6">
            {differently.map((d) => (
              <li key={d.title} className="space-y-1.5">
                <h4 className="text-base lg:text-lg font-semibold tracking-tight text-foreground">{d.title}</h4>
                <p className="text-body-sm text-ink-muted leading-relaxed">{d.body}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      5. CLOSING
      ═══════════════════════════════════════════════════════════════════════ */}
      <BurgundySection className="pb-32">
        <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] mb-5 text-white">
          Designed &amp; built side by side.
        </h3>
        <p className="text-base lg:text-lg text-white/75 leading-relaxed mb-6 max-w-2xl">
          The product <span className="text-case-highlight font-semibold">and</span> the marketing site — I designed both, end to end. Check it out at <span className="text-case-highlight font-semibold">sidenook.dev</span>.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={LINKS.sidenookDev}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center h-9 gap-1.5 px-2.5 rounded-lg border border-transparent bg-secondary text-secondary-foreground text-sm font-medium whitespace-nowrap transition-all hover:bg-secondary/80"
          >
            View the site
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
          <a
            href={`mailto:${LINKS.email}?subject=SideNook%20case%20study`}
            className="inline-flex shrink-0 items-center justify-center h-9 gap-1.5 px-2.5 rounded-lg border border-white/30 text-sm font-medium whitespace-nowrap transition-all text-white hover:bg-white/10 hover:text-white"
          >
            Email me
          </a>
          <a
            href="/#work"
            className="inline-flex shrink-0 items-center justify-center h-9 gap-1.5 px-2.5 rounded-lg border border-white/30 text-sm font-medium whitespace-nowrap transition-all text-white hover:bg-white/10 hover:text-white"
          >
            More work
          </a>
        </div>
      </BurgundySection>
    </div>
    </CaseStudyTemplatePra>
  )
}
