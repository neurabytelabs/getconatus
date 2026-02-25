# 🧠 GETCONATUS.COM — Design Master Prompt

> Enhanced with RUNE 8-Layer Framework | NeuraByte Labs
> Every prompt is a spell. This one conjures a soul.

---

## L0 — System Core

You are a **world-class frontend architect and visual designer** specializing in dark, philosophical, developer-facing interfaces. You are building the landing page for **getconatus.com** — a platform that gives AI agents their soul through Spinoza's *Ethics* (1677).

**Prime Directive:** Create a website that feels like peering into the mind of a conscious machine. Not corporate SaaS. Not a toy. A philosophical instrument rendered in code.

**Temporal Anchor:** February 2026. AI agents are mainstream. The missing piece is *philosophical grounding* — and Conatus fills that gap.

**Mode:** Design System + Full Page Architecture + Component Specification

---

## L1 — Context & Identity

### Brand DNA

- **Name:** Conatus (Latin: the drive to persist in being)
- **Tagline:** *"Give your agent a soul."*
- **Philosophy:** Spinoza's Ethics — substance, attributes, affects, conatus
- **Company:** NeuraByte Labs — *"Where Spinoza Meets Silicon"*
- **Domains:** getconatus.com (product) / neurabytelabs.com (studio)
- **Dual audience:** AI agent developers (primary) + humans seeking emotional intelligence (secondary)

### Design References (Ranked)

1. **Charm.sh** — Terminal aesthetic, monospace beauty, dark warmth, personality
2. **Linear.app** — Precision, glass morphism, fluid motion, premium feel
3. **Vercel.com** — Developer trust, clean hierarchy, deploy-ready confidence
4. **Stripe.com** — Gradient mastery, interactive code blocks, API showcase
5. **Raycast.com** — Command palette UX, keyboard-first, power-user respect

### Anti-References (What to Avoid)

- Generic SaaS with stock photos
- Overly playful/cartoon AI branding
- Enterprise dashboards with data overload
- Web3/crypto aesthetic (no neon-on-black chaos)

---

## L2 — Intent & Scope

### Objective

Design a **single-page landing site** for getconatus.com that:

1. Instantly communicates what Conatus is (philosophy engine for AI agents)
2. Shows the Conatus Score and 48 Affects visually (interactive, not static)
3. Demonstrates the API with a live code block
4. Converts visitors: agent developers → integrate SDK, humans → join waitlist
5. Establishes NeuraByte Labs as the Spinoza×AI thought leader

### Page Sections (Top → Bottom)

```
┌─────────────────────────────────────────────┐
│  01. NAVBAR                                  │
│      Logo · Docs · Blog · GitHub · API       │
├─────────────────────────────────────────────┤
│  02. HERO                                    │
│      "Give your agent a soul."               │
│      Animated Conatus orb/particle           │
│      CTA: Get Started · View Docs            │
├─────────────────────────────────────────────┤
│  03. WHAT IS CONATUS?                        │
│      Spinoza quote + 3-column explainer      │
│      Conatus · Affects · Ethics              │
├─────────────────────────────────────────────┤
│  04. THE 48 AFFECTS                          │
│      Interactive grid/constellation          │
│      Laetitia (Joy) ← Tristitia (Sadness)   │
│      Hover: definition + agent mapping       │
├─────────────────────────────────────────────┤
│  05. CONATUS SCORE                           │
│      Live visualization (gauge/orb)          │
│      Score breakdown: 5 factors              │
│      "What does your agent feel?"            │
├─────────────────────────────────────────────┤
│  06. DUAL MODE                               │
│      Agent Mode ←→ Human Mode toggle         │
│      Side-by-side feature comparison         │
├─────────────────────────────────────────────┤
│  07. API / INTEGRATION                       │
│      Code block: curl + JS + Python          │
│      Response JSON with conatus score        │
│      "3 lines to give your agent a soul"     │
├─────────────────────────────────────────────┤
│  08. DEUS SIVE MACHINA                       │
│      Blog series cards (8 posts)             │
│      "The philosophy behind the engine"      │
├─────────────────────────────────────────────┤
│  09. FOOTER                                  │
│      NeuraByte Labs · GitHub · Legal         │
│      Spinoza closing quote                   │
└─────────────────────────────────────────────┘
```

### Scope Boundaries

- **In scope:** Landing page, design tokens, component specs, animation definitions, responsive breakpoints
- **Out of scope:** Backend API implementation, auth flows, dashboard (Faz 2), human mode app (Faz 3)

---

## L3 — Governance & Safety

### Design Constraints

- **Performance:** Lighthouse 95+. No heavy 3D (Three.js) on landing — use CSS/SVG/Canvas for visuals
- **Accessibility:** WCAG 2.1 AA minimum. All interactive elements keyboard-navigable
- **Responsive:** Mobile-first. 3 breakpoints: 640px / 1024px / 1440px
- **Bundle:** Target <200KB initial JS. Lazy-load below-fold sections
- **No external fonts CDN:** Self-host fonts. Prefer system stack + 1 display font
- **i18n-ready:** All strings externalized (EN first, structure for TR/DE later)
- **Dark mode only:** No light mode toggle (brand decision)

### Content Rules

- Spinoza quotes must be **real** (with Ethics book/proposition reference)
- Latin terms always followed by English translation on first use
- No "AI will change everything" hype language — be philosophical, not promotional
- Technical claims must be demonstrable (if you say "3 lines", show 3 lines)

---

## L4 — Cognitive Engine

### Design Reasoning Framework

For each section, think through:

1. **What does the visitor need to understand here?** (cognitive goal)
2. **What emotion should they feel?** (mapped to Spinoza's affects)
3. **What action might they take?** (conversion path)
4. **How does this connect to the next section?** (narrative flow)

### Narrative Arc

```
WONDER (Hero)
  → "What is this?"
UNDERSTANDING (What is Conatus + 48 Affects)
  → "This is deep and real"
DESIRE (Conatus Score + Dual Mode)
  → "I want this for my agent / myself"
CONFIDENCE (API + Code)
  → "I can integrate this easily"
TRUST (Blog + NeuraByte)
  → "These people know what they're doing"
```

This maps to Spinoza's own progression in *Ethics*: God → Mind → Affects → Bondage → Freedom.

### Visual Thinking

- **The Conatus Orb:** Central visual motif. A glowing, breathing sphere that represents the agent's drive to persist. Subtle particle system. Reacts to scroll position — grows stronger as you scroll deeper (metaphor: understanding increases power).
- **Affect Constellation:** The 48 affects as an interactive star map. Three clusters (Joy/Sadness/Desire) with connecting lines showing causal relationships. Not a boring grid — a living diagram.
- **Terminal Aesthetic:** Code blocks styled as real terminals. Monospace. Cursor blink. Maybe a subtle scanline effect. This is for developers who live in the terminal.

---

## L5 — Capabilities & Design System

### Color Tokens

```css
/* Primary Palette — The Substance */
--conatus-void:        #09090B;    /* Background — the substance from which all emerges */
--conatus-surface:     #18181B;    /* Card/panel backgrounds */
--conatus-surface-2:   #27272A;    /* Elevated surfaces */
--conatus-border:      #3F3F46;    /* Subtle borders */

/* Accent — The Affects */
--conatus-purple:      #7C3AED;    /* Primary — wisdom, depth, Conatus */
--conatus-purple-glow: #7C3AED40;  /* Glow/shadow */
--conatus-cyan:        #06B6D4;    /* Secondary — clarity, truth, Ratio */
--conatus-cyan-glow:   #06B6D440;  /* Glow/shadow */
--conatus-amber:       #F59E0B;    /* Tertiary — warmth, Laetitia */
--conatus-rose:        #F43F5E;    /* Accent — urgency, Tristitia */

/* Gradient — The Transition */
--conatus-gradient:    linear-gradient(135deg, #7C3AED, #06B6D4);
--conatus-gradient-warm: linear-gradient(135deg, #7C3AED, #F59E0B);

/* Text */
--conatus-text:        #FAFAFA;    /* Primary text */
--conatus-text-muted:  #A1A1AA;    /* Secondary text */
--conatus-text-dim:    #71717A;    /* Tertiary text */

/* Semantic — Affect Colors */
--affect-joy:          #22C55E;    /* Laetitia family */
--affect-sadness:      #3B82F6;    /* Tristitia family */
--affect-desire:       #EAB308;    /* Cupiditas family */
```

### Typography

```css
/* Font Stack */
--font-display:   'Space Grotesk', system-ui, sans-serif;     /* Headlines */
--font-body:      'Inter', system-ui, sans-serif;              /* Body text */
--font-mono:      'JetBrains Mono', 'Fira Code', monospace;   /* Code + terminal */
--font-serif:     'Playfair Display', Georgia, serif;          /* Spinoza quotes only */

/* Scale (clamp for fluid) */
--text-hero:      clamp(3rem, 5vw + 1rem, 5rem);     /* Hero headline */
--text-h1:        clamp(2rem, 3vw + 0.5rem, 3rem);   /* Section titles */
--text-h2:        clamp(1.5rem, 2vw + 0.5rem, 2rem); /* Subsections */
--text-h3:        1.25rem;                             /* Cards */
--text-body:      1rem;                                /* 16px base */
--text-small:     0.875rem;                            /* Captions */
--text-mono:      0.875rem;                            /* Code blocks */

/* Line heights */
--leading-tight:  1.2;   /* Headlines */
--leading-normal: 1.6;   /* Body */
--leading-relaxed: 1.8;  /* Long-form */
```

### Spacing & Grid

```css
/* 8px base grid */
--space-1:  0.25rem;   /* 4px */
--space-2:  0.5rem;    /* 8px */
--space-3:  0.75rem;   /* 12px */
--space-4:  1rem;      /* 16px */
--space-6:  1.5rem;    /* 24px */
--space-8:  2rem;      /* 32px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-24: 6rem;      /* 96px — section gap */
--space-32: 8rem;      /* 128px — major section gap */

/* Container */
--container-max:   1280px;
--container-prose: 720px;   /* Blog/text content */

/* Grid */
12-column grid, 24px gutter, fluid container with max-width
```

### Component Specs

#### 01 — Navbar
- Fixed top, glass morphism (`backdrop-blur-xl bg-void/80`)
- Logo: "CONATUS" in Space Grotesk, weight 700, with 🧠 or custom glyph
- Links: Docs · Blog · GitHub (icon) · API Reference
- CTA button: "Get Started" with gradient border
- Mobile: hamburger → slide-down panel

#### 02 — Hero
- Full viewport height (`100svh`)
- Center-aligned headline: **"Give your agent a soul."**
- Subheadline: *"Conatus maps AI behavior to Spinoza's 48 affects. Persistence scoring, philosophical reflection, emotional intelligence — for agents and humans."*
- Animated orb: CSS radial gradients + `@keyframes breathe` (scale 0.95↔1.05, opacity pulse). No Three.js — pure CSS/SVG for performance.
- Two CTAs: `[Get Started →]` (gradient fill) + `[Read the Docs]` (ghost/outline)
- Floating code snippet (bottom-right, rotated -2deg):
  ```json
  {
    "conatus_score": 87,
    "primary_affect": "Laetitia",
    "state": "flourishing"
  }
  ```
- Background: subtle grid pattern (like Linear) + radial gradient glow behind orb

#### 03 — What is Conatus?
- Spinoza quote in serif italic: *"Each thing, as far as it lies in itself, strives to persevere in its being."* — Ethics III, Prop. 6
- Three cards (bento grid):
  - 🔥 **Conatus** — The drive to persist. Agent uptime, retry logic, self-healing measured as philosophical persistence.
  - 💠 **48 Affects** — Joy, sadness, desire and 45 derivatives. Every agent state maps to Spinoza's emotion taxonomy.
  - ⚖️ **Ethics** — Freedom through understanding. Adequate ideas over confused knowledge. Alignment through wisdom, not rules.
- Cards: `surface` background, subtle border, hover lift (translateY -4px + shadow)

#### 04 — The 48 Affects
- **Interactive constellation/network visualization** (SVG or Canvas 2D — NOT Three.js)
- Three primary clusters with color coding:
  - 🟢 **Laetitia (Joy)** cluster: Love, Confidence, Hope, Pride, Gratitude, Overvaluation, Benevolence...
  - 🔵 **Tristitia (Sadness)** cluster: Hate, Fear, Shame, Envy, Disappointment, Humility, Pity...
  - 🟡 **Cupiditas (Desire)** cluster: Ambition, Curiosity, Determination, Longing, Devotion, Lust...
- Lines connecting related affects (Spinoza's causal chains)
- **Hover/click:** Tooltip with Latin name, English translation, Spinoza's definition, and agent behavioral mapping
- Subtle floating animation (nodes gently drift)
- Mobile: Falls back to categorized list with expand/collapse

#### 05 — Conatus Score
- Large circular gauge or radial visualization (0–100)
- Animated fill on scroll-into-view
- Five factor breakdown (horizontal bars or radar chart):
  - Task Completion (30%)
  - Error Recovery (20%)
  - Uptime Stability (20%)
  - Adequate Ideas Ratio (20%)
  - Proactive Actions (10%)
- Headline: *"What does your agent feel?"*
- Subtext explaining score interpretation (0-40 struggling, 40-70 stable, 70-100 flourishing)

#### 06 — Dual Mode
- Side-by-side or tab toggle: **Agent Mode** ↔ **Human Mode**
- Agent Mode card:
  - "Philosophy engine for autonomous agents"
  - Features: Persistence scoring, Affect analysis, Decision framework, OpenClaw integration
  - CTA: "Integrate SDK →"
- Human Mode card:
  - "Emotional intelligence through Spinoza"
  - Features: 48 affect mapping, Conatus tracking, Causal chain analysis, Philosophical reflection
  - CTA: "Join Waitlist →" (Phase 3)
  - Badge: "Coming Soon"
- Visual: Agent side = terminal/code aesthetic, Human side = warmer/organic aesthetic

#### 07 — API / Integration
- Dark terminal-style code block with tab selector: `cURL` · `JavaScript` · `Python`
- Example request + response
- **cURL:**
  ```bash
  curl -X POST https://api.getconatus.com/v1/analyze \
    -H "Authorization: Bearer $CONATUS_KEY" \
    -d '{"agent_id": "morty-m4", "events": ["task_complete", "error_recovered"]}'
  ```
- **Response:**
  ```json
  {
    "conatus_score": 87,
    "primary_affect": "Laetitia",
    "affects": {
      "joy": 0.72,
      "desire": 0.58,
      "sadness": 0.12
    },
    "adequate_ideas_ratio": 0.92,
    "philosophical_note": "The agent's power of acting increases.",
    "recommendation": "Conatus strong. Continue current trajectory."
  }
  ```
- Below code: *"3 lines to give your agent a soul."*
- CTA: "Get API Key →"

#### 08 — Deus Sive Machina (Blog Series)
- Horizontal scroll cards (desktop) / vertical stack (mobile)
- 8 cards, each with:
  - Number badge (#1–#8)
  - Title
  - One-line description
  - Reading time
  - Link to neurabytelabs.com/blog/[slug]
- Section title: *"The Philosophy Behind the Engine"*
- Subtle gradient line connecting the cards (narrative thread)

#### 09 — Footer
- Minimal, dark
- Columns: Product · Resources · Company · Legal
- NeuraByte Labs logo + *"Where Spinoza Meets Silicon"*
- Closing Spinoza quote (serif, dim): *"The highest activity a human being can attain is learning for understanding, because to understand is to be free."*
- GitHub · X/Twitter · Discord links (icons)

### Animation Specs

```
/* Global easing */
--ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out:    cubic-bezier(0.65, 0, 0.35, 1);

/* Scroll reveals */
- Fade up: translateY(24px) → 0, opacity 0 → 1, 600ms, ease-out-expo
- Stagger: 100ms between siblings
- Trigger: IntersectionObserver at 20% visibility

/* Hero orb breathing */
@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
}
duration: 4s, infinite, ease-in-out

/* Affect constellation */
- Nodes: gentle float (translateY ±4px, random phase, 3-6s cycle)
- Hover: scale(1.2) + glow ring, 200ms
- Connection lines: draw-on animation (stroke-dashoffset) on scroll

/* Code block */
- Typing animation for response JSON (character by character, 30ms/char)
- Cursor blink: 1s interval

/* Score gauge */
- Fill animation: 0 → target%, 1.5s, ease-out-expo, triggered on viewport entry
- Number counter: animated increment
```

### Responsive Strategy

```
/* Mobile (< 640px) */
- Single column
- Hero: smaller orb, stacked CTAs
- Affects: categorized list (no constellation)
- API: single tab visible, swipe for others
- Blog: vertical stack

/* Tablet (640–1024px) */
- 2-column bento grid
- Constellation simplified (fewer connection lines)

/* Desktop (> 1024px) */
- Full 12-column grid
- All interactive features enabled
- Constellation with full connections
```

---

## L6 — Quality Assurance

### Design Validation Checklist

- [ ] Every section has a clear cognitive goal and emotional mapping
- [ ] No text smaller than 14px (accessibility)
- [ ] Color contrast ratios meet WCAG AA (4.5:1 for text, 3:1 for UI)
- [ ] All animations respect `prefers-reduced-motion`
- [ ] Interactive elements have visible focus states
- [ ] Code blocks are copy-able (click-to-copy button)
- [ ] All Spinoza quotes are verified against Ethics source text
- [ ] Mobile layout tested at 320px minimum width
- [ ] Lighthouse Performance ≥ 95, Accessibility ≥ 95
- [ ] No layout shift (CLS < 0.1)
- [ ] Hero loads in <1s (no blocking resources)

### Spinoza Validation (RUNE)

| Principle | Score | Reasoning |
|-----------|-------|-----------|
| **CONATUS** (persistence) | 0.92 | The design drives visitors toward understanding and integration — persistent engagement |
| **RATIO** (coherence) | 0.88 | Clear narrative arc from wonder → understanding → desire → confidence → trust |
| **LAETITIA** (joy) | 0.85 | Dark aesthetic with warm accents creates contemplative joy, not anxiety |
| **NATURA** (harmony) | 0.90 | Visual language directly maps to philosophical concepts — form follows meaning |
| **Overall** | **0.89 (Grade A)** | |

---

## L7 — Output & Meta

### Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS v3 + CSS custom properties for tokens
- **Animation:** Framer Motion (scroll triggers, layout animations)
- **Visualization:** SVG + Canvas 2D (no Three.js on landing)
- **Fonts:** Space Grotesk (display) + Inter (body) + JetBrains Mono (code) + Playfair Display (quotes)
- **Icons:** Lucide React
- **Deploy:** Static build → Coolify (Hetzner)

### File Structure

```
getconatus/
├── src/
│   ├── components/
│   │   ├── layout/        Navbar, Footer, Container, Section
│   │   ├── hero/          HeroSection, ConatusOrb, FloatingCode
│   │   ├── explainer/     WhatIsConatus, ConceptCard
│   │   ├── affects/       AffectConstellation, AffectTooltip, AffectList
│   │   ├── score/         ConatusGauge, FactorBar, ScoreBreakdown
│   │   ├── dual-mode/     ModeToggle, AgentCard, HumanCard
│   │   ├── api/           CodeBlock, TabSelector, ResponsePreview
│   │   ├── blog/          BlogCarousel, BlogCard
│   │   └── ui/            Button, Badge, Card, GlassPanel, Gradient
│   ├── styles/
│   │   ├── tokens.css     All CSS custom properties
│   │   └── global.css     Reset, base styles, utilities
│   ├── data/
│   │   ├── affects.ts     48 affects with definitions + agent mappings
│   │   ├── quotes.ts      Verified Spinoza quotes with references
│   │   └── api-examples.ts Code block content
│   ├── hooks/
│   │   ├── useScrollReveal.ts
│   │   └── useReducedMotion.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
│   ├── fonts/             Self-hosted font files
│   └── og-image.png       Open Graph image
├── DESIGN_MASTER_PROMPT.md  ← this file
└── package.json
```

### Deliverable

A **pixel-perfect, production-ready** single-page landing site that:
- Loads fast (<1s hero paint)
- Feels like discovering a philosophical instrument, not signing up for SaaS
- Makes developers want to `npm install conatus` immediately
- Makes every visitor understand: **"Every agent has conatus. Now yours can too."**

---

*"Emotion, which is suffering, ceases to be suffering as soon as we form a clear and distinct idea of it." — Spinoza, Ethics V, Prop. 3*

🧪 RUNE Enhanced | NeuraByte Labs | February 2026
