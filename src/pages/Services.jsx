import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiCheckCircle, HiArrowNarrowRight } from 'react-icons/hi';
import PageWrapper from '../components/PageWrapper.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <PageWrapper>
      <SEO
        title="Services"
        description="Bridal, party, HD, editorial and masterclass makeup services by GlowCraft Studio."
      />

      <section className="bg-gradient-luxury">
        <div className="container-x py-16 sm:py-20 text-center">
          <SectionHeading
            eyebrow="What We Offer"
            title="Luxury Makeup Services"
            subtitle="Each service is a curated experience — tailored, unhurried, and crafted for results that last beyond the moment."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* DETAILED FEATURES */}
      <section className="section bg-gradient-to-b from-white to-pinkSoft/40">
        <div className="container-x">
          <SectionHeading
            eyebrow="What's Included"
            title="Every Detail, Considered"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow">{s.tag}</p>
                    <h3 className="font-serif text-2xl mt-2">{s.title}</h3>
                  </div>
                  <span className="text-gold font-semibold whitespace-nowrap">
                    {s.price}
                  </span>
                </div>
                <p className="mt-3 text-charcoal/70">{s.description}</p>
                <ul className="mt-5 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <HiCheckCircle className="text-gold mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/booking" className="btn-primary">
              Book Your Service <HiArrowNarrowRight />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
