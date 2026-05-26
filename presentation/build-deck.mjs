import PptxGenJS from "pptxgenjs";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

const PUBLIC = "/Users/jacki/Documents/My-vault/My-projects/portfolio-2/public";

function img(p) {
  const full = PUBLIC + p;
  if (!existsSync(full)) {
    console.warn("MISSING:", full);
    return null;
  }
  return full;
}

// ── helpers ──
const W = 13.333; // 16:9
const H = 7.5;
const M = 0.5; // margin
const COL = (W - M * 2) / 2; // half column width
const GAP = 0.4;
const PURPLE = "3B3066";
const NAVY = "1A1A2E";
const WARM = "F5F4F0";
const WHITE = "FFFFFF";
const DARK_TEXT = "2D2D2D";
const MUTED = "888888";

function newSlide(prs, bg) {
  const s = prs.addSlide();
  s.background = { color: bg || WHITE };
  return s;
}

function title(slide, text, opts = {}) {
  slide.addText(text, {
    x: M, y: M, w: W - M * 2, h: 0.7,
    fontSize: 36, fontFace: "Georgia", bold: true, color: PURPLE,
    align: "left", valign: "top",
    ...opts,
  });
}

function body(slide, text, opts = {}) {
  slide.addText(text, {
    x: M, y: 1.4, w: W - M * 2, h: H - 2.2,
    fontSize: 15, fontFace: "Calibri", color: DARK_TEXT,
    lineSpacingMultiple: 1.35, valign: "top",
    ...opts,
  });
}

function bodySmall(text) {
  return { fontSize: 12, fontFace: "Calibri", color: MUTED, lineSpacingMultiple: 1.3 };
}

function addLogoRow(slide, files, y) {
  const lw = 0.5;
  const totalW = files.length * lw + (files.length - 1) * 0.12;
  const startX = (W - totalW) / 2;
  files.forEach((f, i) => {
    const p = img(f);
    if (p) {
      slide.addImage({ path: p, x: startX + i * (lw + 0.12), y, w: lw, h: lw * 0.6, sizing: { type: "contain", w: lw, h: lw * 0.6 } });
    }
  });
}

function addLogoRowRight(slide, files, y) {
  const lw = 0.5;
  const totalW = files.length * lw + (files.length - 1) * 0.12;
  const startX = W - M - totalW;
  files.forEach((f, i) => {
    const p = img(f);
    if (p) {
      slide.addImage({ path: p, x: startX + i * (lw + 0.12), y, w: lw, h: lw * 0.6, sizing: { type: "contain", w: lw, h: lw * 0.6 } });
    }
  });
}

// ── deck ──
const prs = new PptxGenJS();
prs.defineLayout({ name: "WIDE", width: W, height: H });
prs.layout = "WIDE";

// ──────────────────────── SLIDE 1: Cover ────────────────────────
{
  const s = prs.addSlide();
  s.background = { color: NAVY };
  s.addText("Jacki Torres", {
    x: M, y: 1.5, w: W - M * 2, h: 1,
    fontSize: 44, fontFace: "Georgia", bold: true, color: WHITE, align: "left",
  });
  s.addText("Senior Product Designer  |  Healthtech + AI", {
    x: M, y: 2.6, w: W - M * 2, h: 0.5,
    fontSize: 18, fontFace: "Calibri", color: "BBBBBB", align: "left",
  });
  s.addText("Portfolio Deep Dive — Jiro Health", {
    x: M, y: 3.2, w: W - M * 2, h: 0.4,
    fontSize: 14, fontFace: "Calibri Light", color: "999999", align: "left",
  });
  s.addText("May 2026", {
    x: M, y: 3.7, w: W - M * 2, h: 0.3,
    fontSize: 12, fontFace: "Calibri Light", color: "777777", align: "left",
  });
  s.addText("jackelinetorres.co", {
    x: M, y: H - 0.7, w: W - M * 2, h: 0.4,
    fontSize: 13, fontFace: "Calibri", color: "888888", align: "left",
  });
}

// ──────────────────────── SLIDE 2: One-line version ────────────────────────
{
  const s = newSlide(prs);
  s.addText([
    { text: "Architecture taught me systems.\n", options: { fontSize: 20, fontFace: "Georgia", color: DARK_TEXT, lineSpacingMultiple: 1.4 } },
    { text: "Product design taught me how to ship.\n", options: { fontSize: 20, fontFace: "Georgia", color: PURPLE, lineSpacingMultiple: 1.4 } },
    { text: "Healthtech and AI taught me what's actually at stake.\n\n", options: { fontSize: 20, fontFace: "Georgia", color: DARK_TEXT, lineSpacingMultiple: 1.4 } },
    { text: "Sole designer twice. Building from zero. Working directly with CPOs and CEOs. Shipping before the foundation was ready — then building the foundation anyway.", options: { fontSize: 15, fontFace: "Calibri", color: MUTED, lineSpacingMultiple: 1.35 } },
  ], { x: M + 0.3, y: 1.8, w: W - M * 2 - 0.6, h: 4, valign: "top" });
}

// ──────────────────────── SLIDE 3: Why I care ────────────────────────
{
  const s = newSlide(prs);
  title(s, "Why I care about healthtech");
  body(s, [
    { text: "My grandmother and mother don't speak English. I've been their healthcare translator for as long as I can remember — appointments, discharge instructions, prescriptions.\n\n", options: { fontSize: 15, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.35 } },
    { text: "That's not a niche problem. It's a systemic one. It's why I'm in this space.\n\n", options: { fontSize: 15, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.35 } },
    { text: "I'm currently building a live voice translation app for non-English speakers in clinical settings. Not a side project — a design conviction.\n\n", options: { fontSize: 15, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.35 } },
    { text: "Healthcare software has a trust problem, a complexity problem, and a communication problem. That's exactly where I want to work.", options: { fontSize: 16, fontFace: "Calibri", bold: true, color: PURPLE, lineSpacingMultiple: 1.35 } },
  ]);
}

// ──────────────────────── SLIDE 4: How I work ────────────────────────
{
  const s = newSlide(prs);
  title(s, "How I work");
  s.addText("Four things that don't change regardless of the project", {
    x: M, y: 0.85, w: W - M * 2, h: 0.35,
    fontSize: 12, fontFace: "Calibri Light", color: MUTED,
  });

  const cards = [
    { h: "Foundation before velocity", b: "Design system, component library, handoff process. If those aren't solid, every sprint pays for it." },
    { h: "Design + code in lockstep", b: "Same tools as engineers. Same language. No wall between design and dev." },
    { h: "Problems before solutions", b: "Jumping to solutions is the fastest way to build the wrong thing. I push back." },
    { h: "Feedback as infrastructure", b: "User research as a habit, not a project. Fast, lightweight, tied to what ships next." },
  ];

  const cardH = 1.2;
  const gap = 0.25;
  const startY = 1.5;
  cards.forEach((c, i) => {
    const y = startY + i * (cardH + gap);
    s.addShape(prs.ShapeType.rect, {
      x: M, y, w: W - M * 2, h: cardH,
      fill: { color: WARM }, rectRadius: 0.1,
    });
    s.addText(c.h, {
      x: M + 0.3, y: y + 0.1, w: W - M * 2 - 0.6, h: 0.35,
      fontSize: 14, fontFace: "Calibri", bold: true, color: PURPLE, align: "left", valign: "top",
    });
    s.addText(c.b, {
      x: M + 0.3, y: y + 0.45, w: W - M * 2 - 0.6, h: 0.65,
      fontSize: 12.5, fontFace: "Calibri", color: DARK_TEXT, align: "left", valign: "top", lineSpacingMultiple: 1.25,
    });
  });

  // tool logos at bottom
  addLogoRow(s, ["/logos/figma.png", "/logos/claude-code.png", "/logos/claude-chat.png", "/logos/cursor.png", "/logos/storybook.svg", "/logos/linear.svg"], H - 0.7);
}

// ──────────────────────── SLIDE 5: How AI changed my process ────────────────────────
{
  const s = newSlide(prs);
  title(s, "How AI changed my process");
  s.addText("The tools changed. The craft didn't.", {
    x: M, y: 0.85, w: W - M * 2, h: 0.35,
    fontSize: 12, fontFace: "Calibri Light", color: MUTED,
  });

  const cards = [
    { h: "Before: Linear by default", b: "Figma → handoff → wait. Research took days. Prototyping was a separate phase. Feedback loops were batch, not continuous." },
    { h: "Shift: AI enters the workflow", b: "ChatGPT for research synthesis. V0 for rapid prototyping. Claude Code for design-in-code exploration. The wall between thinking and making started dissolving." },
    { h: "Now: AI-native pipeline", b: "Figma → Cursor → Claude Code → Storybook in a continuous loop. Research, prototype, code, review in hours instead of weeks." },
    { h: "Result: Higher quality, faster", b: "More time on the problem, less time on production. AI handles the plumbing; I focus on the system, the interaction, and the user." },
  ];

  const cardH = 1.2;
  const gap = 0.25;
  const startY = 1.5;
  cards.forEach((c, i) => {
    const y = startY + i * (cardH + gap);
    s.addShape(prs.ShapeType.rect, {
      x: M, y, w: W - M * 2, h: cardH,
      fill: { color: WARM }, rectRadius: 0.1,
    });
    s.addText(c.h, {
      x: M + 0.3, y: y + 0.1, w: W - M * 2 - 0.6, h: 0.35,
      fontSize: 14, fontFace: "Calibri", bold: true, color: PURPLE, align: "left", valign: "top",
    });
    s.addText(c.b, {
      x: M + 0.3, y: y + 0.45, w: W - M * 2 - 0.6, h: 0.65,
      fontSize: 12.5, fontFace: "Calibri", color: DARK_TEXT, align: "left", valign: "top", lineSpacingMultiple: 1.25,
    });
  });

  // tool logos at bottom
  addLogoRow(s, ["/logos/figma.png", "/logos/cursor.png", "/logos/claude-code.png", "/logos/storybook.svg", "/logos/chatgpt.svg", "/logos/perplexity.svg"], H - 0.7);
}

// ──────────────────────── SLIDE 6: Why Jiro, why now ────────────────────────
{
  const s = newSlide(prs);
  title(s, "Why Jiro, why now");
  body(s, [
    { text: "Jiro gives independent clinicians practice intelligence that's usually locked inside larger health systems. That's an equity problem dressed as a data problem.\n\n", options: { fontSize: 15, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.35 } },
    { text: "When I talked to Chris, I recognized the situation: a team shipping real product, moving fast, but stretched too thin to build the foundation underneath.\n\n", options: { fontSize: 15, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.35 } },
    { text: "I've been there twice. Pre-scale, post-MVP is exactly where getting the foundation right determines your next two years.", options: { fontSize: 16, fontFace: "Calibri", bold: true, color: PURPLE, lineSpacingMultiple: 1.35 } },
  ]);
}

// ──────────────────────── SLIDE 7: First 90 days ────────────────────────
{
  const s = newSlide(prs);
  title(s, "First 90 days");
  s.addText("How I'd approach it", {
    x: M, y: 0.85, w: W - M * 2, h: 0.35,
    fontSize: 12, fontFace: "Calibri Light", color: MUTED,
  });

  const phases = [
    { label: "Days 1–30", h: "Audit and align", b: "Map every component in Figma against code. Document gaps. Ship one quick win." },
    { label: "Days 31–60", h: "Install the feedback loop", b: "Lightweight post-MVP testing with clinicians. A research habit, not a program." },
    { label: "Days 61–90", h: "Fix upstream", b: "Problem definition before anyone opens a tool. Ideation-to-code workflow so nothing is throwaway." },
  ];

  const cardH = 1.5;
  const gap = 0.3;
  const startY = 1.4;
  phases.forEach((p, i) => {
    const y = startY + i * (cardH + gap);
    s.addShape(prs.ShapeType.rect, {
      x: M, y, w: 0.06, h: cardH,
      fill: { color: PURPLE },
    });
    s.addShape(prs.ShapeType.rect, {
      x: M + 0.06, y, w: W - M * 2 - 0.06, h: cardH,
      fill: { color: WARM },
    });
    s.addText(p.label, {
      x: M + 0.25, y: y + 0.08, w: 1.2, h: 0.3,
      fontSize: 11, fontFace: "Calibri", bold: true, color: PURPLE, align: "left", valign: "top",
    });
    s.addText(p.h, {
      x: M + 0.25, y: y + 0.35, w: W - M * 2 - 0.5, h: 0.3,
      fontSize: 15, fontFace: "Georgia", bold: true, color: DARK_TEXT, align: "left", valign: "top",
    });
    s.addText(p.b, {
      x: M + 0.25, y: y + 0.7, w: W - M * 2 - 0.5, h: 0.7,
      fontSize: 12.5, fontFace: "Calibri", color: DARK_TEXT, align: "left", valign: "top", lineSpacingMultiple: 1.25,
    });
  });
}

// ──────────────────────── TRANSITION 1 ────────────────────────
{
  const s = prs.addSlide();
  s.background = { color: NAVY };
  s.addText("Let me show you how I work.", {
    x: M, y: 2.5, w: W - M * 2, h: 1.5,
    fontSize: 36, fontFace: "Georgia", bold: true, italic: true, color: WHITE, align: "center", valign: "middle",
  });
}

// ──────────────────────── SLIDE 9: XY Context & Problem ────────────────────────
{
  const s = newSlide(prs);
  title(s, "XY Corp: Context & Problem");

  s.addText([
    { text: "AI agents handle verification, scheduling, and claims for healthcare operations teams.\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3 } },
    { text: "The agents worked. The setup didn't — configuring them required a sales call.\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3 } },
    { text: "My job: make AI orchestration something healthcare teams could set up themselves. Four months, sole designer.", options: { fontSize: 14, fontFace: "Calibri", bold: true, color: PURPLE, lineSpacingMultiple: 1.3 } },
  ], { x: M, y: 1.3, w: COL + 0.5, h: 5.5, valign: "top" });

  const ut = img("/xy/user-types.png");
  if (ut) {
    s.addImage({ path: ut, x: COL + 1.0, y: 1.3, w: COL - 0.5, h: 3.8, sizing: { type: "contain", w: COL - 0.5, h: 3.8 } });
  }
}

// ──────────────────────── SLIDE 10: XY My Role ────────────────────────
{
  const s = newSlide(prs);
  title(s, "XY Corp: My Role");
  s.addText("What I owned", {
    x: M, y: 0.85, w: W - M * 2, h: 0.35,
    fontSize: 12, fontFace: "Calibri Light", color: MUTED,
  });

  const roles = [
    { icon: "◉", text: "Sole product designer, reporting directly to CPO and CEO. Team of four engineers." },
    { icon: "◉", text: "I owned the full surface: AI agent orchestration UI, component library, design system, and design-to-engineering pipeline." },
    { icon: "◉", text: "None of it existed when I joined. I built the foundation and the workflow together." },
  ];

  const rh = 0.9;
  const rgap = 0.2;
  roles.forEach((r, i) => {
    const ry = 1.5 + i * (rh + rgap);
    s.addShape(prs.ShapeType.rect, {
      x: M, y: ry, w: W - M * 2, h: rh,
      fill: { color: WARM },
    });
    s.addText(r.text, {
      x: M + 0.3, y: ry + 0.1, w: W - M * 2 - 0.6, h: rh - 0.2,
      fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, valign: "top", lineSpacingMultiple: 1.3,
    });
  });

  // tool logos
  addLogoRowRight(s, ["/logos/figma.png", "/logos/cursor.png", "/logos/github.png", "/logos/linear.svg", "/logos/claude-code.png"], H - 0.7);
}

// ──────────────────────── SLIDE 11: XY What I found ────────────────────────
{
  const s = newSlide(prs);
  title(s, "XY Corp: What I found");

  const xp = img("/xy/xy-platform.png");
  if (xp) {
    s.addImage({ path: xp, x: W - M - COL + 0.3, y: 1.1, w: COL - 0.3, h: 5.0, sizing: { type: "contain", w: COL - 0.3, h: 5.0 } });
  }

  s.addText([
    { text: "The underlying system was powerful. The surface was the bottleneck.\n\n", options: { fontSize: 13, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3 } },
    { text: "Three blockers:\n", options: { fontSize: 13, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3 } },
    { text: "1.  Every agent config required a human facilitator\n2.  The UI was built for engineers, not healthcare teams\n3.  Orchestrating multiple agents meant a sales call", options: { fontSize: 13, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.4 } },
  ], { x: M, y: 1.1, w: COL + 0.2, h: 5.5, valign: "top" });
}

// ──────────────────────── SLIDE 12: XY Key Decision ────────────────────────
{
  const s = newSlide(prs);
  title(s, "XY Corp: The reframe that changed everything");

  const cardW = (W - M * 2 - 0.3) / 2;
  // Before
  s.addShape(prs.ShapeType.rect, {
    x: M, y: 1.5, w: cardW, h: 3.0,
    fill: { color: WARM },
  });
  s.addText("BEFORE  —  FORMS", {
    x: M + 0.2, y: 1.6, w: cardW - 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri", bold: true, color: MUTED,
  });
  s.addText("Initial brief: improve the configuration UI. Users navigate forms, understand agent models, make decisions they lack context for.", {
    x: M + 0.2, y: 2.1, w: cardW - 0.4, h: 2.2,
    fontSize: 13, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3, valign: "top",
  });

  // AFTER
  s.addShape(prs.ShapeType.rect, {
    x: M + cardW + 0.3, y: 1.5, w: cardW, h: 3.0,
    fill: { color: PURPLE },
  });
  s.addText("AFTER  —  CHAT", {
    x: M + cardW + 0.5, y: 1.6, w: cardW - 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri", bold: true, color: "FFFFFF",
  });
  s.addText("Conversational layer. Users describe what they need. System routes to the right agent. A multi-hour call becomes a 5-minute conversation.", {
    x: M + cardW + 0.5, y: 2.1, w: cardW - 0.4, h: 2.2,
    fontSize: 13, fontFace: "Calibri", color: "FFFFFF", lineSpacingMultiple: 1.3, valign: "top",
  });

  s.addText("Healthcare teams don't think in configurations. They think in tasks.", {
    x: M, y: 4.8, w: W - M * 2, h: 0.5,
    fontSize: 16, fontFace: "Georgia", bold: true, italic: true, color: PURPLE, align: "center",
  });
}

// ──────────────────────── SLIDE 13: XY Process & Exploration ────────────────────────
{
  const s = newSlide(prs);
  title(s, "XY Corp: Process & Exploration");

  const dirs = [
    { label: "Forms-first", desc: "Clean up existing configuration UI. Lower risk — but users still need to understand the agent model.", tag: "Lower risk" },
    { label: "Wizard / guided", desc: "Step-by-step onboarding. Better than forms but requires decisions users lack context for.", tag: "Middle ground" },
    { label: "Chat-first ✓", desc: "Users describe intent in natural language. System interprets and routes. The only pattern matching how healthcare teams communicate.", tag: "The winner" },
  ];

  const dw = (W - M * 2 - 0.4) / 3;
  dirs.forEach((d, i) => {
    const dx = M + i * (dw + 0.2);
    s.addShape(prs.ShapeType.rect, {
      x: dx, y: 1.3, w: dw, h: 4.5,
      fill: { color: i === 2 ? PURPLE : WARM },
    });
    s.addShape(prs.ShapeType.roundRect, {
      x: dx + 0.15, y: 1.5, w: 1.2, h: 0.3,
      fill: { color: i === 2 ? "FFFFFF" : PURPLE },
      rectRadius: 0.15,
    });
    s.addText(d.tag.toUpperCase(), {
      x: dx + 0.15, y: 1.5, w: 1.2, h: 0.3,
      fontSize: 8, fontFace: "Calibri", bold: true, color: i === 2 ? PURPLE : WHITE, align: "center", valign: "middle",
    });
    s.addText(d.label, {
      x: dx + 0.15, y: 2.0, w: dw - 0.3, h: 0.4,
      fontSize: 15, fontFace: "Georgia", bold: true, color: i === 2 ? WHITE : DARK_TEXT,
    });
    s.addText(d.desc, {
      x: dx + 0.15, y: 2.5, w: dw - 0.3, h: 2.8,
      fontSize: 12, fontFace: "Calibri", color: i === 2 ? "DDDDDD" : DARK_TEXT, lineSpacingMultiple: 1.3, valign: "top",
    });
  });

  s.addText("I pressure-tested chat-first with the CPO and two customer conversations. Healthcare ops teams speak conversational — forms are the foreign language.", {
    x: M, y: 6.0, w: W - M * 2, h: 0.7,
    fontSize: 12, fontFace: "Calibri Light", italic: true, color: MUTED, lineSpacingMultiple: 1.25,
  });
}

// ──────────────────────── SLIDE 14: XY What I built ────────────────────────
{
  const s = newSlide(prs);
  title(s, "XY Corp: What I built");

  const items = [
    { n: "01", h: "AI agent orchestration via chat", b: "Three agents, one conversation. Users describe needs, system routes, actions confirmed — no config required." },
    { n: "02", h: "60+ production-ready components", b: "Agent cards, workflow indicators, extraction previews for fullscreen, sidebar, and embedded contexts." },
    { n: "03", h: "First design system", b: "8px grid, semantic tokens, typography, spacing, motion docs. Engineers pulled directly from Storybook." },
    { n: "04", h: "AI-native pipeline", b: "Figma → Figma Make → GitHub → Engineering. Prototype to production in hours." },
  ];

  const cw2 = (W - M * 2 - 0.3) / 2;
  const ch2 = 2.0;
  items.forEach((item, i) => {
    const colIdx = i % 2;
    const rowIdx = Math.floor(i / 2);
    const cx = M + colIdx * (cw2 + 0.3);
    const cy = 1.3 + rowIdx * (ch2 + 0.25);

    s.addShape(prs.ShapeType.rect, {
      x: cx, y: cy, w: cw2, h: ch2,
      fill: { color: WARM },
    });
    s.addText(item.n, {
      x: cx + 0.15, y: cy + 0.08, w: 0.5, h: 0.3,
      fontSize: 11, fontFace: "Calibri", bold: true, color: PURPLE,
    });
    s.addText(item.h, {
      x: cx + 0.15, y: cy + 0.4, w: cw2 - 0.3, h: 0.35,
      fontSize: 13, fontFace: "Calibri", bold: true, color: DARK_TEXT, valign: "top",
    });
    s.addText(item.b, {
      x: cx + 0.15, y: cy + 0.8, w: cw2 - 0.3, h: 1.1,
      fontSize: 11.5, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.25, valign: "top",
    });
  });

  // Storybook image at bottom
  const sb = img("/xy/storybook.png");
  if (sb) {
    s.addImage({ path: sb, x: W - M - 3.5, y: H - 2.0, w: 3.5, h: 1.8, sizing: { type: "contain", w: 3.5, h: 1.8 } });
    s.addText("60+ components, production-wired to Temporal", {
      x: M, y: H - 1.7, w: W - M - 4.0, h: 0.4,
      fontSize: 10, fontFace: "Calibri Light", italic: true, color: MUTED, align: "right",
    });
  }
}

// ──────────────────────── SLIDE 15: XY Impact ────────────────────────
{
  const s = newSlide(prs);
  title(s, "XY Corp: Impact");

  s.addShape(prs.ShapeType.rect, {
    x: M + 0.5, y: 1.5, w: W - M * 2 - 1.0, h: 1.8,
    fill: { color: PURPLE },
  });
  s.addText("\"Your design instinct is really strong, and that's hard to teach. The visual design combined with the UX — you did some really good work here.\"", {
    x: M + 0.8, y: 1.6, w: W - M * 2 - 1.6, h: 1.2,
    fontSize: 16, fontFace: "Georgia", bold: true, italic: true, color: WHITE, lineSpacingMultiple: 1.3, valign: "middle",
  });
  s.addText("— Scott Cressman, CPO at XY", {
    x: M + 0.8, y: 2.9, w: W - M * 2 - 1.6, h: 0.3,
    fontSize: 11, fontFace: "Calibri", color: "AAAAAA", align: "right",
  });

  const impacts = [
    "Self-serve AI orchestration became a core sales asset. The CEO pitched it directly to enterprise customers.",
    "Components were production-wired to Temporal for live agent orchestration, not prototypes.",
    "Users: \"This makes perfect sense. Complex flows made chat-friendly.\"",
  ];
  impacts.forEach((imp, i) => {
    const iy = 3.6 + i * 0.6;
    s.addText("▸  " + imp, {
      x: M + 0.3, y: iy, w: W - M * 2 - 0.6, h: 0.55,
      fontSize: 12, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.25, valign: "top",
    });
  });
}

// ──────────────────────── SLIDE 16: XY What I'd do differently ────────────────────────
{
  const s = newSlide(prs);
  title(s, "XY Corp: What I'd do differently");

  s.addShape(prs.ShapeType.rect, {
    x: M, y: 1.3, w: W - M * 2, h: 4.5,
    fill: { color: WARM },
  });

  s.addText([
    { text: "I built fast and I built real — but I was heads down with the CPO and didn't have enough visibility into what engineering was building in parallel.\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.35 } },
    { text: "Components were created for demos I never saw. The design system and codebase drifted faster than I could close the gap.\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.35 } },
    { text: "If I did it again: ", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.35 } },
    { text: "A weekly 15-minute design-engineering sync, starting day one.\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.35 } },
    { text: "That's exactly what I'd bring to Jiro.", options: { fontSize: 15, fontFace: "Calibri", bold: true, color: PURPLE, lineSpacingMultiple: 1.35 } },
  ], { x: M + 0.3, y: 1.5, w: W - M * 2 - 0.6, h: 4.0, valign: "top" });
}

// ──────────────────────── TRANSITION 2 ────────────────────────
{
  const s = prs.addSlide();
  s.background = { color: NAVY };
  s.addText("A few other things I've built.", {
    x: M, y: 2.5, w: W - M * 2, h: 1.5,
    fontSize: 36, fontFace: "Georgia", bold: true, italic: true, color: WHITE, align: "center", valign: "middle",
  });
}

// ──────────────────────── SLIDE 18: Waldo Health ────────────────────────
{
  const s = newSlide(prs);
  title(s, "Waldo Health — Zero-to-one patient app");

  const dash = img("/waldo/journey-map-preview.png") || img("/waldo/dashboard.png") || img("/waldo/prescriptions-list.png");
  if (dash) {
    s.addImage({ path: dash, x: W - M - COL + 0.3, y: 1.2, w: COL - 0.3, h: 5.0, sizing: { type: "contain", w: COL - 0.3, h: 5.0 } });
  }

  s.addText([
    { text: "Eye care company (acquired by Specsavers) selling prescription contacts DTC.\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3 } },
    { text: "Sole designer on the patient app. Doctor portal on one side, patient app on the other — a dual ecosystem.\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3 } },
    { text: "Owned 100% from zero: research, IA, flows, high-fidelity UI, handoff.\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3 } },
    { text: "Delivered 1 month early on a $5 V0 credits budget.", options: { fontSize: 15, fontFace: "Georgia", bold: true, color: PURPLE, lineSpacingMultiple: 1.3 } },
  ], { x: M, y: 1.2, w: COL + 0.2, h: 5.5, valign: "top" });
}

// ──────────────────────── SLIDE 19: Other work ────────────────────────
{
  const s = newSlide(prs);
  title(s, "More from the portfolio");

  const projects = [
    { name: "7dish", tag: "FOODTECH", desc: "Meal planning app for working parents. End-to-end product design from research through UI. 3 core flows redesigned, A/B tested.", img: "/7dish/homepage-after.png", accent: "0D9488" },
    { name: "SideNook", tag: "MAC APP", desc: "macOS terminal emulator. Sole designer + SwiftUI developer. Shipped April 2026. AI-native design workflow.", img: null, accent: "0891B2" },
    { name: "Fundr", tag: "FINTECH · AI", desc: "SaaS paywall redesign. 20% increase in upgrade rates, ~50% fewer sales calls.", img: "/fundr/dashboard-premium.png", accent: "059669" },
  ];

  const pw = (W - M * 2 - 0.3) / 3;
  projects.forEach((p, i) => {
    const px = M + i * (pw + 0.15);

    s.addShape(prs.ShapeType.rect, {
      x: px, y: 1.3, w: pw, h: 0.06,
      fill: { color: p.accent },
    });

    s.addShape(prs.ShapeType.rect, {
      x: px, y: 1.36, w: pw, h: 4.0,
      fill: { color: WARM },
    });

    s.addText(p.tag, {
      x: px + 0.15, y: 1.5, w: pw - 0.3, h: 0.25,
      fontSize: 9, fontFace: "Calibri", bold: true, color: p.accent,
    });
    s.addText(p.name, {
      x: px + 0.15, y: 1.8, w: pw - 0.3, h: 0.35,
      fontSize: 18, fontFace: "Georgia", bold: true, color: DARK_TEXT,
    });
    s.addText(p.desc, {
      x: px + 0.15, y: 2.2, w: pw - 0.3, h: 1.4,
      fontSize: 11.5, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3, valign: "top",
    });

    if (p.img) {
      const ip = img(p.img);
      if (ip) {
        s.addImage({ path: ip, x: px + 0.15, y: 3.6, w: pw - 0.3, h: 1.6, sizing: { type: "contain", w: pw - 0.3, h: 1.6 } });
      }
    }
  });
}

// ──────────────────────── SLIDE 20: What I bring to Jiro ────────────────────────
{
  const s = newSlide(prs);
  title(s, "Here's how I plug in");

  const rows = [
    ["Chris's need", "What I bring"],
    ["Design system + code out of sync", "Built XY's first design system and 60+ component library from zero. Mapped to engineering output."],
    ["No time to build foundation", "I've been the sole designer twice. Build the foundation while still shipping."],
    ["Research function missing", "I install lightweight feedback loops — fast, repeatable, tied to decisions."],
    ["Process is hodgepodge", "Structure upstream without bureaucracy. Problem definition is non-negotiable."],
    ["PMs jumping to Lovable", "I reframe the brief, pressure-test the problem, align before anyone opens a tool."],
    ["Prototypes disconnected from code", "AI-native pipeline: Figma → Figma Make → GitHub → Engineering. Hours, not weeks."],
    ["Volume of execution", "This isn't a consulting engagement. I'm here to ship."],
    ["Scaling without slowing down", "Small team, fast pace, high quality bar — my default."],
  ];

  const colW = [3.2, W - M * 2 - 3.2];
  const rowH = 0.45;
  const headerH = 0.5;
  const tableY = 1.2;

  s.addShape(prs.ShapeType.rect, {
    x: M, y: tableY, w: colW[0], h: headerH,
    fill: { color: PURPLE },
  });
  s.addText(rows[0][0], {
    x: M + 0.15, y: tableY, w: colW[0] - 0.15, h: headerH,
    fontSize: 11, fontFace: "Calibri", bold: true, color: WHITE, valign: "middle",
  });
  s.addShape(prs.ShapeType.rect, {
    x: M + colW[0], y: tableY, w: colW[1], h: headerH,
    fill: { color: PURPLE },
  });
  s.addText(rows[0][1], {
    x: M + colW[0] + 0.15, y: tableY, w: colW[1] - 0.15, h: headerH,
    fontSize: 11, fontFace: "Calibri", bold: true, color: WHITE, valign: "middle",
  });

  let avail = H - 2.0;
  const maxRows = Math.min(rows.length - 1, Math.floor(avail / rowH));

  for (let i = 1; i <= maxRows; i++) {
    const ry = tableY + headerH + (i - 1) * rowH;
    const bg = i % 2 === 0 ? WARM : WHITE;
    s.addShape(prs.ShapeType.rect, {
      x: M, y: ry, w: colW[0], h: rowH,
      fill: { color: bg },
    });
    s.addText(rows[i][0], {
      x: M + 0.15, y: ry, w: colW[0] - 0.15, h: rowH,
      fontSize: 10, fontFace: "Calibri", bold: true, color: PURPLE, valign: "middle",
    });
    s.addShape(prs.ShapeType.rect, {
      x: M + colW[0], y: ry, w: colW[1], h: rowH,
      fill: { color: bg },
    });
    s.addText(rows[i][1], {
      x: M + colW[0] + 0.15, y: ry, w: colW[1] - 0.15, h: rowH,
      fontSize: 9, fontFace: "Calibri", color: DARK_TEXT, valign: "middle",
    });
  }
}

// ──────────────────────── SLIDE 21: Let's go deeper ────────────────────────
{
  const s = prs.addSlide();
  s.background = { color: NAVY };

  const hs = img("/about-jacki-headshot.png");
  if (hs) {
    s.addImage({ path: hs, x: (W - 1.8) / 2, y: 1.0, w: 1.8, h: 1.8, sizing: { type: "cover", w: 1.8, h: 1.8 } });
  }

  s.addText("I came ready to get into the weeds.", {
    x: M, y: 3.2, w: W - M * 2, h: 0.6,
    fontSize: 28, fontFace: "Georgia", bold: true, italic: true, color: WHITE, align: "center",
  });

  s.addText("Jacki Torres", {
    x: M, y: 4.2, w: W - M * 2, h: 0.4,
    fontSize: 18, fontFace: "Calibri", color: "BBBBBB", align: "center",
  });
  s.addText("hello@jackelinetorres.co", {
    x: M, y: 4.6, w: W - M * 2, h: 0.3,
    fontSize: 13, fontFace: "Calibri Light", color: "888888", align: "center",
  });
  s.addText("jackelinetorres.co", {
    x: M, y: 4.9, w: W - M * 2, h: 0.3,
    fontSize: 13, fontFace: "Calibri", bold: true, color: "AAAAAA", align: "center",
  });
}

// ──────────────────────── SAVE ────────────────────────
const outPath = "/Users/jacki/Desktop/jiro-health-presentation.pptx";
await prs.writeFile({ fileName: outPath });
console.log("DONE:", outPath);
