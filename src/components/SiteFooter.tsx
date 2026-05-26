import Link from "next/link"
import { LINKS } from "@/lib/constants"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-foreground/[0.06]">
      <div className="mx-auto w-full max-w-[1000px] px-4 py-20">
        {/* Headline */}
        <p
          className="text-[#4d4d4d] text-[clamp(20px,3vw,32px)] leading-[1.3] tracking-tight text-center max-w-[500px] mx-auto"
          style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}
        >
          Got a 0-to-1 product that needs to ship fast?
        </p>

        {/* Reach out row */}
        <p className="mt-6 text-center text-sm text-hero-muted leading-relaxed">
          Reach out,{" "}
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors underline underline-offset-2 decoration-foreground/[0.2] hover:decoration-accent"
          >
            LinkedIn
          </a>
          {", "}
          <a
            href={LINKS.resume ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors underline underline-offset-2 decoration-foreground/[0.2] hover:decoration-accent"
          >
            See Resume
          </a>
          , Jackeline Torres © {year}
        </p>

        {/* Bottom Nav */}
        <nav className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.12em] text-hero-muted">
          <Link href="/" className="hover:text-foreground transition-colors">
            Product Designer Jackeline Torres
          </Link>
          <Link href="/#work" className="hover:text-foreground transition-colors">
            Work
          </Link>
          <a
            href={LINKS.resume ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
        </nav>
      </div>
    </footer>
  )
}
