import { LINKS } from "@/lib/constants"

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-[#fafafa] font-sans pt-24 md:pt-32 pb-0">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
          {/* Hero — card with headshot + facts */}
          <div className="w-fit mx-auto max-w-full rounded-[20px] border border-[#f5f5f5] bg-white p-6 md:p-10 animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              {/* Portrait with gradient border */}
              <div className="w-full md:w-[280px] shrink-0">
                <div
                  className="rounded-full p-[8px]"
                  style={{
                    background:
                      "linear-gradient(135deg, #485bfc, #3b7fff, #a855f7, #ff6b35, #ff8c42, #ccff00, #485bfc)",
                    backgroundSize: "200% 200%",
                    animation: "gradient-shift 4s ease infinite",
                  }}
                >
                  <div className="rounded-full p-[3px] bg-white">
                    <div className="rounded-full overflow-hidden aspect-square">
                      <img
                      src="/about-jacki-headshot.png"
                      alt="Jackeline Torres"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              </div>

            {/* Intro text + facts */}
            <div className="flex-1">
              <p
                className="text-[#4d4d4d] font-semibold"
                style={{ fontSize: "18px", lineHeight: "27px" }}
              >
                I have an interesting story to tell. But first, a few facts:
              </p>

              <ul className="mt-6 space-y-3 list-disc pl-4 text-[#4d4d4d] marker:text-[#999]"
                style={{ fontSize: "16.5px", lineHeight: "21.45px" }}
              >
                <li>I have <strong>good communication</strong> skills.</li>
                <li>I can solve any design problem.</li>
                <li>I have a million siblings.</li>
                <li>I play tennis and pickleball (A LOT).</li>
                <li>One day, I will <strong>speak at TED.</strong></li>
                <li>I founded <strong>The UX Chats</strong>, a community of UXers.</li>
              </ul>

              <p
                className="mt-6 text-[#4d4d4d]"
                style={{ fontSize: "16.5px", lineHeight: "21.45px" }}
              >
                Before UX, I was an architectural designer.
              </p>
            </div>
          </div>
          </div>

          {/* Speaker I admire — pastel purple callout card */}
          <div className="mt-10 md:mt-12">
            <div
              className="inline-block rounded-[20px] p-5 -rotate-1 hover:rotate-0 transition-transform duration-300 ease-out"
              style={{
                background: "linear-gradient(135deg, #f0e6ff, #e0d4ff)",
                boxShadow: "0 4px 20px rgba(100, 80, 200, 0.1)"
              }}
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-[#7c6baf] mb-1">
                A speaker I admire:
              </p>
              <a
                href="https://www.youtube.com/watch?v=4VdO7LuoBzM&ab_channel=TEDxTalks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold underline underline-offset-4 decoration-2 hover:text-accent transition-colors"
                style={{ color: "#5b4a8a" }}
              >
                My favorite TED talk ↗
              </a>
            </div>
          </div>

          {/* "A bit about me" section — same container width as work section on /home */}
          <div className="mx-auto w-full max-w-[940px]">

          <h2
            className="mt-20 md:mt-28 text-[#4d4d4d] font-bold"
            style={{ fontSize: "28px", lineHeight: "33.6px" }}
          >
            A bit about me{" "}
            <span className="text-accent">↓</span>
          </h2>

          {/* Section 1 — UX events, TED talks */}
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:gap-12 lg:gap-20 items-center">
            <div className="flex-1">
              <h3
                className="text-[#4d4d4d] font-bold"
                style={{ fontSize: "33px", lineHeight: "39.6px" }}
              >
                UX events, TED talks, <span className="text-accent">networking</span>
                —you name it
              </h3>
              <div className="mt-5 space-y-4">
                <p
                  className="text-[#4d4d4d]"
                  style={{ fontSize: "18px", lineHeight: "27px" }}
                >
                  The last few years of my product design career have been filled with new
                  experiences. And btw, did I mention I want to be a TED speaker?
                </p>
                <p
                  className="text-[#4d4d4d]"
                  style={{ fontSize: "18px", lineHeight: "27px" }}
                >
                  I join every year since 2024 ;)
                </p>
              </div>
            </div>
            <div className="w-full md:w-[280px] shrink-0 mt-6 md:mt-0">
              <div className="rounded-[20px] overflow-hidden">
                <img
                  src="/about-tedai-networking.png"
                  alt="TED AI San Francisco"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section 2 — Competitive, teamwork */}
          <div className="mt-16 md:mt-24 flex flex-col md:flex-row-reverse md:gap-12 lg:gap-20 items-center">
            <div className="flex-1">
              <h3
                className="text-[#4d4d4d] font-bold"
                style={{ fontSize: "33px", lineHeight: "39.6px" }}
              >
                I&apos;m <span className="text-accent">competitive</span> and know
                how to work in teams
              </h3>
              <div className="mt-5 space-y-4">
                <p
                  className="text-[#4d4d4d]"
                  style={{ fontSize: "18px", lineHeight: "27px" }}
                >
                  Not to sound corny, but in sports,{" "}
                  <strong>communication</strong> and{" "}
                  <strong>work strategy</strong> are everything.
                </p>
                <p
                  className="text-[#4d4d4d]"
                  style={{ fontSize: "18px", lineHeight: "27px" }}
                >
                  My teamwork skills don&apos;t just happen at work or on a sports
                  court; they&apos;ve become{" "}
                  <strong>a part of my character and personality.</strong>
                </p>
              </div>
            </div>
            <div className="w-full md:w-[280px] shrink-0 mt-6 md:mt-0">
              <div className="rounded-[20px] overflow-hidden border border-[#f5f5f5]">
                <img
                  src="/about-work-in-teams.png"
                  alt="Jackeline Torres — competitive spirit"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section 3 — Public speaking */}
          <div className="mt-16 md:mt-24">
            <div className="max-w-[600px]">
              <h3
                className="text-[#4d4d4d] font-bold"
                style={{ fontSize: "33px", lineHeight: "39.6px" }}
              >
                I broke through a barrier and got good at{" "}
                <span className="text-accent">public speaking</span>
              </h3>
              <div className="mt-5 space-y-4">
                <p
                  className="text-[#4d4d4d]"
                  style={{ fontSize: "18px", lineHeight: "27px" }}
                >
                  Filming myself used to terrify me, so I joined the sales world and
                  filmed myself a lot, generating{" "}
                  <strong>$100k in revenue.</strong>
                </p>
                <p
                  className="text-[#4d4d4d]"
                  style={{ fontSize: "18px", lineHeight: "27px" }}
                >
                  P.S. I shot these 17 times.
                </p>
              </div>
            </div>

            {/* YouTube video row */}
            <div className="mt-8 flex flex-row gap-0 max-w-[960px]">
              <div className="flex-1 min-w-0 overflow-hidden border border-[#f5f5f5] bg-black aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/nmEeakg-xqw?mute=1&autoplay=1&loop=1&playlist=nmEeakg-xqw&controls=0&showinfo=0&modestbranding=1&playsinline=1"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0 overflow-hidden border border-[#f5f5f5] bg-black aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/fcj76pBvuU4?mute=1&autoplay=1&loop=1&playlist=fcj76pBvuU4&controls=0&showinfo=0&modestbranding=1&playsinline=1"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0 overflow-hidden border border-[#f5f5f5] bg-black aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/TeVozgHPnt0?mute=1&autoplay=1&loop=1&playlist=TeVozgHPnt0&controls=0&showinfo=0&modestbranding=1&playsinline=1"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0 overflow-hidden border border-[#f5f5f5] bg-black aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/hSW6J_jp7lc?mute=1&autoplay=1&loop=1&playlist=hSW6J_jp7lc&controls=0&showinfo=0&modestbranding=1&playsinline=1"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Section 4 — Creative outlets */}
          <div className="mt-16 md:mt-24 flex flex-col md:flex-row-reverse md:gap-12 lg:gap-20 items-center">
            <div className="flex-1">
              <h3
                className="text-[#4d4d4d] font-bold"
                style={{ fontSize: "33px", lineHeight: "39.6px" }}
              >
                Other creative outlets—they make me a{" "}
                <span className="text-accent">better designer</span>
              </h3>
              <div className="mt-5 space-y-4">
                <p
                  className="text-[#4d4d4d]"
                  style={{ fontSize: "18px", lineHeight: "27px" }}
                >
                  Every creative person has specific ways to wind down. For me, racket
                  sports, writing, and painting do the trick.
                </p>
                <p
                  className="text-[#4d4d4d]"
                  style={{ fontSize: "18px", lineHeight: "27px" }}
                >
                  This talent emerged in the 2020 pandemic times.
                </p>
              </div>
            </div>
            <div className="w-full md:w-[280px] shrink-0 mt-6 md:mt-0">
              <div className="rounded-[20px] overflow-hidden border border-[#f5f5f5]">
                <img
                  src="/about-creative-outlets.png"
                  alt="Jackeline Torres — creative outlets"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Thank you */}
          <p
            className="mt-20 md:mt-28 pb-16 md:pb-24 text-[#4d4d4d]"
            style={{ fontSize: "18px", lineHeight: "27px" }}
          >
            Thank you!
          </p>
          </div>
        </div>
      </div>
    </>
  )
}
