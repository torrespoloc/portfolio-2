"use client"

export function TooltipIcon({ src, alt, className, tooltip }: { src: string; alt: string; className?: string; tooltip: string }) {
  return (
    <span className="relative inline-flex group">
      <img src={src} alt={alt} className={className} />
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded-md text-xs font-medium bg-foreground text-background opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {tooltip}
      </span>
    </span>
  )
}
