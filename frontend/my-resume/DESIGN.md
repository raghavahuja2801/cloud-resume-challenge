---
name: Raghav Ahuja — Portfolio
description: Personal portfolio proving technical and creative excellence through engineered craft.
colors:
  bg: "#FFFFFF"
  surface: "#F7F6F4"
  ink: "#1E1D1B"
  muted: "#706C66"
  primary: "#C89B3C"
  primary-hover: "#B88A2E"
  accent: "#5B7B9A"
  accent-hover: "#4A6A89"
  dark-bg: "#1A1A1A"
  dark-surface: "#242322"
  dark-ink: "#EEEDEB"
  dark-muted: "#8A8680"
  dark-primary: "#D4A94E"
  dark-primary-hover: "#E0B860"
  dark-accent: "#7A9ABA"
  dark-accent-hover: "#8BAACA"
  success: "#7A9A7A"
  error: "#B05E5E"
typography:
  display:
    fontFamily: "'Instrument Serif', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Instrument Serif', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1rem, 2vw, 1.25rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.04em"
  code:
    fontFamily: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  card:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    rounded: "999px"
    padding: "{spacing.xs} {spacing.md}"
---

# Design System: The Architecture Lab

## 1. Overview

**Creative North Star: "The Architecture Lab"**

A personal portfolio that presents its owner as both a precise engineer and a thoughtful designer. The metaphor is an architect's studio — clean sightlines, natural materials, considered layouts where every element has structural purpose. Nothing is decorative; everything is load-bearing.

The site is itself a proof of craft. The infrastructure animation (traveling data packets through a cloud architecture diagram) is the signature element — a live demonstration that the person behind this portfolio understands systems from the network edge to the pixel.

**What this system explicitly rejects:** generic AI template tells — glassmorphism, gradient text, the terminal-green-on-dark cliché, identical card grids, the SaaS-cream background, and decorative effects that don't serve understanding.

**Key Characteristics:**
- **Editorial precision.** Typography-first hierarchy. Serif display headings pair with a clean sans-serif body for warmth + clarity.
- **Engineered restraint.** One signature animated element (the infra diagram) and one signature palette move (warm gold primary on pure white). Everything else steps back.
- **Flat-by-default, alive on interaction.** Surfaces sit flat at rest. Hover states introduce subtle lift — the only depth in the system.
- **Gold ink on white paper.** The brand color (a Klim-style editorial gold) is used sparingly — ≤10% of any screen. Its rarity is its power.

## 2. Colors

A warm-light-on-crisp-white palette anchored by a single editorial gold accent. The surface is pure white — warmth is carried by the amber primary, not the background.

### Primary
- **Editorial Gold** (`oklch(0.65 0.146 60)` / `#C89B3C`): The one accent color. Used for buttons, link underlines, badge fills, and the infra animation's active paths. Never as body text or background. White text on this fill.

### Accent
- **Slate Blue** (`oklch(0.45 0.07 250)` / `#5B7B9A`): Secondary accent for tags, secondary links, and muted interactive elements. Provides cool counterpoint to the warm primary.

### Neutral — Light Mode
- **Pure White** (`oklch(1.00 0.000 0)` / `#FFFFFF`): Body background. Not a shade off-white; literal white.
- **Warm Paper** (`oklch(0.97 0.004 60)` / `#F7F6F4`): Surface for cards, panels, and section backgrounds. A whisper of the brand hue.
- **Ink** (`oklch(0.13 0.005 60)` / `#1E1D1B`): Body text. Near-black with a trace of warmth.
- **Warm Stone** (`oklch(0.45 0.008 60)` / `#706C66`): Secondary text. Ink pulled toward surface, carrying the same hue.

### Neutral — Dark Mode
- **Near Black** (`oklch(0.10 0.000 0)` / `#1A1A1A`): Body background.
- **Warm Charcoal** (`oklch(0.14 0.003 60)` / `#242322`): Surface for cards and panels.
- **Warm White** (`oklch(0.93 0.004 60)` / `#EEEDEB`): Body text.
- **Warm Grey** (`oklch(0.60 0.005 60)` / `#8A8680`): Secondary text.

### Semantic Colors
- **Success** (`oklch(0.55 0.05 145)` / `#7A9A7A`): Used sparingly for status indicators.
- **Error** (`oklch(0.50 0.10 25)` / `#B05E5E`): Used for validation and destructive actions.

### Named Rules
**The Rarity Rule.** Primary gold appears on ≤10% of any viewport. Its scarcity is what makes it read as intentional rather than decorative.

## 3. Typography

**Display Font:** Instrument Serif (with Georgia, Times New Roman fallback)
**Body Font:** Inter (with -apple-system, BlinkMacSystemFont fallback)
**Code Font:** JetBrains Mono (with Fira Code, SF Mono fallback)

**Character:** A warm editorial serif for hierarchy + a clean humanist sans for reading. The pairing says "this is a person who reads, writes, and thinks about structure" — not just an engineer, but an engineer with taste.

### Hierarchy
- **Display** (400, `clamp(2.5rem, 6vw, 4.5rem)`, 1.05, -0.03em): Hero name only. Used once per page. `text-wrap: balance`.
- **Headline** (400, `clamp(1.75rem, 4vw, 2.5rem)`, 1.15, -0.02em): Section headings. `text-wrap: balance`.
- **Title** (600, `clamp(1rem, 2vw, 1.25rem)`, 1.3): Card titles, company names, interactive labels.
- **Body** (400, `clamp(0.9375rem, 1.5vw, 1.0625rem)`, 1.6): All prose. Line length capped at 70ch.
- **Label** (500, 0.75rem, 1.2, +0.04em uppercase): Small captions, metadata, form labels.
- **Code** (400, 0.875rem, 1.5): Inline code, tech tags, terminal output.

### Named Rules
**The One-Family Rule.** Display and body use different families by design. Inter is never used for display headings; Instrument Serif is never used for body copy.

## 4. Elevation

The system is flat by default. Depth is communicated through tonal layering (pure white → warm paper) and interaction states only.

**Shadow Vocabulary:** No ambient shadows at rest. The only shadow in the system appears on hover as a subtle lift indicator.

- **Hover Lift** (`0 4px 16px rgba(0,0,0,0.06)`): Applied on card hover and button hover to signal interactivity. The shadow is diffuse and cool-neutral, never warm or saturated.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state.

## 5. Components

### Buttons
- **Shape:** Gently rounded (6px / `--rounded-sm`)
- **Primary:** Filled with Editorial Gold (`--color-primary`). White text. Hover lifts 2px and darkens the gold to `--color-primary-hover`.
- **Secondary:** Transparent with `1px` solid border using `--color-border-primary` (Warm Stone). Hover fills with surface color and lifts 2px.
- **Focus:** `focus-visible` shows a 2px ring in Editorial Gold with 2px offset.

### Chips / Tags
- **Shape:** Fully rounded (999px)
- **Style:** Warm Paper background, Warm Stone text, `1px` solid border in surface contrast. Hover shifts border to Editorial Gold and darkens text to Ink.
- **Active (Skills pills):** Filled Editorial Gold, white text.

### Cards
- **Corner Style:** Moderately rounded (10px / `--rounded-md`)
- **Background:** Pure White (`--color-bg-primary`) — cards use the same bg as body, differentiated from sections by surface elevation
- **Shadow Strategy:** Flat at rest. Hover applies `--card-shadow-hover` with translateY(-4px).
- **Border:** 1px solid `--color-border-primary` (Warm Paper or Warm Charcoal, depending on mode)
- **Internal Padding:** 24px

### Inputs / Fields
- **Style:** 1px solid border with Warm Paper background. Inner padding 8px 16px.
- **Focus:** Border shifts to Editorial Gold with a subtle glow (`0 0 0 3px` at 10% opacity gold).
- **Placeholder:** Warm Stone at 50% opacity.
- **Error:** Border shifts to Error red.

### Navigation (Theme Toggle)
- Floating icon button in top-right corner. `38px` circle with surface background and border. Hover lifts and shifts icon color toward ink.

### Signature Component: Infrastructure Animation
An SVG architecture diagram showing client → API gateway → three services (compute, ML, cache) → downstream storage (vector DB, Postgres). Animated traveling dots along flow paths with staggered pulse rings on each node. The animation uses CSS `offset-path` for the dots and keyframe pulses for the rings.

- Colors: Edges and boxes use border-primary. Active path (client → gateway) uses primary gold. Flow lines use gold at reduced opacity. Node labels in Instrument Serif, sub-labels in JetBrains Mono.
- Motion: Dots travel along paths with linear, staggered timing. Pulses are ease-out, 2.8s cycle, 0.5s stagger per node.
- Reduced motion: All animations disabled at `prefers-reduced-motion: reduce`.

## 6. Do's and Don'ts

### Do:
- **Do** use Editorial Gold sparingly — ≤10% of any viewport.
- **Do** use `text-wrap: balance` on display and headline text.
- **Do** keep body line length between 65–75 characters.
- **Do** use flat surfaces at rest; lift only on hover for interactive elements.
- **Do** use the infra animation as the signature visual — it proves the "architect" claim.
- **Do** let whitespace do the work of separation rather than borders and shadows.

### Don't:
- **Don't** use the terminal-green-on-dark cliché, glassmorphism, gradient text, or purple-to-blue gradients.
- **Don't** use warm cream/beige/sand backgrounds — the bg is pure white.
- **Don't** put cards inside cards — flatten the hierarchy.
- **Don't** use the hero-metric template (big number, small label, gradient).  
- **Don't** use identical card grids with icon + heading + text repeated endlessly.
- **Don't** use tiny uppercase tracked eyebrow text ("ABOUT", "PROCESS") above every section.
- **Don't** use numbered section markers (01 / 02 / 03) as default scaffolding.
- **Don't** use border-left greater than 1px as a colored accent stripe.
- **Don't** use bounce or elastic easing — use ease-out-expo or linear for motion.
- **Don't** animate layout properties (width, height, padding) — use transform and opacity only.
- **Don't** use placeholder images (`via.placeholder.com`) or fake project data.
