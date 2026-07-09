"use client"

import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import { HowIWorkCards } from "./HowIWorkCards"
import { MyJamFlipCard } from "./MyJamFlipCard"
import { HeroVideoInline } from "./HeroVideoInline"
import { HeroVideoOverlay } from "./HeroVideoOverlay"
import { HeroCTAButtons } from "./HeroCTAButtons"
import { ScrollChevron } from "./ScrollChevron"
import { SectionDivider } from "@/components/ui/section-divider"
import { BlurBlob } from "@/components/ui/blur-blob"

/* ── Section-level orchestration ── */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
}

const sectionUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
      mass: 0.8,
    },
  },
}

export function HeroContent() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  const openOverlay = () => setIsOverlayOpen(true)
  const closeOverlay = () => setIsOverlayOpen(false)

  return (
    <section className="relative flex flex-col justify-center min-h-[100svh] pt-[76px] sm:py-20 lg:py-24 overflow-hidden">
      {/* Blur blobs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <BlurBlob top="-60px" left="clamp(-60px, -4vw, 40px)" animation="animate-float-geometric" blur={70} />
        <BlurBlob
          top="clamp(20px, 4vw, 80px)"
          left="clamp(300px, 36vw, 540px)"
          animation="animate-float-geometric-slow"
          blur={80}
          gradientFrom="rgb(41, 22, 148)"
        />
        <BlurBlob
          top="clamp(-100px, -8vw, -20px)"
          left="clamp(600px, 60vw, 900px)"
          animation="animate-float-geometric-alt"
          blur={80}
        />
      </div>

      <motion.div
        className="mx-auto w-full max-w-[1248px] relative z-10 md:px-12 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-[1200px]">
          {/* Centered heading */}
          <motion.h1
            variants={sectionUp}
            className="font-heading text-[clamp(30px,5.8vw,68px)] leading-[1.1] tracking-tight text-center text-hero-text-dark font-semibold"
          >
            Hi! I&apos;m Jacki{" "}
            <HeroVideoInline onOpenOverlay={openOverlay} />
            . I design psychologically smart AI products.
          </motion.h1>
        </div>
      </motion.div>

      {/* Full-width hero cards section */}
      <SectionDivider />
      <motion.div variants={sectionUp} className="my-0 relative mx-auto w-full max-w-[1248px] md:px-12">
        <HowIWorkCards>
          {/* Card 1 — Toolkit Pillar */}
          <div className="bg-hero-card p-5 h-full border-l border-hero-border">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-accent mb-3">
              Toolkit
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <img src="/logos/cursor.png" alt="Cursor" className="h-6 w-auto" />
              <img src="/logos/claude-code.png" alt="Claude Code" className="h-7 w-auto" />
              <img src="/logos/figma.png" alt="Figma" className="h-6 w-auto rounded" />
              <img src="/logos/hermes.png" alt="Hermes" className="h-6 w-auto" />
              <img src="/logos/granola.svg" alt="Granola" className="h-6 w-auto rounded" />
              <img src="/logos/obsidian.svg" alt="Obsidian" className="h-6 w-auto" />
              <img src="/logos/github.png" alt="GitHub" className="h-6 w-auto" />
              <img src="/logos/sidenook.svg" alt="SideNook" className="h-6 w-auto" />
            </div>
            <p className="text-hero-muted text-sm leading-snug mt-2.5">

            </p>
            <p className="text-hero-muted text-sm leading-snug mt-2">
              My design process evolves with new tools and AI-first workflows.
            </p>
          </div>
          {/* Card 2 — My Jam (3D flip card) */}
          <MyJamFlipCard />

          {/* Card 3 — Community Pillar */}
          <div className="bg-hero-card p-5 relative overflow-hidden h-full border-r border-hero-border">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-accent mb-3">
              Community
            </p>
            <p className="text-hero-text text-sm leading-relaxed font-semibold">
              200+ members
            </p>
            <div className="relative z-10">
              <img
                src="/the-ux-chats-logo.png"
                alt="The UX Chats logo"
                className="absolute bottom-0 right-0 w-12 h-12 object-contain rotate-6"
              />
              <p className="text-hero-muted text-sm leading-snug mt-1 relative pr-14">
                I founded The UX Chats — where UXers connect and grow.
              </p>
            </div>
          </div>
        </HowIWorkCards>
      </motion.div>
      <SectionDivider />

      {/* CTA Buttons */}
      <div className="mx-auto w-full max-w-[1248px] relative z-10 md:px-12">
        <div className="mx-auto max-w-[1200px]">
          <HeroCTAButtons />
        </div>
      </div>

      <HeroVideoOverlay isOpen={isOverlayOpen} onClose={closeOverlay} />

      <ScrollChevron />
    </section>
  )
}
