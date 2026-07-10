"use client"

import { usePathname } from "next/navigation"
import { LINKS } from "@/lib/constants"

export function SiteFooter() {
  const pathname = usePathname()
  const isWorkPage = pathname.startsWith("/work/")

  return (
    <footer className={`border-t border-hairline ${isWorkPage ? "lg:ml-[15vw]" : ""}`}>
      <div className="mx-auto w-full max-w-[1000px] px-4 py-20">
        {/* Headline */}
        <p
          className="mx-auto max-w-[800px] text-center text-[clamp(20px,3vw,32px)] leading-[1.3] tracking-tight text-hero-text-dark font-heading italic"
        >
          Got a 0-to-1 product that needs to ship <span className="text-accent">fast</span>?
        </p>

        {/* Reach out row */}
        <p className="mt-6 text-center text-sm leading-relaxed text-hero-text">
          Reach out,{" "}
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-hero-text-dark underline decoration-hero-muted/30 underline-offset-2 transition-colors hover:text-accent hover:decoration-accent"
          >
            LinkedIn
          </a>
          {", "}
          <a
            href={LINKS.resume ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-hero-text-dark underline decoration-hero-muted/30 underline-offset-2 transition-colors hover:text-accent hover:decoration-accent"
          >
            See Resume
          </a>
        </p>

        <p className="mt-2 text-center text-xs text-hero-text">
          Jackeline Torres © 2026. All Rights Reserved. SF, Bay Area
        </p>

      </div>
    </footer>
  )
}
