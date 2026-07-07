const experience = [
  {
    period: "NOV '25 - APRIL 2026",
    role: "AI Product Designer",
    company: "XY.AI Labs",
    description:
      "Agentified a healthcare SaaS platform into a chat-driven product for self-serve onboarding and repeat daily use.",
  },
  {
    period: "MAY - NOV, 2025",
    role: "AI Product Designer",
    company: "Waldo",
    description:
      "Co-led the dual-platform healthcare experience across staff workflows, patient ordering, and prescription management.",
  },
  {
    period: "JUN - SEP, 2026",
    role: "AI Product Designer",
    company: "Reail",
    description:
      "Designed a desktop-first MVP for landlord risk intelligence and the investor-facing marketing site around it.",
  },
  {
    period: "APRIL - JUNE, 2026",
    role: "UX Designer",
    company: "Exelcius",
    description:
      "Reshaped the post-MVP product into modular widgets and a customizable layout system the team could extend.",
  },
]

export function Experience() {
  return (
    <div className="mx-auto w-full max-w-[940px] rounded-[30px] border border-black/5 bg-white/70 px-6 py-8 shadow-[0_20px_60px_rgba(25,25,30,0.04)] backdrop-blur-sm sm:px-8 sm:py-10">
      <div className="flex flex-col gap-3 border-b border-black/5 pb-7 md:flex-row md:items-end md:justify-between">
        <div className="max-w-[480px]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-hero-muted">
            Experience
          </p>
          <h2 className="mt-3 text-[28px] font-semibold leading-[1.05] tracking-[-0.03em] text-hero-text-dark sm:text-[34px]">
            Product work with a bias toward shipping systems, not just screens.
          </h2>
        </div>
        <p className="max-w-[280px] text-sm leading-relaxed text-hero-muted">
          Mostly early-stage and zero-to-one teams where design had to clarify the product as much as the UI.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {experience.map((entry, i) => (
          <div
            key={i}
            className="grid gap-4 border-b border-black/5 pb-6 last:border-b-0 last:pb-0 md:grid-cols-[170px_minmax(0,1fr)]"
          >
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-hero-muted">
                {entry.period}
              </span>
            </div>

            <div className="grid gap-2 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:gap-6">
              <div>
                <h3 className="text-[17px] font-semibold leading-tight text-hero-text-dark">
                  {entry.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-accent">{entry.company}</p>
              </div>

              <p className="max-w-[60ch] text-sm leading-relaxed text-hero-muted sm:text-body-sm">
                {entry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
