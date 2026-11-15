# P P Paints — Kalladikode

A responsive, single-page paint shop website built with React, Vite and Tailwind CSS v4. It includes a colour visualiser, room paint estimate calculator, product categories, store details and WhatsApp enquiry links.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Shop configuration

Edit `src/data/business.js` to update the WhatsApp number, phone, location, map link, imagery, product categories, coverage rate and available pack sizes. `openingHours` is currently marked for confirmation. Ask the shop to confirm hours and current brand availability before publishing those details.

The Open Graph image currently uses the supplied shop logo at `public/images/logo/logo.jpg`. Replace it with a wide social sharing image when one is available. Product and room photos use remote Unsplash image URLs; local copies can be placed in `public/images` and configured in `src/data/business.js`.
