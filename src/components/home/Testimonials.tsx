"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TESTIMONIALS, type Testimonial } from "@/lib/data/home";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

function LinkedInLink({ url }: { url?: string }) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn profile"
      className="inline-flex items-center justify-center shrink-0 transition-colors hover:opacity-70"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </a>
  );
}

function Avatar({ name, image, light }: { name: string; image?: string; light?: boolean }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  if (image) {
    return (
      <Image
        src={image}
        alt={name}
        width={72}
        height={72}
        className={`h-[72px] w-[72px] rounded-full object-cover ${
          light ? "ring-2 ring-white/15" : "ring-2 ring-black/5"
        } shrink-0`}
      />
    );
  }

  return (
    <div
      className={`flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full ${
        light ? "bg-white/10 ring-1 ring-white/20" : "bg-muted ring-1 ring-black/5"
      }`}
    >
      <span className={`text-xs font-semibold ${light ? "text-white/70" : "text-hero-muted"}`}>
        {initials}
      </span>
    </div>
  );
}

function highlightText(text: string, highlights: string[], dark = false): React.ReactNode {
  if (!highlights || highlights.length === 0) return text;

  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) => {
    if (highlights.some((h) => h.toLowerCase() === part.toLowerCase())) {
      return (
        <span
          key={i}
          className={`font-semibold ${dark ? "text-chartreuse" : "text-brand-accent"}`}
        >
          {part}
        </span>
      );
    }
    return part;
  });
}

type Props = {
  className?: string;
};


export function Testimonials({ className = "" }: Props) {
  const featured = TESTIMONIALS.find((testimonial) => testimonial.featured);
  const supporting = TESTIMONIALS.filter((testimonial) => !testimonial.featured);
  const leftColumn = supporting.slice(0, 2);
  const rightColumn = supporting.slice(2);

  if (!featured) return null;

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
      }}
      className={className}
    >
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="py-10 sm:py-12 mb-6 flex flex-col items-center text-center px-6"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hero-muted">
          Testimonials
        </p>
        <h2 className="mt-3 w-full font-heading text-[24px] font-semibold leading-[1.1] tracking-[-0.03em] text-hero-text-dark sm:text-[30px] lg:text-[54px]">
          Community &amp; relationships matter. Endorsements are proof of that.
        </h2>
      </motion.div>

      <div className="grid gap-0 border-t border-hero-border/70 -mt-px lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.75fr)]">
        <div className="grid gap-0 border-r border-hero-border/70">
          <motion.article
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-full flex-col overflow-hidden rounded-none border-b border-hero-border/70 bg-burgundy p-8 text-white"
          >
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-chartreuse/40 to-transparent" />
            <span
              aria-hidden
              className="pointer-events-none absolute -left-1 top-0 text-[7rem] font-heading italic leading-none text-chartreuse/10"
            >
              &ldquo;
            </span>

            <div className="relative z-10 flex h-full flex-1 flex-col">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-chartreuse" />
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-chartreuse/80">
                  Featured Quote
                </span>
              </div>

              <p className="flex-1 text-sm sm:text-[1.375rem] leading-[1.6] text-white/92">
                &ldquo;{highlightText(featured.quote, featured.highlights ?? [], true)}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <Avatar name={featured.name} image={featured.image} light />
                <div className="min-w-0">
                  <p className="text-body font-medium text-white inline-flex items-center gap-2">
                    {featured.name}
                    <LinkedInLink url={featured.linkedin} />
                  </p>
                  <p className="mt-1 text-body-sm text-white/65">{featured.title}</p>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
            className="grid gap-0 sm:grid-cols-2"
          >
            {leftColumn.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className={`flex h-full flex-col rounded-none border-b border-hero-border/70 ${index === 0 ? "border-r border-hero-border/70" : ""} bg-white/85 dark:bg-hero-card p-8 transition-transform duration-300 hover:-translate-y-1`}
              >
                <p className="flex-1 text-sm sm:text-body-lg leading-[1.65] text-hero-text-dark">
                  &ldquo;{highlightText(testimonial.quote, testimonial.highlights ?? [])}&rdquo;
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-black/5 dark:border-white/5 pt-4">
                  <Avatar name={testimonial.name} image={testimonial.image} />
                  <div className="min-w-0">
                    <p className="text-body font-medium text-hero-text-dark inline-flex items-center gap-2">
                      {testimonial.name}
                      <LinkedInLink url={testimonial.linkedin} />
                    </p>
                    <p className="mt-1 text-body-sm text-hero-muted">{testimonial.title}</p>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          className="grid gap-0 sm:grid-cols-2 lg:grid-cols-1"
        >
          {rightColumn.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`flex h-full flex-col rounded-none border-b border-hero-border/70 ${index === 0 ? "border-b border-hero-border/70 sm:border-r lg:border-r-0 lg:border-b" : ""} bg-white/85 dark:bg-hero-card p-8 transition-transform duration-300 hover:-translate-y-1`}
            >
              <p className="flex-1 text-sm sm:text-body-lg leading-[1.65] text-hero-text-dark">
                &ldquo;{highlightText(testimonial.quote, testimonial.highlights ?? [])}&rdquo;
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-black/5 dark:border-white/5 pt-4">
                <Avatar name={testimonial.name} image={testimonial.image} />
                <div className="min-w-0">
                  <p className="text-body font-medium text-hero-text-dark inline-flex items-center gap-2">
                    {testimonial.name}
                    <LinkedInLink url={testimonial.linkedin} />
                  </p>
                  <p className="mt-1 text-body-sm text-hero-muted">{testimonial.title}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
