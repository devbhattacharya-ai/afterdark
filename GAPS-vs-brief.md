# AFTERDARK — gaps vs brief / IA (P0)

## Met (P0)

| Requirement | Status |
|---|---|
| Own app at `/workspace/afterdark` | Yes |
| Concept demo label (self-initiated; not live store) | Hero chip + disclaimer + footer |
| No studio WhatsApp | None present |
| EN only | Yes |
| No checkout / payment; price omitted or marked concept | Price/stock row: “Omitted — concept only” |
| Primary CTA: Discover the bar → in-page `#bar` | Yes |
| Secondary: Discover 85% → `#bar` | Nav (desktop + mobile) |
| Nav: The Bar, Tasting Notes, The Ritual | Yes (`#bar` `#tasting` `#ritual`) |
| Hero H1: GO DARK. | Yes |
| Eyebrow: Dark chocolate · 85% cocoa | Yes |
| Support: Deep cocoa. A slow melt… | Yes |
| Product-first imagery (screenshot) | Hero pack + `#bar` image |
| Tasting notes: Bold, Roasted, Silky | Yes |
| Ritual section | Yes (Break / Warm / Melt / Finish) |
| Concept disclaimer | Dedicated section |
| Dark cinematic aesthetic | Brown / ochre palette from screenshot |
| Soft motion + Pause + reduced-motion | Glow, scroll bob; Pause control; `data-motion` |
| Tap the pack demo | `PackReveal` |
| Scroll to discover hint | Yes |
| Responsive | Mobile hamburger; stacked hero; full-width CTA |
| `npm run build` | See build log |
| README | Yes |
| Do not deploy / no GitHub repo | Honoured |

## Gaps / deferred (intentional P0 vs P1)

| Item | Notes |
|---|---|
| Heavy scroll choreography | P1 per brief/IA — P0 uses clear sections + soft motion only |
| True 3D / WebGL pack | Out of scope for P0 |
| Pixel-perfect match to original ChatGPT demo | Screenshot fidelity for ATF mood + product; layout is rebuilt, not cloned DOM |
| Separate cropped pack PNG | Uses full screenshot crop via `object-fit` — optional asset polish later |
| Live stock / real pricing | Explicitly omitted |
| Marathi / bilingual | Not required for AFTERDARK P0 |
| Vercel deploy | Explicitly not done this turn |

## Unknowns (non-blocking)

- Real cocoa origin / blend story — concept copy only
- Exact pack crop art — screenshot stands in for P0
