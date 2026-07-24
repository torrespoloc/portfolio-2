"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Play } from "lucide-react"

export function HeroVideoInline({ onOpenOverlay }: { onOpenOverlay: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.playbackRate = 1.15

    const handleLoadedMetadata = () => {
      video.currentTime = 1
      if (isTouchDevice) {
        // Auto-play muted on mobile so the user sees the loop until they tap
        video.play().catch(() => {})
        setIsPlaying(true)
      } else {
        video.pause()
        setIsPlaying(false)
      }
    }

    const handlePause = () => setIsPlaying(false)
    const handlePlay = () => setIsPlaying(true)

    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    video.addEventListener("pause", handlePause)
    video.addEventListener("play", handlePlay)

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("play", handlePlay)
    }
  }, [isTouchDevice])

  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    const video = videoRef.current
    if (!video) return
    // Start playing on hover after a short delay to avoid accidental plays
    hoverTimeoutRef.current = setTimeout(() => {
      video.play().catch(() => {})
    }, 200)
  }

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    const video = videoRef.current
    if (!video) return
    video.pause()
    video.currentTime = 1
  }

  return (
    <div
      tabIndex={0}
      role="button"
      aria-labelledby="get-to-know-me-label"
      className="group relative inline-flex shrink-0 align-middle -mt-1 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-[width,height] duration-200 ease-out w-[calc(1.35em+20px)] h-[calc(1.35em+20px)] max-md:w-[calc(1.35em+28px)] max-md:h-[calc(1.35em+28px)] md:hover:w-[calc(1.35em+68px)] md:hover:h-[calc(1.35em+68px)]"
      onClick={onOpenOverlay}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerDown={(e) => {
        if (e.pointerType !== "mouse") onOpenOverlay()
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onOpenOverlay()
        }
      }}
    >
      {/* "Learn more" tag */}
      <motion.span id="get-to-know-me-label"
        className="absolute -top-7 -right-7 max-md:-top-5 max-md:-right-5 z-20 inline-flex items-center gap-1 max-md:gap-0.5 px-3 py-1.5 max-md:px-1.5 max-md:py-1 text-sm max-md:text-[11px] font-semibold leading-tight bg-chartreuse text-chartreuse-foreground rounded-md rotate-12 shadow-sm pointer-events-none select-none whitespace-nowrap"
        animate={reducedMotion ? {} : {
          y: [0, -8, 0, -4, 0],
          scale: [1, 1.08, 1, 1.04, 1],
        }}
        transition={{
          duration: 1.2,
          ease: [0.34, 1.56, 0.64, 1],
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <Play className="h-4 w-4 max-md:h-3 max-md:w-3" aria-hidden="true" />
        Get to know me
      </motion.span>

      <video
        ref={videoRef}
        src="/hero-video-jacki.mp4"
        muted
        loop
        playsInline
        poster="/hero-video-poster.png"
        aria-hidden="true"
        preload="metadata"
        className="block w-full h-full rounded-full object-cover object-center ring-1 ring-foreground/[0.06] scale-x-[-1]"
        onClick={onOpenOverlay}
      />
      {!isPlaying && (
        <button
          type="button"
          aria-label="Play Jacki video"
          className="absolute left-1/2 top-1/2 z-20 size-[38px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity duration-150 ease-out pointer-events-none max-md:hidden md:group-hover:pointer-events-auto md:group-hover:opacity-100 focus:opacity-100 focus:pointer-events-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={(event) => {
            event.stopPropagation()
            onOpenOverlay()
          }}
        >
          <Play className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
