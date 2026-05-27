"use client";

import { useState, useEffect, useCallback } from "react";
import { VideoCarousel } from "@/components/home/VideoCarousel";

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
  // Cover-specific layout
  topBarLeft?: string;
  topBarRight?: string;
  taglineLead?: string;
  taglineParts?: { text: string; bold?: boolean; italic?: boolean }[];
  bottomBarLeft?: string;
  bottomBarRight?: string;
};
type BodyItem = string | { bold?: string; normal?: string };

type TextSlide = BaseSlide & {
  type: "text";
  headline: string;
  body: BodyItem[];
  logos?: string[];
  img?: string;
  imgLayout?: "sidebar" | "bottom";
  bottomCallout?: string;
  cta?: { label: string; url: string };
  columns?: { label: string; body: BodyItem[] }[];
};
type CardsSlide = BaseSlide & {
  type: "cards";
  headline: string;
  sub: string;
  cards: { h: string; b: string }[];
  logos?: string[];
  numbered?: boolean;
  aiLabel?: string;
  aiToolsLogos?: string[];
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
  imgLayout?: "centered";
};
type TableSlide = BaseSlide & {
  type: "table";
  headline: string;
  header: string[];
  rows: string[][];
};
type InsightSlide = BaseSlide & {
  type: "insight";
  quote: string;
  sub?: string;
};

type ContactSlide = BaseSlide & {
  type: "contact";
  headline: string;
  sub: string;
  name: string;
  email: string;
  site: string;
};
type FlowSlide = BaseSlide & {
  type: "flow";
  headline: string;
  challenge: string;
  integrations: string[];
  patterns: { label: string; desc: string }[];
  outcome: string;
};
type BuiltSlide = BaseSlide & {
  type: "built";
  headline: string;
  items: { n: string; h: string; b: string }[];
  img: string;
  imgAlt: string;
};
type ImageOnlySlide = BaseSlide & {
  type: "image-only";
  src: string;
  alt?: string;
};
type StorySlide = BaseSlide & {
  type: "story";
  headline: string;
  steps: { icon: "family" | "build" | "mission"; h: string; b: (string | { bold?: string; normal?: string })[] }[];
};
type TransitionSlide = BaseSlide & {
  type: "transition";
  line: string;
};
type HeroSlide = BaseSlide & {
  type: "hero";
  tag: string;
  project: string;
  headline: string;
  description: string;
  tags: string[];
  year: string;
  metric1Label: string;
  metric1Value: string;
  metric2Label: string;
  metric2Value: string;
  mediaSrc: string;
  mediaSrcs?: string[];
  builtForLogo?: string;
  accent: string;
};
type VideoSlide = BaseSlide & {
  type: "video";
  headline: string;
  body: string;
  src: string;
};
type JiroSlide = BaseSlide & {
  type: "jiro";
  headline: string;
  lead: string;
  bullets: { prefix: string; word: string }[];
};
type EmbedSlide = BaseSlide & {
  type: "embed";
  headline: string;
  src: string;
  videoSrc?: string;
};

type ProjectEntry = {
  name: string;
  description: string;
  mediaSrc?: string;
  mediaType?: "video" | "image";
};

type ProjectsSlide = BaseSlide & {
  type: "projects";
  headline: string;
  projects: ProjectEntry[];
};

type Slide = TitleSlide | TextSlide | CardsSlide | TimelineSlide | DirectionSlide | GridSlide | QuoteSlide | ImageSlide | TableSlide | ContactSlide | InsightSlide | TransitionSlide | VideoSlide | EmbedSlide | HeroSlide | FlowSlide | BuiltSlide | ImageOnlySlide | StorySlide | JiroSlide | ProjectsSlide;

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
  scribe: "png",
  zapier: "png",
};

function ToolIcons({ logos, centered, large }: { logos: string[]; centered?: boolean; large?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-6 ${centered ? "justify-center" : "mt-5"}`}>
      {logos.map((name) => {
        const ext = LOGO_EXT[name] || "svg";
        return (
          <img
            key={name}
            src={`/logos/${name}.${ext}`}
            alt={name}
            className={`object-contain ${large ? "h-[140px] w-[140px]" : "h-11 w-11"}`}
            title={name}
          />
        );
      })}
    </div>
  );
}

const SLIDES: Slide[] = [
  // 01
  { id: "cover", type: "title", label: "01 / Cover", headline: "Jacki", sub: "Torres.", subtitle: "Product Designer",
    topBarLeft: "Jacki Torres · Product Designer",
    topBarRight: "Portfolio / 2026",
    taglineLead: "I design apps & systems that make users say:",
    taglineParts: [
      { text: "“Omg! This product ", bold: true },
      { text: "works", italic: true },
      { text: ".”", bold: true },
    ],
    bottomBarLeft: "San Francisco · Remote",
    bottomBarRight: "Selected work, 2021–26 →",
  },

  // 02
  { id: "about-diagram", type: "image-only", label: "02 / About Diagram", src: "/about-me-diagram.png" },

  // 03
  { id: "oneline", type: "text", label: "03 / About", headline: "The one-line version of me", body: [
    "Architecture taught me systems.\n",
    { bold: "Product design taught me how to ship.\n" },
    "Healthtech and AI taught me what's actually at stake.\n\n",
    "Sole designer twice. Building from zero. Working directly with CPOs and CEOs. Shipping before the foundation was ready — then building the foundation anyway.",
  ], img: "/about-jacki-headshot.png" },

  // 03
  { id: "whycare", type: "story", label: "04 / Why", headline: "Why I care about healthtech", steps: [
    { icon: "family", h: "Personal", b: [
      "My grandmother and mother don't speak English. ",
      { bold: "I've been their healthcare translator" },
      " for as long as I can remember.",
    ]},
    { icon: "build", h: "Building now", b: [
      "Building a live voice translation app for clinical settings. ",
      { bold: "Not a side project — a design conviction." },
    ]},
    { icon: "mission", h: "The mission", b: [
      "Healthcare has a trust, complexity, and communication problem. ",
      { bold: "That's where I want to work." },
    ]},
  ] },

  // 04
  { id: "howiwork", type: "cards", label: "05 / Process", headline: "How I work", sub: "", cards: [
    { h: "Understand what's at hand", b: "" },
    { h: "Find UX gaps", b: "" },
    { h: "Execute", b: "" },
  ], numbered: true, aiLabel: "How AI enhanced my process", aiToolsLogos: ["figma", "cursor", "claude-code", "storybook", "chatgpt", "perplexity", "vercel-v0"] },

  // 05
  { id: "whyjiro", type: "jiro", label: "06 / Why Jiro", headline: "Why Jiro, why now", lead: "Jiro gives independent clinicians practice intelligence that's usually locked inside larger health systems. That's an equity problem dressed as a data problem.", bullets: [
    { prefix: "0 to 1", word: "creation" },
    { prefix: "Startup", word: "mission" },
    { prefix: "AI", word: "workflows" },
  ] },

  // 07
  { id: "first90", type: "timeline", label: "07 / Plan", headline: "First 90 days", sub: "How I'd approach it", phases: [
    { label: "Days 1–30", h: "Audit and understand", b: "Deep-dive into Jiro, its infrastructure, design files, and foundational code. Map gaps and surface priorities." },
    { label: "Days 31–60", h: "Install the feedback loop", b: "Lightweight post-MVP testing with clinicians. A research habit, not a program." },
    { label: "Days 61–90", h: "Fix upstream", b: "Problem definition before anyone opens a tool. Ideation-to-code workflow so nothing is throwaway." },
  ] },

  // Transition
  { id: "trans1", type: "transition", label: "—", line: "Let me show you how I work." },

  // XY Hero
  { id: "xyhero", type: "hero", label: "09 / XY", tag: "HEALTHTECH · AI WORKFLOWS", project: "XY Corp", headline: "Making healthcare AI orchestration self-serve", description: "Conversational onboarding replaced hour-long demos with 3-step wizards. Built component factory to ship production-ready flows.", tags: ["healthtech", "SaaS"], year: "2025–2026", metric1Label: "Clicks to value", metric1Value: "3 steps", metric2Label: "Setup Reduction", metric2Value: "Hour to minutes", mediaSrc: "/case-studies/xy-hero.mp4", mediaSrcs: ["/xy/IntegrationsHub.mp4", "/xy/BrowserAgent.mp4", "/xy/DataExtraction.mp4", "/xy/KnowledgeBase.mp4", "/xy/TeamProductivity.mp4"], builtForLogo: "/logos/XY.svg", accent: "#3B3066" },

  // 10
  { id: "xyrole", type: "text", label: "10 / XY", headline: "Who is XY?", body: [
    { bold: "AI orchestration " },
    "for healthcare — agents handle verification, scheduling, and claims for large provider networks.",
  ], img: "/xy/website.png", imgLayout: "bottom" },

  // 11
  { id: "xyfound", type: "image-text", label: "11 / XY", headline: "Who are XY's users?", body: [
    "Healthcare operations teams of all technical levels — from clinical coordinators to IT specialists.\n\n",
    { bold: "Four user types:" },
    "",
    "",
    "",
  ], img: "/xy/user-types.png", imgAlt: "User persona matrix", imgLayout: "centered" },

  // 12 — Discovery & Research
  { id: "xydiscovery", type: "text", label: "12 / XY", headline: "Discovery & Research", body: [
    "I started by talking to healthcare operations teams. Three patterns surfaced in every conversation:\n\n",
    { bold: "1. ", normal: "Teams couldn't describe their agent setup — it was abstract until they saw it" },
    { bold: "2. ", normal: "Every team had different workflows but the same bottleneck: configuration was a blocker" },
    { bold: "3. ", normal: "'I'd need a demo' came up in every single conversation" },
  ], logos: ["sully", "scribe", "zapier"] },

  // 13
  { id: "xycontext", type: "text", label: "13 / XY", headline: "Context & Problem", body: [
    "AI agents handle verification, scheduling, and claims for healthcare operations teams.\n\n",
    "The agents worked. The setup didn't — configuring them required a sales call.\n\n",
    { bold: "My job: make AI orchestration something healthcare teams could set up themselves. Four months, sole designer." },
  ], bottomCallout: "NO SELF-SERVE!?" },

  { id: "xyinsight", type: "insight", label: "13b / XY", quote: "The problem wasn't UI quality. It was asking users to configure something they'd never encountered." },

  // 15
  { id: "xyprocess", type: "directions", label: "14 / XY", headline: "Process & Exploration", dirs: [
    { label: "Forms-first", desc: "Clean up existing configuration UI. Lower risk — but users still need to understand the agent model.", tag: "Lower risk", winner: false },
    { label: "Wizard / guided", desc: "Step-by-step onboarding. Better than forms but requires decisions users lack context for.", tag: "Middle ground", winner: false },
    { label: "Chat-first", desc: "Users describe intent in natural language. System interprets and routes. The only pattern matching how healthcare teams communicate.", tag: "The winner", winner: true },
  ] },

  // 13
  { id: "xydecision", type: "text", label: "15 / XY", headline: "The reframe that changed everything", body: [
    "Initial brief: improve the configuration UI.\n\n",
    { bold: "Real problem: " },
    "Healthcare teams don't think in configurations. They think in tasks.\n\n",
    "So instead of better forms, I proposed a conversational layer. Users describe what they need. The system routes to the right agent.\n\n",
    { bold: "Chat instead of forms — that decision became the core of the entire product." },
  ], img: "/xy/reframe-diagram.svg", imgLayout: "bottom" },

  // 15 — NEW: Testing & Results
  { id: "xytest", type: "text", label: "16 / XY", headline: "Testing & Results", body: [
    "Before committing to chat-first, I validated the direction with real users:\n",
    { bold: "▸ ", normal: "Healthcare ops team interviews to test the mental model" },
    { bold: "▸ ", normal: "CPO-led walkthroughs with two enterprise prospects" },
    { bold: "▸ ", normal: "Internal dogfooding with engineering and sales" },
  ], columns: [
    { label: "What I Learned", body: [
      "▸ Users who saw the chat interface ",
      { bold: "immediately understood the agent model", normal: " — something the forms-based approach couldn't achieve in a single session." },
    ]},
    { label: "Impact", body: [
      "▸ The CEO began pitching the self-serve AI orchestration experience ",
      { bold: "directly to enterprise customers.", normal: "" },
    ]},
  ], cta: { label: "Explore the full design file", url: "https://www.figma.com/make/Ac81vE5pZnbQrcOMbXpIdH/github_main-design-repo?fullscreen=1&t=1CyYCzpwBvIjG7TG-1&code-node-id=0-9" } },

  // 16
  { id: "xybuilt", type: "built", label: "17 / XY", headline: "What I built", items: [
    { n: "01", h: "AI orchestration via chat", b: "Three agents, one conversation. No config." },
    { n: "02", h: "60+ prod components", b: "Fullscreen, sidebar, embedded contexts." },
    { n: "03", h: "First design system", b: "8px grid, tokens, Storybook." },
    { n: "04", h: "AI-native pipeline", b: "Figma → code. Hours, not weeks." },
  ], img: "/xy/storybook.png", imgAlt: "Component library in Storybook" },

  // 17 — NEW: Video demo
  { id: "xydemo", type: "video", label: "18 / XY", headline: "Live demo: AI chat in action", body: "Access the self-serve AI chat from the homepage and navigate through different agent modalities. From initial prompt to guided configuration — the conversation handles what forms couldn't.", src: "/xy/ai-chat-demo.mov" },

  // 18 — Integration Challenge
  { id: "xyintegration", type: "flow", label: "19 / XY", headline: "The Integration Challenge", challenge: "21+ healthcare integrations, each with different auth models and API surfaces", integrations: ["Gmail", "Drive", "Athena", "Dr. Chrono", "Kindbody", "and more"], patterns: [
    { label: "Simple OAuth", desc: "One-click connect" },
    { label: "API Credential", desc: "API key + endpoint URL" },
    { label: "Complex OAuth", desc: "Scoped permission access" },
    { label: "Hybrid Fallback", desc: "OAuth-first, credential fallback" },
  ], outcome: "One pattern, infinite integrations. Blockers surfaced upfront, never mid-config." },

  // 20 — Color System
  { id: "xycolorsystem", type: "video", label: "20 / XY", headline: "Color system & design tokens", body: "Color system built for XY's design system — tokens, scales, and themeable variables.", src: "/xy/color-system.mp4" },

  // 19 — Other cool things
  { id: "xyothereats", type: "embed", label: "21 / XY", headline: "Other cool things I built for XY", src: "https://www.figma.com/make/ahsvzzM900MujLyJzh3PqB/Interactive-3D-Circular-Model?fullscreen=1&code-node-id=0-9", videoSrc: "/xy/interactive-sphere.mp4" },

  // 21 — Testing & Results (retest)
  { id: "xyretest", type: "text", label: "22 / XY", headline: "Testing & Results", body: [
    "Before committing to chat-first, I validated the direction with real users:\n",
    { bold: "▸ ", normal: "Healthcare ops team interviews to test the mental model" },
    { bold: "▸ ", normal: "CPO-led walkthroughs with two enterprise prospects" },
    { bold: "▸ ", normal: "Internal dogfooding with engineering and sales" },
  ], columns: [
    { label: "What I Learned", body: [
      "▸ Users who saw the chat interface ",
      { bold: "immediately understood the agent model", normal: " — something the forms-based approach couldn't achieve in a single session." },
    ]},
    { label: "Impact", body: [
      "▸ The CEO began pitching the self-serve AI orchestration experience ",
      { bold: "directly to enterprise customers.", normal: "" },
    ]},
  ], cta: { label: "Explore the full design file", url: "https://www.figma.com/make/Ac81vE5pZnbQrcOMbXpIdH/github_main-design-repo?fullscreen=1&t=1CyYCzpwBvIjG7TG-1&code-node-id=0-9" } },

  // 22
  { id: "xyimpact", type: "quote", label: "23 / XY", quote: "Your design instinct is really strong, and that's hard to teach. The visual design combined with the UX — you did some really good work here.", attr: "Scott Cressman, CPO at XY", bullets: [
    "Self-serve AI orchestration became a core sales asset — the CEO pitched it directly to enterprise customers.",
    "Components were production-wired to Temporal for live agent orchestration, not prototypes.",
    "Users: \"This makes perfect sense. Complex flows made chat-friendly.\"",
  ] },

  // 23
  { id: "xyreflect", type: "text", label: "24 / XY", headline: "What I'd do differently", body: [
    "I built fast and I built real — but I was heads down with the CPO and didn't have enough visibility into what engineering was building in parallel.\n\n",
    "Components were created for demos I never saw. The design system and codebase drifted faster than I could close the gap.\n\n",
    { bold: "If I did it again: " },
    "A weekly 15-minute design-engineering sync, starting day one.\n\n",
    { bold: "That's exactly what I'd bring to Jiro." },
  ] },

  // Transition
  { id: "trans2", type: "transition", label: "—", line: "A few other things I've built." },

  // Waldo Hero
  { id: "waldohero", type: "hero", label: "24 / Waldo", tag: "HEALTHTECH", project: "Waldo Health", headline: "End-to-end mobile patient app for HIPAA-compliant contact lens ordering", description: "Designed patient portal app MVP and full checkout experience in sync with Waldo's doctor portal. Shipped 1 month early.", tags: ["healthtech", "mobile"], year: "2025", metric1Label: "Shipped", metric1Value: "1 month early", metric2Label: "Ownership", metric2Value: "100% patient app", mediaSrc: "/case-studies/waldo-hero.mp4", builtForLogo: "/logos/waldo.svg", accent: "#D97706" },

  // 23
  { id: "waldo", type: "image-text", label: "25 / Waldo", headline: "Waldo Health — Zero-to-one patient app", body: [
    "Eye care company (acquired by Specsavers) selling prescription contacts DTC.\n\n",
    "Sole designer on the patient app. Doctor portal on one side, patient app on the other — a dual ecosystem.\n\n",
    "Owned 100% from zero: research, IA, flows, high-fidelity UI, handoff.\n\n",
    { bold: "Delivered 1 month early on a $5 V0 credits budget." },
  ], img: "/waldo/journey-map-preview.png", imgAlt: "Patient journey map" },

  // 22
  { id: "otherwork", type: "projects", label: "26 / More", headline: "More from the portfolio", projects: [
    { name: "7dish", description: "Meal planning app. End-to-end product design from research through UI. 3 core flows redesigned, A/B tested.", mediaSrc: "/case-studies/7dish-hero.png", mediaType: "image" },
    { name: "SideNook", description: "macOS terminal emulator. Sole designer + SwiftUI developer. Shipped April 2026.", mediaSrc: "/case-studies/sidenook-hero.mp4", mediaType: "video" },
    { name: "Fundr", description: "SaaS paywall redesign. 20% increase in upgrade rates, ~50% fewer sales calls.", mediaSrc: "/case-studies/fundr-hero.mp4", mediaType: "video" },
    { name: "Sitecore", description: "Enterprise CMS platform work — information architecture, design system alignment, and component-driven pages." },
    { name: "The UX Chats", description: "Design community I founded. 180+ members." },
  ] },

  // 23
  { id: "bring", type: "table", label: "27 / Fit", headline: "Here's how I plug in", header: ["Chris's need", "What I bring"], rows: [
    ["Design system + code out of sync", "Built XY's first design system and 60+ component library from zero. Mapped to engineering output."],
    ["No time to build foundation", "I've been the sole designer twice. Build the foundation while still shipping."],
    ["Research function missing", "I install lightweight feedback loops — fast, repeatable, tied to decisions."],
    ["Process is hodgepodge", "Structure upstream without bureaucracy. Problem definition is non-negotiable."],
    ["PMs jumping to Lovable", "I reframe the brief, pressure-test the problem, align before anyone opens a tool."],
    ["Prototypes disconnected from code", "AI-native pipeline: Figma → Figma Make → GitHub → Engineering. Hours, not weeks."],
    ["Volume of execution", "This isn't a consulting engagement. I'm here to ship."],
    ["Scaling without slowing down", "Small team, fast pace, high quality bar — my default."],
  ] },

  // 24
  { id: "close", type: "contact", label: "28 / Contact", headline: "I came ready to get into the weeds.", sub: "", name: "Jacki Torres", email: "hello@jackelinetorres.co", site: "jackelinetorres.co" },
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
      <div className="relative w-screen h-screen overflow-hidden bg-[#fafafa] flex items-center justify-center select-none" onTouchStart={touchStart}>
        {/* decorative geometric accents */}
        <div className="absolute top-12 right-16 w-20 h-20 rounded-full border border-[#4361EE]/10" />
        <div className="absolute top-16 right-20 w-12 h-12 rounded-full border border-[#4361EE]/15" />
        <div className="absolute bottom-24 left-16 w-16 h-16 rounded-full bg-[#4361EE]/8" />
        <p
          className="text-[#4361EE] text-3xl md:text-4xl italic max-w-2xl text-center px-8 leading-relaxed relative z-10"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {slide.line}
        </p>
        {/* bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 py-5">
          <span className="text-xs text-[#888] tracking-widest uppercase">{slide.label}</span>
          <div className="flex items-center gap-3">
            <NavButton direction="prev" disabled={isFirst} onClick={() => setCurrent((c) => c - 1)} />
            <span className="text-xs text-[#888] tabular-nums">{current + 1} / {SLIDES.length}</span>
            <NavButton direction="next" disabled={isLast} onClick={() => setCurrent((c) => c + 1)} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-screen h-screen overflow-hidden font-sans select-none"
      style={{ backgroundColor: slide.id === "xycontext" ? "#540f37" : "#fafafa" }}
      onTouchStart={touchStart}
      tabIndex={0}
    >
      {/* Mobile download bar */}
      <div className="md:hidden absolute top-0 left-0 right-0 z-20 flex justify-end p-3">
        <a
          href="/jiro-health-presentation.pptx"
          download
          className="text-xs px-3 py-1.5 rounded-full bg-[#4361EE] text-white"
        >
          Download .pptx
        </a>
      </div>

      {/* Slide area */}
      <div className={`w-full h-full flex items-center justify-center ${slide.type !== "image-only" && slide.type !== "built" ? "px-6 md:px-16" : ""}`}>
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
    case "text": return <TextSlide {...slide} accent={slide.id === "xycontext" ? "#FACC15" : undefined} light={slide.id === "xycontext"} />;
    case "cards": return <CardsSlide {...slide} />;
    case "timeline": return <TimelineSlide {...slide} />;
    case "directions": return <DirectionSlide {...slide} />;
    case "grid": return <GridSlide {...slide} />;
    case "quote": return <QuoteSlide {...slide} />;
    case "image-text": return <ImageTextSlide {...slide} current={current} total={total} />;
    case "table": return <TableSlide {...slide} />;
    case "contact": return <ContactSlide {...slide} />;
    case "video": return <VideoSlide {...slide} />;
    case "hero": return <HeroSlide {...slide} />;
    case "embed": return <EmbedSlide {...slide} />;
    case "projects": return <ProjectsSlideComponent {...slide} />;
    case "flow": return <FlowSlide {...slide} />;
    case "built": return <BuiltSlide {...slide} />;
    case "story": return <StorySlideComponent {...slide} />;
    case "image-only": return <ImageOnlySlideComponent {...slide} />;
    case "jiro": return <JiroSlideComponent {...slide} />;
    case "insight": return <InsightSlideComponent {...slide} />;
    default: return null;
  }
}

// ─── Slide layouts ─────────────────────────────────────────────────────────────

function StorySlideComponent({ headline, steps }: StorySlide) {
  const BURGUNDY = "#540f37";
  const icons: Record<string, React.ReactNode> = {
    family: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="2.5"/><circle cx="17" cy="6" r="2"/>
        <path d="M5 21v-2a4 4 0 0 1 4-4h1"/><path d="M13 21v-3a4 4 0 0 1 2.5-3.7"/>
        <path d="M18 13.5V21"/><path d="M16 16h4"/>
      </svg>
    ),
    build: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4m0 0a3 3 0 0 0 0 6 3 3 0 0 0 0-6z"/>
        <path d="M12 8v14"/>
        <path d="M7 12.5a5 5 0 0 0 4.5 2.5 5 5 0 0 0 4.5-2.5"/>
        <circle cx="12" cy="5" r="1" fill="currentColor"/>
      </svg>
    ),
    mission: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.8 10.7a8 8 0 1 0-3.2 11.2"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
        <path d="M22 12A10 10 0 0 1 12 22"/>
      </svg>
    ),
  };

  return (
    <div className="max-w-5xl w-full animate-fade-in min-h-[calc(100vh-200px)] pt-[116px]">
      <h2 className="text-[28px] md:text-[36px] font-bold text-[#2f2e31] mb-8 leading-tight">{headline}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col bg-[#F5F4F0] rounded-xl p-5 md:p-6 border border-[#e8e8e8]">
            <div className="text-[#485bfc] mb-4">{icons[step.icon]}</div>
            <span className="inline-block text-[20px] md:text-[24px] font-bold tracking-widest text-[#485bfc] uppercase mb-1">{step.h}</span>
            <div className="text-sm text-[#4d4d4d] leading-relaxed flex-1">
              {step.b.map((part, i) => {
                if (typeof part === "string") {
                  return <span key={i}>{part}</span>;
                }
                return <span key={i} className="font-semibold" style={{ color: BURGUNDY }}>{part.bold}</span>;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImageOnlySlideComponent({ src, alt }: ImageOnlySlide) {
  return (
    <div className="w-full h-full bg-[#E2F3FF] flex items-center justify-center">
      <div className="w-full" style={{ height: "80vh" }}>
        <img
          src={src}
          alt={alt || ""}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

function JiroSlideComponent({ headline, lead, bullets }: JiroSlide) {
  return (
    <div className="max-w-4xl w-full animate-fade-in relative min-h-[calc(100vh-200px)] pt-[116px]">
      <div className="flex items-start gap-8">
        {/* Text content */}
        <div className="flex-1 min-w-0">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#2f2e31] mb-6 leading-tight">{headline}</h2>
          <p className="text-[17px] md:text-[18px] text-[#4d4d4d] leading-relaxed mb-8">{lead}</p>
          <div className="space-y-5">
            {bullets.map((b, i) => (
              <p key={i} className="text-lg md:text-xl text-[#2f2e31] leading-relaxed">
                {b.prefix}{" "}
                <span className="text-xl md:text-2xl">&rarr;</span>{" "}
                <span
                  className="text-2xl md:text-3xl italic"
                  style={{ fontFamily: "var(--font-heading)", color: "#4361EE" }}
                >
                  {b.word}
                </span>
              </p>
            ))}
          </div>
        </div>
        {/* Jiro logo to the right */}
        <div className="shrink-0 p-4 rounded-xl border border-[#2C3AD3] bg-[#2C3AD3]">
          <img src="/logos/jiro.png" alt="Jiro" className="h-[92px] w-auto" />
        </div>
      </div>
    </div>
  );
}

function InsightSlideComponent({ quote, sub }: InsightSlide) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#540f37] px-6">
      <div className="max-w-2xl w-full bg-white rounded-xl p-10 md:p-14">
        {sub && <p className="text-[11px] font-bold text-[#4361EE] tracking-widest uppercase text-center mb-4">{sub}</p>}
        <p className="text-xl md:text-2xl font-serif font-bold italic text-[#2f2e31] text-center leading-relaxed">&ldquo;{quote}&rdquo;</p>
      </div>
    </div>
  );
}

function BuiltSlide({ headline, items, img, imgAlt }: BuiltSlide) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#540f37] py-8">
      <div className="w-full max-w-5xl px-6 md:px-16">
        {/* Headline */}
        <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-8 leading-tight">{headline}</h2>

        {/* Four cards in a row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white/15 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/10">
              <span className="text-[11px] font-bold text-white/60">{item.n}</span>
              <h3 className="text-[17px] md:text-[18px] font-bold text-white mt-1 leading-snug">{item.h}</h3>
              <p className="text-[11px] md:text-xs text-white/70 mt-1.5 leading-relaxed">{item.b}</p>
            </div>
          ))}
        </div>

        {/* Storybook screenshot */}
        {img && (
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <img src={img} alt={imgAlt || ""} className="w-full" />
          </div>
        )}
      </div>
    </div>
  );
}

function FlowSlide({ headline, challenge, integrations, patterns, outcome }: FlowSlide) {
  return (
    <div className="max-w-5xl w-full animate-fade-in min-h-[calc(100vh-200px)] pt-[116px]">
      <h2 className="text-[28px] md:text-[36px] font-bold text-[#2f2e31] mb-8 leading-tight">{headline}</h2>

      {/* Three-column flow diagram */}
      <div className="flex items-stretch gap-3 md:gap-6">

        {/* Column 1 — Challenge */}
        <div className="flex-1 flex flex-col">
          <div className="text-base font-bold tracking-widest text-[#d95c5c] mb-3 uppercase">Challenge</div>
          <div className="flex-1 bg-[#F5F4F0] rounded-xl p-4 md:p-5 border border-[#e8e8e8]">
            <p className="text-base text-[#4d4d4d] mb-4 leading-relaxed">{challenge}</p>
            <div className="flex flex-wrap gap-2">
              {integrations.map((i) => (
                <span key={i} className="text-base px-3 py-1.5 rounded-md bg-white border border-[#e0e0e0] text-[#4d4d4d]">{i}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#4361EE]">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Column 2 — 4 Patterns */}
        <div className="flex-[1.4] flex flex-col">
          <div className="text-base font-bold tracking-widest text-[#4361EE] mb-3 uppercase">4 Reusable Patterns</div>
          <div className="flex-1 flex flex-col gap-2">
            {patterns.map((p, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3 md:p-4 border border-[#e0e0e0] shadow-sm">
                <span className="w-8 h-8 rounded-full bg-[#4361EE] text-white text-base font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                <div>
                  <div className="text-base font-semibold text-[#2f2e31]">{p.label}</div>
                  <div className="text-base text-[#757575]">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#4361EE]">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Column 3 — Outcome */}
        <div className="flex-1 flex flex-col">
          <div className="text-base font-bold tracking-widest text-[#059669] mb-3 uppercase">Outcome</div>
          <div className="flex-1 bg-[#ecfdf5] rounded-xl p-4 md:p-5 border border-[#d1fae5] flex items-center justify-center">
            <p className="text-base text-[#065f46] leading-relaxed text-center font-medium">{outcome}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

function TitleSlide({ headline, sub, subtitle, topBarLeft, topBarRight, taglineLead, taglineParts, bottomBarLeft, bottomBarRight }: TitleSlide) {
  return (
    <div className="max-w-4xl w-full min-h-[55vh] animate-fade-in relative flex flex-col justify-between">
      {/* decorative circles */}
      <div className="absolute -top-6 right-6 w-24 h-24 rounded-full bg-[#4361EE]/[0.05] pointer-events-none" />
      <div className="absolute bottom-24 -left-4 w-14 h-14 rounded-full bg-[#4361EE]/[0.03] pointer-events-none" />

      {/* Top bar */}
      <div className="flex justify-between items-center">
        <span className="text-xs text-[#888]">{topBarLeft}</span>
        <span className="text-xs text-[#888]">{topBarRight}</span>
      </div>

      {/* Center content */}
      <div className="py-8">
        <h1 className="text-[56px] md:text-[72px] leading-[1.1] font-serif font-bold text-[#2f2e31]">{headline}</h1>
        <h2 className="text-[56px] md:text-[72px] leading-[1.1] font-serif italic text-[#2f2e31] mb-8">{sub}</h2>

        <p className="text-base md:text-lg text-[#4d4d4d] mb-1 leading-relaxed">{taglineLead}</p>
        <p className="text-base md:text-lg text-[#2f2e31]">
          {taglineParts?.map((part, i) => (
            <span key={i} className={`${part.bold ? "font-bold" : ""} ${part.italic ? "italic font-serif" : ""}`} style={{ color: "#4361EE" }}>
              {part.text}
            </span>
          ))}
        </p>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-center">
        <span className="text-xs text-[#888]">{bottomBarLeft}</span>
        <span className="text-xs italic text-[#4361EE] font-serif">{bottomBarRight}</span>
      </div>
    </div>
  );
}

function TextSlide({ headline, body, logos, img, imgLayout, bottomCallout, cta, columns, accent, light }: TextSlide & { accent?: string; light?: boolean }) {
  const renderBodyItem = (part: BodyItem, i: number) => {
    if (typeof part === "string") {
      return <p key={i} className="text-[17px] md:text-[18px] leading-relaxed whitespace-pre-line" style={{ color: light ? "rgba(255,255,255,0.85)" : "#4d4d4d" }}>{part}</p>;
    }
    const isLabel = !("normal" in part);
    return <p key={i} className="text-[17px] md:text-[18px] leading-relaxed whitespace-pre-line"><span className={`${isLabel ? "font-bold text-[19px] md:text-[21px]" : "font-semibold"}`} style={{ color: accent || "#4361EE" }}>{part.bold}</span>{part.normal}</p>;
  };

  return (
    <div className="max-w-5xl w-full animate-fade-in flex flex-col gap-8 items-center min-h-[calc(100vh-200px)] pt-[116px]">
      <div className={"flex " + (imgLayout === "bottom" ? "w-full" : "flex-col md:flex-row md:gap-12 items-start")}>
        {img && imgLayout !== "bottom" && (
          <div className="w-full md:w-[180px] shrink-0 md:order-last">
            <div className="relative">
              <img src={img} alt="Jacki Torres" className="w-full rounded-2xl border border-[#f0f0f0]" />
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#4361EE]" />
            </div>
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-6 leading-tight" style={{ color: light ? "#ffffff" : "#2f2e31" }}>{headline}</h2>
          <div className="space-y-3">
            {body.map((part, i) => renderBodyItem(part, i))}
          </div>
          {columns && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              {columns.map((col, i) => (
                <div key={i} className="bg-[#F5F4F0] rounded-xl p-5">
                  <h3 className="font-bold text-[19px] md:text-[21px] mb-3" style={{ color: accent || "#4361EE" }}>{col.label}</h3>
                  <div className="space-y-2">
                    {col.body.map((part, j) => renderBodyItem(part, j))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {logos && <div className="mt-16"><ToolIcons logos={logos} centered large /></div>}
        </div>
      </div>
      {img && imgLayout === "bottom" && (
        <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-[#f0f0f0]">
          <img src={img} alt="XY website" className="w-full object-cover object-bottom" style={{ maxHeight: "80vh" }} />
        </div>
      )}
      {bottomCallout && (
        <div className="w-full mt-4 text-center">
          <span className="text-[64px] md:text-[80px] font-bold italic leading-none" style={{ fontFamily: "var(--font-heading)", color: accent || "#485bfc" }}>
            {bottomCallout}
          </span>
        </div>
      )}
      {cta && (
        <a href={cta.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#3B3066] bg-[#3B3066] text-white font-semibold text-base hover:bg-transparent hover:text-[#3B3066] transition-all duration-300 mt-4">
          <img src="/logos/figma.png" alt="Figma" className="w-5 h-5 shrink-0 object-contain" />
          <span>{cta.label}</span>
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      )}
    </div>
  );
}

function CardsSlide({ headline, sub, cards, logos, numbered, aiLabel, aiToolsLogos }: CardsSlide) {
  return (
    <div className="max-w-5xl w-full animate-fade-in min-h-[calc(100vh-200px)] pt-[116px]">
      <h2 className="text-[28px] md:text-[36px] font-bold text-[#2f2e31] mb-6 leading-tight">{headline}</h2>
      {sub && <p className="text-sm text-[#888] mb-6">{sub}</p>}
      {logos && <div className="mb-8"><ToolIcons logos={logos} centered /></div>}
      {numbered ? (
        <>
          <div className="flex gap-12 items-start">
            <div className="flex-1 flex flex-col gap-0">
              {cards.map((c, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#4361EE] text-white text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    {i < cards.length - 1 && <div className="w-[2px] flex-1 bg-[#4361EE]/20 my-1" />}
                  </div>
                  <div className="pb-8 pt-1">
                    <h3 className="text-base font-bold text-[#2f2e31] mb-1">{c.h}</h3>
                    <p className="text-sm text-[#4d4d4d] leading-relaxed">{c.b}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden md:flex w-48 shrink-0 items-start justify-center pt-4">
              <p className="text-[56px] md:text-[64px] leading-[1] font-serif italic text-[#540f37] text-right" style={{ fontFamily: "var(--font-serif)" }}>
                Always<br />Ask Why
              </p>
            </div>
          </div>
          {aiLabel && aiToolsLogos && (
            <div className="mt-10 pt-8 border-t border-[#e8e8e8]">
              <h3 className="text-base font-semibold text-[#2f2e31] mb-1">{aiLabel}</h3>
              <p className="text-sm text-[#4d4d4d] mb-5">Figma → Cursor → Claude Code → Storybook. Hours instead of weeks.</p>
              <ToolIcons logos={aiToolsLogos} centered />
            </div>
          )}
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <div key={i} className="p-5 rounded-xl bg-[#F5F4F0]">
              <h3 className="text-sm font-bold text-[#4361EE] mb-2">{c.h}</h3>
              <p className="text-sm text-[#4d4d4d] leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TimelineSlide({ headline, sub, phases }: TimelineSlide) {
  return (
    <div className="max-w-5xl w-full animate-fade-in min-h-[calc(100vh-200px)] pt-[116px]">
      <h2 className="text-[28px] md:text-[36px] font-bold text-[#2f2e31] mb-6 leading-tight">{headline}</h2>
      <p className="text-sm text-[#888] mb-8">{sub}</p>
      <div className="flex flex-col gap-4">
        {phases.map((p, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-1 shrink-0 rounded-full bg-[#4361EE]" />
            <div className="flex-1 p-4 rounded-xl bg-[#F5F4F0]">
              <span className="text-xs font-bold text-[#4361EE]">{p.label}</span>
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
    <div className="max-w-5xl w-full animate-fade-in min-h-[calc(100vh-200px)] pt-[116px]">
      <h2 className="text-[28px] md:text-[36px] font-bold text-[#2f2e31] mb-6 leading-tight">{headline}</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {dirs.map((d, i) => (
          <div key={i} className={`p-5 rounded-xl ${d.winner ? "bg-[#4361EE] text-white" : "bg-[#F5F4F0]"} w-full md:w-[30%] min-w-[250px]`}>
            <span className={`inline-block text-[12px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-3 ${d.winner ? "bg-white text-[#4361EE]" : "bg-[#4361EE] text-white"}`}>{d.tag}</span>
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
    <div className="max-w-5xl w-full animate-fade-in min-h-[calc(100vh-200px)]">
      <h2 className="text-[28px] md:text-[36px] font-bold text-[#2f2e31] mb-6 leading-tight">{headline}</h2>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {items.map((item, i) => (
            <div key={i} className="p-5 rounded-xl bg-[#F5F4F0]">
              <span className="text-xs font-bold text-[#4361EE]">{item.n}</span>
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
      <div className="p-6 md:p-8 rounded-xl bg-[#540f37] mb-8">
        <p className="text-lg md:text-xl font-serif font-bold italic text-white leading-relaxed">&ldquo;{quote}&rdquo;</p>
        <p className="text-sm text-white/60 mt-3 text-right">&mdash; {attr}</p>
      </div>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="text-[17px] md:text-[18px] text-[#4d4d4d] leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[#4361EE]">{b}</li>
        ))}
      </ul>
    </div>
  );
}

function ImageTextSlide({ headline, body, img, imgAlt, imgLayout }: ImageSlide & { current: number; total: number }) {
  return (
    <div className="w-full max-w-6xl animate-fade-in flex flex-col gap-6 min-h-[calc(100vh-200px)] pt-[116px]">
      <div>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#2f2e31] mb-6 leading-tight">{headline}</h2>
        <div className="space-y-1">
          {body.map((part, i) => {
            if (typeof part === "string") {
              return <p key={i} className="text-[17px] md:text-[18px] text-[#4d4d4d] leading-relaxed whitespace-pre-line">{part}</p>;
            }
            return <p key={i} className="text-[17px] md:text-[18px] leading-relaxed whitespace-pre-line"><span className="font-semibold text-[#4361EE]">{part.bold}</span>{part.normal}</p>;
          })}
        </div>
      </div>
      <div className={imgLayout === "centered" ? "flex justify-center" : "w-full max-w-2xl"}>
        <img src={img} alt={imgAlt} className={imgLayout === "centered" ? "w-[115%] max-w-[773px] rounded-xl border border-[#f0f0f0]" : "w-full rounded-xl border border-[#f0f0f0]"} />
      </div>
    </div>
  );
}

function TableSlide({ headline, header, rows }: TableSlide) {
  return (
    <div className="max-w-5xl w-full animate-fade-in min-h-[calc(100vh-200px)] pt-[116px]">
      <h2 className="text-[28px] md:text-[36px] font-bold text-[#2f2e31] mb-6 leading-tight">{headline}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-[#4361EE]">
              {header.map((h, i) => (
                <th key={i} className="text-white font-bold px-3 py-2.5 text-xs uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-[#F5F4F0]" : "bg-white"}>
                <td className="px-3 py-2 text-[#4361EE] font-semibold text-xs align-top">{row[0]}</td>
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
      {/* decorative background elements */}
      <div className="absolute top-20 right-1/4 w-40 h-40 rounded-full bg-[#4361EE]/[0.03] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full bg-[#4361EE]/[0.02] pointer-events-none" />
      <div className="flex justify-center mb-6">
        <img src="/about-jacki-headshot.png" alt="Jacki Torres" className="w-20 h-20 rounded-full border-2 border-[#f0f0f0] object-cover" />
      </div>
      {name !== headline && <h2 className="text-[28px] md:text-[36px] font-bold text-[#2f2e31] mb-4 leading-tight">{headline}</h2>}
      {sub && <p className="text-base md:text-lg text-[#757575] mb-8">{sub}</p>}
      <p className="text-lg font-semibold text-[#2f2e31] mb-4">{name}</p>
      <div className="flex flex-col items-center gap-3">
        <a href={`mailto:${email}`} className="text-base md:text-lg text-[#4361EE] font-medium hover:opacity-70 transition-opacity">{email}</a>
        <a href={`https://${site}`} target="_blank" rel="noreferrer" className="text-base md:text-lg text-[#4361EE] font-medium hover:opacity-70 transition-opacity">{site}</a>
        <div className="mt-6">
          <a
            href="/jiro-health-presentation.pptx"
            download
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-[#4361EE] text-white hover:opacity-90 transition-opacity"
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

function HeroSlide({ tag, project, headline, description, tags, year, metric1Label, metric1Value, metric2Label, metric2Value, mediaSrc, mediaSrcs, builtForLogo, accent }: HeroSlide) {
  return (
    <div className="w-full max-w-6xl animate-fade-in flex flex-col min-h-[55vh]">
      {/* Top branding bar — matches cover */}
      <div className="flex justify-between items-center mb-8">
        <span className="text-xs text-[#888]">Jacki Torres · Product Designer</span>
        <span className="text-xs text-[#888]">Portfolio / 2026</span>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 flex-1 items-stretch">
        {/* Left — info panel */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Company logo at top-left */}
          {builtForLogo && (
            <img src={builtForLogo} alt={project} className="h-7 w-auto mb-6 opacity-100 self-start" />
          )}

          {/* Tag */}
          <span className="inline-block text-[11px] font-bold tracking-widest mb-3" style={{ color: accent }}>{tag}</span>

          {/* Project name */}
          <h2 className="text-[28px] md:text-[36px] font-serif font-bold leading-tight tracking-tight mb-1" style={{ color: "#2f2e31" }}>{project}</h2>
          <p className="text-base md:text-lg text-[#4d4d4d] mb-4">{headline}</p>

          {/* Description */}
          <p className="text-sm text-[#757575] leading-relaxed mb-5">{description}</p>

          {/* Tags row */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.map((t) => (
              <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider" style={{ backgroundColor: `${accent}15`, color: accent }}>{t}</span>
            ))}
            <span className="text-[10px] text-[#888] px-2 py-0.5">{year}</span>
          </div>

          {/* Metrics */}
          <div className="flex gap-6">
            <div>
              <span className="text-2xl md:text-3xl font-serif font-bold" style={{ color: accent }}>{metric1Value}</span>
              <p className="text-[11px] text-[#888] mt-0.5">{metric1Label}</p>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-serif font-bold" style={{ color: accent }}>{metric2Value}</span>
              <p className="text-[11px] text-[#888] mt-0.5">{metric2Label}</p>
            </div>
          </div>
        </div>

        {/* Right — enlarged hero media, no container */}
        <div className="w-full md:w-[440px] lg:w-[500px] shrink-0 flex items-center">
          {mediaSrcs && mediaSrcs.length > 0 ? (
            <VideoCarousel
              videos={mediaSrcs}
              interval={4000}
              className="w-full"
            />
          ) : (
            <video
              src={mediaSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full object-cover rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
}

function VideoSlide({ headline, body, src }: VideoSlide) {
  return (
    <div className="w-full max-w-5xl animate-fade-in">
      <h2 className="text-[28px] md:text-[36px] font-bold text-[#2f2e31] mb-3 leading-tight">{headline}</h2>
      <p className="text-[17px] md:text-[18px] text-[#4d4d4d] mb-6 leading-relaxed max-w-2xl">{body}</p>
      <div className="rounded-xl overflow-hidden border border-[#f0f0f0] bg-[#f5f5f5] shadow-sm">
        <video
          src={src}
          controls
          autoPlay
          muted
          loop
          playsInline
          className="w-full max-h-[65vh] object-contain"
        />
      </div>
    </div>
  );
}

function ProjectsSlideComponent({ headline, projects }: ProjectsSlide) {
  return (
    <div className="max-w-5xl w-full animate-fade-in min-h-[calc(100vh-200px)] pt-[116px]">
      <h2 className="text-[28px] md:text-[36px] font-bold text-[#2f2e31] mb-8 leading-tight">{headline}</h2>
      <div className="flex flex-col gap-5">
        {projects.map((p, i) => (
          <div key={i} className="flex items-start gap-5 bg-[#F5F4F0] rounded-xl p-4 border border-[#e8e8e8]">
            {p.mediaSrc ? (
              <div className="w-[120px] h-[80px] shrink-0 rounded-lg overflow-hidden bg-white border border-[#e0e0e0]">
                {p.mediaType === "video" ? (
                  <video src={p.mediaSrc} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                ) : (
                  <img src={p.mediaSrc} alt={p.name} className="w-full h-full object-cover" />
                )}
              </div>
            ) : null}
            <div className="min-w-0 flex-1">
              <h3 className="text-[17px] font-bold text-[#2f2e31]">{p.name}</h3>
              <p className="text-[15px] text-[#4d4d4d] mt-1 leading-relaxed">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmbedSlide({ headline, src, videoSrc }: EmbedSlide) {
  return (
    <div className="w-full max-w-5xl animate-fade-in">
      <h2 className="text-[28px] md:text-[36px] font-bold text-[#2f2e31] mb-3 leading-tight">{headline}</h2>
      <div className="flex flex-col gap-6">
        {videoSrc && (
          <div className="rounded-xl overflow-hidden border border-[#f0f0f0] bg-[#f5f5f5] shadow-sm">
            <video
              src={videoSrc}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full max-h-[65vh] object-contain"
            />
          </div>
        )}
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#4d4d4d] leading-relaxed">
            Interactive 3D circular model exploring agent orchestration as a spatial interface.
          </p>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#4361EE] font-medium hover:opacity-70 transition-opacity shrink-0"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M5 2.5H2.5V11.5H11.5V9M8.5 2.5H11.5V5.5M11.5 2.5L6.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Open in Figma
          </a>
        </div>
      </div>
    </div>
  );
}
