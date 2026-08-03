# Scroll Reveal Design

## Goal

Introduce a consistent, one-time reveal animation as visitors scroll through the homepage while preserving the existing layout and interaction behavior.

## Approach

- Add a reusable `ScrollReveal` React component based on `IntersectionObserver`.
- Replace the page-level `.fade-up` query and observer with component-local observation.
- Animate only `opacity` and vertical `transform`.
- Reveal each target once, then stop observing it.
- Render content immediately without motion when `prefers-reduced-motion: reduce` is active.

## Targets

Apply reveals to meaningful content groups rather than every nested element:

- Hero heading, supporting copy, CTA, and school logos
- About label and copy, followed by the partner row
- “What We Do” label, statement, and value trio
- Events label, copy, CTA, and calendar embed
- Gallery cards with a short stagger
- Join label, copy/CTA, and supporting image
- Footer contact content

Use short 80–120 ms delays only for related items. Avoid long cascades and do not animate background images or full-page surfaces.

## Motion

- Start state: `opacity: 0` and `translateY(24px)`
- End state: `opacity: 1` and `translateY(0)`
- Duration: approximately 500 ms
- Timing: standard `ease-out`
- Trigger: the supplied `rootMargin: 40px` and `threshold: 0`

## Verification

- Build the Vite app successfully.
- Confirm content reveals once while scrolling on desktop and mobile widths.
- Confirm no content remains hidden when reduced motion is enabled.
- Confirm observer cleanup occurs when components unmount.
