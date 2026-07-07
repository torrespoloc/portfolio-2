"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { HowIWorkCards } from "./HowIWorkCards"
import { MyJamFlipCard } from "./MyJamFlipCard"
import { TypewriterTag } from "./TypewriterTag"
import { CopyEmail } from "./CopyEmail"
import { ScrollChevron } from "./ScrollChevron"

/* ── Heading text ── */
const headingLines = [
  ["Hey,", "I'm", "Jacki—I", "design"],
  ["apps", "and", "systems", "that", "make", "users", "say:"],
  ["Omg!", "This", "thing", "WORKS!"],
]

/* ── Section-level orchestration ── */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
}

const sectionUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.8,
    },
  },
}

/* ── Heading word-level animation ── */
const headingWords: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
}

const wordSlideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 17,
    },
  },
}

const wordPop: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
}

/* ── Card-level stagger ── */
const cardList: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 16,
    },
  },
}

export function HeroContent() {
  const prefersReducedMotion = useReducedMotion()

  const animProps = prefersReducedMotion
    ? { initial: "visible" as const, animate: "visible" as const }
    : { initial: "hidden" as const, animate: "visible" as const }

  return (
    <section className="relative flex flex-col justify-center min-h-[100svh] px-6 pt-[76px] sm:py-20 lg:py-24">
      {/* Blur blobs — fade in for atmosphere, then float continuously */}
      <motion.div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="absolute w-[280px] h-[280px] rounded-full animate-float-geometric"
          style={{
            background: "radial-gradient(50% 50%, rgb(72, 91, 252) 0%, rgb(45, 55, 200) 100%)",
            filter: "blur(70px)",
            opacity: "0.15",
            top: "-60px",
            left: "clamp(-60px, -4vw, 40px)",
          }}
        />
        <div
          className="absolute w-[280px] h-[280px] rounded-full animate-float-geometric-slow"
          style={{
            background: "radial-gradient(50% 50%, rgb(216, 180, 254) 99.99%, rgb(170, 125, 210) 100%)",
            filter: "blur(80px)",
            opacity: "0.15",
            top: "clamp(20px, 4vw, 80px)",
            left: "clamp(300px, 36vw, 540px)",
          }}
        />
        <div
          className="absolute w-[280px] h-[280px] rounded-full animate-float-geometric-alt"
          style={{
            background: "radial-gradient(50% 50%, rgb(72, 91, 252) 0%, rgb(216, 180, 254) 100%)",
            filter: "blur(80px)",
            opacity: "0.15",
            top: "clamp(-100px, -8vw, -20px)",
            left: "clamp(600px, 60vw, 900px)",
          }}
        />
      </motion.div>

      <motion.div
        className="mx-auto w-full max-w-[1248px] relative z-10 md:px-12"
        variants={containerVariants}
        {...animProps}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Heading — word-by-word reveal */}
          <motion.h1
            variants={headingWords}
            className="w-full max-w-[900px] mx-auto flex flex-col items-center font-display text-hero-text text-[clamp(18px,5.8vw,80px)] leading-[1.08] tracking-tight text-center font-medium"
          >
            {headingLines.map((line, lineIndex) => {
              const isPunchline = lineIndex === headingLines.length - 1

              return (
                <span
                  key={`line-${lineIndex}`}
                  className={`block md:whitespace-nowrap ${isPunchline ? "text-accent" : ""}`}
                >
                  {line.map((word, wordIndex) => (
                    <motion.span
                      key={`l${lineIndex}-${wordIndex}`}
                      variants={isPunchline ? wordPop : wordSlideUp}
                      className="inline-block mr-[0.2em]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              )
            })}
          </motion.h1>

          {/* Hero cards — staggered card by card */}
          <motion.div variants={sectionUp} className="mt-12">
            <motion.div variants={cardList}>
              <HowIWorkCards>
                <motion.div variants={cardUp}>
                  <div className="self-stretch min-w-[220px] max-w-[306px] rounded-[20px] border border-hero-border bg-hero-card p-5 flex flex-col mx-3 md:mx-0">
                    <p className="text-sm md:text-body font-bold uppercase tracking-wider text-brand-accent mb-2">
                      DESIGN ENG. RULES!
                    </p>
                    <p className="text-body-mobile md:text-body text-hero-text leading-relaxed font-semibold flex-1">
                      <img src="/logos/cursor.png" alt="Cursor" className="inline-block h-[30px] w-auto align-middle mr-0.5" />,
                      <img src="/logos/claude-code.png" alt="Claude Code" className="inline-block h-[36px] w-auto align-middle mr-0.5" />,
                      <img src="/logos/figma.png" alt="Figma" className="inline-block h-[30px] w-auto align-middle mr-0.5 rounded" />
                      ; I ship real production code, not just mockups.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={cardUp} className="md:flex-1 md:min-w-[244px]">
                  <div className="self-center flex flex-col items-center gap-3">
                    <MyJamFlipCard />
                    <div className="md:hidden">
                      <TypewriterTag />
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={cardUp}>
                  <div className="self-stretch min-w-[220px] max-w-[306px] rounded-[20px] border border-hero-border bg-hero-card p-5 relative overflow-hidden flex flex-col mx-3 md:mx-0">
                    <p className="text-sm md:text-body font-bold uppercase tracking-wider text-brand-accent mb-2">
                      Community Builder
                    </p>
                    <p className="text-body-mobile md:text-body text-hero-text leading-relaxed relative z-10 font-semibold">
                      I founded and lead The UX Chats, a 200 member community for UXers.
                    </p>
                    <img
                      src="/the-ux-chats-logo.png"
                      alt="The UX Chats logo"
                      className="absolute bottom-1 right-1 w-12 h-12 object-contain rotate-6"
                    />
                  </div>
                </motion.div>
              </HowIWorkCards>
            </motion.div>
          </motion.div>

          {/* TypewriterTag — desktop */}
          <motion.div variants={sectionUp} className="hidden md:flex justify-center mt-5">
            <TypewriterTag />
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div variants={sectionUp} className="mt-10 md:mt-8 flex flex-col items-center gap-5">
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/about"
              className="inline-flex items-center justify-center h-[38px] px-6 rounded-[20px] text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              About me
            </a>
            <a
              href="https://www.linkedin.com/in/jackelinetorres/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[38px] px-6 rounded-[20px] text-sm font-medium text-hero-text border border-border bg-background hover:bg-hero-border transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <CopyEmail />
        </motion.div>
      </motion.div>

      <ScrollChevron />
    </section>
  )
}
