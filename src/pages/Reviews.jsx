import { FaGoogle, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import { testimonials } from '../data/testimonials.js';
import { SITE } from '../data/site.js';

export default function Reviews() {
  return (
    <PageWrapper>
      <SEO
        title="Reviews"
        description="Read real reviews from GlowCraft Makeup Studio brides and clients."
      />

      <section className="bg-gradient-luxury">
        <div className="container-x py-16 sm:py-20 text-center">
          <SectionHeading
            eyebrow="Hear From Our Clients"
            title="Reviews & Testimonials"
            subtitle="Honest words from the brides, beauty lovers and creators we've had the joy of working with."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 mb-12 bg-gradient-to-br from-white to-pinkSoft/40"
          >
            <div className="flex items-center gap-4">
              <span className="w-14 h-14 rounded-full bg-white shadow-soft flex items-center justify-center">
                <FaGoogle className="text-[#4285F4]" size={26} />
              </span>
              <div>
                <p className="font-serif text-xl">Google Rating</p>
                <p className="text-sm text-charcoal/65">
                  Based on 312 verified reviews
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} size={18} />
                ))}
              </div>
              <span className="font-serif text-2xl text-charcoal">4.9</span>
              <a
                href="https://www.google.com/maps/search/makeup+studio"
                target="_blank"
                rel="noreferrer"
                className="btn-outline !py-2 !px-4 text-sm"
              >
                Read on Google
              </a>
            </div>
          </motion.div>

          {/* Optional Elfsight / Google Reviews widget slot */}
          {SITE.googleReviewsWidgetId ? (
            <div
              className={`elfsight-app-${SITE.googleReviewsWidgetId} mb-12`}
              data-elfsight-app-lazy
            />
          ) : null}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} item={t} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
