"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LINKS, SITE, WORK_CASE_STUDIES } from "@/lib/constants"

export function NavBar() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [viewportWidth, setViewportWidth] = useState<number | null>(null)
  const [isWorkSectionVisible, setIsWorkSectionVisible] = useState(false)
  const [isWorkMenuOpen, setIsWorkMenuOpen] = useState(false)
  const workMenuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.5
      setScrolled(window.scrollY > threshold)
    }

    const onResize = () => {
      setViewportWidth(window.innerWidth)
    }

    onScroll()
    onResize()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  useEffect(() => {
    if (!isHome) return

    const workSection = document.getElementById("work")
    if (!workSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsWorkSectionVisible(entry.isIntersecting)
      },
      { threshold: 0.15 }
    )

    observer.observe(workSection)
    return () => observer.disconnect()
  }, [isHome, pathname])

  const isScrolled = isHome ? scrolled : true
  const expandedWidth = viewportWidth ? Math.min(viewportWidth - 60, 800) : 800
  const defaultWidth = viewportWidth ? Math.min(viewportWidth - 40, 1200) : "calc(100vw - 40px)"
  const navWidth = isScrolled ? expandedWidth : defaultWidth

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          width: navWidth,
          y: 12,
          borderRadius: 50,
          paddingLeft: isScrolled ? 16 : 24,
          paddingRight: isScrolled ? 16 : 24,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: isScrolled ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0)",
          boxShadow: isScrolled ? "0 8px 32px rgba(0,0,0,0.1)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto fixed left-1/2 top-0 z-40 flex -translate-x-1/2 items-center justify-between overflow-visible backdrop-blur-xl"
        style={{ width: navWidth }}
      >
        <div className="relative flex w-full items-center justify-between">
          {/* Identity */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <span className="inline-flex h-9 w-9 items-center justify-center shrink-0 rounded-full bg-white p-1.5">
              <img src="/logo.svg" alt="JT" className="h-full w-full" />
            </span>
            <div className="hidden sm:block leading-tight">
              <p
                className={`text-sm font-semibold transition-colors duration-300 ease-out ${
                  isScrolled ? "text-white" : "text-foreground"
                }`}
              >
                {SITE.name}
              </p>
              <p
                className={`text-[13px] transition-colors duration-300 ease-out ${
                  isScrolled ? "text-white/50" : "text-muted-foreground"
                }`}
              >
                Senior Product Designer
              </p>
            </div>
          </Link>

          {/* Desktop nav — always centered */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 md:flex items-center text-sm font-mono">
            <div
              className={`flex items-center gap-1 rounded-full border px-1.5 py-1 backdrop-blur-md transition-colors duration-300 ease-out ${
                isScrolled
                  ? "border-white/10 bg-white/[0.06]"
                  : "border-foreground/[0.08] bg-background/75"
              }`}
            >
              <div
                ref={workMenuRef}
                className="relative"
                onMouseEnter={() => setIsWorkMenuOpen(true)}
                onMouseLeave={() => setIsWorkMenuOpen(false)}
                onFocusCapture={() => setIsWorkMenuOpen(true)}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setIsWorkMenuOpen(false)
                  }
                }}
              >
                <Link
                  href={isHome ? "#work" : "/#work"}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors duration-300 ease-out ${
                    isScrolled
                      ? "text-white/60 hover:bg-white/10 hover:text-white"
                      : "text-muted-foreground hover:bg-foreground/[0.05] hover:text-foreground"
                  }`}
                >
                  Work
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-300 ease-out ${
                      isWorkMenuOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </Link>

                <AnimatePresence>
                  {isWorkMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.94 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.94 }}
                      transition={{ type: "spring", stiffness: 360, damping: 30, mass: 0.7 }}
                      className="absolute left-0 top-full z-50 pt-2"
                    >
                      <div
                        className={`relative w-[176px] overflow-hidden rounded-[16px] border p-1.5 shadow-[0_18px_48px_-24px_rgba(0,0,0,0.45)] backdrop-blur-2xl ${
                          isScrolled
                            ? "border-white/10 bg-[#0b0f14]/88"
                            : "border-foreground/[0.08] bg-background/92"
                        }`}
                      >
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,255,0,0.10),transparent_44%),radial-gradient(circle_at_85%_0%,rgba(255,255,255,0.06),transparent_26%)]"
                        />
                        <div className="relative space-y-0.5">
                          {WORK_CASE_STUDIES.map((study, index) => (
                            <Link
                              key={study.href}
                              href={study.href}
                              className={`group relative flex items-center gap-3 overflow-hidden rounded-xl border border-transparent px-2 py-1.5 text-[13px] transition-all duration-300 ease-out hover:border-white/10 hover:bg-white/[0.06] ${
                                isScrolled
                                  ? "text-white/78 hover:text-white"
                                  : "text-foreground/78 hover:text-foreground"
                              }`}
                              style={{
                                animationDelay: `${index * 40}ms`,
                              }}
                            >
                              <span className="relative z-10 flex h-8 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/90 transition-all duration-300 ease-out group-hover:bg-white group-hover:scale-105">
                                {study.logo ? (
                                  <img
                                    src={study.logo}
                                    alt=""
                                    aria-hidden="true"
                                    className="h-full w-full object-contain p-1"
                                  />
                                ) : (
                                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                                    7
                                  </span>
                                )}
                              </span>
                              <span className="relative z-10 truncate font-medium leading-none">
                                {study.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                href="/about"
                className={`rounded-full px-3 py-1.5 transition-colors duration-300 ease-out ${
                  isScrolled
                    ? "text-white/60 hover:bg-white/10 hover:text-white"
                    : "text-muted-foreground hover:bg-foreground/[0.05] hover:text-foreground"
                }`}
              >
                About
              </Link>
            </div>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden p-2 rounded-md transition-colors duration-300 ease-out ${
                isScrolled
                  ? "text-white/60 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href={LINKS.resume ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 ${
                  isScrolled
                    ? "text-white/70 hover:text-white hover:bg-white/10"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                <Download className="h-3.5 w-3.5 mr-1" /> Resume
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 36 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-background z-50 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-end p-4">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground rounded-md"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="px-6 pb-8 flex flex-col gap-6">
                <nav className="flex flex-col gap-1">
                  <Link
                    href={isHome ? "#work" : "/#work"}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 text-sm font-mono text-foreground hover:text-foreground/70 rounded-lg hover:bg-muted transition-colors"
                  >
                    Work
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 text-sm font-mono text-foreground hover:text-foreground/70 rounded-lg hover:bg-muted transition-colors"
                  >
                    About
                  </Link>
                </nav>
                <div className="border-t border-border" />
                <div className="flex flex-col gap-2">
                  <a
                    href={LINKS.resume ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="group/button inline-flex shrink-0 items-center justify-center rounded-lg border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 gap-1.5 px-2.5 w-full border-border bg-background hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50"
                  >
                    <Download className="h-3.5 w-3.5 mr-1" /> Resume
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
