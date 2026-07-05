# bar-for-unframe

An ad-hoc, personalized job-application page Bar Moshe built for the **Full
Stack Software Engineer** role at **Unframe** (enterprise AI, Tel Aviv), in
Unframe's real visual language, read live off unframe.ai: Poppins 600 display
with tight tracking, alternating black and white full-bleed bands, ink
#191919, and one accent, the signature gradient (cyan → blue → purple →
magenta → pink → orange). Their motifs rebuilt in CSS: the glowing gradient
monolith in a dark ridge scene (hero + close), the scroll-driven exploded
layer stack ("Unframe AI OS" section), thin gradient underline bars on stat
cards, gradient-bordered numbered badges, outlined pill badges, white pill
CTAs, and gradient-filled headline text.

The centerpiece reframes Unframe's exploded platform stack as Bar's own five
layers: Product & UI (React, Vue) / APIs (Node.js, TypeScript) / AI layer
(LLM apps, MCP, agents) / Data (PostgreSQL) / Run it (AWS, Docker, K8s). On
desktop the section pins and the stack comes apart on scroll, their exact
move.

Copy is terse CV register: what shipped, where it runs, one line each. Live
links (MDP, apartment-hunter, trip-planner, Biome Synth, temporal-plugin,
MIDI GPT REST API, entailer); employer work is named, not linked.

Not affiliated with Unframe. `robots: noindex` — a private, shareable link.
Standalone sibling repo matching the `bar-for-*` application-site pattern.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Plain CSS (scoped under `.uf-root`) + GSAP (ScrollTrigger: reveals + the pinned stack scrub)
- Poppins via `next/font` (their exact family)
- `next/og` share card (`app/opengraph-image.tsx`)
- Motion gated on `prefers-reduced-motion`; the page is fully legible with no JS

## Run

```bash
npm install
npm run dev     # http://localhost:3104
npm run build   # production build
npm run lint    # eslint (jsx-a11y gate)
```
