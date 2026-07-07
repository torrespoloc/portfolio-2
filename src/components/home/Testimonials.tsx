"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  image?: string;
  highlights?: string[];
  featured?: boolean;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "The best AI Product Designers share one quality: their work feels inevitable. You use it and think — of course it works this way. Jacki designs like that.",
    name: "Christopher Miller",
    title: "Enterprise UX · Design Career Coach",
    image: "/headshots/miller.png",
    highlights: ["work feels inevitable"],
  },
  {
    quote:
      "Jacki's passion, creative flair, and adaptability stood out immediately. Her work ethic and collaboration made her a standout contributor.",
    name: "Earl Friedberg",
    title: "UX Manager at Google",
    image: "/headshots/friedberg.png",
    highlights: ["passion, creative flair, and adaptability"],
  },
  {
    quote:
      "I was always impressed by her strong visual design instinct and thoughtful approach to UX. She has a solid ability to create designs that not only look excellent, but also make for a delightful user experience.",
    name: "Scott Cressman",
    title: "CPO + AI Leader at XY",
    image: "/headshots/cressman.png",
    highlights: ["strong visual design instinct", "delightful user experience"],
    featured: true,
  },
  {
    quote:
      "You're a thoughtful and resourceful UX designer. She's a natural at collaborating and shipping great work. I'd recommend her to anyone.",
    name: "Vincent Trepnier",
    title: "CEO of 7dish",
    image: "/headshots/vincent.jpeg",
    highlights: ["thoughtful and resourceful"],
  },
  {
    quote:
      "Jacki is an ambitious talent — always willing to learn, solve tough problems, and deliver strong results. I'd work with her again in a heartbeat.",
    name: "Jonathan Brink",
    title: "UX Manager at IBM",
    image: "/headshots/brink.png",
    highlights: ["ambitious talent"],
  },
];

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
        width={48}
        height={48}
        className={`h-12 w-12 rounded-full object-cover ${
          light ? "ring-2 ring-white/15" : "ring-2 ring-black/5"
        } shrink-0`}
      />
    );
  }

  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
        light ? "bg-white/10 ring-1 ring-white/20" : "bg-muted ring-1 ring-black/5"
      }`}
    >
      <span className={`text-[14px] font-semibold ${light ? "text-white/70" : "text-hero-muted"}`}>
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

const leftRotations = ["rotate-[-1deg]", "rotate-[1.5deg]"];
const rightRotations = ["rotate-[1deg]", "rotate-[-1.5deg]"];

export function Testimonials({ className = "" }: Props) {
  const featured = testimonials.find((testimonial) => testimonial.featured);
  const supporting = testimonials.filter((testimonial) => !testimonial.featured);
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
        className="mb-10 flex flex-col items-center text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hero-muted">
          Testimonials
        </p>
        <h2 className="mt-3 max-w-[560px] text-[28px] font-semibold leading-[1.05] tracking-[-0.03em] text-hero-text-dark sm:text-[36px]">
          Let one endorsement lead. Let the others back it up.
        </h2>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.75fr)]">
        <div className="grid gap-4">
          <motion.article
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-full rotate-[-1deg] flex-col overflow-hidden rounded-[28px] bg-burgundy p-7 text-white shadow-[0_24px_80px_rgba(48,18,36,0.18)] transition-transform duration-300 hover:rotate-0 sm:p-8"
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
                <span className="h-1.5 w-1.5 rounded-full bg-chartreuse" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-chartreuse/80">
                  Featured Quote
                </span>
              </div>

              <p className="max-w-[40ch] flex-1 text-body sm:text-[1.375rem] leading-[1.6] text-white/92">
                &ldquo;{highlightText(featured.quote, featured.highlights ?? [], true)}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <Avatar name={featured.name} image={featured.image} light />
                <div>
                  <p className="text-body-sm font-medium text-white">{featured.name}</p>
                  <p className="mt-0.5 text-sm text-white/65">{featured.title}</p>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {leftColumn.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className={`${leftRotations[index] ?? ""} flex h-full flex-col rounded-[22px] border border-black/5 bg-white/85 p-5 shadow-[0_10px_30px_rgba(25,25,30,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-0`}
              >
                <p className="flex-1 text-body-sm sm:text-body leading-[1.65] text-hero-text-dark">
                  &ldquo;{highlightText(testimonial.quote, testimonial.highlights ?? [])}&rdquo;
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-black/5 pt-4">
                  <Avatar name={testimonial.name} image={testimonial.image} />
                  <div>
                    <p className="text-body-sm font-medium text-hero-text-dark">{testimonial.name}</p>
                    <p className="mt-0.5 text-sm text-hero-muted">{testimonial.title}</p>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
        >
          {rightColumn.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`${rightRotations[index] ?? ""} flex h-full flex-col rounded-[22px] border border-black/5 bg-white/85 p-5 shadow-[0_10px_30px_rgba(25,25,30,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-0`}
            >
              <p className="flex-1 text-body-sm sm:text-body leading-[1.65] text-hero-text-dark">
                &ldquo;{highlightText(testimonial.quote, testimonial.highlights ?? [])}&rdquo;
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-black/5 pt-4">
                <Avatar name={testimonial.name} image={testimonial.image} />
                <div>
                  <p className="text-body-sm font-medium text-hero-text-dark">{testimonial.name}</p>
                  <p className="mt-0.5 text-sm text-hero-muted">{testimonial.title}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
