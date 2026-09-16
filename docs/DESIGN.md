---
name: Nodo Norte Studio
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf1'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e4efff'
  surface-container-high: '#daeaff'
  surface-container-highest: '#d4e4f9'
  on-surface: '#0d1d2c'
  on-surface-variant: '#5e3f3c'
  inverse-surface: '#233242'
  inverse-on-surface: '#e9f1ff'
  outline: '#926e6a'
  outline-variant: '#e7bcb8'
  surface-tint: '#c00014'
  primary: '#bb0013'
  on-primary: '#ffffff'
  primary-container: '#e51a22'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb4ab'
  secondary: '#9b4500'
  on-secondary: '#ffffff'
  secondary-container: '#ff914e'
  on-secondary-container: '#6e2f00'
  tertiary: '#515d6d'
  on-tertiary: '#ffffff'
  tertiary-container: '#697686'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000c'
  secondary-fixed: '#ffdbc9'
  secondary-fixed-dim: '#ffb68e'
  on-secondary-fixed: '#331200'
  on-secondary-fixed-variant: '#763300'
  tertiary-fixed: '#d7e3f6'
  tertiary-fixed-dim: '#bbc7da'
  on-tertiary-fixed: '#101c2a'
  on-tertiary-fixed-variant: '#3c4857'
  background: '#f8f9ff'
  on-background: '#0d1d2c'
  surface-variant: '#d4e4f9'
  surface-primary: '#FFFFFF'
  surface-supporting: '#FAFAFA'
  surface-secondary: '#EEF1F5'
  border-subtle: '#EEF1F5'
  border-strong: '#E2E8F0'
  text-primary: '#1E2A38'
  text-secondary: '#526173'
typography:
  display:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.04em
  display-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  subheading:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system embodies the ethos of "Digital systems with clear direction." It operates at the intersection of technical precision and editorial discernment, catering to venture-backed founders, design-led tech enterprises, and sophisticated digital platforms. 

The aesthetic draws heavy inspiration from minimalist, high-craft developer tooling and modern design studios (Linear, Vercel, Notion). It prioritizes structural clarity over decorative noise, eschewing generic multi-color blurred glows, skeuomorphic shading, and aggressive gradients. Instead, the interface relies on calibrated architectural grids, micro-fine boundary strokes (`#EEF1F5`), generous typographic negative space, and disciplined data density. The emotional tone is authoritative, highly focused, and intellectually crisp, accented by sudden, razor-sharp hits of energetic red and warm orange to signal momentum and purpose.

## Colors

The color system operates with strict intent. Canvas environments are kept clinically pure through `#FFFFFF` and `#FAFAFA`, while inverted feature blocks lean on `#1E2A38` for weighted architectural contrast.

- **Primary (`#FF3131`)**: Reserved exclusively for active commitments, high-priority interactive affordances, core CTA elements, and navigational focus marks.
- **Secondary (`#FF914D`)**: Serves as a thermal indicator for hover states, contextual badges, metric highlights, and secondary interactive feedback.
- **Tertiary / Base (`#1E2A38`)**: Grounds the typography with deep slate-navy authority and defines structured inverted cards or full-bleed editorial breaks.
- **Neutral (`#526173`)**: Governs secondary copy, technical metadata, labels, and iconography.
- **Surfaces & Borders (`#EEF1F5`, `#FAFAFA`)**: Forms subtle architectural scaffolding, separating modules through crisp 1px borders rather than heavy drop shadows.

## Typography

The typographic hierarchy pairs the brutal, Swiss-inspired precision of `Geist` with the structural cadence of `JetBrains Mono`.

Headings feature tight tracking (`-0.02em` to `-0.04em`) and dense line heights to present headlines as unified graphic blocks. Body copy sits at a disciplined 16px with a generous 26px line height, ensuring effortless scanning across long-form case studies and system documentation. `JetBrains Mono` handles all index markers, metadata tags, numeric step counters, and technical accents, anchoring the studio’s software-grade identity.

## Layout & Spacing

The system runs on a 12-column responsive fluid grid pinned to a maximum content width of 1280px, flanked by structural page margins that ensure breathing room on wide monitors.

- **Desktop (1024px+)**: 12 columns, 24px (`1.5rem`) gutters, 48px (`3rem`) page margins. Section vertical rhythms scale from 64px to 96px (`space-2xl` to `space-3xl`) to establish distinct editorial pacing.
- **Tablet (768px - 1023px)**: 8 columns, 20px gutters, 32px margins. Modules reflow from 3-column rows into 2-column or full-width layouts.
- **Mobile (320px - 767px)**: 4 columns, 16px (`1rem`) gutters, 20px (`1.25rem`) margins. Multi-column grids compress to a single vertical column, preserving clear horizontal containment lines.

## Elevation & Depth

Spatial layering relies on flat, architectural planes, surface contrast, and low-contrast borders rather than diffuse drop shadows.

- **Level 0 (Canvas)**: Pristine `#FFFFFF` base canvas or `#FAFAFA` section bands.
- **Level 1 (Structural Surfaces)**: Cards, toolbars, and system panels use `#FFFFFF` set against `#FAFAFA`, or `#EEF1F5` resting on `#FFFFFF`. Every element is bound by a crisp 1px stroke (`border-subtle`: `#EEF1F5` or `border-strong`: `#E2E8F0`).
- **Level 2 (Inverted Editorial Anchors)**: Sections demanding immediate gravity transition to `#1E2A38` fills with white and light blue-gray typography.
- **Interactive Depth**: Shadows are nearly nonexistent, reserved only for contextual popovers and floating command palettes (`box-shadow: 0 4px 20px -2px rgba(30, 42, 56, 0.08)`). Hover states reject Y-axis lift in favor of razor-sharp border shifts to `#FF3131` or soft background illumination to `#EEF1F5`.

## Shapes

The design language favors structural, semi-sharp geometry. Standard containers, cards, inputs, and buttons carry a crisp 4px (`0.25rem`) radius. This soft corner treatment softens the technical rigidity of the borders without falling into the playful or casual feel of circular or pill-shaped designs. Badges and micro-tags utilize either a matching 4px radius or 0px sharp corners to retain a terminal-like aesthetic.

## Components

### Buttons
- **Primary**: Solid `#FF3131` fill, pure white `#FFFFFF` text (`label-sm` or `body-md` weight 600), 4px border radius. Minimum height 40px, horizontal padding 16px. On hover, background shifts seamlessly to `#FF914D`.
- **Secondary**: `#FFFFFF` background, 1px solid `#EEF1F5` border, `#1E2A38` text. On hover, border transitions to `#1E2A38` with subtle background tint `#FAFAFA`.
- **Ghost/Tertiary**: Transparent background, `#526173` text with an inline monospace prefix (e.g., `->`). On hover, text shifts to `#FF3131`.

### Cards & Panels
- Constructed using `#FFFFFF` or `#FAFAFA` backgrounds with a continuous 1px `#EEF1F5` border. Inner padding is calibrated to 24px (`space-lg`) or 32px. Interactive cards feature a 1px border hover transition to `#E2E8F0` or `#FF914D`. Optional header blocks feature a monospace section coordinate (e.g., `SYS.01 // DIRECTION`).

### Input Fields & Controls
- Form inputs feature a `#FAFAFA` background, 1px solid `#EEF1F5` stroke, 4px border radius, and 12px vertical by 14px horizontal padding. Active focus states drop the gray border for a precise 1px outline in `#FF3131`. Placeholder text sits at `#526173` with 60% opacity.

### Selection Controls (Checkboxes & Radios)
- Crisp 16px square (checkbox) or circle (radio) elements with a 1px `#E2E8F0` border. Selected states fill with `#FF3131` and display a crisp white checkmark or inner indicator dot.

### Chips & Badges
- Small-scale metadata capsules featuring `label-mono` typography in uppercase. Default state: `#EEF1F5` background, `#526173` text, no border. Accent state: `#FF914D` tinted background (12% opacity) with solid `#FF914D` text.

### Code & Architecture Snippets
- Inset terminal blocks using `#1E2A38` fills, 1px `#2C3B4E` borders, and `#EEF1F5` text styled with `JetBrains Mono`. Syntax highlights leverage `#FF914D` for keywords and `#FF3131` for active variables.