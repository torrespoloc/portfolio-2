"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Search,
  FolderHeart,
  ListChecks,
  CalendarDays,
} from "lucide-react"
import { LINKS, TOOL_LOGOS } from "@/lib/constants"
import { TooltipIcon } from "@/components/ui/tooltip-icon"
import { CaseStudyTemplatePra } from "@/components/case-study/cs-template_2"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

const meta = {
  role: "UX/UI Designer",
  duration: "12 weeks",
  team: "7-person startup, Quebec",
  tools: (
    <div className="flex flex-wrap items-center gap-1.5">
      {["Figma"].map((tool) => {
        const logo = TOOL_LOGOS[tool]
        if (!logo) return null
        return <TooltipIcon key={tool} src={logo} alt={tool} tooltip={tool} className="h-6 w-6 rounded-sm" />
      })}
    </div>
  ),
}

const sectionGrid = "grid grid-cols-1 lg:grid-cols-12 gap-x-8 lg:gap-x-14 gap-y-8"
const sectionLeft = "lg:col-span-5"
const sectionRight = "lg:col-span-7"
const sectionFull = "lg:col-span-12"

const sectionHeader =
  "font-[family-name:var(--font-heading)] italic text-3xl sm:text-4xl lg:text-5xl text-accent tracking-tight leading-[1.1]"

export default function SevenDishCaseStudy() {
  return (
    <CaseStudyTemplatePra
      meta={meta}
      metaTheme="teal-orange"
      headline={
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2.5 py-1 rounded-full ring-1 ring-foreground/[0.08]">
              Food Tech
            </span>
            <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2.5 py-1 rounded-full ring-1 ring-foreground/[0.08]">
              Consumer mobile
            </span>
          </div>
          <p className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
            7dish &middot; Quebec startup
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-foreground leading-[1.05] max-w-4xl">
            Redesigning 3 Core Tasks for 7Dish&rsquo;s Meal Planning App
          </h1>
          <div className="flex items-center gap-2 mt-3 text-label font-mono uppercase tracking-[0.18em] text-muted-foreground">
            <span>2023 &mdash; 2024</span>
            <span className="text-foreground/20">&middot;</span>
            <span>12 weeks</span>
          </div>
        </div>
      }
      heroImage={
        <div className="relative w-full aspect-[16/10] lg:aspect-[21/9] overflow-hidden rounded-xl">
          <img
            src="/7dish/hero"
            alt="7dish meal planning app hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      }
    >
      {/* Teal + orange accent override for this project */}
      <div className="[--accent:#0D9488]">
        {/* ══════════════════════════════════════════════════════════════════════
        1. BACKGROUND & PROJECT GOALS
        ═══════════════════════════════════════════════════════════════════════ */}
      <section id="problem" className="pt-16 lg:pt-24 pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Background &amp; Project Goals
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
              A native mobile app opened the door to tackling design debt.
            </motion.h3>
          </div>

          <div className={`${sectionRight} space-y-4`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-foreground/70 leading-relaxed"
            >
              Considering the majority of its user base access 7dish on mobile, 7dish hired me to introduce a native mobile app for meal planning. This initiative opened the door to tackling the existing design debt while addressing usability challenges in the previous design.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-foreground/70 leading-relaxed"
            >
              7dish users struggled when performing core tasks, often stemming from feeling confused or having a sense of getting lost throughout their journeys. I was hired to determine the root causes behind users&rsquo; struggles and to redesign{" "}
              <strong className="text-foreground/85 font-medium">3 core user tasks</strong>:
            </motion.p>

            <motion.ol
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3"
            >
              {[
                "Creating a meal plan",
                "Saving a recipe",
                "Creating a shopping list",
              ].map((task, i) => (
                <li key={task} className="flex gap-3 items-start">
                  <span className="text-sm font-mono text-accent shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-foreground/85">{task}</span>
                </li>
              ))}
            </motion.ol>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      2. PROCESS & USABILITY AUDIT
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="audit" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Process &amp; Usability Audit
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="space-y-16"
        >
          {/* Intro */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={sectionGrid}>
            <div className={sectionLeft}>
              <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                I started by auditing and pinpointing existing usability issues, giving a strong foundation to my design decisions.
              </h3>
            </div>
            <div className={sectionRight}>
              <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                The audit revealed consistent patterns across the experience: wasted screen real estate, unclear instructions, non-compliant contrast, inconsistent button states, and navigation that hindered smooth task completion.
              </p>
            </div>
          </motion.div>

          {/* Design audit */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="rounded-2xl overflow-hidden ring-1 ring-foreground/[0.06]">
              <img
                src="/7dish/design-audit"
                alt="7dish design audit showing usability issues identified across the experience"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-foreground/70 text-center mt-4">
              Fig. 01 &mdash; Design audit across the experience: wasted screen real estate, unclear instructions, contrast failures, inconsistency, and navigation issues.
            </p>
          </motion.div>

          {/* Audit findings grid */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-xl p-6 bg-background ring-1 ring-foreground/[0.06]">
                <p className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  Homepage Audit (Before)
                </p>
                <ul className="space-y-2 text-body text-foreground/70">
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                    <span><strong className="text-foreground/80 font-medium">Unnecessary use of space:</strong> Elements took up too much premium screen real estate.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                    <span><strong className="text-foreground/80 font-medium">Unclear instructions &amp; misleading descriptions:</strong> Long, dense copy made it difficult for users to scan and figure out where to start.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                    <span><strong className="text-foreground/80 font-medium">Non-compliant contrast:</strong> Text and visual treatments did not meet contrast standards.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                    <span><strong className="text-foreground/80 font-medium">Lack of consistency:</strong> Most buttons used the same color regardless of their active/inactive state.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                    <span><strong className="text-foreground/80 font-medium">Ineffective navigation:</strong> Blocked buttons and long, unclear copy hindered smooth task completion.</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl p-6 bg-background ring-1 ring-foreground/[0.06]">
                <p className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  Homepage Solutions (After)
                </p>
                <ul className="space-y-2 text-body text-foreground/70">
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                    <span><strong className="text-foreground/80 font-medium">Short instructions:</strong> Clear copy with prioritized, top-of-page placement to save screen real estate.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                    <span><strong className="text-foreground/80 font-medium">New food cards:</strong> Food titles separated from images to ensure AAA compliant contrast.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                    <span><strong className="text-foreground/80 font-medium">New home button:</strong> Added clear active-state indicators to all navigation icons.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Eyes illustration */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          >
            <div className="rounded-2xl overflow-hidden ring-1 ring-foreground/[0.06]">
              <img
                src="/7dish/eyes"
                alt="Fresh eyes on the usability audit &mdash; seeing the design through users&rsquo; perspective"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-foreground/70 text-center mt-4">
              Fig. 01b &mdash; Seeing the existing experience through users&rsquo; eyes revealed the patterns that needed to change.
            </p>
          </motion.div>

          {/* User flow diagram */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <div className="rounded-2xl overflow-hidden ring-1 ring-foreground/[0.06]">
              <img
                src="/7dish/userflow-dia"
                alt="User flow diagram showing the redesigned 7dish task journeys"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-foreground/70 text-center mt-4">
              Fig. 01c &mdash; End-to-end user flow across the three core tasks, mapped during the audit phase.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      3. CORE TASK #1: CREATE A MEAL PLAN
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="solution" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-3`}
        >
          Redesigning Core Task #1
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-base lg:text-lg text-foreground/70 mb-16 max-w-2xl"
        >
          Create a Meal Plan
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="space-y-16"
        >
          {/* Problem + solution */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={sectionGrid}>
            <div className={sectionLeft}>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-foreground/[0.04] ring-1 ring-foreground/[0.06] text-foreground/70">
                  <CalendarDays className="h-4 w-4" />
                </span>
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  The problem
                </p>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                Creating a meal plan was laborious and adding recipes lacked order.
              </h3>
            </div>
            <div className={sectionRight}>
              <p className="text-base lg:text-lg text-foreground/70 leading-relaxed mb-4">
                Our initial design audit highlighted that the existing flow was fragmented and unintuitive. To fix this, I introduced:
              </p>
              <ul className="space-y-2 text-body text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                  <span>Organized <strong className="text-foreground/80 font-medium">daily</strong> meal planning hierarchy.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                  <span>Meal type <strong className="text-foreground/80 font-medium">selection</strong> (Breakfast, Lunch, Snack, Dinner).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                  <span>A straightforward approach to adding meals directly from saved folders.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* A/B Testing */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={sectionGrid}
          >
            <div className={sectionLeft}>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-foreground/[0.04] ring-1 ring-foreground/[0.06] text-foreground/70">
                  <Sparkles className="h-4 w-4" />
                </span>
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  Concept A/B Testing
                </p>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                Two concepts went head-to-head. Flexibility lost.
              </h3>
            </div>
            <div className={`${sectionRight} space-y-4`}>
              <div>
                <p className="text-body font-semibold text-foreground/85 mb-1">Concept A (More Flexible)</p>
                <p className="text-body text-foreground/70 leading-relaxed">
                  Day-by-day planning with specific prep and cook times, offering a granular, time-focused design.{" "}
                  <span className="text-foreground/50 italic">Result: The majority of users were confused by multiple selections, and large food cards felt visually &ldquo;overwhelming.&rdquo;</span>
                </p>
              </div>
              <div>
                <p className="text-body font-semibold text-accent mb-1">Concept B (More Controlled) &mdash; Winning Concept</p>
                <p className="text-body text-foreground/70 leading-relaxed">
                  Single-day selection featuring a horizontal scroll combined with smaller images. It also included an accessible, minimizable &ldquo;Unscheduled&rdquo; tab for quick drafts.{" "}
                  <span className="text-foreground/80 font-medium">This won definitively.</span> Users highly valued quick choice elements (dropdowns/horizontal scrolls) and a high-level daily view.
                </p>
              </div>
            </div>
          </motion.div>

          {/* A/B Testing visual */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="rounded-2xl overflow-hidden ring-1 ring-foreground/[0.06]">
              <img
                src="/7dish/a-b-testing.png"
                alt="A/B testing comparison &mdash; Concept A (flexible) vs Concept B (controlled)"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-foreground/70 text-center mt-4">
              Fig. 02 &mdash; Concept A (left) vs. Concept B (right). Users valued quick choices over granular control.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      4. CORE TASK #2: SAVING A RECIPE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="task-2" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-3`}
        >
          Redesigning Core Task #2
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-base lg:text-lg text-foreground/70 mb-16 max-w-2xl"
        >
          Saving a Recipe
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="space-y-16"
        >
          {/* Problem */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={sectionGrid}>
            <div className={sectionLeft}>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-foreground/[0.04] ring-1 ring-foreground/[0.06] text-foreground/70">
                  <Search className="h-4 w-4" />
                </span>
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  The problem
                </p>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                Users consistently browse and save recipes, but the original flow lacked a clear connection between &lsquo;Saved&rsquo; and &lsquo;Meal Planner.&rsquo;
              </h3>
            </div>
            <div className={sectionRight}>
              <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                Users also worried about managing a rapidly growing, unorganized list. The disconnect between screens meant saved recipes felt like a dead end rather than a tool for planning.
              </p>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={sectionGrid}>
            <div className={sectionLeft}>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-foreground/[0.04] ring-1 ring-foreground/[0.06] text-foreground/70">
                  <FolderHeart className="h-4 w-4" />
                </span>
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  The streamlined &lsquo;Saved&rsquo; solutions
                </p>
              </div>
            </div>
            <div className={`${sectionRight} space-y-2`}>
              <ul className="space-y-2 text-body text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                  <span><strong className="text-foreground/80 font-medium">Dedicated search bar</strong> built directly into the &lsquo;Saved&rsquo; screen.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                  <span><strong className="text-foreground/80 font-medium">Sorting and filtering</strong> controls.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                  <span><strong className="text-foreground/80 font-medium">Smaller, consistent food cards</strong> to eliminate visually overwhelming vertical scrolling.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                  <span>
                    <strong className="text-foreground/80 font-medium">Saved Folders feature:</strong> Implemented fixed system folders (e.g.,{" "}
                    <em>&lsquo;Meals Made&rsquo;</em>, <em>&lsquo;My Recipes&rsquo;</em>) alongside customizable user folders (e.g.,{" "}
                    <em>&lsquo;Christmas 2024&rsquo;</em>, <em>&lsquo;Halloween Recipes&rsquo;</em>). This gave users the flexibility to pre-plan future events without committing them to their active weekly schedule.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Saved visuals */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden ring-1 ring-foreground/[0.06]">
              <img
                src="/7dish/saved-pages.png"
                alt="Saved Recipes screens showing the new Saved Folders feature"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-foreground/70 text-center">
              Fig. 03 &mdash; Saved Recipes screens with the new folder system, search bar, and consistent food cards.
            </p>
            <div className="rounded-2xl overflow-hidden ring-1 ring-foreground/[0.06]">
              <img
                src="/7dish/saved-feature.png"
                alt="Close-up of the Saved Folders feature with fixed and custom folders"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-foreground/70 text-center">
              Fig. 04 &mdash; Saved Folders feature detail. Fixed system folders + customizable user folders.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      5. CORE TASK #3: MAKING A SHOPPING LIST
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="task-3" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-3`}
        >
          Redesigning Core Task #3
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-base lg:text-lg text-foreground/70 mb-16 max-w-2xl"
        >
          Making a Shopping List
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="space-y-16"
        >
          {/* The 3 flaws */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={sectionGrid}>
            <div className={sectionLeft}>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-foreground/[0.04] ring-1 ring-foreground/[0.06] text-foreground/70">
                  <ListChecks className="h-4 w-4" />
                </span>
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  The problem
                </p>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                Three glaring usability flaws in the original shopping list.
              </h3>
            </div>
            <div className={`${sectionRight} space-y-4`}>
              <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                A shopping list is the final fundamental step of the meal planning journey. The original design had three issues that made this step frustrating:
              </p>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-body-sm font-mono text-foreground/70 shrink-0 pt-0.5">01</span>
                  <span className="text-body text-foreground/70">Absence of an option to delete one item at a time (deleting cleared the entire category).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-body-sm font-mono text-foreground/70 shrink-0 pt-0.5">02</span>
                  <span className="text-body text-foreground/70">Use of free-form type-in bars instead of predictive dropdowns led to frequent misspellings and miscalculations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-body-sm font-mono text-foreground/70 shrink-0 pt-0.5">03</span>
                  <span className="text-body text-foreground/70">Unclear iconography (Users noted: <em>&ldquo;I don&rsquo;t understand what &lsquo;+ usuals&rsquo; means&rdquo;</em>).</span>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* The redesign elements */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={sectionGrid}>
            <div className={sectionLeft}>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-accent/10 ring-1 ring-accent/20 text-accent">
                  <Sparkles className="h-4 w-4" />
                </span>
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  The redesign elements
                </p>
              </div>
            </div>
            <div className={`${sectionRight} space-y-4`}>
              <ul className="space-y-2 text-body text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                  <span><strong className="text-foreground/80 font-medium">Easy editing/deletion</strong> of individual line items.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                  <span><strong className="text-foreground/80 font-medium">Predetermined categories</strong> attached to items for automated, efficient sorting.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                  <span>
                    <strong className="text-foreground/80 font-medium">Clear separation of checked vs. unchecked items:</strong> While the initial concept kept them on one screen, 4/5 users explicitly preferred a dedicated separation to track purchases cleanly. I added distinct color-coded separators to streamline the shopping experience.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Testing visual */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="rounded-2xl overflow-hidden ring-1 ring-foreground/[0.06]">
              <img
                src="/7dish/testing-iterating.png"
                alt="Shopping list redesign &mdash; testing and iteration artifacts"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-foreground/70 text-center mt-4">
              Fig. 05 &mdash; Shopping list testing and iteration. 4/5 users preferred separating checked from unchecked items.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      6. TEAM COLLABORATION & STAKEHOLDER ALIGNMENT
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="reflection" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Team Collaboration &amp; Stakeholder Alignment
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="space-y-10"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={sectionGrid}>
            <div className={sectionLeft}>
              <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                Major UX changes often introduce internal controversy.
              </h3>
            </div>
            <div className={sectionRight}>
              <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                For this project, the primary points of alignment involved:
              </p>
            </div>
          </motion.div>

          {/* Two controversy cards */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div className="rounded-2xl p-6 lg:p-8 bg-background ring-1 ring-foreground/[0.06]">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-foreground/[0.04] ring-1 ring-foreground/[0.06] text-foreground/70">
                  <Sparkles className="h-4 w-4" />
                </span>
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  Controversial decision
                </p>
              </div>
              <h4 className="text-lg font-semibold tracking-tight text-foreground mb-2">
                Eliminating the legacy &ldquo;Inspiration&rdquo; page
              </h4>
              <p className="text-body text-foreground/70 leading-relaxed">
                Removed to make room for a direct, intuitive homepage recipe-browsing workflow. Stakeholders were hesitant &mdash; the page had existed since launch.
              </p>
            </div>

            <div className="rounded-2xl p-6 lg:p-8 bg-background ring-1 ring-foreground/[0.06]">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-foreground/[0.04] ring-1 ring-foreground/[0.06] text-foreground/70">
                  <FolderHeart className="h-4 w-4" />
                </span>
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  Scope expansion
                </p>
              </div>
              <h4 className="text-lg font-semibold tracking-tight text-foreground mb-2">
                Adding the &ldquo;Saved Recipes Folders&rdquo; feature
              </h4>
              <p className="text-body text-foreground/70 leading-relaxed">
                Added technical scope but drastically improved user organization. Not in the original brief &mdash; had to be justified with evidence.
              </p>
            </div>
          </motion.div>

          {/* Resolution */}
          <motion.aside
            variants={fadeUp}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-6 lg:p-8 bg-foreground/[0.02] ring-1 ring-foreground/[0.06]"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-accent/10 ring-1 ring-accent/20 text-accent">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
                How we aligned
              </p>
            </div>
            <ul className="text-base lg:text-lg text-foreground/70 leading-relaxed list-disc pl-5 space-y-1.5">
              <li>To align the 3 key stakeholders, I leveraged <span className="text-accent font-semibold">quantitative data</span> and <span className="text-accent font-semibold">qualitative quotes</span> from concept usability tests.</li>
              <li>Hearing direct utility metrics from prospective users completely cleared the development blockers.</li>
              <li>The arguments stopped being about <span className="text-accent font-semibold">taste</span> and started being about <span className="text-accent font-semibold">evidence</span>.</li>
            </ul>
          </motion.aside>

          {/* Zoom team */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden ring-1 ring-foreground/[0.06]">
              <img
                src="/7dish/zoom-team"
                alt="Jacki working with the 7dish team on Zoom &mdash; design collaboration session"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-foreground/70 text-center mt-4">
              Fig. 06a &mdash; Design collaboration session with the 7dish team. Aligning stakeholders with evidence, not taste.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      7. FINAL TESTING & EXPECTED IMPACT
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="impact" className="pb-24 lg:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-12`}
        >
          Final Testing &amp; Expected Impact
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="space-y-16"
        >
          {/* Intro + metrics */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={sectionGrid}>
            <div className={sectionLeft}>
              <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                Testing all three redesigned core tasks together revealed a vastly improved end-to-end ecosystem.
              </h3>
            </div>
            <div className={sectionRight}>
              <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                When flows that were previously disconnected finally worked together, users noticed immediately. The results confirmed the direction.
              </p>
            </div>
          </motion.div>

          {/* Final metrics */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Final Metrics
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                "10/10 of users rated the new app design an 8 or above across Functionality, User-Friendliness, and Aesthetics.",
                "8/10 users gave positive feedback pointing to higher overall satisfaction and word-of-mouth recommendations.",
                "Custom search metrics and toggle states give users complete ownership over their dashboards.",
                "Eliminating shopping list configuration obstacles ensures users transition from digital planning to real-world execution.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 p-5 rounded-xl bg-background ring-1 ring-foreground/[0.06]"
                >
                  <span className="text-body-sm font-mono text-foreground/70 shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-body text-foreground/70 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Survey visual */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="rounded-2xl overflow-hidden ring-1 ring-foreground/[0.06]">
              <img
                src="/7dish/survey.png"
                alt="User testing survey results showing high satisfaction scores"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-foreground/70 text-center mt-4">
              Fig. 06 &mdash; Final user testing survey results. 10/10 users rated the new design 8 or above.
            </p>
          </motion.div>

          {/* User quotes */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="space-y-8">
            {[
              { body: "I love how I can now personalize more than I was able to before.", cite: "User testing participant" },
              { body: "This new one feels so fresh, and I can't wait for it to be out.", cite: "User testing participant" },
            ].map((q, i) => (
              <figure key={i} className="border-l-2 border-accent pl-6 lg:pl-8 max-w-3xl">
                <blockquote className="text-lg lg:text-xl xl:text-2xl leading-[1.3] text-foreground/90 font-medium tracking-tight">
                  &ldquo;{q.body}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-body-sm font-mono uppercase tracking-[0.18em] text-foreground/70">
                  &mdash; {q.cite}
                </figcaption>
              </figure>
            ))}
          </motion.div>

          {/* Projected business impact */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={sectionGrid}>
            <div className={sectionLeft}>
              <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Projected Business &amp; User Impact
              </p>
            </div>
            <div className={`${sectionRight} space-y-3`}>
              <ul className="space-y-2 text-body text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                  <span><strong className="text-foreground/80 font-medium">Organic Growth:</strong> Positive feedback from 8/10 users points to higher overall satisfaction, driving word-of-mouth app recommendations.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                  <span><strong className="text-foreground/80 font-medium">Personalization:</strong> Custom search metrics and toggle states give users complete ownership over their dashboards.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground/70 mt-1 shrink-0">&#9656;</span>
                  <span><strong className="text-foreground/80 font-medium">Frictionless Utility:</strong> Eliminating the shopping list configuration obstacles ensures users successfully transition from digital planning to real-world execution.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
      CLOSING
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl p-8 lg:p-10 bg-foreground text-background"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] mb-5">
            Want a walkthrough?
          </h3>
          <p className="text-base lg:text-lg text-background/75 leading-relaxed mb-8 max-w-2xl">
            Visuals are client-confidential. Email me and I&rsquo;ll talk you through the A/B test, the Saved
            Folders argument, and the stakeholder meetings I had to win.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${LINKS.email}?subject=7dish%20case%20study`}
              className="inline-flex shrink-0 items-center justify-center h-9 gap-1.5 px-2.5 rounded-lg border border-transparent bg-secondary text-secondary-foreground text-sm font-medium whitespace-nowrap transition-all hover:bg-secondary/80"
            >
              Email me
              <Sparkles className="ml-1 h-4 w-4" />
            </a>
            <a
              href="/#work"
              className="inline-flex shrink-0 items-center justify-center h-9 gap-1.5 px-2.5 rounded-lg border border-transparent text-sm font-medium whitespace-nowrap transition-all text-background hover:text-background hover:bg-background/10"
            >
              More work
            </a>
          </div>
        </motion.div>
      </section>
      </div>
    </CaseStudyTemplatePra>
  )
}
