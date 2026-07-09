import { TrustedBy } from "@/components/home/TrustedBy";
import { WorkCardsStack } from "@/components/home/WorkCardsStack";
import { Testimonials } from "@/components/home/Testimonials";
import { Experience } from "@/components/home/Experience";
import { HeroContent } from "@/components/home/HeroContent";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-hero-bg font-sans">
      {/* Viewport-edge vertical lines */}
      <div className="fixed inset-y-0 left-0 w-px bg-hero-border pointer-events-none" aria-hidden="true" />
      <div className="fixed inset-y-0 right-0 w-px bg-hero-border pointer-events-none" aria-hidden="true" />

      {/* Content container with its own vertical borders */}
      <div className="mx-auto w-full max-w-[1360px] border-x border-hero-border min-h-screen px-5 md:px-0">

      <HeroContent />

      <SectionDivider />

      {/* Trusted By */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-[1360px]">
          <TrustedBy />
        </div>
      </section>

      <SectionDivider />

      <WorkCardsStack show7dish={false} />

      <section className="py-20 border-y border-hero-border" />

      {/* Experience + Testimonials — connected */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-[1360px]">
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
