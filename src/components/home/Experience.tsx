import { EXPERIENCE } from "@/lib/data/home"

export function Experience() {
  return (
    <div>
      <div className="bg-accent px-6 py-10 sm:py-12">
        <div className="border-b border-white/15 pb-8">
          <div className="max-w-[1000px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Experience
            </p>
            <h2 className="mt-3 font-heading text-[24px] font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-[36px] lg:text-[54px]">
              Product work with a bias toward shipping systems, not just screens.
            </h2>
          </div>
        </div>

        <div className="mt-10 md:mt-14 lg:mt-16 space-y-8 md:space-y-10">
          {EXPERIENCE.map((entry, i) => (
            <div
              key={i}
              className="grid border-b border-white/15 pb-6 md:pb-8 last:border-b-0 last:pb-0 md:grid-cols-[160px_minmax(0,1fr)] md:gap-x-16"
            >
              <div className="flex items-start gap-3 pt-1">
                <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-chartreuse" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  {entry.period}
                </span>
              </div>

              <div className="grid gap-3 md:gap-6 lg:gap-10 md:grid-cols-[minmax(0,400px)_minmax(0,1fr)] md:gap-x-12 lg:gap-x-16">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="mt-0.5 flex h-12 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white/90 shadow-sm border border-black/5 md:h-14 md:w-24 lg:h-16 lg:w-28">
                    <img
                      src={entry.logo}
                      alt={entry.company}
                      loading="lazy"
                      className="dropdown-logo h-full w-full object-contain p-1.5 md:p-2"
                      style={{ filter: "none" }}
                    />
                  </div>
                  <div>
                    <h3 className="text-body-lg font-semibold leading-tight text-white">
                      {entry.role}
                    </h3>
                    <p className="text-body font-medium text-white">{entry.company}</p>
                  </div>
                </div>

                <p className="max-w-[60ch] text-xs sm:text-body-lg leading-relaxed text-white">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
