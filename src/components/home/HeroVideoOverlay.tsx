"use client"

import { useRef, useState, useEffect } from "react"
import { Pause, Play, Volume2, VolumeX, X } from "lucide-react"

interface CaptionCue {
  start: number
  end: number
  text: string
}

function parseVTT(text: string): CaptionCue[] {
  const lines = text.split(/\r?\n/)
  const cues: CaptionCue[] = []
  let currentCue: Partial<CaptionCue> | null = null

  for (const line of lines) {
    const trimmed = line.trim()

    // Skip WEBVTT header and blank lines
    if (trimmed === "WEBVTT" || trimmed === "") {
      if (currentCue?.start != null && currentCue?.end != null && currentCue?.text) {
        cues.push(currentCue as CaptionCue)
      }
      currentCue = null
      continue
    }

    // Timestamp line
    const timeMatch = trimmed.match(
      /^(\d{2}):(\d{2}):(\d{2})\.(\d{3})\s-->\s(\d{2}):(\d{2}):(\d{2})\.(\d{3})/
    )
    if (timeMatch) {
      if (currentCue?.start != null && currentCue?.end != null && currentCue?.text) {
        cues.push(currentCue as CaptionCue)
      }
      const toSeconds = (h: number, m: number, s: number, ms: number) =>
        h * 3600 + m * 60 + s + ms / 1000
      currentCue = {
        start: toSeconds(
          Number(timeMatch[1]), Number(timeMatch[2]),
          Number(timeMatch[3]), Number(timeMatch[4])
        ),
        end: toSeconds(
          Number(timeMatch[5]), Number(timeMatch[6]),
          Number(timeMatch[7]), Number(timeMatch[8])
        ),
        text: "",
      }
      continue
    }

    // Text line
    if (currentCue) {
      currentCue.text = currentCue.text
        ? currentCue.text + "\n" + trimmed
        : trimmed
    }
  }

  // Flush last cue
  if (currentCue?.start != null && currentCue?.end != null && currentCue?.text) {
    cues.push(currentCue as CaptionCue)
  }

  return cues
}

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
  const [captions, setCaptions] = useState<CaptionCue[]>([])
  const [currentCaption, setCurrentCaption] = useState("")
  const [typewriterIdx, setTypewriterIdx] = useState(0)

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

  // Load captions
  useEffect(() => {
    if (!isOpen) return
    fetch("/hero-video-captions.vtt")
      .then((res) => res.text())
      .then((text) => setCaptions(parseVTT(text)))
      .catch(() => {})
  }, [isOpen])

  // Word-by-word typewriter for captions
  useEffect(() => {
    if (!currentCaption) {
      setTypewriterIdx(0)
      return
    }
    const words = currentCaption.split(/\s+/)
    setTypewriterIdx(0)
    let idx = 0
    const interval = setInterval(() => {
      idx++
      setTypewriterIdx(idx)
      if (idx >= words.length) clearInterval(interval)
    }, 180)
    return () => clearInterval(interval)
  }, [currentCaption])

  const onOverlayLoadedMetadata = () => {
    const video = overlayVideoRef.current
    if (!video) return
    video.playbackRate = 1.15
    setOverlayDuration(video.duration)
  }

  const onOverlayTimeUpdate = () => {
    const video = overlayVideoRef.current
    if (!video) return
    const time = video.currentTime
    setOverlayTime(time)
    // Update captions
    const active = captions.find((c) => time >= c.start && time < c.end)
    setCurrentCaption(active?.text ?? "")
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
          className="relative w-full overflow-hidden rounded-[12px] border border-white/10 bg-black shadow-2xl group animate-border-glow group-hover:animate-none"
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
            className="block aspect-video w-full h-auto max-h-[60svh] md:max-h-[70svh] lg:max-h-[80svh] object-contain bg-black scale-x-[-1]"
            onLoadedMetadata={onOverlayLoadedMetadata}
            onTimeUpdate={onOverlayTimeUpdate}
            onPlay={() => setOverlayPlaying(true)}
            onPause={() => setOverlayPlaying(false)}
            onClick={toggleOverlayPlay}
          />

          {/* Captions — below video, always reserving space */}
          <div className="px-4 py-3 min-h-[88px] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="mx-auto w-full text-center">
              <span className={`inline-block text-white text-base md:text-lg font-semibold leading-relaxed ${!currentCaption ? "invisible" : ""}`}>
                {currentCaption ? currentCaption.split(/\s+/).slice(0, typewriterIdx).join(" ") : " "}
              </span>
            </div>
          </div>

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
