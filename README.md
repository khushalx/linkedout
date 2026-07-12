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

Authentication, databases, real messaging, real connections, media uploads, and the teased future features are intentionally outside Phase 1. Persistence is device/browser-local. AI output quality depends on the configured Groq model.
