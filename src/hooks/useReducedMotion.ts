"use client"

import { useState, useEffect } from "react"

/**
 * Returns true if the browser has `prefers-reduced-motion: reduce` enabled.
 * Add `?motion=force` to the URL to always return false (force animations on).
 *
 * Uses useState + useEffect to avoid SSR hydration mismatches.
 * Initial render always returns false (matching server).
 *
 * Usage:
 *   const reducedMotion = useReducedMotion()
 *   className={reducedMotion ? "transition-none" : "transition-all duration-300"}
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (window.location.search.includes("motion=force")) return
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  return reduced
}
