"use client"

import { motion } from "framer-motion"
import {
  Plus,
  Sun,
  Pin,
  Settings,
  PanelTop,
  MessageSquare,
  Info,
  ChevronDown,
  ChevronUp,
  Asterisk,
  CircleDot,
} from "lucide-react"
import { NOISE_OVERLAY } from "@/lib/constants"

const ease = [0.22, 1, 0.36, 1] as const

// Color tokens approximating NookTheme dark mode (L0 outermost → L3 active tab)
const tone = {
  L0: "#0c1322",
  L1: "#131c30",
  L2: "#0f1828",
  L3: "#1a2540",
  stroke0: "rgba(255,255,255,0.06)",
  stroke1: "rgba(255,255,255,0.05)",
  stroke3: "rgba(255,255,255,0.10)",
  fg: "#e7ebf2",
  fgMid: "#a9b0bf",
  fgMute: "#5b6478",
  ctaBg: "#1d3050",
  dotLive: "#22c55e",
  link: "#7dd3fc",
  cursorBlock: "#e7ebf2",
}

function TrafficLights() {
  return (
    <div className="flex items-center gap-[6px] pl-2">
      <span className="block h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
      <span className="block h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
      <span className="block h-[11px] w-[11px] rounded-full bg-[#28c840]" />
    </div>
  )
}

function SidebarIconButton({
  children,
  active,
  cta,
}: {
  children: React.ReactNode
  active?: boolean
  cta?: boolean
}) {
  return (
    <span
      className="flex-1 h-8 inline-flex items-center justify-center rounded-lg"
      style={{
        background: cta ? tone.ctaBg : active ? "rgba(255,255,255,0.06)" : "transparent",
        color: cta ? tone.fg : active ? tone.fg : tone.fgMute,
      }}
    >
      {children}
    </span>
  )
}

function Divider() {
  return <span className="block h-px w-full" style={{ background: tone.stroke1 }} />
}

function PixelCrab() {
  // Stylized 12×9 pixel critter — peach/coral, evokes the Claude Code mascot in screenshot
  const C = "#d99578"
  const D = "#a86852"
  const E = "#ffffff"
  const B = "#1a1d22"
  const px = (x: number, y: number, c: string) => (
    <rect key={`${x}-${y}`} x={x * 8} y={y * 8} width="8" height="8" fill={c} />
  )
  const grid: (string | null)[][] = [
    [null, null, C, C, C, C, C, C, C, C, null, null],
    [null, C, C, C, C, C, C, C, C, C, C, null],
    [C, C, C, C, C, C, C, C, C, C, C, C],
    [C, C, E, B, C, C, C, C, B, E, C, C],
    [C, C, E, B, C, C, C, C, B, E, C, C],
    [C, C, C, C, C, C, C, C, C, C, C, C],
    [D, C, C, C, C, C, C, C, C, C, C, D],
    [D, null, null, C, C, null, null, C, C, null, null, D],
    [D, null, null, null, null, null, null, null, null, null, null, D],
  ]
  return (
    <svg viewBox="0 0 96 72" className="h-12 w-16 shrink-0" aria-hidden>
      {grid.flatMap((row, y) =>
        row.map((c, x) => (c ? px(x, y, c) : null))
      )}
    </svg>
  )
}

export function SideNookMockAfter() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl"
        style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #0e1626 60%, #131e33 100%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-[0.08] mix-blend-overlay"
        style={{ backgroundImage: NOISE_OVERLAY }}
      />

      <div className="relative p-6 sm:p-10 lg:p-14 flex flex-col gap-6">
        <div className="flex items-center justify-between text-label font-mono uppercase tracking-[0.2em] text-white/55">
          <span>SideNook · expanded panel · v1.0</span>
          <span className="hidden sm:inline">Left sidebar layout</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto w-full max-w-[860px] rounded-[14px] overflow-hidden ring-1 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.04)_inset] flex"
          style={{ background: tone.L0, ringColor: tone.stroke0 } as React.CSSProperties}
        >
          {/* LEFT SIDEBAR — 180pt wide, L2 fill, 10pt rounded, with 8pt outer gutter */}
          <div className="p-2 shrink-0">
            <div
              className="w-[180px] h-full flex flex-col rounded-[10px] ring-1"
              style={{ background: tone.L2, borderColor: tone.stroke1 }}
            >
              {/* Traffic lights row */}
              <div className="h-8 flex items-center justify-between pr-1">
                <TrafficLights />
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-md text-white/35">
                  <PanelTop className="h-3.5 w-3.5" />
                </span>
              </div>
              <Divider />

              {/* Action row — 4 buttons, + is CTA */}
              <div className="px-2 py-1 flex items-center gap-1">
                <SidebarIconButton cta>
                  <Plus className="h-4 w-4" strokeWidth={2.4} />
                </SidebarIconButton>
                <SidebarIconButton>
                  <Sun className="h-4 w-4" />
                </SidebarIconButton>
                <SidebarIconButton active>
                  <Pin className="h-4 w-4" style={{ transform: "rotate(-30deg)" }} />
                </SidebarIconButton>
                <SidebarIconButton>
                  <Settings className="h-4 w-4" />
                </SidebarIconButton>
              </div>
              <Divider />

              {/* Tab list */}
              <div className="px-2 py-2 space-y-1">
                <div
                  className="h-8 px-2 rounded-lg flex items-center gap-2 ring-1"
                  style={{ background: tone.L3, borderColor: tone.stroke3 }}
                >
                  <span
                    aria-hidden
                    className="h-2 w-2 rounded-full shrink-0"
                    style={{
                      background: tone.dotLive,
                      boxShadow: `0 0 6px 1px ${tone.dotLive}88`,
                    }}
                  />
                  <Asterisk className="h-3 w-3 text-white/85 shrink-0" strokeWidth={2.5} />
                  <span className="text-label font-semibold text-white/90 truncate flex-1">
                    Claude Code
                  </span>
                  <span
                    className="h-4 w-4 rounded-full inline-flex items-center justify-center text-label text-white/55 leading-none"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    ×
                  </span>
                </div>
              </div>

              {/* Spacer pushing footer items down */}
              <div className="flex-1" />

              {/* CL Notes section */}
              <div className="px-3 py-2.5 flex items-center gap-2 text-label" style={{ color: tone.fgMid }}>
                <MessageSquare className="h-3.5 w-3.5 shrink-0" />
                <span className="font-semibold flex-1 truncate text-white/85">CL Notes</span>
                <span className="text-label tabular-nums" style={{ color: tone.fgMute }}>
                  30/100
                </span>
                <ChevronDown className="h-3 w-3" style={{ color: tone.fgMute }} />
              </div>
              <Divider />

              {/* Command Line Help */}
              <div className="px-3 py-2.5 flex items-center gap-2 text-label" style={{ color: tone.fgMid }}>
                <Info className="h-3.5 w-3.5 shrink-0" />
                <span className="font-semibold flex-1 truncate text-white/85">Command Line Help</span>
                <ChevronDown className="h-3 w-3" style={{ color: tone.fgMute }} />
              </div>
              <Divider />

              {/* Footer label */}
              <div
                className="px-3 py-2 text-label font-mono"
                style={{ color: tone.fgMute }}
              >
                SideNook v1.0
              </div>
            </div>
          </div>

          {/* RIGHT — Terminal pane */}
          <div className="flex-1 min-w-0 flex flex-col pr-2 pt-4 pb-2 relative">
            <div className="font-mono text-label leading-[1.55]" style={{ color: tone.fg }}>
              {/* Splash header */}
              <div className="flex items-start gap-4 px-4 pt-1 pb-3">
                <PixelCrab />
                <div className="min-w-0">
                  <div>
                    <span className="font-semibold">Claude Code</span>{" "}
                    <span style={{ color: tone.fgMid }}>v2.1.117</span>
                  </div>
                  <div style={{ color: tone.fgMid }}>
                    Opus 4.7 (1M context) with med…
                  </div>
                  <div style={{ color: tone.fgMid }}>Claude Max</div>
                  <div style={{ color: tone.fgMute }}>/</div>
                </div>
              </div>

              {/* Input bracket — top divider */}
              <div className="mx-4 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />

              {/* Input row */}
              <div className="px-4 py-3 flex items-center gap-2">
                <span style={{ color: tone.fgMid }}>›</span>
                <motion.span
                  aria-hidden
                  className="inline-block h-[14px] w-[7px]"
                  style={{ background: tone.cursorBlock, transform: "translateY(1px)" }}
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{ duration: 1.05, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Bottom divider */}
              <div className="mx-4 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />

              {/* Status row */}
              <div className="px-4 pt-2 flex items-center gap-6 text-[11.5px]" style={{ color: tone.fgMute }}>
                <span>? for shortcuts</span>
                <span className="inline-flex items-center gap-1.5">
                  <CircleDot className="h-3 w-3" />
                  medium · /effort
                </span>
                <span className="ml-auto inline-flex items-center gap-1.5" style={{ color: tone.link }}>
                  <span className="inline-block h-3 w-3 rounded-sm border border-current" />
                  In TerminalSession.swift
                </span>
              </div>
            </div>

            {/* Floating scroll chevrons */}
            <div className="absolute right-3 bottom-3 flex flex-col gap-2">
              <span
                className="h-7 w-7 rounded-full inline-flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.05)", color: tone.fgMid }}
              >
                <ChevronUp className="h-3.5 w-3.5" />
              </span>
              <span
                className="h-7 w-7 rounded-full inline-flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.05)", color: tone.fgMid }}
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
