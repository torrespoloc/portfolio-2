# Case study eyebrow titles

Generic 1-2 word labels for `className={sectionHeader}` above section headings.

## By theme

### Phase / Timeline

- Discovery
- Research
- Analysis
- Exploration
- Iteration
- Execution
- Validation
- Reflection

### Problem / Framing

- Context
- Background
- Problem
- Challenge
- Constraint
- Opportunity

### Solution / Output

- Solution
- Approach
- Strategy
- Process
- Concept
- Design
- Execution
- Delivery

### Results / Impact

- Impact
- Outcomes
- Results
- Learnings
- Takeaways
- Metrics
- Next steps

### Content sections

- Overview
- Goals
- Scope
- Timeline
- Role
- Process



## Constraints


| Rule                                               | Applies                                                                                                                                                        |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Max 2 words**                                    | If it needs 2+ words, use a subheading instead. The eyebrow is a label, not a description.                                                                     |
| **Uppercase** (already handled by CSS `uppercase`) | No need to write them in ALL CAPS in JSX — the `uppercase` Tailwind utility handles it.                                                                        |
| **No punctuation**                                 | No periods, no colons, no em dashes. `&` in `sectionHeader` text should be replaced with `&`.                                                                  |
| **Consistent across case studies**                 | If you use "Impact" in Fundr, use "Impact" in Waldo — not "Outcomes" in one and "Results" in another. Same labels for same roles.                              |
| **No leading articles**                            | "Problem", not "The Problem"; "Solution", not "The Solution" (unless the design requires it for rhythm — see Fundr's "The Controversy", "The Core Mechanism"). |
| **No verbs**                                       | Nouns only. "Research", not "Researching"; "Design", not "Designing".                                                                                          |
| **No sentences**                                   | A sentence means it should be a subheading `<h3>`, not an eyebrow `<h2>` with `sectionHeader`.                                                                 |




## The shortlist (recommended for new case studies)

These cover 90% of sections without inventing new labels:

```
Context          — situation / why now
Problem          — the core issue
Research         — user research / discovery
Strategy         — the plan / approach
Design           — UI & visual decisions
Iteration        — what changed along the way
Solution         — what was built
Validation       — testing / feedback
Impact           — measurable results
Reflection       — what I'd do differently
```



## Prior art (from this codebase)

Used in Fundr, Waldo, XY, 7dish, SideNook:

**Short (&leq;2 words):** Impact, Iteration, Outcomes, Problem, Solution, Strategy, Context, Research, Approach, Analysis, Discovery, Exploration, Challenge, Constraint, Design, Process, Overview, Goals, Results, Takeaways, Metrics, Validation, Reflection, Delivery, Scope, Timeline, Concept, Execution, Learnings

**Long (avoid — use as** `<h3>` **instead UNLESS there is an H3 in use already. Never duplicate nor be redundant.):** Why XY needed a self-serve AI experience, Research that shaped the product, A new brand arrived two weeks before we shipped, What I learned designing my first healthcare product, Why this product exists, The full story in ~4-min

## Usage

```tsx
<motion.h2
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  className={`${sectionHeader} mb-6`}
>
  Impact
</motion.h2>
```

