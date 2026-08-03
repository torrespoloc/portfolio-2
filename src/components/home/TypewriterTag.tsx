"use client"

import { useState, useEffect } from "react"

const PROMPT = "> "
const COMMAND = "Currently: building SideNook v2"

export function TypewriterTag() {
 const [started, setStarted] = useState(false)
 const [cursorOn, setCursorOn] = useState(true)

 // Start after a brief delay so the page paints first
 useEffect(() => {
 const t = setTimeout(() => setStarted(true), 200)
 return () => clearTimeout(t)
 }, [])

 // Blinking cursor
 useEffect(() => {
 const interval = setInterval(() => setCursorOn((v) => !v), 530)
 return () => clearInterval(interval)
 }, [])

 return (
 <>
 <style>{`
 @keyframes typewriter-reveal {
 from { clip-path: inset(0 100% 0 0); }
 to { clip-path: inset(0 0% 0 0); }
 }
 `}</style>
 <span className="inline-flex items-center gap-2
 text-chartreuse
 font-mono text-xs font-semibold md:font-bold leading-tight select-none
 whitespace-nowrap">
 <span className="text-chartreuse/40 font-medium">{PROMPT}</span>
 <span
 className="inline-block overflow-hidden whitespace-nowrap align-text-bottom"
 style={{
 clipPath: "inset(0 100% 0 0)",
 animation: started
 ? `typewriter-reveal 1.2s steps(${COMMAND.length}) forwards`
 : "none",
 }}
 >
 {COMMAND}
 </span>
 <span
 className="inline-block w-[2px] h-[1.1em] bg-chartreuse shrink-0 ml-px"
 style={{
 opacity: cursorOn ? 1 : 0,
 transition: "opacity 0.08s",
 }}
 />
 </span>
 </>
 )
}
