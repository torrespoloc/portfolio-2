"use client"

import { motion, MotionConfig, type Variants } from "framer-motion"
import { CaseStudyCard } from "@/components/case-study-card"
import { getWorkCards } from "@/lib/data/home"

const workCards = getWorkCards()

/* ── Section heading entrance ── */
const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

/* ── Card entrance ── */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.06,
    },
  },
}

const cardShellVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: index % 2 === 1 ? 42 : 28,
    scale: 0.985,
  }),
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: index * 0.02,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

/* ── Main component ── */
type WorkCardsStackProps = {
  show7dish?: boolean
}

export function WorkCardsStack({ show7dish = true }: WorkCardsStackProps) {
  const visibleWorkCards = show7dish
    ? workCards
    : workCards.filter((card) => card.href !== "/work/7dish")

  return (
    <MotionConfig reducedMotion="user">
      {/* Heading */}
      <section className="pt-16 pb-12 relative z-10">
        <div className="mx-auto w-full max-w-container px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headingVariants}
            className="font-heading text-[24px] sm:text-[36px] lg:text-[54px] font-semibold leading-[1.1] text-hero-text-dark"
          >
            Works
          </motion.h2>
          <p className="text-hero-muted text-body-sm sm:text-body mt-2 max-w-[480px]">

          </p>
        </div>
      </section>

      {/* Two-up case study grid */}
      <section id="work" className="relative border-t border-hero-border/60">
        <div className="mx-auto w-full max-w-container">
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px 0px -80px" }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-y-0 items-stretch [&>*]:min-h-0"
          >
            {visibleWorkCards.flatMap((card, index) => {
              const isLast = index === visibleWorkCards.length - 1
              const isFirstInRow = index % 2 === 0

              const cardEl = (
                <motion.div
                  key={card.href}
                  custom={index}
                  variants={cardShellVariants}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.7 }}
                  className="h-full lg:translate-y-0"
                >
                  <motion.div variants={cardVariants} className="h-full">
                    <CaseStudyCard {...card} />
                  </motion.div>
                </motion.div>
              )

              if (isLast) return [cardEl]

              const isRowEnd = (index + 1) % 2 === 0

              const elements = [cardEl]

              // Column separator between left/right cards (desktop only)
              if (isFirstInRow && !isLast) {
                elements.push(
                  <div
                    key={`col-sep-${card.href}`}
                    className="hidden lg:block border-x border-hero-border/60 w-6 self-stretch"
                  />
                )
              }

              elements.push(
                <div
                  key={`sep-${card.href}`}
                  className={`border-y border-hero-border/60 h-4 ${
                    isRowEnd
                      ? "lg:col-span-3 lg:h-6"
                      : "lg:hidden"
                  }`}
                />
              )

              return elements
            })}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  )
}
