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

- [ ] **Milestone 3: Design System & Core Components**
  - Layout shell, Header, BottomActionBar, Footer
  - Button system, cards, badge/chips
  - Hand-crafted monoline illustration set (10 SVGs in `src/components/illustrations/`)
  - Motion wrappers (`RevealOnScroll`, `StaggerContainer`, `TextReveal`)
  - Reduced-motion handling & Desktop-only Lenis smooth scroll

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
- **Completed:** Milestone 1 (Setup) and Milestone 2 (Content Layer). Branch renamed to `main` and remote origin configured.
- **In Progress:** Milestone 3 (Design System & Core Components: Header, BottomActionBar, Footer, monoline illustrations, motion wrappers, Lenis smooth scroll).
- **Next 5 Tasks:**
  1. Build the hand-crafted monoline SVG illustration system (10 SVGs in `src/components/illustrations/`)
  2. Implement motion wrapper components (`RevealOnScroll`, `StaggerContainer`, `TextReveal`, `LenisSmoothScroll`) with `prefers-reduced-motion` safety
  3. Create navigation `Header` (with scroll compacting and text wordmark) and `BottomActionBar` (fixed WhatsApp + Call with safe-area insets)
  4. Create `Footer` with links, disclaimer, and demo analytics preview link
  5. Run type-check & build, commit Milestone 3
