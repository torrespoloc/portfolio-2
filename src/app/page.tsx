import { TrustedBy } from "@/components/home/TrustedBy";
import { WorkCardsStack } from "@/components/home/WorkCardsStack";
import { Testimonials } from "@/components/home/Testimonials";
import { Experience } from "@/components/home/Experience";
import { HeroContent } from "@/components/home/HeroContent";
import { SectionDivider } from "@/components/ui/section-divider";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UxChatsVideo } from "@/components/about/ux-chats-video";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-hero-bg font-sans">
      {/* Content container */}
      <div className="mx-auto w-full max-w-container min-h-screen px-5 md:px-0 relative">
        {/* Vertical projection lines at content padding edge on mobile, container edge on desktop */}
        <div className="absolute inset-y-0 left-5 w-px bg-hero-border/60 pointer-events-none md:left-0 z-10" aria-hidden="true" />
        <div className="absolute inset-y-0 right-5 w-px bg-hero-border/60 pointer-events-none md:right-0 z-10" aria-hidden="true" />

      <HeroContent />

      <SectionDivider />

      {/* Trusted By */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-container">
          <TrustedBy />
        </div>
      </section>

      <SectionDivider />

      <WorkCardsStack show7dish={false} />

      <SectionDivider />
      <section className="py-10 sm:py-20" />
      <SectionDivider />

      {/* Experience + Testimonials, connected */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-container">
          <Experience />
          <SectionDivider />

          <section className="py-10 sm:py-20" />
          <SectionDivider />

          <Testimonials />

          <section className="py-10 sm:py-20" />
          <SectionDivider />

          {/* Sneak Peak: About me */}
          <div>
            <div className="py-10 sm:py-12 mb-6 flex flex-col items-center text-center px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hero-muted">
                Sneak Peak: About me
              </p>
              <h2 className="mt-3 w-full font-heading text-[24px] font-semibold leading-[1.1] tracking-[-0.03em] text-hero-text-dark sm:text-[30px] lg:text-[54px]">
                There&rsquo;s more to a designer than their portfolio
              </h2>
            </div>
            <SectionDivider />
            <div className="flex flex-col md:flex-row md:gap-6 lg:gap-8 items-stretch">
              <div className="flex-1 px-5 md:px-8 py-5 md:py-6 relative">
                <h2 className="font-heading text-about-h2 sm:text-about-h2-sm lg:text-about-h2-lg font-semibold tracking-[-0.03em] text-hero-text-dark mb-3">
                  I founded <span className="text-accent">The UX Chats</span> in 2024.
                  30 strangers showed up on the first meet.
                </h2>
                <p className="text-hero-text text-body mb-4">
                  Before UX, I was an architectural designer making the leap into product
                  design. Like most career switchers, I had no clue what I was doing, so
                  I started talking to people. Those conversations gave me energy, clarity,
                  and human connection. I posted on LinkedIn inviting people to share, vent,
                  and connect. 30 strangers showed up. And it was magic.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    render={<a href="https://www.theuxchats.co" target="_blank" rel="noopener noreferrer" />}
                    variant="outline"
                    className="rounded-[12px] h-11 px-5"
                  >
                    Visit theuxchats.co <ExternalLink className="h-4 w-4 inline-block" />
                  </Button>
                  <Button
                    render={<a href="/about" />}
                    variant="outline"
                    className="rounded-[12px] h-11 px-5 text-accent border-accent"
                  >
                    More about me →
                  </Button>
                </div>

                {/* Logo in the corner */}
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
        </div>
      </section>
      </div>
    </div>
  );
}
