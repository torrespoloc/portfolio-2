"use client";

import { useState, useEffect, useCallback } from "react";

// ─── Slide data ────────────────────────────────────────────────────────────────

type BaseSlide = {
  id: string;
  label: string;
};

type TitleSlide = BaseSlide & {
  type: "title";
  headline: string;
  sub: string;
  subtitle: string;
};
type TextSlide = BaseSlide & {
  type: "text";
  headline: string;
  body: (string | { bold?: string; normal?: string })[];
  logos?: string[];
};
type CardsSlide = BaseSlide & {
  type: "cards";
  headline: string;
  sub: string;
  cards: { h: string; b: string }[];
  logos?: string[];
};
type TimelineSlide = BaseSlide & {
  type: "timeline";
  headline: string;
  sub: string;
  phases: { label: string; h: string; b: string }[];
};
type DirectionSlide = BaseSlide & {
  type: "directions";
  headline: string;
  dirs: { label: string; desc: string; tag: string; winner: boolean }[];
};
type GridSlide = BaseSlide & {
  type: "grid";
  headline: string;
  items: { n: string; h: string; b: string }[];
  img?: string;
  imgAlt?: string;
};
type QuoteSlide = BaseSlide & {
  type: "quote";
  quote: string;
  attr: string;
  bullets: string[];
};
type ImageSlide = BaseSlide & {
  type: "image-text";
  headline: string;
  body: (string | { bold?: string; normal?: string })[];
  img: string;
  imgAlt: string;
};
type TableSlide = BaseSlide & {
  type: "table";
  headline: string;
  header: string[];
  rows: string[][];
};
type ContactSlide = BaseSlide & {
  type: "contact";
  headline: string;
  sub: string;
  name: string;
  email: string;
  site: string;
};
type TransitionSlide = BaseSlide & {
  type: "transition";
  line: string;
};

type Slide = TitleSlide | TextSlide | CardsSlide | TimelineSlide | DirectionSlide | GridSlide | QuoteSlide | ImageSlide | TableSlide | ContactSlide | TransitionSlide;

const LOGO_EXT: Record<string, string> = {
  figma: "png",
  cursor: "png",
  "claude-code": "png",
  storybook: "svg",
  linear: "svg",
  "vercel-v0": "avif",
  chatgpt: "svg",
  perplexity: "svg",
  maze: "svg",
  notion: "svg",
  loom: "svg",
  github: "png",
};

function ToolIcons({ logos }: { logos: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {logos.map((name) => {
        const ext = LOGO_EXT[name] || "svg";
        return (
          <img
            key={name}
            src={`/logos/${name}.${ext}`}
            alt={name}
            className="h-5 w-auto opacity-60"
            title={name}
          />
        );
      })}
    </div>
  );
}

const SLIDES: Slide[] = [
  // 01
  { id: "cover", type: "title", label: "01 / Cover", headline: "Jacki Torres", sub: "Senior Product Designer  |  Healthtech + AI", subtitle: "Portfolio Deep Dive — Jiro Health" },

  // 02
  { id: "oneline", type: "text", label: "02 / About", headline: "The one-line version of me", body: [
    "Architecture taught me systems. Product design taught me how to ship.\n",
    { bold: "Healthtech and AI taught me what's actually at stake.\n\n" },
    "Sole designer twice. Building from zero. Working directly with CPOs and CEOs. Shipping before the foundation was ready — then building the foundation anyway.",
  ] },

  // 03
  { id: "whycare", type: "text", label: "03 / Why", headline: "Why I care about healthtech", body: [
    "My grandmother and mother don't speak English. I've been their healthcare translator for as long as I can remember — appointments, discharge instructions, prescriptions.\n\n",
    "That's not a niche problem. It's a systemic one. It's why I'm in this space.\n\n",
    "I'm currently building a live voice translation app for non-English speakers in clinical settings. Not a side project — a design conviction.\n\n",
    { bold: "Healthcare software has a trust problem, a complexity problem, and a communication problem. That's exactly where I want to work." },
  ] },

  // 04
  { id: "howiwork", type: "cards", label: "04 / Process", headline: "How I work", sub: "Four things that don't change regardless of the project", cards: [
    { h: "Foundation before velocity", b: "Design system, component library, handoff process. If those aren't solid, every sprint pays for it." },
    { h: "Design + code in lockstep", b: "Same tools as engineers. Same language. No wall between design and dev." },
    { h: "Problems before solutions", b: "Jumping to solutions is the fastest way to build the wrong thing. I push back." },
    { h: "Feedback as infrastructure", b: "User research as a habit, not a project. Fast, lightweight, tied to what ships next." },
  ], logos: ["figma", "cursor", "claude-code", "storybook", "linear", "vercel-v0"] },

  // 05 — NEW: AI process slide
  { id: "aiprocess", type: "cards", label: "05 / Evolution", headline: "How AI changed my process", sub: "The tools changed. The craft didn't.", cards: [
    { h: "Before: Linear by default", b: "Figma → handoff → wait. Research took days. Prototyping was a separate phase. Feedback loops were batch, not continuous." },
    { h: "Shift: AI enters the workflow", b: "ChatGPT for research synthesis. V0 for rapid prototyping. Claude Code for design-in-code exploration. The wall between thinking and making started dissolving." },
    { h: "Now: AI-native pipeline", b: "Figma → Cursor → Claude Code → Storybook in a continuous loop. Research, prototype, code, review in hours instead of weeks." },
    { h: "Result: Higher quality, faster", b: "More time on the problem, less time on production. AI handles the plumbing; I focus on the system, the interaction, and the user." },
  ], logos: ["figma", "cursor", "claude-code", "storybook", "chatgpt", "perplexity", "vercel-v0"] },

  // 06
  { id: "whyjiro", type: "text", label: "06 / Why Jiro", headline: "Why Jiro, why now", body: [
    "Jiro gives independent clinicians practice intelligence that's usually locked inside larger health systems. That's an equity problem dressed as a data problem.\n\n",
    "When I talked to Chris, I recognized the situation: a team shipping real product, moving fast, but stretched too thin to build the foundation underneath.\n\n",
    { bold: "I've been there twice. Pre-scale, post-MVP is exactly where getting the foundation right determines your next two years." },
  ] },

  // 07
  { id: "first90", type: "timeline", label: "07 / Plan", headline: "First 90 days", sub: "How I'd approach it", phases: [
    { label: "Days 1–30", h: "Audit and align", b: "Map every component in Figma against code. Document gaps. Ship one quick win." },
    { label: "Days 31–60", h: "Install the feedback loop", b: "Lightweight post-MVP testing with clinicians. A research habit, not a program." },
    { label: "Days 61–90", h: "Fix upstream", b: "Problem definition before anyone opens a tool. Ideation-to-code workflow so nothing is throwaway." },
  ] },

  // Transition
  { id: "trans1", type: "transition", label: "—", line: "Let me show you how I work." },

  // 09
  { id: "xycontext", type: "image-text", label: "09 / XY", headline: "XY Corp: Context & Problem", body: [
    "AI agents handle verification, scheduling, and claims for healthcare operations teams.\n\n",
    "The agents worked. The setup didn't — configuring them required a sales call.\n\n",
    { bold: "My job: make AI orchestration something healthcare teams could set up themselves. Four months, sole designer." },
  ], img: "/xy/user-types.png", imgAlt: "User persona matrix" },

  // 10
  { id: "xyrole", type: "text", label: "10 / XY", headline: "XY Corp: My Role", body: [
    { bold: "Sole product designer," },
    " reporting to CPO and CEO. Team of four engineers.\n\n",
    "I owned the full surface: AI agent orchestration UI, component library, design system, and design-to-engineering pipeline.\n\n",
    "None of it existed. I built the foundation and the workflow together.",
  ], logos: ["figma", "cursor", "github", "linear", "claude-code"] },

  // 11
  { id: "xyfound", type: "image-text", label: "11 / XY", headline: "XY Corp: What I found", body: [
    "The underlying system was powerful. The surface was the bottleneck.\n\n",
    "Three blockers:\n",
    "1. Every agent config required a human facilitator\n",
    "2. The UI was built for engineers, not healthcare teams\n",
    "3. Orchestrating multiple agents meant a sales call",
  ], img: "/xy/xy-platform.png", imgAlt: "XY platform UI" },

  // 12
  { id: "xydecision", type: "text", label: "12 / XY", headline: "The reframe that changed everything", body: [
    "Initial brief: improve the configuration UI.\n\n",
    { bold: "Real problem: " },
    "healthcare teams don't think in configurations. They think in tasks.\n\n",
    "So instead of better forms, I proposed a conversational layer. Users describe what they need. The system routes to the right agent.\n\n",
    { bold: "Chat instead of forms — that decision became the core of the entire product." },
  ] },

  // 13
  { id: "xyprocess", type: "directions", label: "13 / XY", headline: "Process & Exploration", dirs: [
    { label: "Forms-first", desc: "Clean up existing configuration UI. Lower risk — but users still need to understand the agent model.", tag: "Lower risk", winner: false },
    { label: "Wizard / guided", desc: "Step-by-step onboarding. Better than forms but requires decisions users lack context for.", tag: "Middle ground", winner: false },
    { label: "Chat-first", desc: "Users describe intent in natural language. System interprets and routes. The only pattern matching how healthcare teams communicate.", tag: "The winner", winner: true },
  ] },

  // 14
  { id: "xybuilt", type: "grid", label: "14 / XY", headline: "What I built", items: [
    { n: "01", h: "AI agent orchestration via chat", b: "Three agents, one conversation. Users describe needs, system routes, actions confirmed — no config required." },
    { n: "02", h: "60+ production-ready components", b: "Agent cards, workflow indicators, extraction previews for fullscreen, sidebar, and embedded contexts." },
    { n: "03", h: "First design system", b: "8px grid, semantic tokens, typography, spacing, motion docs. Engineers pulled directly from Storybook." },
    { n: "04", h: "AI-native pipeline", b: "Figma → Figma Make → GitHub → Engineering. Prototype to production in hours." },
  ], img: "/xy/storybook.png", imgAlt: "Component library in Storybook" },

  // 15
  { id: "xyimpact", type: "quote", label: "15 / XY", headline: "", quote: "Your design instinct is really strong, and that's hard to teach. The visual design combined with the UX — you did some really good work here.", attr: "Scott Cressman, CPO at XY", bullets: [
    "Self-serve AI orchestration became a core sales asset — the CEO pitched it directly to enterprise customers.",
    "Components were production-wired to Temporal for live agent orchestration, not prototypes.",
    "Users: \"This makes perfect sense. Complex flows made chat-friendly.\"",
  ] },

  // 16
  { id: "xyreflect", type: "text", label: "16 / XY", headline: "What I'd do differently", body: [
    "I built fast and I built real — but I was heads down with the CPO and didn't have enough visibility into what engineering was building in parallel.\n\n",
    "Components were created for demos I never saw. The design system and codebase drifted faster than I could close the gap.\n\n",
    { bold: "If I did it again: " },
    "A weekly 15-minute design-engineering sync, starting day one.\n\n",
    { bold: "That's exactly what I'd bring to Jiro." },
  ] },

  // Transition
  { id: "trans2", type: "transition", label: "—", line: "A few other things I've built." },

  // 18
  { id: "waldo", type: "image-text", label: "18 / Waldo", headline: "Waldo Health — Zero-to-one patient app", body: [
    "Eye care company (acquired by Specsavers) selling prescription contacts DTC.\n\n",
    "Sole designer on the patient app. Doctor portal on one side, patient app on the other — a dual ecosystem.\n\n",
    "Owned 100% from zero: research, IA, flows, high-fidelity UI, handoff.\n\n",
    { bold: "Delivered 1 month early on a $5 V0 credits budget." },
  ], img: "/waldo/journey-map-preview.png", imgAlt: "Patient journey map" },

  // 19
  { id: "otherwork", type: "text", label: "19 / More", headline: "More from the portfolio", body: [
    { bold: "7dish " },
    "— Meal planning app. End-to-end product design from research through UI. 3 core flows redesigned, A/B tested.\n\n",
    { bold: "SideNook " },
    "— macOS terminal emulator. Sole designer + SwiftUI developer. Shipped April 2026.\n\n",
    { bold: "Fundr " },
    "— SaaS paywall redesign. 20% increase in upgrade rates, ~50% fewer sales calls.\n\n",
    { bold: "The UX Chats " },
    "— Design community I founded. 180+ members.",
  ] },

  // 20
  { id: "bring", type: "table", label: "20 / Fit", headline: "Here's how I plug in", header: ["Chris's need", "What I bring"], rows: [
    ["Design system + code out of sync", "Built XY's first design system and 60+ component library from zero. Mapped to engineering output."],
    ["No time to build foundation", "I've been the sole designer twice. Build the foundation while still shipping."],
    ["Research function missing", "I install lightweight feedback loops — fast, repeatable, tied to decisions."],
    ["Process is hodgepodge", "Structure upstream without bureaucracy. Problem definition is non-negotiable."],
    ["PMs jumping to Lovable", "I reframe the brief, pressure-test the problem, align before anyone opens a tool."],
    ["Prototypes disconnected from code", "AI-native pipeline: Figma → Figma Make → GitHub → Engineering. Hours, not weeks."],
    ["Volume of execution", "This isn't a consulting engagement. I'm here to ship."],
    ["Scaling without slowing down", "Small team, fast pace, high quality bar — my default."],
  ] },

  // 21
  { id: "close", type: "contact", label: "21 / Contact", headline: "I came ready to get into the weeds.", sub: "", name: "Jacki Torres", email: "hello@jackelinetorres.co", site: "jackelinetorres.co" },
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function PresentationPage() {
  const [current, setCurrent] = useState(0);
  const [showDownload, setShowDownload] = useState(false);
  const slide = SLIDES[current];
  const isFirst = current === 0;
  const isLast = current === SLIDES.length - 1;

  // Keyboard nav
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); if (current < SLIDES.length - 1) setCurrent((c) => c + 1); }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); if (current > 0) setCurrent((c) => c - 1); }
    if (e.key === "Escape") setShowDownload(false);
  }, [current]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // Touch/mobile
  const touchStart = useCallback((e: React.TouchEvent) => {
    const x = e.touches[0].clientX;
    const handler = (ev: TouchEvent) => {
      const dx = ev.changedTouches[0].clientX - x;
      if (Math.abs(dx) > 60) {
        dx < 0 ? !isLast && setCurrent((c) => c + 1) : !isFirst && setCurrent((c) => c - 1);
      }
      window.removeEventListener("touchend", handler);
    };
    window.addEventListener("touchend", handler, { once: true });
  }, [isFirst, isLast]);

  if (slide.type === "transition") {
    return (
      <div className="relative w-screen h-screen overflow-hidden bg-[#1A1A2E] flex items-center justify-center select-none" onTouchStart={touchStart}>
        <p className="text-white text-3xl md:text-4xl font-bold italic font-serif max-w-2xl text-center px-8 leading-relaxed">
          {slide.line}
        </p>
        {/* bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 py-5">
          <span className="text-xs text-white/30 tracking-widest uppercase">{slide.label}</span>
          <div className="flex items-center gap-3">
            <NavButton direction="prev" disabled={isFirst} onClick={() => setCurrent((c) => c - 1)} light />
            <span className="text-xs text-white/30 tabular-nums">{current + 1} / {SLIDES.length}</span>
            <NavButton direction="next" disabled={isLast} onClick={() => setCurrent((c) => c + 1)} light />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-[#fafafa] font-sans select-none"
      onTouchStart={touchStart}
      tabIndex={0}
    >
      {/* Mobile download bar */}
      <div className="md:hidden absolute top-0 left-0 right-0 z-20 flex justify-end p-3">
        <a
          href="/jiro-health-presentation.pptx"
          download
          className="text-xs px-3 py-1.5 rounded-full bg-[#2f2e31] text-white"
        >
          Download .pptx
        </a>
      </div>

      {/* Slide area */}
      <div className="w-full h-full flex items-center justify-center px-6 md:px-16">
        <SlideRenderer slide={slide} current={current} total={SLIDES.length} />
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 py-5 border-t border-[#f0f0f0] bg-[#fafafa]">
        <div className="flex items-center gap-4">
          <span className="text-xs text-[#aaa] tracking-widest uppercase">{slide.label}</span>
          <button
            onClick={() => setShowDownload(!showDownload)}
            className="text-xs text-[#aaa] hover:text-[#2f2e31] transition-colors underline underline-offset-2"
          >
            Download .pptx
          </button>
        </div>

        {showDownload && (
          <div className="absolute bottom-16 left-6 bg-white border border-[#e8e8e8] rounded-xl shadow-lg p-4 z-30">
            <p className="text-sm font-medium text-[#2f2e31] mb-2">Download full deck</p>
            <a
              href="/jiro-health-presentation.pptx"
              download
              className="inline-flex items-center gap-2 text-sm text-[#485bfc] hover:opacity-70 transition-opacity"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.5V10M3.5 6.5L7 10L10.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 10V12.5H13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              jiro-health-presentation.pptx
            </a>
            <button onClick={() => setShowDownload(false)} className="block mt-2 text-xs text-[#aaa] hover:text-[#2f2e31]">Close</button>
          </div>
        )}

        <div className="flex items-center gap-3">
          <span className="text-xs text-[#aaa] tabular-nums hidden md:inline">{current + 1} / {SLIDES.length}</span>
          <NavButton direction="prev" disabled={isFirst} onClick={() => setCurrent((c) => c - 1)} />
          <NavButton direction="next" disabled={isLast} onClick={() => setCurrent((c) => c + 1)} />
        </div>
      </div>
    </div>
  );
}

// ─── Nav button ────────────────────────────────────────────────────────────────

function NavButton({ direction, disabled, onClick, light }: { direction: "prev" | "next"; disabled: boolean; onClick: () => void; light?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-150 ${
        disabled
          ? light ? "border-white/10 text-white/20" : "border-[#e8e8e8] text-[#ccc]"
          : light ? "border-white/30 text-white/60 hover:border-white/60 hover:text-white" : "border-[#d0d0d0] text-[#4d4d4d] hover:border-[#2f2e31] hover:text-[#2f2e31]"
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

function SlideRenderer({ slide, current, total }: { slide: Slide; current: number; total: number }) {
  switch (slide.type) {
    case "title": return <TitleSlide {...slide} />;
    case "text": return <TextSlide {...slide} />;
    case "cards": return <CardsSlide {...slide} />;
    case "timeline": return <TimelineSlide {...slide} />;
    case "directions": return <DirectionSlide {...slide} />;
    case "grid": return <GridSlide {...slide} />;
    case "quote": return <QuoteSlide {...slide} />;
    case "image-text": return <ImageTextSlide {...slide} current={current} total={total} />;
    case "table": return <TableSlide {...slide} />;
    case "contact": return <ContactSlide {...slide} />;
    default: return null;
  }
}

// ─── Slide layouts ─────────────────────────────────────────────────────────────

function TitleSlide({ headline, sub, subtitle }: TitleSlide) {
  return (
    <div className="max-w-3xl w-full animate-fade-in">
      <h1 className="text-[44px] md:text-[56px] leading-[1.1] font-bold text-[#2f2e31] mb-4">{headline}</h1>
      <p className="text-lg md:text-xl text-[#4d4d4d] mb-2">{sub}</p>
      <p className="text-sm text-[#888]">{subtitle}</p>
    </div>
  );
}

function TextSlide({ headline, body, logos }: TextSlide) {
  return (
    <div className="max-w-3xl w-full animate-fade-in">
      <h2 className="text-[32px] md:text-[42px] font-bold text-[#2f2e31] mb-8 leading-tight">{headline}</h2>
      <div className="space-y-1">
        {body.map((part, i) => {
          if (typeof part === "string") {
            return <p key={i} className="text-base md:text-lg text-[#4d4d4d] leading-relaxed whitespace-pre-line">{part}</p>;
          }
          return <p key={i} className="text-base md:text-lg leading-relaxed whitespace-pre-line"><span className="font-semibold text-[#3B3066]">{part.bold}</span>{part.normal}</p>;
        })}
      </div>
      {logos && <ToolIcons logos={logos} />}
    </div>
  );
}

function CardsSlide({ headline, sub, cards, logos }: CardsSlide) {
  return (
    <div className="max-w-4xl w-full animate-fade-in">
      <h2 className="text-[32px] md:text-[42px] font-bold text-[#2f2e31] mb-2 leading-tight">{headline}</h2>
      <p className="text-sm text-[#888] mb-6">{sub}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((c, i) => (
          <div key={i} className="p-5 rounded-xl bg-[#F5F4F0]">
            <h3 className="text-sm font-bold text-[#3B3066] mb-2">{c.h}</h3>
            <p className="text-sm text-[#4d4d4d] leading-relaxed">{c.b}</p>
          </div>
        ))}
      </div>
      {logos && <ToolIcons logos={logos} />}
    </div>
  );
}

function TimelineSlide({ headline, sub, phases }: TimelineSlide) {
  return (
    <div className="max-w-4xl w-full animate-fade-in">
      <h2 className="text-[32px] md:text-[42px] font-bold text-[#2f2e31] mb-2 leading-tight">{headline}</h2>
      <p className="text-sm text-[#888] mb-8">{sub}</p>
      <div className="flex flex-col gap-4">
        {phases.map((p, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-1 shrink-0 rounded-full bg-[#3B3066]" />
            <div className="flex-1 p-4 rounded-xl bg-[#F5F4F0]">
              <span className="text-xs font-bold text-[#3B3066]">{p.label}</span>
              <h3 className="text-base font-bold text-[#2f2e31] mt-1">{p.h}</h3>
              <p className="text-sm text-[#4d4d4d] mt-1 leading-relaxed">{p.b}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DirectionSlide({ headline, dirs }: DirectionSlide) {
  return (
    <div className="max-w-5xl w-full animate-fade-in">
      <h2 className="text-[32px] md:text-[42px] font-bold text-[#2f2e31] mb-8 leading-tight">{headline}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dirs.map((d, i) => (
          <div key={i} className={`p-5 rounded-xl ${d.winner ? "bg-[#3B3066] text-white" : "bg-[#F5F4F0]"}`}>
            <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-3 ${d.winner ? "bg-white text-[#3B3066]" : "bg-[#3B3066] text-white"}`}>{d.tag}</span>
            <h3 className={`text-lg font-bold mb-2 ${d.winner ? "text-white" : "text-[#2f2e31]"}`}>{d.label}</h3>
            <p className={`text-sm leading-relaxed ${d.winner ? "text-white/80" : "text-[#4d4d4d]"}`}>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GridSlide({ headline, items, img, imgAlt }: GridSlide) {
  return (
    <div className="max-w-5xl w-full animate-fade-in">
      <h2 className="text-[32px] md:text-[42px] font-bold text-[#2f2e31] mb-6 leading-tight">{headline}</h2>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {items.map((item, i) => (
            <div key={i} className="p-5 rounded-xl bg-[#F5F4F0]">
              <span className="text-xs font-bold text-[#3B3066]">{item.n}</span>
              <h3 className="text-sm font-bold text-[#2f2e31] mt-1">{item.h}</h3>
              <p className="text-xs text-[#4d4d4d] mt-1 leading-relaxed">{item.b}</p>
            </div>
          ))}
        </div>
        {img && (
          <div className="w-full md:w-[200px] shrink-0">
            <img src={img} alt={imgAlt || ""} className="w-full rounded-xl border border-[#f0f0f0]" />
          </div>
        )}
      </div>
    </div>
  );
}

function QuoteSlide({ quote, attr, bullets }: QuoteSlide) {
  return (
    <div className="max-w-3xl w-full animate-fade-in">
      <div className="p-6 md:p-8 rounded-xl bg-[#3B3066] mb-8">
        <p className="text-lg md:text-xl font-serif font-bold italic text-white leading-relaxed">&ldquo;{quote}&rdquo;</p>
        <p className="text-sm text-white/60 mt-3 text-right">&mdash; {attr}</p>
      </div>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm md:text-base text-[#4d4d4d] leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[#3B3066]">{b}</li>
        ))}
      </ul>
    </div>
  );
}

function ImageTextSlide({ headline, body, img, imgAlt }: ImageSlide & { current: number; total: number }) {
  return (
    <div className="w-full max-w-6xl animate-fade-in flex flex-col md:flex-row gap-6 md:gap-10 items-start">
      <div className="flex-1">
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#2f2e31] mb-6 leading-tight">{headline}</h2>
        <div className="space-y-1">
          {body.map((part, i) => {
            if (typeof part === "string") {
              return <p key={i} className="text-sm md:text-base text-[#4d4d4d] leading-relaxed whitespace-pre-line">{part}</p>;
            }
            return <p key={i} className="text-sm md:text-base leading-relaxed whitespace-pre-line"><span className="font-semibold text-[#3B3066]">{part.bold}</span>{part.normal}</p>;
          })}
        </div>
      </div>
      <div className="w-full md:w-[280px] shrink-0">
        <img src={img} alt={imgAlt} className="w-full rounded-xl border border-[#f0f0f0]" />
      </div>
    </div>
  );
}

function TableSlide({ headline, header, rows }: TableSlide) {
  return (
    <div className="max-w-5xl w-full animate-fade-in">
      <h2 className="text-[28px] md:text-[36px] font-bold text-[#2f2e31] mb-6 leading-tight">{headline}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-[#3B3066]">
              {header.map((h, i) => (
                <th key={i} className="text-white font-bold px-3 py-2.5 text-xs uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-[#F5F4F0]" : "bg-white"}>
                <td className="px-3 py-2 text-[#3B3066] font-semibold text-xs align-top">{row[0]}</td>
                <td className="px-3 py-2 text-[#4d4d4d] text-xs leading-relaxed">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ContactSlide({ headline, sub, name, email, site }: ContactSlide) {
  return (
    <div className="max-w-3xl w-full animate-fade-in text-center">
      {name !== headline && <h2 className="text-[32px] md:text-[42px] font-bold text-[#2f2e31] mb-4 leading-tight">{headline}</h2>}
      {sub && <p className="text-base md:text-lg text-[#757575] mb-8">{sub}</p>}
      <div className="flex flex-col items-center gap-3">
        <a href={`mailto:${email}`} className="text-base md:text-lg text-[#3B3066] font-medium hover:opacity-70 transition-opacity">{email}</a>
        <a href={`https://${site}`} target="_blank" rel="noreferrer" className="text-base md:text-lg text-[#3B3066] font-medium hover:opacity-70 transition-opacity">{site}</a>
        <div className="mt-6">
          <a
            href="/jiro-health-presentation.pptx"
            download
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-[#2f2e31] text-white hover:opacity-90 transition-opacity"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1.5V10M3.5 6.5L7 10L10.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 10V12.5H13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download full deck (.pptx)
          </a>
        </div>
      </div>
    </div>
  );
}
