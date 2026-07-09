import { LINKS } from "@/lib/constants"

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-hero-bg font-sans pt-24 md:pt-32 pb-0">
        <div className="mx-auto w-full max-w-[1600px] border-x border-hero-border min-h-screen">
          <div className="mx-auto w-full max-w-[940px]">

            {/* Hero card — headshot + facts */}
            <div className="w-full border-b border-hero-border p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                {/* Headshot with border */}
                <div className="w-full md:w-[280px] shrink-0">
                  <div className="overflow-hidden border border-hero-border">
                    <img
                      src="/about-jacki-headshot.png"
                      alt="Jackeline Torres"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Intro text + facts */}
                <div className="flex-1">
                  <p className="text-hero-text font-semibold text-body">
                    I have an interesting story to tell. But first, a few facts:
                  </p>

                  <ul className="mt-6 space-y-3 list-disc pl-4 text-hero-text marker:text-muted-foreground text-body-sm">
                    <li>I have <strong>good communication</strong> skills.</li>
                    <li>I can solve any design problem.</li>
                    <li>I have a million siblings.</li>
                    <li>I play tennis and pickleball (A LOT).</li>
                    <li>One day, I will <strong>speak at TED.</strong></li>
                    <li>I founded <strong>The UX Chats</strong>, a community of UXers.</li>
                  </ul>

                  <p className="mt-6 text-hero-text text-body-sm">
                    Before UX, I was an architectural designer.
                  </p>
                </div>
              </div>
            </div>

            {/* Speaker callout — inline, no rotation */}
            <div className="border-b border-hero-border px-6 md:px-10 py-6">
              <div className="inline-block">
                <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-case-eyebrow">
                  A speaker I admire:
                </p>
                <a
                  href="https://www.youtube.com/watch?v=4VdO7LuoBzM&ab_channel=TEDxTalks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-case-eyebrow underline underline-offset-4 decoration-2 transition-colors hover:text-accent"
                >
                  My favorite TED talk ↗
                </a>
              </div>
            </div>

            {/* "A bit about me" heading */}
            <div className="border-b border-hero-border px-6 md:px-10 py-10 sm:py-12">
              <h2 className="font-heading text-[24px] font-semibold leading-[1.1] tracking-[-0.03em] text-hero-text-dark sm:text-[30px]">
                A bit about me{" "}
                <span className="text-accent">↓</span>
              </h2>
            </div>

            {/* Section 1 — UX events, TED talks */}
            <div className="border-b border-hero-border px-6 md:px-10 py-10 sm:py-12">
              <div className="flex flex-col md:flex-row md:gap-12 lg:gap-20 items-center">
                <div className="flex-1">
                  <h3 className="font-heading text-[24px] sm:text-[36px] lg:text-[54px] font-semibold leading-[1.1] tracking-[-0.03em] text-hero-text-dark">
                    UX events, TED talks, <span className="text-accent">networking</span>
                    —you name it
                  </h3>
                  <div className="mt-5 space-y-4">
                    <p className="text-hero-text text-body">
                      The last few years of my product design career have been filled with new
                      experiences. And btw, did I mention I want to be a TED speaker?
                    </p>
                    <p className="text-hero-text text-body">
                      I join every year since 2024 ;)
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-[280px] shrink-0 mt-6 md:mt-0">
                  <div className="overflow-hidden border border-hero-border">
                    <img
                      src="/about-tedai-networking.png"
                      alt="TED AI San Francisco"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 — Competitive, teamwork */}
            <div className="border-b border-hero-border px-6 md:px-10 py-10 sm:py-12">
              <div className="flex flex-col md:flex-row-reverse md:gap-12 lg:gap-20 items-center">
                <div className="flex-1">
                  <h3 className="font-heading text-[24px] sm:text-[36px] lg:text-[54px] font-semibold leading-[1.1] tracking-[-0.03em] text-hero-text-dark">
                    I&apos;m <span className="text-accent">competitive</span> and know
                    how to work in teams
                  </h3>
                  <div className="mt-5 space-y-4">
                    <p className="text-hero-text text-body">
                      Not to sound corny, but in sports,{" "}
                      <strong>communication</strong> and{" "}
                      <strong>work strategy</strong> are everything.
                    </p>
                    <p className="text-hero-text text-body">
                      My teamwork skills don&apos;t just happen at work or on a sports
                      court; they&apos;ve become{" "}
                      <strong>a part of my character and personality.</strong>
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-[280px] shrink-0 mt-6 md:mt-0">
                  <div className="overflow-hidden border border-hero-border">
                    <img
                      src="/about-work-in-teams.png"
                      alt="Jackeline Torres — competitive spirit"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 — Public speaking */}
            <div className="border-b border-hero-border px-6 md:px-10 py-10 sm:py-12">
              <div className="max-w-[600px]">
                <h3 className="font-heading text-[24px] sm:text-[36px] lg:text-[54px] font-semibold leading-[1.1] tracking-[-0.03em] text-hero-text-dark">
                  I broke through a barrier and got good at{" "}
                  <span className="text-accent">public speaking</span>
                </h3>
                <div className="mt-5 space-y-4">
                  <p className="text-hero-text text-body">
                    Filming myself used to terrify me, so I joined the sales world and
                    filmed myself a lot, generating{" "}
                    <strong>$100k in revenue.</strong>
                  </p>
                  <p className="text-hero-text text-body">
                    P.S. I shot these 17 times.
                  </p>
                </div>
              </div>

              {/* YouTube video row */}
              <div className="mt-8 flex flex-row flex-wrap md:flex-nowrap gap-0 max-w-[960px] border border-hero-border">
                <div className="flex-1 min-w-0 overflow-hidden bg-black aspect-video border-r border-hero-border last:border-r-0">
                  <iframe
                    src="https://www.youtube.com/embed/nmEeakg-xqw?mute=1&autoplay=1&loop=1&playlist=nmEeakg-xqw&controls=0&showinfo=0&modestbranding=1&playsinline=1"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    loading="lazy"
                    title="Jackeline Torres public speaking video 1"
                  />
                </div>
                <div className="flex-1 min-w-0 overflow-hidden bg-black aspect-video border-r border-hero-border last:border-r-0">
                  <iframe
                    src="https://www.youtube.com/embed/fcj76pBvuU4?mute=1&autoplay=1&loop=1&playlist=fcj76pBvuU4&controls=0&showinfo=0&modestbranding=1&playsinline=1"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    loading="lazy"
                    title="Jackeline Torres public speaking video 2"
                  />
                </div>
                <div className="flex-1 min-w-0 overflow-hidden bg-black aspect-video border-r border-hero-border last:border-r-0">
                  <iframe
                    src="https://www.youtube.com/embed/TeVozgHPnt0?mute=1&autoplay=1&loop=1&playlist=TeVozgHPnt0&controls=0&showinfo=0&modestbranding=1&playsinline=1"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    loading="lazy"
                    title="Jackeline Torres public speaking video 3"
                  />
                </div>
                <div className="flex-1 min-w-0 overflow-hidden bg-black aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/hSW6J_jp7lc?mute=1&autoplay=1&loop=1&playlist=hSW6J_jp7lc&controls=0&showinfo=0&modestbranding=1&playsinline=1"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    loading="lazy"
                    title="Jackeline Torres public speaking video 4"
                  />
                </div>
              </div>
            </div>

            {/* Section 4 — Creative outlets */}
            <div className="border-b border-hero-border px-6 md:px-10 py-10 sm:py-12">
              <div className="flex flex-col md:flex-row-reverse md:gap-12 lg:gap-20 items-center">
                <div className="flex-1">
                  <h3 className="font-heading text-[24px] sm:text-[36px] lg:text-[54px] font-semibold leading-[1.1] tracking-[-0.03em] text-hero-text-dark">
                    Other creative outlets—they make me a{" "}
                    <span className="text-accent">better designer</span>
                  </h3>
                  <div className="mt-5 space-y-4">
                    <p className="text-hero-text text-body">
                      Every creative person has specific ways to wind down. For me, racket
                      sports, writing, and painting do the trick.
                    </p>
                    <p className="text-hero-text text-body">
                      This talent emerged in the 2020 pandemic times.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-[280px] shrink-0 mt-6 md:mt-0">
                  <div className="overflow-hidden border border-hero-border">
                    <img
                      src="/about-creative-outlets.png"
                      alt="Jackeline Torres — creative outlets"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Thank you */}
            <div className="px-6 md:px-10 py-10 sm:py-12">
              <p className="text-hero-text text-body">
                Thank you!
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
