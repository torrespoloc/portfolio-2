"use client"

import type * as React from "react"
import Image from "next/image"
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
 SectionEyebrow,
 InfoGrid3,
 CaseStudyBlockquote,
 sectionGrid,
 sectionLeft,
 sectionRight,
 sectionFull,
} from "@/components/case-study/cs-template_2"

const fadeUp = {
 hidden: { opacity: 0, y: 12 },
 show: { opacity: 1, y: 0 },
}

function ComplexityVsChatDiagram() {
 const unfamiliarControls = [
 "Configure trigger",
 "Set threshold",
 "Map data field",
 "Select agent type",
 "Assign workflow",
 "Define condition",
 ]

 return (
 <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-stretch">
 {/* Left: unfamiliar UI */}
 <div className="bg-secondary/40 ring-1 ring-hairline p-6 lg:p-8 flex flex-col">
 <p className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-ink-muted mb-5">
 What they don&rsquo;t know
 </p>
 <div className="grid grid-cols-2 gap-2 mb-5">
 {unfamiliarControls.map((label) => (
 <div
 key={label}
 className="bg-background ring-1 ring-hairline px-3 py-2.5 text-xs text-ink-muted/70 font-mono leading-tight"
 >
 {label}
 </div>
 ))}
 </div>
 <p className="text-sm text-ink-muted leading-snug mt-auto">
 A new pattern, every screen.
 </p>
 </div>

 {/* Center connector */}
 <div className="flex lg:flex-col items-center justify-center gap-2 py-2 lg:py-0">
 <span className="hidden lg:block h-full w-px bg-hairline" aria-hidden />
 <span className="lg:hidden w-full h-px bg-hairline" aria-hidden />
 <span className="shrink-0 text-xs font-mono uppercase tracking-[0.1em] text-ink-muted px-3 py-1 ring-1 ring-hairline bg-background whitespace-nowrap">
 same task
 </span>
 <span className="hidden lg:block h-full w-px bg-hairline" aria-hidden />
 <span className="lg:hidden w-full h-px bg-hairline" aria-hidden />
 </div>

 {/* Right: familiar chat */}
 <div className="bg-accent/[0.05] ring-1 ring-accent/20 p-6 lg:p-8 flex flex-col">
 <p className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-highlight mb-5">
 What they already know
 </p>
 <div className="space-y-2 mb-5">
 <div className="ml-auto max-w-[85%] bg-highlight text-highlight-foreground px-3 py-2 text-sm leading-snug">
 Schedule a follow-up with Maria for Thursday
 </div>
 <div className="mr-auto max-w-[85%] bg-background ring-1 ring-hairline text-foreground px-3 py-2 text-sm leading-snug">
 Done — confirmed for Thursday, 2pm.
 </div>
 </div>
 <p className="text-sm text-ink-muted leading-snug mt-auto">
 The interface everyone already knows.
 </p>
 </div>
 </div>
 )
}

function NumberedListItem({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
 return (
 <li className="flex gap-4 bg-background p-4">
 <span className="text-body-sm font-mono text-ink-muted shrink-0 pt-1">{number}</span>
 <div>
 <p className="text-body font-semibold text-foreground mb-2">{title}</p>
 <p className="text-body text-ink-muted leading-snug">{children}</p>
 </div>
 </li>
 )
}

const meta = {
 role: "AI Product Designer",
 duration: "4 months",
 team: "CPO, CEO, 4 Engineers",
 tools: (
 <div className="flex flex-wrap items-center gap-2">
 {["GitHub", "Cursor", "Claude Code", "Claude", "Figma"].map((tool) => {
 const logo = TOOL_LOGOS[tool]
 if (!logo) return null
 return <TooltipIcon key={tool} src={logo} alt={tool} tooltip={tool} className={tool === "V0 by Vercel" ? "h-8 w-8 object-cover object-center" : "h-6 w-6 "} />
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
 body: <>Agent config cards, workflow status indicators, data extraction previews, built for <span className="text-case-highlight font-semibold">fullscreen, sidebar, or embedded</span>. Plus the company&rsquo;s <span className="text-case-highlight font-semibold">first design system</span>: 8px grid, semantic tokens, language &amp; tone, motion docs.</>,
 },
 {
 icon: Sparkles,
 title: "Figma to engineering in hours.",
 body: <>Figma Design → Figma Make / Magic Patterns → GitHub → Engineering: <span className="text-case-highlight font-semibold">prototype-to-production</span> in hours for customer demos. Storybook gave engineers <span className="text-case-highlight font-semibold">direct access</span>, no handoff wait.</>,
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
 <div className="flex flex-wrap items-center gap-2 mb-2">
 <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2 py-1 ring-1 ring-hero-border">
 Healthcare AI
 </span>
 <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2 py-1 ring-1 ring-hero-border">
 SaaS
 </span>
 <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground inline-flex items-center gap-1">
 <Lock className="h-2 w-2" />
 NDA
 </span>
 <span className="text-label font-mono uppercase tracking-[0.08em] text-chartreuse-foreground bg-chartreuse px-2 py-1 ">
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
 1. WHAT I SHIPPED
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="solution">
 <SectionEyebrow>What I shipped</SectionEyebrow>

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
 <div className={`${sectionRight} space-y-4`}>
 <p className="text-base lg:text-lg text-ink-muted leading-relaxed">{s.body}</p>
 </div>

 {/* Storybook visual artifact, only on the components section */}
 {idx === 0 && (
 <motion.div
 variants={fadeUp}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className={`${sectionFull} space-y-4`}
 >
 <div className="relative w-full overflow-hidden ring-1 ring-hairline">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img
 src="/xy/webp/storybook.webp"
 alt="XY.AI Storybook component library, 60+ production-ready components for AI workflows"
 loading="lazy"
 className="w-full h-auto"
 />
 </div>
 <InfoGrid3
 items={[
 { label: "What this shows", body: "The 60+ component library, documented for engineering" },
 { label: "Why it matters", body: "Components built for AI-agent interaction patterns, not generic UI" },
 { label: "The result", body: "Engineers pulled components straight from Storybook, no designer needed" },
 ]}
 />
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
 <div className="flex items-center justify-center h-16 w-16 bg-accent/[0.08] ring-2 ring-accent/20 p-2">
 <img src="/logos/figma.svg" alt="Figma" loading="lazy" className="h-full w-full object-contain" />
 </div>
 <span className="text-xl text-case-highlight/70 font-light select-none">→</span>
 <div className="flex items-center justify-center h-16 w-16 bg-accent/[0.08] ring-2 ring-accent/20 p-2">
 <img src="/logos/cursor.png" alt="Cursor" loading="lazy" className="h-full w-full object-contain" />
 </div>
 <div className="flex items-center justify-center h-16 w-16 bg-accent/[0.08] ring-2 ring-accent/20 p-2">
 <img src="/logos/claude-code.png" alt="Claude Code" loading="lazy" className="h-full w-full object-contain" />
 </div>
 <span className="text-xl text-case-highlight/70 font-light select-none">→</span>
 <div className="flex items-center justify-center h-16 w-16 bg-accent/[0.08] ring-2 ring-accent/20 p-2">
 <img src="/logos/github.png" alt="GitHub" loading="lazy" className="h-full w-full object-contain" />
 </div>
 <div className="flex items-center justify-center h-16 w-16 bg-accent/[0.08] ring-2 ring-accent/20 p-2">
 <img src="/logos/storybook.svg" alt="Storybook" loading="lazy" className="h-full w-full object-contain" />
 </div>
 </div>
 <p className="text-center text-xs font-mono uppercase tracking-[0.12em] text-ink-muted">
 Figma Design → Figma Make / Magic Patterns → GitHub → Engineering · Tracked in Linear
 </p>
 </motion.div>
 </motion.div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 NDA NOTE
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="nda-note">
 <div className="bg-secondary/40 ring-1 ring-hairline p-6 lg:p-8">
 <div className="flex items-start gap-4">
 <div className="flex items-center justify-center h-10 w-10 bg-accent/[0.08] shrink-0 mt-0.5">
 <Lock className="h-4 w-4 text-accent" />
 </div>
 <div>
 <div className="flex flex-wrap items-center gap-2 mb-2">
 <p className="text-sm font-mono font-semibold uppercase tracking-[0.12em] text-accent">
 A note on confidentiality
 </p>
 <span className="text-label font-mono uppercase tracking-[0.08em] text-chartreuse-foreground bg-chartreuse px-2 py-1">
 NDA-friendly
 </span>
 </div>
 <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
 XY&rsquo;s product and customer data are protected by NDA. This case study shows the design work — component library, design system, workflow — with product specifics withheld. Happy to share more in conversation.
 </p>
 </div>
 </div>
 </div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 2. IMPACT & RESULTS
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="impact">
 <SectionEyebrow>Impact</SectionEyebrow>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.2 }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 >
 <p className="text-base lg:text-lg text-ink-muted leading-snug mb-6 max-w-2xl">
 Users orchestrated agents themselves. That self-serve UX became a <span className="text-case-highlight font-semibold">core sales asset</span> — <span className="text-case-highlight font-semibold">2 new clients</span> signed from demos.
 </p>

 <ul className="space-y-4 mb-6 list-disc pl-4 text-base lg:text-lg text-ink-muted leading-relaxed">
 <li>The <span className="text-case-highlight font-semibold">CEO pitched</span> the AI orchestration experience directly, no engineer needed.</li>
 <li>Production-ready workflow components wired to Temporal for <span className="text-case-highlight font-semibold">live agent orchestration</span>.</li>
 <li>Self-serve AI became central to how the <span className="text-case-highlight font-semibold">sales team closes deals</span>.</li>
 </ul>

 {/* User feedback quote */}
 <CaseStudyBlockquote
 body={userFeedback.body}
 cite={userFeedback.cite}
 className="text-base lg:text-lg mb-6"
 />

 {/* CPO quote — matches homepage featured testimonial card */}
 <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-burgundy p-8 text-white">
 <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-chartreuse/40 to-transparent" />
 <span
 aria-hidden
 className="pointer-events-none absolute -left-1 top-0 text-[7rem] font-heading italic leading-none text-chartreuse/10"
 >
 &ldquo;
 </span>

 <div className="relative z-10 flex h-full flex-1 flex-col">
 <div className="mb-6 flex items-center gap-2">
 <span className="h-2 w-2 rounded-full bg-chartreuse" />
 <span className="text-xs font-semibold uppercase tracking-[0.24em] text-chartreuse/80">
 Featured Quote
 </span>
 </div>

 <p className="flex-1 text-sm sm:text-[1.375rem] leading-[1.6] text-white/92">
 &ldquo;{cpoQuote.body}&rdquo;
 </p>

 <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
 <Image
 src="/headshots/webp/cressman.webp"
 alt="Scott Cressman"
 width={72}
 height={72}
 className="h-[72px] w-[72px] shrink-0 rounded-full object-cover ring-2 ring-white/15"
 />
 <div className="min-w-0">
 <p className="text-body font-medium text-white inline-flex items-center gap-2">
 Scott Cressman
 <a
 href="https://www.linkedin.com/in/scottcressman/"
 target="_blank"
 rel="noopener noreferrer"
 aria-label="LinkedIn profile"
 className="inline-flex items-center justify-center shrink-0 transition-colors hover:opacity-70"
 >
 <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
 </svg>
 </a>
 </p>
 <p className="mt-1 text-body-sm text-white/65">CPO + AI Leader at XY</p>
 </div>
 </div>
 </div>
 </div>
 </motion.div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 3. WHY XY NEEDED A SELF-SERVE AI EXPERIENCE
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="problem">
 <SectionEyebrow>The problem</SectionEyebrow>

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
 The agents could handle it all. But every hour sales spent on setup was an hour they couldn&rsquo;t sell. I had four months to fix that.
 </motion.p>
 </div>

 <motion.div
 variants={fadeUp}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className="space-y-6"
 >
 <CaseStudyBlockquote body={quote.body} cite={quote.cite} className="text-lg lg:text-xl" />

 </motion.div>

 {/* Research insight, folded into the problem narrative */}
 <motion.div
 variants={fadeUp}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className="space-y-6 pt-4"
 >
 <p className="text-base lg:text-lg text-ink-muted leading-relaxed max-w-3xl">
 <span className="text-case-highlight font-semibold">Nurses</span> and <span className="text-case-highlight font-semibold">admin staff</span> — different roles, same blocker: not trust, <span className="text-case-highlight font-semibold">abstraction</span>. Neither could describe a setup until they saw one. But both already knew this interface:
 </p>

 <ComplexityVsChatDiagram />
 </motion.div>
 </motion.div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 5. ITERATION
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="iteration">
 <SectionEyebrow>Iteration</SectionEyebrow>

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
 className="text-base lg:text-lg text-ink-muted leading-snug"
 >
 I explored forms, a guided wizard, and chat. Chat won — it let users discover possibilities while configuring.
 </motion.p>
 </div>
 <motion.div
 variants={fadeUp}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className={`${sectionFull} space-y-4`}
 >
 <div className="relative w-full overflow-hidden ring-1 ring-hairline bg-background">
 <img
 src="/xy/webp/xy-platform.webp"
 alt="XY platform concept showing a chat-first assistant beside the product workspace"
 loading="lazy"
 className="w-full h-auto"
 />
 </div>
 <InfoGrid3
 items={[
 { label: "Discarded", body: "Forms felt familiar, but still assumed users knew what to ask for." },
 { label: "Also tested", body: "A wizard improved onboarding, but was too rigid for ongoing use." },
 { label: "Chosen", body: "Chat let users explore, clarify, and self-serve in one flow." },
 ]}
 />
 </motion.div>
 </motion.div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 6. BUILDING THE FOUNDATION
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="building-the-foundation">
 <SectionEyebrow>Design system</SectionEyebrow>

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
 XY had never had a dedicated designer, just engineers making UI decisions. Before I could ship, I needed foundations every screen would depend on:
 </motion.p>
 <ul className="space-y-2 list-disc pl-4 text-base lg:text-lg text-ink-muted leading-relaxed">
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
 <div className="relative w-full overflow-hidden ring-1 ring-hairline bg-black">
 <video
 src="/xy/color-system.mp4"
 autoPlay
 muted
 loop
 playsInline
 className="w-full h-auto"
 />
 </div>
 <InfoGrid3
 items={[
 { label: "What this is", body: "The complete color token system: primitives, semantic tokens, accessibility audit" },
 { label: "Why it matters", body: "Every component, agent status, and interaction maps to this system, no more guessing hex values" },
 { label: "The result", body: "A three-tier token system that lets engineers theme any component without design input" },
 ]}
 />
 </motion.div>

 </motion.div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 7. TESTING & VALIDATION
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="testing">
 <SectionEyebrow>Validation</SectionEyebrow>

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
 Three rounds of demos <span className="text-case-highlight font-semibold">validated chat-first</span> with enterprise prospects.
 </motion.h3>
 </div>

 <div className={`${sectionRight} space-y-4`}>
 <motion.p
 variants={fadeUp}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className="text-base lg:text-lg text-ink-muted leading-relaxed"
 >
 Three rounds of live demos with enterprise prospects, each building on the last. I designed the experience; the CEO carried every conversation directly with clients.
 </motion.p>
 </div>

 <motion.div
 variants={fadeUp}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className={`${sectionFull} space-y-6`}
 >
 <img
 src="/xy/ceo-feedback.png"
 alt="CEO feedback on the chat-first approach"
 className="w-full h-auto ring-1 ring-foreground/[0.06] bg-black"
 />
 </motion.div>
 </motion.div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 8. INTERNAL PRACTICES INTRODUCED
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="reflection">
 <SectionEyebrow>Reflection</SectionEyebrow>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.2 }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 >
 <p className="text-body text-ink-muted mb-6 max-w-2xl">
 Sole designer, reporting to the <span className="text-case-highlight font-semibold">CPO and CEO</span>.
 </p>

 <ul className="space-y-4">
 <NumberedListItem number="01" title="Design-to-engineering pipeline">
 <span className="text-case-highlight font-semibold">Linear</span> tracked every move from Figma to production.
 </NumberedListItem>
 <NumberedListItem number="02" title="Rigorous design standards">
 The company's <span className="text-case-highlight font-semibold">first design practice</span>: 8px grid, semantic tokens, typography, spacing, language &amp; tone, motion docs.
 </NumberedListItem>
 <NumberedListItem number="03" title="AI-powered workflow">
 <span className="text-case-highlight font-semibold">Claude MCP</span> connected Figma to production in <span className="text-case-highlight font-semibold">hours, not sprints</span>.
 </NumberedListItem>
 </ul>
 </motion.div>
 </CaseStudySection>

 <EmptySection />

 {/* ══════════════════════════════════════════════════════════════════════
 9. CLOSING
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySectionFullBleed>
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.2 }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className=" p-8 lg:p-10 bg-foreground text-background"
 >
 <span className="inline-block text-xs font-semibold uppercase tracking-[0.08em] text-chartreuse-foreground bg-chartreuse px-4 py-2 mb-2">
 NDA-friendly
 </span>
 <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] mb-4">
 Want a walkthrough?
 </h3>
 <p className="text-base lg:text-lg text-background/75 leading-relaxed max-w-2xl">
 Here&rsquo;s what I&rsquo;d love to walk you through:
 </p>
 <ul className="space-y-2 list-disc pl-4 max-w-2xl text-base lg:text-lg text-background/75 leading-relaxed mb-6">
 <li>The AI agent orchestration flow</li>
 <li>The 60+ component library</li>
 <li>The AI-native pipeline from prototype to production</li>
 </ul>
 <div className="flex flex-wrap gap-3 mb-6">
 <a
 href={`mailto:${LINKS.email}?subject=XY.AI%20case%20study`}
 className="inline-flex shrink-0 items-center justify-center h-9 gap-2 px-2 border border-transparent bg-secondary text-secondary-foreground text-sm font-medium whitespace-nowrap transition-all hover:bg-secondary/80"
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
 className="inline-flex items-center px-4 py-2 text-sm font-medium bg-background/10 text-background/80 hover:bg-background/20 hover:text-background transition-colors"
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
