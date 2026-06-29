"use client"

import { useRef } from "react"
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

/* ── Per-card scroll-driven transforms ── */
function StackCardItem({
  index,
  total,
  scrollYProgress,
  prefersReducedMotion,
  children,
}: {
  index: number
  total: number
  scrollYProgress: MotionValue<number>
  prefersReducedMotion: boolean
  children: React.ReactNode
}) {
  /* Skip transforms when user prefers reduced motion — render static */
  if (prefersReducedMotion) {
    return <>{children}</>
  }

  /*
   * Each card gets a staggered animation window as the user scrolls through
   * the work section.
   *
   * Card 0 rangeStart = 0.00, rangeEnd = 0.35  — leads the cascade
   * Card 1 rangeStart = 0.08, rangeEnd = 0.43  — follows
   * Card 2 rangeStart = 0.16, rangeEnd = 0.51
   * Card 3 rangeStart = 0.24, rangeEnd = 0.59
   * Card 4 rangeStart = 0.32, rangeEnd = 0.67
   *
   * Within each window the card transitions from "stacked" (overlapping,
   * rotated, slightly transparent) to "fanned out" (natural position).
   */
  const rangeStart = index * 0.08
  const rangeEnd = Math.min(rangeStart + 0.35, 1)

  /* — Stacked-state values — */
  const stackY = 60 + index * 10            // each card shifts up from deeper in the stack
  const stackRotate = (index - Math.floor(total / 2)) * 2  // fan: alternating rotation
  const stackScale = 0.93
  const stackOpacity = 0.8

  /* — Transforms — */
  const y = useTransform(scrollYProgress, [rangeStart, rangeEnd], [stackY, 0])
  const rotate = useTransform(scrollYProgress, [rangeStart, rangeEnd], [stackRotate, 0])
  const scale = useTransform(scrollYProgress, [rangeStart, rangeEnd], [stackScale, 1])
  const opacity = useTransform(scrollYProgress, [rangeStart, rangeEnd], [stackOpacity, 1])

  return (
    <motion.div
      style={{ y, rotate, scale, opacity, transformOrigin: "center center" }}
    >
      {children}
    </motion.div>
  )
}

/* ── Section heading entrance ── */
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

/* ── Main component ── */
export function WorkCardsStack() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion() ?? true

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  return (
    <section
      id="work"
      ref={sectionRef}
      className="px-6 pb-20 relative z-10"
      style={prefersReducedMotion ? undefined : { perspective: "1000px" }}
    >
      <div className="mx-auto w-full max-w-[940px]">
        {/* Section heading — fades up on scroll into view */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={headingVariants}
          className="text-hero-text text-sm font-semibold uppercase tracking-wider mb-8"
        >
          Work
        </motion.h2>

        {/* Cards — flex column, staggered scroll-driven transforms */}
        <div className="flex flex-col gap-10 lg:gap-[88px]">
          {workCards.map((card, i) => (
            <StackCardItem
              key={i}
              index={i}
              total={workCards.length}
              scrollYProgress={scrollYProgress}
              prefersReducedMotion={prefersReducedMotion}
            >
              <CaseStudyCard {...card} />
            </StackCardItem>
          ))}
        </div>
      </div>
    </section>
  )
}
