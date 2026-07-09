"use client"

import { useEffect, useState } from "react"
import { TurtleAvatar } from "@/components/TurtleAvatar"

interface SplashScreenProps {
  variant?: "splash" | "loading"
  showOnce?: boolean
}

export function SplashScreen({ variant = "splash", showOnce = false }: SplashScreenProps) {
  const [progress, setProgress] = useState(0)
  const [fading, setFading] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (showOnce && sessionStorage.getItem("splashSeen")) {
      setDone(true)
      return
    }

    const duration = 500
    const step = 10
    const increment = 100 / (duration / step)

    const t = setInterval(() => {
      setProgress((p) => {
        const next = p + increment
        if (next >= 100) {
          clearInterval(t)
          if (variant === "splash") {
            setTimeout(() => {
              if (showOnce) sessionStorage.setItem("splashSeen", "true")
              setFading(true)
              setTimeout(() => setDone(true), 300)
            }, 100)
          }
          return 100
        }
        return next
      })
    }, step)

    return () => clearInterval(t)
  }, [variant, showOnce])

  if (done) return null

  return (
    <div
      className="fixed inset-0 z-[9999] bg-accent flex flex-col"
      style={{ opacity: fading ? 0 : 1, transition: "opacity 0.3s ease-out" }}
    >
      {/* top-right counter */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-10">
        <span className="text-[8rem] sm:text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter text-white select-none tabular-nums">
          {progress.toFixed(0)}%
        </span>
      </div>

      {/* bottom-left turtle */}
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
        <div className="animate-bounce-turtle">
          <TurtleAvatar
            size={128}
            className="scale-x-[-1] sm:scale-x-[-1] sm:size-auto"
          />
        </div>
      </div>
    </div>
  )
}
