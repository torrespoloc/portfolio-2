"use client"

import { Children, useState, useCallback, useRef, useLayoutEffect, type ReactNode } from "react"

export function HowIWorkCards({ children }: { children: ReactNode }) {
  const childrenArray = Children.toArray(children)
  const total = childrenArray.length
  const containerRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [cardW, setCardW] = useState(0)
  const gap = 16
  const dragOffRef = useRef(0)
  const touchStartRef = useRef(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOff, setDragOff] = useState(0)

  // Measure card width on mount and resize
  useLayoutEffect(() => {
    const measure = () => {
      const vw = window.innerWidth
      setCardW(Math.min(Math.max(240, vw * 0.68), 280))
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  // Start with "My Jam" card (index 1) once measured
  useLayoutEffect(() => {
    if (cardW > 0) setCurrent(1)
  }, [cardW])

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }, [total])

  // Touch/swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX
    setIsDragging(true)
    setDragOff(0)
    dragOffRef.current = 0
  }
  const onTouchMove = (e: React.TouchEvent) => {
    dragOffRef.current = e.touches[0].clientX - touchStartRef.current
    setDragOff(dragOffRef.current)
  }
  const onTouchEnd = () => {
    setIsDragging(false)
    setDragOff(0)
    if (dragOffRef.current < -50) goNext()
    else if (dragOffRef.current > 50) goPrev()
  }

  // Calculate translateX to center current card
  const baseTranslate =
    cardW > 0 && containerRef.current
      ? containerRef.current.clientWidth / 2 - current * (cardW + gap) - cardW / 2
      : 0

  const translateX = baseTranslate + (isDragging ? dragOff : 0)

  return (
    <>
      {/* Mobile: horizontal carousel with peek */}
      <div className="md:hidden mt-10 select-none overflow-x-clip" ref={containerRef}>
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex gap-4"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: isDragging
                ? "none"
                : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {childrenArray.map((child, i) => (
              <div key={i} className="shrink-0" style={{ width: `${cardW}px` }}>
                <div
                  className={`transition-all duration-500 ease-out ${
                    i === current
                      ? "scale-100 opacity-100"
                      : "scale-[0.92] opacity-50"
                  }`}
                >
                  {child}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-[rgb(87,126,255)] w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop/Tablet: original flex row layout */}
      <div className="hidden md:flex flex-wrap justify-center gap-6 mt-10">
        {children}
      </div>
    </>
  )
}
