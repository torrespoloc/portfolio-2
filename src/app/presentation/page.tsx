"use client";

import { useState } from "react";

// ─── Slide data ────────────────────────────────────────────────────────────────
// Edit the content arrays below to fill in your deck.
// Each slide has a `type` that controls layout, and fields you can customize.

const SLIDES = [
  // 01 — Title
  {
    id: "title",
    type: "title" as const,
    label: "01 / Intro",
    eyebrow: "Product Designer",
    headline: "Hi, I'm Jacki Torres.",
    sub: "I design systems, interfaces, and experiences\nthat make complex things feel simple.",
    accent: "#485bfc",
  },

  // 02 — About
  {
    id: "about",
    type: "about" as const,
    label: "02 / About",
    headline: "A bit about me",
    body: "I'm a product designer with experience across fintech, healthtech, and SaaS. I care deeply about design systems, research-driven decisions, and shipping work that actually moves the needle.",
    tags: ["Design Systems", "User Research", "Interaction Design", "Prototyping", "Figma"],
    accent: "#485bfc",
  },

  // 03 — Process
  {
    id: "process",
    type: "process" as const,
    label: "03 / Process",
    headline: "How I work",
    steps: [
      { number: "01", title: "Discover", body: "Understand users, business goals, and constraints through research and stakeholder alignment." },
      { number: "02", title: "Define", body: "Synthesize findings into a clear problem statement, success metrics, and scope." },
      { number: "03", title: "Design", body: "Explore solutions through sketches, flows, and prototypes — iterating with feedback loops." },
      { number: "04", title: "Deliver", body: "Hand off production-ready specs, support engineering, and measure outcomes post-launch." },
    ],
    accent: "#485bfc",
  },

  // 04 — Case Study 1 (placeholder — swap in your own)
  {
    id: "case-study-1",
    type: "case-study" as const,
    label: "04 / Case Study",
    tag: "Fintech · SaaS",
    headline: "Project Title",
    role: "Lead Product Designer",
    timeline: "Q1–Q2 2024",
    challenge: "Describe the core problem you were hired to solve. Keep it to 1–2 sentences.",
    outcome: "Describe the measurable result — metric improvement, user feedback, or business impact.",
    link: "/work/fundr",
    accent: "#059669",
  },

  // 05 — Case Study 2 (placeholder)
  {
    id: "case-study-2",
    type: "case-study" as const,
    label: "05 / Case Study",
    tag: "Healthtech · Mobile",
    headline: "Project Title",
    role: "Product Designer",
    timeline: "Q3 2023",
    challenge: "Describe the core problem you were hired to solve. Keep it to 1–2 sentences.",
    outcome: "Describe the measurable result — metric improvement, user feedback, or business impact.",
    link: "/work/waldo",
    accent: "#D97706",
  },

  // 06 — Impact / Skills
  {
    id: "impact",
    type: "impact" as const,
    label: "06 / Impact",
    headline: "What I bring",
    stats: [
      { value: "5+", label: "Products shipped" },
      { value: "3", label: "Industries" },
      { value: "0→1", label: "Products built from scratch" },
      { value: "∞", label: "Design system tokens tweaked" },
    ],
    body: "I work best in teams where design has a real seat at the table — contributing to strategy, not just shipping screens.",
    accent: "#485bfc",
  },

  // 07 — Contact / Close
  {
    id: "contact",
    type: "contact" as const,
    label: "07 / Contact",
    headline: "Let's talk.",
    sub: "I'm open to full-time roles, contract work, and interesting problems.",
    email: "torrespoloc@gmail.com",
    site: "jackelinetorres.co",
    accent: "#485bfc",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function PresentationPage() {
  const [current, setCurrent] = useState(0);
  const slide = SLIDES[current];
  const isFirst = current === 0;
  const isLast = current === SLIDES.length - 1;

  const prev = () => !isFirst && setCurrent((c) => c - 1);
  const next = () => !isLast && setCurrent((c) => c + 1);

  // Keyboard nav
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-[#fafafa] font-sans select-none"
      style={{ cursor: "default" }}
      onKeyDown={handleKey}
      tabIndex={0}
    >
      {/* Slide area */}
      <div className="w-full h-full flex items-center justify-center px-16">
        <SlideRenderer slide={slide} />
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-10 py-5 border-t border-[#f0f0f0]">
        {/* Slide label */}
        <span className="text-xs text-[#aaa] tracking-widest uppercase font-sans">
          {slide.label}
        </span>

        {/* Dot navigation */}
        <div className="flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrent(i)}
              style={{ cursor: "pointer" }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                i === current
                  ? "w-4 bg-[#2f2e31]"
                  : "bg-[#d0d0d0] hover:bg-[#aaa]"
              }`}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-3">
          <NavButton direction="prev" disabled={isFirst} onClick={prev} />
          <NavButton direction="next" disabled={isLast} onClick={next} />
        </div>
      </div>
    </div>
  );
}

// ─── Nav button ────────────────────────────────────────────────────────────────

function NavButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ cursor: disabled ? "default" : "pointer" }}
      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-150 ${
        disabled
          ? "border-[#e8e8e8] text-[#ccc]"
          : "border-[#d0d0d0] text-[#4d4d4d] hover:border-[#2f2e31] hover:text-[#2f2e31]"
      }`}
    >
      {direction === "prev" ? (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

// ─── Slide renderer ────────────────────────────────────────────────────────────

function SlideRenderer({ slide }: { slide: (typeof SLIDES)[number] }) {
  switch (slide.type) {
    case "title":
      return <TitleSlide {...slide} />;
    case "about":
      return <AboutSlide {...slide} />;
    case "process":
      return <ProcessSlide {...slide} />;
    case "case-study":
      return <CaseStudySlide {...slide} />;
    case "impact":
      return <ImpactSlide {...slide} />;
    case "contact":
      return <ContactSlide {...slide} />;
  }
}

// ─── Slide layouts ─────────────────────────────────────────────────────────────

function TitleSlide({
  eyebrow,
  headline,
  sub,
  accent,
}: Extract<(typeof SLIDES)[number], { type: "title" }>) {
  return (
    <div className="max-w-3xl w-full">
      <span
        className="inline-block text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1 rounded-full border"
        style={{ color: accent, borderColor: accent + "33", background: accent + "0d" }}
      >
        {eyebrow}
      </span>
      <h1 className="text-[56px] leading-[1.1] font-bold text-[#2f2e31] mb-6 font-sans">
        {headline}
      </h1>
      <p className="text-xl text-[#757575] leading-relaxed whitespace-pre-line max-w-xl">
        {sub}
      </p>
    </div>
  );
}

function AboutSlide({
  headline,
  body,
  tags,
  accent,
}: Extract<(typeof SLIDES)[number], { type: "about" }>) {
  return (
    <div className="max-w-3xl w-full">
      <h2 className="text-[42px] font-bold text-[#2f2e31] mb-8 leading-tight">{headline}</h2>
      <p className="text-lg text-[#4d4d4d] leading-relaxed mb-10 max-w-2xl">{body}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-sm px-3 py-1.5 rounded-full border"
            style={{ color: accent, borderColor: accent + "44", background: accent + "0a" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProcessSlide({
  headline,
  steps,
  accent,
}: Extract<(typeof SLIDES)[number], { type: "process" }>) {
  return (
    <div className="max-w-4xl w-full">
      <h2 className="text-[42px] font-bold text-[#2f2e31] mb-12 leading-tight">{headline}</h2>
      <div className="grid grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col gap-3">
            <span className="text-2xl font-bold" style={{ color: accent }}>
              {step.number}
            </span>
            <div className="h-px w-full" style={{ background: accent + "33" }} />
            <h3 className="text-base font-semibold text-[#2f2e31]">{step.title}</h3>
            <p className="text-sm text-[#757575] leading-relaxed">{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseStudySlide({
  tag,
  headline,
  role,
  timeline,
  challenge,
  outcome,
  link,
  accent,
}: Extract<(typeof SLIDES)[number], { type: "case-study" }>) {
  return (
    <div className="max-w-3xl w-full">
      <span
        className="inline-block text-xs font-medium tracking-widest uppercase mb-5 px-3 py-1 rounded-full border"
        style={{ color: accent, borderColor: accent + "33", background: accent + "0d" }}
      >
        {tag}
      </span>
      <h2 className="text-[42px] font-bold text-[#2f2e31] mb-8 leading-tight">{headline}</h2>
      <div className="flex gap-8 mb-10">
        <div>
          <p className="text-xs text-[#aaa] uppercase tracking-wider mb-1">Role</p>
          <p className="text-sm text-[#4d4d4d] font-medium">{role}</p>
        </div>
        <div>
          <p className="text-xs text-[#aaa] uppercase tracking-wider mb-1">Timeline</p>
          <p className="text-sm text-[#4d4d4d] font-medium">{timeline}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mb-10">
        <div className="p-5 rounded-xl border border-[#f0f0f0] bg-white">
          <p className="text-xs text-[#aaa] uppercase tracking-wider mb-2">Challenge</p>
          <p className="text-sm text-[#4d4d4d] leading-relaxed">{challenge}</p>
        </div>
        <div
          className="p-5 rounded-xl border"
          style={{ borderColor: accent + "33", background: accent + "08" }}
        >
          <p className="text-xs uppercase tracking-wider mb-2" style={{ color: accent }}>
            Outcome
          </p>
          <p className="text-sm text-[#4d4d4d] leading-relaxed">{outcome}</p>
        </div>
      </div>
      <a
        href={link}
        className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
        style={{ color: accent, cursor: "pointer" }}
      >
        View full case study
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

function ImpactSlide({
  headline,
  stats,
  body,
  accent,
}: Extract<(typeof SLIDES)[number], { type: "impact" }>) {
  return (
    <div className="max-w-3xl w-full">
      <h2 className="text-[42px] font-bold text-[#2f2e31] mb-12 leading-tight">{headline}</h2>
      <div className="grid grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <span className="text-4xl font-bold" style={{ color: accent }}>
              {stat.value}
            </span>
            <span className="text-sm text-[#757575]">{stat.label}</span>
          </div>
        ))}
      </div>
      <p className="text-lg text-[#4d4d4d] leading-relaxed max-w-2xl border-l-2 pl-5" style={{ borderColor: accent }}>
        {body}
      </p>
    </div>
  );
}

function ContactSlide({
  headline,
  sub,
  email,
  site,
  accent,
}: Extract<(typeof SLIDES)[number], { type: "contact" }>) {
  return (
    <div className="max-w-3xl w-full">
      <h2 className="text-[56px] font-bold text-[#2f2e31] mb-4 leading-tight">{headline}</h2>
      <p className="text-xl text-[#757575] mb-12">{sub}</p>
      <div className="flex flex-col gap-4">
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-3 text-base font-medium transition-opacity hover:opacity-70"
          style={{ color: accent, cursor: "pointer" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M1 5.5L8 9.5L15 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {email}
        </a>
        <a
          href={`https://${site}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-base font-medium transition-opacity hover:opacity-70"
          style={{ color: accent, cursor: "pointer" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 1.5C8 1.5 5.5 5 5.5 8C5.5 11 8 14.5 8 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8 1.5C8 1.5 10.5 5 10.5 8C10.5 11 8 14.5 8 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M1.5 8H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {site}
        </a>
      </div>
    </div>
  );
}
