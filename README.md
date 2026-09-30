# Dr. Anshul Singhal — Website Demo Prototype

A private demo prototype of a personal website for **Dr. Anshul Singhal, Oral and Maxillofacial Surgeon (Noida / Delhi NCR)**.

> **NOT for public distribution.** This is a private prototype prepared for in-person review.  
> All content is placeholder. No real patient data is stored or processed.

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

The site is password-protected. Default demo access code: **`dranshul2026`**  
Change it by setting `DEMO_PASSWORD` in `.env.local`.

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
# Demo mode toggle — set to "false" to disable demo ribbon and placeholder styling
NEXT_PUBLIC_DEMO_MODE=true

# Password for the demo gate
DEMO_PASSWORD=dranshul2026
```

### Turning off Demo Mode
Set `NEXT_PUBLIC_DEMO_MODE=false`.  
This removes the demo ribbon, disables placeholder styling, and enables normal indexing.  
**Do not do this until content has been verified by Dr. Singhal.**

---

## Password Gate

All pages require a shared password (cookie session).  
The gate is implemented in `src/middleware.ts` and `src/app/api/gate/route.ts`.

- Enter the password at `/login`
- A session cookie (`demo_session`) grants access for 24 hours
- Replace with Vercel Deployment Protection for production

---

## How Content Works

All content passes through `src/lib/content/index.ts` — a typed content-access module.

**Seed data** lives in `src/lib/content/seed.ts`.

| Entity | Fields |
|---|---|
| Doctor | name, title, bio, languages, registration, credentials |
| Service | slug, pillar, title, steps, FAQs, cost factors, status |
| Location | name, address, hours, phone, WhatsApp |
| Article | slug, title, bodyParagraphs, readTimeMinutes |
| SiteSettings | phone, WhatsApp, emergency number, ribbon text |

### Credential status system
Credentials have a `status` field:
- `placeholder` → renders as a dashed outlined placeholder box (current state)
- `verified` → renders as a green badge with the real data
- `pending` → never shown publicly

When Dr. Singhal confirms a credential, update its `status` in `seed.ts` from `placeholder` to `verified` and fill in the real value.

---

## Replacing Placeholder Content

1. Confirm the real information with Dr. Singhal.
2. Edit `src/lib/content/seed.ts` — find the relevant entity.
3. Change `status: "placeholder"` to `status: "verified"` and replace the `[Bracketed placeholder]` value.
4. Run `npm run type-check && npm run build`.
5. Deploy.

**No rebuild of the component layer is needed.** Only `seed.ts` changes.

---

## Deploying to Vercel

1. Push the repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Set the following environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_DEMO_MODE=true`
   - `DEMO_GATE_PASSWORD=<your-demo-password>`
4. Deploy.
5. (Optional) Enable **Vercel Deployment Protection** as an additional gate.

---

## Demo-to-Real Transition

When the real build is commissioned:

1. Replace `src/lib/content/seed.ts` with a CMS client (Sanity / Payload / MDX) behind the same `src/lib/content/index.ts` interface — no component changes required.
2. Replace mock API handlers in `src/app/api/` with real integrations (email, WhatsApp Business API, Postgres for minimal lead capture).
3. Set `NEXT_PUBLIC_DEMO_MODE=false`.
4. Remove the password gate.
5. Enable `robots.txt` indexing.
6. Review all placeholder credentials with Dr. Singhal and update their `status` to `verified`.
7. Review service list with Dr. Singhal and update `status` from `to-confirm` to `offered`.
8. Add real clinic contact numbers.
9. Replace the portrait placeholder with the doctor's approved photograph.
10. Review Hindi translations with a native medical professional before publishing.

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
    api/gate/       # Password gate API handler
  components/
    illustrations/  # Monoline SVG illustration components
    motion/         # Animation wrappers (RevealOnScroll, Stagger, TextReveal, Lenis)
  lib/
    content/
      types.ts      # TypeScript entity types
      seed.ts       # All placeholder seed data (edit this to update content)
      index.ts      # Content access module (stable public interface)
  middleware.ts     # Password gate enforcement
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

## Prototype Version

`v0.1.0 — Private Demo Prototype`  
Last updated: September 30, 2026  
