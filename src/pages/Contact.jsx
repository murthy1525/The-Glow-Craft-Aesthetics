import { motion } from 'framer-motion';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
} from 'react-icons/hi';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { SITE } from '../data/site.js';

const items = [
  {
    icon: HiOutlineLocationMarker,
    label: 'Studio Address',
    value: SITE.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`,
  },
  {
    icon: HiOutlinePhone,
    label: 'Call Us',
    value: SITE.phone,
    href: `tel:${SITE.phone}`,
  },
  {
    icon: HiOutlineMail,
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: HiOutlineClock,
    label: 'Studio Hours',
    value: SITE.hours,
  },
];

export default function Contact() {
  return (
    <PageWrapper>
      <SEO
        title="Contact"
        description="Get in touch with GlowCraft Makeup Studio — visit us, call, or message on WhatsApp."
      />

      <section className="bg-gradient-luxury">
        <div className="container-x py-16 sm:py-20 text-center">
          <SectionHeading
            eyebrow="Say Hello"
            title="Visit Our Studio"
            subtitle="We'd love to meet you. Drop by, give us a call, or send a quick message — we respond within a few hours."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <div className="grid sm:grid-cols-2 gap-5 self-start">
            {items.map((it, i) => {
              const Icon = it.icon;
              const Inner = (
                <>
                  <span className="w-12 h-12 rounded-full bg-gradient-gold text-white flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </span>
                  <p className="text-xs uppercase tracking-widest text-charcoal/60">
                    {it.label}
                  </p>
                  <p className="mt-1 font-medium text-charcoal">{it.value}</p>
                </>
              );
              return (
                <motion.div
                  key={it.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="card p-6"
                >
                  {it.href ? (
                    <a
                      href={it.href}
                      target={it.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="block hover:text-gold transition"
                    >
                      {Inner}
                    </a>
                  ) : (
                    Inner
                  )}
                </motion.div>
              );
            })}
            <div className="card p-6 sm:col-span-2 bg-gradient-to-br from-pinkSoft to-white">
              <p className="text-xs uppercase tracking-widest text-charcoal/60 mb-3">
                Follow our work
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <FaInstagram />, href: SITE.socials.instagram },
                  { icon: <FaFacebookF />, href: SITE.socials.facebook },
                  {
                    icon: <FaWhatsapp />,
                    href: `https://wa.me/${SITE.whatsapp}`,
                  },
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full bg-white border border-pinkSoft flex items-center justify-center text-gold hover:bg-gradient-gold hover:text-white transition shadow-soft"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl overflow-hidden shadow-soft border border-pinkSoft min-h-[360px]"
          >
            <iframe
              title="GlowCraft Studio location"
              src={SITE.mapsEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
