import { TrustedBy } from "@/components/home/TrustedBy";
import { WorkCardsStack } from "@/components/home/WorkCardsStack";
import { Testimonials } from "@/components/home/Testimonials";
import { Experience } from "@/components/home/Experience";
import { HeroContent } from "@/components/home/HeroContent";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-hero-bg font-sans">
      <HeroContent />

      {/* Trusted By */}
      <section className="px-6 pb-20">
        <div className="mx-auto w-full max-w-[940px]">
          <TrustedBy />
        </div>
      </section>

      <WorkCardsStack />

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
