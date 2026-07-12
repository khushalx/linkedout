# LinkedOut

LinkedOut is a satirical professional network: familiar feed conventions, original branding, and a Humble-Brag Polygraph that translates corporate theatre into plain language.

## Phase 1

- Responsive three-column feed and mobile navigation
- Persistent likes and user-created posts via `localStorage`
- Working comments, repost/share feedback, composer, and mock profile
- Debounced polygraph with animated gauge, waveform, phrase inspection, savage mode, and honest rewrite
- Server-only Groq integration with Zod validation
- Local heuristic demo mode when no API key is configured
- Polished preview pages for network, jobs, messages, and notifications

## Phase 2

- A deterministic Career Plant maps projects to branches, skills to leaves, endorsements to roots, achievements to flowers, and connections to sprouts
- Interactive `/greenhouse` with accessible SVG inspection, growth simulation, persistent history, and Career Gardener advice
- Complete `/network` connection experience with the Relationship Ledger entry point
- `/collections` with six professional relationship accounts, local balance calculations, filters, account drawers, editable favours and promises
- Draft-only follow-up studio with five safe tone levels, copy and local draft saving
- Career Gardener and Debt Collector share the server-only `/api/ai` feature router and fall back to labelled deterministic demo results

## Phase 3

- Evidence-based skill endorsement cards and a six-step endorsement flow
- `/cross-examiner` case review with filters, testimony records, local actions, and Groq or deterministic verdicts
- A complete professional Jobs experience with twelve roles across eight fictional companies
- `/oracle` work-preference matching, deterministic compatibility scores, and a three-card Corporate Horoscope reveal
- Saved compatibility readings, job filters, local preferences, and clearly labelled fallback results
- No LinkedIn, Glassdoor, hiring, messaging, or endorsement-notification integrations

## Stack

Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Groq SDK, and Zod.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To use Groq, set `GROQ_API_KEY` and optionally `GROQ_MODEL` in `.env.local`. Without a key, `/api/ai` returns an equivalent heuristic result and the interface displays a **Demo analysis** badge.

Useful checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Prototype limitations

Authentication, databases, real messaging, real connections, and media uploads remain intentionally out of scope. Relationship scores are playful local calculations, not factual measures of friendship. Follow-ups are drafts only and are never sent. Persistence is device/browser-local. AI output quality depends on the configured Groq model.
