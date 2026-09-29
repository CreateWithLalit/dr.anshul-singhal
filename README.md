# dr.anshul-singhal

> **Dr. Anshul Singhal — Oral & Maxillofacial Surgeon**
> Private Demo Prototype for in-person review (Noida / Delhi NCR).

---

## Overview
This repository contains a fast, minimal, accessible prototype built with Next.js (App Router), Tailwind CSS, and Framer Motion (`motion`). It showcases:
- **WhatsApp-First Contact Flow:** Fast direct communication tailored for Indian mobile patients.
- **Doctor Referral Channel:** Structured referral form for dentist and physician colleagues.
- **Strict Content Honesty:** No invented credentials, degrees, hospital empanelments, or testimonials. Unconfirmed items render as distinctly styled bracketed placeholders (`[Degree, university, year]`).
- **Headless Content Layer:** All site copy passes through `src/lib/content/index.ts`, enabling clean replacement with a CMS (e.g. Sanity/Payload) without altering UI components.
- **Accessible Motion:** Framer Motion scroll reveals, SVG draw effects, and Lenis smooth scrolling that automatically disable when `prefers-reduced-motion` is active.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Key variables:
- `NEXT_PUBLIC_DEMO_MODE=true` (enables demo banner, password gate, and mock endpoints)
- `DEMO_PASSWORD=dranshul2026` (access code for private preview)

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000). The demo access code is `dranshul2026`.

### 4. Quality & Build Checks
```bash
npm run type-check   # Strict TypeScript checks
npm run build        # Production Next.js build
```

---

## Switching Demo Mode Off (Real Build)
Set the environment variable in your production environment:
```env
NEXT_PUBLIC_DEMO_MODE=false
```
When `NEXT_PUBLIC_DEMO_MODE=false`:
- The top warning ribbon disappears.
- The password gate is deactivated.
- Search engine indexing (`robots.txt`) is permitted.
- Only verified credentials and approved services render.

---

## Replacing Content
All content is centralized in `src/lib/content/seed.ts` behind the interface defined in `src/lib/content/types.ts`. To update doctor qualifications, clinic addresses, or service scopes, edit `seed.ts` or connect an external headless API in `src/lib/content/index.ts`.

---

## Deployment (Vercel)
1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Configure `DEMO_PASSWORD` and `NEXT_PUBLIC_DEMO_MODE=true` under Project Settings > Environment Variables.
4. Deploy.
