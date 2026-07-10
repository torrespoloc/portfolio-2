import { TrustedBy } from "@/components/home/TrustedBy";
import { WorkCardsStack } from "@/components/home/WorkCardsStack";
import { Testimonials } from "@/components/home/Testimonials";
import { Experience } from "@/components/home/Experience";
import { HeroContent } from "@/components/home/HeroContent";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-hero-bg font-sans">
      {/* Content container */}
      <div className="mx-auto w-full max-w-[1504px] min-h-screen px-5 md:px-0 relative">
        {/* Vertical projection lines — at content padding edge on mobile, container edge on desktop */}
        <div className="absolute inset-y-0 left-5 w-px bg-hero-border pointer-events-none md:left-0 z-10" aria-hidden="true" />
        <div className="absolute inset-y-0 right-5 w-px bg-hero-border pointer-events-none md:right-0 z-10" aria-hidden="true" />

      <HeroContent />

      <SectionDivider />

      {/* Trusted By */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-[1504px]">
          <TrustedBy />
        </div>
      </section>

      <SectionDivider />

      <WorkCardsStack show7dish={false} />

      <section className="py-20 border-y border-hero-border" />

      {/* Experience + Testimonials — connected */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-[1504px]">
          <Experience />
          <SectionDivider />

          <section className="py-20 border-y border-hero-border" />

          <Testimonials />
        </div>
      </section>
      </div>
    </div>
  );
}
