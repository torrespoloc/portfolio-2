import type { ReactNode } from "react";

// ── Trusted By Logos ──
export type LogoData = {
  src: string;
  alt: string;
  heightSm?: string;
};

export const ALL_LOGOS: LogoData[] = [
  { src: "/logos/tedai.webp", alt: "TEDAI", heightSm: "26px" },
  { src: "/logos/waldo.svg", alt: "Waldo", heightSm: "26px" },
  { src: "/logos/XY.svg", alt: "XY", heightSm: "37px" },
  { src: "/logos/Reail.svg", alt: "Reail" },
  { src: "/logos/fundr-logo.svg", alt: "Fundr" },
  { src: "/logos/7dish.svg", alt: "7dish" },
];

// ── Experience ──
export type ExperienceEntry = {
  period: string;
  role: string;
  company: string;
  description: string;
  logo: string;
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    period: "NOV '25 - APRIL 2026",
    role: "Founding Product Designer",
    company: "XY.AI Labs",
    description:
      "Agentified a healthcare SaaS platform into a chat-driven product for self-serve onboarding and repeat daily use.",
    logo: "/logos/XY.svg",
  },
  {
    period: "MAY - NOV, 2025",
    role: "Product Designer",
    company: "Waldo",
    description:
      "Co-led the dual-platform healthcare experience across staff workflows, patient ordering, and prescription management.",
    logo: "/logos/waldo.svg",
  },
  {
    period: "JUN - SEP, 2026",
    role: "Product Designer",
    company: "Reail",
    description:
      "Designed a desktop-first MVP for landlord risk intelligence and the investor-facing marketing site around it.",
    logo: "/logos/Reail.svg",
  },
  {
    period: "APRIL - JUNE, 2026",
    role: "UX Designer",
    company: "Exelcius",
    description:
      "Reshaped the post-MVP product into modular widgets and a customizable layout system the team could extend.",
    logo: "/logos/Exelcius.svg",
  },
];

// ── My Jam Metrics ──
export type Metric = {
  value: string;
  label: string;
};

export const METRICS: Metric[] = [
  { value: "7 yrs", label: "Design" },
  { value: "4 yrs", label: "Product" },
  { value: "5 apps", label: "Shipped" },
];

// ── Testimonials ──
export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  image?: string;
  linkedin?: string;
  highlights?: string[];
  featured?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The best AI Product Designers share one quality: their work feels inevitable. You use it and think — of course it works this way. Jacki designs like that.",
    name: "Christopher Miller",
    title: "Enterprise UX · Design Career Coach",
    image: "/headshots/webp/miller.webp",
    linkedin: "https://www.linkedin.com/in/uxchrism/",
    highlights: ["work feels inevitable"],
  },
  {
    quote:
      "Jacki's passion, creative flair, and adaptability stood out immediately. Her work ethic and collaboration made her a standout contributor.",
    name: "Earl Friedberg",
    title: "UX Manager at Google",
    image: "/headshots/webp/friedberg.webp",
    linkedin: "https://www.linkedin.com/in/earlf/",
    highlights: ["passion, creative flair, and adaptability"],
  },
  {
    quote:
      "I was always impressed by her strong visual design instinct and thoughtful approach to UX. She has a solid ability to create designs that not only look excellent, but also make for a delightful user experience.",
    name: "Scott Cressman",
    title: "CPO + AI Leader at XY",
    image: "/headshots/webp/cressman.webp",
    linkedin: "https://www.linkedin.com/in/scottcressman/",
    highlights: ["strong visual design instinct", "delightful user experience"],
    featured: true,
  },
  {
    quote:
      "You're a thoughtful and resourceful UX designer. She's a natural at collaborating and shipping great work. I'd recommend her to anyone.",
    name: "Vincent Trepnier",
    title: "CEO of 7dish",
    image: "/headshots/webp/vincent.webp",
    linkedin: "https://www.linkedin.com/in/vincenttrepanier/",
    highlights: ["thoughtful and resourceful"],
  },
  {
    quote:
      "Jacki is an ambitious talent — always willing to learn, solve tough problems, and deliver strong results. I'd work with her again in a heartbeat.",
    name: "Jonathan Brink",
    title: "UX Manager at IBM",
    image: "/headshots/webp/brink.webp",
    linkedin: "https://www.linkedin.com/in/jonathanbrink/",
    highlights: ["ambitious talent"],
  },
];

// ── Work Cards ──
export type WorkCard = {
  tag: string;
  headline: ReactNode;
  description: string;
  tags: string[];
  year: string;
  metric1Label: string;
  metric1Value: string;
  metric2Label: string;
  metric2Value: string;
  mediaSrcs?: string[];
  mediaSrc?: string;
  mediaType?: "image" | "video";
  mediaAlt?: string;
  href: string;
  ndaBadge?: boolean;
  badge?: string;
};

export function getWorkCards(): WorkCard[] {
  return [
    {
      tag: "AI WORKFLOWS",
      headline: (
        <>
          Making the XY&#39;s healthcare SaaS platform{" "}
          <span className="text-brand-accent">AI and chat driven</span>
        </>
      ),
      description:
        "Conversational onboarding replaced hour-long demos with 3-step wizards. Built component factory to ship production-ready flows.",
      year: "2025–2026",
      metric1Label: "Clicks to value",
      metric1Value: "3 steps",
      metric2Label: "Setup Reduction",
      metric2Value: "Hour to minutes",
      mediaSrcs: [
        "/xy/IntegrationsHub.mp4",
        "/xy/BrowserAgent.mp4",
        "/xy/DataExtraction.mp4",
        "/xy/KnowledgeBase.mp4",
        "/xy/TeamProductivity.mp4",
      ],
      tags: ["healthtech", "SaaS", "B2B"],
      href: "/work/xy",
      ndaBadge: true,
    },
    {
      tag: "HEALTHTECH",
      headline: (
        <>
          Designed End-to-End Mobile Patient App for{" "}
          <span className="text-brand-accent">HIPAA-Compliant</span> Contact Lens
          Ordering
        </>
      ),
      description:
        "Designed patient portal app MVP and full checkout experience in sync with Waldo's doctor portal.",
      year: "2025",
      metric1Label: "Shipped",
      metric1Value: "1 month early",
      metric2Label: "Ownership",
      metric2Value: "100% patient app",
      tags: ["healthtech", "mobile", "B2B"],
      mediaSrc: "/case-studies/waldo-hero.mp4",
      mediaType: "video" as const,
      href: "/work/waldo",
    },
    {
      tag: "FINTECH · AI",
      headline: (
        <>
          Monetizing Fundr&apos;s SaaS platform with an{" "}
          <span className="text-brand-accent">upgrade paywall system</span>
        </>
      ),
      description:
        "The story of how I cut down the need for 1:1 sales calls by 50% in just 10 weeks for a Fintech stealth startup.",
      year: "2023",
      metric1Label: "Upgrade Conversions",
      metric1Value: "20%",
      metric2Label: "Team Productivity",
      metric2Value: "2x",
      tags: ["fintech", "SaaS"],
      mediaSrc: "/case-studies/fundr-hero.mp4",
      mediaType: "video" as const,
      href: "/work/fundr",
    },
    {
      tag: "MAC APP",
      badge: "Building V2",
      headline: (
        <>
          SideNook — A{" "}
          <span className="text-brand-accent">macOS terminal emulator</span> that
          stays out of your way
        </>
      ),
      description:
        "An ambient terminal companion: always there when you need it, invisible when you don't.",
      year: "2026",
      metric1Label: "App Type",
      metric1Value: "Native Mac",
      metric2Label: "Tech",
      metric2Value: "SwiftUI",
      tags: ["macOS", "desktop"],
      mediaSrc: "/case-studies/sidenook-hero.mp4",
      mediaType: "video" as const,
      href: "/work/sidenook",
    },
    {
      tag: "FOODTECH",
      headline: (
        <>
          Redesigned <span className="text-brand-accent">3 core flows</span> for
          7dish&apos;s meal planning app
        </>
      ),
      description:
        "Boosting user satisfaction by 50% through strategic redesigns and 7 new features for working parents.",
      year: "2023–2024",
      metric1Label: "User Satisfaction",
      metric1Value: "~50%",
      metric2Label: "New Features",
      metric2Value: "7",
      tags: ["mobile", "SaaS"],
      mediaSrc: "/case-studies/7dish-hero.webp",
      mediaType: "image" as const,
      mediaAlt: "7dish meal planning app",
      href: "/work/7dish",
    },
  ];
}
