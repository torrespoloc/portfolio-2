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
import {
  CaseStudyTemplatePra,
  CaseStudySection,
  CaseStudySectionFullBleed,
  EmptySection,
  sectionGrid,
  sectionHeader,
  sectionLeft,
  sectionRight,
  sectionFull,
} from "@/components/case-study/cs-template_2"

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

export default function SevenDishCaseStudy() {
  return (
    <CaseStudyTemplatePra
      meta={meta}
      metaTheme="teal-orange"
      headline={
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2.5 py-1 ring-1 ring-hero-border">
              Food Tech
            </span>
            <span className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground px-2.5 py-1 ring-1 ring-hero-border">
              Consumer mobile
            </span>
          </div>
          <p className="text-label font-mono uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
            7dish &middot; Quebec startup
          </p>
          <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-foreground leading-[1.05] max-w-4xl">
            Redesigning 3 Core Tasks for 7Dish&rsquo;s Meal Planning App
          </h1>
          <div className="flex items-center gap-2 mt-3 text-label font-mono uppercase tracking-[0.18em] text-muted-foreground">
            <span>2023 to 2024</span>
            <span className="text-foreground/20">&middot;</span>
            <span>12 weeks</span>
          </div>
        </div>
      }
      heroImage={
        <div className="relative w-full aspect-[16/10] lg:aspect-[21/9] overflow-hidden ">
          <img
            src="/7dish/webp/hero.webp"
            alt="7dish meal planning app hero"
            loading="lazy"
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
      <CaseStudySection id="problem">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">Context</p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-6`}
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
              className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground"
            >
              A native mobile app opened the door to tackling design debt.
            </motion.h3>
          </div>

          <div className={`${sectionRight} space-y-4`}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-base lg:text-lg text-ink-muted leading-relaxed"
            >
              I was hired by 7dish to redesign 3 core user tasks. Since most users access 7dish on mobile, I was brought in to introduce a native mobile app for meal planning. This initiative allowed me to address existing design debt and usability challenges.
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
                  <span className="text-sm font-mono text-case-highlight shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-foreground/85">{task}</span>
                </li>
              ))}
            </motion.ol>
          </div>
        </motion.div>

        {/* Homepage before/after comparison */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="mt-16"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className=" overflow-hidden ring-1 ring-hairline">
              <img
                src="/7dish/webp/homepage-comparison.webp"
                alt="Homepage before and after comparison showing improved layout, contrast, and navigation"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-ink-muted text-center mt-4">
              Fig. 01, Homepage before and after. The original design suffered from low contrast, unclear layout, and inconsistent navigation.
            </p>
          </motion.div>
        </motion.div>
      </CaseStudySection>

      <EmptySection />

      {/* ══════════════════════════════════════════════════════════════════════
      2. PROCESS & USABILITY AUDIT
      ═══════════════════════════════════════════════════════════════════════ */}
      <CaseStudySection id="audit">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">Analysis</p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-6`}
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
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                I started by auditing and pinpointing existing usability issues, giving a strong foundation to my design decisions.
              </h3>
            </div>
            <div className={`${sectionRight} space-y-4`}>
              <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
                Research based on 7dish&rsquo;s <span className="text-case-highlight font-semibold">analytics and user interviews</span> revealed users often did a &ldquo;back and forth&rdquo; in completing core tasks and reported confusion.
              </p>
              <div>
                <ul className="list-disc list-inside text-base lg:text-lg text-ink-muted leading-relaxed space-y-1">
                  <li>Unclear instructions</li>
                  <li>Icon and common pattern inconsistencies</li>
                  <li>Ineffective navigation</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Existing design review */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            <div className=" overflow-hidden ring-1 ring-hairline">
              <img
                src="/7dish/webp/existing-design.webp"
                alt="Existing design overview showing the original 7dish experience"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-ink-muted text-center mt-4">
              Fig. 02, Existing design overview. The original experience before redesign.
            </p>
          </motion.div>

        </motion.div>
      </CaseStudySection>

      <EmptySection />

      {/* ══════════════════════════════════════════════════════════════════════
      3. CORE TASK #1: CREATE A MEAL PLAN
      ═══════════════════════════════════════════════════════════════════════ */}
      <CaseStudySection id="solution">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">Design</p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-6`}
        >
          Redesigning Core Task #1
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-base lg:text-lg text-ink-muted mb-6 max-w-2xl"
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
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                Creating a meal plan was laborious and adding recipes lacked order.
              </h3>
            </div>
            <div className={sectionRight}>
              <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
                The design audit revealed two key issues. I redesigned the flow with organized daily meal planning, meal type selection (Breakfast, Lunch, Snack, Dinner), and a straightforward approach to adding meals from saved folders.
              </p>
            </div>
          </motion.div>

          {/* User flow diagram */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className=" overflow-hidden ring-1 ring-hairline bg-black">
              <img
                src="/7dish/webp/user-flow.webp"
                alt="User flow diagram showing the redesigned 7dish task journeys"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-ink-muted text-center mt-4">
              Fig. 03, User flow for creating a meal plan, mapped during the audit phase.
            </p>
          </motion.div>

          {/* A/B Testing */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={sectionGrid}
          >
            <div className={sectionLeft}>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                Two concepts went head-to-head. Flexibility lost.
              </h3>
            </div>
            <div className={`${sectionRight} space-y-4`}>
              <div>
                <p className="text-body font-semibold text-foreground/85 mb-1">Concept A (More Flexible), Losing</p>
                <p className="text-body text-ink-muted leading-relaxed">
                  Day-by-day planning with specific prep and cook times. Multi-day selection confused the majority of users, and large food cards felt &ldquo;overwhelming.&rdquo;
                </p>
              </div>
              <div>
                <p className="text-body font-semibold text-case-eyebrow mb-1">Concept B (More Controlled), Winning</p>
                <p className="text-body text-ink-muted leading-relaxed">
                  Single-day selection featuring a horizontal scroll combined with smaller images, plus an accessible, minimizable &ldquo;Unscheduled&rdquo; tab. Users valued quick choice elements and a high-level daily view.
                </p>
              </div>
            </div>
          </motion.div>

          {/* A/B Testing visual */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className=" overflow-hidden ring-1 ring-hairline">
              <img
                src="/7dish/webp/a-b-testing.webp"
                alt="A/B testing comparison, Concept A (flexible) vs Concept B (controlled)"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-ink-muted text-center mt-4">
              Fig. 04, Concept A/B Testing. Users valued quick choices over granular control.
            </p>
          </motion.div>
        </motion.div>
      </CaseStudySection>

      <EmptySection />

      {/* ══════════════════════════════════════════════════════════════════════
      4. CORE TASK #2: SAVING A RECIPE
      ═══════════════════════════════════════════════════════════════════════ */}
      <CaseStudySection id="task-2">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">Design</p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-6`}
        >
          Redesigning Core Task #2
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-base lg:text-lg text-ink-muted mb-6 max-w-2xl"
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
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                Users consistently browse and save recipes, but the original flow lacked a clear connection between &lsquo;Saved&rsquo; and &lsquo;Meal Planner.&rsquo;
              </h3>
            </div>
            <div className={sectionRight}>
              <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
                Users worried about managing a growing, unorganized list. The disconnect between screens meant saved recipes felt like a dead end rather than a tool for planning.
              </p>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={sectionGrid}>
            <div className={sectionLeft}>
            </div>
            <div className={sectionRight}>
              <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
                I added a dedicated search bar on the Saved screen, a sorting button, smaller food cards for consistency, and a single-page user flow.
              </p>
            </div>
          </motion.div>

          {/* Saved visuals */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className=" overflow-hidden ring-1 ring-hairline">
              <img
                src="/7dish/webp/saved-pages.webp"
                alt="Saved Recipes screens showing the new Saved Folders feature"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-ink-muted text-center mt-4">
              Fig. 05, Saved Recipes screens with the new folder system, search bar, and consistent food cards.
            </p>
          </motion.div>

          {/* Saved Folders detail */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className=" overflow-hidden ring-1 ring-hairline">
              <img
                src="/7dish/webp/saved-feature.webp"
                alt="Close-up of the Saved Folders feature with fixed and custom folders"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-ink-muted text-center">
              Fig. 06, Saved Folders feature detail. Fixed system folders + customizable user folders.
            </p>
          </motion.div>
        </motion.div>
      </CaseStudySection>

      <EmptySection />

      {/* ══════════════════════════════════════════════════════════════════════
      5. CORE TASK #3: MAKING A SHOPPING LIST
      ═══════════════════════════════════════════════════════════════════════ */}
      <CaseStudySection id="task-3">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">Design</p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-6`}
        >
          Redesigning Core Task #3
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-base lg:text-lg text-ink-muted mb-6 max-w-2xl"
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
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                Three glaring usability flaws in the original shopping list.
              </h3>
            </div>
            <div className={`${sectionRight} space-y-4`}>
              <div className="space-y-4">
                <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
                  The original design had three issues:
                </p>
                <ul className="list-disc list-inside text-base lg:text-lg text-ink-muted leading-relaxed space-y-1">
                  <li>No option to delete one item at a time (deleting cleared the entire category)</li>
                  <li>Type-in bars instead of dropdowns causing misspellings and miscalculations</li>
                  <li>Excessively flexible adding with unclear iconography</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* The redesign elements */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={sectionGrid}>
            <div className={sectionLeft}>
            </div>
            <div className={sectionRight}>
              <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
                I focused on easy editing and deleting items, predetermined categories attached to items for automated sorting, and clearly separating checked and unchecked items. <span className="text-case-highlight font-semibold">4/5 users</span> explicitly preferred a dedicated separation with color-coded separators.
              </p>
            </div>
          </motion.div>

          {/* Testing visual */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className=" overflow-hidden ring-1 ring-hairline">
              <img
                src="/7dish/webp/core-task-3_shopping-list.webp"
                alt="Core Task #3 shopping list redesign, testing and iteration artifacts"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-ink-muted text-center mt-4">
              Fig. 07, Shopping list testing and iteration. 4/5 users preferred separating checked from unchecked items.
            </p>
          </motion.div>
        </motion.div>
      </CaseStudySection>

      <EmptySection />

      {/* ══════════════════════════════════════════════════════════════════════
      6. TEAM COLLABORATION & STAKEHOLDER ALIGNMENT
      ═══════════════════════════════════════════════════════════════════════ */}
      <CaseStudySection id="reflection">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">Process</p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-6`}
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
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                Major UX changes often introduce internal controversy.
              </h3>
            </div>
            <div className={sectionRight}>
              <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
                Controversial features included eliminating the previous &ldquo;Inspiration&rdquo; page for a new homepage, and the addition of saved recipe folders for higher organization.
              </p>
            </div>
          </motion.div>

          {/* Two controversy cards */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-px overflow-hidden ring-1 ring-hairline bg-hairline"
          >
            <div className="h-full bg-background">
              <h4 className="text-lg font-semibold tracking-tight text-foreground mb-2">
                Eliminating the legacy &ldquo;Inspiration&rdquo; page
              </h4>
              <p className="text-body text-ink-muted leading-relaxed">
                Removed to make room for a direct, intuitive homepage recipe-browsing workflow. <span className="text-case-highlight font-semibold">Stakeholders were hesitant</span>, the page had existed since launch.
              </p>
            </div>

            <div className="h-full bg-background">
              <h4 className="text-lg font-semibold tracking-tight text-foreground mb-2">
                Adding the &ldquo;Saved Recipes Folders&rdquo; feature
              </h4>
              <p className="text-body text-ink-muted leading-relaxed">
                Added technical scope but drastically improved user organization. Not in the original brief, <span className="text-case-highlight font-semibold">had to be justified with evidence.</span>
              </p>
            </div>
          </motion.div>

          {/* Resolution */}
          <motion.aside
            variants={fadeUp}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-secondary/40 border-l-2 border-highlight"
          >
            <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
              Positive user testing results helped convince my client of these major changes. I shared quotes and data from concept tests with 3 stakeholders. Hearing about the value and utility from our prospective users was enough to convince them that these features should be developed.
            </p>
          </motion.aside>

          {/* Zoom team */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className=" overflow-hidden ring-1 ring-hairline">
              <img
                src="/7dish/webp/zoom-team.webp"
                alt="Jacki working with the 7dish team on Zoom, design collaboration session"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-ink-muted text-center mt-4">
              Fig. 08, Design collaboration session with the 7dish team. Aligning stakeholders with evidence, not taste.
            </p>
          </motion.div>
        </motion.div>
      </CaseStudySection>

      <EmptySection />

      {/* ══════════════════════════════════════════════════════════════════════
      7. FINAL TESTING & EXPECTED IMPACT
      ═══════════════════════════════════════════════════════════════════════ */}
      <CaseStudySection id="impact">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">Impact</p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${sectionHeader} mb-6`}
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
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-foreground">
                Testing all three redesigned core tasks together revealed a vastly improved end-to-end ecosystem.
              </h3>
            </div>
            <div className={sectionRight}>
              <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
                When flows that were previously disconnected finally worked together, users noticed immediately. The results confirmed the direction.
              </p>
            </div>
          </motion.div>

          {/* Final metrics */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-px overflow-hidden ring-1 ring-hairline bg-hairline">
              {[
                "10/10 of users rated the new app design an 8 or above across Functionality, User-Friendliness, and Aesthetics.",
                "8/10 users gave positive feedback pointing to higher overall satisfaction and word-of-mouth recommendations.",
                "Custom search metrics and toggle states give users complete ownership over their dashboards.",
                "Eliminating shopping list configuration obstacles ensures users transition from digital planning to real-world execution.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex h-full gap-4 bg-background"
                >
                  <span className="text-body-sm font-mono text-case-highlight shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-body text-ink-muted leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Survey visual */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className=" overflow-hidden ring-1 ring-hairline">
              <img
                src="/7dish/webp/survey.webp"
                alt="User testing survey results showing high satisfaction scores"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <p className="text-body-sm font-mono uppercase tracking-[0.18em] text-ink-muted text-center mt-4">
              Fig. 09, Final user testing survey results. 10/10 users rated the new design 8 or above.
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
                <figcaption className="mt-4 text-body-sm font-mono uppercase tracking-[0.18em] text-ink-muted">
, {q.cite}
                </figcaption>
              </figure>
            ))}
          </motion.div>

          {/* Projected business impact */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={sectionGrid}>
            <div className={sectionLeft}>
            </div>
            <div className={`${sectionRight} space-y-3`}>
              <ul className="space-y-2 text-body text-ink-muted">
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">&#9656;</span>
                  <span><strong className="text-foreground/80 font-medium">Organic Growth:</strong> Positive feedback from 8/10 users points to higher overall satisfaction, driving word-of-mouth app recommendations.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">&#9656;</span>
                  <span><strong className="text-foreground/80 font-medium">Personalization:</strong> Custom search metrics and toggle states give users complete ownership over their dashboards.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted mt-1 shrink-0">&#9656;</span>
                  <span><strong className="text-foreground/80 font-medium">Frictionless Utility:</strong> Eliminating the shopping list configuration obstacles ensures users successfully transition from digital planning to real-world execution.</span>
                </li>
              </ul>
            </div>
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
          className=" p-8 lg:p-10 bg-foreground text-background"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] mb-5">
            Want a walkthrough?
          </h3>
          <p className="text-base lg:text-lg text-background/75 leading-relaxed mb-6 max-w-2xl">
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
      </CaseStudySectionFullBleed>
      </div>
    </CaseStudyTemplatePra>
  )
}
