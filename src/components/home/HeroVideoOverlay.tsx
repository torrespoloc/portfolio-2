"use client"

import { useRef, useState, useEffect } from "react"
import { Pause, Play, Volume2, VolumeX, X } from "lucide-react"

function formatTime(s: number) {
  const mins = Math.floor(s / 60)
  const secs = Math.floor(s % 60)
  return `${mins}:${secs.toString().padStart(2, "0")}`
}

export function HeroVideoOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const overlayVideoRef = useRef<HTMLVideoElement>(null)
  const [overlayPlaying, setOverlayPlaying] = useState(true)
  const [overlayTime, setOverlayTime] = useState(0)
  const [overlayDuration, setOverlayDuration] = useState(0)
  const [overlayMuted, setOverlayMuted] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen, onClose])

  const onOverlayLoadedMetadata = () => {
    const video = overlayVideoRef.current
    if (!video) return
    video.playbackRate = 1.15
    setOverlayDuration(video.duration)
  }

  const onOverlayTimeUpdate = () => {
    const video = overlayVideoRef.current
    if (video) setOverlayTime(video.currentTime)
  }

  const toggleOverlayPlay = () => {
    const video = overlayVideoRef.current
    if (!video) return
    if (video.paused) {
      void video.play()
      setOverlayPlaying(true)
    } else {
      video.pause()
      setOverlayPlaying(false)
    }
  }

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    if (overlayVideoRef.current) overlayVideoRef.current.currentTime = time
    setOverlayTime(time)
  }

  const toggleOverlayMute = () => {
    const video = overlayVideoRef.current
    if (!video) return
    video.muted = !video.muted
    setOverlayMuted(video.muted)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-label="Jacki video player"
      onClick={onClose}
    >
      <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-center">
        <div
          className="relative w-full overflow-hidden rounded-[12px] border border-white/10 bg-black shadow-2xl group"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            aria-label="Close video"
            className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/10 transition-colors hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={onClose}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Flipped video — no native controls */}
          <video
            ref={overlayVideoRef}
            src="/hero-video-jacki.mp4"
            autoPlay
            playsInline
            poster="/hero-video-poster.png"
            className="block aspect-video w-full h-auto max-h-[80svh] object-contain bg-black scale-x-[-1]"
            onLoadedMetadata={onOverlayLoadedMetadata}
            onTimeUpdate={onOverlayTimeUpdate}
            onPlay={() => setOverlayPlaying(true)}
            onPause={() => setOverlayPlaying(false)}
            onClick={toggleOverlayPlay}
          />

          {/* Custom controls bar */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-12 pb-3 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label={overlayPlaying ? "Pause" : "Play"}
                onClick={toggleOverlayPlay}
                className="text-white hover:text-white/80 transition-colors shrink-0"
              >
                {overlayPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>

              <input
                type="range"
                min={0}
                max={overlayDuration || 0}
                step={0.1}
                value={overlayTime}
                onChange={onSeek}
                className="flex-1 h-1 appearance-none bg-white/30 rounded-full cursor-pointer accent-white
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                aria-label="Seek"
              />

              <span className="text-white/70 text-xs font-medium tabular-nums whitespace-nowrap shrink-0">
                {formatTime(overlayTime)} / {formatTime(overlayDuration)}
              </span>

              <button
                type="button"
                aria-label={overlayMuted ? "Unmute" : "Mute"}
                onClick={toggleOverlayMute}
                className="text-white hover:text-white/80 transition-colors shrink-0"
              >
                {overlayMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
