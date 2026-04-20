import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SITE } from '../data/site.js';

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello GlowCraft! I'd like to book a makeup appointment."
  );
  return (
    <motion.a
      href={`https://wa.me/${SITE.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Book on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 15 }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-400 opacity-60 animate-ping" />
      <span className="relative flex items-center gap-2 bg-green-500 text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:bg-green-600 transition-all">
        <FaWhatsapp size={22} />
        <span className="hidden sm:inline font-medium text-sm">Book Now</span>
      </span>
    </motion.a>
  );
}
