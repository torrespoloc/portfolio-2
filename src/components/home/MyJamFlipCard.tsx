"use client"

import { useState, useEffect } from "react"
const LINE_2 = "My flex: My communication style + charisma. Let's talk."
const METRICS = [
  { value: "7 yrs.", label: "Design" },
  { value: "4 yrs.", label: "Product D." },
  { value: "5 apps", label: "Shipped" },
]
const LINE_2_WORDS = LINE_2.split(" ")
const TOTAL_METRICS = METRICS.length
const TOTAL_WORDS_L2 = LINE_2_WORDS.length

export function MyJamFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    if (isFlipped) {
      setProgress(0)
      const maxProgress = TOTAL_METRICS + TOTAL_WORDS_L2
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= maxProgress) {
            clearInterval(timer)
            return prev
          }
          return prev + 1
        })
      }, 80)
      return () => clearInterval(timer)
    } else {
      setProgress(0)
    }
  }, [isFlipped])

  return (
    <div
      className="w-[calc(100%-24px)] max-w-none md:flex-1 md:min-w-[244px] md:max-w-[424px] cursor-pointer group focus:outline-none"
      style={{ WebkitTapHighlightColor: "transparent" }}
      onClick={() => { if (!isDesktop) setIsFlipped((prev) => !prev) }}
      onMouseEnter={() => { if (isDesktop) setIsFlipped(true) }}
      onMouseLeave={() => { if (isDesktop) setIsFlipped(false) }}
      role="button"
      aria-pressed={isFlipped}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          setIsFlipped((prev) => !prev)
        }
      }}
    >
      <div className="rotate-[2deg] relative" style={{ perspective: "1200px" }}>
        {/* Glow behind the card on hover */}
        <div
          className="absolute -inset-2 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
          style={{
            background: isFlipped
              ? "radial-gradient(ellipse, rgba(84,15,55,0.3) 0%, transparent 70%)"
              : "radial-gradient(ellipse, rgba(59,74,237,0.2) 0%, transparent 70%)",
          }}
        />
        <div
          className="relative h-[176px] rounded-[20px]"
          style={{
            transformStyle: "preserve-3d",
            WebkitTransformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          {/* Front face — cool professional */}
          <div
            className="absolute inset-0 p-6 overflow-hidden rounded-[20px]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              background: "var(--accent)",
            }}
          >
            {/* Subtle dot pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />

            {/* Decorative concentric rings — top right */}
            <div className="absolute -top-4 -right-4 w-24 h-24">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-3 rounded-full border border-white/8" />
              <div className="absolute inset-6 rounded-full border border-white/6" />
            </div>

            {/* Small accent dot — bottom left */}
            <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-chartreuse/40" />

            <p className="text-sm md:text-body font-bold uppercase tracking-wider text-white/90 mb-3 relative z-10">
              My Jam <span className="inline-block animate-bounce-sm">👋</span>
            </p>
            <p className="text-body-mobile md:text-body text-white/85 leading-relaxed font-semibold relative z-10 max-w-[360px]">
              I focus on <span className="text-chartreuse">AI workflow automation</span>, SaaS dashboards, AI chats, and agent-based flows. 0-1, Healthtech, Fintech.
            </p>
          </div>

          {/* Back face — burgundy with green accents */}
          <div
            className="absolute inset-0 p-5 md:p-6 flex flex-col overflow-hidden rounded-[20px]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "linear-gradient(135deg, #540f37 0%, #7a1f4a 100%)",
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

            {/* Accent dot — chartreuse */}
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-chartreuse/20" />

            <p className="flex-shrink-0 text-[14px] md:text-[16px] font-bold uppercase tracking-[0.2em] text-chartreuse/85 relative z-10">
              Recruiter? HM? Mom!?
            </p>
            <div className="flex-shrink-0 w-full h-px bg-white/30 mt-2 mb-4 relative z-10" />
            <div className="flex-1 flex flex-col items-start justify-start gap-1 relative z-10">
              {/* Line 1 — stacked metrics */}
              <div className="font-mono text-[13px] md:text-[16px] leading-snug text-white flex items-start gap-1 md:gap-2 w-full">
                <div className="flex flex-nowrap items-start justify-between gap-1 md:gap-2 whitespace-nowrap w-full min-w-0">
                  {METRICS.map((metric, index) => (
                    <div key={metric.label} className={`flex items-start gap-1 md:gap-2 min-w-0 ${progress <= index ? 'invisible' : ''}`}>
                      {index > 0 ? <span className="text-chartreuse/50 pt-0.5 shrink-0">|</span> : null}
                      <div className="flex flex-col leading-none min-w-0">
                        <span className="font-bold tracking-tight text-white">{metric.value}</span>
                        <span className="text-[13px] md:text-[16px] uppercase tracking-[0.02em] md:tracking-[0.14em] text-chartreuse/60 mt-1 font-semibold">
                          ({metric.label})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Line 2 — word by word */}
              <div className="font-mono text-[13px] leading-snug md:text-[15px] text-white/95 mt-1 min-h-[44px]">
                <span>
                  {LINE_2_WORDS.slice(0, Math.max(0, Math.min(progress - TOTAL_METRICS, TOTAL_WORDS_L2))).join(" ")}
                </span>
                <span
                  className="inline-block w-[2px] h-[1.1em] bg-chartreuse ml-px animate-pulse"
                  style={{ opacity: progress < TOTAL_METRICS + TOTAL_WORDS_L2 ? 1 : 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
