import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={center ? 'text-center' : ''}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="heading mt-3">{title}</h2>
      {center && <span className="gold-divider block" />}
      {subtitle && (
        <p className={`subheading ${center ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}
