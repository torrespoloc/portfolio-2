"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Pause, Play } from "lucide-react"

export function HeroVideoInline({ onOpenOverlay }: { onOpenOverlay: () => void }) {
 const videoRef = useRef<HTMLVideoElement>(null)
 const playingRef = useRef(false)
 const [isPlaying, setIsPlaying] = useState(false)
 const reducedMotion = useReducedMotion()

 const tryPlay = useCallback(() => {
  const video = videoRef.current
  if (!video || playingRef.current) return
  video.play().then(() => {
   playingRef.current = true
  }).catch(() => {})
 }, [])

 useEffect(() => {
  const video = videoRef.current
  if (!video) return

  video.playbackRate = 1.15
  video.currentTime = 1

  const onPlay = () => setIsPlaying(true)
  const onPause = () => setIsPlaying(false)

  video.addEventListener("play", onPlay)
  video.addEventListener("pause", onPause)
  video.addEventListener("canplay", tryPlay, { once: true })

  // Retry after first user interaction (browser autoplay policy)
  const onInteraction = () => {
   tryPlay()
   document.removeEventListener("click", onInteraction)
   document.removeEventListener("keydown", onInteraction)
   document.removeEventListener("scroll", onInteraction)
  }
  document.addEventListener("click", onInteraction, { once: true })
  document.addEventListener("keydown", onInteraction, { once: true })
  document.addEventListener("scroll", onInteraction, { once: true })

  return () => {
   video.removeEventListener("play", onPlay)
   video.removeEventListener("pause", onPause)
   video.removeEventListener("canplay", tryPlay)
   document.removeEventListener("click", onInteraction)
   document.removeEventListener("keydown", onInteraction)
   document.removeEventListener("scroll", onInteraction)
  }
 }, [tryPlay])

 return (
  <div
   tabIndex={0}
   role="button"
   aria-labelledby="get-to-know-me-label"
   className="group relative inline-flex shrink-0 align-middle -mt-1 cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-[width,height] duration-200 ease-out w-[calc(1.35em+20px)] h-[calc(1.35em+20px)] max-md:w-[calc(1.35em+28px)] max-md:h-[calc(1.35em+28px)] md:hover:w-[calc(1.35em+68px)] md:hover:h-[calc(1.35em+68px)]"
   onClick={onOpenOverlay}
   onKeyDown={(event) => {
    if (event.key === "Enter" || event.key === " ") {
     event.preventDefault()
     onOpenOverlay()
    }
   }}
  >
   <motion.span id="get-to-know-me-label"
    className="absolute -top-7 -right-7 max-md:-top-5 max-md:-right-5 z-20 inline-flex items-center gap-1 max-md:gap-1 px-3 py-2 max-md:px-2 max-md:py-1 text-sm max-md:text-[11px] font-semibold leading-tight bg-chartreuse text-chartreuse-foreground rounded-md sm:rounded-lg rotate-12 shadow-sm pointer-events-none select-none whitespace-nowrap"
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
    preload="auto"
    className="block w-full h-full object-cover object-center ring-1 ring-foreground/[0.06] scale-x-[-1] rounded-full"
    onClick={onOpenOverlay}
   />

   {/* Pause/Play icon — visible on hover, opens overlay on click */}
   <button
    type="button"
    aria-label="Open video"
    className="absolute left-1/2 top-1/2 z-20 size-[38px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity duration-150 ease-out pointer-events-none md:group-hover:pointer-events-auto md:group-hover:opacity-100 focus:opacity-100 focus:pointer-events-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    onClick={onOpenOverlay}
   >
    {isPlaying ? (
     <Pause className="h-4 w-4" aria-hidden="true" />
    ) : (
     <Play className="h-4 w-4" aria-hidden="true" />
    )}
   </button>
  </div>
 )
}
