import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function TestimonialCard({ item, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="card p-6 sm:p-8 h-full flex flex-col"
    >
      <FaQuoteLeft className="text-gold/70 text-2xl mb-3" />
      <p className="text-charcoal/80 italic leading-relaxed flex-1">
        “{item.text}”
      </p>
      <div className="mt-5 flex items-center gap-3">
        <img
          src={item.avatar}
          alt={item.name}
          loading="lazy"
          className="w-12 h-12 rounded-full object-cover ring-2 ring-pinkPrimary"
        />
        <div className="flex-1">
          <p className="font-medium text-charcoal">{item.name}</p>
          <p className="text-xs text-charcoal/60">{item.role}</p>
        </div>
        <div className="flex text-gold">
          {Array.from({ length: item.rating || 5 }).map((_, i) => (
            <FaStar key={i} size={14} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
