import { CaseStudyCard } from "@/components/case-study-card";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Testimonials } from "@/components/home/Testimonials";
import { CopyEmail } from "@/components/home/CopyEmail";
import { HowIWorkCards } from "@/components/home/HowIWorkCards";
import { Experience } from "@/components/home/Experience";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#fafafa] font-sans">
      <section className="relative flex flex-col justify-center min-h-[90vh] px-4 pt-20 pb-12">
        {/* Blur blobs — positioned to bleed from work section into hero */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          {/* Large blue — left side */}
          <div
            className="absolute w-[280px] h-[280px] rounded-full animate-float-geometric"
            style={{
              background: "radial-gradient(50% 50%, rgb(48, 62, 150) 0%, rgb(29, 48, 170) 100%)",
              filter: "blur(70px)",
              opacity: "0.15",
              top: "-60px",
              left: "clamp(-60px, -4vw, 40px)",
            }}
          />
          {/* Deep purple — center */}
          <div
            className="absolute w-[280px] h-[280px] rounded-full animate-float-geometric-slow"
            style={{
              background: "radial-gradient(50% 50%, rgb(41, 22, 148) 99.99%, rgb(29, 48, 170) 100%)",
              filter: "blur(80px)",
              opacity: "0.15",
              top: "clamp(20px, 4vw, 80px)",
              left: "clamp(300px, 36vw, 540px)",
            }}
          />
          {/* Deep blue — right side */}
          <div
            className="absolute w-[280px] h-[280px] rounded-full animate-float-geometric-alt"
            style={{
              background: "radial-gradient(50% 50%, rgb(48, 62, 150) 0%, rgb(29, 48, 170) 100%)",
              filter: "blur(80px)",
              opacity: "0.15",
              top: "clamp(-100px, -8vw, -20px)",
              left: "clamp(600px, 60vw, 900px)",
            }}
          />
        </div>

        <div className="mx-auto w-full max-w-[1200px] relative z-10 px-6 md:px-12">
          <div className="max-w-[1000px] mx-auto">
            <h1
              className="text-[#4d4d4d] text-[clamp(44px,6vw,72px)] leading-[1.1] tracking-tight text-center"
              style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}
            >
              Hey, I&apos;m Jacki&mdash;I design apps and systems that make users say:{" "}
              <span className="text-[rgb(87,126,255)]">&ldquo;Omg! This product WORKS!&rdquo;</span>
            </h1>

            {/* Hero cards row */}
            <HowIWorkCards>
              {/* Card 1 — Real Design CODE rules! */}
              <div className="flex-1 min-w-[220px] max-w-[290px] rounded-[20px] border border-[#f5f5f5] bg-white p-5 animate-fade-in-up">
                <p className="text-sm font-semibold uppercase tracking-wider text-[rgb(87,126,255)] mb-2">
                  Real Design CODE rules!
                </p>
                <p className="text-sm text-[#4d4d4d] leading-relaxed font-semibold">
                  Cursor, Claude Code + Figma Make, you name it. I ship code, not mockups.
                </p>
              </div>

              {/* Card 2 — My Jam */}
              <div className="flex-1 min-w-[220px] max-w-[346px] rounded-[20px] border border-[#f5f5f5] bg-[rgb(59,74,237)] p-5 animate-fade-in-up transition-transform duration-400 ease-out rotate-[2deg] hover:rotate-0">
                <p className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-2">
                  My Jam 👋
                </p>
                <p className="text-base text-white/70 leading-relaxed font-semibold">
                  Healthtech, fintech, SaaS, B2B, e-commerce + I&apos;m currently building a full{" "}
                  <span className="text-chartreuse">AI agentic</span> platform from scratch.
                </p>
              </div>

              {/* Card 3 — Community Builder */}
              <div className="flex-1 min-w-[220px] max-w-[290px] rounded-[20px] border border-[#f5f5f5] bg-white p-5 animate-fade-in-up relative overflow-hidden">
                <p className="text-sm font-semibold uppercase tracking-wider text-[rgb(87,126,255)] mb-2">
                  Community Builder
                </p>
                <p className="text-sm text-[#4d4d4d] leading-relaxed relative z-10 font-semibold">
                  I founded The UX Chats, a 180+ member space where UXers connect, share, and play.
                </p>
                <img
                  src="/the-ux-chats-logo.png"
                  alt="The UX Chats logo"
                  className="absolute bottom-1 right-1 w-12 h-12 object-contain rotate-6"
                />
              </div>
            </HowIWorkCards>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col items-center gap-5">
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/about"
                className="inline-flex items-center justify-center h-[38px] px-6 rounded-[20px] text-sm font-medium bg-[rgb(10,10,10)] text-[rgb(250,250,250)] hover:opacity-90 transition-opacity"
              >
                About me
              </a>
              <a
                href="https://www.linkedin.com/in/jackelinetorres/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[38px] px-6 rounded-[20px] text-sm font-medium text-[#4d4d4d] border border-[rgb(203,212,237)] bg-background hover:bg-[#f5f5f5] transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <CopyEmail />
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="px-4 pb-24">
        <div className="mx-auto w-full max-w-[940px]">
          <TrustedBy />
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="px-4 pb-24">
        <div className="mx-auto w-full max-w-[940px]">
          <h2 className="text-[#4d4d4d] text-sm font-semibold uppercase tracking-wider mb-8">
            Work
          </h2>

          <div className="flex flex-col gap-[60px]">
            <CaseStudyCard
              tag="HEALTHTECH · AI WORKFLOWS"
              headline={<>Making the XY&#39;s healthcare SaaS platform <span className="text-[rgb(87,126,255)]">AI and chat driven</span></>}
              description="Conversational onboarding replaced hour-long demos with 3-step wizards. Built component factory to ship production-ready flows."
              tags={["healthtech", "SaaS"]}
              year="2025–2026"
              metric1Label="Clicks to value"
              metric1Value="3 steps"
              metric2Label="Setup Reduction"
              metric2Value="Hour to minutes"
              mediaSrc="/case-studies/xy-hero.mp4"
              mediaType="video"
              href="/work/xy"
              builtForLogo="/logos/XY.svg"
            />

            <CaseStudyCard
              tag="HEALTHTECH"
              headline={<>Designed End-to-End Mobile Patient App for <span className="text-[rgb(87,126,255)]">HIPAA-Compliant</span> Contact Lens Ordering</>}
              description="Designed patient portal app MVP and full checkout experience in sync with Waldo's doctor portal."
              tags={["healthtech", "desktop", "mobile"]}
              year="2025"
              metric1Label="Shipped"
              metric1Value="1 month early"
              metric2Label="Ownership"
              metric2Value="100% patient app"
              mediaSrc="/case-studies/waldo-hero.mp4"
              mediaType="video"
              href="/work/waldo"
              builtForLogo="/logos/waldo.svg"
            />

            <CaseStudyCard
              tag="FINTECH · AI"
              headline={<>Monetizing Fundr&apos;s SaaS platform with an <span className="text-[rgb(87,126,255)]">upgrade paywall system</span></>}
              description="The story of how I cut down the need for 1:1 sales calls by 50% in just 10 weeks for a Fintech stealth startup."
              tags={["fintech", "SaaS"]}
              year="2023"
              metric1Label="Upgrade Conversions"
              metric1Value="20%"
              metric2Label="Team Productivity"
              metric2Value="2x"
              mediaSrc="/case-studies/fundr-hero.mp4"
              mediaType="video"
              href="/work/fundr"
              builtForLogo="/logos/fundr-logo.svg"
            />

            <CaseStudyCard
              tag="MAC APP"
              headline={<>SideNook — A <span className="text-[rgb(87,126,255)]">macOS terminal emulator</span> that stays out of your way</>}
              description="An ambient terminal companion: always there when you need it, invisible when you don&apos;t. Built with spring animations, multi-tab support, and keyboard-first navigation."
              tags={["macOS", "desktop", "shipped"]}
              year="2026"
              metric1Label="App Type"
              metric1Value="Native Mac"
              metric2Label="Tech"
              metric2Value="SwiftUI"
              mediaSrc="/case-studies/sidenook-hero.mp4"
              mediaType="video"
              href="/work/sidenook"
            />

            <CaseStudyCard
              tag="FOODTECH"
              headline={<>Redesigned <span className="text-[rgb(87,126,255)]">3 core flows</span> for 7dish&apos;s meal planning app</>}
              description="Boosting user satisfaction by 50% through strategic redesigns and 7 new features for working parents."
              tags={["mobile", "e-commerce", "shipped"]}
              year="2023–2024"
              metric1Label="User Satisfaction"
              metric1Value="~50%"
              metric2Label="New Features"
              metric2Value="7"
              mediaSrc="/case-studies/7dish-hero.png"
              mediaType="image"
              mediaAlt="7dish meal planning app"
              href="/work/7dish"
              builtForLogo="/logos/7dish.svg"
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-4 pb-24">
        <Experience />
      </section>

      {/* Testimonials */}
      <section className="px-4 pb-24">
        <div className="mx-auto w-full max-w-[940px]">
          <Testimonials />
        </div>
      </section>
    </div>
  );
}
