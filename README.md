# GlowCraft Makeup Studio

A luxury, fully responsive, production-ready public website for **GlowCraft Makeup Studio** — built with React + Vite + Tailwind CSS + Framer Motion. **No database required** — all dynamic features run via external services (Formspree for booking emails, Cloudinary/CDN for images, Google Maps embed for location, optional Google Reviews widget).

> *"Where Beauty Becomes Timeless Elegance."*

---

## ✨ Features

- **6 Pages** — Home, Services, Gallery, Booking, Reviews, Contact
- **Responsive** — mobile-first (320px → desktop+) with Tailwind breakpoints
- **Animations** — Framer Motion page transitions, scroll reveals, hero parallax
- **Booking** — Formspree integration sends submissions straight to your inbox
- **Gallery** — category filter + keyboard-accessible lightbox
- **Reviews** — static testimonial cards + optional Google Reviews widget slot
- **Contact** — responsive Google Maps iframe, click-to-call/email
- **WhatsApp** — floating "Book Now" CTA
- **SEO** — `react-helmet-async` per-page meta tags
- **Performance** — lazy-loaded images, custom fonts preloaded, no DB dependencies

---

## 🛠 Tech Stack

| Layer | Tool |
|---|---|
| Build | Vite |
| UI | React 18 |
| Styling | Tailwind CSS 3 |
| Routing | React Router v6 |
| Animation | Framer Motion |
| Icons | react-icons |
| SEO | react-helmet-async |
| Forms | Formspree (no backend) |
| Images | Cloudinary / any CDN |

---

## 🚀 Getting Started

```bash
# install
npm install

# dev server
npm run dev

# production build
npm run build
npm run preview
```

The dev server opens at `http://localhost:5173`.

---

## ⚙️ Configuration

All editable content lives in [`src/data/`](src/data/). Update these files — no code changes needed.

### 1. Site info — [`src/data/site.js`](src/data/site.js)

```js
export const SITE = {
  name: 'GlowCraft Makeup Studio',
  email: 'hello@glowcraftstudio.com',
  phone: '+1 (555) 123-4567',
  whatsapp: '15551234567',          // digits only with country code
  address: '24 Rosewood Avenue, Beverly Hills, CA 90210',
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  mapsEmbedSrc: 'https://www.google.com/maps/embed?pb=...',
  googleReviewsWidgetId: '',        // optional Elfsight widget id
  socials: { instagram: '...', facebook: '...', pinterest: '...' },
};
```

### 2. Services — [`src/data/services.js`](src/data/services.js)
Each card: `id, title, tag, price, description, image, features[]`.

### 3. Gallery — [`src/data/gallery.js`](src/data/gallery.js)
Each image: `src, alt, category`. Categories also listed in `galleryCategories`.

### 4. Testimonials — [`src/data/testimonials.js`](src/data/testimonials.js)
Each entry: `name, role, rating, avatar, text`.

---

## 📨 Formspree Setup (Booking)

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form → copy the endpoint (looks like `https://formspree.io/f/abcd1234`).
3. Paste it into `formspreeEndpoint` in [`src/data/site.js`](src/data/site.js).
4. Submissions land in your Formspree inbox **and** the email registered on your account.
5. (Optional) Configure auto-replies / spam filters in the Formspree dashboard.

> Want EmailJS instead? Replace the `fetch(...)` call in [`src/pages/Booking.jsx`](src/pages/Booking.jsx) `handleSubmit` with `emailjs.send(...)`. The form state and validation stay the same.

---

## 🖼 Cloudinary Setup (Images)

1. Sign up at [cloudinary.com](https://cloudinary.com).
2. Upload images to your media library.
3. Use the delivery URL with auto-optimization params:
   ```
   https://res.cloudinary.com/<cloud-name>/image/upload/q_auto,f_auto,w_1200/<folder>/<file>.jpg
   ```
4. Replace placeholder URLs in `src/data/services.js` and `src/data/gallery.js`.

> The current data files use Unsplash placeholders so the site renders out-of-the-box.

---

## 🗺 Google Maps Embed

1. Open [Google Maps](https://maps.google.com), search your studio.
2. Click **Share → Embed a map → Copy HTML**.
3. Paste the `src` value into `SITE.mapsEmbedSrc` in `src/data/site.js`.

---

## ⭐ Google Reviews (Optional)

The Reviews page already shows a beautiful Google rating card and static testimonials. To embed live reviews:

1. Create a free widget at [Elfsight Google Reviews](https://elfsight.com/google-reviews-widget/).
2. Copy your widget id (from the embed snippet, e.g. `elfsight-app-xxxxx`).
3. Paste the id (without the `elfsight-app-` prefix) into `googleReviewsWidgetId` in `src/data/site.js`.
4. Add the Elfsight platform script to `index.html`:
   ```html
   <script src="https://static.elfsight.com/platform/platform.js" defer></script>
   ```

---

## 🗂 Project Structure

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

---

## 📦 Deployment

The site is a fully static SPA — deploy anywhere:

| Host | Build cmd | Output dir | Notes |
|---|---|---|---|
| **Vercel** | `npm run build` | `dist` | zero config |
| **Netlify** | `npm run build` | `dist` | add `_redirects`: `/* /index.html 200` |
| **Cloudflare Pages** | `npm run build` | `dist` | enable SPA fallback |
| **GitHub Pages** | `npm run build` | `dist` | use `vite-plugin-gh-pages` or set `base` in `vite.config.js` |

For SPA hosts, ensure unknown routes fall back to `index.html` so React Router handles them.

---

## 🎨 Design System

| Token | Value |
|---|---|
| Pink (primary) | `#FFC0CB` |
| Pink (soft bg) | `#FFE4EC` |
| White / Ivory | `#FFFFFF` / `#FFFDF8` |
| Gold (accent) | `#D4AF37` |
| Gold (soft) | `#E6C76A` |
| Charcoal text | `#2A2A2A` |
| Serif font | Playfair Display |
| Sans font | Poppins |

Tailwind tokens live in [`tailwind.config.js`](tailwind.config.js); reusable component classes (`.btn-primary`, `.card`, `.input`, `.section`, `.eyebrow`) live in [`src/index.css`](src/index.css).

---

## 🔐 Admin / Content Updates

There is no login system — this is by design.

**Update text or images:** edit the relevant file in `src/data/` and redeploy (or push to your connected git host).
**Update gallery:** upload new image to Cloudinary, paste its URL into `src/data/gallery.js`.
**View bookings:** check your Formspree dashboard or email inbox.

---

## 📜 License

Private — © GlowCraft Makeup Studio.
