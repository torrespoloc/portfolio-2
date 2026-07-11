"use client"

import { useState, useCallback, useMemo, useEffect } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { PlaygroundCard } from "@/components/playground-card"
import { SectionDivider } from "@/components/ui/section-divider"
import { cn } from "@/lib/utils"
import type { PlaygroundItem } from "@/lib/playground-data"

/* ── Rich description parser ── */

interface Seg {
  text: string
  bold: boolean
}

interface Para {
  segs: Seg[]
}

function parseDesc(text: string): Para[] {
  return text.split("\n\n").filter(Boolean).map((block) => {
    const segs: Seg[] = []
    for (const part of block.split(/(\*\*[^*]+\*\*)/)) {
      if (!part) continue
      if (part.startsWith("**") && part.endsWith("**")) {
        segs.push({ text: part.slice(2, -2), bold: true })
      } else {
        segs.push({ text: part, bold: false })
      }
    }
    return { segs }
  })
}

function RichDesc({ paragraphs, className, size }: { paragraphs: Para[]; className?: string; size?: string }) {
  return (
    <div className={cn("space-y-4", className)}>
      {paragraphs.map((p, i) => (
        <p key={i} className={cn("text-hero-text", size ?? "text-body")}>
          {p.segs.map((s, j) =>
            s.bold ? (
              <strong key={j} className="font-semibold text-accent">
                {s.text}
              </strong>
            ) : (
              s.text
            ),
          )}
        </p>
      ))}
    </div>
  )
}

/* ── Variants ── */

const gridCardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: i * 0.03,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const detailVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: 24,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
}

const slotHoverTransition = {
  duration: 0.48,
  ease: [0.22, 1, 0.36, 1] as const,
}

/* ── Component ── */

const GRID_SIZE = 6

const fillerPhrases = [
  "AI Voice Helper app",
  "Pickleball Paddle founder app",
  "UX Games for The UX Chats",
  "Presentation Companion",
]

export function PlaygroundClient({ items }: { items: PlaygroundItem[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedItem = items.find((item) => item.title === selectedId)

  const isSplit = selectedId !== null

  const [clickedTurtles, setClickedTurtles] = useState<Record<number, boolean>>({})
  const [ideaTags, setIdeaTags] = useState<Record<number, boolean>>({})

  const parsedDesc = useMemo(
    () => (selectedItem ? parseDesc(selectedItem.detail.description) : []),
    [selectedItem],
  )

  const handleSelect = useCallback((title: string) => {
    setSelectedId((prev) => (prev === title ? null : title))
  }, [])

  const handleClose = useCallback(() => {
    setSelectedId(null)
  }, [])

  /* Escape key closes the detail panel */
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose()
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [handleClose])

  /* Pad the grid to GRID_SIZE with filler placeholders */
  const displayItems: (PlaygroundItem | { filler: true; index: number })[] = [
    ...items,
    ...Array.from({ length: Math.max(0, GRID_SIZE - items.length) }, (_, i) => ({
      filler: true as const,
      index: items.length + i,
    })),
  ]

  return (
    <div className="relative min-h-screen bg-hero-bg font-sans">
      {/* Content container */}
      <div className="mx-auto w-full max-w-[1504px] min-h-screen px-5 md:px-0 relative flex flex-col">
        {/* Vertical projection lines */}
        <div className="absolute inset-y-0 left-5 w-px bg-hero-border pointer-events-none md:left-0 z-10" aria-hidden="true" />
        <div className="absolute inset-y-0 right-5 w-px bg-hero-border pointer-events-none md:right-0 z-10" aria-hidden="true" />

        {/* Hero area */}
        <section className="border-b border-hero-border pt-28 md:pt-36 pb-16 md:pb-20">
          <div className="max-w-[680px] md:ml-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-case-eyebrow mb-4">
              Playground
            </p>
            <h1 className="font-heading text-[clamp(32px,5.5vw,72px)] font-semibold leading-[1.05] tracking-[-0.04em] text-hero-text-dark">
              Experiments, tools &amp; <span className="text-accent">curiosity</span>
            </h1>
            <p className="mt-5 text-hero-text text-body max-w-[560px]">
              A collection of mini-projects, design explorations, and interactive toys I built to
              learn, test ideas, or just have fun.
            </p>
          </div>
        </section>

        {/* Card area — grid ↔ split layout */}
        <section className={cn("relative", isSplit && "flex flex-col flex-1 min-h-0")}>
          <div className={cn(isSplit && "flex flex-col flex-1 min-h-0")}>
            <div className={`flex ${isSplit ? "flex-row flex-1 min-h-0" : "flex-row flex-wrap"}`}>
              {/* Cards column — grid in default, sidebar in split */}
              <motion.div
                layout
                className={
                  isSplit
                    ? "flex flex-col w-full md:w-[280px] md:min-w-[280px] border-b md:border-b-0 md:border-r border-hero-border bg-hero-bg overflow-y-auto"
                    : "flex flex-row flex-wrap w-full"
                }
              >
                {displayItems.map((item, index) => {
                  /* ── Filler placeholder (grid mode only) ── */
                  if ("filler" in item) {
                    if (isSplit) return null
                    return (
                      <div
                        key={`filler-${item.index}`}
                        className="relative hidden sm:flex w-full sm:w-1/2 lg:w-1/3 min-h-[380px] flex-col items-center justify-center gap-3 bg-transparent dark:bg-hero-card outline outline-1 outline-hero-border outline-offset-[-1px] hover:bg-muted/40 transition-colors duration-200 cursor-pointer"
                        onClick={() => {
                          setClickedTurtles((prev) => ({ ...prev, [item.index]: true }))
                          setIdeaTags((prev) => ({ ...prev, [item.index]: true }))
                          setTimeout(() => setIdeaTags((prev) => ({ ...prev, [item.index]: false })), 1250)
                        }}
                        onKeyDown={(e: React.KeyboardEvent) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault()
                            setClickedTurtles((prev) => ({ ...prev, [item.index]: true }))
                            setIdeaTags((prev) => ({ ...prev, [item.index]: true }))
                            setTimeout(() => setIdeaTags((prev) => ({ ...prev, [item.index]: false })), 1250)
                          }
                        }}
                        role="button"
                        tabIndex={0}
                      >
                        <span className="text-base font-semibold text-hero-text-dark select-none">
                          {fillerPhrases[item.index % fillerPhrases.length]}
                        </span>
                        <div className="relative flex items-center justify-center">
                          <AnimatePresence initial={false}>
                            {ideaTags[item.index] && (
                              <motion.span
                                className="absolute bottom-[28px] left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-md bg-chartreuse px-3 py-1.5 text-sm font-semibold leading-tight text-chartreuse-foreground shadow-sm pointer-events-none select-none -rotate-6"
                                style={{ transformOrigin: "center bottom" }}
                                initial={{ opacity: 0, y: 24, scale: 0.12 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 8, scale: 0.2 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 180,
                                  damping: 20,
                                  mass: 0.45,
                                }}
                              >
                                Idea time!
                              </motion.span>
                            )}
                          </AnimatePresence>
                          <img
                            src="/logos/turtle.svg"
                            alt=""
                            loading="lazy"
                            className={`w-12 h-12 pointer-events-none ${
                              clickedTurtles[item.index]
                                ? "transition-transform duration-700 [transform:scaleX(-1)_rotate(360deg)]"
                                : "[transform:scaleX(-1)_rotate(2deg)]"
                            }`}
                            onTransitionEnd={() =>
                              setClickedTurtles((prev) => ({ ...prev, [item.index]: false }))
                            }
                          />
                        </div>
                      </div>
                    )
                  }

                  const isActive = selectedId === item.title
                  const isSmRowEnd = index % 2 === 1
                  const isLgRowEnd = index % 3 === 2
                  return (
                    <motion.div
                      key={item.title}
                      layout
                      initial={isSplit ? false : { opacity: 0, y: 28, scale: 0.985 }}
                      whileInView={isSplit ? undefined : "visible"}
                      viewport={isSplit ? undefined : { once: true, margin: "-80px 0px -80px" }}
                      custom={index}
                      variants={isSplit ? undefined : gridCardVariants}
                      whileHover={
                        isSplit
                          ? { x: 4, transition: slotHoverTransition }
                          : { y: -6, transition: slotHoverTransition }
                      }
                      transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.7 }}
                      onClick={() => handleSelect(item.title)}
                      onKeyDown={(e: React.KeyboardEvent) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault()
                          handleSelect(item.title)
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      className={`cursor-pointer select-none ${
                        isSplit
                          ? "w-full border-b border-hero-border last:border-b-0"
                          : `w-full sm:w-1/2 lg:w-1/3 border-b border-hero-border ${
                              isSmRowEnd ? "sm:border-r-0" : "sm:border-r"
                            } ${isLgRowEnd ? "lg:border-r-0" : "lg:border-r"}`
                      }`}
                    >
                      <PlaygroundCard
                        tag={item.tag}
                        title={item.title}
                        tags={item.tags}
                        videoSrc={item.videoSrc}
                        posterSrc={item.posterSrc}
                        href={item.href}
                        active={isActive}
                      />
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Detail panel — desktop */}
              <AnimatePresence>
                {isSplit && selectedItem && (
                  <motion.div
                    key="detail-panel"
                    variants={detailVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="hidden md:flex flex-1 flex-col min-h-[500px]"
                  >
                    {/* Detail header */}
                    <div className="flex items-center justify-between px-8 pt-8 pb-4 border-b border-hero-border">
                      <button
                        onClick={handleClose}
                        className="flex items-center gap-1.5 text-sm font-medium text-hero-text hover:text-hero-text-dark transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                        Back
                      </button>
                      <span className="text-xs font-semibold uppercase tracking-wider text-hero-muted">
                        {selectedItem.tag}
                      </span>
                    </div>

                    {/* Detail body */}
                    <div className="flex-1 overflow-y-auto">
                      {/* Hero media */}
                      {selectedItem.videoSrc && (
                        <div className="relative w-full aspect-video overflow-hidden bg-muted">
                          <video
                            src={selectedItem.videoSrc}
                            poster={selectedItem.posterSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-contain"
                          />
                        </div>
                      )}

                      {selectedItem.videoSrc && <SectionDivider />}

                      <div className="px-8 py-8">
                        <h2 className="font-heading text-[28px] sm:text-[36px] font-semibold leading-[1.1] tracking-[-0.03em] text-hero-text-dark">
                          {selectedItem.title}
                        </h2>

                        <RichDesc paragraphs={parsedDesc} className="mt-4" />

                        <div className="mt-8">
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-hero-muted mb-3">
                            Highlights
                          </h3>
                          <ul className="space-y-2">
                            {selectedItem.detail.highlights.map((h) => (
                              <li key={h} className="flex items-start gap-2.5 text-hero-text text-body-sm">
                                <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-hero-muted" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                          {selectedItem.tags.map((t) => (
                            <span
                              key={t}
                              className="text-xs font-medium text-hero-muted bg-muted px-2.5 py-1"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {selectedItem.href && (
                          <div className="mt-8 pt-8 border-t border-hero-border">
                            <a
                              href={selectedItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-medium text-hero-text hover:text-hero-text-dark transition-colors"
                            >
                              Open app
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Detail panel — mobile overlay */}
        <AnimatePresence>
          {isSplit && selectedItem && (
            <motion.div
              key="mobile-detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 md:hidden bg-hero-bg"
            >
              <div className="flex flex-col h-full">
                {/* Mobile detail header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-hero-border">
                  <button
                    onClick={handleClose}
                    className="flex items-center gap-1.5 text-sm font-medium text-hero-text hover:text-hero-text-dark transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    Back
                  </button>
                  <span className="text-xs font-semibold uppercase tracking-wider text-hero-muted">
                    {selectedItem.tag}
                  </span>
                </div>

                {/* Mobile detail body */}
                <div className="flex-1 overflow-y-auto">
                  {/* Hero media */}
                  {selectedItem.videoSrc && (
                    <div className="relative w-full aspect-video overflow-hidden bg-muted">
                      <video
                        src={selectedItem.videoSrc}
                        poster={selectedItem.posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    </div>
                  )}

                  {selectedItem.videoSrc && <SectionDivider />}

                  <div className="px-5 py-6">
                    <h2 className="font-heading text-[24px] font-semibold leading-[1.1] tracking-[-0.03em] text-hero-text-dark">
                      {selectedItem.title}
                    </h2>

                    <RichDesc paragraphs={parsedDesc} size="text-body-sm" />

                    <div className="mt-8">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-hero-muted mb-3">
                        Highlights
                      </h3>
                      <ul className="space-y-2">
                        {selectedItem.detail.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-hero-text text-body-sm">
                            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-hero-muted" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {selectedItem.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium text-hero-muted bg-muted px-2.5 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {selectedItem.href && (
                      <div className="mt-6 pt-6 border-t border-hero-border">
                        <a
                          href={selectedItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-hero-text hover:text-hero-text-dark transition-colors"
                        >
                          Open app
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid mode — bottom inset from page container */}
      </div>
    </div>
  )
}
