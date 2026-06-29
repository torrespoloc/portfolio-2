const experience = [
  {
    period: "NOV '25 - APRIL 2026",
    role: "AI Product Designer",
    company: "XY.AI Labs",
    description:
      "Agentifying XY's SaaS platform with a fully AI chat-driven experience for self-serve and daily use.",
  },
  {
    period: "MAY - NOV, 2025",
    role: "AI Product Designer",
    company: "Waldo",
    description:
      "Co-led design of dual-platform healthcare app (staff + patient), supporting e-commerce and prescription management.",
  },
  {
    period: "JUN - SEP, 2026",
    role: "AI Product Designer",
    company: "Reail",
    description:
      "Designed desktop-first MVP UX for landlord risk AI tool and investor-facing marketing site.",
  },
  {
    period: "APRIL - JUNE, 2026",
    role: "UX Designer",
    company: "Exelcius",
    description:
      "Led redesign of v1 product after MVP launch, creating modular widgets and customizable layout system.",
  },
]

export function Experience() {
  return (
    <div className="mx-auto w-full max-w-[940px]">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-hero-text-dark">
        Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experience.map((entry, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-hero-muted">
              {entry.period}
            </span>
            <h3 className="text-base font-semibold text-hero-text-dark">
              {entry.role}{" "}
              <span className="text-brand-accent">@ {entry.company}</span>
            </h3>
            <p className="max-w-[620px] text-sm leading-relaxed text-hero-muted">
              {entry.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
