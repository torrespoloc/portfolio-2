"use client"

import type * as React_ from "react"
import type { ReactNode } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowUpRight,
  Smartphone,
  Users,
  Sparkles,
} from "lucide-react"
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
  duration: "May–Nov 2025",
  team: "VPP, Design Lead, Senior Designer, dev team 3 continents",
  tools: (
    <div className="flex flex-wrap items-center gap-1.5">
      {["Figma", "V0 by Vercel", "ChatGPT", "Perplexity", "Loom"].map((tool) => {
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
  body: ReactNode
}

const shipped: Shipped[] = [
  {
    icon: Smartphone,
    eyebrow: "Patient mobile app",
    title: "Prescription-aware dashboard with real-time validity and sync.",
    body: <>
      Prescription dashboard with <span className="text-[#EBB207] font-semibold">color-coded badges</span>, supply bars, and 3-state validity logic (valid, expiring, expired).<br /><br />
      Real-time staff-patient sync: create a checkout, patient notified. Patient changes quantity, staff sees it live.<br /><br />
      <span className="text-[#EBB207] font-semibold">Skeleton loading</span>, toast confirmations, and 30-second error retry keep trust intact.
    </>,
  },
  {
    icon: Users,
    eyebrow: "Family ordering",
    title: "One account. The whole household.",
    body: <>
      Named sub-patient profiles with their own prescription cards and order history.<br /><br />
      <span className="text-[#EBB207] font-semibold">No multi-account architecture needed</span> — caregivers manage the whole household without juggling logins.
    </>,
  },
]

const outcomes: ReactNode[] = [
  <>
    Delivered <span className="text-[#EBB207] font-semibold">1 month early</span>, live at idocbridge.com
  </>,
  <>
    Target: <span className="text-[#EBB207] font-semibold">60%+</span> of pilot clinic patients complete
    first purchase in-app (vs. 0% previously)
  </>,
  <>
    Target: <span className="text-[#EBB207] font-semibold">40%</span> reduction in staff checkout creation time
  </>,
  <>
    Target: <span className="text-[#EBB207] font-semibold">80%+</span> of first-time users complete
    checkout independently
  </>,
]

const quote = {
  body: "Without Vercel, we wouldn't have had alignment at the leadership level to have confidence to say V1 is going to be good.",
  cite: "VP of Product, Waldo",
}

export default function WaldoCaseStudy() {
  return (
    <CaseStudyTemplatePra
      metaTheme="default"
      meta={meta}
      heroImage={
        <video
          src="/waldo/hero.mp4"
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
              Healthtech
            </span>
            <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2.5 py-1 rounded-full ring-1 ring-foreground/[0.08]">
              Mobile
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-foreground leading-[1.05] max-w-4xl">
            Designed the patient mobile app that closed the last mile for independent eye doctors.
          </h1>
        </div>
      }
    >
      <div className="[--accent:#D97706]">

      {/* ══════════════════════════════════════════════════════════════════════
      1. WHY IDOC NEEDED A BETTER PATIENT EXPERIENCE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="background" className="pt-16 lg:pt-24 pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Why iDoc needed a better patient experience
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
              Eye care clinics lose contact lens sales to Amazon. iDoc had six months to change that.
            </motion.h3>
          </div>

          <div className={`${sectionRight} space-y-4`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-foreground/70 leading-relaxed"
            >
              The largest US alliance of independent eye doctors needed a HIPAA-compliant, prescription-aware
              e-commerce system: doctor portal + patient mobile app. Their competitor had <span className="text-accent font-semibold">over a decade</span> head start.
              We delivered V1 in <span className="text-[#EBB207] font-semibold">six months</span>. I led the patient app <span className="text-[#EBB207] font-semibold">Self-managed, designed, and shipped for the first three</span>.
            </motion.p>
          </div>

          {/* iDoc at a glance — impact metrics */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionFull}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px rounded-xl overflow-hidden ring-1 ring-foreground/[0.06] bg-foreground/[0.04]">
              {[
                { value: "3,000+", label: "Independent practices" },
                { value: "100%", label: "Manufacturer-neutral" },
                { value: "$0", label: "Added cost to members" },
                { value: "60%+", label: "In-clinic conversion" },
                { value: "40%", label: "Faster checkout" },
                { value: "1st", label: "iDoc tech platform" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col items-center justify-center text-center p-5 lg:p-6 bg-background"
                >
                  <span className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight leading-none mb-1.5">
                    {m.value}
                  </span>
                  <span className="text-xs font-mono text-foreground/60 leading-snug max-w-[12ch]">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Constraints cards */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`${sectionFull} space-y-6`}
          >
            <div className="p-6 lg:p-8">
              <p className="text-label font-mono uppercase tracking-[0.18em] text-foreground/60 mb-5">
                Three things standing in the way
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-accent/[0.08] flex items-center justify-center">
                    <span className="text-accent font-semibold text-xl font-mono tabular-nums">01</span>
                  </div>
                  <p className="text-foreground font-semibold text-sm">A decade-old market leader with a massive head start</p>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-accent/[0.08] flex items-center justify-center">
                    <span className="text-accent font-semibold text-xl font-mono tabular-nums">02</span>
                  </div>
                  <p className="text-foreground font-semibold text-sm">HIPAA-compliant prescription verification at scale</p>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-accent/[0.08] flex items-center justify-center">
                    <span className="text-accent font-semibold text-xl font-mono tabular-nums">03</span>
                  </div>
                  <p className="text-foreground font-semibold text-sm">Patients with no visibility into their own prescription data</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop order interface, the complex reality staff navigate */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionFull}
          >
            <div className="relative overflow-hidden rounded-xl ring-1 ring-foreground/[0.06] max-h-[480px]">
              <Image
                src="/waldo/order-deskp.png"
                alt="Desktop order management interface showing the complexity staff navigate daily"
                width={2880}
                height={3362}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="mt-3 text-xs font-mono text-foreground/60 text-center">
              The staff-facing order interface iDoc relied on before the patient app
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      2. RESEARCH THAT SHAPED THE PRODUCT
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="research" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Research that shaped the product
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
              The real users were front-desk staff, not the doctors
            </motion.h3>
          </div>

          <div className={`${sectionRight} space-y-4`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-foreground/70 leading-relaxed"
            >
              The VP of Product ran moderated testing sessions with practice staff and patients. One front-desk coordinator (who placed orders daily) became the clearest signal for what needed to change.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-foreground/70 leading-relaxed"
            >
              Staff logged into <span className="text-[#EBB207] font-semibold">four systems</span> to complete one order. Family defaults saved the last patient who ordered, requiring manual corrections. Duplicate carts caused errors. Patients had no visibility into their own prescriptions.
            </motion.p>
          </div>

          {/* Quote card */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionFull}
          >
            <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-accent/[0.04] p-8 lg:p-10">
              <figure>
                <blockquote className="text-xl lg:text-2xl leading-[1.3] text-foreground font-medium tracking-tight space-y-3">
                  <p>&ldquo;Hallelujah.&rdquo;</p>
                  <p>&ldquo;That was amazing. Fantastic.&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-accent">
                  <span className="h-px w-6 bg-accent/30" />
                  Front-desk coordinator, on seeing the family ordering prototype
                </figcaption>
              </figure>
            </div>
          </motion.div>

          {/* Brainstorming FigJam board */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionFull}
          >
            <div className="relative overflow-hidden rounded-xl ring-1 ring-foreground/[0.06]">
              <Image
                src="/waldo/brainstorming.png"
                alt="FigJam board showing early brainstorming and problem-solving for the checkout flow connecting to the doctor's desktop app"
                width={2880}
                height={1800}
                className="w-full h-auto"
              />
            </div>
            <p className="mt-3 text-xs font-mono text-foreground/60 text-center">
              Early FigJam brainstorming, working through the complex checkout flow that had to sync with the doctor&rsquo;s desktop app
            </p>
          </motion.div>

          {/* Journey map — early research artifact */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionFull}
          >
            <a
              href="/waldo/journey-map.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-xl ring-1 ring-foreground/[0.06] hover:ring-accent/40 transition-all duration-500"
            >
              <Image
                src="/waldo/journey-map-preview.png"
                alt="Journey map — mapping the user journey from the moment the doctor or eyecare staff begins patient profile creation"
                width={1200}
                height={264}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/[0.03] transition-colors duration-500" />
            </a>
            <p className="mt-3 text-xs font-mono text-foreground/60 text-center">
              Journey map tracing the full experience from staff profile creation through patient checkout.{" "}
              <a
                href="/waldo/journey-map.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
              >
                View full PDF
              </a>
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      3. WHAT I SHIPPED
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
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/60">
                      {String(idx + 1).padStart(2, "0")} · {s.eyebrow}
                    </p>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                    {s.title}
                  </h3>
                </div>
                <div className={`${sectionRight} space-y-5`}>
                  <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">{s.body}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Patient app screenshots — dashboard, prescriptions, checkout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className={sectionFull}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            <div className="relative overflow-hidden rounded-xl ring-1 ring-foreground/[0.06] max-h-[560px]">
              <Image
                src="/waldo/dashboard.png"
                alt="Patient dashboard showing prescription status and quick-order actions"
                width={794}
                height={2654}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl ring-1 ring-foreground/[0.06] max-h-[560px]">
              <Image
                src="/waldo/prescriptions-list.png"
                alt="Prescription management screen with color-coded validity states"
                width={786}
                height={3478}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl ring-1 ring-foreground/[0.06] max-h-[560px]">
              <Image
                src="/waldo/cart-review.png"
                alt="Mobile checkout flow with prescription-aware cart review"
                width={794}
                height={2654}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <p className="mt-3 text-xs font-mono text-foreground/60 text-center">
            Patient mobile app: dashboard with prescription status, prescription management, and checkout
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      3. THE $5 CONSTRAINT
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="constraint" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          The $5 Constraint
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
              <span className="text-[#EBB207] font-semibold">$5</span> in V0 credits. Twelve checkout iterations. The team found out later.
            </motion.h3>
          </div>

          <div className={`${sectionRight} space-y-5`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-foreground/70 leading-relaxed"
            >
              When V0 credits ran out, I built a personal prototyping environment (Project Bits, using
              Figma Make) to test five-plus checkout flows without burning budget. Stretched $5 across
              <span className="text-[#EBB207] font-semibold">12+ feature iterations</span>. The team only realized once decisions were already faster.
            </motion.p>
          </div>

          {/* Quote */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionFull}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/[0.06] to-background ring-1 ring-accent/[0.08] p-8 lg:p-12">
              <span
                aria-hidden
                className="absolute top-2 right-4 lg:top-0 lg:right-8 text-[12rem] lg:text-[18rem] font-bold leading-none text-accent/[0.04] select-none pointer-events-none"
              >
                &rdquo;
              </span>
              <figure className="relative z-10">
                <blockquote className="text-2xl lg:text-3xl xl:text-4xl leading-[1.2] text-foreground font-medium tracking-tight">
                  &ldquo;{quote.body}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-accent">
                  <span className="h-px w-6 bg-accent/30" />
                  {quote.cite}
                </figcaption>
              </figure>
            </div>
          </motion.div>

          {/* Project Bits demo video — autoplay in iframe */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionFull}
          >
            <div className="relative overflow-hidden rounded-xl ring-1 ring-foreground/[0.06] bg-black aspect-[4/3]">
              <iframe
                src="/waldo/project-bits.mp4"
                className="absolute inset-0 w-full h-full"
                title="Project Bits prototyping environment demo"
                allow="autoplay"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-xs font-mono text-foreground/60 text-center">
              <span className="text-[#EBB207] font-semibold">Project Bits</span>, the private prototyping environment that stretched $5 across 12+ iterations
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      5. LATE-STAGE CHALLENGE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="challenge" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          A new brand arrived two weeks before we shipped
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
              An acquisition brought a completely new identity. I applied it across every screen without delaying dev handoff.
            </motion.h3>
          </div>

          <div className={`${sectionRight} space-y-4`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-foreground/70 leading-relaxed"
            >
              Two weeks before final designs, an acquisition brought a completely new brand identity and style guide.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-foreground/70 leading-relaxed"
            >
              I mapped every updated design token across every patient screen (colors, typography, components) and tested across <span className="text-[#EBB207] font-semibold">every state: loading, error, empty, success</span>. Worked with the design system owner to keep both apps visually cohesive through the transition.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-foreground/70 leading-relaxed"
            >
              The original timeline held. <span className="text-[#EBB207] font-semibold">No delay to dev handoff</span>. The final designs were better for it.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      5b. BRAND EVOLUTION ARTIFACT
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="brand-evolution" className="pb-24 lg:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-base lg:text-lg text-foreground/70 leading-relaxed mb-4"
        >
          Three brand identities. Five months. Same timeline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6"
        >
          {/* First — earliest brand */}
          <div className="relative overflow-hidden rounded-xl ring-1 ring-foreground/[0.06] max-h-[460px] lg:max-h-[500px] w-full max-w-[220px] lg:max-w-[240px]">
            <Image
              src="/waldo/brand-system-01.png"
              alt="Earliest brand identity — Fern"
              width={786}
              height={1974}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Arrow */}
          <div className="flex items-center shrink-0 text-foreground/40">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>

          {/* Second — mid evolution */}
          <div className="relative overflow-hidden rounded-xl ring-1 ring-foreground/[0.06] max-h-[460px] lg:max-h-[500px] w-full max-w-[220px] lg:max-w-[240px]">
            <Image
              src="/waldo/brand-system-02.png"
              alt="Mid-evolution brand identity — Olive"
              width={786}
              height={1974}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Arrow */}
          <div className="flex items-center shrink-0 text-foreground/40">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>

          {/* Third — final brand */}
          <div className="relative overflow-hidden rounded-xl ring-1 ring-foreground/[0.06] max-h-[460px] lg:max-h-[500px] w-full max-w-[220px] lg:max-w-[240px]">
            <Image
              src="/waldo/brand-system-03.png"
              alt="Final brand identity — Bridge"
              width={756}
              height={2000}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-4 text-xs font-mono text-foreground/60 text-center"
        >
          From color system to color system: three brand identities in five months
        </motion.p>

        {/* Fun fact card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-8 p-6 lg:p-8 rounded-2xl bg-accent/[0.04] ring-1 ring-accent/20 max-w-2xl mx-auto"
        >
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-accent mb-3">
            Fun fact
          </p>
          <p className="text-base lg:text-lg text-foreground leading-relaxed">
            The product name changed over five times throughout the process — from <span className="text-foreground font-semibold">Fern</span>, to <span className="text-foreground font-semibold">Olive</span>, to <span className="text-foreground font-semibold">Indigo</span>, and finally to <span className="text-foreground font-semibold">Bridge</span>.
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      5. OUTCOMES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="outcomes" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Outcomes
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base lg:text-lg text-foreground/70 mb-10 max-w-2xl">
            Delivered a month early. Live, in patients&rsquo; hands.
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
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      6. REFLECTIONS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="reflections" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          What I learned designing my first healthcare product
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
              The constraints were real. The prototype-first approach carried us through.
            </motion.h3>
          </div>

          <div className={`${sectionRight} space-y-4`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-foreground/70 leading-relaxed"
            >
              My first healthcare product. The constraints: limited budget, a back injury mid-project, a brand change two weeks before finalization, a dev team in a different time zone.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-foreground/70 leading-relaxed"
            >
              What I&rsquo;d do differently: push for analytics access earlier. We shipped without instrumentation, so I can&rsquo;t measure what I designed. A gap I&rsquo;m carrying into the next project.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-foreground/70 leading-relaxed"
            >
              What worked: the prototype-first approach. By the time requirements were written, the team had already reacted to something real. That <span className="text-[#EBB207] font-semibold">collapsed weeks of alignment into days</span>.
            </motion.p>
          </div>

          {/* Real Talk card */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={sectionFull}
          >
            <div className="rounded-2xl p-8 lg:p-10 bg-foreground text-background">
              <p className="text-label font-mono uppercase tracking-[0.18em] text-background/50 mb-5">
                Real Talk
              </p>
              <div className="space-y-4 text-base lg:text-lg leading-relaxed text-background/85 max-w-3xl">
                <p>
                  The product is live at idocbridge.com. No direct user access for months. The analytics dashboard didn&rsquo;t make V1. My white-label work is in the V2 backlog.
                </p>
                <p>
                  That is product design. Make good decisions within real constraints, keep the team moving, ship something that works, even when it isn&rsquo;t everything you originally designed.
                </p>
                <p className="pt-4 text-background font-medium">
                  One staff member said &ldquo;Hallelujah&rdquo; the first time she saw the prototype work. <span className="text-[#EBB207] font-semibold">That is enough</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      7. CLOSING
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="pb-32">
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
            Visit the live product, or get in touch and I&rsquo;ll talk you through the design decisions,
            including the ones that didn&rsquo;t make it to ship.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href={LINKS.idocbridge}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center h-9 gap-1.5 px-2.5 rounded-lg border border-transparent bg-secondary text-secondary-foreground text-sm font-medium whitespace-nowrap transition-all hover:bg-secondary/80"
            >
              Visit idocbridge.com
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
            <a
              href={`mailto:${LINKS.email}?subject=Waldo%20case%20study`}
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
              { href: "/work/fundr", label: "Fundr" },
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
