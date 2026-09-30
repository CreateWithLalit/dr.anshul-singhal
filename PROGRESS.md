# Progress Tracker: Dr. Anshul Singhal Website — Pre-Launch Production Build

**Last Updated:** October 1, 2026  
**Status:** Production-ready UI/system foundations are substantially built; the site remains in a private pre-launch content state. It is not ready for public launch until verified content, production-mode controls, integrations, and QA gaps are complete.

## Project Direction

This is not a throwaway prototype. It is the production website operating with temporary pre-launch data and safeguards. The intended workflow is:

`production-ready application → client approval → verified content/assets/contact details → approved integrations → launch`

The application must not need a visual redesign or component rebuild at approval. Placeholder values are temporary data placeholders; they are replaced through typed content and integration boundaries.

## Current State by Category

### A. Production-ready UI/system already built

- Next.js App Router foundation, strict TypeScript, Tailwind design tokens, responsive layout, core routes, monoline illustrations, motion wrappers, mobile action bar, password-gate middleware, and static sample dashboard.
- Typed entities and a content-access module for doctor, credentials, services, locations, articles, testimonials, and settings.
- Credential placeholder/verified presentation, generic service/detail templates, location/map slots, responsive portrait slot, booking UI, patient guide, referral/contact UI, privacy UI, video/media slot, and related-service linking.
- All four required service pillars are represented in typed seed content: Maxillofacial Surgery, Implantology, Geriatric Dentistry, and Full Mouth Rehabilitation.
- Shared pre-launch mode now drives middleware, ribbon, robots route, metadata, and the structured-data publication guard. A skip link and Devanagari-capable UI fallback are in place.

### B. Temporary pre-launch content and controls

- Local seed content contains bracketed placeholders, fake contacts, no testimonials, no photographic assets, sample figures, and generic educational copy.
- Private access, noindex metadata, blocking robots file, pre-launch ribbon, mock form behaviour, mock booking, and sample-only analytics remain active.

### C. Ready for later production integration

- Typed content-access seam can exchange seed content for verified local content, Git content, or a CMS.
- Credential statuses support verified publication and pending suppression.
- Route/UI locations exist for real contact, referral, booking, analytics, structured data, portrait, testimonials, and approved before/after content.
- Contact and referral mock routes have typed payloads, server-side validation, trimming, length checks, phone checks, honeypots, and explicit no-storage/no-transmission responses.
- Structured-data generation is implemented as a guarded production seam: it emits nothing in pre-launch or until minimum verified fields exist.

### D. Still required before public launch

- Verify and ingest all doctor, credential, service, location, contact, legal, photo, and consented-content data.
- Connect approved production providers behind the completed contact/referral mock handler boundaries.
- Complete staging verification of environment-aware robots and metadata before enabling production indexing.
- Add verified structured-data rendering, production analytics events/provider, and real booking/referral/contact integrations only after approval.
- Complete feature, mobile, accessibility, performance, Lighthouse, staging, and launch QA.
- Resolve content-access gaps and any unverified language that implies a personal service, affiliation, location, or outcome.

---

## Milestone Status Overview

- [x] **M1: Pre-launch Setup** (100%) — Next.js 15, TypeScript strict, Tailwind tokens, fonts, password gate, noindex, pre-launch ribbon.
- [x] **M2: Content Foundation** (80%) — Entity types, seed data, typed content-access module, credential status chips, portrait data contract, and all four pillars. Remaining: route all display content through the access boundary and prepare verified-content ingestion workflow.
- [x] **M3: Design System** (100%) — Header, Footer, BottomActionBar, 10 monoline SVG illustrations, motion wrappers (RevealOnScroll, Stagger, TextReveal, Lenis), reduced-motion safety.
- [x] **M4: Core Pages** (90%) — Home, About, Services, 5× Service Detail, Locations (list + slug), Contact, Guide (list + 2 articles), For Doctors, Privacy, Not-Found. Remaining: full content-centralization audit and verified production content.
- [x] **M5: Signature Interactions** (80%) — SVG draw hero, scroll-drawn timeline, count-up stats, card hover effects, page stagger animations. Missing: BeforeAfterSlider (slider is an illustration sequence), PageTransition (uses default App Router).
- [x] **M6: Remaining Pages** (85%) — Guide articles with reading progress bar, For Doctors referral form UI plus typed mock endpoint, mock booking flow UI, Privacy page, Language toggle with translated navigation/primary labels. Remaining: complete translation coverage and production integration readiness.
- [x] **M7: Demo Dashboard** (100%) — `/demo/dashboard` built with animated metric cards (count-up), horizontal bar charts, vertical bar charts, SVG line chart. All hand-built SVG/CSS. No chart libraries. Footer link works.
- [ ] **M8: Production Readiness & QA** (60%) — README and attributions exist; current type-check/lint/build pass. Pre-launch controls, private gate hardening, guarded structured-data seam, and mock form boundaries are implemented. Missing: verified asset/content ingestion, staging/mobile/Lighthouse checks, production-provider activation, and full launch checklist.

---

## Build Metrics (October 1, 2026)

- **TypeScript check (`npm run type-check`):** Exit 0, 0 errors.
- **Lint (`npm run lint`):** Exit 0, no ESLint warnings or errors.
- **Production build (`npm run build`):** Exit 0, 26 static pages generated.

| Route | Type | First Load JS |
|---|---|---|
| `/` | Static | 152 kB |
| `/about` | Static | 151 kB |
| `/contact` | Static | 151 kB |
| `/demo/dashboard` | Static | 149 kB |
| `/for-doctors` | Static | 149 kB |
| `/guide` | Static | 151 kB |
| `/guide/[slug]` (×2) | SSG | 154 kB |
| `/locations` | Static | 151 kB |
| `/locations/[slug]` (×1) | SSG | 147 kB |
| `/login` | Static | 107 kB |
| `/privacy` | Static | 147 kB |
| `/services` | Static | 151 kB |
| `/services/[slug]` (×3) | SSG | 151 kB |
| Shared JS (all) | Common | 105 kB |

---

## Session Log

### Session: October 1, 2026 (recovery and production-readiness documentation)
**Work completed:**
- Recovered the interrupted documentation pass by reviewing clean commit `899124e` against `AGENTS.md`, `README.md`, and the implemented pre-launch controls.
- Confirmed the README accurately describes the production-ready/pre-launch direction, typed content seam, password gate, noindex/robots behavior, structured-data guard, mock integration boundaries, limitations, content replacement, and deployment/launch sequence.
- Removed the committed sample password and obsolete `NEXT_PUBLIC_DEMO_DEFAULT_PASS` value from `.env.example`; the template now requires an operator-supplied private value and includes the optional site URL setting documented in the README.

**Verification result:** `npm run type-check` exit 0; `npm run lint` exit 0 with no warnings or errors; `npm run build` exit 0 with 26 static pages generated.

### Session: September 30, 2026 (AI agent)
**Work completed:**
- Fixed runtime crash on `/guide/[slug]`: aligned `bodyParagraphs`/`readTimeMinutes` field names with `Article` type.
- Fixed `robots.ts` build crash: replaced with static `public/robots.txt`.
- Fixed Framer Motion `ease` type error in `_home-animations.tsx`.
- Added `generateMetadata` + awaited `params` to all slug routes.
- Added `not-found.tsx` for correct 404 handling.
- Added `ReadingProgressBar` to guide articles.
- Set `eslint.ignoreDuringBuilds: true` in `next.config.ts` to prevent Windows-specific deadlock.
- Built `/demo/dashboard` page with 6 animated sections (metrics, weekly trend, enquiries by page, enquiries by location, top services, daily activity). Hand-built SVG/CSS only, no chart library.
- Created `README.md` with full setup, content-replacement, and deployment instructions.
- Created `ATTRIBUTIONS.md` documenting all fonts and placeholder image slots.
- Ran full progress audit: documented all page/component statuses and milestone percentages.

**Verification result:** `tsc --noEmit` exit 0, `npm run build` exit 0 (21 pages).

---

## Page & Component Status

### Pages
| Route | Status | Notes |
|---|---|---|
| `/` | Done | Hero draw, stats, location card, emergency band, referral teaser. |
| `/about` | Done | Portrait placeholder, credential chips, registration slot. |
| `/services` | Partial | Missing tap-able face/jaw diagram (optional interaction). |
| `/services/[slug]` (×3) | Partial | No drag before/after slider (optional). Static illustration used. |
| `/locations` & `/[slug]` | Done | Map placeholder, hours, WhatsApp/Call CTAs. |
| `/guide` & `/[slug]` (×2) | Done | Reading progress bar, 404 on unknown slug. |
| `/for-doctors` | Done | Mock referral form. |
| `/contact` | Done | Mock enquiry form, 3-step booking flow. |
| `/privacy` | Done | Medical disclaimer. |
| `/demo/dashboard` | Done | 6 animated chart sections, sample data labelled clearly. |
| `/login` | Done | Password gate. |

### Components
| Component | Status | Notes |
|---|---|---|
| Header | Done | Sticky, compacts on scroll, mobile drawer. |
| BottomActionBar | Done | WhatsApp + Call, safe-area insets. |
| DemoRibbon | Done | Persistent, dismissible, controlled by `NEXT_PUBLIC_DEMO_MODE`. |
| LanguageToggle | Done | EN/हिन्दी dictionary in `LanguageContext.tsx`. Hindi needs human review. |
| Hero | Done | SVG path-draw animation, reduced-motion safe. |
| CredentialBlock | Done | Dashed outline for placeholders, green chip for verified. |
| ServiceCard | Done | Hover lift, arrow nudge. |
| ServiceDetailTemplate | Done | Steps, FAQs, cost factors. |
| StepTimeline | Done | Scroll-linked line draw. |
| FAQAccordion | Done | Native details/summary pattern. |
| LocationCard | Done | Included in locations page and Home. |
| EmergencyBand | Done | In Home page. |
| StatsStrip | Done | Count-up with `Intl.NumberFormat`. |
| BeforeAfterSlider | Missing | Static illustration used instead. |
| ArticleTemplate | Done | Reading progress bar. |
| ReferralForm | Done | `for-doctors` page. |
| ContactForm | Done | Honeypot, validation, mock delay. |
| BookingFlow | Done | 3-step calendar → slot → confirmation. |
| VideoSlot | Stub | Placeholder text only. |
| Footer | Done | All nav links present, dashboard link present. |
| PageTransition | Missing | Default App Router transitions only. |
| RevealOnScroll / Stagger | Done | `useReducedMotion()` respected everywhere. |
| Illustration Set | Done | 10 monoline SVG components. |
| DashboardCharts | Done | MetricCard, HorizontalBars, VerticalBars, LineChart — all animated. |

---

## Pre-Launch Protection Audit

- **Password gate:** Active. All routes gated by `middleware.ts` via `demo_session` cookie; it is a temporary pre-launch control.
- **noindex / nofollow:** Set globally in `src/app/layout.tsx` metadata. Also set per-page on all slug routes.
- **robots.txt:** `Disallow: /` — all crawlers blocked.
- **Contact numbers:** All fake (`+91 00000 00000`) — stored in seed.ts `settings`.
- **WhatsApp numbers:** All fake (`910000000000`).
- **Forms:** No data stored, no email sent, no external service called. Mock delays only. Honeypot on contact form.
- **Booking flow:** No database, no real booking, no personal data storage.
- **Analytics:** None. No tracking pixels, SDKs, or third parties.
- **Dashboard:** Hardcoded sample data only; it is an analytics UI preview, not a production data source.

---

## Decisions Made

1. `robots.ts` removed — caused Next.js build trace crash on Windows. Replaced with static `public/robots.txt`.
2. `eslint.ignoreDuringBuilds: true` in `next.config.ts` — ESLint's `FlatCompat` caused a Windows-specific hang during `next build`. Does not affect type safety (TypeScript check is separate).
3. `ease: "easeInOut" as const` in Framer Motion animations — required for strict TypeScript `Easing` type.
4. `/demo/dashboard` is a static (SSG) page — all data is hardcoded in the page file, no server calls.
5. Dashboard charts use hand-built SVG/CSS — no external chart library added per AGENTS.md Section 3.
6. Session cookie expires in 7 days (set in `api/gate/route.ts`). This is intentional for a private prototype being shown over several days.

---

## Known Architecture and Specification Gaps

- The requested `PRD_Dr_Anshul_Singhal_Website_Prototype.md` and `TRD_Dr_Anshul_Singhal_Website_Prototype.md` are absent from the repository, so their requirements cannot yet be reconciled against implementation.
- Environment-aware metadata and a dynamic robots route are implemented, but must be staging-verified before production indexing is enabled.
- Contact and referral routes are validated, no-storage mock boundaries. Real provider integrations remain intentionally disabled.
- Content is not yet fully centralized through the content-access module.
- The current login flow no longer exposes or falls back to a password; `DEMO_PASSWORD` is required in pre-launch mode. Deployment configuration still requires staging verification.
- Unverified copy must be audited to remove wording that implies Dr. Singhal personally provides an unconfirmed service or operates at an unconfirmed location.

Additional feature gaps:
- Section 7 specifies `BeforeAfterSlider` — not yet built; static illustration used instead. Acceptable for demo.
- Section 7 specifies `PageTransition` — not built; default App Router transitions used. Acceptable for demo.
- Section 5 specifies face/jaw tap-able diagram — not built; plain service cards used instead. Acceptable for demo.

---

## Images / Assets

**External images used:** None.  
**All visuals:** Monoline SVG illustrations (`src/components/illustrations/index.tsx`) or CSS gradients.

**Placeholder image slots still remaining:**
- Doctor portrait (`/about` page) — awaiting Dr. Singhal approval.
- Clinic interior (hero enhancement, optional).
- Equipment detail (service pages, optional).

See `ATTRIBUTIONS.md` for full details and Unsplash search terms for each slot.

---

## Open Issues

| Issue | Status |
|---|---|
| Package name is `dr-anshul-singhal-demo` (not `maxiphos`) | Open — non-blocking for demo. |
| BeforeAfterSlider not built | Open — optional. Static illustration is in place. |
| Interactive face/jaw diagram not built | Open — optional. |
| PageTransition not built | Open — optional, uses default transitions. |
| Vercel deployment not completed | Required only after pre-launch controls and staging checks are ready. |
| Lighthouse run not completed | Open — manual testing recommended. |

---

## Next Work Order

1. Complete the content-centralization audit and ingest only verified doctor, credential, service, location, legal, and approved-asset data through the typed content boundary.
2. On a protected staging deployment, verify the password gate, `noindex` metadata, dynamic `robots.txt`, placeholder rendering, and structured-data suppression in pre-launch mode; separately verify the production-mode responses before enabling them.
3. Select and connect approved contact, referral, booking, and analytics providers behind the existing typed boundaries, with privacy/retention review before collecting any data.
4. Complete mobile, keyboard/accessibility, performance, Lighthouse, legal, Hindi-review, and end-to-end launch QA.
5. Enable public production mode only after the launch checklist, verified content, integrations, and stakeholder approval are complete.

---

## Pre-Launch Deployment Steps

1. `git push origin main`
2. Go to [vercel.com](https://vercel.com) → Import repository.
3. Set pre-launch environment variables:
   - `NEXT_PUBLIC_DEMO_MODE` = `true`
   - `DEMO_PASSWORD` = `dranshul2026` (or a new private code)
4. Deploy privately; do not enable public indexing or real integrations.
5. (Optional) Enable Vercel Deployment Protection for a second authentication layer.
6. Test all routes on the live URL.
7. Test on a real Android phone (360px viewport).
8. Verify the demo ribbon appears.
9. Verify the password gate appears when not authenticated.
10. Verify `robots.txt` returns `Disallow: /`.
