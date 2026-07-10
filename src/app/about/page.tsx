import type { Metadata } from "next"
import { UxChatsVideo } from "@/components/about/ux-chats-video"

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
  { src: "/About/watercolor-azul.jpg", alt: "Azul watercolor" },
  { src: "/About/watercolor-cat.jpg", alt: "Cat watercolor" },
  { src: "/About/watercolor-circle.jpg", alt: "Circle watercolor" },
  { src: "/About/watercolor-deer.jpg", alt: "Deer watercolor" },
  { src: "/About/watercolor-goose.jpg", alt: "Goose watercolor" },
  { src: "/About/watercolor-jerry.jpg", alt: "Jerry watercolor" },
] as const

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-hero-bg font-sans">
      <div className="mx-auto w-full max-w-[1504px] min-h-screen px-5 md:px-0 relative pt-24 md:pt-32 pb-12 md:pb-16 divide-y divide-hero-border">
        {/* Vertical projection lines */}
        <div className="absolute inset-y-0 left-5 w-px bg-hero-border pointer-events-none md:left-0 z-10" aria-hidden="true" />
        <div className="absolute inset-y-0 right-5 w-px bg-hero-border pointer-events-none md:right-0 z-10" aria-hidden="true" />

        {/* ── Hero ── */}
        <div>
          <div className="px-6 md:px-10 py-10 md:py-14 text-center">
            <h1 className="font-heading text-about-hero sm:text-about-hero-sm lg:text-about-hero-lg font-semibold text-hero-text-dark">
              Welcome here. Here&rsquo;s a bit about me.
            </h1>
          </div>
        </div>

        {/* ── The UX Chats ── */}
        <div>
          <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12 items-start">
            <div className="flex-1 px-6 md:px-10 py-6 md:py-8 relative">
              <h2 className="font-heading text-about-h2 sm:text-about-h2-sm lg:text-about-h2-lg font-semibold tracking-[-0.03em] text-hero-text-dark mb-3">
                I started <span className="text-accent">The UX Chats</span>
                &mdash;and 30 strangers showed up
              </h2>
              <p className="text-hero-text text-body mb-4">
                Before UX, I was an architectural designer making the leap into product
                design. Like most career switchers, I had no clue what I was doing&mdash;so
                I started talking to people. Those conversations gave me energy, clarity,
                and human connection. I posted on LinkedIn inviting people to share, vent,
                and connect. 30 strangers showed up. And it was magic.
              </p>
              <a
                href="https://www.theuxchats.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-hero-border bg-hero-bg px-5 py-2 text-sm font-semibold text-hero-text-dark transition-colors hover:bg-hero-border hover:text-hero-text-dark"
              >
                Visit theuxchats.co ↗
              </a>

              {/* Logo in the corner — mirrors the hero community card treatment */}
              <img
                src="/the-ux-chats-logo.png"
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 right-6 md:right-10 w-12 h-12 object-contain rotate-6 pointer-events-none"
              />
            </div>
            <UxChatsVideo />
          </div>
        </div>

        {/* ── Spacer ── */}
        <section className="py-20" />

        {/* ── ADPList ── */}
        <div>
          <div className="flex flex-col md:flex-row-reverse md:gap-6 items-start">
            <div className="flex-1 px-6 md:px-10 py-6 md:py-8">
              <h2 className="font-heading text-about-h2 sm:text-about-h2-sm lg:text-about-h2-lg font-semibold tracking-[-0.03em] text-hero-text-dark mb-3">
                I&rsquo;m also a <span className="text-accent">mentor</span>
                &mdash;ADPList, Cal&rsquo;s career center, and more
              </h2>
              <p className="text-hero-text text-body mb-4">
                Giving back is a huge part of who I am. I help aspiring designers navigate
                portfolio reviews, interview prep, and career strategy&mdash;because the
                best way to grow is to help others grow too.
              </p>
              <a
                href="https://adplist.org/mentors/jackeline-torres"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-hero-border bg-hero-bg px-5 py-2 text-sm font-semibold text-hero-text-dark transition-colors hover:bg-hero-border hover:text-hero-text-dark"
              >
                Book a session ↗
              </a>
            </div>
            <div className="w-full md:w-1/2 shrink-0">
              <div className="overflow-hidden border border-hero-border">
                <img
                  src="/About/adplist-swag.png"
                  alt="ADPList mentoring swag"
                  className="w-full block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Spacer ── */}
        <section className="py-20" />

        {/* ── TED / Events ── */}
        <div>
          <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12 items-start">
            <div className="flex-1 px-6 md:px-10 py-6 md:py-8">
              <h2 className="font-heading text-about-h2 sm:text-about-h2-sm lg:text-about-h2-lg font-semibold tracking-[-0.03em] text-hero-text-dark mb-3">
                TED talks, UX events, <span className="text-accent">networking</span>
                &mdash;you name it
              </h2>
              <p className="text-hero-text text-body">
                I&rsquo;ve volunteered at TED AI San Francisco, attended countless UX
                events, and networked my way through product design. And yes&mdash;I apply
                to speak at TED every year since 2024.
              </p>
              <a
                href="https://www.youtube.com/watch?v=4VdO7LuoBzM&ab_channel=TEDxTalks"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-case-eyebrow underline underline-offset-4 decoration-2 transition-colors hover:text-accent"
              >
                My favorite TED talk ↗
              </a>
            </div>
            <div className="w-full md:w-[440px] shrink-0">
              <div className="overflow-hidden border border-hero-border">
                <div className="grid grid-cols-2">
                  <img
                    src="/About/networking-ted-volunteer.jpg"
                    alt="Volunteering at TED AI San Francisco"
                    className="w-full h-full object-cover block"
                  />
                  <img
                    src="/About/networking-event-card.jpg"
                    alt="Networking event at TED AI"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Spacer ── */}
        <section className="py-20" />

        {/* ── Public speaking ── */}
        <div>
          <div className="px-6 md:px-10 py-6 md:py-8 mb-4">
            <h2 className="font-heading text-about-h2 sm:text-about-h2-sm lg:text-about-h2-lg font-semibold tracking-[-0.03em] text-hero-text-dark">
              I broke through a barrier and got good at{" "}
              <span className="text-accent">public speaking</span>
            </h2>
            <p className="text-hero-text text-body mt-2 max-w-[700px]">
              Filming myself used to terrify me, so I joined the sales world and filmed
              myself a lot. Here&rsquo;s the proof.
            </p>
          </div>

          {/* Full-width flush video row — 1px border between videos */}
          <div className="flex flex-col sm:flex-row border-y border-hero-border">
            {youtubeVideos.map((v, i) => (
              <div
                key={v.src}
                className={`flex-1 min-w-0 bg-black aspect-video ${
                  i > 0 ? "border-t sm:border-t-0 sm:border-l border-hero-border" : ""
                }`}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${v.src}?mute=1&autoplay=0&controls=1&modestbranding=1&playsinline=1`}
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
        <section className="py-20" />

        {/* ── Creative outlets (watercolor) ── */}
        <div>
          <div className="px-6 md:px-10 py-6 md:py-8 mb-4">
            <h2 className="font-heading text-about-h2 sm:text-about-h2-sm lg:text-about-h2-lg font-semibold tracking-[-0.03em] text-hero-text-dark">
              Creative outlets&mdash;they make me a{" "}
              <span className="text-accent">better designer</span>
            </h2>
            <p className="text-hero-text text-body mt-2 max-w-[700px]">
              Racket sports, writing, and watercolor painting. This talent emerged in
              2020 and I&rsquo;ve been at it ever since.
            </p>
          </div>

          <div className="border border-hero-border overflow-hidden mb-8">
            <div className="grid grid-cols-3 gap-px bg-hero-border">
              {watercolors.map((img) => (
                <div key={img.src} className="overflow-hidden bg-hero-bg">
                  <img
                    src={img.src}
                    alt={img.alt}
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
            <p className="text-hero-text text-body mb-4 max-w-[700px]">
              Thanks for getting to know me. I bring the same team-first,
              competitive drive into every product I design — on the court
              and in the browser.
            </p>
            <a
              href="/#work"
              className="inline-block rounded-full border border-hero-border bg-hero-bg px-5 py-2 text-sm font-semibold text-hero-text-dark transition-colors hover:bg-hero-border hover:text-hero-text-dark"
            >
              Browse case studies →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
