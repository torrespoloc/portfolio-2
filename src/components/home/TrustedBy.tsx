"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const logos = [
  "/logos/tedai.png",
  "/logos/waldo.svg",
  "/logos/XY.svg",
  "/logos/Reail.svg",
  "/logos/fundr-logo.svg",
  "/logos/7dish.svg",
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
        show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
      }}
      className={className}
    >
      <motion.p
        variants={fadeUp}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-hero-muted mb-14 text-center"
      >
        Trusted By
      </motion.p>

      <div className="relative overflow-hidden mask-fade-x">
        <div className="flex marquee-track gap-12 sm:gap-16 items-center">
          {[...logos, ...logos].map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={src}
              alt=""
              className="h-8 sm:h-10 w-auto object-contain shrink-0 opacity-50 hover:opacity-80 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
