import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaWhatsapp,
} from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { SITE } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-br from-pinkSoft via-white to-ivory border-t border-pinkSoft">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="inline-flex flex-col leading-none mb-4">
            <span className="font-serif text-xl tracking-[0.18em] text-charcoal">
              THE GLOW CRAFT
            </span>
            <span className="font-serif text-base tracking-[0.32em] text-gold mt-1">
              AESTHETICS
            </span>
            <span className="mt-2 text-[10px] tracking-[0.25em] uppercase text-charcoal/60 italic font-sans">
              Where beauty becomes timeless elegance
            </span>
          </Link>
          <p className="text-sm text-charcoal/70 leading-relaxed">
            Where Beauty Becomes Timeless Elegance — premium bridal, party
            and HD makeup artistry crafted to make every moment unforgettable.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-charcoal">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              ['/', 'Home'],
              ['/services', 'Services'],
              ['/gallery', 'Gallery'],
              ['/booking', 'Booking'],
              ['/reviews', 'Reviews'],
              ['/contact', 'Contact'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-charcoal/70 hover:text-gold transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-charcoal">Visit Us</h4>
          <ul className="space-y-3 text-sm text-charcoal/75">
            <li className="flex gap-2">
              <HiOutlineLocationMarker className="text-gold mt-0.5 flex-shrink-0" size={18} />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-2 items-center">
              <HiOutlinePhone className="text-gold flex-shrink-0" size={18} />
              <a href={`tel:${SITE.phone}`} className="hover:text-gold">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <HiOutlineMail className="text-gold flex-shrink-0" size={18} />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold break-all">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-charcoal">Follow</h4>
          <div className="flex gap-3">
            {[
              { icon: <FaInstagram />, href: SITE.socials.instagram, label: 'Instagram' },
              { icon: <FaFacebookF />, href: SITE.socials.facebook, label: 'Facebook' },
              { icon: <FaPinterestP />, href: SITE.socials.pinterest, label: 'Pinterest' },
              { icon: <FaWhatsapp />, href: `https://wa.me/${SITE.whatsapp}`, label: 'WhatsApp' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-white border border-pinkSoft flex items-center justify-center text-gold hover:bg-gradient-gold hover:text-white transition shadow-soft"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-charcoal/60">
            Open: {SITE.hours}
          </p>
        </div>
      </div>

      <div className="border-t border-pinkSoft">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-charcoal/60">
          <p>© {new Date().getFullYear()} GlowCraft Makeup Studio. All rights reserved.</p>
          <p className="font-serif italic text-gold">Where beauty becomes timeless elegance.</p>
        </div>
      </div>
    </footer>
  );
}
