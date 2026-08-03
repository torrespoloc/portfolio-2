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
 role: "UX/UI Designer (contract)",
 duration: "10 weeks · Sep–Nov 2023",
 team: "CEO + 1 Engineer",
 tools: (
 <div className="flex flex-wrap items-center gap-2">
 {["Figma", "Notion", "ChatGPT"].map((tool) => {
 const logo = TOOL_LOGOS[tool]
 if (!logo) return null
 return <TooltipIcon key={tool} src={logo} alt={tool} tooltip={tool} className="h-6 w-6 " />
 })}
 </div>
 ),
}

const outcomes: React.ReactNode[] = [
 <>
 <span className="text-case-highlight font-semibold">20%</span> increase in upgrade rates through improved
 financial dashboard UI
 </>,
 <>
 <span className="text-case-highlight font-semibold">~50%</span> reduction in negative feedback by redesigning
 navigation for embedded experiences
 </>,
 <>
 <span className="text-case-highlight font-semibold">~50%</span> decrease in required sales calls via
 self-serve monetization design
 </>,
 <>
 Projected <span className="text-case-highlight font-semibold">5%</span> client-base growth within 6 months of launch
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
 <div className="flex flex-wrap items-center gap-2 mb-2">
 <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2 py-1 ring-1 ring-hero-border">
 Fintech
 </span>
 <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2 py-1 ring-1 ring-hero-border">
 SaaS
 </span>
 </div>
 <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-foreground leading-[1.05] max-w-4xl">
 Replacing a sales-call funnel with a paywall users can navigate themselves.
 </h1>
 </div>
 }
 >
 <div className="[--accent:var(--case-highlight)] [--accent-2:#B45309]">

 {/* ══════════════════════════════════════════════════════════════════════
 1. WHAT I SHIPPED
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="solution">
 <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-2">What I shipped</p>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.2 }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 >
 <p className="text-base lg:text-lg text-ink-muted leading-snug mb-6 max-w-2xl">
 Three shifts that changed the upgrade experience.
 </p>
 <div className="space-y-4">
 {([
 { before: "Sales call required for every upgrade", after: "Self-service upgrade in 3 clicks" },
 { before: "Pricing hidden behind login and account settings", after: "Transparent pricing on every CTA surface" },
 { before: "One confusing tier table for all user types", after: "Two tailored paths, investor and startup" },
 ] as const).map((pair, i) => (
 <div
 key={i}
 className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-px sm:gap-px items-center p-0 bg-background ring-1 ring-hairline"
 >
 <div className="text-body text-ink-muted leading-snug p-4">
 <span className="text-label font-mono uppercase tracking-[0.12em] text-destructive/70 block mb-1">Before</span>
 {pair.before}
 </div>
 <div className="flex items-center justify-center p-4">
 <span className="text-case-eyebrow text-lg font-semibold leading-none">→</span>
 </div>
 <div className="text-body text-foreground leading-snug p-4">
 <span className="text-label font-mono uppercase tracking-[0.12em] text-status-success-text/70 block mb-1">After</span>
 {pair.after}
 </div>
 </div>
 ))}
 </div>

 {/* Summary of key deliverables */}
 <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden ring-1 ring-hairline bg-hairline">
 <div className="p-4 rounded-none bg-background">
 <p className="text-label font-semibold text-foreground mb-1">CTA system</p>
 <p className="text-body text-ink-muted leading-relaxed">
 Three upgrade surfaces (collapsible menu, static buttons, popup cards) that don&rsquo;t interrupt workflow
 </p>
 </div>
 <div className="p-4 rounded-none bg-background">
 <p className="text-label font-semibold text-foreground mb-1">Pricing architecture</p>
 <p className="text-body text-ink-muted leading-relaxed">
 Two separate pricing paths for investors and startups, each with tailored features
 </p>
 </div>
 <div className="p-4 rounded-none bg-background">
 <p className="text-label font-semibold text-foreground mb-1">Tiered dashboard</p>
 <p className="text-body text-ink-muted leading-relaxed">
 A free tier worth using, a premium tier worth paying for, with natural upgrade triggers
 </p>
 </div>
 </div>

 {/* Visual evidence */}
 <div className="mt-8 relative w-full overflow-hidden ring-1 ring-hairline">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img
 src="/fundr/webp/pricing-page.webp"
 alt="Fundr pricing page, separate investor and startup paths with transparent pricing"
 loading="lazy"
 className="w-full h-auto"
 />
 </div>
 </motion.div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 2. IMPACT
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="impact">
 <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-2">Impact</p>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.2 }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 >
 <p className="text-base lg:text-lg text-ink-muted leading-snug mb-6 max-w-2xl">
 Fewer sales calls. More upgrades. <span className="text-case-highlight font-semibold">A pricing surface that does its own selling.</span>
 </p>
 <ul className="space-y-4">
 {outcomes.map((o, i) => (
 <motion.li
 key={i}
 whileHover={{ y: -2, scale: 1.005 }}
 className="flex gap-4 p-6 lg:p-8 bg-accent/[0.06] ring-1 ring-accent/20 hover:bg-accent/[0.10] hover:ring-accent/30 hover:shadow-lg transition-all duration-500 ease-[0.22,1,0.36,1]"
 >
 <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-case-eyebrow/30 shrink-0 pt-1 font-mono tabular-nums">
 {String(i + 1).padStart(2, "0")}
 </span>
 <p className="text-body lg:text-lg text-foreground/85 leading-relaxed">{o}</p>
 </motion.li>
 ))}
 </ul>
 <blockquote className="mt-8 pl-4 border-l-2 border-accent/60 text-body text-ink-muted italic leading-relaxed">
 &ldquo;I just upgraded myself. It took like 20 seconds. Last time I had to email
 support and wait three days.&rdquo;
 <span className="block mt-1 not-italic text-label font-mono uppercase tracking-[0.12em] text-ink-muted">
, Beta user, first week after launch
 </span>
 </blockquote>
 </motion.div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 3. WHY FUNDR NEEDED A REDESIGN
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="problem">

 <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-2">The problem</p>

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
 Fundr needed to monetize without alienating users, but the product had no upgrade path.
 </motion.h3>
 </div>

 <div className={`${sectionRight} space-y-4`}>
 <motion.ul
 variants={fadeUp}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className="text-base lg:text-lg text-ink-muted leading-relaxed list-disc pl-4 space-y-2"
 >
 <li>Every plan change ran through a <span className="text-case-highlight font-semibold">1:1 sales call</span>, users waited days for a human to flip a switch.</li>
 <li>The pricing was confusing, and the low tiers didn&rsquo;t justify upgrading.</li>
 <li>There was no self-service path to upgrade.</li>
 </motion.ul>
 <motion.p
 variants={fadeUp}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className="text-base lg:text-lg text-ink-muted leading-relaxed"
 >
 I had <span className="text-case-highlight font-semibold">ten weeks</span> to design one.
 </motion.p>
 </div>

 {/* Constraints card + user quote */}
 <motion.div
 variants={fadeUp}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className={`${sectionFull} space-y-0`}
 >
 <div className="p-0">
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden ring-1 ring-hairline bg-hairline">
 <div className="flex flex-col items-center text-center gap-4 p-4">
 <div className="w-20 h-20 bg-accent/[0.08] flex items-center justify-center">
 <span className="text-case-eyebrow font-semibold text-xl font-mono tabular-nums">01</span>
 </div>
 <p className="text-body font-semibold text-foreground">Sales calls for every upgrade</p>
 </div>
 <div className="flex flex-col items-center text-center gap-4 p-4">
 <div className="w-20 h-20 bg-accent/[0.08] flex items-center justify-center">
 <span className="text-case-eyebrow font-semibold text-xl font-mono tabular-nums">02</span>
 </div>
 <p className="text-body font-semibold text-foreground">Confusing pricing structure</p>
 </div>
 <div className="flex flex-col items-center text-center gap-4 p-4">
 <div className="w-20 h-20 bg-accent/[0.08] flex items-center justify-center">
 <span className="text-case-eyebrow font-semibold text-xl font-mono tabular-nums">03</span>
 </div>
 <p className="text-body font-semibold text-foreground">Free tier too limited to sell upgrades</p>
 </div>
 </div>
 </div>

 <blockquote className="pl-4 border-l-2 border-accent/60 text-body text-ink-muted italic leading-relaxed">
 &ldquo;I didn&rsquo;t even know there were paid plans. I&rsquo;ve been on the same tier since I signed up.&rdquo;
 <span className="block mt-1 not-italic text-label font-mono uppercase tracking-[0.12em] text-ink-muted">
, User during discovery interviews
 </span>
 </blockquote>
 </motion.div>

 {/* Patrick Campbell quote, integrated into problem section */}
 <motion.div
 variants={fadeUp}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className={sectionFull}
 >
 <div className=" bg-secondary/60 ring-1 ring-hairline p-8 lg:p-10">
 <figure>
 <blockquote className="text-xl lg:text-2xl xl:text-3xl leading-[1.25] text-foreground/90 font-medium tracking-tight">
 &ldquo;{quote.body}&rdquo;
 </blockquote>
 <figcaption className="mt-4 text-body-sm font-mono uppercase tracking-[0.18em] text-ink-muted">
, {quote.cite}
 </figcaption>
 </figure>
 <p className="mt-6 text-body-sm lg:text-body text-ink-muted leading-relaxed max-w-2xl border-t border-hairline pt-6">
 This reframed the project from &ldquo;UI cleanup&rdquo; to a{" "}
 <span className="text-case-highlight font-semibold">business-critical decision</span>.
 Pricing surface was <span className="text-case-highlight font-semibold">the lever</span>, not polish.
 </p>
 </div>
 </motion.div>
 </motion.div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 4. THE UPGRADE FLOW
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="upgrade-flow">
 <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-2">Upgrade flow</p>

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
 Every path leads to checkout, here&rsquo;s the full picture.
 </motion.h3>
 </div>

 <div className={sectionRight}>
 <motion.p
 variants={fadeUp}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className="text-base lg:text-lg text-ink-muted leading-relaxed"
 >
 Before diving into individual surfaces, it&rsquo;s worth seeing how the pieces connect.
 The upgrade flow has <span className="text-case-highlight font-semibold">three entry points</span>, a
 scrollable sales funnel, feature-specific popups, and situational upgrade prompts, all
 converging into a single checkout. Users can start from anywhere and finish in under a minute.
 </motion.p>
 </div>

 {/* Diagram + caption cards */}
 <motion.div
 variants={fadeUp}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className={`${sectionFull} space-y-4`}
 >
 <div className="overflow-hidden ring-1 ring-hairline">
 <iframe
 src="/fundr/diagram.html"
 title="Fundr upgrade flow, from CTA to checkout"
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
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden ring-1 ring-hairline bg-hairline">
 <div className="p-4 rounded-none bg-background">
 <p className="text-label font-semibold text-foreground mb-1">What this shows</p>
 <p className="text-body text-ink-muted leading-relaxed">
 How all three CTA paths converge into a single checkout
 </p>
 </div>
 <div className="p-4 rounded-none bg-background">
 <p className="text-label font-semibold text-foreground mb-1">Why it matters</p>
 <p className="text-body text-ink-muted leading-relaxed">
 Multiple entry points, one consistent upgrade experience
 </p>
 </div>
 <div className="p-4 rounded-none bg-background">
 <p className="text-label font-semibold text-foreground mb-1">The result</p>
 <p className="text-body text-ink-muted leading-relaxed">
 Users can enter from any surface and complete in under a minute
 </p>
 </div>
 </div>
 </motion.div>
 </motion.div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 5. CTA STRATEGY
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="cta-strategy">
 <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-2">CTA strategy</p>
 <motion.p
 initial={{ opacity: 0, y: 12 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.4 }}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
 className="text-base lg:text-lg text-ink-muted leading-snug mb-6 max-w-2xl"
 >
 Three upgrade surfaces that don&rsquo;t interrupt the workflow.
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
 <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
 Users who wanted to upgrade hit a wall.
 </h3>
 </div>
 <div className={`${sectionRight} space-y-4`}>
 <p className="text-base lg:text-lg text-ink-muted leading-snug">
 Users who wanted to upgrade <span className="text-case-highlight font-semibold">hit a wall</span>, a generic "Contact Sales" link and days of waiting.
 </p>

 <div>
 <ul className="space-y-2 text-body text-foreground/75 leading-snug">
 <li className="flex gap-2">
 <span className="text-ink-muted mt-1 shrink-0">▸</span>
 <span><strong className="text-foreground/80 font-medium">Collapsible status menu</strong>, feature access at a glance, expanded by default</span>
 </li>
 <li className="flex gap-2">
 <span className="text-ink-muted mt-1 shrink-0">▸</span>
 <span><strong className="text-foreground/80 font-medium">Static CTA buttons</strong>, accessible from every page so users never hunt for the upgrade path</span>
 </li>
 <li className="flex gap-2">
 <span className="text-ink-muted mt-1 shrink-0">▸</span>
 <span><strong className="text-foreground/80 font-medium">Triggered popup cards</strong>, let users keep working without losing context</span>
 </li>
 </ul>
 </div>

 <div>
 <p className="text-body-sm lg:text-body text-foreground/75 leading-snug">
 Systems with <span className="text-case-highlight font-semibold">combined CTA methods</span> outperform
 single-method approaches, and the most effective pattern bridges the gap between
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
 <div className="relative w-full overflow-hidden ring-1 ring-hairline">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img
 src="/fundr/webp/cta-types.webp"
 alt="Fundr CTA types, collapsible menu, static buttons, and popup upgrade cards"
 loading="lazy"
 className="w-full h-auto"
 />
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden ring-1 ring-hairline bg-hairline">
 <div className="p-4 rounded-none bg-background">
 <p className="text-label font-semibold text-foreground mb-1">What this shows</p>
 <p className="text-body text-ink-muted leading-relaxed">
 Three CTA types layered by user intent, glance, browse, and act
 </p>
 </div>
 <div className="p-4 rounded-none bg-background">
 <p className="text-label font-semibold text-foreground mb-1">Why it matters</p>
 <p className="text-body text-ink-muted leading-relaxed">
 Each surface serves a different moment without overwhelming the interface
 </p>
 </div>
 <div className="p-4 rounded-none bg-background">
 <p className="text-label font-semibold text-foreground mb-1">The result</p>
 <p className="text-body text-ink-muted leading-relaxed">
 Self-serve upgrades that don&rsquo;t interrupt the user&rsquo;s flow
 </p>
 </div>
 </div>
 </motion.div>
 </motion.div>
 </motion.div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 6. THE CORE MECHANISM
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="spv-infographic">
 <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-2">Education</p>

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
 What users are upgrading for, SPVs, explained.
 </motion.h3>
 </div>

 <div className={`${sectionRight} space-y-4`}>
 <div>
 <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
 Fundr&rsquo;s platform centers on Special Purpose Vehicles, the investment structure
 that lets investors pool capital into a single startup. Most users <span className="text-case-highlight font-semibold">didn&rsquo;t understand what an SPV was</span> or how capital flowed through it.{" "}
 <span className="text-case-highlight font-semibold">Upgrade prompts had no context</span>, users
 couldn&rsquo;t value what they couldn&rsquo;t visualize.
 </p>
 </div>

 <div>
 <ul className="space-y-2 text-body text-foreground/75 leading-snug">
 <li className="flex gap-2">
 <span className="text-ink-muted mt-1 shrink-0">▸</span>
 <span><strong className="text-foreground/80 font-medium">Designed an infographic</strong> breaking down who&rsquo;s involved, how capital moves, and what happens at each stage</span>
 </li>
 <li className="flex gap-2">
 <span className="text-ink-muted mt-1 shrink-0">▸</span>
 <span><strong className="text-foreground/80 font-medium">Connected it to upgrade triggers</strong>, premium unlocks more SPV data, deeper analytics, and priority access</span>
 </li>
 <li className="flex gap-2">
 <span className="text-ink-muted mt-1 shrink-0">▸</span>
 <span><strong className="text-foreground/80 font-medium">Placed after CTAs</strong>, users see the infographic right after an upgrade prompt, bridging curiosity to understanding</span>
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
 <div className="relative w-full overflow-hidden ring-1 ring-hairline">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img
 src="/fundr/webp/SPVs-infographic.webp"
 alt="Fundr SPV infographic, breakdown of Special Purpose Vehicle structure and capital flow"
 loading="lazy"
 className="w-full h-auto"
 />
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden ring-1 ring-hairline bg-hairline">
 <div className="p-4 rounded-none bg-background">
 <p className="text-label font-semibold text-foreground mb-1">What this shows</p>
 <p className="text-body text-ink-muted leading-relaxed">
 The SPV structure, investors, capital flow, and the startup relationship
 </p>
 </div>
 <div className="p-4 rounded-none bg-background">
 <p className="text-label font-semibold text-foreground mb-1">Why it matters</p>
 <p className="text-body text-ink-muted leading-relaxed">
 Users understand the core mechanism before they consider paying for premium access
 </p>
 </div>
 <div className="p-4 rounded-none bg-background">
 <p className="text-label font-semibold text-foreground mb-1">The result</p>
 <p className="text-body text-ink-muted leading-relaxed">
 Upgrade prompts now carry context, users know exactly what they&rsquo;re unlocking
 </p>
 </div>
 </div>
 </motion.div>
 </motion.div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 7. PRICING REDESIGN
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="pricing">
 <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-2">Pricing</p>
 <motion.p
 initial={{ opacity: 0, y: 12 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.4 }}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
 className="text-base lg:text-lg text-ink-muted leading-snug mb-6 max-w-2xl"
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
 <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
 A single pricing table that mixed investor and startup features, making both segments feel the product <span className="text-case-highlight font-semibold">wasn&rsquo;t built for them</span>.
 </h3>
 </div>
 <div className={`${sectionRight} space-y-4`}>
 <div>
 <ul className="space-y-2 text-body text-foreground/75 leading-snug">
 <li className="flex gap-2">
 <span className="text-ink-muted mt-1 shrink-0">▸</span>
 <span><strong className="text-foreground/80 font-medium">Two separate pricing paths</strong>, investors and startups on different pages, each with tailored features</span>
 </li>
 <li className="flex gap-2">
 <span className="text-ink-muted mt-1 shrink-0">▸</span>
 <span><strong className="text-foreground/80 font-medium">Best-value option highlighted</strong>, users see which plan gives them the most without guessing</span>
 </li>
 <li className="flex gap-2">
 <span className="text-ink-muted mt-1 shrink-0">▸</span>
 <span><strong className="text-foreground/80 font-medium">Transparent fees up-front</strong>, annual plan incentives, clear per-user pricing, no hidden costs</span>
 </li>
 </ul>
 </div>
 </div>

 {/* Pricing visual + user quote */}
 <motion.div
 variants={fadeUp}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className={`${sectionFull} space-y-4`}
 >
 <div className="relative w-full overflow-hidden ring-1 ring-hairline">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img
 src="/fundr/webp/pricing-page.webp"
 alt="Fundr pricing page, separate investor and startup paths"
 loading="lazy"
 className="w-full h-auto"
 />
 </div>
 <blockquote className="pl-4 border-l-2 border-accent/60 text-body text-ink-muted italic leading-relaxed">
 &ldquo;Wait, I can actually see what each plan costs without guessing. That&rsquo;s… clear.&rdquo;
 <span className="block mt-1 not-italic text-label font-mono uppercase tracking-[0.12em] text-ink-muted">
, User testing the pricing page prototype
 </span>
 </blockquote>
 </motion.div>
 </motion.div>
 </motion.div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 8. THE CONTROVERSY
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="controversy">
 <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-2">Decision</p>

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
 One pricing page or two?
 </motion.h3>
 </div>
 <div className={sectionRight}>
 <motion.div
 variants={fadeUp}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className="bg-burgundy/[0.06] ring-1 ring-burgundy/20 p-4"
 >
 <p className="text-body text-foreground/85 leading-relaxed">
 The CEO wanted one unified pricing page, simplicity was a core value, and two paths
 risked surface complexity. I mapped both user journeys, showed where investor and startup
 needs diverged, and <span className="text-case-highlight font-semibold">the data won</span>.
 We shipped two pricing paths.
 </p>
 </motion.div>
 </div>
 </motion.div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 9. TIERED DASHBOARD
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="dashboard">
 <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-2">Dashboard</p>
 <motion.p
 initial={{ opacity: 0, y: 12 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.4 }}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
 className="text-base lg:text-lg text-ink-muted leading-snug mb-6 max-w-2xl"
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
 <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
 The free tier was a demo, not a product, so limited that users couldn&rsquo;t evaluate whether Fundr was right for them.
 </h3>
 </div>
 <div className={`${sectionRight} space-y-4`}>
 <p className="text-base lg:text-lg text-ink-muted leading-snug">
 The free tier was a demo, not a product, so limited that users <span className="text-case-highlight font-semibold">couldn&rsquo;t evaluate whether Fundr was right for them</span>.
 </p>

 <div>
 <ul className="space-y-2 text-body text-foreground/75 leading-snug">
 <li className="flex gap-2">
 <span className="text-ink-muted mt-1 shrink-0">▸</span>
 <span><strong className="text-foreground/80 font-medium">Basic tier</strong>, genuinely useful features with upgrade triggers at natural ceilings</span>
 </li>
 <li className="flex gap-2">
 <span className="text-ink-muted mt-1 shrink-0">▸</span>
 <span><strong className="text-foreground/80 font-medium">Premium tier</strong>, advanced graphs, expanded data, and priority support that extends how you work in the free tier</span>
 </li>
 <li className="flex gap-2">
 <span className="text-ink-muted mt-1 shrink-0">▸</span>
 <span><strong className="text-foreground/80 font-medium">The trigger</strong>, users hit a natural ceiling in the free tier and decide for themselves whether the upgrade is worth it</span>
 </li>
 </ul>
 </div>

 <div>
 <ul className="text-body-sm lg:text-body text-foreground/75 leading-snug list-disc pl-4 space-y-2">
 <li>SaaS users convert when they <span className="text-case-highlight font-semibold">experience value firsthand</span>.</li>
 <li>A <span className="text-case-highlight font-semibold">free tier worth using</span> builds trust.</li>
 <li>A <span className="text-case-highlight font-semibold">premium tier worth paying for</span> converts without pressure.</li>
 </ul>
 </div>
 </div>

 {/* Dashboard comparison, Basic vs Premium */}
 <motion.div
 variants={fadeUp}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className={`${sectionFull} space-y-0`}
 >
 <div className="grid grid-cols-1 gap-px overflow-hidden ring-1 ring-hairline bg-hairline">
 <div className="relative w-full overflow-hidden ring-0">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img
 src="/fundr/webp/dashboard-basic.webp"
 alt="Fundr Basic dashboard, core features at the free tier"
 loading="lazy"
 className="w-full h-auto"
 />
 <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
 <p className="text-label font-mono uppercase tracking-[0.14em] text-white/90">
 Basic tier
 </p>
 </div>
 </div>
 <div className="relative w-full overflow-hidden ring-0">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img
 src="/fundr/webp/dashboard-premium.webp"
 alt="Fundr Premium dashboard, advanced graphs, expanded data"
 loading="lazy"
 className="w-full h-auto"
 />
 <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
 <p className="text-label font-mono uppercase tracking-[0.14em] text-white/90">
 Premium tier
 </p>
 </div>
 </div>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-px overflow-hidden ring-1 ring-hairline bg-hairline">
 <div className="p-4 rounded-none bg-background">
 <p className="text-label font-semibold text-foreground mb-1">What this shows</p>
 <p className="text-body text-ink-muted leading-relaxed">
 Side-by-side comparison of free vs paid dashboard experience
 </p>
 </div>
 <div className="p-4 rounded-none bg-background">
 <p className="text-label font-semibold text-foreground mb-1">Why it matters</p>
 <p className="text-body text-ink-muted leading-relaxed">
 Users see exactly what they gain, not just what they&rsquo;re missing
 </p>
 </div>
 </div>
 </motion.div>
 </motion.div>
 </motion.div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 10. WHAT I'D DO DIFFERENTLY
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="reflection">
 <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-2">Reflection</p>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.2 }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 >
 <p className="text-base lg:text-lg text-ink-muted leading-snug mb-6 max-w-2xl">
 Hindsight and the next version.
 </p>
 <ul className="space-y-4">
 <li className="flex gap-4 bg-background">
 <span className="text-case-eyebrow font-semibold text-sm shrink-0 mt-1">01</span>
 <div>
 <p className="text-body text-foreground/85 leading-relaxed">
 <strong className="text-foreground font-semibold">Push for <span className="text-case-highlight font-semibold">analytics instrumentation before shipping</span>.</strong>{" "}
 We had to estimate upgrade rate impact instead of measuring it directly, which made
 iteration harder and the second cycle slower than it needed to be.
 </p>
 </div>
 </li>
 <li className="flex gap-4 bg-background">
 <span className="text-case-eyebrow font-semibold text-sm shrink-0 mt-1">02</span>
 <div>
 <p className="text-body text-foreground/85 leading-relaxed">
 <strong className="text-foreground font-semibold">Run a larger A/B test on the 3-CTA hierarchy.</strong>{" "}
 The collapsible menu and popup cards tested well individually, but a <span className="text-case-highlight font-semibold">cleaner 2-variant
 test</span> would have given stronger signal on which surface drives the most conversions.
 </p>
 </div>
 </li>
 <li className="flex gap-4 bg-background">
 <span className="text-case-eyebrow font-semibold text-sm shrink-0 mt-1">03</span>
 <div>
 <p className="text-body text-foreground/85 leading-relaxed">
 <strong className="text-foreground font-semibold">Involve <span className="text-case-highlight font-semibold">engineering earlier in the pricing IA</span>.</strong>{" "}
 Separating investor and startup billing had back-end implications we didn&rsquo;t surface
 until implementation, which compressed the engineering timeline.
 </p>
 </div>
 </li>
 </ul>
 </motion.div>
 </CaseStudySection>

 {/* ══════════════════════════════════════════════════════════════════════
 VIDEO EXPLAINER
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySection id="walkthrough">
 <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-2">Overview</p>

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
 <div className="relative w-full overflow-hidden ring-1 ring-hairline bg-black">
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
 <p className="text-body text-center text-ink-muted mt-1 leading-relaxed">
 A high-level walkthrough of the Fundr upgrade flow, a deeper dive into specific decisions and trade-offs is available during a portfolio interview.
 </p>
 </motion.div>
 </motion.div>
 </CaseStudySection>
 <EmptySection />

 {/* ══════════════════════════════════════════════════════════════════════
 CLOSING
 ═══════════════════════════════════════════════════════════════════════ */}
 <CaseStudySectionFullBleed>
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.2 }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="p-8 lg:p-10 bg-foreground text-background"
 >
 <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] mb-4">
 Want a walkthrough?
 </h3>
 <p className="text-base lg:text-lg text-background/75 leading-relaxed mb-6 max-w-2xl">
 I&rsquo;ll walk you through <span className="text-chartreuse dark:text-forest font-semibold">the pricing redesign, the CTA tests, and the calls we cut</span>.
 </p>
 <div className="flex flex-wrap gap-3 mb-6">
 <a
 href={`mailto:${LINKS.email}?subject=Fundr%20case%20study`}
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
 { href: "/work/xy", label: "XY.AI Labs" },
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
 </CaseStudyTemplatePra>
 )
}
