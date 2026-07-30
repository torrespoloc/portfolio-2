import type { Metadata } from "next"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UxChatsVideo } from "@/components/about/ux-chats-video"
import { SectionDivider } from "@/components/ui/section-divider"

export const metadata: Metadata = {
  title: "About | Jackeline Torres",
  description: "Product designer by trade, community builder at heart.",
}

const youtubeVideos = [
  { src: "nmEeakg-xqw", title: "Jackeline Torres public speaking 1" },
  { src: "fcj76pBvuU4", title: "Jackeline Torres public speaking 2" },
  { src: "TeVozgHPnt0", title: "Jackeline Torres public speaking 3" },
  { src: "hSW6J_jp7lc", title: "Jackeline Torres public speaking 4" },
] as const

const watercolors = [
  { src: "/about/webp/watercolor-azul.webp", alt: "Azul watercolor" },
  { src: "/about/webp/watercolor-cat.webp", alt: "Cat watercolor" },
  { src: "/about/webp/watercolor-circle.webp", alt: "Circle watercolor" },
  { src: "/about/webp/watercolor-deer.webp", alt: "Deer watercolor" },
  { src: "/about/webp/watercolor-goose.webp", alt: "Goose watercolor" },
  { src: "/about/webp/watercolor-jerry.webp", alt: "Jerry watercolor" },
] as const

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-hero-bg font-sans">
      <div className="mx-auto w-full max-w-container min-h-screen px-5 md:px-0 relative pt-24 md:pt-32 pb-12 md:pb-16">
        {/* Vertical projection lines */}
        <div className="absolute inset-y-0 left-5 w-px bg-hero-border/35 pointer-events-none md:left-0 z-10" aria-hidden="true" />
        <div className="absolute inset-y-0 right-5 w-px bg-hero-border/35 pointer-events-none md:right-0 z-10" aria-hidden="true" />

        {/* ── Hero ── */}
        <div>
          <div className="px-6 md:px-10 py-10 md:py-14 text-center">
            <h1 className="font-heading text-about-hero sm:text-about-hero-sm lg:text-about-hero-lg font-semibold text-hero-text-dark">
              Welcome here. Here&rsquo;s a bit about me.
            </h1>
          </div>
        </div>
        <SectionDivider />

        {/* ── The UX Chats ── */}
        <div>
          <div className="flex flex-col md:flex-row md:gap-6 lg:gap-8 items-stretch">
            <div className="flex-1 px-5 md:px-8 py-5 md:py-6 relative">
              <h2 className="font-heading text-about-h2 sm:text-about-h2-sm lg:text-about-h2-lg font-semibold tracking-[-0.03em] text-hero-text-dark mb-3">
                I started <span className="text-accent">The UX Chats</span>.
                Then 30 strangers showed up
              </h2>
              <p className="text-hero-text text-body mb-4">
                Before UX, I was an architectural designer making the leap into product
                design. Like most career switchers, I had no clue what I was doing, so
                I started talking to people. Those conversations gave me energy, clarity,
                and human connection. I posted on LinkedIn inviting people to share, vent,
                and connect. 30 strangers showed up. And it was magic.
              </p>
              <Button
                render={<a href="https://www.theuxchats.co" target="_blank" rel="noopener noreferrer" />}
                variant="outline"
                className="rounded-[12px] h-11 px-5"
              >
                Visit theuxchats.co <ExternalLink className="h-4 w-4 inline-block" />
              </Button>

              {/* Logo in the corner, mirrors the hero community card treatment */}
              <img
                src="/the-ux-chats-logo.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute bottom-0 right-6 md:right-10 w-12 h-12 object-contain rotate-6 pointer-events-none"
              />
            </div>
            <UxChatsVideo />
          </div>
        </div>

        {/* ── Spacer ── */}
        <SectionDivider />
        <section className="py-20" />
        <SectionDivider />

        {/* ── ADPList ── */}
        <div>
          <div className="flex flex-col md:flex-row-reverse md:gap-4 items-stretch">
            <div className="flex-1 px-5 md:px-8 py-5 md:py-6">
              <h2 className="font-heading text-about-h2 sm:text-about-h2-sm lg:text-about-h2-lg font-semibold tracking-[-0.03em] text-hero-text-dark mb-3">
                I&rsquo;m also a <span className="text-accent">mentor</span> on ADPList and more
              </h2>
              <p className="text-hero-text text-body mb-4">
                Giving back is a huge part of who I am. I help aspiring designers navigate
                portfolio reviews, interview prep, and career strategy.
                Because the best way to grow is to help others grow too.
              </p>
              <Button
                render={<a href="https://adplist.org/mentors/jackeline-torres" target="_blank" rel="noopener noreferrer" />}
                variant="outline"
                className="rounded-[12px] h-11 px-5"
              >
                Book a session <ExternalLink className="h-4 w-4 inline-block" />
              </Button>
            </div>
            <div className="w-full md:w-[40%] shrink-0">
              <div className="overflow-hidden">
                <img
                  src="/about/webp/adplist-swag.webp"
                  alt="ADPList mentoring swag"
                  loading="lazy"
                  className="w-full block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Spacer ── */}
        <SectionDivider />
        <section className="py-20" />
        <SectionDivider />

        {/* ── TED / Events ── */}
        <div>
          <div className="flex flex-col md:flex-row md:gap-6 lg:gap-8 items-stretch">
            <div className="flex-1 px-5 md:px-8 py-5 md:py-6">
              <h2 className="font-heading text-about-h2 sm:text-about-h2-sm lg:text-about-h2-lg font-semibold tracking-[-0.03em] text-hero-text-dark mb-3">
                TED talks, UX events, and lots of{' '}
                <span className="text-accent">networking</span>
              </h2>
              <p className="text-hero-text text-body">
                I&rsquo;ve volunteered at TED AI San Francisco, attended countless UX
                events, and networked my way through product design. My goal is to
                speak on a TED stage one day.
              </p>
              <a
                href="https://www.youtube.com/watch?v=4VdO7LuoBzM&ab_channel=TEDxTalks"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-case-eyebrow underline underline-offset-4 decoration-2 transition-colors hover:text-accent"
              >
                My favorite TED talk <ExternalLink className="h-4 w-4 inline-block" />
              </a>
            </div>
            <div className="w-full md:w-media-col shrink-0">
              <div className="overflow-hidden">
                <div className="grid grid-cols-2">
                  <img
                    src="/about/webp/networking-ted-volunteer.webp"
                    alt="Volunteering at TED AI San Francisco"
                    loading="lazy"
                    className="w-full h-full object-cover block"
                  />
                  <img
                    src="/about/webp/networking-event-card.webp"
                    alt="Networking event at TED AI"
                    loading="lazy"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Spacer ── */}
        <SectionDivider />
        <section className="py-20" />
        <SectionDivider />

        {/* ── Sports & Teamwork ── */}
        <div>
          <div className="flex flex-col md:flex-row-reverse md:gap-4 items-stretch">
            <div className="flex-1 px-5 md:px-8 py-5 md:py-6">
              <h2 className="font-heading text-about-h2 sm:text-about-h2-sm lg:text-about-h2-lg font-semibold tracking-[-0.03em] text-hero-text-dark mb-3">
                I&rsquo;m <span className="text-accent">competitive</span> and I
                know how to{" "}
                <span className="text-accent">work in teams</span>
              </h2>
              <p className="text-hero-text text-body">
                Not to sound corny, but in sports,{" "}
                <strong className="text-hero-text-dark font-semibold">communication</strong>{" "}
                and{" "}
                <strong className="text-hero-text-dark font-semibold">work strategy</strong>{" "}
                are everything.
              </p>
              <p className="text-hero-text text-body mt-4">
                My teamwork skills don&rsquo;t just happen at work or on a sports
                court. They&rsquo;ve become{" "}
                <em className="text-hero-text-dark">a part of my character and
                personality.</em>
              </p>
            </div>
            <div className="w-full md:w-media-col shrink-0">
              <div className="overflow-hidden">
                <img
                  src="/about/webp/sports-work-in-teams.webp"
                  alt="Pickleball team photo"
                  loading="lazy"
                  className="w-full block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Spacer ── */}
        <SectionDivider />
        <section className="py-20" />
        <SectionDivider />

        {/* ── Public speaking ── */}
        <div>
          <div className="px-6 md:px-10 py-6 md:py-8 mb-4">
            <h2 className="font-heading text-about-h2 sm:text-about-h2-sm lg:text-about-h2-lg font-semibold tracking-[-0.03em] text-hero-text-dark">
              I broke through a barrier and got good at{" "}
              <span className="text-accent">public speaking</span>
            </h2>
            <p className="text-hero-text text-body mt-2 max-w-text-max">
              Filming myself used to terrify me, so I joined the sales world and filmed
              myself a lot. Here&rsquo;s the proof.
            </p>
          </div>

          {/* Full-width flush video row, 1px border between videos */}
          <div className="flex flex-col sm:flex-row border-y border-hero-border/35">
            {youtubeVideos.map((v, i) => (
              <div
                key={v.src}
                className={`flex-1 min-w-0 bg-black aspect-video ${
                  i > 0 ? "border-t sm:border-t-0 sm:border-l border-hero-border/35" : ""
                }`}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${v.src}?mute=1&autoplay=1&controls=0&loop=1&playlist=${v.src}&rel=0&iv_load_policy=3&playsinline=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  loading="lazy"
                  title={v.title}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Spacer ── */}
        <SectionDivider />
        <section className="py-20" />
        <SectionDivider />

        {/* ── Creative outlets (watercolor) ── */}
        <div>
          <div className="px-6 md:px-10 py-6 md:py-8 mb-4">
            <h2 className="font-heading text-about-h2 sm:text-about-h2-sm lg:text-about-h2-lg font-semibold tracking-[-0.03em] text-hero-text-dark">
              Creative outlets that make me a{" "}
              <span className="text-accent">better designer</span>
            </h2>
            <p className="text-hero-text text-body mt-2 max-w-text-max">
              Racket sports, writing, and watercolor painting. This talent emerged in
              2020 and I&rsquo;ve been at it ever since.
            </p>
          </div>

          <div className="border border-hero-border/35 overflow-hidden mb-8">
            <div className="grid grid-cols-3 gap-px bg-hero-border/35">
              {watercolors.map((img) => (
                <div key={img.src} className="overflow-hidden bg-hero-bg">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover block"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Close ── */}
        <div>
          <div className="px-6 md:px-10 py-6 md:py-8">
            <p className="text-hero-text text-body mb-4 max-w-text-max">
              Thanks for getting to know me. I bring the same team-first,
              competitive drive into every product I design, on the court
              and in the browser.
            </p>
            <Button
              render={<a href="/#work" />}
              variant="outline"
              className="rounded-[12px] h-11 px-5"
            >
              Browse case studies →
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
