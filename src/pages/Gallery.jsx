import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Lightbox from '../components/Lightbox.jsx';
import { gallery, galleryCategories } from '../data/gallery.js';

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () =>
      active === 'All'
        ? gallery
        : gallery.filter((g) => g.category === active),
    [active]
  );

  const open = (i) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i === 0 ? filtered.length - 1 : i - 1));
  const next = () =>
    setLightboxIndex((i) => (i === filtered.length - 1 ? 0 : i + 1));

  return (
    <PageWrapper>
      <SEO
        title="Gallery"
        description="Browse our portfolio of bridal, party, HD, and editorial makeup looks."
      />

      <section className="bg-gradient-luxury">
        <div className="container-x py-16 sm:py-20 text-center">
          <SectionHeading
            eyebrow="Portfolio"
            title="Moments of Pure Glow"
            subtitle="A curated showcase of our most-loved looks. Tap any image to view in full."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                  active === cat
                    ? 'bg-gradient-gold text-white border-transparent shadow-soft'
                    : 'bg-white text-charcoal border-pinkSoft hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {filtered.map((img, i) => (
              <motion.button
                layout
                key={img.src}
                onClick={() => open(i)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-2xl shadow-soft aspect-square focus:outline-none focus:ring-2 focus:ring-gold/60"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <span className="absolute bottom-3 left-3 right-3 text-white text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition text-left">
                  {img.alt}
                </span>
                <span className="absolute top-3 right-3 bg-white/90 text-gold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {img.category}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-charcoal/60 py-10">
              No images in this category yet.
            </p>
          )}
        </div>
      </section>

      <Lightbox
        images={filtered}
        index={lightboxIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </PageWrapper>
  );
}
