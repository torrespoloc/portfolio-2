"use client"

import { useState, useEffect, useRef } from "react"

const PROMPT = "> "
const COMMAND = "Now building SideNook v2"
const SPEED = 72

export function TypewriterTag() {
  const [chars, setChars] = useState(0)
  const [cursorOn, setCursorOn] = useState(true)
  const typing = chars < COMMAND.length
  const startedRef = useRef(false)

  // Start typing on mount with a tiny delay so the page paints first
  useEffect(() => {
    if (!startedRef.current) {
      startedRef.current = true
      const t = setTimeout(() => setChars(1), 400)
      return () => clearTimeout(t)
    }
  }, [])

  // Typewriter — one char at a time with slight jitter
  useEffect(() => {
    if (!typing) return
    const jitter = (Math.random() - 0.5) * 28
    const t = setTimeout(() => setChars((c) => c + 1), SPEED + jitter)
    return () => clearTimeout(t)
  }, [chars, typing])

  // Blinking cursor — always active for that terminal-alive feel
  useEffect(() => {
    const interval = setInterval(() => setCursorOn((v) => !v), 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5
                    bg-chartreuse text-chartreuse-foreground
                    font-mono text-xs font-semibold md:font-bold leading-tight select-none
                    rounded-[12px] whitespace-nowrap">
      {/* Prompt prefix */}
      <span className="text-chartreuse-foreground/40 font-medium">{PROMPT}</span>

      {/* Command text — types out char by char */}
      <span className="tabular-nums">{COMMAND.slice(0, chars)}</span>

      {/* Blinking block cursor */}
      <span
        className="inline-block w-[2px] h-[1.1em] bg-chartreuse-foreground shrink-0 ml-px"
        style={{
          opacity: cursorOn ? 1 : 0,
          transition: typing ? "none" : "opacity 0.08s",
        }}
      />
    </span>
  )
}
