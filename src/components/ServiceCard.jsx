import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="card group flex flex-col !bg-pinkSoft"
    >
      <div className="relative overflow-hidden h-56 sm:h-64">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 bg-white/90 text-gold text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-soft">
          {service.tag}
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-serif text-xl text-charcoal">{service.title}</h3>
        <p className="text-sm text-charcoal/70 mt-2 flex-1">{service.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-gold font-semibold">{service.price}</span>
          <Link
            to="/booking"
            className="inline-flex items-center gap-1 text-sm font-medium text-charcoal hover:text-gold transition"
          >
            Book <HiArrowNarrowRight />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
