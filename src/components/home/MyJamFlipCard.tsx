"use client"

import { useState, useEffect } from "react"
import { TypewriterTag } from "./TypewriterTag"
import { METRICS } from "@/lib/data/home"
import { FlipCard } from "@/components/ui/flip-card"

function FrontFace({ isFlipped }: { isFlipped: boolean }) {
  return (
    <div
      className="relative p-5 md:p-6 rounded-none min-h-[135px] md:min-h-[150px]"
      style={{ background: "var(--accent)" }}
      aria-hidden={isFlipped}
    >
      {/* Subtle dot overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] rounded-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Chartreuse accent dot */}
      <div className="w-2 h-2 rounded-full bg-chartreuse mb-2.5 relative z-10" />
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/80 mb-3 relative z-10">
        MY JAM
      </p>
      <p className="text-xs text-white/90 leading-relaxed font-semibold relative z-10">
        &ldquo;I focus on <strong className="font-extrabold text-chartreuse">AI workflow automation</strong>, B2B, SaaS, &amp; design systems. 0-1. Healthtech, Fintech.&rdquo;
      </p>
      <div className="mt-5 relative z-10 flex justify-center">
        <TypewriterTag />
      </div>
    </div>
  )
}

function BackFace({ progress, isFlipped }: { progress: number; isFlipped: boolean }) {
  return (
    <div
      className="p-5 md:p-6 rounded-none flex flex-col overflow-hidden h-full"
      style={{
        background: "var(--flip-bg)",
      }}
      aria-hidden={!isFlipped}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #0A7385 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      <p className="text-label font-bold uppercase tracking-[0.2em] text-[#242424] relative z-10">
        Recruiter? HM? Mom!?
      </p>
      <div className="w-full h-px bg-black/20 mt-1.5 mb-3 relative z-10" />

      {/* Metrics — column headers with values below, fade in one by one */}
      <div className="grid grid-cols-3 px-3 md:px-6 relative z-10">
        {METRICS.map((metric, index) => (
          <div
            key={metric.label}
            className="flex flex-col items-center gap-0.5"
            style={{
              opacity: progress > index ? 1 : 0,
              transform: progress > index ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 0.35s ease-out, transform 0.35s ease-out",
            }}
          >
            <span className="text-label uppercase tracking-wide text-gray-700 font-semibold">{metric.label}</span>
            <span className="text-gray-900 font-bold text-sm tracking-tight">{metric.value}</span>
          </div>
        ))}
      </div>

      {/* Flex line */}
      <p
        className="font-label text-subtitle font-bold text-gray-700 mt-5 pt-2 pb-1 relative z-10 leading-snug text-center"
        style={{
          opacity: progress > METRICS.length ? 1 : 0,
          transform: progress > METRICS.length ? "translateY(0)" : "translateY(4px)",
          transition: "opacity 0.35s ease-out, transform 0.35s ease-out",
        }}
      >
        My flex: communication + charisma
        {progress > METRICS.length && (
          <span className="inline-block w-[2px] h-[1em] bg-gray-900 ml-0.5 animate-pulse" />
        )}
      </p>
      <p
        className="font-label text-subtitle font-bold text-gray-700 text-center relative z-10 leading-snug"
        style={{
          opacity: progress > METRICS.length ? 1 : 0,
          transform: progress > METRICS.length ? "translateY(0)" : "translateY(4px)",
          transition: "opacity 0.35s ease-out, transform 0.35s ease-out",
          transitionDelay: progress > METRICS.length ? "0.1s" : "0s",
        }}
      >
        Let&rsquo;s chat.
      </p>

      {/* Turtle — flipped over Y axis (horizontal mirror), tilted -2deg */}
      <div className="absolute bottom-3 right-3 z-10">
        <img
          src="/logos/turtle.svg"
          alt=""
          className="w-[52px] h-auto opacity-100"
          style={{ transform: "scaleX(-1) rotate(-2deg)" }}
        />
      </div>
    </div>
  )
}

export function MyJamFlipCard() {
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
      }, 300)
      return () => clearInterval(timer)
    } else {
      setProgress(0)
    }
  }, [isFlipped])

  const toggle = () => setIsFlipped((prev) => !prev)

  return (
    <div
      className="w-full h-full cursor-pointer border-x border-hero-border"
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
        front={<FrontFace isFlipped={isFlipped} />}
        back={<BackFace progress={progress} isFlipped={isFlipped} />}
        className="relative"
        style={isFlipped ? {} : { boxShadow: "var(--flip-shadow-accent)" }}
      />
    </div>
  )
}
