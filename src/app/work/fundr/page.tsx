"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
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
  role: "UX/UI Designer (contract)",
  duration: "10 weeks · Sep–Nov 2023",
  team: "CEO + 1 Engineer",
  tools: (
    <div className="flex flex-wrap items-center gap-1.5">
      {["Figma", "Notion", "ChatGPT"].map((tool) => {
        const logo = TOOL_LOGOS[tool]
        if (!logo) return null
        return <TooltipIcon key={tool} src={logo} alt={tool} tooltip={tool} className="h-6 w-6 rounded-sm" />
      })}
    </div>
  ),
}

const outcomes: React.ReactNode[] = [
  <>
    <span className="text-accent-2 font-semibold">20%</span> increase in upgrade rates through improved
    financial dashboard UI
  </>,
  <>
    <span className="text-accent-2 font-semibold">~50%</span> reduction in negative feedback by redesigning
    navigation for embedded experiences
  </>,
  <>
    <span className="text-accent-2 font-semibold">~50%</span> decrease in required sales calls via
    self-serve monetization design
  </>,
  <>
    Expected <span className="text-accent-2 font-semibold">5%</span> client-base growth within 6 months of launch
  </>,
]

const quote = {
  body: "Pricing affects the bottom line nearly 4x over acquisition. Monetization has a 12.7% impact on the bottom line compared to 3.32% from customer acquisition.",
  cite: "Patrick Campbell",
}

export default function FundrCaseStudy() {
  return (
    <CaseStudyTemplatePra
      meta={meta}
      heroImage={
        <video
          src="/fundr/hero-screen.mp4"
          poster="/fundr/hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      }
      headline={
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2.5 py-1 rounded-full ring-1 ring-foreground/[0.08]">
              Fintech
            </span>
            <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2.5 py-1 rounded-full ring-1 ring-foreground/[0.08]">
              SaaS
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-foreground leading-[1.05] max-w-4xl">
            Replacing a sales-call funnel with a paywall users can navigate themselves.
          </h1>
        </div>
      }
    >
      <div className="[--accent:#059669] [--accent-2:#D97706]">

      {/* ══════════════════════════════════════════════════════════════════════
      1. WHY FUNDR NEEDED A REDESIGN
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="problem" className="pt-16 lg:pt-24 pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Why Fundr needed a redesign
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
              Fundr needed to monetize without alienating users — but the product had no upgrade path.
            </motion.h3>
          </div>

          <div className={`${sectionRight} space-y-4`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-foreground/70 leading-relaxed"
            >
              Every plan change ran through a <span className="text-accent-2 font-semibold">1:1 sales call</span>. Users waited days for a human to flip a switch.
              The pricing was confusing, the low tiers didn’t justify upgrading, and there was no self-service
              path. I had <span className="text-accent-2 font-semibold">ten weeks</span> to design one.
            </motion.p>
          </div>

          {/* Constraints card + user quote */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`${sectionFull} space-y-6`}
          >
            <div className="p-6 lg:p-8">
              <p className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground mb-5">
                Three things standing in the way
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-accent/[0.08] flex items-center justify-center">
                    <span className="text-accent font-semibold text-xl font-mono tabular-nums">01</span>
                  </div>
                  <p className="text-body font-semibold text-foreground">Sales calls for every upgrade</p>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-accent/[0.08] flex items-center justify-center">
                    <span className="text-accent font-semibold text-xl font-mono tabular-nums">02</span>
                  </div>
                  <p className="text-body font-semibold text-foreground">Confusing pricing structure</p>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-accent/[0.08] flex items-center justify-center">
                    <span className="text-accent font-semibold text-xl font-mono tabular-nums">03</span>
                  </div>
                  <p className="text-body font-semibold text-foreground">Free tier too limited to sell upgrades</p>
                </div>
              </div>
            </div>

            <blockquote className="pl-4 border-l-2 border-accent/60 text-body text-foreground/70 italic leading-relaxed">
              “I didn’t even know there were paid plans. I’ve been on the same tier since I signed up.”
              <span className="block mt-1 not-italic text-label font-mono uppercase tracking-[0.12em] text-foreground/70">
                — User during discovery interviews
              </span>
            </blockquote>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      2. PULL QUOTE
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pb-20"
      >
        <div className="rounded-xl bg-foreground/[0.03] ring-1 ring-foreground/[0.06] p-8 lg:p-10">
          <figure>
            <blockquote className="text-xl lg:text-2xl xl:text-3xl leading-[1.25] text-foreground/90 font-medium tracking-tight">
              “{quote.body}”
            </blockquote>
            <figcaption className="mt-5 text-body-sm font-mono uppercase tracking-[0.18em] text-foreground/70">
              — {quote.cite}
            </figcaption>
          </figure>
          <p className="mt-6 text-body lg:text-base text-foreground/70 leading-relaxed max-w-2xl border-t border-foreground/[0.06] pt-6">
            This reframed the project from “UI cleanup” to a{" "}
            <span className="text-accent-2 font-semibold">business-critical decision</span>.
            Pricing surface was <span className="text-accent-2 font-semibold">the lever</span> — not polish.
          </p>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════════════════════
      3. THE UPGRADE FLOW
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="solution" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          The Upgrade Flow
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
              Every path leads to checkout — here’s the full picture.
            </motion.h3>
          </div>

          <div className={sectionRight}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-foreground/70 leading-relaxed"
            >
              Before diving into individual surfaces, it’s worth seeing how the pieces connect.
              The upgrade flow has <span className="text-accent-2 font-semibold">three entry points</span> — a
              scrollable sales funnel, feature-specific popups, and situational upgrade prompts — all
              converging into a single checkout. Users can start from anywhere and finish in under a minute.
            </motion.p>
          </div>

          {/* Diagram + caption cards */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`${sectionFull} space-y-4`}
          >
            <div className="overflow-hidden rounded-xl ring-1 ring-foreground/[0.06]">
              <iframe
                src="/fundr/diagram.html"
                title="Fundr upgrade flow — from CTA to checkout"
                style={{ border: 0, display: "block" }}
                ref={(el) => {
                  if (!el) return;
                  const parent = el.parentElement!;
                  const containerW = parent.clientWidth;
                  const scale = Math.min(1, containerW / 1160);
                  el.style.width = "1160px";
                  el.style.height = "820px";
                  el.style.transform = `scale(${scale})`;
                  el.style.transformOrigin = "top left";
                  parent.style.height = `${820 * scale}px`;
                }}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                <p className="text-label font-semibold text-foreground mb-1">What this shows</p>
                <p className="text-body text-foreground/70 leading-relaxed">
                  How all three CTA paths converge into a single checkout
                </p>
              </div>
              <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                <p className="text-label font-semibold text-foreground mb-1">Why it matters</p>
                <p className="text-body text-foreground/70 leading-relaxed">
                  Multiple entry points, one consistent upgrade experience
                </p>
              </div>
              <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                <p className="text-label font-semibold text-foreground mb-1">The result</p>
                <p className="text-body text-foreground/70 leading-relaxed">
                  Users can enter from any surface and complete in under a minute
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      4. CTA STRATEGY
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="cta-strategy" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-3`}
        >
          CTA Strategy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-base lg:text-lg text-foreground/70 mb-16 max-w-2xl"
        >
          Three upgrade surfaces that don’t interrupt the workflow.
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
          {/* The problem + What I did + Research */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={sectionGrid}>
            <div className={sectionLeft}>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-foreground/[0.04] ring-1 ring-foreground/[0.06] text-foreground/70">
                  <Sparkles className="h-4 w-4" />
                </span>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  The problem
                </p>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                Users who wanted to upgrade hit a wall.
              </h3>
            </div>
            <div className={`${sectionRight} space-y-5`}>
              <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                Users who wanted to upgrade <span className="text-accent-2 font-semibold">hit a wall</span> — a generic “Contact Sales” link and days of waiting.
              </p>

              <div>
                <p className="text-label font-mono uppercase tracking-[0.14em] text-muted-foreground mb-2">
                  What I did
                </p>
                <ul className="space-y-2 text-body text-foreground/75">
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">▸</span>
                    <span><strong className="text-foreground/80 font-medium">Collapsible status menu</strong> — feature access at a glance, expanded by default</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">▸</span>
                    <span><strong className="text-foreground/80 font-medium">Static CTA buttons</strong> — accessible from every page so users never hunt for the upgrade path</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">▸</span>
                    <span><strong className="text-foreground/80 font-medium">Triggered popup cards</strong> — let users keep working without losing context</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-label font-mono uppercase tracking-[0.14em] text-muted-foreground mb-1">
                  Research
                </p>
                <p className="text-body lg:text-base text-foreground/75 leading-relaxed">
                  Systems with <span className="text-accent-2 font-semibold">combined CTA methods</span> outperform
                  single-method approaches — and the most effective pattern bridges the gap between
                  the CTA and the conversion point with the right information at the right time.
                </p>
              </div>
            </div>

            {/* CTA image + caption cards */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`${sectionFull} space-y-4`}
            >
              <div className="relative w-full overflow-hidden rounded-xl ring-1 ring-foreground/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/fundr/cta-types.png"
                  alt="Fundr CTA types — collapsible menu, static buttons, and popup upgrade cards"
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                  <p className="text-label font-semibold text-foreground mb-1">What this shows</p>
                  <p className="text-body text-foreground/70 leading-relaxed">
                    Three CTA types layered by user intent — glance, browse, and act
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                  <p className="text-label font-semibold text-foreground mb-1">Why it matters</p>
                  <p className="text-body text-foreground/70 leading-relaxed">
                    Each surface serves a different moment without overwhelming the interface
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                  <p className="text-label font-semibold text-foreground mb-1">The result</p>
                  <p className="text-body text-foreground/70 leading-relaxed">
                    Self-serve upgrades that don’t interrupt the user’s flow
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      5. THE CORE MECHANISM
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="spv-infographic" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          The Core Mechanism
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
              What users are upgrading for — SPVs, explained.
            </motion.h3>
          </div>

          <div className={`${sectionRight} space-y-5`}>
            <div>
              <p className="text-label font-mono uppercase tracking-[0.14em] text-muted-foreground mb-1">
                The problem
              </p>
              <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                Fundr’s platform centers on Special Purpose Vehicles — the investment structure
                that lets investors pool capital into a single startup. Most users <span className="text-accent-2 font-semibold">didn’t understand what an SPV was</span> or how capital flowed through it.{" "}
                <span className="text-accent-2 font-semibold">Upgrade prompts had no context</span> — users
                couldn’t value what they couldn’t visualize.
              </p>
            </div>

            <div>
              <p className="text-label font-mono uppercase tracking-[0.14em] text-muted-foreground mb-2">
                What I did
              </p>
              <ul className="space-y-2 text-body text-foreground/75">
                <li className="flex gap-2">
                  <span className="text-foreground/70 mt-1 shrink-0">▸</span>
                  <span><strong className="text-foreground/80 font-medium">Designed an infographic</strong> breaking down who’s involved, how capital moves, and what happens at each stage</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground/70 mt-1 shrink-0">▸</span>
                  <span><strong className="text-foreground/80 font-medium">Connected it to upgrade triggers</strong> — premium unlocks more SPV data, deeper analytics, and priority access</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground/70 mt-1 shrink-0">▸</span>
                  <span><strong className="text-foreground/80 font-medium">Placed after CTAs</strong> — users see the infographic right after an upgrade prompt, bridging curiosity to understanding</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SPV Infographic + caption cards */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`${sectionFull} space-y-4`}
          >
            <div className="relative w-full overflow-hidden rounded-xl ring-1 ring-foreground/[0.06]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/fundr/SPVs-infographic.png"
                alt="Fundr SPV infographic — breakdown of Special Purpose Vehicle structure and capital flow"
                className="w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                <p className="text-label font-semibold text-foreground mb-1">What this shows</p>
                <p className="text-body text-foreground/70 leading-relaxed">
                  The SPV structure — investors, capital flow, and the startup relationship
                </p>
              </div>
              <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                <p className="text-label font-semibold text-foreground mb-1">Why it matters</p>
                <p className="text-body text-foreground/70 leading-relaxed">
                  Users understand the core mechanism before they consider paying for premium access
                </p>
              </div>
              <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                <p className="text-label font-semibold text-foreground mb-1">The result</p>
                <p className="text-body text-foreground/70 leading-relaxed">
                  Upgrade prompts now carry context — users know exactly what they’re unlocking
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      6. PRICING REDESIGN
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="pricing" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-3`}
        >
          Pricing Redesign
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-base lg:text-lg text-foreground/70 mb-16 max-w-2xl"
        >
          Confusing tiers, made deliberate.
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
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-foreground/[0.04] ring-1 ring-foreground/[0.06] text-foreground/70">
                  <Sparkles className="h-4 w-4" />
                </span>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  The problem
                </p>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                A single pricing table that mixed investor and startup features — making both segments feel the product <span className="text-accent-2 font-semibold">wasn’t built for them</span>.
              </h3>
            </div>
            <div className={`${sectionRight} space-y-5`}>
              <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                Fundr’s pricing page was a single table that mixed investor features with startup
                features — making both segments feel the product <span className="text-accent-2 font-semibold">wasn’t built for them</span>.
              </p>

              <div>
                <p className="text-label font-mono uppercase tracking-[0.14em] text-muted-foreground mb-2">
                  What I did
                </p>
                <ul className="space-y-2 text-body text-foreground/75">
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">▸</span>
                    <span><strong className="text-foreground/80 font-medium">Two separate pricing paths</strong> — investors and startups on different pages, each with tailored features</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">▸</span>
                    <span><strong className="text-foreground/80 font-medium">Best-value option highlighted</strong> — users see which plan gives them the most without guessing</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">▸</span>
                    <span><strong className="text-foreground/80 font-medium">Transparent fees up-front</strong> — annual plan incentives, clear per-user pricing, no hidden costs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing visual + user quote */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`${sectionFull} space-y-5`}
            >
              <div className="relative w-full overflow-hidden rounded-xl ring-1 ring-foreground/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/fundr/pricing-page.png"
                  alt="Fundr pricing page — separate investor and startup paths"
                  className="w-full h-auto"
                />
              </div>
              <blockquote className="pl-4 border-l-2 border-accent/60 text-body text-foreground/70 italic leading-relaxed">
                “Wait — I can actually see what each plan costs without guessing. That’s… clear.”
                <span className="block mt-1 not-italic text-label font-mono uppercase tracking-[0.12em] text-foreground/70">
                  — User testing the pricing page prototype
                </span>
              </blockquote>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      7. THE CONTROVERSY
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
              One pricing page or two?
            </motion.h3>
          </div>
          <div className={sectionRight}>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl bg-burgundy/[0.06] ring-1 ring-burgundy/20 p-5 lg:p-6"
            >
              <p className="text-body text-foreground/85 leading-relaxed">
                The CEO wanted one unified pricing page — simplicity was a core value, and two paths
                risked surface complexity. I mapped both user journeys, showed where investor and startup
                needs diverged, and <span className="text-accent-2 font-semibold">the data won</span>.
                We shipped two pricing paths.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      8. TIERED DASHBOARD
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="dashboard" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-3`}
        >
          Tiered Dashboard
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-base lg:text-lg text-foreground/70 mb-16 max-w-2xl"
        >
          A free tier worth using. A premium tier worth paying for.
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
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-foreground/[0.04] ring-1 ring-foreground/[0.06] text-foreground/70">
                  <Sparkles className="h-4 w-4" />
                </span>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  The problem
                </p>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                The free tier was a demo, not a product — so limited that users couldn’t evaluate whether Fundr was right for them.
              </h3>
            </div>
            <div className={`${sectionRight} space-y-5`}>
              <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                The free tier was a demo, not a product — so limited that users <span className="text-accent-2 font-semibold">couldn’t evaluate whether Fundr was right for them</span>.
              </p>

              <div>
                <p className="text-label font-mono uppercase tracking-[0.14em] text-muted-foreground mb-2">
                  What I did
                </p>
                <ul className="space-y-2 text-body text-foreground/75">
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">▸</span>
                    <span><strong className="text-foreground/80 font-medium">Basic tier</strong> — genuinely useful features with upgrade triggers at natural ceilings</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">▸</span>
                    <span><strong className="text-foreground/80 font-medium">Premium tier</strong> — advanced graphs, expanded data, and priority support that extends how you work in the free tier</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">▸</span>
                    <span><strong className="text-foreground/80 font-medium">The trigger</strong> — users hit a natural ceiling in the free tier and decide for themselves whether the upgrade is worth it</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-label font-mono uppercase tracking-[0.14em] text-muted-foreground mb-1">
                  Why this approach
                </p>
                <p className="text-body lg:text-base text-foreground/75 leading-relaxed">
                  SaaS users convert when they <span className="text-accent-2 font-semibold">experience value firsthand</span>.
                  A free tier worth using builds trust. A premium tier worth paying for converts without pressure.
                </p>
              </div>
            </div>

            {/* Dashboard comparison — Basic vs Premium */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`${sectionFull} space-y-4`}
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="relative w-full overflow-hidden rounded-xl ring-1 ring-foreground/[0.06]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/fundr/dashboard-basic.png"
                    alt="Fundr Basic dashboard — core features at the free tier"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-label font-mono uppercase tracking-[0.14em] text-white/90">
                      Basic tier
                    </p>
                  </div>
                </div>
                <div className="relative w-full overflow-hidden rounded-xl ring-1 ring-foreground/[0.06]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/fundr/dashboard-premium.png"
                    alt="Fundr Premium dashboard — advanced graphs, expanded data"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-label font-mono uppercase tracking-[0.14em] text-white/90">
                      Premium tier
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                  <p className="text-label font-semibold text-foreground mb-1">What this shows</p>
                  <p className="text-body text-foreground/70 leading-relaxed">
                    Side-by-side comparison of free vs paid dashboard experience
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-background ring-1 ring-foreground/[0.04]">
                  <p className="text-label font-semibold text-foreground mb-1">Why it matters</p>
                  <p className="text-body text-foreground/70 leading-relaxed">
                    Users see exactly what they gain — not just what they’re missing
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      9. BEFORE → AFTER
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="before-after" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Before → After
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base lg:text-lg text-foreground/70 mb-10 max-w-2xl">
            Three shifts that changed the upgrade experience.
          </p>
          <div className="space-y-4">
            {([
              { before: "Sales call required for every upgrade", after: "Self-service upgrade in 3 clicks" },
              { before: "Pricing hidden behind login and account settings", after: "Transparent pricing on every CTA surface" },
              { before: "One confusing tier table for all user types", after: "Two tailored paths — investor and startup" },
            ] as const).map((pair, i) => (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 sm:gap-6 items-center p-4 lg:p-5 rounded-xl bg-background ring-1 ring-foreground/[0.06]"
              >
                <div className="text-body text-foreground/70 leading-snug">
                  <span className="text-label font-mono uppercase tracking-[0.12em] text-destructive/70 block mb-1">Before</span>
                  {pair.before}
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-accent text-lg font-semibold leading-none">→</span>
                </div>
                <div className="text-body text-foreground leading-snug">
                  <span className="text-label font-mono uppercase tracking-[0.12em] text-status-success-text/70 block mb-1">After</span>
                  {pair.after}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      10. IMPACT
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
          <p className="text-base lg:text-lg text-foreground/70 mb-10 max-w-2xl">
            Fewer sales calls. More upgrades. <span className="text-accent-2 font-semibold">A pricing surface that does its own selling.</span>
          </p>
          <ul className="space-y-4">
            {outcomes.map((o, i) => (
              <motion.li
                key={i}
                whileHover={{ y: -2, scale: 1.005 }}
                className="flex gap-5 p-6 lg:p-7 rounded-xl bg-accent/[0.06] ring-1 ring-accent/20 hover:bg-accent/[0.10] hover:ring-accent/30 hover:shadow-lg transition-all duration-500 ease-[0.22,1,0.36,1]"
              >
                <span className="text-2xl lg:text-3xl font-semibold text-accent/30 shrink-0 pt-0.5 font-mono tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-body lg:text-lg text-foreground/85 leading-relaxed">{o}</p>
              </motion.li>
            ))}
          </ul>
          <blockquote className="mt-8 pl-4 border-l-2 border-accent/60 text-body text-foreground/70 italic leading-relaxed">
            “I just upgraded myself. It took like 20 seconds. Last time I had to email
            support and wait three days.”
            <span className="block mt-1 not-italic text-label font-mono uppercase tracking-[0.12em] text-foreground/70">
              — Beta user, first week after launch
            </span>
          </blockquote>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      11. WHAT I'D DO DIFFERENTLY
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="reflection" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          What I’d Do Differently
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base lg:text-lg text-foreground/70 mb-8 max-w-2xl">
            Hindsight and the next version.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4 p-5 rounded-xl bg-background ring-1 ring-foreground/[0.06]">
              <span className="text-accent font-semibold text-sm shrink-0 mt-0.5">01</span>
              <div>
                <p className="text-body text-foreground/85 leading-relaxed">
                  <strong className="text-foreground font-semibold">Push for <span className="text-accent-2 font-semibold">analytics instrumentation before shipping</span>.</strong>{" "}
                  We had to estimate upgrade rate impact instead of measuring it directly, which made
                  iteration harder and the second cycle slower than it needed to be.
                </p>
              </div>
            </li>
            <li className="flex gap-4 p-5 rounded-xl bg-background ring-1 ring-foreground/[0.06]">
              <span className="text-accent font-semibold text-sm shrink-0 mt-0.5">02</span>
              <div>
                <p className="text-body text-foreground/85 leading-relaxed">
                  <strong className="text-foreground font-semibold">Run a larger A/B test on the 3-CTA hierarchy.</strong>{" "}
                  The collapsible menu and popup cards tested well individually, but a <span className="text-accent-2 font-semibold">cleaner 2-variant
                  test</span> would have given stronger signal on which surface drives the most conversions.
                </p>
              </div>
            </li>
            <li className="flex gap-4 p-5 rounded-xl bg-background ring-1 ring-foreground/[0.06]">
              <span className="text-accent font-semibold text-sm shrink-0 mt-0.5">03</span>
              <div>
                <p className="text-body text-foreground/85 leading-relaxed">
                  <strong className="text-foreground font-semibold">Involve <span className="text-accent-2 font-semibold">engineering earlier in the pricing IA</span>.</strong>{" "}
                  Separating investor and startup billing had back-end implications we didn’t surface
                  until implementation, which compressed the engineering timeline.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      VIDEO EXPLAINER
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="walkthrough" className="pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          The full story in ~4-min
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
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionFull}
          >
            <div className="relative w-full overflow-hidden rounded-xl ring-1 ring-foreground/[0.06] bg-black">
              <video
                src="/fundr/video-explain.mp4"
                controls
                playsInline
                className="w-full h-full object-cover"
                style={{ aspectRatio: "16/9" }}
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionFull}
          >
            <p className="text-body text-center text-foreground/70 mt-1 leading-relaxed">
              A high-level walkthrough of the Fundr upgrade flow — a deeper dive into specific decisions and trade-offs is available during a portfolio interview.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      12. CLOSING
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
            I’ll walk you through <span className="text-accent-2 font-semibold">the pricing redesign, the CTA tests, and the calls we cut</span>.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href={`mailto:${LINKS.email}?subject=Fundr%20case%20study`}
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
              { href: "/work/xy", label: "XY.AI Labs" },
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
    </CaseStudyTemplatePra>
  )
}
