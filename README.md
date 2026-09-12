# BuildShip AI — Landing Page

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Vercel Analytics + Resend.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in your real values
npm run dev
```

Visit http://localhost:3000

## Before you launch — things to configure

1. **Resend (audit request emails)** — `app/api/audit/route.ts` sends a
   formatted email via [Resend](https://resend.com) whenever someone submits
   the audit form. In `.env.local`, set:
   - `RESEND_API_KEY` — from your Resend dashboard
   - `AUDIT_NOTIFICATION_EMAIL` — the inbox that should receive leads
   - `RESEND_FROM_EMAIL` — must be on a domain verified in Resend (the
     sandbox `onboarding@resend.dev` sender only delivers to your own
     Resend account email, so it's fine for testing but not production)

   If these env vars aren't set, the route returns a friendly error asking
   the visitor to use WhatsApp instead, rather than failing silently.

2. **Vercel Analytics** — `<Analytics />` is already wired into
   `app/layout.tsx`. It activates automatically once the project is deployed
   on Vercel with Analytics enabled for the project (Project → Analytics tab).
   No extra code changes needed. `lib/analytics.ts` also fires a few custom
   events (`hero_primary_cta`, `nav_cta_click`, `founding_cta_click`,
   `whatsapp_cta_click`, `audit_form_submit`) that will show up under
   Vercel Analytics → Events.

3. **WhatsApp number** — `lib/site.ts` has `WHATSAPP_NUMBER` set to a
   placeholder. Replace it with your real WhatsApp Business number
   (international format, digits only, e.g. `2348012345678`).

4. **Domain** — `app/layout.tsx`, `app/robots.ts` and `app/sitemap.ts` use
   `https://buildshipai.com` as a placeholder. Replace with your real domain.

5. **Legal pages** — `/privacy-policy` and `/terms-of-service` contain full
   NDPR-aware copy. Read through both before launch — a couple of clauses
   (data retention windows, jurisdiction, contact email) should be checked
   against how the business actually operates.

6. **OG image** — metadata references `/og-image.png` (1200×630). Add that
   file to `/public` before launch, or remove the `images` field in
   `app/layout.tsx`'s metadata if you don't have one yet.

## Architecture

- `app/page.tsx` — assembles all landing page sections
- `components/` — one file per section (Hero, Problem, Solution, Demo,
  HowItWorks, UseCases, FoundingOffer, FAQ, LeadForm, Footer, etc.)
- `components/legal/` — shared layout for the privacy/terms pages
- `app/api/audit/route.ts` — validates the audit form and emails it via Resend
- `app/fonts/` — self-hosted Fraunces, Inter and JetBrains Mono (OFL
  licensed, sourced from the google/fonts repo) — no runtime dependency on
  Google Fonts' CDN
- `lib/hooks/useInView.ts` — scroll-reveal animation hook used across sections
- `lib/analytics.ts` — thin wrapper around Vercel Analytics' `track()`
- `lib/site.ts` — shared constants (WhatsApp number/prefill, form option lists)

## Checks run

- `npx tsc --noEmit` — pass
- `npx eslint .` — pass
- `npm run build` — pass
