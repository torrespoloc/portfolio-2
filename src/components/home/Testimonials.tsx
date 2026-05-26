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
      "The best product designers share one quality: their work feels inevitable. You use it and think — of course it works this way. Jacki designs like that.",
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
    highlights: ["thoughtful and resourceful"],
  },
  {
    quote:
      "Jacki is an ambitious talent — always willing to learn, solve tough problems, and deliver strong results. I'd work with her again in a heartbeat.",
    name: "Jonathan Brink",
    title: "Senior UX Manager at IBM",
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
        width={44}
        height={44}
        className={`h-11 w-11 rounded-full object-cover ${
          light ? "ring-2 ring-white/20" : "ring-2 ring-[#f5f5f5] group-hover:ring-white/20"
        } shrink-0 transition-all duration-500 ease-[0.22,1,0.36,1]`}
      />
    );
  }

  return (
    <div
      className={`h-11 w-11 rounded-full ${
        light
          ? "bg-white/10 ring-1 ring-white/20"
          : "bg-[#f5f5f5] ring-1 ring-[#4d4d4d]/10 group-hover:bg-white/10 group-hover:ring-white/20"
      } flex items-center justify-center shrink-0 transition-all duration-500 ease-[0.22,1,0.36,1]`}
    >
      <span
        className={`text-[11px] font-semibold ${
          light
            ? "text-white/60"
            : "text-[#757575]/60 group-hover:text-white/60"
        } tracking-wide transition-colors duration-500 ease-[0.22,1,0.36,1]`}
      >
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
          className={`font-semibold transition-colors duration-500 ease-[0.22,1,0.36,1] ${
            dark
              ? "text-chartreuse"
              : "text-[rgb(87,126,255)] group-hover:text-chartreuse"
          }`}
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

const rotations = [-0.5, 0.8, -0.6, 0.4, -0.4];
const yOffsets = [0, -10, 6, -6, 3];

export function Testimonials({ className = "" }: Props) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
      }}
      className={className}
    >
      <motion.p
        variants={fadeUp}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-[#757575] mb-14 text-center"
      >
        Testimonials
      </motion.p>

      <div className="overflow-x-auto pb-8 -mx-6 px-6 md:overflow-visible md:mx-0 md:px-0">
        <div className="flex items-stretch justify-center min-w-max md:min-w-0">
          {testimonials.map((t, i) => {
            const isMiller = i === 0;
            const isHighlighted = t.featured;

            return (
              <motion.div
                key={t.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: yOffsets[i],
                    rotate: rotations[i],
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{
                  rotate: 0,
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                }}
                className={`relative w-[250px] flex-shrink-0 flex flex-col ${
                  i > 0 ? "-ml-12" : ""
                }
                  rounded-xl p-6 origin-center group
                  ${
                    isHighlighted
                      ? "bg-burgundy"
                      : "bg-white ring-1 ring-[#4d4d4d]/10 hover:bg-burgundy hover:ring-transparent"
                  }
                  shadow-[0_1px_3px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)]
                  hover:z-10
                  transition-[background-color,box-shadow,color] duration-500 ease-[0.22,1,0.36,1]
                `}
              >
                {/* Featured badge — top left */}
                {isHighlighted && (
                  <div className="absolute top-3 left-4 flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-chartreuse" />
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-chartreuse/70">
                      Featured
                    </span>
                  </div>
                )}

                {/* Miller: decorative giant quote mark + chartreuse top accent */}
                {isMiller && (
                  <>
                    <span
                      aria-hidden
                      className="absolute -top-4 -left-1 text-[7rem] font-heading italic leading-none text-chartreuse/10 select-none pointer-events-none"
                    >
                      &ldquo;
                    </span>
                    <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-chartreuse/30 to-transparent" />
                  </>
                )}

                {/* Subtle left accent line appears on hover for non-highlighted, non-Miller cards */}
                {!isHighlighted && !isMiller && (
                  <div className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full bg-gradient-to-b from-transparent via-chartreuse/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[0.22,1,0.36,1]" />
                )}

                <div className={`relative z-10 flex flex-col flex-1 ${isHighlighted ? "mt-6" : ""}`}>
                  <p
                    className={`text-[15px] leading-relaxed transition-colors duration-500 ease-[0.22,1,0.36,1] ${
                      isMiller
                        ? "font-heading italic text-[#2f2e31] group-hover:text-white/90"
                        : isHighlighted
                          ? "text-white/90"
                          : "text-[#4d4d4d] group-hover:text-white/90"
                    }`}
                  >
                    &ldquo;{highlightText(t.quote, t.highlights ?? [], isHighlighted)}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 mt-auto pt-5">
                    <Avatar name={t.name} image={t.image} light={isHighlighted} />
                    <div className="min-w-0">
                      <p
                        className={`text-sm font-medium leading-tight ${
                          isHighlighted
                            ? "text-white"
                            : "text-[#2f2e31] group-hover:text-white"
                        } transition-colors duration-500 ease-[0.22,1,0.36,1]`}
                      >
                        {t.name}
                      </p>
                      <p
                        className={`text-xs leading-tight mt-0.5 ${
                          isHighlighted
                            ? "text-white/60"
                            : "text-[#757575] group-hover:text-white/60"
                        } transition-colors duration-500 ease-[0.22,1,0.36,1]`}
                      >
                        {t.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
