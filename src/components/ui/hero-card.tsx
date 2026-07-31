"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { TypewriterTag } from "@/components/home/TypewriterTag"
import { METRICS } from "@/lib/data/home"
import { FlipCard } from "./flip-card"

/* ── Toolkit variant ── */

function ToolkitContent() {
  return (
    <div className="bg-hero-card p-5 h-full border-l border-hero-border/60">
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
  )
}

/* ── Flip variant ── */

function FlipFrontFace({ isFlipped }: { isFlipped: boolean }) {
  return (
    <div
      className="relative p-5 rounded-none h-full"
      style={{ background: "var(--accent)" }}
      aria-hidden={isFlipped}
    >
      <div
        className="absolute inset-0 opacity-[0.07] rounded-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/80 mb-3 relative z-10">
        MY JAM
      </p>
      <p className="text-xs text-white/90 leading-relaxed font-semibold relative z-10">
        0-1, information architecture, and systems thinking. Healthtech, Fintech, Real Estate.
      </p>
      <div className="mt-5 relative z-10 flex justify-center">
        <TypewriterTag />
      </div>
    </div>
  )
}

function FlipBackFace({ progress, isFlipped }: { progress: number; isFlipped: boolean }) {
  // Card proportion: 435×168px
  // Grid: 3 cols (34.25% / 37.01% / 28.74%) × 3 rows (29.17% / 33.93% / 36.90%)
  return (
    <div
      className="relative h-full overflow-hidden"
      style={{ background: "#FFB1FA" }}
      aria-hidden={!isFlipped}
    >
      <div
        className="grid h-full"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "29.167% 33.929% 36.905%",
        }}
      >
        {/* ── Row 1: Labels ── */}
        {METRICS.map((metric, index) => (
          <div
            key={`label-${metric.label}`}
            className={`flex items-center justify-center border-b border-white
              ${index < 2 ? "border-r border-white" : ""}`}
          >
            <span className="font-bold text-sm md:text-base text-black/65 leading-tight text-center px-1">
              {metric.label}
            </span>
          </div>
        ))}

        {/* ── Row 2: Metrics ── */}
        {METRICS.map((metric, index) => {
          const isSmall = index === 2
          return (
            <div
              key={`value-${metric.label}`}
              className={`flex items-center justify-center border-b border-white
                ${index < 2 ? "border-r" : ""}`}
              style={{
                opacity: progress > index ? 1 : 0,
                transform: progress > index ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 0.35s ease-out, transform 0.35s ease-out",
              }}
            >
              <span
                className={`font-bold text-black leading-tight text-center px-1 ${
                  isSmall ? "text-sm md:text-lg" : "text-lg md:text-[22px]"
                }`}
              >
                {metric.value}
              </span>
            </div>
          )
        })}

        {/* ── Row 3: Footer (spans all columns, no vertical projection lines) ── */}
        <div
          className="col-span-3 flex flex-col items-center justify-center text-center px-4"
          style={{
            opacity: progress > METRICS.length ? 1 : 0,
            transform: progress > METRICS.length ? "translateY(0)" : "translateY(4px)",
            transition: "opacity 0.35s ease-out, transform 0.35s ease-out",
          }}
        >
          <p
            className="font-label font-bold text-[#242424] leading-snug"
            style={{ fontSize: "clamp(0.8125rem, 1.5vw, 0.9375rem)" }}
          >
            My flex: communication + charisma
            {progress > METRICS.length && (
              <span className="inline-block w-[2px] h-[1em] bg-gray-900 ml-1 animate-pulse align-middle" />
            )}
          </p>
          <p
            className="font-label font-bold text-[#242424] leading-snug mt-1"
            style={{
              fontSize: "clamp(0.8125rem, 1.5vw, 0.9375rem)",
              transitionDelay: "0.1s",
            }}
          >
            Let&rsquo;s chat.
          </p>
        </div>
      </div>

      {/* Turtle — bottom-right corner */}
      <img
        src="/logos/turtle.svg"
        alt=""
        aria-hidden="true"
        className="absolute bottom-2 right-2 w-10 md:w-[52px] h-auto"
        style={{ transform: "scaleX(-1) rotate(-8deg)" }}
      />
    </div>
  )
}

function FlipContent() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : false
  )

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    if (isFlipped) {
      setProgress(0)
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= METRICS.length + 1) {
            clearInterval(timer)
            return prev
          }
          return prev + 1
        })
      }, 200)
      return () => clearInterval(timer)
    } else {
      setProgress(0)
    }
  }, [isFlipped])

  const toggle = () => setIsFlipped((prev) => !prev)

  return (
    <div
      className="w-full h-full cursor-pointer border-x border-hero-border/60"
      style={{ WebkitTapHighlightColor: "transparent" }}
      onClick={toggle}
      onMouseEnter={() => { if (isDesktop) setIsFlipped(true) }}
      onMouseLeave={() => { if (isDesktop) setIsFlipped(false) }}
      role="button"
      aria-label={isFlipped ? "Hide details about my jam" : "View details about my jam"}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          toggle()
        }
      }}
    >
      <FlipCard
        isFlipped={isFlipped}
        onToggle={toggle}
        front={<FlipFrontFace isFlipped={isFlipped} />}
        back={<FlipBackFace progress={progress} isFlipped={isFlipped} />}
        className="relative"
        style={isFlipped ? {} : { boxShadow: "var(--flip-shadow-accent)" }}
      />
    </div>
  )
}

/* ── Community variant ── */

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
      {hovered && (
        <motion.span
          className="absolute -top-2 right-0 z-20 inline-flex items-center gap-1 px-2 py-2 text-xs font-semibold leading-tight bg-chartreuse text-chartreuse-foreground rounded-md -rotate-6 shadow-sm pointer-events-none select-none whitespace-nowrap"
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

function CommunityContent() {
  return (
    <div className="bg-hero-card p-5 relative overflow-hidden h-full border-r border-hero-border/60">
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
  )
}

/* ── Main component ── */

export function HeroCard({ variant }: { variant: "toolkit" | "flip" | "community" }) {
  if (variant === "toolkit") return <ToolkitContent />
  if (variant === "flip") return <FlipContent />
  return <CommunityContent />
}
