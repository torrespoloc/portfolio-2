"use client"

import { useRef, useState } from "react"

export function UxChatsVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovered, setHovered] = useState(false)
  const [unmuted, setUnmuted] = useState(false)

  const handleUnmute = () => {
    if (!videoRef.current) return
    videoRef.current.currentTime = 0
    videoRef.current.muted = false
    videoRef.current.play()
    setUnmuted(true)
  }

  const handleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = true
    setUnmuted(false)
  }

  return (
    <div className="w-full md:w-[40%] shrink-0">
      <div
        className="relative overflow-hidden border border-hero-border bg-black"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false)
          if (videoRef.current) {
            videoRef.current.muted = true
            setUnmuted(false)
          }
        }}
      >
        <video
          ref={videoRef}
          src="/about/the-ux-chats.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={hovered}
          className="w-full block"
        />

        {/* Unmute overlay — visible on hover when muted */}
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            {!unmuted ? (
              <button
                onClick={handleUnmute}
                className="rounded-full bg-white/85 px-8 py-4 text-base font-semibold text-black shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-105"
              >
                Unmute
              </button>
            ) : (
              <button
                onClick={handleMute}
                className="rounded-full bg-white/85 px-8 py-4 text-base font-semibold text-black shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-105"
              >
                Mute
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
