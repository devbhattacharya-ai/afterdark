# AFTERDARK — concept demo

Self-initiated concept demo for a premium **85% dark chocolate** product story. **Not a live store.**

Built as a portfolio “Open live” demo: cinematic product-first landing, tasting notes, and tasting ritual — no checkout, no payment, no studio WhatsApp.

## Stack

- Next.js App Router + TypeScript
- CSS (no heavy UI / 3D libs)
- Hero / product asset: `public/demo-afterdark.jpg`

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Concept notes

- Primary CTA: **Discover the bar** → `#bar`
- Secondary: **Discover 85%** → `#bar` (nav); tasting notes link → `#tasting`
- Tap the pack: expands concept detail (demo interaction)
- Pause motion: stops decorative glow / scroll-hint motion; respects `prefers-reduced-motion`
- Price / stock omitted (concept only)
- EN only for P0
- Footer + chip: “Self-initiated concept demo. Not a live store.”

## Anchors (IA)

`#top` · `#bar` · `#tasting` · `#ritual`

## Sources

- Brief: `/workspace/demo-rebuild-brief.md` §3 AFTERDARK
- IA: `/workspace/demo-afterdark-ia.md`
- Screenshot: `demo-afterdark.jpg`
- Case: `work-afterdark.html`
