# GlowCraft Makeup Studio — Website

A website for a makeup studio. It is built with React, Vite, and Tailwind CSS. It does not need a database — bookings go through Formspree (a form service), and images can come from any image hosting service.

> "Where Beauty Becomes Timeless Elegance."

## Pages

- **Home**
- **Services**
- **Gallery**
- **Booking**
- **Reviews**
- **Contact**

## Features

- Works well on phones, tablets, and computers (mobile-first design)
- Smooth animations using Framer Motion
- Booking form that sends an email through Formspree
- Gallery with category filters and a photo lightbox
- Map on the Contact page
- A floating "Book Now" button
- Good SEO tags on every page
- Fast loading with lazy-loaded images

## Tech stack

| Part | Tool |
| --- | --- |
| Build tool | Vite |
| UI library | React 18 |
| Styling | Tailwind CSS 3 |
| Routing | React Router v6 |
| Animation | Framer Motion |
| Icons | react-icons |
| SEO | react-helmet-async |
| Forms | Formspree (no backend needed) |
| Images | Cloudinary or any CDN |

## Getting started

```bash
npm install
npm run dev
```

The site opens at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

## How content is set up

All the text and settings are in one folder: [`src/data/`](src/data/). You do not need to touch the component code to change them.

### Business details — [`src/data/site.js`](src/data/site.js)

This file holds the studio's name, email, phone, address, and social links. **The values in this file right now are sample/demo data**, not a real business — swap them for the real details before using the site:

```js
export const SITE = {
  name: 'GlowCraft Makeup Studio',
  email: 'hello@glowcraftstudio.com',   // demo value — replace with the real email
  phone: '+1 (555) 123-4567',           // demo value — replace with the real phone number
  whatsapp: '15551234567',              // digits only, with country code
  address: '24 Rosewood Avenue, Beverly Hills, CA 90210', // demo value — replace with the real address
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID', // your own Formspree form id goes here
  mapsEmbedSrc: 'https://www.google.com/maps/embed?pb=...', // your own Google Maps embed link goes here
  googleReviewsWidgetId: '',            // optional Elfsight widget id
  socials: { instagram: '...', facebook: '...', pinterest: '...' },
};
```

### Other content files

- **Services** — [`src/data/services.js`](src/data/services.js): each service has an id, title, tag, price, description, image, and feature list.
- **Gallery** — [`src/data/gallery.js`](src/data/gallery.js): each image has a source, alt text, and category.
- **Testimonials** — [`src/data/testimonials.js`](src/data/testimonials.js): each review has a name, role, rating, avatar, and text.

> The gallery and service images currently use free Unsplash stock photos, so the site works right away without any setup.

## Setting up the booking form (Formspree)

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy its endpoint (something like `https://formspree.io/f/abcd1234`).
3. Paste it into `formspreeEndpoint` in `src/data/site.js`.
4. Form submissions will arrive in your Formspree inbox and your email.

## Setting up real images (Cloudinary)

1. Sign up at [cloudinary.com](https://cloudinary.com).
2. Upload your images.
3. Use the image URL in this format:
   ```
   https://res.cloudinary.com/<cloud-name>/image/upload/q_auto,f_auto,w_1200/<folder>/<file>.jpg
   ```
4. Put these URLs into `src/data/services.js` and `src/data/gallery.js`.

## Setting up the map

1. Open [Google Maps](https://maps.google.com) and search for the location.
2. Click **Share → Embed a map → Copy HTML**.
3. Paste the `src` link into `mapsEmbedSrc` in `src/data/site.js`.

## Project structure

```
glowcraft/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── WhatsAppButton.jsx
    │   ├── ServiceCard.jsx
    │   ├── TestimonialCard.jsx
    │   ├── Lightbox.jsx
    │   ├── PageWrapper.jsx
    │   ├── SectionHeading.jsx
    │   └── SEO.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── Services.jsx
    │   ├── Gallery.jsx
    │   ├── Booking.jsx
    │   ├── Reviews.jsx
    │   └── Contact.jsx
    └── data/
        ├── site.js
        ├── services.js
        ├── gallery.js
        └── testimonials.js
```

## Deployment

This is a static site, so it can be hosted almost anywhere:

| Host | Build command | Output folder |
| --- | --- | --- |
| Vercel | `npm run build` | `dist` |
| Netlify | `npm run build` | `dist` |
| Cloudflare Pages | `npm run build` | `dist` |
| GitHub Pages | `npm run build` | `dist` |

For hosts that need it, make sure unknown routes fall back to `index.html` so React Router can handle them.

## Design

| Item | Value |
| --- | --- |
| Pink (main color) | `#FFC0CB` |
| Pink (light background) | `#FFE4EC` |
| White / Ivory | `#FFFFFF` / `#FFFDF8` |
| Gold (accent) | `#D4AF37` |
| Gold (light) | `#E6C76A` |
| Text color | `#2A2A2A` |
| Heading font | Playfair Display |
| Body font | Poppins |

## Notes

- There is no login system — this is on purpose, to keep the site simple.
- To update text, images, or details: edit the files in `src/data/` and redeploy.
- Bookings can be checked in the Formspree dashboard or inbox.

## License

This project template is free to learn from and reuse for your own portfolio or demo work.
