# Dr. Anshul Singhal — Pre-Launch Production Website

A production-ready personal website for **Dr. Anshul Singhal, Oral and Maxillofacial Surgeon**, currently operating in a private pre-launch content state.

> **Pre-launch only.** The UI, content contracts, and integration boundaries are intended for the eventual live site. Current placeholders are temporary data placeholders, not a throwaway product. No real patient data is stored or processed.

---

## Quick Start

### Requirements
- Node.js 20+
- npm

### Install
```bash
npm install
```

### Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

The site is password-protected in pre-launch mode. Set `DEMO_PASSWORD` in `.env.local`; do not rely on the development fallback outside local work.

---

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local development server (hot reload) |
| `npm run build` | Production build |
| `npm run type-check` | TypeScript strict check (no emit) |
| `npm run lint` | ESLint |
| `npm run start` | Serve the production build locally |

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
# Pre-launch mode toggle — keep true until the launch checklist is complete
NEXT_PUBLIC_DEMO_MODE=true

# Password for the pre-launch gate — use a private value
DEMO_PASSWORD=replace-with-a-private-access-code

# Add only when preparing production metadata and canonical URLs
NEXT_PUBLIC_SITE_URL=https://www.example.com
```

### Pre-Launch Mode

Pre-launch mode is a temporary protective state. It keeps the site private while verified content and integrations are collected. One shared mode module controls the password gate, ribbon, placeholder styling, mock integrations, noindex metadata, blocking robots response, and structured-data suppression.

---

## Private Access Gate

All pages require a shared password (cookie session).  
The gate is implemented in `src/middleware.ts` and `src/app/api/gate/route.ts`.

- Enter the password at `/login`
- A session cookie (`demo_session`) grants access for 7 days
- `DEMO_PASSWORD` is required in pre-launch mode; there is no displayed or hard-coded fallback password
- Vercel Deployment Protection may be used as an additional pre-launch control

---

## How Content Works

All content passes through `src/lib/content/index.ts` — a typed content-access module.

**Pre-launch seed data** lives in `src/lib/content/seed.ts`. The content-access interface is the stable boundary: verified local data, a CMS, or Git-based content can replace the seed source without redesigning page components.

| Entity | Fields |
|---|---|
| Doctor | name, title, bio, languages, registration, credentials |
| Service | slug, pillar, title, steps, FAQs, cost factors, status |
| Location | name, address, hours, phone, WhatsApp |
| Article | slug, title, bodyParagraphs, readTimeMinutes |
| SiteSettings | phone, WhatsApp, emergency number, ribbon text |

### Verification and publication status
Credentials have a `status` field:
- `placeholder` → renders as a dashed outlined placeholder box (current state)
- `verified` → renders as a green badge with the real data
- `pending` → never shown publicly

When Dr. Singhal confirms a credential, update its `status` from `placeholder` to `verified` and provide the real value through the content source. Pending items remain unpublished.

---

## Replacing Pre-Launch Content

1. Confirm the real information with Dr. Singhal.
2. Edit `src/lib/content/seed.ts` — find the relevant entity.
3. Change `status: "placeholder"` to `status: "verified"` and replace the `[Bracketed placeholder]` value.
4. Run `npm run type-check && npm run build`.
5. Run the quality checks and deploy the updated content.

**No redesign or component-layer rebuild is required.** During the first production phase, verified values can be supplied through `seed.ts`; later, the source behind the content-access module may be exchanged for a CMS or Git-based source.

---

## Deploying the Pre-Launch Site

1. Push the repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Set the following environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_DEMO_MODE=true`
   - `DEMO_PASSWORD=<your-private-access-code>`
4. Deploy.
5. (Optional) Enable **Vercel Deployment Protection** as an additional gate.

---

## Pre-Launch to Production Transition

The application is built to launch without redesigning it. Complete the following sequence only after client approval and written verification of relevant information.

1. Ingest verified doctor profile, credentials, registration details, services, clinic address/hours, contact routes, and approved photography through the typed content-access boundary. Keep unverified records `pending` or `placeholder`.
2. Add consented testimonials, approved clinical/before-after assets, and structured-data values only if they have the required consent and verification.
3. Connect real contact, referral, booking, and analytics providers behind their existing route/event boundaries. Confirm privacy, retention, and DPDP requirements before collecting data.
4. Review every live route, Hindi translation, accessibility behaviour, mobile layout, performance budget, legal text, and WhatsApp disclosure.
5. Add `NEXT_PUBLIC_SITE_URL`, make `NEXT_PUBLIC_DEMO_MODE=false`, then staging-test the production-aware robots and metadata responses. Only then remove private access, ribbon, and placeholder styling.
6. Deploy and verify indexing, structured data, contact delivery, booking, analytics consent/settings, and rollback procedures.

The current codebase has environment-aware robots/metadata, guarded structured-data output, and validated no-storage mock form boundaries. Verified content ingestion, production provider connections, staging verification, and launch approval still remain. Do not treat the mode switch alone as launch authorization.

---

## Hindi Translations

A basic EN / हिन्दी dictionary is implemented in `src/components/LanguageContext.tsx`.

> **IMPORTANT:** The Hindi copy is demo terminology only. It has **not** been reviewed by a native medical professional. It must be reviewed and corrected before any public or patient-facing release.

---

## Project Structure

```
src/
  app/              # Next.js App Router pages
    demo/dashboard/ # Analytics preview (demo-only, not in main nav)
    api/            # Pre-launch gate and typed no-storage mock API handlers
    robots.txt/     # Environment-aware robots response
  components/
    illustrations/  # Monoline SVG illustration components
    motion/         # Animation wrappers (RevealOnScroll, Stagger, TextReveal, Lenis)
  lib/
    content/
      types.ts      # TypeScript entity types
      seed.ts       # All placeholder seed data (edit this to update content)
      index.ts      # Content access module (stable public interface)
  middleware.ts     # Password gate enforcement
  lib/prelaunch.ts  # Single pre-launch/production configuration source
  lib/forms.ts      # Typed mock form payloads and validation
  lib/structured-data.ts # Verified-data-only schema generator
```

---

## Notes for Future AI Agents

Read `AGENTS.md` before changing anything. That document contains:
- Non-negotiable content rules (what must never be invented)
- Design system tokens
- Component specifications
- Motion guidelines
- Milestone order

Read `PROGRESS.md` for current implementation status.

---

## Project Status

`v0.1.0 — Production-ready UI in pre-launch content state`
Last updated: September 30, 2026  
