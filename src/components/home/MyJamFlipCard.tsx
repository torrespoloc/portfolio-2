"use client"

import { useState, useEffect } from "react"
import { TypewriterTag } from "./TypewriterTag"

const LINE_1 = "7 yrs design · 4 yrs product · 5 shipped apps"
const LINE_2 = "My flex: My communication style + charisma. Let's talk."
const LINE_1_WORDS = LINE_1.split(" ")
const LINE_2_WORDS = LINE_2.split(" ")
const TOTAL_WORDS_L1 = LINE_1_WORDS.length
const TOTAL_WORDS_L2 = LINE_2_WORDS.length

export function MyJamFlipCard() {
  const [isHovered, setIsHovered] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isHovered) {
      setProgress(0)
      const maxProgress = TOTAL_WORDS_L1 + TOTAL_WORDS_L2
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= maxProgress) {
            clearInterval(timer)
            return prev
          }
          return prev + 1
        })
      }, 90)
      return () => clearInterval(timer)
    } else {
      setProgress(0)
    }
  }, [isHovered])

  return (
    <div
      className="flex-1 min-w-[220px] max-w-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="animate-fade-in-up rotate-[2deg] relative" style={{ perspective: "1000px" }}>
        <div
          className="relative transition-transform duration-700 ease-out min-h-[200px] rounded-[20px]"
          style={{
            transformStyle: "preserve-3d",
            transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front face */}
          <div
            className="absolute inset-0 rounded-[20px] border border-[#f5f5f5] bg-[rgb(59,74,237)] p-5"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="text-sm md:text-body font-semibold uppercase tracking-wider text-white/90 mb-2">
              My Jam 👋
            </p>
            <p className="text-sm md:text-body text-white/85 leading-relaxed font-semibold">
              Designing the future of Healthtech, SaaS, &amp; Fintech. I build{" "}
              <span className="text-chartreuse">full AI agentic 0-1 platforms</span>{" "}
              with AI workflows and agent orchestration.
            </p>
            <div className="mt-3 flex justify-center">
              <TypewriterTag />
            </div>
          </div>

          {/* Back face — cream + burgundy node style */}
          <div
            className="absolute inset-0 rounded-[20px] border-2 animate-node-border-pulse bg-cream p-5 flex flex-col"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              backgroundImage: "radial-gradient(circle, rgba(84,15,55,0.12) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          >
            <p className="flex-shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy/80">
              Recruiter? HM? Mom!?
            </p>
            <div className="flex-shrink-0 w-full h-px bg-burgundy/70 mt-2 mb-3" />
            <div className="flex-1 flex flex-col items-start justify-start gap-0.5">
              {/* Line 1 — word by word */}
              <div className="font-mono text-lg text-burgundy/90">
                <span className="text-burgundy/70">&gt; </span>
                <span>{LINE_1_WORDS.slice(0, Math.min(progress, TOTAL_WORDS_L1)).join(" ")}</span>
              </div>
              {/* Line 2 — word by word */}
              <div className="font-mono text-lg text-burgundy/90">
                <span className="text-burgundy/70">&gt; </span>
                <span>
                  {LINE_2_WORDS.slice(0, Math.max(0, Math.min(progress - TOTAL_WORDS_L1, TOTAL_WORDS_L2))).join(" ")}
                </span>
                <span
                  className="inline-block w-[2px] h-[1.1em] bg-burgundy ml-px animate-pulse"
                  style={{ opacity: progress < TOTAL_WORDS_L1 + TOTAL_WORDS_L2 ? 1 : 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
