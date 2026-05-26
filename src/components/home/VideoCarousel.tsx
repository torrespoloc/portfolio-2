"use client"

import { useState, useRef, useEffect, useCallback } from "react"

interface VideoCarouselProps {
  videos: string[]
  interval?: number
  gradient?: { from: string; via?: string; to: string }
  className?: string
}

export function VideoCarousel({ videos, interval = 4000, gradient, className = "" }: VideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [loaded, setLoaded] = useState<Set<number>>(new Set())
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map())
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % videos.length)
  }, [videos.length])

  useEffect(() => {
    const vid = videoRefs.current.get(activeIndex)
    if (vid) {
      vid.currentTime = 0
      vid.play().catch(() => {})
    }
    timerRef.current = setTimeout(advance, interval)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [activeIndex, advance, interval])

  useEffect(() => {
    videos.forEach((_, i) => {
      const vid = videoRefs.current.get(i)
      if (vid) vid.load()
    })
  }, [videos])

  if (videos.length === 0) return null

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {gradient && (
        <div aria-hidden className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.via ?? gradient.from} 50%, ${gradient.to} 100%)`,
        }} />
      )}
      {videos.map((src, i) => (
        <video
          key={src}
          ref={(el) => { if (el) videoRefs.current.set(i, el) }}
          src={src} muted playsInline aria-hidden loop
          onLoadedData={() => setLoaded((prev) => new Set(prev).add(i))}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === activeIndex && loaded.has(i) ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div aria-hidden className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.6), transparent 55%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.5), transparent 60%)",
      }} />
    </div>
  )
}
