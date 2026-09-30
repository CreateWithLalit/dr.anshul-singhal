# Progress Tracker: Dr. Anshul Singhal Demo Prototype

**Session Date:** September 30, 2026
**Status:** In Progress

---

## Milestone Status Overview

- [x] **Milestone 1: Setup**
  - Next.js 15 (App Router) + React 19 + TypeScript (strict)
  - Tailwind CSS + CSS variable design tokens (`#FAF8F4`, `#0F5C63`, `#DCEBEA`, `#16232B`, `#5B6870`, `#D9C7A8`, `#E4DFD6`, `#B3392F`)
  - Self-hosted Google fonts (`next/font` Fraunces serif for headings + Inter sans for body)
  - Folder structure & base layout (`src/app/layout.tsx`, `globals.css`)
  - `NEXT_PUBLIC_DEMO_MODE=true` flag configured in `.env.local` & `.env.example`
  - Password gate (`/api/gate` route & `<PasswordGate />` cookie session provider)
  - `noindex, nofollow` metadata in layout & `src/app/robots.ts`
  - Demo ribbon persistent component (`<DemoRibbon />`)
  - Build, lint, and strict type-checks validated with zero errors.

- [x] **Milestone 2: Content Layer**
  - Entity type definitions in `src/lib/content/types.ts` (`Doctor`, `Credential`, `Service`, `Location`, `Article`, `Testimonial`, `SiteSettings`)
  - Typed seed data in `src/lib/content/seed.ts` adhering strictly to Section 2 honesty rules (all unconfirmed claims enclosed in visible brackets `[Degree, university, year]`)
  - Content-access module in `src/lib/content/index.ts` with typed asynchronous getters
  - Verification & status rendering rules (`verified`, `placeholder`, `pending` filtering)
  - `<CredentialBlock />` with dashed muted outline and distinct status chips

- [x] **Milestone 3: Design System & Core Components**
  - Layout shell with Header, BottomActionBar, Footer, and LanguageProvider
  - Sticky minimal `Header` with scroll compacting, mobile menu drawer, and language toggle
  - Fixed mobile `BottomActionBar` with WhatsApp + Call buttons (respecting safe-area insets)
  - Monoline illustration set in `src/components/illustrations/index.tsx` (10 SVGs: tooth, implant, jaw skull, face profile, clinic room scene, tooth gap/implant sequence, location pin, chat bubble, shield check, calendar)
  - Motion wrappers in `src/components/motion/` (`RevealOnScroll`, `StaggerContainer`, `TextReveal`, desktop-only `LenisSmoothScroll`) with `prefers-reduced-motion` safety
  - Production build and strict TypeScript checks passing with 0 errors.

- [ ] **Milestone 4: Core Pages**
  - Home (`/`)
  - About (`/about`)
  - Services (`/services`)
  - Service detail templates (`/services/wisdom-teeth`, `/services/facial-injury`, `/services/dental-implants`)
  - Location (`/locations`, `/locations/[slug]`)
  - Contact (`/contact`) with mock form

- [ ] **Milestone 5: Signature Interactions**
  - SVG draw hero monoline animation
  - Scroll-drawn "how care works" timeline
  - Count-up statistics component
  - Accessible before/after illustration slider
  - Card hover interactions & page transitions

- [ ] **Milestone 6: Remaining Pages**
  - Patient guide (`/guide`, 2 sample articles with reading progress)
  - For Doctors referral page (`/for-doctors`) with mock referral form
  - Mock booking flow (stepwise calendar/slot picker & confirmation)
  - Privacy policy and medical disclaimer (`/privacy`)
  - Language toggle (EN / हिन्दी) dictionary implementation

- [ ] **Milestone 7: Demo Dashboard**
  - `/demo/dashboard` doctor-facing analytics preview
  - Custom animated SVG/CSS charts (WhatsApp clicks, call taps, page inquiries, weekly trends)

- [ ] **Milestone 8: Polish, Assets & QA**
  - Self-hosted non-person images with WebP & alt tags
  - Mobile pass & keyboard accessibility verification
  - Production build, lint & type-check
  - README & ATTRIBUTIONS.md documentation

---

## Current Work & Next Steps
- **Completed:** Milestones 1, 2, 3, and core pages of Milestone 4. Bug fix committed on `main`.
- **Bug fix (30 Sep 2026):** Runtime error on `/guide/[slug]` resolved — two causes:
  1. **Field name mismatch**: page used `article.body` (string) and `article.readingTime`, but the `Article` type declares `bodyParagraphs: string[]` and `readTimeMinutes: number`. Fixed to use correct field names — no optional chaining added.
  2. **`robots.ts` build conflict**: `src/app/robots.ts` caused `PageNotFoundError` during build trace collection. Replaced with static `public/robots.txt`.
  3. Also fixed: `ease: "easeInOut" as const` in `_home-animations.tsx` (Framer Motion strict `Easing` type), added `generateMetadata` with awaited `params` to all slug routes, added `not-found.tsx` for clean 404 responses.
  4. All pages verified: `/guide` 200, both articles 200, unknown slug → 404, `/services/wisdom-teeth` 200, `/locations/noida-central` 200.
  5. `tsc --noEmit` passes clean (exit 0). Production build completes with all 20 static pages generated (exit 0).
- **In Progress:** Remaining Milestone 4 polish, Milestone 5 (signature interactions), and Milestone 6 (patient guide reading progress, for-doctors referral form, booking flow, language toggle).
- **Next 5 Tasks:**
  1. Milestone 5: SVG draw hero animation (already wired, verify on mobile)
  2. Milestone 5: Count-up stats strip and scroll-drawn timeline on home page
  3. Milestone 5: Accessible before/after illustration slider
  4. Milestone 6: Language toggle dictionary (EN / हिन्दी) for nav, hero, contact buttons
  5. Milestone 7: `/demo/dashboard` with animated sample SVG/CSS charts
