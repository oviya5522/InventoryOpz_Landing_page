# InventoryOpz — Landing Page

A React + Vite + Tailwind CSS landing page for InventoryOpz.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to /dist
```

## Replacing placeholders

All real assets (logo, screenshots, demo video, client logos) are represented by
labeled placeholder boxes so the layout won't need to be redesigned later:

- Navbar / Footer logo — inline placeholder marked `[INVENTORY_OPZ_LOGO_PLACEHOLDER]`
- `src/components/Hero.jsx` — `[HERO_PRODUCT_SCREENSHOT_PLACEHOLDER]`
- `src/components/ProductTour.jsx` — one screenshot placeholder per feature tab
- `src/components/DemoVideo.jsx` — `[INVENTORY_OPZ_DEMO_VIDEO_PLACEHOLDER]`
- `src/components/ProductShowcase.jsx` — 6 screenshot placeholders in the carousel
- `src/components/ClientProof.jsx` — client logo / testimonial / name / company placeholders
- `src/components/Pricing.jsx` — `₹[PRICE_PLACEHOLDER]`

To swap a placeholder for a real asset, replace the `<Placeholder .../>` usage
with a real `<img>` or `<video>` tag (see `src/components/Placeholder.jsx` for
the component it replaces).

## Structure

```
src/
  components/
    Navbar.jsx        Hero.jsx          ProductTour.jsx
    WhyInventory.jsx   HowItWorks.jsx    WhoItsFor.jsx
    DemoVideo.jsx      ProductShowcase.jsx  ClientProof.jsx
    Pricing.jsx        FAQ.jsx           FinalCTA.jsx
    Footer.jsx          Placeholder.jsx  (reusable asset placeholder)
  hooks/
    useReveal.js       (scroll-reveal-once intersection observer hook)
  App.jsx
  main.jsx
  index.css
```

## Notes

- Colors: navy (`navy-*`) for headings/structure, sky blue (`sky-*`) for CTAs
  and accents — defined in `tailwind.config.js`.
- Typography: Fraunces (display/serif) for headings, Inter for body text.
- No invented client names, testimonials, pricing, or statistics — every
  unconfirmed detail is a clearly labeled placeholder per the brief.
