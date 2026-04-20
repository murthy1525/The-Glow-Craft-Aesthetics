import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowNarrowRight, HiSparkles } from 'react-icons/hi';
import PageWrapper from '../components/PageWrapper.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import { services } from '../data/services.js';
import { testimonials } from '../data/testimonials.js';
import { gallery } from '../data/gallery.js';
import { SITE } from '../data/site.js';

export default function Home() {
  const featuredServices = services.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);
  const featuredGallery = gallery.slice(0, 6);

  return (
    <PageWrapper>
      <SEO
        title="Home"
        description={`${SITE.name} — ${SITE.slogan}. Bridal, Party & HD makeup by award-winning artists.`}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pinkPrimary via-pinkSoft to-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-24 w-96 h-96 bg-pinkDeep/40 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] bg-pinkPrimary/60 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-gold/15 rounded-full blur-3xl" />
        </div>

        <div className="container-x relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 sm:py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <p className="eyebrow inline-flex items-center gap-2 justify-center lg:justify-start">
              <HiSparkles /> Luxury Makeup Studio
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight text-charcoal">
              Where Beauty Becomes
              <span className="block bg-gradient-gold bg-clip-text text-transparent">
                Timeless Elegance
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-charcoal/70 max-w-xl mx-auto lg:mx-0">
              Bespoke bridal, party and HD makeup artistry — crafted to make
              every moment look as breathtaking as it feels.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to="/booking" className="btn-primary">
                Book Appointment <HiArrowNarrowRight />
              </Link>
              <Link to="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                ['10+', 'Years'],
                ['1.2k+', 'Brides'],
                ['5★', 'Rated'],
              ].map(([n, l]) => (
                <div key={l} className="text-center lg:text-left">
                  <p className="font-serif text-2xl text-gold">{n}</p>
                  <p className="text-xs uppercase tracking-widest text-charcoal/60">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-gold opacity-20 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=900&q=80&auto=format&fit=crop"
                alt="Bridal makeup"
                loading="eager"
                className="relative rounded-[2rem] shadow-2xl object-cover w-full aspect-[4/5]"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 sm:-left-10 bg-white rounded-2xl p-4 shadow-soft hidden sm:flex items-center gap-3"
              >
                <span className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-white">
                  <HiSparkles />
                </span>
                <div>
                  <p className="text-xs text-charcoal/60">Signature</p>
                  <p className="text-sm font-medium">HD Bridal Glow</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Signature"
            title="Services Crafted for You"
            subtitle="From intimate engagements to grand bridal moments — every look is created with the care of a couture atelier."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/services" className="btn-outline">
              View All Services <HiArrowNarrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section bg-gradient-to-b from-white to-pinkSoft/40">
        <div className="container-x">
          <SectionHeading
            eyebrow="Portfolio"
            title="A Glimpse of Our Artistry"
            subtitle="Real moments, real radiance — every face a love letter to detail."
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {featuredGallery.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl shadow-soft ${
                  i === 0 ? 'col-span-2 row-span-2 aspect-square sm:aspect-[4/5]' : 'aspect-square'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/gallery" className="btn-primary">
              Explore Full Gallery <HiArrowNarrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Kind Words"
            title="Loved by Brides & Beauty Lovers"
            subtitle="Hundreds of glowing reviews from clients who became part of the GlowCraft family."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredTestimonials.map((t, i) => (
              <TestimonialCard key={t.name} item={t} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/reviews" className="btn-outline">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative overflow-hidden">
        <div className="container-x my-10">
          <div className="relative rounded-3xl bg-gradient-gold p-8 sm:p-12 lg:p-16 text-center text-white shadow-soft overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
            <h3 className="relative font-serif text-3xl sm:text-4xl lg:text-5xl">
              Ready for Your Most Beautiful Moment?
            </h3>
            <p className="relative mt-4 max-w-xl mx-auto text-white/90">
              Reserve your slot today. Limited bridal dates available each month.
            </p>
            <div className="relative mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 bg-white text-gold font-semibold px-8 py-3 rounded-full shadow-soft hover:shadow-glow transition"
              >
                Book Appointment
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gold transition"
              >
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
