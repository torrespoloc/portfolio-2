"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ExternalLink, Menu, X } from "lucide-react"
import { LINKS, SITE, WORK_CASE_STUDIES } from "@/lib/constants"
import { ThemeToggle } from "@/components/ThemeToggle"

export function NavBar() {
 const pathname = usePathname()
 const isHome = pathname === "/"
 const isWorkPage = !isHome && pathname.startsWith("/work/")
 const [scrolled, setScrolled] = useState(false)
 const [mobileOpen, setMobileOpen] = useState(false)
 const [viewportWidth, setViewportWidth] = useState<number | null>(null)
 const [isWorkMenuOpen, setIsWorkMenuOpen] = useState(false)
 const [mobileWorkExpanded, setMobileWorkExpanded] = useState(true)
 const [isDarkTheme, setDarkTheme] = useState(true)
 const visibleStudies = WORK_CASE_STUDIES.filter((s) => s.href !== "/work/7dish")
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

 // Theme reactivity via custom event
 useEffect(() => {
 const initial = document.documentElement.classList.contains("dark") ? "dark" : "light"
 const frame = window.requestAnimationFrame(() => {
 setDarkTheme(initial === "dark")
 })
 const handler = (e: Event) => {
 setDarkTheme((e as CustomEvent<"dark" | "light">).detail === "dark")
 }
 window.addEventListener("themechange", handler)
 return () => {
 window.cancelAnimationFrame(frame)
 window.removeEventListener("themechange", handler)
 }
 }, [])

 const derived = useMemo(() => {
 const isMobile = viewportWidth !== null && viewportWidth < 768
 const leftPanelVisible = viewportWidth ? viewportWidth >= 1024 : true
 const tightScreen = viewportWidth !== null && viewportWidth < 1024
 const isScrolled = scrolled || (!isHome && !isMobile)
 const mobileResting = isMobile && !isScrolled
 const collapsedWidth = viewportWidth
 ? Math.min(
 (tightScreen ? viewportWidth - 88 : isWorkPage ? (viewportWidth - 60) * 0.85 : viewportWidth - 60) + 48,
 848
 )
 : 800
 const defaultWidth = viewportWidth
 ? Math.min(isWorkPage ? (viewportWidth - 40) * 0.85 : viewportWidth - (tightScreen ? 88 : 64), 1200)
 : "calc(100vw - 88px)"
 const navWidth = tightScreen ? defaultWidth : (isScrolled ? collapsedWidth : defaultWidth)
 const navLeft = isWorkPage && leftPanelVisible ? "calc(50% + 7.5vw)" : "50%"
 const isNavGlassed = !mobileResting && (tightScreen || isScrolled)
 const navBgColor = isNavGlassed
 ? isDarkTheme
 ? (tightScreen ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0.55)")
 : (tightScreen ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.85)")
 : "rgba(255,255,255,0)"
 const navShadow = isNavGlassed
 ? (isDarkTheme
 ? "0 8px 32px rgba(0,0,0,0.3)"
 : tightScreen
 ? "0 2px 12px rgba(0,0,0,0.06)"
 : "0 8px 32px rgba(0,0,0,0.1)")
 : "0 0 0 rgba(0,0,0,0)"
 const navBorder = isNavGlassed
 ? (isDarkTheme ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)")
 : "rgba(0,0,0,0)"
 return {
 tightScreen, isScrolled, mobileResting,
 navWidth, navLeft, navBgColor, navShadow, navBorder,
 }
 }, [scrolled, viewportWidth, isHome, isWorkPage, isDarkTheme])

 const { tightScreen, isScrolled, mobileResting, navWidth, navLeft, navBgColor, navShadow, navBorder } = derived
 const isNavGlassed = !mobileResting && (tightScreen || isScrolled)

 return (
 <>
 <motion.nav
 initial={false}
 animate={{
		width: mobileResting ? "100%" : navWidth,
		left: mobileResting ? 0 : navLeft,
		x: mobileResting ? 0 : "-50%",
 y: 12,
		borderRadius: mobileResting ? 0 : 12,
		paddingLeft: tightScreen ? (mobileResting ? 20 : 16) : isScrolled ? 16 : 24,
		paddingRight: tightScreen ? (mobileResting ? 20 : 16) : isScrolled ? 16 : 24,
 paddingTop: 8,
 paddingBottom: 8,
 backgroundColor: navBgColor,
 boxShadow: navShadow,
 borderColor: navBorder,
 }}
 transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
 className={`pointer-events-auto fixed top-0 z-40 flex items-center justify-between overflow-visible border ${isNavGlassed ? "backdrop-blur-xl" : ""}`}
	 style={{ width: mobileResting ? "100%" : navWidth, left: mobileResting ? 0 : navLeft }}
 >
 <div className="relative flex w-full items-center justify-between">
 {/* Identity */}
 <Link href="/" className="flex items-center gap-3 max-md:gap-0 shrink-0">
 <span className="inline-flex h-11 w-11 md:h-9 md:w-9 items-center justify-center shrink-0 md:bg-white p-1 rounded-full">
 <img src="/logo.svg" alt="JT" className="h-full w-full" />
 </span>
 <div className="block leading-tight">
 <p className="text-sm font-semibold text-foreground transition-colors duration-300 ease-out">
 {SITE.name}
 </p>
 <p className="text-subtitle sm:text-base text-muted-foreground transition-colors duration-300 ease-out">
 AI Product Designer
 </p>
 </div>
 </Link>

 {/* Desktop nav, always centered */}
 <nav className="absolute left-1/2 hidden -translate-x-1/2 md:flex items-center text-sm font-mono">
 <div
 className={`flex items-center gap-1 border px-2 py-1 rounded-[12px] backdrop-blur-md transition-colors duration-300 ease-out ${
 isScrolled
 ? isDarkTheme
 ? "border-white/10 bg-white/[0.06]"
 : "border-foreground/[0.08] bg-background/75"
 : isDarkTheme
 ? "border-white/10 bg-transparent"
 : "border-foreground/[0.08] bg-transparent"
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
 className={`inline-flex items-center gap-1 px-3 py-2 rounded-[12px] transition-colors duration-300 ease-out ${
 isDarkTheme
 ? isWorkPage
 ? "text-white bg-white/[0.08]"
 : "text-white/60 hover:bg-white/10 hover:text-white"
 : isWorkPage
 ? "text-foreground bg-foreground/[0.06]"
 : "text-muted-foreground hover:bg-foreground/[0.05] hover:text-foreground"
 }`}
 >
 Work
 <ChevronDown
 className={`h-4 w-4 transition-transform duration-300 ease-out ${
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
 className={`relative overflow-hidden rounded-xl border p-2 shadow-[0_18px_48px_-24px_rgba(0,0,0,0.45)] backdrop-blur-2xl ${
 isDarkTheme
 ? "border-white/10 bg-navy-900/88"
 : "border-foreground/[0.08] bg-background/92"
 }`}
 >
 <div
 aria-hidden
 className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,255,0,0.10),transparent_44%),radial-gradient(circle_at_85%_0%,rgba(255,255,255,0.06),transparent_26%)]"
 />
 <div className="relative space-y-1">
 {visibleStudies.map((study, index) => {
 const isActive = pathname === study.href
 return (
 <Link
 key={study.href}
 href={study.href}
 className={`group relative flex items-center gap-3 overflow-hidden border px-2 py-2 rounded-lg text-xs transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-[1px] ${
 isActive
 ? isDarkTheme
 ? "border-white/[0.12] bg-white/[0.08] text-white"
 : "border-foreground/[0.08] bg-foreground/[0.05] text-foreground"
 : isDarkTheme
 ? "border-transparent text-white/78 hover:border-white/[0.12] hover:bg-white/[0.08] hover:text-white"
 : "border-transparent text-foreground/78 hover:border-foreground/[0.08] hover:bg-foreground/[0.05] hover:text-foreground"
 }`}
 style={{
 animationDelay: `${index * 40}ms`,
 }}
 >
 <span className={`relative z-10 flex h-8 w-14 shrink-0 items-center justify-center overflow-hidden transition-all duration-300 ease-out group-hover:scale-105 ${
 isActive ? "bg-white" : "bg-white/90 group-hover:bg-white"
 }`}>
 {study.logo ? (
 <img
 src={study.logo}
 alt=""
 aria-hidden="true"
 loading="lazy"
 className="dropdown-logo h-full w-full object-contain p-1"
 style={{ filter: "none" }}
 />
 ) : (
 <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
 7
 </span>
 )}
 </span>
 <span className="relative z-10 font-medium leading-none whitespace-nowrap">
 {study.label}
 </span>
 {isActive && (
 <span className="relative z-10 ml-auto h-2 w-2 rounded-full bg-brand-accent" />
 )}
 </Link>
 )})}
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 <Link
 href="/about"
 className={` px-3 py-2 rounded-[12px] transition-colors duration-300 ease-out ${
 isDarkTheme
 ? "text-white/60 hover:bg-white/10 hover:text-white"
 : "text-muted-foreground hover:bg-foreground/[0.05] hover:text-foreground"
 }`}
 >
 About
 </Link>
 <Link
 href="/playground"
 className={` px-3 py-2 rounded-[12px] transition-colors duration-300 ease-out ${
 isDarkTheme
 ? "text-white/60 hover:bg-white/10 hover:text-white"
 : "text-muted-foreground hover:bg-foreground/[0.05] hover:text-foreground"
 }`}
 >
 Playground
 </Link>
 </div>
 </nav>

 {/* Right actions */}
 <div className="flex items-center gap-0 shrink-0">
 {/* Theme toggle */}
 <ThemeToggle />

 {/* Mobile hamburger */}
 <button
 onClick={() => setMobileOpen(true)}
 className={`md:hidden p-2 rounded-md transition-colors duration-300 ease-out ${
 isDarkTheme
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
 className={`group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none rounded-lg focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-7 gap-1 px-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 ${
 isScrolled && isDarkTheme
 ? "text-white/70 hover:text-white hover:bg-white/10"
 : "text-foreground/80 hover:text-foreground"
 }`}
 >
 <ExternalLink className="h-4 w-4 mr-1" /> Resume
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
 className="fixed top-0 right-0 bottom-0 w-[256px] bg-background z-50 shadow-2xl flex flex-col"
 >
 <div className="flex items-center justify-between p-4">
 <ThemeToggle />
 <button
 onClick={() => setMobileOpen(false)}
 className="p-2 text-muted-foreground hover:text-foreground "
 aria-label="Close menu"
 >
 <X className="h-5 w-5" />
 </button>
 </div>
 <div className="px-3 pb-8 flex flex-col gap-6">
 <nav className="flex flex-col gap-1">
 {/* Work, expandable section */}
 <div className="flex flex-col">
 <button
 onClick={() => setMobileWorkExpanded(!mobileWorkExpanded)}
 className="flex items-center justify-between w-full px-3 py-2 text-sm font-mono text-foreground hover:text-foreground/70 hover:bg-muted transition-colors"
 >
 <span>Work</span>
 <ChevronDown
 className={`h-4 w-4 transition-transform duration-300 ease-out ${
 mobileWorkExpanded ? "rotate-180" : "rotate-0"
 }`}
 />
 </button>
 <AnimatePresence initial={false}>
 {mobileWorkExpanded && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: "auto", opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
 className="overflow-hidden"
 >
 <div className="flex flex-col gap-1 pl-3 pr-1 py-1">
 {visibleStudies.map((study: { label: string; href: string; meta?: string; logo?: string }) => (
 <Link
 key={study.href}
 href={study.href}
 onClick={() => setMobileOpen(false)}
 className="flex items-center gap-3 px-2 py-2 text-sm hover:bg-muted transition-colors"
 >
 <span className="flex h-7 w-10 shrink-0 items-center justify-center overflow-hidden bg-white/90">
 {study.logo ? (
 <img
 src={study.logo}
 alt=""
 aria-hidden="true"
 loading="lazy"
 className="dropdown-logo h-full w-full object-contain p-1"
 style={{ filter: "none" }}
 />
 ) : (
 <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
 {study.label?.charAt(0) || "?"}
 </span>
 )}
 </span>
 <span className="truncate leading-none">{study.label}</span>
 </Link>
 ))}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 <Link
 href="/about"
 onClick={() => setMobileOpen(false)}
 className="px-3 py-2 text-sm font-mono text-foreground hover:text-foreground/70 hover:bg-muted transition-colors"
 >
 About
 </Link>
 <Link
 href="/playground"
 onClick={() => setMobileOpen(false)}
 className="px-3 py-2 text-sm font-mono text-foreground hover:text-foreground/70 hover:bg-muted transition-colors"
 >
 Playground
 </Link>
 </nav>
 <div className="border-t border-border" />
 <div className="flex flex-col gap-2">
 <a
 href="mailto:torrespoloc@gmail.com"
 onClick={() => setMobileOpen(false)}
 className="group/button inline-flex shrink-0 items-center justify-center border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none rounded-lg focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 gap-2 px-2 w-full bg-accent text-white hover:opacity-85"
 >
 Email me
 </a>
 <a
 href={LINKS.resume ?? "#"}
 target="_blank"
 rel="noopener noreferrer"
 onClick={() => setMobileOpen(false)}
 className="group/button inline-flex shrink-0 items-center justify-center border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none rounded-lg focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 gap-2 px-2 w-full border-border bg-background hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50"
 >
 <ExternalLink className="h-4 w-4 mr-1" /> Resume
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
