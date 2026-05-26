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
const BURGUNDY = "540f37";
const BLUE = "4361EE";
const BLUE_LIGHT = "E8EEFF";
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

function bigNumber(slide, num, label, x, y, w) {
  slide.addText(num, {
    x, y, w, h: 0.7,
    fontSize: 42, fontFace: "Georgia", bold: true, color: BLUE, align: "center",
  });
  slide.addText(label, {
    x, y: y + 0.6, w, h: 0.5,
    fontSize: 11, fontFace: "Calibri", color: MUTED, align: "center",
  });
}

// ── deck ──
const prs = new PptxGenJS();
prs.defineLayout({ name: "WIDE", width: W, height: H });
prs.layout = "WIDE";

// ──────────────────────── SLIDE 1: Cover ────────────────────────
{
  const s = prs.addSlide();
  s.background = { color: WARM };

  // Subtle decorative circles
  s.addShape(prs.ShapeType.ellipse, {
    x: W - 1.0, y: 0.5, w: 0.6, h: 0.6,
    fill: { color: BLUE },
    transparency: 92,
  });
  s.addShape(prs.ShapeType.ellipse, {
    x: 0.6, y: H - 1.0, w: 0.4, h: 0.4,
    fill: { color: BLUE },
    transparency: 92,
  });

  // Top bar
  s.addText("Jacki Torres · Product Designer", {
    x: M, y: 0.5, w: W / 2, h: 0.35,
    fontSize: 12, fontFace: "Calibri", color: MUTED, align: "left",
  });
  s.addText("Portfolio / 2026", {
    x: W / 2, y: 0.5, w: W / 2 - M, h: 0.35,
    fontSize: 12, fontFace: "Calibri", color: MUTED, align: "right",
  });

  // Main name — big serif
  s.addText("Jacki", {
    x: M, y: 2.0, w: W - M * 2, h: 1.0,
    fontSize: 72, fontFace: "Georgia", color: DARK_TEXT, align: "left",
  });
  s.addText("Torres.", {
    x: M, y: 3.0, w: W - M * 2, h: 1.0,
    fontSize: 72, fontFace: "Georgia", italic: true, color: DARK_TEXT, align: "left",
  });

  // Tagline
  s.addText([
    { text: "I design apps & systems that make users say:\n", options: { fontSize: 18, fontFace: "Georgia", italic: true, color: DARK_TEXT } },
    { text: "“Omg! This product ", options: { fontSize: 18, fontFace: "Calibri", bold: true, color: BLUE } },
    { text: "works", options: { fontSize: 18, fontFace: "Georgia", italic: true, color: BLUE } },
    { text: ".”", options: { fontSize: 18, fontFace: "Calibri", bold: true, color: BLUE } },
  ], {
    x: M, y: 4.5, w: W - M * 2, h: 0.9,
    valign: "top",
  });

  // Bottom bar
  s.addText("San Francisco · Remote", {
    x: M, y: H - 0.7, w: W / 2, h: 0.35,
    fontSize: 12, fontFace: "Calibri", color: MUTED, align: "left",
  });
  s.addText("Selected work, 2021–26 →", {
    x: W / 2, y: H - 0.7, w: W / 2 - M, h: 0.35,
    fontSize: 12, fontFace: "Georgia", italic: true, color: BLUE, align: "right",
  });
}

// ──────────────────────── SLIDE 2: One-line version ────────────────────────
{
  const s = newSlide(prs);
  const hs = img("/about-jacki-headshot.png");
  const textX = hs ? 4.2 : M + 0.3;
  const textW = W - textX - M;

  s.addShape(prs.ShapeType.ellipse, {
    x: W - 0.8, y: 0.3, w: 0.5, h: 0.5,
    fill: { color: BLUE_LIGHT },
  });
  s.addShape(prs.ShapeType.ellipse, {
    x: W - 1.0, y: 0.15, w: 0.25, h: 0.25,
    fill: { color: BLUE },
  });

  if (hs) {
    s.addShape(prs.ShapeType.roundRect, {
      x: M + 0.15, y: 1.6, w: 3.2, h: 3.6,
      fill: { color: WARM },
      rectRadius: 0.3,
    });
    s.addImage({ path: hs, x: M + 0.45, y: 1.8, w: 2.6, h: 2.6, sizing: { type: "cover", w: 2.6, h: 2.6 } });
    s.addShape(prs.ShapeType.ellipse, {
      x: M + 0.1, y: 1.55, w: 0.45, h: 0.45,
      fill: { color: BLUE },
    });
  }

  s.addText([
    { text: "Architecture taught me systems.\n", options: { fontSize: 18, fontFace: "Georgia", color: DARK_TEXT, lineSpacingMultiple: 1.35 } },
    { text: "Product design taught me how to ship.\n", options: { fontSize: 18, fontFace: "Georgia", color: BLUE, lineSpacingMultiple: 1.35 } },
    { text: "Healthtech and AI taught me what's actually at stake.\n\n", options: { fontSize: 18, fontFace: "Georgia", color: DARK_TEXT, lineSpacingMultiple: 1.35 } },
    { text: "Sole designer twice. Building from zero. Working directly with CPOs and CEOs. Shipping before the foundation was ready — then building the foundation anyway.", options: { fontSize: 14, fontFace: "Calibri", color: MUTED, lineSpacingMultiple: 1.35 } },
  ], { x: textX, y: 1.8, w: textW, h: 3.8, valign: "top" });
}

// ──────────────────────── SLIDE 3: Why I care ────────────────────────
{
  const s = newSlide(prs);
  title(s, "Why I care about healthtech");

  // 3 story cards
  const stories = [
    {
      h: "Personal",
      b: [
        { text: "My grandmother and mother don't speak English. ", options: { fontSize: 13, fontFace: "Calibri", color: DARK_TEXT } },
        { text: "I've been their healthcare translator", options: { fontSize: 13, fontFace: "Calibri", bold: true, color: PURPLE } },
        { text: " for as long as I can remember.", options: { fontSize: 13, fontFace: "Calibri", color: DARK_TEXT } },
      ],
    },
    {
      h: "Building now",
      b: [
        { text: "Building a live voice translation app for clinical settings. ", options: { fontSize: 13, fontFace: "Calibri", color: DARK_TEXT } },
        { text: "Not a side project — a design conviction.", options: { fontSize: 13, fontFace: "Calibri", bold: true, color: PURPLE } },
      ],
    },
    {
      h: "The mission",
      b: [
        { text: "Healthcare has a trust, complexity, and communication problem. ", options: { fontSize: 13, fontFace: "Calibri", color: DARK_TEXT } },
        { text: "That's where I want to work.", options: { fontSize: 13, fontFace: "Calibri", bold: true, color: PURPLE } },
      ],
    },
  ];

  const cardW = (W - M * 2 - 0.5) / 3;
  const cardH = 4.8;
  const cardY = 1.3;

  stories.forEach((st, i) => {
    const cx = M + i * (cardW + 0.25);

    // Card background
    s.addShape(prs.ShapeType.roundRect, {
      x: cx, y: cardY, w: cardW, h: cardH,
      fill: { color: WARM },
      rectRadius: 0.15,
    });

    // Icon area — draw centered in top portion of card
    const iconCenterX = cx + cardW / 2;
    const iconTopY = cardY + 0.6;

    if (i === 0) {
      // Family icon: two stylized people (circle + body)
      // Person 1 (left)
      s.addShape(prs.ShapeType.ellipse, {
        x: iconCenterX - 0.45, y: iconTopY, w: 0.28, h: 0.28,
        fill: { color: PURPLE },
      });
      s.addShape(prs.ShapeType.rect, {
        x: iconCenterX - 0.4, y: iconTopY + 0.28, w: 0.18, h: 0.25,
        fill: { color: PURPLE },
      });
      // Person 2 (right)
      s.addShape(prs.ShapeType.ellipse, {
        x: iconCenterX - 0.02, y: iconTopY + 0.05, w: 0.24, h: 0.24,
        fill: { color: PURPLE },
      });
      s.addShape(prs.ShapeType.rect, {
        x: iconCenterX + 0.02, y: iconTopY + 0.29, w: 0.16, h: 0.22,
        fill: { color: PURPLE },
      });
      // Connecting line (stylized family)
      s.addShape(prs.ShapeType.rect, {
        x: iconCenterX - 0.22, y: iconTopY + 0.15, w: 0.2, h: 0.04,
        fill: { color: PURPLE },
      });
    } else if (i === 1) {
      // Build icon: lightning bolt + circle
      s.addShape(prs.ShapeType.ellipse, {
        x: iconCenterX - 0.2, y: iconTopY, w: 0.4, h: 0.4,
        fill: { color: PURPLE },
      });
      // Lightning bolt shape inside the circle — use text for simplicity
      s.addText("⚡", {
        x: iconCenterX - 0.2, y: iconTopY - 0.02, w: 0.4, h: 0.44,
        fontSize: 24, fontFace: "Calibri", color: WHITE, align: "center", valign: "middle",
      });
    } else {
      // Mission icon: target (2 concentric circles)
      s.addShape(prs.ShapeType.ellipse, {
        x: iconCenterX - 0.22, y: iconTopY, w: 0.44, h: 0.44,
        fill: { color: PURPLE },
      });
      s.addShape(prs.ShapeType.ellipse, {
        x: iconCenterX - 0.12, y: iconTopY + 0.1, w: 0.24, h: 0.24,
        fill: { color: WHITE },
      });
      s.addShape(prs.ShapeType.ellipse, {
        x: iconCenterX - 0.05, y: iconTopY + 0.17, w: 0.1, h: 0.1,
        fill: { color: PURPLE },
      });
    }

    // Sub-heading label
    s.addText(st.h.toUpperCase(), {
      x: cx + 0.15, y: iconTopY + 0.6, w: cardW - 0.3, h: 0.3,
      fontSize: 10, fontFace: "Calibri", bold: true, color: PURPLE, align: "center", valign: "middle",
    });

    // Body text — multi-style with accent bold
    s.addText(st.b, {
      x: cx + 0.2, y: iconTopY + 1.0, w: cardW - 0.4, h: 2.6,
      align: "center", valign: "top",
      lineSpacingMultiple: 1.35,
    });
  });
}

// ──────────────────────── SLIDE 4: How I work ────────────────────────
{
  const s = newSlide(prs);
  title(s, "How I work");

  const cards = [
    { h: "Foundation before velocity", b: "Design system, component library, handoff. If those aren't solid, every sprint pays." },
    { h: "Design + code in lockstep", b: "Same tools as engineers. No wall between design and dev." },
    { h: "Problems before solutions", b: "Jumping to solutions builds the wrong thing. I push back." },
    { h: "Feedback as infrastructure", b: "User research as a habit, not a project. Fast, tied to what ships next." },
  ];

  const cardH = 1.2;
  const gap = 0.25;
  const startY = 1.3;
  cards.forEach((c, i) => {
    const y = startY + i * (cardH + gap);
    s.addShape(prs.ShapeType.rect, {
      x: M, y, w: W - M * 2, h: cardH,
      fill: { color: WARM }, rectRadius: 0.1,
    });
    s.addText(c.h, {
      x: M + 0.3, y: y + 0.1, w: W - M * 2 - 0.6, h: 0.35,
      fontSize: 14, fontFace: "Calibri", bold: true, color: BLUE, align: "left", valign: "top",
    });
    s.addText(c.b, {
      x: M + 0.3, y: y + 0.45, w: W - M * 2 - 0.6, h: 0.65,
      fontSize: 12.5, fontFace: "Calibri", color: DARK_TEXT, align: "left", valign: "top", lineSpacingMultiple: 1.25,
    });
  });

  addLogoRow(s, ["/logos/figma.png", "/logos/claude-code.png", "/logos/claude-chat.png", "/logos/cursor.png", "/logos/storybook.svg", "/logos/linear.svg"], H - 0.7);
}

// ──────────────────────── SLIDE 5: How AI changed my process ────────────────────────
{
  const s = newSlide(prs);
  title(s, "How AI changed my process");

  const cards = [
    { h: "Before", b: "Figma → handoff → wait. Research took days. Feedback was batch, not continuous." },
    { h: "Shift", b: "ChatGPT for research synthesis. V0 for prototyping. Claude Code for design-in-code. The wall between thinking and making dissolved." },
    { h: "Now", b: "Figma → Cursor → Claude Code → Storybook in a continuous loop. Hours instead of weeks." },
    { h: "Result", b: "More time on the problem, less on production. AI handles plumbing; I focus on system, interaction, user." },
  ];

  const cardH = 1.0;
  const gap = 0.2;
  const startY = 1.4;
  cards.forEach((c, i) => {
    const y = startY + i * (cardH + gap);
    s.addShape(prs.ShapeType.rect, {
      x: M, y, w: 1.2, h: cardH,
      fill: { color: BLUE },
    });
    s.addText(c.h, {
      x: M, y: y + 0.15, w: 1.2, h: cardH - 0.3,
      fontSize: 14, fontFace: "Calibri", bold: true, color: WHITE, align: "center", valign: "middle",
    });
    s.addText(c.b, {
      x: M + 1.4, y: y + 0.1, w: W - M * 2 - 1.4, h: cardH - 0.2,
      fontSize: 13, fontFace: "Calibri", color: DARK_TEXT, valign: "middle", lineSpacingMultiple: 1.25,
    });
  });

  addLogoRow(s, ["/logos/figma.png", "/logos/cursor.png", "/logos/claude-code.png", "/logos/storybook.svg", "/logos/chatgpt.svg", "/logos/perplexity.svg"], H - 0.7);
}

// ──────────────────────── SLIDE 6: Why Jiro, why now ────────────────────────
{
  const s = newSlide(prs);
  title(s, "Why Jiro, why now");

  // Jiro logo — top-right corner
  const jiroLogo = img("/logos/jiro.png");
  if (jiroLogo) {
    s.addImage({ path: jiroLogo, x: W - M - 1.8, y: M + 0.05, w: 1.8, h: 0.5, sizing: { type: "contain", w: 1.8, h: 0.5 } });
  }

  // First sentence — kept as-is
  s.addText("Jiro gives independent clinicians practice intelligence locked inside larger health systems. That's an equity problem dressed as a data problem.", {
    x: M, y: 1.3, w: W - M * 2, h: 0.8,
    fontSize: 15, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.35, valign: "top",
  });

  // Three bullet points: prefix → keyword
  const bullets = [
    { prefix: "0 to 1", word: "creation" },
    { prefix: "ambiguity", word: "clarity" },
    { prefix: "complexity", word: "simplicity" },
  ];

  const bulletY = 2.3;
  bullets.forEach((b, i) => {
    const y = bulletY + i * 0.7;
    // Em dash bullet marker
    s.addText("—", {
      x: M + 0.15, y, w: 0.3, h: 0.55,
      fontSize: 16, fontFace: "Calibri", color: MUTED, valign: "middle",
    });
    // Prefix in body font
    s.addText(b.prefix, {
      x: M + 0.45, y, w: 1.0, h: 0.55,
      fontSize: 19, fontFace: "Calibri", color: DARK_TEXT, valign: "middle",
    });
    // Arrow separator
    s.addText("→", {
      x: M + 1.45, y, w: 0.35, h: 0.55,
      fontSize: 19, fontFace: "Calibri", color: MUTED, valign: "middle",
    });
    // Keyword — playful display font, larger, blue accent
    s.addText(b.word, {
      x: M + 1.85, y, w: 3.0, h: 0.55,
      fontSize: 28, fontFace: "Georgia", bold: true, italic: true, color: BLUE, valign: "middle",
    });
  });
}

// ──────────────────────── SLIDE 7: First 90 days ────────────────────────
{
  const s = newSlide(prs);
  title(s, "First 90 days");

  const phases = [
    { label: "Days 1–30", h: "Audit and align", b: "Map every component in Figma against code. Ship one quick win." },
    { label: "Days 31–60", h: "Install the feedback loop", b: "Lightweight post-MVP testing with clinicians. A research habit, not a program." },
    { label: "Days 61–90", h: "Fix upstream", b: "Problem definition before anyone opens a tool. Nothing is throwaway." },
  ];

  const cardH = 1.3;
  const gap = 0.3;
  const startY = 1.4;
  phases.forEach((p, i) => {
    const y = startY + i * (cardH + gap);
    s.addShape(prs.ShapeType.rect, {
      x: M, y, w: 0.06, h: cardH,
      fill: { color: BLUE }, align: "left", valign: "top",
    });
    s.addText(p.h, {
      x: M + 0.25, y: y + 0.3, w: W - M * 2 - 0.5, h: 0.3,
      fontSize: 16, fontFace: "Georgia", bold: true, color: DARK_TEXT, align: "left", valign: "top",
    });
    s.addText(p.b, {
      x: M + 0.25, y: y + 0.65, w: W - M * 2 - 0.5, h: 0.55,
      fontSize: 13, fontFace: "Calibri", color: DARK_TEXT, align: "left", valign: "top", lineSpacingMultiple: 1.25,
    });
  });
}

// ──────────────────────── TRANSITION 1 ────────────────────────
{
  const s = prs.addSlide();
  s.background = { color: WHITE };
  // branding bar
  s.addText("Jacki Torres · Product Designer", {
    x: M, y: 0.5, w: W / 2, h: 0.35,
    fontSize: 12, fontFace: "Calibri", color: MUTED, align: "left",
  });
  s.addText("Portfolio / 2026", {
    x: W / 2, y: 0.5, w: W / 2 - M, h: 0.35,
    fontSize: 12, fontFace: "Calibri", color: MUTED, align: "right",
  });
  s.addShape(prs.ShapeType.ellipse, {
    x: W - 1.5, y: 0.5, w: 1.0, h: 1.0,
    fill: { color: "4361EE" },
    transparency: 92,
  });
  s.addShape(prs.ShapeType.ellipse, {
    x: 0.3, y: H - 1.2, w: 0.7, h: 0.7,
    fill: { color: "4361EE" },
    transparency: 94,
  });
  s.addText("Let me show you how I work.", {
    x: M, y: 2.5, w: W - M * 2, h: 1.5,
    fontSize: 36, fontFace: "Georgia", bold: true, italic: true, color: BLUE, align: "center", valign: "middle",
  });
}

// ──────────────────────── SLIDE: XY Hero ────────────────────────
{
  const s = prs.addSlide();
  s.background = { color: WHITE };

  // Branding bar
  s.addText("Jacki Torres · Product Designer", {
    x: M, y: 0.25, w: W / 2, h: 0.3,
    fontSize: 11, fontFace: "Calibri", color: MUTED, align: "left",
  });
  s.addText("Portfolio / 2026", {
    x: W / 2, y: 0.25, w: W / 2 - M, h: 0.3,
    fontSize: 11, fontFace: "Calibri", color: MUTED, align: "right",
  });

  // Built-for logo at top left
  const xyLogo = img("/logos/XY.svg");
  if (xyLogo) {
    s.addImage({ path: xyLogo, x: M, y: 0.75, w: 0.8, h: 0.35, sizing: { type: "contain", w: 0.8, h: 0.35 } });
  }

  // Accent tag
  s.addText("HEALTHTECH · AI WORKFLOWS", {
    x: M, y: 1.3, w: COL, h: 0.25,
    fontSize: 10, fontFace: "Calibri", bold: true, color: PURPLE, align: "left",
  });

  // Project name
  s.addText("XY Corp", {
    x: M, y: 1.6, w: COL, h: 0.65,
    fontSize: 34, fontFace: "Georgia", bold: true, color: DARK_TEXT, align: "left",
  });

  // Headline
  s.addText("Making healthcare AI orchestration self-serve", {
    x: M, y: 2.3, w: COL, h: 0.35,
    fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, align: "left",
  });

  // Description
  s.addText("Conversational onboarding replaced hour-long demos with 3-step wizards. Built component factory to ship production-ready flows.", {
    x: M, y: 2.7, w: COL, h: 0.65,
    fontSize: 12, fontFace: "Calibri", color: MUTED, lineSpacingMultiple: 1.3, align: "left", valign: "top",
  });

  // Tags row
  s.addText("healthtech  SaaS    2025–2026", {
    x: M, y: 3.45, w: COL, h: 0.25,
    fontSize: 10, fontFace: "Calibri", bold: true, color: PURPLE, align: "left",
  });

  // Metrics
  s.addText("3 steps", {
    x: M, y: 3.85, w: COL / 2, h: 0.6,
    fontSize: 38, fontFace: "Georgia", bold: true, color: PURPLE, align: "center",
  });
  s.addText("Clicks to value", {
    x: M, y: 4.45, w: COL / 2, h: 0.25,
    fontSize: 10, fontFace: "Calibri", color: MUTED, align: "center",
  });
  s.addText("Hour to minutes", {
    x: M + COL / 2, y: 3.85, w: COL / 2, h: 0.6,
    fontSize: 38, fontFace: "Georgia", bold: true, color: PURPLE, align: "center",
  });
  s.addText("Setup Reduction", {
    x: M + COL / 2, y: 4.45, w: COL / 2, h: 0.25,
    fontSize: 10, fontFace: "Calibri", color: MUTED, align: "center",
  });

  // Right side — enlarged hero video
  const xyHero = img("/case-studies/xy-hero.mp4");
  if (xyHero) {
    s.addMedia({
      path: xyHero, type: "video",
      x: COL + M + GAP, y: 0.4, w: COL - GAP, h: H - 1.0,
    });
  }
}

// ──────────────────────── SLIDE 10: Who is XY? ────────────────────────
{
  const s = newSlide(prs);
  title(s, "Who is XY?");

  // Company intro
  s.addText("XY builds an AI orchestration platform for healthcare — agents handle verification, scheduling, and claims for large provider networks.\n\n", {
    x: M, y: 1.1, w: W - M * 2, h: 0.8,
    fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, valign: "top", lineSpacingMultiple: 1.3,
  });

  const cBullets = [
    "Healthcare AI platform serving multidisciplinary care teams",
    "Powerful agent orchestration, but configuration was bottlenecked by sales calls",
  ];
  cBullets.forEach((text, i) => {
    s.addText("▸  " + text, {
      x: M + 0.3, y: 1.65 + i * 0.35, w: W - M * 2 - 0.6, h: 0.3,
      fontSize: 12, fontFace: "Calibri", color: MUTED, valign: "top",
    });
  });

  // My job — role bullets (unchanged)
  s.addText("My job", {
    x: M, y: 2.55, w: W - M * 2, h: 0.25,
    fontSize: 11, fontFace: "Calibri", bold: true, color: PURPLE, valign: "bottom",
  });

  const roles = [
    "Sole designer, reporting to CPO and CEO. Team of four.",
    "Full surface: AI orchestration UI, component library, design system, design-to-engineering pipeline.",
    "Built the foundation and the workflow together — from zero.",
  ];

  const rh = 0.8;
  const rgap = 0.15;
  roles.forEach((text, i) => {
    const ry = 2.85 + i * (rh + rgap);
    s.addShape(prs.ShapeType.rect, {
      x: M, y: ry, w: W - M * 2, h: rh,
      fill: { color: WARM },
    });
    s.addText("▸  " + text, {
      x: M + 0.3, y: ry + 0.1, w: W - M * 2 - 0.6, h: rh - 0.2,
      fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, valign: "middle",
    });
  });

  addLogoRowRight(s, ["/logos/figma.png", "/logos/cursor.png", "/logos/github.png", "/logos/linear.svg", "/logos/claude-code.png"], H - 0.7);
}

// ──────────────────────── SLIDE 11: Who are XY's users? ────────────────────────
{
  const s = newSlide(prs);
  title(s, "Who are XY's users?");

  s.addText([
    { text: "Healthcare operations teams of all technical levels — from clinical coordinators to IT specialists.\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3 } },
    { text: "1.  Healthcare ops coordinators — need guided workflows, not APIs\n2.  Clinical administrators — oversee agent workflows across departments\n3.  IT integration specialists — deep config, but want self-service", options: { fontSize: 13, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.4 } },
  ], { x: M, y: 1.15, w: W - M * 2, h: 1.2, valign: "top" });

  const ut = img("/xy/user-types.png");
  if (ut) {
    s.addImage({ path: ut, x: M, y: 2.55, w: W - M * 2, h: 4.7, sizing: { type: "contain", w: W - M * 2, h: 4.7 } });
  }
}

// ──────────────────────── SLIDE 12: XY Context & Problem ────────────────────────
{
  const s = newSlide(prs);
  title(s, "XY Corp: Context & Problem");

  s.addText([
    { text: "AI agents for healthcare ops. The agents worked — the setup didn't.\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3 } },
    { text: "My job: make AI orchestration something teams could set up themselves. Four months, sole designer.", options: { fontSize: 14, fontFace: "Calibri", bold: true, color: BLUE, lineSpacingMultiple: 1.3 } },
  ], { x: M, y: 1.3, w: W - M * 2, h: 2.0, valign: "top" });

  // Three blocker diagram cards
  const blockers = [
    { title: "Complex Configuration", desc: "Users couldn't describe or configure agent workflows — too abstract until they saw it." },
    { title: "Wrong Audience", desc: "Sales-led demos for ops teams who needed self-service, not hand-holding." },
    { title: "Sales Bottleneck", desc: "Every setup required a human-led call. No path to self-onboarding." },
  ];

  const cardW = (W - M * 2 - GAP * 2) / 3;
  const cardH = 2.8;
  const cardY = 3.2;

  blockers.forEach((b, i) => {
    const cx = M + i * (cardW + GAP);

    // Card background
    s.addShape(prs.ShapeType.roundRect, {
      x: cx, y: cardY, w: cardW, h: cardH,
      fill: { color: WARM },
      rectRadius: 0.15,
      line: { color: "E0DED8", width: 0.5 },
    });

    // Purple accent bar at top
    s.addShape(prs.ShapeType.rect, {
      x: cx, y: cardY, w: cardW, h: 0.08,
      fill: { color: PURPLE },
    });

    // Blocker number circle
    s.addShape(prs.ShapeType.ellipse, {
      x: cx + cardW / 2 - 0.3, y: cardY + 0.35, w: 0.6, h: 0.6,
      fill: { color: BLUE },
    });
    s.addText(String(i + 1), {
      x: cx + cardW / 2 - 0.3, y: cardY + 0.35, w: 0.6, h: 0.6,
      fontSize: 16, fontFace: "Calibri", bold: true, color: WHITE, align: "center", valign: "middle",
    });

    // Title
    s.addText(b.title, {
      x: cx + 0.2, y: cardY + 1.1, w: cardW - 0.4, h: 0.4,
      fontSize: 14, fontFace: "Calibri", bold: true, color: PURPLE, align: "center", valign: "middle",
    });

    // Description
    s.addText(b.desc, {
      x: cx + 0.25, y: cardY + 1.55, w: cardW - 0.5, h: 1.1,
      fontSize: 11, fontFace: "Calibri", color: DARK_TEXT, align: "center", valign: "top",
      lineSpacingMultiple: 1.2,
    });
  });
}

// ──────────────────────── SLIDE: XY Discovery & Research ────────────────────────
{
  const s = newSlide(prs);
  title(s, "XY Corp: Discovery & Research");

  s.addText([
    { text: "Talked to healthcare ops teams. The pattern was consistent:\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3 } },
    { text: "1.  Couldn't describe setup — too abstract until they saw it\n2.  Same bottleneck every time: configuration was a blocker\n3.  \"I'd need a demo\" in every conversation\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.4 } },
    { text: "The problem wasn't UI quality. It was asking users to configure something they'd never encountered.", options: { fontSize: 14, fontFace: "Calibri", bold: true, color: BLUE, lineSpacingMultiple: 1.3 } },
  ], { x: M, y: 1.3, w: W - M * 2, h: 3.0, valign: "top" });

  addLogoRow(s, ["/logos/sully.svg", "/logos/scribe.png", "/logos/zapier.png"], 5.3);
}

// ──────────────────────── SLIDE: XY Testing & Results ────────────────────────
{
  const s = newSlide(prs);
  title(s, "XY Corp: Testing & Results");

  s.addText([
    { text: "Validated chat-first with:\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3 } },
    { text: "•  Healthcare ops team interviews\n•  CPO-led walkthroughs with 2 enterprise prospects\n•  Internal dogfooding with eng and sales\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.4 } },
    { text: "Chat users immediately understood the agent model. Sales could demo without engineering.", options: { fontSize: 14, fontFace: "Calibri", bold: true, color: BLUE, lineSpacingMultiple: 1.3 } },
  ], { x: M, y: 1.1, w: W - M * 2, h: 3.0, valign: "top" });

  s.addText("Impact: CEO began pitching the self-serve experience directly to enterprise customers.", {
    x: M, y: 4.8, w: W - M * 2, h: 0.5,
    fontSize: 14, fontFace: "Georgia", bold: true, italic: true, color: BLUE, align: "center",
  });
}

// ──────────────────────── SLIDE: XY Key Decision ────────────────────────
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
  s.addText("Improve the config UI. Users navigate forms, decode agent models, make decisions they lack context for.", {
    x: M + 0.2, y: 2.1, w: cardW - 0.4, h: 2.2,
    fontSize: 13, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3, valign: "top",
  });

  // AFTER
  s.addShape(prs.ShapeType.rect, {
    x: M + cardW + 0.3, y: 1.5, w: cardW, h: 3.0,
    fill: { color: BLUE },
  });
  s.addText("AFTER  —  CHAT", {
    x: M + cardW + 0.5, y: 1.6, w: cardW - 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri", bold: true, color: "FFFFFF",
  });
  s.addText("Conversational layer. Users describe needs, system routes. A multi-hour call becomes 5 minutes.", {
    x: M + cardW + 0.5, y: 2.1, w: cardW - 0.4, h: 2.2,
    fontSize: 13, fontFace: "Calibri", color: "FFFFFF", lineSpacingMultiple: 1.3, valign: "top",
  });

  s.addText("Healthcare teams think in tasks, not configurations.", {
    x: M, y: 4.8, w: W - M * 2, h: 0.5,
    fontSize: 16, fontFace: "Georgia", bold: true, italic: true, color: BLUE, align: "center",
  });
}

// ──────────────────────── SLIDE 13: XY Process & Exploration ────────────────────────
{
  const s = prs.addSlide();
  s.background = { color: BURGUNDY, transparency: 80 };
  title(s, "Process & Exploration");

  const dirs = [
    { label: "Forms-first", desc: "Clean up existing config UI. Lower risk — but users still need to understand the agent model.", tag: "Lower risk" },
    { label: "Wizard / guided", desc: "Step-by-step. Better, but requires decisions users lack context for.", tag: "Middle ground" },
    { label: "Chat-first ✓", desc: "Users describe intent in natural language. The only pattern matching how healthcare teams communicate.", tag: "The winner" },
  ];

  const dw = (W - M * 2 - 0.4) / 3;
  dirs.forEach((d, i) => {
    const dx = M + i * (dw + 0.2);
    s.addShape(prs.ShapeType.rect, {
      x: dx, y: 1.3, w: dw, h: 4.0,
      fill: { color: i === 2 ? BLUE : WARM },
    });
    s.addShape(prs.ShapeType.roundRect, {
      x: dx + 0.15, y: 1.5, w: 1.2, h: 0.3,
      fill: { color: i === 2 ? "FFFFFF" : BLUE },
      rectRadius: 0.15,
    });
    s.addText(d.tag.toUpperCase(), {
      x: dx + 0.15, y: 1.5, w: 1.2, h: 0.3,
      fontSize: 8, fontFace: "Calibri", bold: true, color: i === 2 ? BLUE : WHITE, align: "center", valign: "middle",
    });
    s.addText(d.label, {
      x: dx + 0.15, y: 2.0, w: dw - 0.3, h: 0.4,
      fontSize: 15, fontFace: "Georgia", bold: true, color: i === 2 ? WHITE : DARK_TEXT,
    });
    s.addText(d.desc, {
      x: dx + 0.15, y: 2.5, w: dw - 0.3, h: 2.5,
      fontSize: 12, fontFace: "Calibri", color: i === 2 ? "DDDDDD" : DARK_TEXT, lineSpacingMultiple: 1.3, valign: "top",
    });
  });
}

// ──────────────────────── SLIDE 14: XY What I built ────────────────────────
{
  const s = newSlide(prs, BLUE);
  s.addText("XY Corp: What I built", {
    x: M, y: M, w: W - M * 2, h: 0.7,
    fontSize: 36, fontFace: "Georgia", bold: true, color: WHITE,
    align: "left", valign: "top",
  });

  // 4 cards in a single row
  const items = [
    { n: "01", h: "AI orchestration via chat", b: "Three agents, one conversation. No config." },
    { n: "02", h: "60+ prod components", b: "Fullscreen, sidebar, embedded contexts." },
    { n: "03", h: "First design system", b: "8px grid, tokens, Storybook." },
    { n: "04", h: "AI-native pipeline", b: "Figma → code. Hours, not weeks." },
  ];

  const cardW = (W - M * 2 - 0.45) / 4;
  const cardY = 1.4;
  items.forEach((item, i) => {
    const cx = M + i * (cardW + 0.15);
    // Card background (semi-transparent white)
    s.addShape(prs.ShapeType.rect, {
      x: cx, y: cardY, w: cardW, h: 1.6,
      fill: { color: WHITE }, transparency: 85, rectRadius: 0.1,
    });
    // Number
    s.addText(item.n, {
      x: cx + 0.15, y: cardY + 0.1, w: cardW - 0.3, h: 0.25,
      fontSize: 10, fontFace: "Calibri", bold: true, color: WHITE,
    });
    // Heading
    s.addText(item.h, {
      x: cx + 0.15, y: cardY + 0.38, w: cardW - 0.3, h: 0.4,
      fontSize: 14, fontFace: "Calibri", bold: true, color: WHITE, valign: "top",
    });
    // Body
    s.addText(item.b, {
      x: cx + 0.15, y: cardY + 0.82, w: cardW - 0.3, h: 0.6,
      fontSize: 10, fontFace: "Calibri", color: "E0E8FF", valign: "top",
    });
  });

  // Storybook image at bottom
  const sb = img("/xy/storybook.png");
  if (sb) {
    s.addImage({
      path: sb, x: M, y: 3.3, w: W - M * 2, h: 3.6,
      sizing: { type: "contain", w: W - M * 2, h: 3.6 },
    });
  }
}

// ──────────────────────── SLIDE: XY Demo Video ────────────────────────
{
  const s = newSlide(prs);
  title(s, "Live demo: AI chat in action");

  s.addText("Self-serve AI chat from the homepage — initial prompt to guided configuration.", {
    x: M, y: 1.2, w: W - M * 2, h: 0.5,
    fontSize: 14, fontFace: "Calibri", color: DARK_TEXT,
  });

  const videoPath = PUBLIC + "/xy/ai-chat-demo.mov";
  if (existsSync(videoPath)) {
    s.addMedia({
      path: videoPath, type: "video",
      x: M + 0.5, y: 2.0, w: W - M * 2 - 1.0, h: H - 3.6,
    });
  }
}

// ──────────────────────── SLIDE: XY Integration Challenge ────────────────────────
{
  const s = newSlide(prs);
  title(s, "XY Corp: The Integration Challenge");
  const cy = 1.5;     // top y for all content
  const colW = 2.8;   // width of each column
  const arrowW = 0.6; // arrow column
  const totalW = colW * 3 + arrowW * 2;
  const startX = (W - totalW) / 2;

  // ── Column 1: Challenge ──
  s.addText("Challenge", {
    x: startX, y: cy - 0.3, w: colW, h: 0.25,
    fontSize: 9, fontFace: "Calibri", bold: true, color: "D95C5C",
  });
  const c1x = startX;
  s.addShape(prs.ShapeType.rect, {
    x: c1x, y: cy, w: colW, h: 3.8,
    fill: { color: WARM }, rectRadius: 0.1,
  });
  s.addText("21+ healthcare integrations, each with\ndifferent auth models & API surfaces", {
    x: c1x + 0.15, y: cy + 0.15, w: colW - 0.3, h: 0.8,
    fontSize: 10, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3, valign: "top",
  });
  const chips = ["Gmail", "Drive", "Athena", "Dr. Chrono", "Kindbody", "and more"];
  chips.forEach((c, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const cx = c1x + 0.15 + col * ((colW - 0.3) / 2);
    const cyy = cy + 1.1 + row * 0.4;
    s.addShape(prs.ShapeType.rect, {
      x: cx, y: cyy, w: (colW - 0.3) / 2 - 0.08, h: 0.3,
      fill: { color: WHITE }, rectRadius: 0.04, line: { color: "E0E0E0", width: 0.5 },
    });
    s.addText(c, {
      x: cx, y: cyy + 0.02, w: (colW - 0.3) / 2 - 0.08, h: 0.26,
      fontSize: 8, fontFace: "Calibri", color: DARK_TEXT, align: "center", valign: "middle",
    });
  });

  // ── Arrow 1 ──
  const a1x = c1x + colW;
  s.addText("→", {
    x: a1x, y: cy, w: arrowW, h: 3.8,
    fontSize: 24, fontFace: "Calibri", color: BLUE, align: "center", valign: "middle",
  });

  // ── Column 2: 4 Patterns ──
  const c2x = a1x + arrowW;
  s.addText("4 Reusable Patterns", {
    x: c2x, y: cy - 0.3, w: colW, h: 0.25,
    fontSize: 9, fontFace: "Calibri", bold: true, color: BLUE,
  });
  const patterns = [
    { label: "Simple OAuth", desc: "One-click connect" },
    { label: "API Credential", desc: "API key + endpoint URL" },
    { label: "Complex OAuth", desc: "Scoped permission access" },
    { label: "Hybrid Fallback", desc: "OAuth-first, credential fallback" },
  ];
  const cardH = 0.78;
  const cardGap = 0.15;
  patterns.forEach((p, i) => {
    const py = cy + i * (cardH + cardGap);
    s.addShape(prs.ShapeType.rect, {
      x: c2x, y: py, w: colW, h: cardH,
      fill: { color: WHITE }, rectRadius: 0.08,
      line: { color: "E0E0E0", width: 0.5 }, shadow: { type: "outer", blur: 3, offset: 1, color: "CCCCCC", opacity: 0.3 },
    });
    // Numbered circle
    s.addShape(prs.ShapeType.ellipse, {
      x: c2x + 0.12, y: py + 0.12, w: 0.3, h: 0.3,
      fill: { color: BLUE },
    });
    s.addText(String(i + 1), {
      x: c2x + 0.12, y: py + 0.12, w: 0.3, h: 0.3,
      fontSize: 10, fontFace: "Calibri", bold: true, color: WHITE, align: "center", valign: "middle",
    });
    s.addText(p.label, {
      x: c2x + 0.52, y: py + 0.06, w: colW - 0.65, h: 0.28,
      fontSize: 12, fontFace: "Calibri", bold: true, color: PURPLE, valign: "middle",
    });
    s.addText(p.desc, {
      x: c2x + 0.52, y: py + 0.36, w: colW - 0.65, h: 0.3,
      fontSize: 9, fontFace: "Calibri", color: DARK_TEXT, valign: "top",
    });
  });

  // ── Arrow 2 ──
  const a2x = c2x + colW;
  s.addText("→", {
    x: a2x, y: cy, w: arrowW, h: 3.8,
    fontSize: 24, fontFace: "Calibri", color: BLUE, align: "center", valign: "middle",
  });

  // ── Column 3: Outcome ──
  const c3x = a2x + arrowW;
  s.addText("Outcome", {
    x: c3x, y: cy - 0.3, w: colW, h: 0.25,
    fontSize: 9, fontFace: "Calibri", bold: true, color: "059669",
  });
  s.addShape(prs.ShapeType.rect, {
    x: c3x, y: cy, w: colW, h: 3.8,
    fill: { color: "ECFDF5" }, rectRadius: 0.1,
    line: { color: "D1FAE5", width: 0.5 },
  });
  s.addText("One pattern, infinite integrations.\nBlockers surfaced upfront,\nnever mid-config.", {
    x: c3x + 0.15, y: cy + 0.5, w: colW - 0.3, h: 2.8,
    fontSize: 13, fontFace: "Calibri", bold: true, color: "065F46", align: "center", valign: "middle",
    lineSpacingMultiple: 1.4,
  });
}

// ──────────────────────── SLIDE: XY Impact ────────────────────────
{
  const s = newSlide(prs);
  title(s, "XY Corp: Impact");

  s.addShape(prs.ShapeType.rect, {
    x: M + 0.5, y: 1.5, w: W - M * 2 - 1.0, h: 1.8,
    fill: { color: BLUE },
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
    "Self-serve AI orchestration became a core sales asset. CEO pitched it directly to enterprise customers.",
    "Production-wired to Temporal for live agent orchestration.",
    "\"Complex flows made chat-friendly.\"",
  ];
  impacts.forEach((imp, i) => {
    const iy = 3.6 + i * 0.55;
    s.addText("▸  " + imp, {
      x: M + 0.3, y: iy, w: W - M * 2 - 0.6, h: 0.5,
      fontSize: 12, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.25, valign: "top",
    });
  });
}

// ──────────────────────── SLIDE 16: XY What I'd do differently ────────────────────────
{
  const s = newSlide(prs);
  title(s, "XY Corp: What I'd do differently");

  s.addShape(prs.ShapeType.rect, {
    x: M, y: 1.3, w: W - M * 2, h: 2.8,
    fill: { color: WARM },
  });

  s.addText([
    { text: "Heads down with the CPO. Not enough visibility into parallel engineering.\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.35 } },
    { text: "Design system and codebase drifted faster than I could close the gap.\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.35 } },
    { text: "If I did it again: a weekly 15-minute design-engineering sync, starting day one.", options: { fontSize: 14, fontFace: "Calibri", bold: true, color: BLUE, lineSpacingMultiple: 1.35 } },
  ], { x: M + 0.3, y: 1.5, w: W - M * 2 - 0.6, h: 2.4, valign: "top" });
}

// ──────────────────────── TRANSITION 2 ────────────────────────
{
  const s = prs.addSlide();
  s.background = { color: WHITE };
  // branding bar
  s.addText("Jacki Torres · Product Designer", {
    x: M, y: 0.5, w: W / 2, h: 0.35,
    fontSize: 12, fontFace: "Calibri", color: MUTED, align: "left",
  });
  s.addText("Portfolio / 2026", {
    x: W / 2, y: 0.5, w: W / 2 - M, h: 0.35,
    fontSize: 12, fontFace: "Calibri", color: MUTED, align: "right",
  });
  s.addShape(prs.ShapeType.ellipse, {
    x: 0.5, y: 0.3, w: 0.9, h: 0.9,
    fill: { color: "4361EE" },
    transparency: 92,
  });
  s.addShape(prs.ShapeType.ellipse, {
    x: W - 1.2, y: H - 1.0, w: 0.6, h: 0.6,
    fill: { color: "4361EE" },
    transparency: 94,
  });
  s.addText("A few other things I've built.", {
    x: M, y: 2.5, w: W - M * 2, h: 1.5,
    fontSize: 36, fontFace: "Georgia", bold: true, italic: true, color: BLUE, align: "center", valign: "middle",
  });
}

// ──────────────────────── SLIDE: Waldo Hero ────────────────────────
{
  const s = prs.addSlide();
  s.background = { color: WHITE };

  const AMBER = "D97706";

  // Branding bar
  s.addText("Jacki Torres · Product Designer", {
    x: M, y: 0.25, w: W / 2, h: 0.3,
    fontSize: 11, fontFace: "Calibri", color: MUTED, align: "left",
  });
  s.addText("Portfolio / 2026", {
    x: W / 2, y: 0.25, w: W / 2 - M, h: 0.3,
    fontSize: 11, fontFace: "Calibri", color: MUTED, align: "right",
  });

  // Built-for logo at top left
  const waldoLogo = img("/logos/waldo.svg");
  if (waldoLogo) {
    s.addImage({ path: waldoLogo, x: M, y: 0.75, w: 0.8, h: 0.35, sizing: { type: "contain", w: 0.8, h: 0.35 } });
  }

  // Accent tag
  s.addText("HEALTHTECH", {
    x: M, y: 1.3, w: COL, h: 0.25,
    fontSize: 10, fontFace: "Calibri", bold: true, color: AMBER, align: "left",
  });

  // Project name
  s.addText("Waldo Health", {
    x: M, y: 1.6, w: COL, h: 0.65,
    fontSize: 34, fontFace: "Georgia", bold: true, color: DARK_TEXT, align: "left",
  });

  // Headline
  s.addText("End-to-end mobile patient app for HIPAA-compliant contact lens ordering", {
    x: M, y: 2.3, w: COL, h: 0.5,
    fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, align: "left",
  });

  // Description
  s.addText("Designed patient portal app MVP and full checkout experience in sync with Waldo's doctor portal. Shipped 1 month early.", {
    x: M, y: 2.9, w: COL, h: 0.55,
    fontSize: 12, fontFace: "Calibri", color: MUTED, lineSpacingMultiple: 1.3, align: "left", valign: "top",
  });

  // Tags row
  s.addText("healthtech  mobile    2025", {
    x: M, y: 3.55, w: COL, h: 0.25,
    fontSize: 10, fontFace: "Calibri", bold: true, color: AMBER, align: "left",
  });

  // Metrics
  s.addText("1 month early", {
    x: M, y: 3.95, w: COL / 2, h: 0.6,
    fontSize: 36, fontFace: "Georgia", bold: true, color: AMBER, align: "center",
  });
  s.addText("Shipped", {
    x: M, y: 4.55, w: COL / 2, h: 0.25,
    fontSize: 10, fontFace: "Calibri", color: MUTED, align: "center",
  });
  s.addText("100% patient app", {
    x: M + COL / 2, y: 3.95, w: COL / 2, h: 0.6,
    fontSize: 36, fontFace: "Georgia", bold: true, color: AMBER, align: "center",
  });
  s.addText("Ownership", {
    x: M + COL / 2, y: 4.55, w: COL / 2, h: 0.25,
    fontSize: 10, fontFace: "Calibri", color: MUTED, align: "center",
  });

  // Right side — enlarged hero video
  const waldoHero = img("/case-studies/waldo-hero.mp4");
  if (waldoHero) {
    s.addMedia({
      path: waldoHero, type: "video",
      x: COL + M + GAP, y: 0.4, w: COL - GAP, h: H - 1.0,
    });
  }
}

// ──────────────────────── SLIDE 18: Waldo Health ────────────────────────
{
  const s = newSlide(prs);
  title(s, "Waldo Health — Zero-to-one patient app");

  const dash = img("/waldo/dashboard.png");
  if (dash) {
    s.addImage({ path: dash, x: M, y: 3.5, w: W - M * 2, h: 3.5, sizing: { type: "contain", w: W - M * 2, h: 3.5 } });
  }

  s.addText([
    { text: "DTC prescription contacts (acquired by Specsavers).\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3 } },
    { text: "Sole designer. Dual ecosystem: doctor portal + patient app. 100% from zero.\n\n", options: { fontSize: 14, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3 } },
    { text: "Delivered 1 month early on a $5 budget.", options: { fontSize: 15, fontFace: "Georgia", bold: true, color: BLUE, lineSpacingMultiple: 1.3 } },
  ], { x: M, y: 1.2, w: W - M * 2, h: 2.0, valign: "top" });
}

// ──────────────────────── SLIDE 19: Other work ────────────────────────
{
  const s = newSlide(prs);
  title(s, "More from the portfolio");

  const projects = [
    { name: "7dish", tag: "FOODTECH", desc: "Meal planning for working parents. 3 core flows redesigned, A/B tested.", img: "/7dish/homepage-after.png", accent: "0D9488" },
    { name: "SideNook", tag: "MAC APP", desc: "macOS terminal emulator. Sole designer + SwiftUI developer. Shipped April 2026.", img: null, accent: "0891B2" },
    { name: "Fundr", tag: "FINTECH · AI", desc: "SaaS paywall redesign. 20% more upgrades, ~50% fewer sales calls.", img: "/fundr/dashboard-premium.png", accent: "059669" },
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
      x: px + 0.15, y: 2.2, w: pw - 0.3, h: 1.0,
      fontSize: 11.5, fontFace: "Calibri", color: DARK_TEXT, lineSpacingMultiple: 1.3, valign: "top",
    });

    if (p.img) {
      const ip = img(p.img);
      if (ip) {
        s.addImage({ path: ip, x: px + 0.15, y: 3.4, w: pw - 0.3, h: 1.8, sizing: { type: "contain", w: pw - 0.3, h: 1.8 } });
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
    ["Design system + code out of sync", "Built XY's first design system and 60+ components from zero."],
    ["No time to build foundation", "Sole designer twice. Build foundation while still shipping."],
    ["Research function missing", "Lightweight feedback loops — fast, repeatable, tied to decisions."],
    ["Process is hodgepodge", "Structure upstream without bureaucracy. Problem definition is non-negotiable."],
    ["PMs jumping to Lovable", "Reframe the brief, pressure-test the problem, align before anyone opens a tool."],
    ["Prototypes disconnected", "AI-native pipeline: Figma → GitHub → Engineering. Hours, not weeks."],
    ["Volume of execution", "Not a consulting engagement. Here to ship."],
    ["Scaling without slowing", "Small team, fast pace, high quality bar — my default."],
  ];

  const colW = [3.2, W - M * 2 - 3.2];
  const rowH = 0.4;
  const headerH = 0.45;
  const tableY = 1.2;

  s.addShape(prs.ShapeType.rect, {
    x: M, y: tableY, w: colW[0], h: headerH,
    fill: { color: BLUE },
  });
  s.addText(rows[0][0], {
    x: M + 0.15, y: tableY, w: colW[0] - 0.15, h: headerH,
    fontSize: 11, fontFace: "Calibri", bold: true, color: WHITE, valign: "middle",
  });
  s.addShape(prs.ShapeType.rect, {
    x: M + colW[0], y: tableY, w: colW[1], h: headerH,
    fill: { color: BLUE },
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
      fontSize: 10, fontFace: "Calibri", bold: true, color: BLUE, valign: "middle",
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
    fontSize: 13, fontFace: "Calibri Light", color: BLUE, align: "center",
  });
  s.addText("jackelinetorres.co", {
    x: M, y: 4.9, w: W - M * 2, h: 0.3,
    fontSize: 13, fontFace: "Calibri", bold: true, color: BLUE, align: "center",
  });
}

// ──────────────────────── SAVE ────────────────────────
const outPath = "/Users/jacki/Desktop/jiro-health-presentation.pptx";
await prs.writeFile({ fileName: outPath });
console.log("DONE:", outPath);
