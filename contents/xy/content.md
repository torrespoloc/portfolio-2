# XY.AI Case Study

## Meta

- Role: AI Product Designer
- Duration: 4 months
- Team: CPO, CEO, 4 Engineers
- Tools: GitHub, Cursor, Claude Code, Claude, Figma
- Tags: Healthcare AI, SaaS, NDA

## Headline

Turning a suite of AI agents into a platform anyone can orchestrate.

## Hero Media

- `/xy/IntegrationsHub.mp4`
- `/xy/BrowserAgent.mp4`
- `/xy/DataExtraction.mp4`
- `/xy/KnowledgeBase.mp4`
- `/xy/TeamProductivity.mp4`

## Problem

### Why XY needed a self-serve AI experience

XY's platform runs on AI agents — but configuring them required a sales call.

Verification, scheduling, claims — the agents could handle it all. But every hour sales spent walking users through setup was an hour they couldn’t sell. I had four months to change that.

Three things standing in the way

1. AI agents required a human to configure
2. UI built for engineers, not healthcare teams
3. No orchestration without a sales call

"Incredibly useful, impossibly confusing to use without a demo."

User during discovery interviews

XY.AI user types — personas and roles that interact with the AI agent platform

## Discovery

### Discovery & Research

I started by talking to healthcare operations teams. Three patterns surfaced in every conversation.

Before writing any code or designing any screens, I needed to understand how healthcare teams actually thought about AI agents. The platform was powerful — but was anyone using it without hand-holding?

Patterns that defined the problem

1. Agents were abstract — teams couldn’t describe their setup until they saw it
2. Different workflows, same bottleneck — configuration was the blocker
3. “I’d need a demo” came up in every single conversation

The problem wasn’t the UI’s quality. Users couldn’t define what they needed until they saw what was possible. A forms-based approach asked them to configure something they’d never encountered before.

Key research insight

Three directions I explored

- Direction A: Forms-first
  - Traditional configuration forms with dropdowns and fields. Familiar but didn’t solve the discovery problem.
- Direction B: Wizard / guided setup
  - Step-by-step wizard that walked users through configuration. Helped onboarding but felt rigid for ongoing use.
- Direction C: Chat-first
  - A conversational interface where users describe what they need. Natural, explorable, and self-serve.

## Building the Foundation

Before scaling the product, I built the design foundations the company needed.

XY had never had a dedicated designer — just engineers making UI decisions. Before I could ship, I needed the foundations every screen would depend on:

- A design system & semantic token architecture
- Writing guidelines for AI-facing UI
- Light, dark, and agent theming
- Interaction patterns that feel deliberate

Semantic tokens for AI workflows

Writing guidelines for AI-facing UI

Light, dark, and agent theming

Interaction patterns that feel deliberate

Color system study

- `/xy/color-system.mp4`

What this is

The complete color token system — primitives, semantic tokens, accessibility audit, and proposed system

Why it matters

Every component, every agent status, every interaction maps to this semantic system — no more guessing hex values

The result

A three-tier token system that lets engineers theme any new component without design input

Every design system decision was made with the same question: “Does this make the next screen faster to ship?” If the answer wasn’t yes, it didn’t go in.

Design principle

## What I Shipped

### 01 · AI agent orchestration

Three agents, one conversation.

I built a chat instead of forms. Users describe what they need. The system routes to the right agent. A multi-hour call becomes a five-minute conversation.

### 02 · Organism-level components

60+ components built for AI workflows.

Agent configuration cards, workflow status indicators, data extraction previews — built for fullscreen, sidebar, or embedded. Alongside the company's first design system: 8px grid, semantic tokens, language & tone, motion docs.

### Storybook visual artifact

- `/xy/storybook.png`

What this shows

The 60+ component library, documented and ready for engineering

Why it matters

Components designed for AI-agent interaction patterns — not generic UI

The result

Engineers pulled components directly from Storybook without designer intervention

### 03 · AI-native pipeline

Figma to engineering in hours.

Figma Design → Figma Make / Magic Patterns → GitHub → Engineering. Prototype-to-production in hours when a customer demo needed it. Storybook gave engineers direct access — no design handoff wait.

AI-native design stack

Figma Design → Figma Make / Magic Patterns → GitHub → Engineering  ·  Tracked in Linear

- `/logos/figma.png`
- `/logos/cursor.png`
- `/logos/claude-code.png`
- `/logos/github.png`
- `/logos/storybook.svg`

## Testing & Validation

Before committing to chat-first, I validated the direction with real users.

Three rounds of validation across different user groups, each designed to stress-test the chat-first hypothesis from a different angle.

Round 1

Healthcare ops interviews — chat metaphor clicked immediately

Round 2

Enterprise prospects understood in minutes — no engineering support needed

Round 3

Sales team could demo independently — a company first

Users who saw the chat interface immediately understood the agent model — something the forms-based approach couldn’t achieve in a single session. The CEO began pitching the self-serve AI experience directly to enterprise customers.

Validation outcome

## Impact & Results

Users orchestrated agents themselves. That self-serve UX became a core sales asset.

- The CEO pitched the AI orchestration experience directly — no engineer needed.
- Production-ready AI workflow components wired to Temporal for live agent orchestration.
- Self-serve AI experience became central to how the sales team closes deals.

"This is so cool! It makes perfect sense to make these complex flows chat-friendly. I would have trouble knowing where to start."

User during testing sessions

"Your design instinct is really strong, and that's hard to teach. The visual design combined with the UX… you did some really good work here."

Scott Cressman, CPO at XY

## Internal Practices Introduced

I was the only designer, reporting directly to the CPO and CEO. The workflow was mine to own.

1. Design-to-engineering pipeline ownership
   - Linear tracked every move from Figma to production. Clear tickets, estimates, review cycles.
2. Rigorous design standards
   - The company's first design practice: 8px grid, semantic tokens, typography, spacing, language & tone, motion documentation.
3. AI-powered workflow tracking via Claude MCP
   - Claude MCP connected Figma to production in hours, not sprints.

## Closing

Want a walkthrough?

Here’s what I’d love to walk you through:

- The AI agent orchestration flow
- The 60+ component library
- The AI-native pipeline from prototype to production

Email me

More case studies

- Fundr
- Waldo
- 7dish
- SideNook

## Exact Media Used

### Images

- `/xy/user-types.png`
- `/xy/storybook.png`

### Video / Motion

- `/xy/IntegrationsHub.mp4`
- `/xy/BrowserAgent.mp4`
- `/xy/DataExtraction.mp4`
- `/xy/KnowledgeBase.mp4`
- `/xy/TeamProductivity.mp4`
- `/xy/color-system.mp4`

### Logo Images

- `/logos/figma.png`
- `/logos/cursor.png`
- `/logos/claude-code.png`
- `/logos/github.png`
- `/logos/storybook.svg`

