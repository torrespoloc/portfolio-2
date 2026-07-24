"use client"

import { useRef, useState, useCallback, useEffect } from "react"

type BeforeAfterSliderProps = {
  before: React.ReactNode
  after: React.ReactNode
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    setPosition(Math.max(3, Math.min(97, (x / rect.width) * 100)))
  }, [])

  useEffect(() => {
    if (!dragging) return
    const onMove = (e: MouseEvent) => {
      e.preventDefault()
      handleMove(e.clientX)
    }
    const onUp = () => setDragging(false)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
    }
  }, [dragging, handleMove])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden ring-1 ring-foreground/[0.06] select-none bg-zinc-950"
      style={{ aspectRatio: "16 / 10" }}
      onTouchMove={(e) => {
        if (dragging) handleMove(e.touches[0].clientX)
      }}
    >
      {/* After: full width, underneath */}
      <div className="absolute inset-0">{after}</div>

      {/* Before: clipped by divider */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        {before}
      </div>

      {/* Divider */}
      <div
        className="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white shadow-[0_2px_16px_rgba(0,0,0,0.35)] flex items-center justify-center cursor-ew-resize hover:scale-105 transition-transform"
          onMouseDown={(e) => {
            e.preventDefault()
            setDragging(true)
          }}
          onTouchStart={(e) => {
            e.preventDefault()
            setDragging(true)
          }}
          aria-label="Drag to compare before and after"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden
          >
            <path
              d="M6.5 3L11 9L6.5 15"
              stroke="#1a1a1a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.5 3L7 9L11.5 15"
              stroke="#1a1a1a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 text-label font-mono uppercase tracking-[0.18em] text-white/80 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full pointer-events-none">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 text-label font-mono uppercase tracking-[0.18em] text-white/80 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full pointer-events-none">
        {afterLabel}
      </span>

      {/* Hint */}
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/40 font-mono pointer-events-none hidden sm:block">
        drag to compare
      </span>
    </div>
  )
}
