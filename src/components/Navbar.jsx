import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const drawer = (
    <AnimatePresence>
      {open && (
        <div className="lg:hidden">
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            style={{ zIndex: 9998 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{ zIndex: 9999, backgroundColor: '#ffffff' }}
            className="fixed top-0 right-0 h-full w-[82%] max-w-xs shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-20 border-b border-pinkSoft shrink-0">
              <span className="font-serif text-base tracking-[0.15em] text-charcoal">MENU</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-charcoal p-1 hover:text-gold transition"
              >
                <HiX size={24} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-5 py-4 flex flex-col">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `text-base font-medium py-4 border-b border-pinkSoft/60 transition ${
                      isActive ? 'text-gold' : 'text-charcoal hover:text-gold'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
            <div className="p-5 border-t border-pinkSoft shrink-0">
              <Link
                to="/booking"
                className="btn-primary w-full text-center"
                onClick={() => setOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-pinkSoft'
          : 'bg-pinkSoft/40 backdrop-blur-sm'
      }`}
    >
      <div className="container-wide flex items-center justify-between h-20 sm:h-24 gap-4">
        <Link to="/" className="flex items-center leading-none shrink-0 group whitespace-nowrap">
          <span className="font-serif font-bold text-base sm:text-lg lg:text-xl tracking-[0.18em]">
            <span className="text-charcoal transition-colors">THE </span>
            <span style={{ color: '#B91C1C' }} className="transition-colors">GLOW CRAFT</span>
            <span className="text-charcoal transition-colors"> AESTHETICS</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 ml-auto">
          <nav className="flex items-center gap-7">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-sm font-medium tracking-wide transition-colors ${
                    isActive ? 'text-gold' : 'text-charcoal hover:text-gold'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-gold rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <Link to="/booking" className="btn-primary !py-2.5 !px-6 text-sm">
            Book Appointment
          </Link>
        </div>

        <button
          className="lg:hidden text-charcoal p-2 ml-auto"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <HiMenu size={28} />
        </button>
      </div>

      {typeof document !== 'undefined' && createPortal(drawer, document.body)}
    </header>
  );
}
