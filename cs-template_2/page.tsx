"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowUpRight,
  Sparkles,
  Lightbulb,
  AlertTriangle,
  Quote,
} from "lucide-react"
import { LINKS } from "@/lib/constants"
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
  role: "Product Designer (placeholder)",
  industry: "Placeholder · token-saver",
  duration: "Lorem ipsum",
  team: "Designer + 3 Engineers",
  tools: "Figma, FigJam, Notion",
}

const heroPlaceholder = (
  <div className="relative w-full h-full min-h-[30vh] max-h-[40vh] bg-gradient-to-br from-foreground/[0.08] via-foreground/[0.04] to-foreground/[0.02] flex items-center justify-center ring-1 ring-foreground/[0.06] rounded-xl overflow-hidden">
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 25% 30%, rgba(204,255,0,0.3), transparent 50%), radial-gradient(circle at 75% 70%, rgba(0,0,0,0.2), transparent 50%)",
      }}
    />
    <div className="relative z-10 text-center px-6">
      <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-2">
        Hero Image Placeholder
      </p>
      <p className="text-xs text-muted-foreground/70 max-w-xs mx-auto leading-relaxed">
        Replace with a screenshot, mockup, or brand visual. Full-width, ~40vh.
      </p>
    </div>
  </div>
)

export default function CsTemplateTwoProto() {
  return (
    <CaseStudyTemplatePra
      meta={meta}
      heroImage={heroPlaceholder}
      headline={
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-[-0.02em] leading-[1.02] text-foreground"
        >
          A headline that{" "}
          <span className="italic text-chartreuse">means something</span>{" "}
          about this project
        </motion.h1>
      }
    >
      <div id="solution">
        {/* ══════════════════════════════════════════════════════════════════════
        1. OVERVIEW — two-column pattern
        ═══════════════════════════════════════════════════════════════════════ */}
        <section id="overview" className="pt-16 lg:pt-24 pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Why this project exists
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
              Business problem first — user problem inside business context.
            </motion.h3>
          </div>

          <div className={`${sectionRight} space-y-3`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed"
            >
              ~3 sentence problem. Tight, no fluff. &ldquo;Why I was brought in&rdquo; + &ldquo;what was blocking
              business success.&rdquo; User problem lives inside business context.
            </motion.p>
          </div>

          {/* Placeholder diagram */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className={`${sectionFull} space-y-3`}
          >
            <div className="rounded-2xl overflow-hidden ring-1 ring-foreground/[0.08] bg-foreground/[0.03] p-8">
              <svg viewBox="0 0 600 160" className="w-full text-foreground" aria-label="User flow diagram placeholder">
                <rect x="20" y="55" width="100" height="50" rx="8" className="fill-foreground/[0.08]" />
                <text x="70" y="85" textAnchor="middle" className="fill-foreground/80" fontSize="12">Start</text>
                <line x1="120" y1="80" x2="170" y2="80" className="stroke-foreground/20" strokeWidth="2" />
                <polygon points="165,75 175,80 165,85" className="fill-foreground/20" />
                <rect x="175" y="50" width="120" height="60" rx="8" className="fill-foreground/[0.10]" />
                <text x="235" y="80" textAnchor="middle" className="fill-foreground/80" fontSize="11">Browse items</text>
                <polygon points="340,80 360,60 380,80 360,100" className="fill-foreground/[0.06]" />
                <rect x="435" y="55" width="100" height="50" rx="8" className="fill-foreground/[0.08]" />
                <text x="485" y="85" textAnchor="middle" className="fill-foreground/80" fontSize="11">Complete</text>
              </svg>
            </div>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground text-center">
              Fig. 01 — Visual artifact placeholder. Flow diagrams, screenshots, or data visuals go here.
            </p>
          </motion.div>
        </motion.div>
      </section>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
      2. PULL QUOTE
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pb-20"
      >
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-5">
          Pull Quote
        </p>
        <figure className="border-l-2 border-chartreuse pl-6 lg:pl-8 max-w-3xl">
          <blockquote className="text-xl lg:text-2xl xl:text-3xl leading-[1.25] text-foreground font-medium tracking-tight">
            &ldquo;Placeholder text that reframes the project as business strategy, not just UX work. This is
            an external expert who gives the case study external credibility.&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
            — Name, Title at Company
          </figcaption>
        </figure>
      </motion.section>

      {/* ══════════════════════════════════════════════════════════════════════
      3. CONSTRAINTS — two-column + card as artifact
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="constraints" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Constraints
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
              Three constraints that shaped every decision.
            </motion.h3>
          </div>
          <div className={sectionRight}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed"
            >
              The constraints that defined the design space — and where I had to push back.
            </motion.p>
          </div>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionFull}
          >
            <div className="rounded-2xl p-8 lg:p-10 bg-foreground/[0.04] ring-1 ring-foreground/[0.08]">
              <ul className="space-y-5">
                {([
                  {
                    title: "No self-service path",
                    detail:
                      "Every plan change required a 1:1 sales call. Users waited days for a button&rsquo;s worth of work.",
                  },
                  {
                    title: "Confusing pricing tiers",
                    detail:
                      "Plans blended together. Best-value options invisible. No annual incentive surfaced.",
                  },
                  {
                    title: "Free tier didn&rsquo;t sell premium",
                    detail:
                      "The free experience was too limited to demonstrate value. Users churned before they saw what paid unlocked.",
                  },
                ] as const).map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="shrink-0 flex items-center justify-center h-7 w-7 rounded-full bg-foreground/[0.06] text-xs font-semibold text-foreground/80">
                      {String(i + 1)}
                    </span>
                    <div>
                      <h4 className="text-base font-semibold tracking-tight text-foreground">
                        {s.title}
                      </h4>
                      <p className="text-sm text-foreground/80 leading-relaxed mt-1">
                        {s.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      4. CHALLENGE 1 — two-column + visual artifact
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="challenge-1" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-3`}
        >
          Challenge 01
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-base lg:text-lg text-muted-foreground mb-16 max-w-2xl"
        >
          Problem one-liner — what this challenge was about.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="space-y-12 lg:space-y-16"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={sectionGrid}>
            <div className={sectionLeft}>
              <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                User flow diagram — problem one-liner.
              </h3>
            </div>
            <div className={sectionRight}>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                What I did (2-3 sentences). Research/data that drove the decision.
              </p>
            </div>

            {/* Visual artifact */}
            <div className={`${sectionFull} space-y-4`}>
              <div className="rounded-2xl overflow-hidden ring-1 ring-foreground/[0.08] bg-foreground/[0.03] p-8">
                <svg viewBox="0 0 600 200" className="w-full text-foreground" aria-label="User flow diagram placeholder">
                  <rect x="20" y="75" width="100" height="50" rx="8" className="fill-foreground/[0.08]" />
                  <text x="70" y="105" textAnchor="middle" className="fill-foreground/80" fontSize="12">Start</text>
                  <line x1="120" y1="100" x2="170" y2="100" className="stroke-foreground/20" strokeWidth="2" />
                  <polygon points="165,95 175,100 165,105" className="fill-foreground/20" />
                  <rect x="175" y="70" width="120" height="60" rx="8" className="fill-foreground/[0.10]" />
                  <text x="235" y="100" textAnchor="middle" className="fill-foreground/80" fontSize="11">Browse items</text>
                  <polygon points="340,100 360,80 380,100 360,120" className="fill-foreground/[0.06]" />
                  <rect x="435" y="75" width="100" height="50" rx="8" className="fill-foreground/[0.08]" />
                  <text x="485" y="105" textAnchor="middle" className="fill-foreground/80" fontSize="11">Complete</text>
                </svg>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {([
                  { label: "What this shows", text: "The decision point users hit at browse" },
                  { label: "Why it matters", text: "Reduced drop-off by simplifying the yes/no" },
                  { label: "The result", text: "42% more completed flows in testing" },
                ] as const).map((a) => (
                  <div key={a.label} className="p-4 rounded-xl bg-foreground/[0.03] ring-1 ring-foreground/[0.06]">
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-chartreuse/80 mb-1.5">
                      {a.label}
                    </p>
                    <p className="text-sm text-foreground/80 leading-snug">{a.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      5. IMPACT
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="impact" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Impact
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-2xl p-8 lg:p-10 bg-foreground text-background mb-5">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-background/50 mb-2">
              Headline metric
            </p>
            <div className="flex items-baseline gap-4">
              <span className="text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-none">
                68%
              </span>
              <span className="text-base lg:text-lg text-background/70 max-w-xs">
                reduction in time-to-complete the core user flow
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {([
              { num: "~40%", label: "Increase in user satisfaction" },
              { num: "50%", label: "Fewer support tickets" },
              { num: "2x", label: "Faster onboarding completion" },
            ] as const).map((m) => (
              <div key={m.label} className="p-5 rounded-xl bg-foreground/[0.03] ring-1 ring-foreground/[0.06]">
                <p className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">{m.num}</p>
                <p className="text-sm text-foreground/80 mt-1.5 leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      6. CONTROVERSY — two-column
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="controversy" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          The Controversy
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
              What was controversial — and how data resolved it.
            </motion.h3>
          </div>
          <div className={`${sectionRight} space-y-5`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl bg-foreground/[0.04] ring-1 ring-foreground/[0.06]">
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Stakeholder position
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  &ldquo;We should keep the existing flow. Users are used to it.&rdquo;
                </p>
              </div>
              <div className="p-5 rounded-xl bg-foreground/[0.04] ring-1 ring-foreground/[0.06]">
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Data-backed position
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  &ldquo;Testing shows 68% abandon at step 2. The data says change.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      7. WHAT I'D DO DIFFERENTLY
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="reflection" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          What I&rsquo;d Do Differently
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ul className="space-y-6">
            {([
              {
                title: "Analytics setup before v1.",
                body: "Pushed for telemetry earlier. Without it, design decisions were educated guesses, not measurements.",
              },
              {
                title: "Earlier accessibility audit.",
                body: "VoiceOver support is complex — but not optional for a professional product.",
              },
            ] as const).map((d, i) => (
              <li key={i}>
                <h4 className="text-base lg:text-lg font-semibold tracking-tight text-foreground">
                  {d.title}
                </h4>
                <p className="text-sm text-foreground/75 leading-relaxed mt-1">{d.body}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      8. TEMPLATE SECTIONS LEGEND
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pb-32"
      >
        <div className="rounded-2xl p-8 lg:p-10 bg-foreground text-background">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-background/50 mb-4">
            Template sections
          </p>
          <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] mb-6">
            Editorial-style case study sections
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-background/80">
            {([
              "Editorial hero headline",
              "Business-first overview",
              "Pull quote (expert reframe)",
              "Constraints card",
              "Challenge-by-challenge arcs",
              "Impact headline + metrics",
              "Controversy / persuasion arc",
              "What I'd do differently",
            ] as const).map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-chartreuse shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </CaseStudyTemplatePra>
  )
}
