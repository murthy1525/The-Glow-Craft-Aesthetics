import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import PageWrapper from '../components/PageWrapper.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { services } from '../data/services.js';
import { SITE } from '../data/site.js';

const initialState = {
  name: '',
  phone: '',
  email: '',
  service: services[0]?.title || '',
  date: '',
  time: '',
  notes: '',
};

export default function Booking() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!/^[\d\s+()-]{7,}$/.test(form.phone))
      return 'Please enter a valid phone number.';
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      return 'Please enter a valid email address.';
    if (!form.service) return 'Please select a service.';
    if (!form.date) return 'Please choose a date.';
    if (!form.time) return 'Please choose a time.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ state: 'error', message: err });
      return;
    }
    setStatus({ state: 'submitting', message: '' });

    try {
      const res = await fetch(SITE.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...form,
          _subject: `New Booking: ${form.service} — ${form.name}`,
        }),
      });

      if (res.ok) {
        setStatus({
          state: 'success',
          message:
            "Thank you! Your booking request has been sent. We'll confirm shortly.",
        });
        setForm(initialState);
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Submission failed.');
      }
    } catch (err) {
      setStatus({
        state: 'error',
        message:
          err.message ||
          'Something went wrong. Please try again or contact us directly.',
      });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <PageWrapper>
      <SEO
        title="Book Appointment"
        description="Reserve your slot for bridal, party, HD or editorial makeup at GlowCraft Studio."
      />

      <section className="bg-gradient-luxury">
        <div className="container-x py-16 sm:py-20 text-center">
          <SectionHeading
            eyebrow="Reservation"
            title="Book Your Glow Session"
            subtitle="Tell us about your occasion. Once we receive your request, our team will confirm availability within 24 hours."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="card p-6 sm:p-8 lg:p-10 space-y-5"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-charcoal/80 mb-1 block">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="input"
                    placeholder="Aarohi Mehta"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal/80 mb-1 block">
                    Phone *
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    className="input"
                    placeholder="+1 555 123 4567"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-charcoal/80 mb-1 block">
                  Email *
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="input"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-charcoal/80 mb-1 block">
                  Service *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="input"
                  required
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} — {s.price}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-charcoal/80 mb-1 block">
                    Preferred Date *
                  </label>
                  <input
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    type="date"
                    min={today}
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal/80 mb-1 block">
                    Preferred Time *
                  </label>
                  <input
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    type="time"
                    className="input"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-charcoal/80 mb-1 block">
                  Notes
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={4}
                  className="input resize-none"
                  placeholder="Tell us about your occasion, look inspiration, allergies, etc."
                />
              </div>

              {status.state === 'success' && (
                <div className="flex items-start gap-2 text-green-700 bg-green-50 border border-green-200 rounded-xl p-4">
                  <HiCheckCircle size={22} className="mt-0.5" />
                  <p className="text-sm">{status.message}</p>
                </div>
              )}
              {status.state === 'error' && (
                <div className="flex items-start gap-2 text-red-700 bg-red-50 border border-red-200 rounded-xl p-4">
                  <HiExclamationCircle size={22} className="mt-0.5" />
                  <p className="text-sm">{status.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status.state === 'submitting'}
                className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status.state === 'submitting'
                  ? 'Sending...'
                  : 'Request Appointment'}
              </button>

              <p className="text-xs text-charcoal/55">
                * By submitting, you agree to be contacted via email or phone for
                booking confirmation.
              </p>
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div className="card p-6">
              <h4 className="font-serif text-lg mb-3">What to Expect</h4>
              <ul className="text-sm text-charcoal/75 space-y-2 list-disc pl-4">
                <li>We confirm availability within 24 hours.</li>
                <li>A 25% deposit secures your slot for bridal bookings.</li>
                <li>Free consultation call before your appointment.</li>
                <li>Bring inspiration photos — we'll personalise your look.</li>
              </ul>
            </div>
            <div className="card p-6 bg-gradient-to-br from-pinkSoft to-white">
              <h4 className="font-serif text-lg mb-2">Prefer to Talk?</h4>
              <p className="text-sm text-charcoal/75">
                Call us anytime during studio hours.
              </p>
              <a
                href={`tel:${SITE.phone}`}
                className="mt-3 inline-block text-gold font-semibold"
              >
                {SITE.phone}
              </a>
              <p className="text-xs text-charcoal/60 mt-2">{SITE.hours}</p>
            </div>
          </motion.aside>
        </div>
      </section>
    </PageWrapper>
  );
}
