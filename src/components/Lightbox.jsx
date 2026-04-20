import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [index, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {index !== null && images[index] && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/90 hover:text-gold transition p-2"
            onClick={onClose}
          >
            <HiX size={32} />
          </button>
          <button
            aria-label="Previous"
            className="absolute left-2 sm:left-6 text-white/80 hover:text-gold p-2"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            <HiChevronLeft size={42} />
          </button>
          <motion.img
            key={images[index].src}
            src={images[index].src}
            alt={images[index].alt}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            aria-label="Next"
            className="absolute right-2 sm:right-6 text-white/80 hover:text-gold p-2"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            <HiChevronRight size={42} />
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-xs sm:text-sm">
            {index + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
