"use client"

import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import { HowIWorkCards } from "./HowIWorkCards"
import { HeroCard } from "@/components/ui/hero-card"
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
 <span>Hi! I&apos;m Jacki{" "}</span>
 <HeroVideoInline onOpenOverlay={openOverlay} />
 <br />
 <span>I design AI-native B2B products.</span>
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
 <HeroCard variant="toolkit" />
 <HeroCard variant="flip" />
 <HeroCard variant="community" />
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
