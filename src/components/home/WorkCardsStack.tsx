"use client"

import { useRef, useEffect, useState } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion"
import { CaseStudyCard } from "@/components/case-study-card"

/* ── Card data ── */
const workCards = [
  {
    tag: "AI WORKFLOWS",
    headline: (
      <>
        Making the XY&#39;s healthcare SaaS platform{" "}
        <span className="text-brand-accent">AI and chat driven</span>
      </>
    ),
    description:
      "Conversational onboarding replaced hour-long demos with 3-step wizards. Built component factory to ship production-ready flows.",
    tags: ["healthtech", "SaaS"],
    year: "2025–2026",
    metric1Label: "Clicks to value",
    metric1Value: "3 steps",
    metric2Label: "Setup Reduction",
    metric2Value: "Hour to minutes",
    mediaSrcs: [
      "/xy/IntegrationsHub.mp4",
      "/xy/BrowserAgent.mp4",
      "/xy/DataExtraction.mp4",
      "/xy/KnowledgeBase.mp4",
      "/xy/TeamProductivity.mp4",
    ],
    href: "/work/xy",
    builtForLogo: "/logos/XY.svg",
    ndaBadge: true,
  },
  {
    tag: "HEALTHTECH",
    headline: (
      <>
        Designed End-to-End Mobile Patient App for{" "}
        <span className="text-brand-accent">HIPAA-Compliant</span> Contact Lens
        Ordering
      </>
    ),
    description:
      "Designed patient portal app MVP and full checkout experience in sync with Waldo's doctor portal.",
    tags: ["healthtech", "desktop", "mobile"],
    year: "2025",
    metric1Label: "Shipped",
    metric1Value: "1 month early",
    metric2Label: "Ownership",
    metric2Value: "100% patient app",
    mediaSrc: "/case-studies/waldo-hero.mp4",
    mediaType: "video" as const,
    href: "/work/waldo",
    builtForLogo: "/logos/waldo.svg",
  },
  {
    tag: "FINTECH · AI",
    headline: (
      <>
        Monetizing Fundr&apos;s SaaS platform with an{" "}
        <span className="text-brand-accent">upgrade paywall system</span>
      </>
    ),
    description:
      "The story of how I cut down the need for 1:1 sales calls by 50% in just 10 weeks for a Fintech stealth startup.",
    tags: ["fintech", "SaaS"],
    year: "2023",
    metric1Label: "Upgrade Conversions",
    metric1Value: "20%",
    metric2Label: "Team Productivity",
    metric2Value: "2x",
    mediaSrc: "/case-studies/fundr-hero.mp4",
    mediaType: "video" as const,
    href: "/work/fundr",
    builtForLogo: "/logos/fundr-logo.svg",
  },
  {
    tag: "MAC APP",
    badge: "Building V2",
    headline: (
      <>
        SideNook — A{" "}
        <span className="text-brand-accent">macOS terminal emulator</span> that
        stays out of your way
      </>
    ),
    description:
      "An ambient terminal companion: always there when you need it, invisible when you don't. Built with spring animations, multi-tab support, and keyboard-first navigation.",
    tags: ["macOS", "desktop", "shipped"],
    year: "2026",
    metric1Label: "App Type",
    metric1Value: "Native Mac",
    metric2Label: "Tech",
    metric2Value: "SwiftUI",
    mediaSrc: "/case-studies/sidenook-hero.mp4",
    mediaType: "video" as const,
    href: "/work/sidenook",
  },
  {
    tag: "FOODTECH",
    headline: (
      <>
        Redesigned <span className="text-brand-accent">3 core flows</span> for
        7dish&apos;s meal planning app
      </>
    ),
    description:
      "Boosting user satisfaction by 50% through strategic redesigns and 7 new features for working parents.",
    tags: ["mobile", "e-commerce", "shipped"],
    year: "2023–2024",
    metric1Label: "User Satisfaction",
    metric1Value: "~50%",
    metric2Label: "New Features",
    metric2Value: "7",
    mediaSrc: "/case-studies/7dish-hero.png",
    mediaType: "image" as const,
    mediaAlt: "7dish meal planning app",
    href: "/work/7dish",
    builtForLogo: "/logos/7dish.svg",
  },
]

/* ── Section heading entrance ── */
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

/* ── Per-card deck transforms ── */
function DeckCardItem({
  index,
  total,
  deckIndex,
  isMobile,
  children,
}: {
  index: number
  total: number
  deckIndex: MotionValue<number>
  isMobile: boolean
  children: React.ReactNode
}) {
  const prefersReducedMotion = useReducedMotion()
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    /* Sync after hydration to prevent SSR mismatch */
    setReducedMotion(prefersReducedMotion ?? false)
  }, [prefersReducedMotion])

  if (reducedMotion) {
    return <div className="mb-6">{children}</div>
  }

  /* Parameters vary by viewport. Desktop: 3 cards visible, 24px offset.
   * Mobile: 2 cards visible, 12px offset. */
  const offset1 = isMobile ? 12 : 24
  const offset2 = isMobile ? 20 : 48

  const y = useTransform(deckIndex, (v) => {
    const diff = v - index
    const dist = Math.abs(diff)
    if (dist < 0.5) return 0
    if (dist < 1.5) return offset1
    if (dist < 2.5) return offset2
    /* Hidden off-screen — direction determines which side */
    return diff < 0 ? 600 : -600
  })

  const scale = useTransform(deckIndex, (v) => {
    const dist = Math.abs(v - index)
    if (dist < 0.5) return 1
    if (dist < 1.5) return 0.9
    if (dist < 2.5) return 0.81
    return 0.7
  })

  const opacity = useTransform(deckIndex, (v) => {
    const dist = Math.abs(v - index)
    if (dist < 0.5) return 1
    if (dist < 1.5) return 1
    if (dist < 2.5) return 0.8
    return 0
  })

  const zIndex = useTransform(deckIndex, (v) => {
    const dist = Math.abs(v - index)
    if (dist < 0.5) return total + 5
    if (dist < 1.5) return total + 3
    if (dist < 2.5) return total + 1
    return 0
  })

  return (
    <motion.div
      className="absolute inset-0 flex items-start justify-center pt-[15vh] sm:pt-[20vh] lg:pt-[12vh]"
      style={{ y, scale, opacity, zIndex, willChange: "transform" }}
    >
      <div className="w-full max-w-[940px] px-6">{children}</div>
    </motion.div>
  )
}

/* ── Main component ── */
export function WorkCardsStack() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    /* Sync reduced-motion preference after hydration to avoid SSR mismatch */
    setReducedMotion(prefersReducedMotion ?? false)
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [prefersReducedMotion])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const deckIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, workCards.length - 1],
  )

  const tallHeight = isMobile ? "400vh" : "500vh"

  /* Reduced motion client fallback: render as column */
  if (reducedMotion) {
    return (
      <>
        <section className="px-6 pt-20 pb-8 relative z-10">
          <div className="mx-auto w-full max-w-[940px]">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={headingVariants}
              className="text-hero-text text-sm font-semibold uppercase tracking-wider"
            >
              Work
            </motion.h2>
          </div>
        </section>
        <section id="work" className="relative px-6 pb-20">
          <div className="mx-auto w-full max-w-[940px]">
            <div className="flex flex-col gap-10 lg:gap-[88px]">
              {workCards.map((card, i) => (
                <CaseStudyCard key={i} {...card} />
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Heading — scrolls away naturally before the stack */}
      <section className="px-6 pt-20 pb-8 relative z-10">
        <div className="mx-auto w-full max-w-[940px]">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headingVariants}
            className="text-hero-text text-sm font-semibold uppercase tracking-wider"
          >
            Work
          </motion.h2>
        </div>
      </section>

      {/* Tall scroll section — drives the card deck */}
      <section
        id="work"
        ref={sectionRef}
        className="relative"
        style={{ height: tallHeight }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="relative w-full h-full">
            {workCards.map((card, i) => (
              <DeckCardItem
                key={i}
                index={i}
                total={workCards.length}
                deckIndex={deckIndex}
                isMobile={isMobile}
              >
                <CaseStudyCard {...card} />
              </DeckCardItem>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
