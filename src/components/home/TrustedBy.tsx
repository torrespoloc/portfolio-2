"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const allLogos = [
  { src: "/logos/tedai.png", alt: "TEDAI" },
  { src: "/logos/waldo.svg", alt: "Waldo" },
  { src: "/logos/XY.svg", alt: "XY" },
  { src: "/logos/Reail.svg", alt: "Reail" },
  { src: "/logos/fundr-logo.svg", alt: "Fundr" },
  { src: "/logos/7dish.svg", alt: "7dish" },
];

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
        className="rounded-[28px] border border-black/5 dark:border-white/[0.08] bg-white/75 dark:bg-[#1a1d28] shadow-[0_20px_60px_rgba(25,25,30,0.05)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm dark:backdrop-blur-none overflow-hidden"
      >
        <div className="sm:grid sm:grid-cols-2">
          <div className="px-6 py-8 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-hero-muted">
              I&apos;m grateful for their trust
            </p>
            <h2 className="mt-3 text-[24px] font-semibold leading-[1.05] tracking-[-0.03em] text-hero-text-dark sm:text-[30px]">
              Community &amp; relationships matter. Endorsements are proof of that.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-hero-muted sm:text-body-sm">
              A mix of healthtech, fintech, AI tooling, and founder-led products where the work had to ship.
            </p>
          </div>

          <div className="grid grid-cols-2 border-l-2 border-dashed border-black/15 dark:border-white/15 w-full h-full">
            {allLogos.map((logo, i) => {
              const isLastInRow = (i + 1) % 2 === 0;
              const isLastRow = i >= allLogos.length - 2;
              return (
                <div
                  key={logo.alt}
                  className={`flex h-full items-center justify-center px-4 ${
                    !isLastInRow ? "border-r-2 border-dashed border-black/15 dark:border-white/15" : ""
                  } ${!isLastRow ? "border-b-2 border-dashed border-black/15 dark:border-white/15" : ""}`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`h-7 w-auto object-contain sm:h-8 trusted-logo ${
                      logo.alt === "XY" ? "sm:h-[37px]" :
                      logo.alt === "TEDAI" || logo.alt === "Waldo" ? "sm:h-[26px]" : ""
                    }`}
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
