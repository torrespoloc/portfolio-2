"use client"

import { cn } from "@/lib/utils"

interface PlaygroundCardProps {
  tag: string
  title: string
  tags?: string[]
  videoSrc?: string
  posterSrc?: string
  href?: string
  className?: string
  compact?: boolean
  active?: boolean
}

export function PlaygroundCard({
  tag,
  title,
  tags,
  videoSrc,
  posterSrc,
  className,
  compact = false,
  active = false,
}: PlaygroundCardProps) {
  /* ── Compact mode: mini card thumbnail for sidebar ── */
  if (compact) {
    return (
      <div
        className={cn(
          "block w-full select-none transition-colors duration-200",
          active ? "bg-accent/[0.04]" : "hover:bg-muted/40",
          className,
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-0 p-2 border-l-2 transition-colors duration-200",
            active ? "border-accent" : "border-transparent",
          )}
        >
          {/* Mini media thumbnail */}
          <div
            className={cn(
              "relative w-full overflow-hidden rounded-[6px] mb-2",
              active
                ? "bg-accent/[0.06] ring-1 ring-accent/20"
                : "bg-muted ring-1 ring-black/[0.04]",
            )}
            style={{ aspectRatio: "16/9" }}
          >
            {/* Gradient placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
            {/* Content icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={active ? "text-accent/40" : "text-muted-foreground/40"}
              >
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
            {/* Tag badge */}
            <div className="absolute top-2 left-1.5">
              <span className="text-[9px] font-medium text-white/80 bg-white/12 backdrop-blur-sm px-2 py-[2px] rounded-[3px] uppercase tracking-wider">
                {tag}
              </span>
            </div>
          </div>

          {/* Title */}
          <span
            className={cn(
              "text-xs font-semibold leading-snug truncate px-0.5",
              active ? "text-accent" : "text-hero-text-dark",
            )}
          >
            {title}
          </span>
        </div>
      </div>
    )
  }

  /* ── Full card mode ── */
  return (
    <div
      className={cn(
        "group block w-full h-full min-h-0 rounded-none overflow-hidden bg-card flex flex-col shadow-[0_1px_3px_0_rgba(0,0,0,0.05),0_1px_2px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1),0_4px_10px_-6px_rgba(0,0,0,0.05)] transition-all duration-300",
        className,
      )}
    >
      {/* Media area */}
      <div className="relative w-full aspect-video overflow-hidden bg-muted">
        {videoSrc ? (
          <video
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-200 ease-out"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
        )}

        {/* Gradient overlay for tag readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

        {/* Tag on media, top-left */}
        <div className="absolute top-0 left-0 right-0 p-4 sm:p-6">
          <span className="inline-block text-xs font-medium text-white/90 bg-white/15 backdrop-blur-md px-3 py-1">
            {tag}
          </span>
        </div>
      </div>

      {/* Info banner, minimal */}
      <div className="flex flex-col p-4 sm:p-5">
        <h3 className="font-heading text-base sm:text-lg font-semibold leading-snug text-hero-text-dark">
          {title}
        </h3>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs font-medium text-hero-muted bg-muted px-2 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
