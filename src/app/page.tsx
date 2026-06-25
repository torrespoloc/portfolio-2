import { CaseStudyCard } from "@/components/case-study-card";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Testimonials } from "@/components/home/Testimonials";
import { CopyEmail } from "@/components/home/CopyEmail";
import { HowIWorkCards } from "@/components/home/HowIWorkCards";
import { Experience } from "@/components/home/Experience";
import { ScrollChevron } from "@/components/home/ScrollChevron";
import { MyJamFlipCard } from "@/components/home/MyJamFlipCard";
import { TypewriterTag } from "@/components/home/TypewriterTag";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-hero-bg font-sans">
      <section className="relative flex flex-col justify-center min-h-[100svh] px-6 pt-[76px] sm:py-20 lg:py-24">
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

        <div className="mx-auto w-full max-w-[1248px] relative z-10 md:px-12">
          <div className="max-w-[1200px] mx-auto">
            <h1
              className="text-hero-text text-[clamp(34px,6.5vw,80px)] leading-[1.1] tracking-tight text-center"
              style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}
            >
              Hey, I&apos;m Jacki&mdash;I design apps and systems that make users say:
              <br />
              <span className="text-accent">Omw! This thing WORKS!</span>
            </h1>

            {/* Hero cards row */}
            <div className="mt-12">
              <HowIWorkCards>
              {/* Card 1 — Design Eng. */}
              <div className="self-stretch min-w-[220px] max-w-[306px] rounded-[20px] border border-hero-border bg-white p-5 animate-fade-in-up flex flex-col mx-3 md:mx-0">
                <p className="text-sm md:text-body font-bold uppercase tracking-wider text-brand-accent mb-2">
                  DESIGN ENG. RULES!
                </p>
                <p className="text-body-mobile md:text-body text-hero-text leading-relaxed font-semibold flex-1">
                  <img src="/logos/cursor.png" alt="Cursor" className="inline-block h-[30px] w-auto align-middle mr-0.5" />,
                  <img src="/logos/claude-code.png" alt="Claude Code" className="inline-block h-[36px] w-auto align-middle mr-0.5" />,
                  <img src="/logos/figma.png" alt="Figma" className="inline-block h-[30px] w-auto align-middle mr-0.5" />
                  ; I ship real production code, not just mockups.
                </p>
              </div>

              {/* Card 2 — My Jam (3D flip card) */}
              <div className="self-center md:flex-1 flex flex-col items-center gap-3">
                <MyJamFlipCard />
                <div className="md:hidden">
                  <TypewriterTag />
                </div>
              </div>

              {/* Card 3 — Community Builder */}
              <div className="self-stretch min-w-[220px] max-w-[306px] rounded-[20px] border border-hero-border bg-white p-5 animate-fade-in-up relative overflow-hidden flex flex-col mx-3 md:mx-0">
                <p className="text-sm md:text-body font-bold uppercase tracking-wider text-brand-accent mb-2">
                  Community Builder
                </p>
                <p className="text-body-mobile md:text-body text-hero-text leading-relaxed relative z-10 font-semibold">
                  I founded and lead The UX Chats, a 200 member community for UXers.
                </p>
                <img
                  src="/the-ux-chats-logo.png"
                  alt="The UX Chats logo"
                  className="absolute bottom-1 right-1 w-12 h-12 object-contain rotate-6"
                />
              </div>
            </HowIWorkCards>
            </div>

          {/* TypewriterTag below the card row on desktop */}
          <div className="hidden md:flex justify-center mt-5">
            <TypewriterTag />
          </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 md:mt-8 flex flex-col items-center gap-5">
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/about"
                className="inline-flex items-center justify-center h-[38px] px-6 rounded-[20px] text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                About me
              </a>
              <a
                href="https://www.linkedin.com/in/jackelinetorres/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[38px] px-6 rounded-[20px] text-sm font-medium text-hero-text border border-border bg-background hover:bg-hero-border transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <CopyEmail />
          </div>
        </div>
        <ScrollChevron />
      </section>

      {/* Trusted By */}
      <section className="px-6 pb-20">
        <div className="mx-auto w-full max-w-[940px]">
          <TrustedBy />
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="px-6 pb-20">
        <div className="mx-auto w-full max-w-[940px]">
          <h2 className="text-hero-text text-sm font-semibold uppercase tracking-wider mb-8">
            Work
          </h2>

          <div className="flex flex-col gap-10 lg:gap-[88px]">
            <CaseStudyCard
              tag="AI WORKFLOWS"
              headline={<>Making the XY&#39;s healthcare SaaS platform <span className="text-brand-accent">AI and chat driven</span></>}
              description="Conversational onboarding replaced hour-long demos with 3-step wizards. Built component factory to ship production-ready flows."
              tags={["healthtech", "SaaS"]}
              year="2025–2026"
              metric1Label="Clicks to value"
              metric1Value="3 steps"
              metric2Label="Setup Reduction"
              metric2Value="Hour to minutes"
              mediaSrcs={["/xy/IntegrationsHub.mp4", "/xy/BrowserAgent.mp4", "/xy/DataExtraction.mp4", "/xy/KnowledgeBase.mp4", "/xy/TeamProductivity.mp4"]}
              href="/work/xy"
              builtForLogo="/logos/XY.svg"
              ndaBadge
            />

            <CaseStudyCard
              tag="HEALTHTECH"
              headline={<>Designed End-to-End Mobile Patient App for <span className="text-brand-accent">HIPAA-Compliant</span> Contact Lens Ordering</>}
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
              headline={<>Monetizing Fundr&apos;s SaaS platform with an <span className="text-brand-accent">upgrade paywall system</span></>}
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
              badge="Building V2"
              headline={<>SideNook — A <span className="text-brand-accent">macOS terminal emulator</span> that stays out of your way</>}
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
              headline={<>Redesigned <span className="text-brand-accent">3 core flows</span> for 7dish&apos;s meal planning app</>}
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
      <section className="px-6 pb-20">
        <Experience />
      </section>

      {/* Testimonials */}
      <section className="px-6 pb-20">
        <div className="mx-auto w-full max-w-[940px]">
          <Testimonials />
        </div>
      </section>
    </div>
  );
}
