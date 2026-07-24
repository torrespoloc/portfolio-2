"use client"

import type * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Lock, Sparkles, Layers } from "lucide-react"
import { VideoCarousel } from "@/components/home/VideoCarousel"
import { LINKS, TOOL_LOGOS } from "@/lib/constants"
import { TooltipIcon } from "@/components/ui/tooltip-icon"
import {
  CaseStudyTemplatePra,
  CaseStudySection,
  CaseStudySectionFullBleed,
  EmptySection,
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
  role: "AI Product Designer",
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
  title: string
  body: React.ReactNode
}

const shipped: Shipped[] = [
  {
    icon: Layers,
    title: "60+ components built for AI workflows.",
    body: <>Agent configuration cards, workflow status indicators, data extraction previews, built for <span className="text-case-highlight font-semibold">fullscreen, sidebar, or embedded</span>. Alongside the company&rsquo;s <span className="text-case-highlight font-semibold">first design system</span>: 8px grid, semantic tokens, language &amp; tone, motion docs.</>,
  },
  {
    icon: Sparkles,
    title: "Figma to engineering in hours.",
    body: <>Figma Design → Figma Make / Magic Patterns → GitHub → Engineering. <span className="text-case-highlight font-semibold">Prototype-to-production</span> in hours when a customer demo needed it. Storybook gave engineers <span className="text-case-highlight font-semibold">direct access</span>, no design handoff wait.</>,
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
            <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2.5 py-1 ring-1 ring-hero-border">
              Healthcare AI
            </span>
            <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2.5 py-1 ring-1 ring-hero-border">
              SaaS
            </span>
            <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground inline-flex items-center gap-1">
              <Lock className="h-2.5 w-2.5" />
              NDA
            </span>
            <span className="text-label font-mono uppercase tracking-[0.08em] text-chartreuse-foreground bg-chartreuse px-2.5 py-1 rounded-full">
              NDA-friendly
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-foreground leading-[1.05] max-w-4xl">
            Turning a suite of AI agents into a platform anyone can orchestrate.
          </h1>
        </div>
      }
      heroImage={
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden ">
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
      <div className="accent-xy">

      {/* ══════════════════════════════════════════════════════════════════════
      1. WHY XY NEEDED A SELF-SERVE AI EXPERIENCE
      ═══════════════════════════════════════════════════════════════════════ */}
      <CaseStudySection id="problem">
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3">Context</p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className={`${sectionGrid} gap-8 lg:gap-10`}
        >
          <div className={sectionLeft}>
            <motion.h3
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground"
            >
              XY's platform runs on <span className="text-case-highlight font-semibold">AI agents</span>, but configuring them required a <span className="text-case-highlight font-semibold">sales call</span>.
            </motion.h3>
          </div>
          <div className={`${sectionRight} space-y-4`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-ink-muted leading-relaxed"
            >
              Verification, scheduling, claims, the agents could handle it all. But every hour sales spent walking users through setup was an hour they couldn&rsquo;t sell. I had four months to change that.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`${sectionFull} space-y-0`}
          >
            <div className="p-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden ring-1 ring-hairline bg-hairline">
                <div className="flex items-center gap-3 bg-background p-3">
                  <div className="w-10 h-10 rounded-full bg-accent/[0.08] flex items-center justify-center shrink-0">
                    <span className="text-case-eyebrow font-semibold text-sm font-mono">01</span>
                  </div>
                  <p className="text-sm text-foreground leading-snug">AI agents required a <span className="text-case-highlight">human to configure</span></p>
                </div>
                <div className="flex items-center gap-3 bg-background p-3">
                  <div className="w-10 h-10 rounded-full bg-accent/[0.08] flex items-center justify-center shrink-0">
                    <span className="text-case-eyebrow font-semibold text-sm font-mono">02</span>
                  </div>
                  <p className="text-sm text-foreground leading-snug">UI <span className="text-case-highlight">built for engineers</span>, not healthcare teams</p>
                </div>
                <div className="flex items-center gap-3 bg-background p-3">
                  <div className="w-10 h-10 rounded-full bg-accent/[0.08] flex items-center justify-center shrink-0">
                    <span className="text-case-eyebrow font-semibold text-sm font-mono">03</span>
                  </div>
                  <p className="text-sm text-foreground leading-snug">No orchestration <span className="text-case-highlight">without a sales call</span></p>
                </div>
              </div>
            </div>

            <blockquote className="pl-4 border-l-2 border-accent/60 text-body text-ink-muted italic leading-relaxed">
              &ldquo;{quote.body}&rdquo;
              <span className="block mt-1 not-italic text-label font-mono uppercase tracking-[0.12em] text-ink-muted">
, {quote.cite}
              </span>
            </blockquote>

          </motion.div>
        </motion.div>
      </CaseStudySection>

      <EmptySection />

      {/* ══════════════════════════════════════════════════════════════════════
      2. DISCOVERY & RESEARCH
      ═══════════════════════════════════════════════════════════════════════ */}
      <CaseStudySection id="discovery">
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3">Research</p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className={`${sectionGrid} space-y-0`}
        >
          <div className={sectionLeft}>
            <motion.h3
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground max-w-4xl"
            >
              Nurses and admin staff both needed the same thing: a way to <span className="text-case-highlight font-semibold">see what AI could do</span> before they were asked to configure it.
            </motion.h3>
          </div>
          <div className={`${sectionRight} space-y-4`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-ink-muted leading-relaxed"
            >
              Two main user groups emerged from research: <span className="text-case-highlight font-semibold">nurses</span> managing patient workflows and <span className="text-case-highlight font-semibold">admin staff</span> handling scheduling, claims, and verifications. The recurring blocker wasn&rsquo;t trust. It was abstraction. Both groups needed examples before setup.
            </motion.p>
          </div>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`${sectionFull} space-y-4`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden ring-1 ring-hairline bg-hairline">
              <div className="p-3 rounded-none bg-background">
                <p className="text-label font-semibold text-foreground mb-1">What I learned</p>
                <p className="text-body text-ink-muted leading-relaxed">
                  Users couldn&rsquo;t describe an agent setup until they saw one.
                </p>
              </div>
              <div className="p-3 rounded-none bg-background">
                <p className="text-label font-semibold text-foreground mb-1">Shared blocker</p>
                <p className="text-body text-ink-muted leading-relaxed">
                  Different roles, same friction: configuration was too abstract.
                </p>
              </div>
              <div className="p-3 rounded-none bg-background">
                <p className="text-label font-semibold text-foreground mb-1">Why it mattered</p>
                <p className="text-body text-ink-muted leading-relaxed">
                  Every workflow still depended on a sales-led demo.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </CaseStudySection>

      <EmptySection />

      {/* ══════════════════════════════════════════════════════════════════════
      3. ITERATION
      ═══════════════════════════════════════════════════════════════════════ */}
      <CaseStudySection id="iteration">
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3">Iteration</p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className={`${sectionGrid} gap-8 lg:gap-10`}
        >
          <div className={sectionLeft}>
            <motion.h3
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground max-w-4xl"
            >
              I reframed setup as <span className="text-case-highlight font-semibold">conversation</span>, not configuration.
            </motion.h3>
          </div>
          <div className={`${sectionRight} space-y-4`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-ink-muted leading-relaxed"
            >
              I explored forms, a guided wizard, and chat. Chat won because it let users discover possibilities while they configured.
            </motion.p>
          </div>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`${sectionFull} space-y-4`}
          >
            <div className="relative w-full overflow-hidden  ring-1 ring-hairline bg-background">
              <img
                src="/xy/webp/xy-platform.webp"
                alt="XY platform concept showing a chat-first assistant beside the product workspace"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden ring-1 ring-hairline bg-hairline">
              <div className="p-3 rounded-none bg-background">
                <p className="text-label font-semibold text-foreground mb-1">Discarded</p>
                <p className="text-body text-ink-muted leading-relaxed">
                  Forms-first felt familiar, but it still assumed users knew what to ask for.
                </p>
              </div>
              <div className="p-3 rounded-none bg-background">
                <p className="text-label font-semibold text-foreground mb-1">Also tested</p>
                <p className="text-body text-ink-muted leading-relaxed">
                  A wizard improved onboarding, but it was too rigid for ongoing use.
                </p>
              </div>
              <div className="p-3 rounded-none bg-background">
                <p className="text-label font-semibold text-foreground mb-1">Chosen</p>
                <p className="text-body text-ink-muted leading-relaxed">
                  Chat let users explore, clarify, and self-serve in the same flow.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </CaseStudySection>

      <EmptySection />

      {/* ══════════════════════════════════════════════════════════════════════
      4. BUILDING THE FOUNDATION
      ═══════════════════════════════════════════════════════════════════════ */}
      <CaseStudySection id="building-the-foundation">
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3">Design</p>

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
              className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground"
            >
              Before scaling the product, I built the <span className="text-case-highlight font-semibold">design foundations</span> the company needed.
            </motion.h3>
          </div>

          <div className={`${sectionRight} space-y-4`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-ink-muted leading-relaxed"
            >
              XY had never had a dedicated designer, just engineers making UI decisions. Before I could ship, I needed the foundations every screen would depend on:
            </motion.p>
            <ul className="space-y-1.5 list-disc pl-5 text-base lg:text-lg text-ink-muted leading-relaxed">
              <li>A design system &amp; semantic token architecture</li>
              <li>Writing guidelines for AI-facing UI</li>
              <li>Light, dark, and agent theming</li>
              <li>Interaction patterns that feel deliberate</li>
            </ul>
          </div>


            {/* Color system study, full-page iframe embed */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`${sectionFull} space-y-4`}
            >
              <div className="relative w-full overflow-hidden  ring-1 ring-hairline bg-black">
                <video
                  src="/xy/color-system.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden ring-1 ring-hairline bg-hairline">
                <div className="p-3 rounded-none bg-background">
                  <p className="text-label font-semibold text-foreground mb-1">What this is</p>
                  <p className="text-body text-ink-muted leading-relaxed">
                    The complete color token system, primitives, semantic tokens, accessibility audit, and proposed system
                  </p>
                </div>
                <div className="p-3 rounded-none bg-background">
                  <p className="text-label font-semibold text-foreground mb-1">Why it matters</p>
                  <p className="text-body text-ink-muted leading-relaxed">
                    Every component, every agent status, every interaction maps to this semantic system, no more guessing hex values
                  </p>
                </div>
                <div className="p-3 rounded-none bg-background">
                  <p className="text-label font-semibold text-foreground mb-1">The result</p>
                  <p className="text-body text-ink-muted leading-relaxed">
                    A three-tier token system that lets engineers theme any new component without design input
                  </p>
                </div>
              </div>
            </motion.div>

            <blockquote className="pl-4 border-l-2 border-accent/60 text-body text-ink-muted italic leading-relaxed">
              Every design system decision was made with the same question: &ldquo;Does this make the next screen faster to ship?&rdquo; If the answer wasn&rsquo;t yes, it didn&rsquo;t go in.
              <span className="block mt-1 not-italic text-label font-mono uppercase tracking-[0.12em] text-ink-muted">
, Design principle
              </span>
            </blockquote>
          </motion.div>
      </CaseStudySection>

      <EmptySection />

      {/* ══════════════════════════════════════════════════════════════════════
      4. WHAT I SHIPPED
      ═══════════════════════════════════════════════════════════════════════ */}
      <CaseStudySection id="solution">
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3">Solution</p>

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
                key={idx}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={sectionGrid}
              >
                <div className={sectionLeft}>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                    {s.title}
                  </h3>
                </div>
                <div className={`${sectionRight} space-y-5`}>
                  <p className="text-base lg:text-lg text-ink-muted leading-relaxed">{s.body}</p>
                </div>

                {/* Storybook visual artifact, only on the components section */}
                {idx === 0 && (
                  <motion.div
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className={`${sectionFull} space-y-4`}
                  >
                    <div className="relative w-full overflow-hidden  ring-1 ring-hairline">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/xy/webp/storybook.webp"
                        alt="XY.AI Storybook component library, 60+ production-ready components for AI workflows"
                        loading="lazy"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden ring-1 ring-hairline bg-hairline">
                      <div className="p-3 rounded-none bg-background">
                        <p className="text-label font-semibold text-foreground mb-1">What this shows</p>
                        <p className="text-body text-ink-muted leading-relaxed">
                          The 60+ component library, documented and ready for engineering
                        </p>
                      </div>
                      <div className="p-3 rounded-none bg-background">
                        <p className="text-label font-semibold text-foreground mb-1">Why it matters</p>
                        <p className="text-body text-ink-muted leading-relaxed">
                          Components designed for AI-agent interaction patterns, not generic UI
                        </p>
                      </div>
                      <div className="p-3 rounded-none bg-background">
                        <p className="text-label font-semibold text-foreground mb-1">The result</p>
                        <p className="text-body text-ink-muted leading-relaxed">
                          Engineers pulled components directly from Storybook without designer intervention
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}

          {/* Tool logos, AI-native stack */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto"
          >
            <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-ink-muted mb-6">
              AI-native design stack
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 py-6 flex-wrap">
              <div className="flex items-center justify-center h-16 w-16  bg-accent/[0.08] ring-2 ring-accent/20 p-2.5">
                <img src="/logos/figma.png" alt="Figma" loading="lazy" className="h-full w-full object-contain" />
              </div>
              <span className="text-xl text-case-highlight/70 font-light select-none">→</span>
              <div className="flex items-center justify-center h-16 w-16  bg-accent/[0.08] ring-2 ring-accent/20 p-2.5">
                <img src="/logos/cursor.png" alt="Cursor" loading="lazy" className="h-full w-full object-contain" />
              </div>
              <div className="flex items-center justify-center h-16 w-16  bg-accent/[0.08] ring-2 ring-accent/20 p-2.5">
                <img src="/logos/claude-code.png" alt="Claude Code" loading="lazy" className="h-full w-full object-contain" />
              </div>
              <span className="text-xl text-case-highlight/70 font-light select-none">→</span>
              <div className="flex items-center justify-center h-16 w-16  bg-accent/[0.08] ring-2 ring-accent/20 p-2.5">
                <img src="/logos/github.png" alt="GitHub" loading="lazy" className="h-full w-full object-contain" />
              </div>
              <div className="flex items-center justify-center h-16 w-16  bg-accent/[0.08] ring-2 ring-accent/20 p-2.5">
                <img src="/logos/storybook.svg" alt="Storybook" loading="lazy" className="h-full w-full object-contain" />
              </div>
            </div>
            <p className="text-center text-xs font-mono uppercase tracking-[0.12em] text-ink-muted">
              Figma Design → Figma Make / Magic Patterns → GitHub → Engineering  ·  Tracked in Linear
            </p>
          </motion.div>
        </motion.div>
      </CaseStudySection>

      <EmptySection />

      {/* ══════════════════════════════════════════════════════════════════════
      5. TESTING & VALIDATION
      ═══════════════════════════════════════════════════════════════════════ */}
      <CaseStudySection id="testing">
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3">Validation</p>

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
              className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground"
            >
              Before committing to chat-first, the <span className="text-case-highlight font-semibold">CEO ran three rounds of demos</span> to validate the self-serve AI experience with enterprise prospects.
            </motion.h3>
          </div>

          <div className={`${sectionRight} space-y-4`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-ink-muted leading-relaxed"
            >
              Three rounds of live demos with enterprise prospects, each building on the previous. I designed the experience but the CEO carried every conversation, I never talked to clients directly.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`${sectionFull} space-y-6`}
          >
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-4  bg-background ring-1 ring-hairline">
                <span className="text-3xl font-bold text-case-highlight">10 demos</span>
                <span className="text-body text-ink-muted">across 3 rounds, each validated the chat-first approach</span>
              </div>
            </div>

              <blockquote className="pl-4 border-l-2 border-accent/60 text-body text-ink-muted italic leading-relaxed">
                Every demo confirmed the same thing: once people saw the chat interface, the agent model clicked. The forms-based approach needed a guided walkthrough every time. The CEO didn&rsquo;t need me in the room, the design spoke for itself.
                <span className="block mt-1 not-italic text-label font-mono uppercase tracking-[0.12em] text-ink-muted">
, What the CEO reported back
                </span>
              </blockquote>
          </motion.div>
        </motion.div>
      </CaseStudySection>

      <EmptySection />

      {/* ══════════════════════════════════════════════════════════════════════
      6. IMPACT & RESULTS
      ═══════════════════════════════════════════════════════════════════════ */}
      <CaseStudySection id="impact">
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3">Impact</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base lg:text-lg text-ink-muted mb-6 max-w-2xl">
            Users orchestrated agents themselves. That self-serve UX became a <span className="text-case-highlight font-semibold">core sales asset</span>.
          </p>

          <ul className="space-y-3 mb-6 list-disc pl-5 text-base lg:text-lg text-ink-muted leading-relaxed">
            <li>The <span className="text-case-highlight font-semibold">CEO pitched</span> the AI orchestration experience directly, no engineer needed.</li>
            <li>Production-ready AI workflow components wired to Temporal for <span className="text-case-highlight font-semibold">live agent orchestration</span>.</li>
            <li>Self-serve AI experience became central to how the <span className="text-case-highlight font-semibold">sales team closes deals</span>.</li>
          </ul>

          {/* User feedback quote */}
          <blockquote className="pl-5 border-l-2 border-accent/60 text-base lg:text-lg text-ink-muted italic leading-relaxed mb-6">
            &ldquo;{userFeedback.body}&rdquo;
            <span className="block mt-1.5 not-italic text-label font-mono uppercase tracking-[0.12em] text-ink-muted">
, {userFeedback.cite}
            </span>
          </blockquote>

          {/* CPO quote */}
          <div className="relative overflow-hidden  bg-gradient-to-br from-accent/[0.06] to-background ring-1 ring-accent/[0.08] pt-8 lg:pt-12">
            <span
              aria-hidden
              className="absolute top-2 right-4 lg:top-0 lg:right-8 text-[12rem] lg:text-[18rem] font-bold leading-none text-case-eyebrow/[0.04] select-none pointer-events-none"
            >
              &rdquo;
            </span>
            <figure className="relative z-10">
              <blockquote className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-[1.2] text-foreground font-medium tracking-tight">
                &ldquo;{cpoQuote.body}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-2 text-body-sm font-mono uppercase tracking-[0.18em] text-case-eyebrow">
                <span className="h-px w-6 bg-accent/30" />
                {cpoQuote.cite}
              </figcaption>
            </figure>
          </div>
        </motion.div>
      </CaseStudySection>

      <EmptySection />

      {/* ══════════════════════════════════════════════════════════════════════
      7. INTERNAL PRACTICES INTRODUCED
      ═══════════════════════════════════════════════════════════════════════ */}
      <CaseStudySection id="reflection">
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3">Reflection</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-body text-ink-muted mb-6 max-w-2xl">
            I was the <span className="text-case-highlight font-semibold">only designer</span>, reporting directly to the CPO and CEO. The workflow was <span className="text-case-highlight font-semibold">mine to own</span>.
          </p>

          <ul className="space-y-5">
            <li className="flex gap-5 bg-background">
              <span className="text-body-sm font-mono text-ink-muted shrink-0 pt-0.5">01</span>
              <div>
                <p className="text-body font-semibold text-foreground mb-1">Design-to-engineering pipeline ownership</p>
                <p className="text-body text-ink-muted leading-relaxed">
                  <span className="text-case-highlight font-semibold">Linear</span> tracked every move from Figma to production. Clear tickets, estimates, review cycles.
                </p>
              </div>
            </li>
            <li className="flex gap-5 bg-background">
              <span className="text-body-sm font-mono text-ink-muted shrink-0 pt-0.5">02</span>
              <div>
                <p className="text-body font-semibold text-foreground mb-1">Rigorous design standards</p>
                <p className="text-body text-ink-muted leading-relaxed">
                  The company's <span className="text-case-highlight font-semibold">first design practice</span>: 8px grid, semantic tokens, typography, spacing, language &amp; tone, motion documentation.
                </p>
              </div>
            </li>
            <li className="flex gap-5 bg-background">
              <span className="text-body-sm font-mono text-ink-muted shrink-0 pt-0.5">03</span>
              <div>
                <p className="text-body font-semibold text-foreground mb-1">AI-powered workflow tracking via Claude MCP</p>
                <p className="text-body text-ink-muted leading-relaxed">
                  <span className="text-case-highlight font-semibold">Claude MCP</span> connected Figma to production in <span className="text-case-highlight font-semibold">hours, not sprints</span>.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </CaseStudySection>

      <EmptySection />

      {/* ══════════════════════════════════════════════════════════════════════
      8. CLOSING
      ═══════════════════════════════════════════════════════════════════════ */}
      <CaseStudySectionFullBleed>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className=" p-8 lg:p-10 bg-foreground text-background"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.08em] text-chartreuse-foreground bg-chartreuse px-3 py-1 mb-3">
            NDA-friendly
          </span>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] mb-4">
            Want a walkthrough?
          </h3>
          <p className="text-base lg:text-lg text-background/75 leading-relaxed max-w-2xl">
            Here&rsquo;s what I&rsquo;d love to walk you through:
          </p>
          <ul className="space-y-1.5 list-disc pl-5 max-w-2xl text-base lg:text-lg text-background/75 leading-relaxed mb-6">
            <li>The AI agent orchestration flow</li>
            <li>The 60+ component library</li>
            <li>The AI-native pipeline from prototype to production</li>
          </ul>
          <div className="flex flex-wrap gap-3 mb-6">
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
      </CaseStudySectionFullBleed>

      </div>
      {/* end purple + orange override */}
    </CaseStudyTemplatePra>
  )
}
