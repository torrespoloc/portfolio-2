"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
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

/* ── Ux Chats Logo (desktop interactive) ── */
function UxChatsLogoInteractive() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const openSite = () => {
    if (!isDesktop) return
    window.open("https://www.theuxchats.co", "_blank", "noopener,noreferrer")
  }

  // Non-interactive on mobile/tablet
  if (!isDesktop) {
    return (
      <img
        src="/the-ux-chats-logo.png"
        alt="The UX Chats logo"
        className="absolute bottom-0 right-0 w-12 h-12 object-contain pointer-events-none"
      />
    )
  }

  return (
    <div
      className="absolute bottom-0 right-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover tag, similar to "Learn more" tag */}
      {hovered && (
        <motion.span
          className="absolute -top-2 right-0 z-20 inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold leading-tight bg-chartreuse text-chartreuse-foreground rounded-md -rotate-6 shadow-sm pointer-events-none select-none whitespace-nowrap"
          initial={{ opacity: 0, y: 4, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.12 }}
        >
          theuxchats.co
        </motion.span>
      )}
      <button
        type="button"
        onClick={openSite}
        className="block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
        aria-label="Visit The UX Chats website"
      >
        <img
          src="/the-ux-chats-logo.png"
          alt=""
          aria-hidden="true"
          className="object-contain transition-all duration-200 ease-out"
          style={{
            width: hovered ? "72px" : "60px",
            height: hovered ? "72px" : "60px",
          }}
        />
      </button>
    </div>
  )
}

export function HeroContent() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const [carouselIdx, setCarouselIdx] = useState(0)

  const openOverlay = () => setIsOverlayOpen(true)
  const closeOverlay = () => setIsOverlayOpen(false)

  return (
    <section className="relative flex flex-col justify-center min-h-[100svh] pt-24 sm:py-20 lg:pt-36 lg:pb-24 overflow-hidden">
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
        className="mx-auto w-full max-w-[1248px] relative z-10 md:px-12 mb-6 sm:mb-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-[1200px]">
          {/* Centered heading */}
          <motion.h1
            variants={sectionUp}
            className="font-heading text-hero-heading tracking-tight text-center text-hero-text-dark font-semibold"
          >
            <span>Hi! I&apos;m Jacki.{" "}</span>
            <HeroVideoInline onOpenOverlay={openOverlay} />
            <span>
              <br className="md:hidden" />
              {" "}I design AI-native B2B products.
            </span>
          </motion.h1>
          <motion.p
            variants={sectionUp}
            className="text-center text-hero-muted text-sm mt-3"
          >
            SF, Bay Area
          </motion.p>
        </div>
      </motion.div>

      {/* Full-width hero cards section */}
      <SectionDivider className="opacity-50" />

      {/* Dot indicators, outside the cards container, below the separator */}
      <div className="md:hidden flex justify-center gap-2 py-4">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setCarouselIdx(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === carouselIdx
                ? "bg-brand-accent w-6"
                : "bg-hairline-strong hover:bg-hero-muted"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <motion.div variants={sectionUp} className="my-0 relative mx-auto w-full max-w-[1248px] md:px-12">
        <HowIWorkCards currentIdx={carouselIdx} onIdxChange={setCarouselIdx}>
          {/* Card 1: Toolkit Pillar */}
          <div className="bg-hero-card p-5 h-full border-l border-hero-border">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-accent mb-3">
              Toolkit
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <Image src="/logos/cursor.png" alt="Cursor" width={24} height={24} className="h-6 sm:h-[32px] w-auto" />
              <Image src="/logos/claude-code.png" alt="Claude Code" width={28} height={28} className="h-7 sm:h-[36px] w-auto" />
              <Image src="/logos/figma.png" alt="Figma" width={24} height={24} className="h-6 sm:h-[32px] w-auto rounded-sm" />
              <Image src="/logos/hermes.png" alt="Hermes" width={24} height={24} className="h-6 sm:h-[32px] w-auto" />
              <img src="/logos/granola.svg" alt="Granola" className="h-6 sm:h-[32px] w-auto rounded" />
              <img src="/logos/obsidian.svg" alt="Obsidian" className="h-6 sm:h-[32px] w-auto" />
              <Image src="/logos/github.png" alt="GitHub" width={24} height={24} className="h-6 sm:h-[32px] w-auto" />
              <img src="/logos/sidenook.svg" alt="SideNook" className="h-6 sm:h-[32px] w-auto" />
            </div>
            <p className="text-hero-muted text-xs leading-snug mt-2">
              My design process evolves with new tools and AI-first workflows.
            </p>
          </div>
          {/* Card 2: My Jam (3D flip card) */}
          <MyJamFlipCard />

          {/* Card 3: Community Pillar */}
          <div className="bg-hero-card p-5 relative overflow-hidden h-full border-r border-hero-border">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-accent mb-3">
              Community
            </p>
            <p className="text-hero-text text-xs leading-relaxed font-semibold">
              200+ members
            </p>
            <div className="relative z-10">
              <UxChatsLogoInteractive />
              <p className="text-hero-muted text-xs leading-snug mt-1 relative pr-14 md:pr-[68px]">
                I founded The UX Chats, helping 200+ UXers land roles and find mentors.
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
