"use client";

import { motion } from "framer-motion";
import { ALL_LOGOS } from "@/lib/data/home";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

// Tailwind requires static class names, so we map alt text to height overrides
const logoHeightOverrides: Record<string, string> = {
  XY: "h-[38px] sm:h-[39px]",
  Fundr: "h-[27px] sm:h-[30px]",
  TEDAI: "h-[24px] sm:h-[22px]",
  Waldo: "h-[20px] sm:h-[18px]",
};

type Props = {
  className?: string;
};

export function TrustedBy({ className = "" }: Props) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
      }}
      className={className}
    >
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-none bg-white/75 dark:bg-[#1a1d28] backdrop-blur-sm dark:backdrop-blur-none overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="px-6 py-10 border-b sm:border-b-0 border-hero-border sm:px-8 sm:pt-12 sm:pb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-hero-muted">
              trusted by
            </p>
            <h2 className="mt-4 text-[24px] font-semibold leading-[1.15] tracking-[-0.03em] text-hero-text-dark sm:text-[30px] sm:leading-[1.05]">
              Series A & early stage startups + enterprise clients.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-hero-muted sm:text-body-sm">
              SaaS, B2B, health tech, AI chats.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:border-l border-hero-border w-full h-full">
            {ALL_LOGOS.map((logo, i) => {
              const isLastInRow = (i + 1) % 2 === 0;
              const isLastRow = i >= ALL_LOGOS.length - 2;
              return (
                <div
                  key={logo.alt}
                  className={`flex h-full items-center justify-center px-4 py-4 sm:py-0 ${
                    !isLastInRow ? "border-r border-hero-border" : ""
                  } ${!isLastRow ? "border-b border-hero-border" : ""}`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className={cn("h-7 w-auto object-contain sm:h-8", logoHeightOverrides[logo.alt])}
                  />
                </div>
              );
            })}
          </div>
        </div>

      </motion.div>
    </motion.section>
  );
}
