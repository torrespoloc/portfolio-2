"use client"

import { useState, useEffect } from "react"
import { TypewriterTag } from "./TypewriterTag"
import { METRICS } from "@/lib/data/home"
import { FlipCard } from "@/components/ui/flip-card"

function FrontFace() {
  return (
    <div
      className="relative p-5 md:p-6 rounded-none min-h-[135px] md:min-h-[150px]"
      style={{ background: "var(--accent)" }}
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
      <p className="text-sm text-white/90 leading-relaxed font-semibold relative z-10">
        &ldquo;I focus on <strong className="font-extrabold text-chartreuse">AI workflow automation</strong>, B2B, SaaS, &amp; design systems. 0-1. Healthtech, Fintech.&rdquo;
      </p>
      <div className="mt-5 relative z-10 flex justify-center">
        <TypewriterTag />
      </div>
    </div>
  )
}

function BackFace({ progress }: { progress: number }) {
  return (
    <div
      className="p-5 md:p-6 rounded-none flex flex-col overflow-hidden h-full"
      style={{
        background: "linear-gradient(135deg, #111 0%, #2a1a2e 50%, #1a1a2e 100%)",
      }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(204,255,0,0.5) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-chartreuse/80 relative z-10">
        Recruiter? HM? Mom!?
      </p>
      <div className="w-full h-px bg-white/20 mt-2 mb-4 relative z-10" />

      {/* Metrics row */}
      <div className="flex items-center gap-3 relative z-10">
        {METRICS.map((metric, index) => (
          <div key={metric.label} className={`flex items-center gap-1.5 ${progress <= index ? "invisible" : ""}`}>
            {index > 0 && <span className="text-chartreuse/40 text-xs">|</span>}
            <span className="text-white font-bold text-sm tracking-tight">{metric.value}</span>
            <span className="text-xs uppercase tracking-wide text-chartreuse/60 font-semibold">{metric.label}</span>
          </div>
        ))}
      </div>

      {/* Flex line */}
      <p className="font-mono text-xs text-white/90 mt-auto pt-4 pb-2 relative z-10">
        {progress > METRICS.length ? "My flex: communication + charisma" : ""}
        {progress > METRICS.length && (
          <span className="inline-block w-[2px] h-[1em] bg-chartreuse ml-0.5 animate-pulse" />
        )}
      </p>
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
      }, 120)
      return () => clearInterval(timer)
    } else {
      setProgress(0)
    }
  }, [isFlipped])

  const toggle = () => setIsFlipped((prev) => !prev)

  return (
    <div
      className="w-full cursor-pointer border-x border-hero-border"
      style={{ WebkitTapHighlightColor: "transparent" }}
      onClick={toggle}
      onMouseEnter={() => { if (isDesktop) setIsFlipped(true) }}
      onMouseLeave={() => { if (isDesktop) setIsFlipped(false) }}
      role="button"
      aria-pressed={isFlipped}
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
        front={<FrontFace />}
        back={<BackFace progress={progress} />}
        className="relative"
        style={isFlipped ? {} : { boxShadow: "0 4px 24px rgba(72, 91, 252, 0.15), 0 1px 4px rgba(72, 91, 252, 0.08)" }}
      />
    </div>
  )
}
