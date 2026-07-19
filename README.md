# Guruvayur Cabs — Website

Built with Next.js 15, TypeScript, Tailwind CSS v4 and shadcn/ui-style
components, matching the attached design (green/gold brand, hero booking
widget, popular services grid, fleet cards, footer).

## Stack

| Component        | Technology                          |
| ----------------- | ------------------------------------ |
| Framework         | Next.js 15 (App Router)              |
| Language           | TypeScript                          |
| Styling           | Tailwind CSS v4                     |
| UI components      | shadcn/ui-style (Button, Input, Card) |
| Icons             | lucide-react                        |
| Forms              | Web3Forms (free, no backend needed) |
| Images            | Cloudinary / any URL (Next/Image)   |
| Maps              | Google Maps Embed (iframe, no API key) |
| Hosting            | Vercel (Hobby plan, free)           |

## 1. Install

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Visit http://localhost:3000

## 3. Connect the booking & newsletter forms (Web3Forms)

1. Go to https://web3forms.com and sign up free (250 submissions/month).
2. Create an Access Key for guruvayurcabs.com.
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in these two files with your real key:
   - `components/BookingForm.tsx`
   - `components/Footer.tsx` (newsletter signup)

No backend or server function is required — the form posts directly to
Web3Forms from the browser.

## 4. Swap in real photos (Cloudinary)

The hero and fleet sections currently use **hand-drawn SVG illustrations**
(a temple gopuram + taxi in the hero, simple vehicle silhouettes for each
fleet card) instead of stock photos. This was a deliberate choice: earlier
placeholder photo URLs pointed at guessed Unsplash IDs that didn't actually
exist and silently failed to load, and hotlinking someone else's stock photo
isn't something to ship on a real business site anyway. The SVGs always
render, no external requests, no broken images.

To use your own real photos once you have them (e.g. a professional shot of
the temple with one of your cars in front, similar to the reference design):

**Hero background:**
1. Upload your photo to Cloudinary (free tier): https://cloudinary.com
2. Copy its HTTPS delivery URL.
3. In `components/Hero.tsx`, replace `<HeroBackground />` with a background
   image div, e.g.:
   ```tsx
   <div
     className="absolute inset-0 bg-cover bg-center"
     style={{ backgroundImage: "url('https://res.cloudinary.com/.../hero.jpg')" }}
   />
   ```

**Fleet cards:**
1. Upload a photo per vehicle to Cloudinary.
2. In `lib/site-config.ts`, set the `image` field for that car to the
   Cloudinary URL (e.g. `image: "https://res.cloudinary.com/.../sedan.jpg"`).
   Leaving `image: ""` keeps the SVG illustration as a fallback.

`next.config.ts` already allows `res.cloudinary.com` and
`images.unsplash.com` as remote image sources — add any other domain you
use there.

## 5. Update the Google Map

`app/contact/page.tsx` embeds a Google Maps iframe with no API key needed.
To point it at your exact office location:

1. Search your address on https://maps.google.com
2. Click Share → Embed a map → copy the `src` URL.
3. Paste it into the `src` attribute of the `<iframe>` in `app/contact/page.tsx`.

## 6. Add Google Analytics + Search Console

1. Create a GA4 property at https://analytics.google.com and grab your
   Measurement ID (`G-XXXXXXX`).
2. Add it as an environment variable in `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXX
   ```
3. Wire up `next/script` in `app/layout.tsx` with the standard GA4 snippet
   (gtag.js), guarded by `process.env.NEXT_PUBLIC_GA_ID`.
4. Verify the site in Google Search Console using the HTML tag or DNS
   method — no code changes needed beyond adding the verification meta
   tag/file Search Console gives you.

## 7. Deploy to Vercel (free, Hobby plan)

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repo at https://vercel.com/new — Vercel auto-detects
Next.js and needs no configuration.

## Editing content

Nearly all site copy (nav links, phone number, services list, fleet, why-
choose-us items, footer links) lives in one place:

```
lib/site-config.ts
```

Edit that file to change text, add a service, or update the phone number —
no need to touch component files for routine content updates.

## Project structure

```
app/
  layout.tsx          — global layout, header + footer, SEO metadata
  page.tsx             — homepage (Hero, Services, Why Us, Fleet, CTA)
  about/, services/, fleet/, rates/, blog/, contact/,
  privacy-policy/, terms/   — supporting pages
  globals.css          — Tailwind v4 theme tokens (brand colors, fonts)
components/
  Header.tsx, Footer.tsx, Hero.tsx, BookingForm.tsx,
  PopularServices.tsx, WhyChooseUs.tsx, OurFleet.tsx, CtaBanner.tsx
  ui/                  — shadcn-style Button, Input, Card primitives
lib/
  site-config.ts        — all editable site content
  utils.ts              — className helper (cn)
```

## Notes

- The booking form and newsletter form both submit via `fetch` directly to
  Web3Forms — nothing to deploy on your own server.
- Fleet and hero photography use placeholder Unsplash URLs; swap for your
  own Cloudinary-hosted photos before launch (see step 4).
- Color palette and type scale live in `app/globals.css` under `@theme` —
  edit the `--color-brand-*` and `--color-gold-*` values to adjust the
  brand palette globally.
