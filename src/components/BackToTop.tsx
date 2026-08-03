"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
 const [visible, setVisible] = useState(false)

 useEffect(() => {
 const onScroll = () => {
 setVisible(window.scrollY > window.innerHeight * 0.6)
 }
 window.addEventListener("scroll", onScroll, { passive: true })
 return () => window.removeEventListener("scroll", onScroll)
 }, [])

 return (
 <button
 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
 className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-chartreuse text-chartreuse-foreground shadow-lg transition-all duration-300 hover:opacity-85 focus:outline-none focus-visible:ring-2 focus-visible:ring-chartreuse focus-visible:ring-offset-2 ${
 visible
 ? "translate-y-0 opacity-100"
 : "pointer-events-none translate-y-4 opacity-0"
 }`}
 aria-label="Back to top"
 >
 <ArrowUp className="h-5 w-5" />
 </button>
 )
}
