# DEVELOPMENT PROMPT: Dr. Anshul Singhal Website — Pre-Launch Production Build
> **How to use this file:** give it to your AI coding agent as the first message (or place it in the project root as `AGENTS.md` / `CLAUDE.md` and tell the agent to read it fully before doing anything). It contains everything decided so far. Prepared by Lalit, September 29, 2026.

---

## 0. Your role and how to work
You are a senior full-stack engineer and front-end designer. You are building the production-ready personal website for Dr. Anshul Singhal, Oral and Maxillofacial Surgeon. It is currently operating in a private, pre-launch content state while verified content, assets, and integrations are collected. It will be shown to Dr. Singhal for approval, then launched by replacing verified data and enabling production integrations—not by rebuilding the application.

### Working protocol
- Read this whole document first. Then reply with a short plan (milestones, any assumption you are making, anything ambiguous). Do not start coding until you have posted the plan. If something is ambiguous, choose the option most consistent with this document and state the choice; do not stall.
- Work in the milestones in section 14. After each milestone: run type-check, lint and a production build, fix errors, then summarize what was done and what is next.
- Keep the code simple, typed and readable. Prefer fewer dependencies. Do not add libraries not listed here without a one-line justification.
- Never invent facts about the doctor (see section 2). When in doubt, use a bracketed placeholder.
- At the end, produce a short `README.md` (how to run, how to switch demo mode off, how to replace content, how to deploy).

---

## 1. Project summary
- **Type:** production-ready medical website in a private, pre-launch content state. It is not indexed or for public distribution until launch approval.
- **Audience before launch:** Dr. Singhal and the project team, viewing on a phone and laptop. **Audience after launch:** patients and referring clinicians.
- **Purpose:** deliver a fast, minimal, trustworthy surgeon website with a WhatsApp-first contact flow, a referral channel for other doctors, elegant motion, and a content/integration system that accepts verified production data without redesigning or rebuilding the application.
- **The doctor's patients (context for design decisions):** they arrive mostly through word of mouth, are cost-conscious, often anxious, some elderly, mostly on mid-range Android phones over mobile data. Emergency visitors (facial injury) need a call button within one second.
- **Positioning to express:** a specialist surgeon (not just a general dental clinic): clear, calm, honest, plain-language.

---

## 2. HARD RULES: content and honesty (highest priority)
The only real information is the name "Dr. Anshul Singhal" and the generic title "Oral and Maxillofacial Surgeon". Everything else is unconfirmed. Earlier notes contained AI-generated or wrong claims. Never use any of these:
- Double US board certification, Stanford training, "20 years of experience / 14 as specialist"
- Empanelment at Max or Rainbow hospitals, or any hospital logos
- Any specific degree university/year, registration number, membership (AOMSI, IAOMS), award, publication or statistic
- Real patient testimonials, Practo reviews, real before/after clinical images
- Superlatives: "renowned", "unmatched", "best", "transformed countless lives"
- AI-generated imagery

### Required behavior
- Credential areas use visibly empty bracketed fields, for example `[Degree, university, year]`, `[Registration no. to be confirmed]`, `[Membership to be confirmed]`, styled distinctly (dashed outline, muted colour).
- Service copy is generic and educational ("what this procedure generally involves"). It must never claim that he personally performs a specific procedure. Show a small note on the services page: "Services to be confirmed with Dr. Singhal."
- During pre-launch, no person photos are shown. The doctor portrait remains a neutral placeholder (monoline avatar illustration or soft shape). At launch, it may be replaced only with Dr. Singhal's approved photograph. Stock photography remains limited to non-person scenes (see section 11).
- During pre-launch, testimonials and before/after use only clearly labelled "Sample layout" content built from illustrations, never clinical images or fake quotes attributed to people. At launch, these components may show only approved, consented, legally reviewed content.
- Every statistic or count-up number is labelled "Sample figures" or uses non-claim numbers (for example, "4 steps in your care journey").
- A persistent, subtle pre-launch ribbon on every page: "Pre-launch: some content is awaiting verification. Not for public distribution."
- During pre-launch, phone, WhatsApp and address values are fake (for example `+91 00000 00000`) and clearly marked as placeholders. Never use a real clinic number until it is verified for launch.
- If a requirement appears to conflict with these rules, the rules win.

---

## 3. Tech stack
- **Framework:** Next.js (App Router) + React + TypeScript (strict)
- **Styling:** Tailwind CSS with design tokens as CSS variables
- **Animation:** One main library: `motion` (Framer Motion's current package) for reveals, stagger, page transitions, count-up; plain CSS for simple hovers and the SVG draw effect
- **Smooth scroll:** `lenis`, desktop / fine-pointer only, disabled on touch and when reduced motion is on
- **Fonts:** `next/font`, self-hosted: a refined serif for headings (e.g. Fraunces or Newsreader) and a clean sans for body (e.g. Inter or DM Sans). Maximum two families, with fallback stacks
- **Content:** Typed local seed data behind a content-access module (section 6) during pre-launch. The module is the stable boundary for a later CMS or verified production source.
- **Backend:** Next.js route handlers (serverless) return mock responses during pre-launch. Payload types and handler boundaries must be ready for later production integrations without changing page components.
- **Hosting:** Vercel
- **Package manager:** pnpm or npm (choose one and stick to it)
- **Do not add:** analytics, cookie banners, tracking pixels, a database, auth libraries, heavy chart libraries.

---

## 4. Design system
**Feel:** simple, minimal, calm, premium clinical. Generous white space, hairline dividers, large readable type, one accent colour.

### Tokens (adjust slightly only if contrast fails; define as CSS variables and Tailwind theme values)
- Background `#FAF8F4` (warm off-white)
- Surface `#FFFFFF`
- Ink `#16232B`
- Muted text `#5B6870`
- Accent (deep teal) `#0F5C63`
- Accent-soft `#DCEBEA`
- Warm sand `#D9C7A8`
- Hairline `#E4DFD6`
- Emergency accent (used sparingly) a muted red `#B3392F`
- Radius: 12px cards, 999px pills. Shadows: very soft only.
- Type scale: fluid `clamp()` sizes; body at least 17px on mobile, line-height about 1.6.
- Tap targets at least 48px. Focus states clearly visible.
- Dark mode: not required for the demo.

### Monoline illustration system
- One custom set of inline SVGs, single stroke width (about 1.5 px at 24px scale, use `vector-effect: non-scaling-stroke`), round caps and joins, one accent colour, no fills or only a soft accent-soft fill.
- Required illustrations: tooth, dental implant, jaw/skull outline, face profile, clinic room scene (hero), tooth-gap-to-implant sequence (for the sample before/after), location pin, WhatsApp-style chat bubble (generic, not the brand logo), shield/check (verification), calendar.
- Keep each SVG lightweight and hand-structured so paths can be animated. Put them in a single `illustrations` module as components.

---

## 5. Information architecture and pages
One demo location, but the data model supports several.

| Route | Page | Content (placeholder unless stated) |
|---|---|---|
| `/` | Home | Name and title, one-line positioning, primary WhatsApp and Call buttons, hero monoline illustration with draw animation, four service pillars, "how care works" 4-step timeline, sample stats strip, location card, emergency band, referral teaser |
| `/about` | About and credentials | Portrait placeholder, bio placeholder, credential list with bracketed fields and status chips (`Placeholder`), registration number slot, "how verified credentials will appear" explainer |
| `/services` | Services | Four pillars: Maxillofacial Surgery, Implantology, Geriatric Dentistry, Full Mouth Rehabilitation. Tap-able face/jaw diagram (region tap opens the matching service). "Services to be confirmed" note |
| `/services/[slug]` | Service detail | (build 3: `wisdom-teeth`, `facial-injury`, `dental-implants`) Generic overview, step timeline, FAQ accordion, "what to expect", cost-factors explainer (no prices), sample before/after (illustration-based), related services, book CTA |
| `/locations` and `/locations/[slug]` | Location | Placeholder clinic, address, hours, map slot (static placeholder, no live embed), WhatsApp and call buttons |
| `/guide` and `/guide/[slug]` | Patient guide | (2 sample articles: "When should you see a jaw surgeon?", "What affects the cost of an implant?") Generic educational text, reading-progress line |
| `/for-doctors` | For referring doctors | Explanation, what to include in a referral, mock referral form |
| `/contact` | Contact and book | WhatsApp primary, call, contact form (mock), mock booking flow (location, date/slot, confirmation) |
| `/privacy` | Privacy and disclaimer | Placeholder privacy notice and medical disclaimer |
| `/demo/dashboard` | Demo-only analytics preview | See section 9. Linked only from the footer ("Demo: analytics preview") |

### Global elements
- **Header:** sticky, minimal, becomes compact and gains a hairline on scroll. Logo wordmark uses text "Dr. Anshul Singhal" (no invented logo).
- **Mobile bottom action bar:** fixed WhatsApp + Call buttons, always reachable; respect safe-area insets.
- **Language toggle EN / हिन्दी:** in the demo, translate navigation, hero and contact buttons only, via a simple dictionary. Mark the Hindi text as needing human review in a code comment and in the README.
- **Footer:** links, disclaimer, demo notice.

---

## 6. Content architecture (critical: enables demo-to-real swap)
The site must never read content directly from components or files. All content passes through one content-access module with a stable, typed interface. In the demo it reads local seed data; in the real build only that module changes (to a CMS).

### Entities
- **Doctor:** name (real), title, positioning line, bio, portrait, registration number (with status), languages
- **Credential:** type, title, institution, year, `status` (`placeholder` | `pending` | `verified`), source
- **Service:** slug, pillar, summary, steps, FAQs, related, `status` (`offered` | `to-confirm`)
- **Location:** name, address, hours, phone, WhatsApp number, map reference, booking enabled
- **Article:** slug, title, body, category, date, related service
- **Testimonial:** quote, attribution, consent record, status (empty in the demo)
- **Site settings:** demo flag, ribbon text, default contacts, disclaimers

### Verification rule (build it into the renderer)
Only `verified` items render as normal production content. In pre-launch mode, `placeholder` items render as bracketed, styled placeholders. `pending` is never shown publicly. This preserves factual safety before launch while making the same components ready for verified content later.

Pages are composed of typed blocks (hero, credentials, service grid, step timeline, FAQ, location card, referral form, stats strip, sample before/after, and so on) that receive plain data and do not know its source.

**Pre-launch mode flag:** a single environment variable (currently `NEXT_PUBLIC_DEMO_MODE=true`, to be renamed only in a planned compatibility-safe change) controls: private access, pre-launch ribbon, mock endpoints, noindex, robots blocking, and placeholder styling. Turning it off must not break the build and must enable the production-ready paths only after the launch checklist is complete.

---

## 7. UI/UX and motion specification
Principle: motion decorates but never blocks. It must never delay or sit between a visitor and the call/WhatsApp buttons. Everything above the fold is visible immediately, with no loading intro or splash.

### Global rules
- Animate only `transform` and `opacity` (and SVG stroke properties). No layout-thrashing animations.
- Respect `prefers-reduced-motion`: disable smooth scroll, parallax, text/image reveal, count-up and draw effects, and show final states instantly.
- Trigger scroll animations once (no replays), with a viewport margin so they start slightly before elements enter.
- Durations: reveals 400 to 700 ms, ease-out; stagger 60 to 100 ms between items; page transition under 300 ms.
- Load animation code lazily below the fold where practical. Keep JS budget in mind (section 12).

### Effects and where to use them
- **Smooth scrolling (Lenis):** desktop / fine pointer only. Native scroll on touch.
- **Scroll-triggered reveal + staggered animation:** service cards, timeline steps, FAQ items, location cards, article lists.
- **Text reveal:** main page headings only, line by line (never letter by letter), with proper accessible text (no broken screen-reader output; keep a visually-hidden or intact text node).
- **Image reveal:** clinic/equipment photos use a soft mask or clip-path wipe plus fade, quick.
- **Sticky navigation:** compact on scroll; on mobile the bottom action bar is the priority.
- **SVG draw animation:** implement with `stroke-dasharray` and `stroke-dashoffset` (normalize with `pathLength="1"` so dash values are simple). Use on: the hero monoline illustration (draws once on load, fast), section illustrations when entering view, and the "how care works" timeline line, which draws as the user scrolls (scroll-linked). Not looped.
- **Subtle parallax:** hero and one or two section backgrounds only, tiny movement, disabled on touch devices.
- **Card hover interactions:** lift (a few px), border/accent shift, arrow nudge. Every card also has a clear `:active`/focus state because touch has no hover.
- **Animated page transitions:** short cross-fade / slight upward fade between routes (under 300 ms) using the App Router's template pattern or the View Transitions API as progressive enhancement. Choose the most robust; it must not break scroll restoration or focus management.
- **Count-up statistics:** component counts up when it enters view. Use only labelled "Sample figures" or non-claim numbers. Formatting via `Intl.NumberFormat`.
- **Interactive before/after slider:** accessible drag handle (keyboard arrow keys, touch and mouse, `aria` slider semantics). Content is the illustration sequence (tooth gap vs implant) or a neutral non-clinical image, labelled "Sample layout". Never clinical photos.
- **Extra interactions (build if time allows):**
  - Tap-able face/jaw diagram on `/services` that highlights a region and opens the related service
  - "Which treatment fits?" 3-question guide that ends at a service page (no data stored)
  - Reading-progress line on articles
  - Cursor-following effects: do not build

**Components to build:** Header, BottomActionBar, DemoRibbon, LanguageToggle, Hero, CredentialBlock (with status chips), ServiceCard, ServiceDetailTemplate, StepTimeline (scroll-drawn), FAQAccordion, LocationCard, EmergencyBand, StatsStrip (count-up), BeforeAfterSlider, ArticleTemplate, ReferralForm, ContactForm, BookingFlow, VideoSlot (empty placeholder describing intended video), Footer, PageTransition, RevealOnScroll/Stagger wrappers, illustration components.

---

## 8. Mock backend
- All endpoints are mock route handlers.
- **Contact form and referral form:** validate (required fields, phone format, length limits, trimmed input), respond with success. Store nothing, send nothing, log no personal data. The UI shows: "Demo only: nothing is sent."
- **Booking flow:** choose location, choose date (next 14 days), choose slot; availability is generated deterministically in the app (some slots "unavailable" for realism); confirmation screen only.
- **WhatsApp / call buttons:** open `wa.me` / `tel:` links with the fake placeholder numbers from settings. Prefill the WhatsApp message with a generic text.
- Include a simple hidden-field spam check. No rate-limit infrastructure needed.
- Structure the payload types and the "lead" shape now so that the real build only replaces the mock handler body.

---

## 9. Pre-launch analytics preview (`/demo/dashboard`)
A doctor-facing analytics preview using hardcoded sample data, clearly labelled "Sample data: illustrates what reporting will look like." It demonstrates the reporting UI and event model; it is not production analytics.
- **Sections:** WhatsApp clicks, call taps, enquiries by page, enquiries by location, top-viewed services, weekly trend.
- Cards fade/stagger in on scroll; charts animate on entry (bars grow, lines draw with `stroke-dasharray`/`stroke-dashoffset`, numbers count up).
- Build charts as lightweight hand-built SVG/CSS, not a heavy chart library.
- Not in the main navigation; footer link only. `noindex`.

---

## 10. Pre-launch mode, launch controls, privacy, and indexing

Pre-launch mode is a temporary operating state, not the product identity. It protects incomplete content while the production-ready UI, content contracts, and integration seams are completed.

- **Pre-launch controls:** private access/password gate, `noindex, nofollow`, robots blocking, visibly styled placeholders, pre-launch ribbon, mock forms/booking, and sample-only dashboard data.
- **Production controls:** enable only after every relevant item in the launch checklist is verified: remove the gate, remove the ribbon and placeholder styles, enable real integrations and analytics only where approved, make robots/indexing production-safe, and enable structured data populated solely from verified content.
- Do not publish structured data, real contact routes, credentials, testimonials, clinical imagery, or patient outcomes until supplied and approved.
- No analytics, cookies other than the gate session, or third-party trackers are active during pre-launch. No real personal data is collected or persisted during pre-launch.
- The transition is configuration and data driven. Components must not be redesigned or replaced merely to launch.

---

## 11. Images (internet images allowed, with rules)
- **Sources:** Unsplash, Pexels, Pixabay (free licences). Prefer Unsplash/Pexels.
- **Non-person scenes only:** clean modern clinic interior, reception/waiting area without people, minimal medical or dental equipment, abstract teal/sand textures, architectural details. Search terms such as: "dental clinic interior", "modern clinic minimal", "medical equipment minimal", "abstract teal gradient".
- Do not use stock photos of identifiable people or present any stock image as the doctor or his patients. A verified, approved photograph of Dr. Singhal is permitted at launch. No AI-generated images.
- Download, compress (WebP/AVIF), size appropriately, and self-host in the project; do not hotlink. Use `next/image` with correct `sizes`, alt text and blur placeholders.
- Keep an `ATTRIBUTIONS.md` listing each image, source URL, author and licence.
- If you cannot access the internet, use CSS gradient / illustration placeholders in the same slots, and list the intended image slots (with suggested search terms) in the README so they can be dropped in later.

---

## 12. Performance, accessibility and quality targets
- Largest Contentful Paint under 2.5 s on a mid-range phone with 4G throttling; layout shift under 0.1; home page under about 1 MB including images; keep JS small (lazy-load animation-heavy sections).
- Lighthouse mobile target: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 90+ (SEO applies structurally even though noindex is on).
- Accessibility (WCAG 2.2 AA basics): contrast, visible focus, keyboard operation, labelled forms, proper heading order, alt text, accessible slider, accordion and diagram semantics, skip link.
- Test viewports: small Android (about 360px), iPhone size, tablet, desktop.
- Structured data (Physician, MedicalClinic, LocalBusiness): implement as a disabled/optional layer in demo mode, ready for the real build. Do not publish placeholder data as structured data.

---

## 13. Production launch considerations (do not enable before approval)
- Swap seed data for a headless CMS (Sanity or Payload) or Git-based MDX behind the same content-access module, or retain verified local data while preserving the same interface.
- Connect real forms to approved email/WhatsApp and, if selected, minimal-lead storage behind the existing handler boundary.
- Add an approved doctor photograph, verified credentials, confirmed services, clinic details, consented testimonials, approved clinical imagery, and real analytics only through their typed data and integration boundaries.
- Compliance to plan for: India's DPDP Act (core duties apply from May 13, 2027; older IT Act rules until then), dental council advertising rules (testimonials, claims, before/after), a privacy policy and disclaimer, disclosure that WhatsApp is a third-party platform. HIPAA does not apply.
- Do not collect clinical details through the site.

---

## 14. Build order (milestones)
1. **Setup:** project, TypeScript strict, Tailwind tokens, fonts, folder structure, demo-mode flag, password gate, noindex/robots, DemoRibbon.
2. **Content layer:** entity types, seed data with placeholders, content-access module, verification/status rendering.
3. **Design system:** layout, Header, BottomActionBar, Footer, buttons, cards, monoline illustration set, motion wrappers (reveal, stagger, text reveal), reduced-motion handling, Lenis (desktop only).
4. **Core pages:** Home, About, Services, one service detail (then two more), Location, Contact with mock form.
5. **Signature interactions:** SVG draw hero, scroll-drawn timeline, count-up stats, before/after slider, card hovers, page transitions, subtle parallax.
6. **Remaining pages:** patient guide (2 samples), for-doctors with referral form, mock booking flow, privacy page, language toggle.
7. **Dashboard:** `/demo/dashboard` with animated sample charts.
8. **Production readiness and QA:** complete the reusable components/integration boundaries, images and verified-content slots, mobile pass, performance and accessibility audit, Lighthouse, README, ATTRIBUTIONS, and launch checklist. Do not enable production data or integrations before approval.

---

## 15. Definition of done
- [ ] All pages in section 5 render from seed data through the content-access module
- [ ] No unverified personal claim appears before launch; verified content can replace placeholders through the content layer
- [ ] Bracketed placeholders are clearly visible in pre-launch credential areas; the pre-launch ribbon shows on every page
- [ ] All animations in section 7 work, are subtle, and switch off under reduced motion
- [ ] Forms and booking work as mocks and store nothing
- [ ] Site is safely private and non-indexed in pre-launch mode; the launch configuration can be enabled without redesigning or rebuilding
- [ ] Performance and accessibility targets met on mobile
- [ ] Images are self-hosted, non-person, attributed; no AI-generated images
- [ ] README explains run, deploy, pre-launch-to-production transition, content ingestion, and integration activation

---

## 16. Things you must not do
- Do not invent any biography, credential, statistic, testimonial or hospital affiliation.
- Do not use person photos, clinical images, AI-generated images or hospital logos.
- Do not add analytics, tracking, storage of user data, or real messaging integrations.
- Do not hijack scrolling on touch devices or use letter-by-letter text reveals.
- Do not use superlatives or marketing exaggeration in copy.
- Do not add dependencies or features beyond this document without stating why.
