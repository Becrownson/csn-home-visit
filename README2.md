# CrownPhysio.online — Physiotherapy in Chhatrapati Sambhajinagar

A single-file, ultra-premium marketing site for a home-visit, clinic & tele
physiotherapy practice in **Chhatrapati Sambhajinagar, Maharashtra** (covering CIDCO,
Garkheda, Osmanpura, Jalna Road, Cantonment, Nirala Bazaar & home visits citywide).
Everything — HTML, CSS, JS, icons, illustrations — lives in **one `index.html`**: no
build step, no dependencies, no external images that can break. Open it, or drop it on
any static host.

**Positioning:** premium local physiotherapy & rehabilitation — pain relief, post-surgery
recovery, stroke & neuro rehab, sports injury, women's health and senior care — delivered
**at home, in clinic, or over tele consultation**.

---

## ⚡ Before you publish

Your **phone, WhatsApp, and email are already wired in** — leads route to
`+91 95619 98544` (WhatsApp `wa.me/919561998544`) and `Crownphysio@gmail.com`.

One optional placeholder remains:

| Placeholder in file | Replace with | Appears in |
|---|---|---|
| `calendly.com/your-link/assessment` | Your Calendly (or any) booking-calendar URL | "Open the booking calendar" link in the booking form |

If you ever need to change the contact details, Find & Replace these exact strings:

| String | Where |
|---|---|
| `919561998544` | WhatsApp `wa.me` links + `tel:` links + the `WHATSAPP` variable in the script (digits only, country code + number) |
| `+91 95619 98544` | Display phone in nav, drawer & footer |
| `Crownphysio@gmail.com` | Email in the footer + structured data |

> The booking form needs no backend. On submit it composes a pre-filled WhatsApp
> message (name, phone, area, visit type, condition) and opens
> `wa.me/919561998544` — leads land straight in your WhatsApp.

---

## 🚀 Deploy (pick one — all free)

**Netlify Drop (fastest, ~30 seconds)**
1. Go to <https://app.netlify.com/drop>
2. Drag the folder (or just `index.html`) onto the page.
3. You get a live URL instantly. Add your `crownphysio.online` domain in *Site settings → Domain*.

**GitHub Pages**
1. Create a repo, add `index.html`.
2. *Settings → Pages → Build from branch → `main` / root*.
3. Live at `https://<user>.github.io/<repo>/`.

**Any static host / cPanel / S3 / Cloudflare Pages / Vercel**
- Upload `index.html` as the site root. Done. (No build command, no framework.)

> **Local SEO is baked in:** the `<head>` carries a Chhatrapati-Sambhajinagar-targeted
> title, meta description & keywords, geo meta tags, Open Graph tags, and a
> **MedicalBusiness JSON-LD schema** (name, phone, email, area served, services incl. tele).
> Submit the live URL to Google Search Console and create a Google Business Profile for the
> practice to start ranking locally.

---

## 🎨 Customising

Everything is plain HTML/CSS — no framework knowledge needed.

- **Brand name** — Find & Replace `CrownPhysio` (it's only ever the brand text + the
  "Pain Relief • Rehabilitation • Recovery • Mobility" tagline).
- **Colours** — edit the CSS variables at the very top of the `<style>` block under
  `:root`. The palette is `--teal: #0F766E` (primary), `--navy: #0B1F3A` (footer/secondary),
  `--gold: #D4A24C` (accent) and `--alabaster: #FAF8F5` (warm paper base). Change those and
  the whole site shifts cohesively.
- **Fonts** — currently *Fraunces* (display) + *Hanken Grotesk* (body), loaded from Google
  Fonts in the `<head>`. Swap the `<link>` + the `font-family` tokens to change them.
- **Services / conditions** — each card lives in the `#services` section; the little tags
  are `<span>`s inside `.svc__list`. (Includes a dedicated **Tele physiotherapy** card.)
- **Body-map conditions & copy** — edit the `regions` object in the script (one entry per
  body area: title, condition chips, and the treatment "approach" paragraph).
- **Pricing** — edit the `PRICE` object (base rates for `home` / `clinic` / `tele`) and the
  `discountFor()` function (package discount tiers: 3+ → 5%, 6+ → 12%, 12+ → 18%, 24 → 22%).
  Prices recalculate live.
- **Service area** — search for `Sambhajinagar` and the local area names (`CIDCO`,
  `Garkheda`, `Osmanpura`, `Jalna Road`, `Cantonment`, `Nirala Bazaar`) in the hero chip,
  availability ticker, booking dropdown, testimonials & footer.
- **Testimonials** — the `testimonials` array in the script (local rehab stories).
- **FAQ** — the `faqs` array in the script.

---

## ✅ What's built in

- **Signature interactive body map** — tap a body region to reveal the conditions treated
  there and the treatment approach.
- **Live pricing calculator** — **Home / Clinic / Tele** toggle + sessions slider → instant
  per-session & package pricing with savings.
- **WhatsApp-native booking** — Home / Clinic / Tele visit-type selector; no server required.
- **Live availability ticker**, animated proof-stat counters, draggable testimonial slider,
  accordion FAQ, magnetic buttons, spring scroll-reveals, parallax glass.
- **Premium navy footer** — full-bleed, with gold accents, localized service areas, and modes.
- **Fully responsive** — purpose-built layouts down to small phones, with a slide-in mobile
  drawer and a sticky "Book" bar.
- **Accessible** — keyboard-navigable, visible focus states, `aria` labels, and full
  `prefers-reduced-motion` support (animations disable for users who ask for it).
- **Self-contained & resilient** — zero external images, zero JS dependencies; content
  still shows if scripts fail to load.

## 🧪 Tested

Rendered and verified with headless Chromium (Playwright) at desktop (1440px), tablet
(768px) and mobile (390px). An automated interaction suite confirms: body-map selection,
**three-way pricing math (home ₹1,499 / clinic ₹899 / tele ₹599 × session discount tiers)**,
the pricing-toggle glide, testimonial navigation, FAQ accordion, mobile menu open/close,
the animated counters, and the WhatsApp booking payload (name, phone, area, visit type
incl. **Tele consultation**, condition). All passing, zero console errors.

---

*Imageless-by-design: the visual richness comes from glassmorphism, gradients, type, the
teal/navy/gold palette and inline SVG — so there are no broken-image risks and the whole
site is a single portable file.*
