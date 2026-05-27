"use client"

import type * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Lock, Sparkles, Layers, Workflow, PenLine, Palette, MoveRight } from "lucide-react"
import { VideoCarousel } from "@/components/home/VideoCarousel"
import { LINKS, TOOL_LOGOS } from "@/lib/constants"
import { TooltipIcon } from "@/components/ui/tooltip-icon"
import {
  CaseStudyTemplatePra,
  sectionGrid,
  sectionLeft,
  sectionRight,
  sectionFull,
  sectionHeader,
} from "@/components/case-study/cs-template_2"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

const meta = {
  role: "Product Designer",
  duration: "4 months",
  team: "CPO, CEO, 4 Engineers",
  tools: (
    <div className="flex flex-wrap items-center gap-1.5">
      {["GitHub", "Cursor", "Claude Code", "Claude", "Figma"].map((tool) => {
        const logo = TOOL_LOGOS[tool]
        if (!logo) return null
        return <TooltipIcon key={tool} src={logo} alt={tool} tooltip={tool} className={tool === "V0 by Vercel" ? "h-8 w-8 rounded-sm object-cover object-center" : "h-6 w-6 rounded-sm"} />
      })}
    </div>
  ),
}

type Shipped = {
  icon: React.ComponentType<{ className?: string }>
  eyebrow: string
  title: string
  body: React.ReactNode
}

const shipped: Shipped[] = [
  {
    icon: Workflow,
    eyebrow: "AI agent orchestration",
    title: "Three agents, one conversation.",
    body: <>I built a <span className="text-[#F97316] font-semibold">chat</span> instead of forms. Users describe what they need. The system routes to the right agent. A multi-hour call becomes a <span className="text-[#F97316] font-semibold">five-minute conversation</span>.</>,
  },
  {
    icon: Layers,
    eyebrow: "Organism-level components",
    title: "60+ components built for AI workflows.",
    body: <>Agent configuration cards, workflow status indicators, data extraction previews — built for <span className="text-[#F97316] font-semibold">fullscreen, sidebar, or embedded</span>. Alongside the company's <span className="text-[#F97316] font-semibold">first design system</span>: 8px grid, semantic tokens, language &amp; tone, motion docs.</>,
  },
  {
    icon: Sparkles,
    eyebrow: "AI-native pipeline",
    title: "Figma to engineering in hours.",
    body: <>Figma Design → Figma Make / Magic Patterns → GitHub → Engineering. <span className="text-[#F97316] font-semibold">Prototype-to-production</span> in hours when a customer demo needed it. Storybook gave engineers <span className="text-[#F97316] font-semibold">direct access</span> — no design handoff wait.</>,
  },
]

const quote = {
  body: "Incredibly useful, impossibly confusing to use without a demo.",
  cite: "User during discovery interviews",
}

const userFeedback = {
  body: "This is so cool! It makes perfect sense to make these complex flows chat-friendly. I would have trouble knowing where to start.",
  cite: "User during testing sessions",
}

const cpoQuote = {
  body: "Your design instinct is really strong, and that's hard to teach. The visual design combined with the UX… you did some really good work here.",
  cite: "Scott Cressman, CPO at XY",
}

export default function XYCaseStudy() {
  return (
    <CaseStudyTemplatePra
      meta={meta}
      metaTheme="purple-orange"
      headline={
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2.5 py-1 rounded-full ring-1 ring-foreground/[0.08]">
              Healthcare AI
            </span>
            <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2.5 py-1 rounded-full ring-1 ring-foreground/[0.08]">
              SaaS
            </span>
            <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground inline-flex items-center gap-1">
              <Lock className="h-2.5 w-2.5" />
              NDA
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-foreground leading-[1.05] max-w-4xl">
            Turning a suite of AI agents into a platform anyone can orchestrate.
          </h1>
        </div>
      }
      heroImage={
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-xl">
          <VideoCarousel
            videos={[
              "/xy/IntegrationsHub.mp4",
              "/xy/BrowserAgent.mp4",
              "/xy/DataExtraction.mp4",
              "/xy/KnowledgeBase.mp4",
              "/xy/TeamProductivity.mp4",
            ]}
            interval={4000}
            gradient={{ from: "#485bfc", via: "#7d8bff", to: "#1c1c1c" }}
          />
        </div>
      }
    >

      {/* Purple + orange accent override for this project */}
      <div className="[--accent:#3B3066]">

      {/* ══════════════════════════════════════════════════════════════════════
      1. WHY XY NEEDED A SELF-SERVE AI EXPERIENCE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="background" className="pt-16 lg:pt-24 pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Why XY needed a self-serve AI experience
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
          <div className={sectionFull}>
            <motion.h3
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground"
            >
              XY's platform runs on <span className="text-[#F97316] font-semibold">AI agents</span> — but configuring them required a <span className="text-[#F97316] font-semibold">sales call</span>.
            </motion.h3>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-base lg:text-lg text-muted-foreground leading-relaxed"
            >
              Verification, scheduling, claims — the agents could handle it all. But every hour sales spent walking users through setup was an hour they couldn&rsquo;t sell. I had four months to change that.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`${sectionFull} space-y-6`}
          >
            <div className="p-6 lg:p-8">
              <p className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground mb-5">
                Three things standing in the way
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-background ring-1 ring-foreground/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-accent/[0.08] flex items-center justify-center shrink-0">
                    <span className="text-accent font-semibold text-sm font-mono">01</span>
                  </div>
                  <p className="text-sm text-foreground leading-snug">AI agents required a <span className="text-[#F97316]">human to configure</span></p>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-background ring-1 ring-foreground/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-accent/[0.08] flex items-center justify-center shrink-0">
                    <span className="text-accent font-semibold text-sm font-mono">02</span>
                  </div>
                  <p className="text-sm text-foreground leading-snug">UI <span className="text-[#F97316]">built for engineers</span>, not healthcare teams</p>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-background ring-1 ring-foreground/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-accent/[0.08] flex items-center justify-center shrink-0">
                    <span className="text-accent font-semibold text-sm font-mono">03</span>
                  </div>
                  <p className="text-sm text-foreground leading-snug">No orchestration <span className="text-[#F97316]">without a sales call</span></p>
                </div>
              </div>
            </div>

            <blockquote className="pl-4 border-l-2 border-accent/60 text-body-sm text-muted-foreground italic leading-relaxed">
              &ldquo;{quote.body}&rdquo;
              <span className="block mt-1 not-italic text-label font-mono uppercase tracking-[0.12em] text-muted-foreground/70">
                — {quote.cite}
              </span>
            </blockquote>

            {/* User types diagram */}
            <div className="relative w-full overflow-hidden rounded-xl ring-1 ring-foreground/[0.06]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/xy/user-types.png"
                alt="XY.AI user types — personas and roles that interact with the AI agent platform"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      2. DISCOVERY & RESEARCH
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="discovery" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Discovery &amp; Research
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
              I started by talking to healthcare operations teams. <span className="text-[#F97316] font-semibold">Three patterns</span> surfaced in every conversation.
            </motion.h3>
          </div>

          <div className={`${sectionRight} space-y-4`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed"
            >
              Before writing any code or designing any screens, I needed to understand how healthcare teams actually thought about AI agents. The platform was powerful — but was anyone using it without hand-holding?
            </motion.p>
          </div>

          {/* Research pattern cards */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`${sectionFull} space-y-6`}
          >
            <div className="p-6 lg:p-8">
              <p className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground mb-5">
                Patterns that defined the problem
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-accent/[0.08] flex items-center justify-center">
                    <span className="text-accent font-semibold text-xl font-mono tabular-nums">01</span>
                  </div>
                  <p className="text-foreground font-semibold text-sm">Agents were <span className="text-[#F97316]">abstract</span> — teams couldn&rsquo;t describe their setup until they saw it</p>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-accent/[0.08] flex items-center justify-center">
                    <span className="text-accent font-semibold text-xl font-mono tabular-nums">02</span>
                  </div>
                  <p className="text-foreground font-semibold text-sm">Different workflows, <span className="text-[#F97316]">same bottleneck</span> — configuration was the blocker</p>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-accent/[0.08] flex items-center justify-center">
                    <span className="text-accent font-semibold text-xl font-mono tabular-nums">03</span>
                  </div>
                  <p className="text-foreground font-semibold text-sm">&ldquo;I&rsquo;d need a <span className="text-[#F97316]">demo</span>&rdquo; came up in <span className="text-[#F97316]">every</span> single conversation</p>
                </div>
              </div>
            </div>

            {/* Key insight blockquote */}
            <blockquote className="pl-4 border-l-2 border-accent/60 text-body-sm text-muted-foreground italic leading-relaxed">
              The problem wasn&rsquo;t the UI&rsquo;s quality. Users couldn&rsquo;t define what they needed until they saw what was possible. A forms-based approach asked them to configure something they&rsquo;d never encountered before.
              <span className="block mt-1 not-italic text-label font-mono uppercase tracking-[0.12em] text-muted-foreground/70">
                — Key research insight
              </span>
            </blockquote>

            {/* Design directions explored */}
            <p className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground mb-3">
              Three directions I explored
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-background ring-1 ring-foreground/[0.06] space-y-2">
                <span className="text-xs font-mono text-muted-foreground/60">Direction A</span>
                <p className="text-sm font-semibold text-foreground">Forms-first</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Traditional configuration forms with dropdowns and fields. Familiar but didn&rsquo;t solve the discovery problem.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background ring-1 ring-foreground/[0.06] space-y-2">
                <span className="text-xs font-mono text-muted-foreground/60">Direction B</span>
                <p className="text-sm font-semibold text-foreground">Wizard / guided setup</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Step-by-step wizard that walked users through configuration. Helped onboarding but felt rigid for ongoing use.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F97316]/[0.08] ring-1 ring-[#F97316]/20 space-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0">
                  <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#F97316] bg-[#F97316]/[0.1] px-2 py-0.5 rounded-bl-lg rounded-tr-xl">
                    Chosen
                  </span>
                </div>
                <span className="text-xs font-mono text-muted-foreground/60">Direction C</span>
                <p className="text-sm font-semibold text-foreground">Chat-first</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A conversational interface where users describe what they need. Natural, explorable, and self-serve.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      3. BUILDING THE FOUNDATION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="building-the-foundation" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Building the Foundation
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
              Before scaling the product, I built the <span className="text-[#F97316] font-semibold">design foundations</span> the company needed.
            </motion.h3>
          </div>

          <div className={`${sectionRight} space-y-4`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed"
            >
              XY had never had a dedicated designer. There was no design system, no token architecture, no language guide — just engineers making UI decisions. Before I could ship, I needed to lay the groundwork that every future screen would depend on.
            </motion.p>
          </div>

          {/* Foundation pillars */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`${sectionFull} space-y-6`}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Design tokens */}
              <div className="p-4 rounded-xl bg-background ring-1 ring-foreground/[0.06] space-y-2 text-center">
                <div className="flex justify-center">
                  <Layers className="h-5 w-5 text-[#F97316]" />
                </div>
                <p className="text-sm font-semibold text-foreground leading-snug">Semantic tokens for AI workflows</p>
              </div>

              {/* Language & tone guide */}
              <div className="p-4 rounded-xl bg-background ring-1 ring-foreground/[0.06] space-y-2 text-center">
                <div className="flex justify-center">
                  <PenLine className="h-5 w-5 text-[#F97316]" />
                </div>
                <p className="text-sm font-semibold text-foreground leading-snug">Writing guidelines for AI-facing UI</p>
              </div>

              {/* Color schemes & theming */}
              <div className="p-4 rounded-xl bg-background ring-1 ring-foreground/[0.06] space-y-2 text-center">
                <div className="flex justify-center">
                  <Palette className="h-5 w-5 text-[#F97316]" />
                </div>
                <p className="text-sm font-semibold text-foreground leading-snug">Light, dark, and agent theming</p>
              </div>

              {/* Motion & interaction */}
              <div className="p-4 rounded-xl bg-background ring-1 ring-foreground/[0.06] space-y-2 text-center">
                <div className="flex justify-center">
                  <MoveRight className="h-5 w-5 text-[#F97316]" />
                </div>
                <p className="text-sm font-semibold text-foreground leading-snug">Interaction patterns that feel deliberate</p>
              </div>
            </div>

            {/* Color system study — full-page iframe embed */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`${sectionFull} space-y-4`}
            >
              <p className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground mb-3">
                Color system study
              </p>
              <div className="relative w-full overflow-hidden rounded-xl ring-1 ring-foreground/[0.06] bg-black">
                <video
                  src="/xy/color-system.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                  <p className="text-label font-semibold text-foreground mb-1">What this is</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    The complete color token system — primitives, semantic tokens, accessibility audit, and proposed system
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                  <p className="text-label font-semibold text-foreground mb-1">Why it matters</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Every component, every agent status, every interaction maps to this semantic system — no more guessing hex values
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                  <p className="text-label font-semibold text-foreground mb-1">The result</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    A three-tier token system that lets engineers theme any new component without design input
                  </p>
                </div>
              </div>
            </motion.div>

            <blockquote className="pl-4 border-l-2 border-accent/60 text-body-sm text-muted-foreground italic leading-relaxed">
              Every design system decision was made with the same question: &ldquo;Does this make the next screen faster to ship?&rdquo; If the answer wasn&rsquo;t yes, it didn&rsquo;t go in.
              <span className="block mt-1 not-italic text-label font-mono uppercase tracking-[0.12em] text-muted-foreground/70">
                — Design principle
              </span>
            </blockquote>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      4. WHAT I SHIPPED
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="shipped" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          What I Shipped
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="space-y-16 lg:space-y-20"
        >
          {shipped.map((s, idx) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.eyebrow}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={sectionGrid}
              >
                <div className={sectionLeft}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-foreground/[0.04] ring-1 ring-foreground/[0.06] text-foreground/70">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                      {String(idx + 1).padStart(2, "0")} · {s.eyebrow}
                    </p>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                    {s.title}
                  </h3>
                </div>
                <div className={`${sectionRight} space-y-5`}>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">{s.body}</p>
                </div>

                {/* Storybook visual artifact — only on the components section */}
                {idx === 1 && (
                  <motion.div
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className={`${sectionFull} space-y-4`}
                  >
                    <div className="relative w-full overflow-hidden rounded-xl ring-1 ring-foreground/[0.06]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/xy/storybook.png"
                        alt="XY.AI Storybook component library — 60+ production-ready components for AI workflows"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                        <p className="text-label font-semibold text-foreground mb-1">What this shows</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          The 60+ component library, documented and ready for engineering
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                        <p className="text-label font-semibold text-foreground mb-1">Why it matters</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Components designed for AI-agent interaction patterns — not generic UI
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                        <p className="text-label font-semibold text-foreground mb-1">The result</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Engineers pulled components directly from Storybook without designer intervention
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}

          {/* Tool logos — AI-native stack */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto"
          >
            <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
              AI-native design stack
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 py-6 flex-wrap">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-[#3B3066]/[0.08] ring-2 ring-[#3B3066]/20 p-2.5">
                <img src="/logos/figma.png" alt="Figma" className="h-full w-full object-contain" />
              </div>
              <span className="text-xl text-[#F97316]/70 font-light select-none">→</span>
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-[#3B3066]/[0.08] ring-2 ring-[#3B3066]/20 p-2.5">
                <img src="/logos/cursor.png" alt="Cursor" className="h-full w-full object-contain" />
              </div>
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-[#3B3066]/[0.08] ring-2 ring-[#3B3066]/20 p-2.5">
                <img src="/logos/claude-code.png" alt="Claude Code" className="h-full w-full object-contain" />
              </div>
              <span className="text-xl text-[#F97316]/70 font-light select-none">→</span>
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-[#3B3066]/[0.08] ring-2 ring-[#3B3066]/20 p-2.5">
                <img src="/logos/github.png" alt="GitHub" className="h-full w-full object-contain" />
              </div>
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-[#3B3066]/[0.08] ring-2 ring-[#3B3066]/20 p-2.5">
                <img src="/logos/storybook.svg" alt="Storybook" className="h-full w-full object-contain" />
              </div>
            </div>
            <p className="text-center text-xs font-mono uppercase tracking-[0.12em] text-muted-foreground/60">
              Figma Design → Figma Make / Magic Patterns → GitHub → Engineering  ·  Tracked in Linear
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      5. TESTING & VALIDATION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="testing" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Testing &amp; Validation
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
              Before committing to chat-first, I validated the direction with <span className="text-[#F97316] font-semibold">real users</span>.
            </motion.h3>
          </div>

          <div className={`${sectionRight} space-y-4`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed"
            >
              Three rounds of validation across different user groups, each designed to stress-test the chat-first hypothesis from a different angle.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`${sectionFull} space-y-6`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-background ring-1 ring-foreground/[0.06] space-y-2 text-center">
                <span className="text-xs font-mono text-muted-foreground/60">Round 1</span>
                <p className="text-sm font-semibold text-foreground leading-snug">Healthcare ops interviews — chat metaphor <span className="text-[#F97316]">clicked immediately</span></p>
              </div>
              <div className="p-4 rounded-xl bg-background ring-1 ring-foreground/[0.06] space-y-2 text-center">
                <span className="text-xs font-mono text-muted-foreground/60">Round 2</span>
                <p className="text-sm font-semibold text-foreground leading-snug">Enterprise prospects <span className="text-[#F97316]">understood in minutes</span> — no engineering support needed</p>
              </div>
              <div className="p-4 rounded-xl bg-background ring-1 ring-foreground/[0.06] space-y-2 text-center">
                <span className="text-xs font-mono text-muted-foreground/60">Round 3</span>
                <p className="text-sm font-semibold text-foreground leading-snug">Sales team could <span className="text-[#F97316]">demo independently</span> — a company first</p>
              </div>
            </div>

            <blockquote className="pl-4 border-l-2 border-accent/60 text-body-sm text-muted-foreground italic leading-relaxed">
              Users who saw the chat interface immediately understood the agent model — something the forms-based approach couldn&rsquo;t achieve in a single session. The CEO began pitching the self-serve AI experience directly to enterprise customers.
              <span className="block mt-1 not-italic text-label font-mono uppercase tracking-[0.12em] text-muted-foreground/70">
                — Validation outcome
              </span>
            </blockquote>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      6. IMPACT & RESULTS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="impact" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Impact &amp; Results
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base lg:text-lg text-muted-foreground mb-10 max-w-2xl">
            Users orchestrated agents themselves. That self-serve UX became a <span className="text-[#F97316] font-semibold">core sales asset</span>.
          </p>

          <ul className="space-y-3 mb-12 list-disc pl-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
            <li>The <span className="text-[#F97316] font-semibold">CEO pitched</span> the AI orchestration experience directly — no engineer needed.</li>
            <li>Production-ready AI workflow components wired to Temporal for <span className="text-[#F97316] font-semibold">live agent orchestration</span>.</li>
            <li>Self-serve AI experience became central to how the <span className="text-[#F97316] font-semibold">sales team closes deals</span>.</li>
          </ul>

          {/* User feedback quote */}
          <blockquote className="pl-5 border-l-2 border-accent/60 text-base lg:text-lg text-muted-foreground italic leading-relaxed mb-10">
            &ldquo;{userFeedback.body}&rdquo;
            <span className="block mt-1.5 not-italic text-label font-mono uppercase tracking-[0.12em] text-muted-foreground/70">
              — {userFeedback.cite}
            </span>
          </blockquote>

          {/* CPO quote */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/[0.06] to-background ring-1 ring-accent/[0.08] p-8 lg:p-12">
            <span
              aria-hidden
              className="absolute top-2 right-4 lg:top-0 lg:right-8 text-[12rem] lg:text-[18rem] font-bold leading-none text-accent/[0.04] select-none pointer-events-none"
            >
              &rdquo;
            </span>
            <figure className="relative z-10">
              <blockquote className="text-2xl lg:text-3xl xl:text-4xl leading-[1.2] text-foreground font-medium tracking-tight">
                &ldquo;{cpoQuote.body}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-accent">
                <span className="h-px w-6 bg-accent/30" />
                {cpoQuote.cite}
              </figcaption>
            </figure>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      7. INTERNAL PRACTICES INTRODUCED
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="practices" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Internal Practices Introduced
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base lg:text-lg text-muted-foreground mb-8 max-w-2xl">
            I was the <span className="text-[#F97316] font-semibold">only designer</span>, reporting directly to the CPO and CEO. The workflow was <span className="text-[#F97316] font-semibold">mine to own</span>.
          </p>

          <ul className="space-y-5">
            <li className="flex gap-5 p-5 rounded-xl bg-background ring-1 ring-foreground/[0.06]">
              <span className="text-xs font-mono text-muted-foreground/70 shrink-0 pt-0.5">01</span>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Design-to-engineering pipeline ownership</p>
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  <span className="text-[#F97316] font-semibold">Linear</span> tracked every move from Figma to production. Clear tickets, estimates, review cycles.
                </p>
              </div>
            </li>
            <li className="flex gap-5 p-5 rounded-xl bg-background ring-1 ring-foreground/[0.06]">
              <span className="text-xs font-mono text-muted-foreground/70 shrink-0 pt-0.5">02</span>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Rigorous design standards</p>
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  The company's <span className="text-[#F97316] font-semibold">first design practice</span>: 8px grid, semantic tokens, typography, spacing, language &amp; tone, motion documentation.
                </p>
              </div>
            </li>
            <li className="flex gap-5 p-5 rounded-xl bg-background ring-1 ring-foreground/[0.06]">
              <span className="text-xs font-mono text-muted-foreground/70 shrink-0 pt-0.5">03</span>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">AI-powered workflow tracking via Claude MCP</p>
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  <span className="text-[#F97316] font-semibold">Claude MCP</span> connected Figma to production in <span className="text-[#F97316] font-semibold">hours, not sprints</span>.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      8. CLOSING
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl p-8 lg:p-10 bg-foreground text-background"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] mb-4">
            Want a walkthrough?
          </h3>
          <p className="text-base lg:text-lg text-background/75 leading-relaxed mb-6 max-w-2xl">
            I&rsquo;ll walk you through the AI agent orchestration flow, the 60+ component library, and the AI-native pipeline that took this from prototype to production.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href={`mailto:${LINKS.email}?subject=XY.AI%20case%20study`}
              className="inline-flex shrink-0 items-center justify-center h-9 gap-1.5 px-2.5 rounded-lg border border-transparent bg-secondary text-secondary-foreground text-sm font-medium whitespace-nowrap transition-all hover:bg-secondary/80"
            >
              Email me
              <Sparkles className="ml-1 h-4 w-4" />
            </a>
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.14em] text-background/40 mb-4">
            More case studies
          </p>
          <div className="flex flex-wrap gap-2">
            {([
              { href: "/work/fundr", label: "Fundr" },
              { href: "/work/waldo", label: "Waldo" },
              { href: "/work/7dish", label: "7dish" },
              { href: "/work/sidenook", label: "SideNook" },
            ]).map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-background/10 text-background/80 hover:bg-background/20 hover:text-background transition-colors"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      </div>
      {/* end purple + orange override */}
    </CaseStudyTemplatePra>
  )
}
