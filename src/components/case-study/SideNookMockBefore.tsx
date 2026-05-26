"use client"

import { motion } from "framer-motion"
import { Settings, Plus, Info } from "lucide-react"
import { NOISE_OVERLAY } from "@/lib/constants"

const ease = [0.22, 1, 0.36, 1] as const
const spring = { type: "spring" as const, stiffness: 280, damping: 22 }

type Tab = {
  title: string
  status: "active" | "waiting" | "idle"
}

const tabs: Tab[] = [
  { title: "~/portfolio", status: "active" },
  { title: "claude-code", status: "waiting" },
  { title: "sidenook · build", status: "idle" },
]

const statusColor: Record<Tab["status"], string> = {
  active: "bg-[#35d07f]",
  waiting: "bg-[#facc15]",
  idle: "bg-white/30",
}

type Row =
  | { kind: "prompt"; cwd: string; cmd: string; segments?: { text: string; color?: string }[]; highlight?: boolean }
  | { kind: "out"; text: string; dim?: boolean; accent?: boolean }
  | { kind: "blank" }
  | { kind: "cursor"; cwd: string }

const rows: Row[] = [
  { kind: "prompt", cwd: "portfolio", cmd: "npm run dev" },
  { kind: "out", text: "▲ Next.js 16.0.1", dim: true },
  { kind: "out", text: "  - Local:        http://localhost:3000", dim: true },
  { kind: "out", text: "  - Network:      http://192.168.1.24:3000", dim: true },
  { kind: "blank" },
  { kind: "out", text: "✓ Ready in 1.2s", accent: true },
  { kind: "blank" },
  {
    kind: "prompt",
    cwd: "portfolio",
    cmd: "git status",
    highlight: true,
  },
  { kind: "out", text: "On branch main", dim: true },
  { kind: "out", text: "Changes not staged for commit:" },
  { kind: "out", text: "  modified:  src/app/work/sidenook/page.tsx", dim: true },
  { kind: "out", text: "  modified:  src/components/case-study/SideNookMock.tsx", dim: true },
  { kind: "blank" },
  { kind: "cursor", cwd: "portfolio" },
]

function PromptLine({ cwd, children, highlight }: { cwd: string; children: React.ReactNode; highlight?: boolean }) {
  return (
    <div className={`relative flex gap-2 px-3 py-[2px] ${highlight ? "before:absolute before:inset-y-0 before:left-0 before:right-0 before:bg-[#7dd3fc]/[0.07] before:pointer-events-none" : ""}`}>
      <span className="relative text-[#7dd3fc]/90 shrink-0">~/{cwd}</span>
      <span className="relative text-white/40 shrink-0">$</span>
      <span className="relative text-white/95">{children}</span>
    </div>
  )
}

export function SideNookMockBefore() {
  return (
    <div className="relative">
      {/* Subtle desktop wallpaper background */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, #0d1320 0%, #15243d 50%, #20364f 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-[0.10] mix-blend-overlay"
        style={{ backgroundImage: NOISE_OVERLAY }}
      />

      <div className="relative p-6 sm:p-10 lg:p-14 flex flex-col items-stretch gap-6 lg:gap-10">
        {/* Caption row */}
        <div className="flex items-center justify-between text-label font-mono uppercase tracking-[0.2em] text-white/55">
          <span>SideNook · expanded panel</span>
          <span className="hidden sm:inline">v1.0 · macOS</span>
        </div>

        {/* The expanded panel */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto w-full max-w-[760px] rounded-[18px] overflow-hidden ring-1 ring-white/[0.10] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)_inset]"
          style={{ background: "#0f1115" }}
        >
          {/* NavBar */}
          <div className="flex items-center gap-2 px-3 py-2.5 bg-white/[0.03] border-b border-white/[0.06]">
            {/* Drag grip */}
            <div className="flex items-center gap-[3px] px-1.5 text-white/30">
              <span className="block h-3.5 w-[2px] rounded-full bg-current" />
              <span className="block h-3.5 w-[2px] rounded-full bg-current" />
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 min-w-0 flex-1">
              {tabs.map((t, i) => {
                const active = i === 0
                return (
                  <div
                    key={t.title}
                    className={`group flex items-center gap-2 pl-2.5 pr-2 py-1 rounded-md min-w-0 ${
                      active
                        ? "bg-white/[0.07] ring-1 ring-white/[0.08]"
                        : "hover:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`relative inline-flex h-1.5 w-1.5 shrink-0`}
                    >
                      {t.status === "waiting" && (
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#facc15]/60 animate-ping" />
                      )}
                      <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${statusColor[t.status]}`} />
                    </span>
                    <span
                      className={`text-label font-mono truncate ${
                        active ? "text-white/90" : "text-white/55"
                      }`}
                    >
                      {t.title}
                    </span>
                    <span className="text-white/25 text-label leading-none px-1 -mr-0.5">×</span>
                  </div>
                )
              })}
              <button
                aria-label="New tab"
                className="ml-1 p-1 text-white/30 hover:text-white/70 transition-colors"
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-0.5 text-white/35">
              <button aria-label="Settings" className="p-1.5 hover:text-white/70 transition-colors">
                <Settings className="h-3.5 w-3.5" />
              </button>
              <button aria-label="About" className="p-1.5 hover:text-white/70 transition-colors">
                <Info className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal body */}
          <div className="font-mono text-label leading-[1.65] py-3">
            {rows.map((r, i) => {
              if (r.kind === "blank") return <div key={i} className="h-[18px]" aria-hidden />
              if (r.kind === "prompt")
                return (
                  <PromptLine key={i} cwd={r.cwd} highlight={r.highlight}>
                    {r.cmd}
                  </PromptLine>
                )
              if (r.kind === "cursor")
                return (
                  <div key={i} className="flex gap-2 px-3 py-[2px] items-center">
                    <span className="text-[#7dd3fc]/90">~/{r.cwd}</span>
                    <span className="text-white/40">$</span>
                    <motion.span
                      aria-hidden
                      className="inline-block h-[14px] w-[7px] bg-[#35d07f] translate-y-[1px]"
                      animate={{ opacity: [1, 1, 0, 0] }}
                      transition={{ duration: 1.05, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                )
              return (
                <div
                  key={i}
                  className={`px-3 py-[2px] ${
                    r.accent ? "text-[#35d07f]" : r.dim ? "text-white/55" : "text-white/80"
                  }`}
                >
                  {r.text}
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Pill + transition footnote */}
        <div className="flex items-center justify-center gap-5 sm:gap-7 pt-1">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={spring}
            className="flex flex-col items-center gap-2"
          >
            <div className="h-1.5 w-12 rounded-full bg-white/30 ring-1 ring-white/[0.06]" />
            <span className="text-label font-mono uppercase tracking-[0.2em] text-white/45">
              Collapsed · 6pt
            </span>
          </motion.div>

          <div className="flex items-center text-white/35">
            <svg viewBox="0 0 24 8" className="h-2 w-10" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M0 4 H22 M18 1 L22 4 L18 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={spring}
            className="flex flex-col items-center gap-2"
          >
            <div className="h-3 w-20 rounded-md bg-white/40 ring-1 ring-white/[0.10]" />
            <span className="text-label font-mono uppercase tracking-[0.2em] text-white/45">
              Expanded · spring
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
