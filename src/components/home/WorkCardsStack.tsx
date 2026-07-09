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
      staggerChildren: 0.08,
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
        <div className="mx-auto w-full max-w-[1360px] px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headingVariants}
            className="font-heading text-[30px] sm:text-[40px] lg:text-[54px] font-semibold leading-[1.1] text-hero-text-dark"
          >
            Works
          </motion.h2>
          <p className="text-hero-muted text-body-sm sm:text-body mt-2 max-w-[480px]">
            
          </p>
        </div>
      </section>

      {/* Two-up case study grid */}
      <section id="work" className="relative">
        <div className="mx-auto w-full max-w-[1360px]">
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px 0px -80px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch [&>:nth-child(odd)]:border-r [&>:nth-child(odd)]:border-hero-border"
            style={{ gridAutoRows: "1fr" }}
          >
            {visibleWorkCards.map((card, index) => {
              const offsetClass = "lg:translate-y-0"

              return (
                <motion.div
                  key={card.href}
                  custom={index}
                  variants={cardShellVariants}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.7 }}
                  className={offsetClass}
                >
                  <motion.div variants={cardVariants}>
                    <CaseStudyCard {...card} />
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  )
}
