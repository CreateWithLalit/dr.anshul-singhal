# Asset Attributions

This file documents all external assets used in the project.

## Fonts

| Asset | Source | URL | Licence | Usage |
|---|---|---|---|---|
| Fraunces (serif) | Google Fonts / Undercase Type | https://fonts.google.com/specimen/Fraunces | SIL Open Font Licence 1.1 | Heading / display typography |
| Inter (sans-serif) | Google Fonts / Rasmus Andersson | https://fonts.google.com/specimen/Inter | SIL Open Font Licence 1.1 | Body / UI typography |

Both fonts are self-hosted via `next/font/google` at build time — no runtime CDN request is made.

---

## Images

All temporary stock images below are local copies in `public/images/`, registered in `src/config/demoImages.ts`, and must be replaced with approved photography before public launch.

| Local asset | Source | Photographer | Licence |
|---|---|---|---|
| `hero-doctor.jpg` | https://www.pexels.com/photo/doctor-19438566/ | Oys Photography | Pexels License |
| `consultation.jpg` | https://www.pexels.com/photo/woman-consulting-a-doctor-5215008/ | Antoni Shkraba | Pexels License |
| `family-consultation.jpg` | https://www.pexels.com/photo/a-doctor-in-a-consultation-with-a-mother-and-her-daughter-7653094/ | Pavel Danilyuk | Pexels License |
| `clinic-equipment.jpg` | https://www.pexels.com/photo/a-dental-equipment-in-the-clinic-6812453/ | Pavel Danilyuk | Pexels License |
| `clinic-chair.jpg` | https://www.pexels.com/photo/a-clinic-with-dental-equipment-5355920/ | Tima Miroshnichenko | Pexels License |
| `wisdom-teeth.jpg` | https://images.unsplash.com/photo-1712258084525-5beab086e5c6 | Unsplash Contributor | Unsplash License |
| `facial-injury.jpg` | https://images.unsplash.com/photo-1657808741509-dced0cde853f | Unsplash Contributor | Unsplash License |
| `dental-implants.jpg` | https://www.pexels.com/photo/dental-implant-model-6502305/ | Pexels Contributor | Pexels License |
| `geriatric-dentistry.jpg` | https://www.pexels.com/photo/a-dentist-showing-an-elderly-woman-her-denture-6627589/ | Pexels Contributor | Pexels License |
| `full-mouth-rehab.jpg` | https://www.pexels.com/photo/4687407/ | Pexels Contributor | Pexels License |
| `clinic-exterior.jpg` | https://images.unsplash.com/photo-1586773860418-d37222d8fce3 | National Cancer Institute | Unsplash License |

All visuals are:
- Monoline SVG illustrations built as React components (`src/components/illustrations/index.tsx`)
- CSS gradient / colour backgrounds

Placeholder image slots still remaining:
- **Doctor portrait** — `/about` page. Intended: a neutral, non-clinical headshot approved by Dr. Singhal, or a commissioned illustration. Not to be replaced with stock photography of identifiable persons.
- **Clinic interior** — hero section enhancement (optional). Intended: a clean modern clinic interior scene (no identifiable people). Suggested search terms for Unsplash/Pexels: `"dental clinic interior minimal"`, `"modern medical waiting room"`.
- **Equipment detail** — service pages (optional). Suggested: `"dental equipment minimal white"`.

If photographic assets are added in the future:
1. Use Unsplash, Pexels, or Pixabay (free licence only)
2. Verify no identifiable people are in the image
3. Download and self-host (do not hotlink)
4. Compress to WebP/AVIF
5. Use `next/image` with correct `sizes`, `alt`, and `blurDataURL` props
6. Add the asset here with source URL, author, and licence

---

## Third-Party Services

| Service | Purpose | Notes |
|---|---|---|
| WhatsApp (`wa.me`) | Patient contact CTA | Third-party platform. Fake placeholder number `+91 00000 00000` in demo. |
| Tel links (`tel:`) | Emergency / call CTA | Uses same fake placeholder number in demo. |

No analytics services, tracking pixels, or data-storage third parties are used.

---

_Last updated: September 30, 2026_
