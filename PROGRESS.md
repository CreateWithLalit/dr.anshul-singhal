# Progress Tracker: Dr. Anshul Singhal Demo Prototype

**Session Date:** September 30, 2026
**Status:** In Progress

---

## Milestone Status Overview

- [ ] **Milestone 1: Setup**
  - Next.js (App Router) + TypeScript (strict)
  - Tailwind CSS + CSS variable design tokens
  - Self-hosted fonts (`next/font` Fraunces + Inter)
  - Folder structure & base layout
  - `NEXT_PUBLIC_DEMO_MODE=true` flag
  - Password gate (`/api/gate` & session cookie)
  - `noindex, nofollow` metadata & `robots.txt`
  - Demo ribbon persistent component
- [ ] **Milestone 2: Content Layer**
  - Entity type definitions (`Doctor`, `Credential`, `Service`, `Location`, `Article`, `Testimonial`, `SiteSettings`)
  - Typed seed data with strict bracketed placeholders for unverified claims
  - Content-access module (`getContent()`, getters)
  - Verification & status rendering rules (`verified`, `placeholder`, `pending`)
- [ ] **Milestone 3: Design System & Core Components**
  - Layout shell, Header, BottomActionBar, Footer
  - Button system, cards, badge/chips
  - Hand-crafted monoline illustration set (10 SVGs)
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
- **Completed:** Repository initialized, AGENTS.md and PROGRESS.md created.
- **In Progress:** Step 2 Plan confirmation and starting Milestone 1 Setup.
