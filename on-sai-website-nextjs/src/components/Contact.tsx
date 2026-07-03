'use client';

import { useState, useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { Phone, Mail, Clock, MapPin, Loader2 } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionTag from '@/components/ui/SectionTag';
import { siteConfig } from '@/data/siteConfig';

// EmailJS credentials — the public key is safe to expose in the browser
// (that's how EmailJS is designed to work). Configure these via env vars
// in .env.local, or they fall back to the values below.
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'KIl4t_Vej2wwzsXIR';
const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_bbyhucv';
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_mae62wm';

const services = [
  'Hospital Housekeeping',
  'School Housekeeping',
  'College Housekeeping',
  'Mall Housekeeping',
  'Factory Housekeeping',
  'Apartment Housekeeping',
  'Other',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus('submitting');
    setErrorMsg('');

    try {
      // Sends the form fields straight to the owner's inbox via EmailJS —
      // no backend/server route required. Field `name` attributes below
      // (name, phone, email, service, message) must match the variables
      // used in the EmailJS template (template_mae62wm).
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      );
    }
  };

  return (
    <section id="contact" className="py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTag
          eyebrow="Get In Touch"
          title="Book Your Service"
          description="Tell us about your facility — we'll get back to you with a customized plan and pricing."
        />

        <div className="grid lg:grid-cols-5 gap-10 -mt-6">
          <Reveal direction="left" className="lg:col-span-2 space-y-5">
            <div className="premium-card rounded-2xl p-6 flex items-start gap-4">
              <span className="icon-wrap w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0">
                <Phone size={20} />
              </span>
              <div>
                <p className="font-display font-bold text-royal-deep">Call Us</p>
                <a href={`tel:${siteConfig.phoneIntl}`} className="text-slate-600 text-sm">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="premium-card rounded-2xl p-6 flex items-start gap-4">
              <span className="icon-wrap w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0">
                <Mail size={20} />
              </span>
              <div>
                <p className="font-display font-bold text-royal-deep">Email Us</p>
                <a href={`mailto:${siteConfig.email}`} className="text-slate-600 text-sm break-all">
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="premium-card rounded-2xl p-6 flex items-start gap-4">
              <span className="icon-wrap w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0">
                <MapPin size={20} />
              </span>
              <div>
                <p className="font-display font-bold text-royal-deep">Service Area</p>
                <p className="text-slate-600 text-sm">{siteConfig.location}</p>
                <p className="text-slate-500 text-xs mt-0.5">{siteConfig.serviceArea}</p>
              </div>
            </div>
            <div className="premium-card rounded-2xl p-6 flex items-start gap-4">
              <span className="icon-wrap w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0">
                <Clock size={20} />
              </span>
              <div>
                <p className="font-display font-bold text-royal-deep">Business Hours</p>
                <p className="text-slate-600 text-sm">{siteConfig.hours}</p>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-6">
              <p className="font-display font-bold mb-4 text-royal-deep">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white bg-royal"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                  </svg>
                </a>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                  </svg>
                </a>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white bg-emerald"
                  aria-label="WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.32-1.66a11.86 11.86 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.43-8.42zM12.05 21.6h-.01a9.7 9.7 0 0 1-4.95-1.36l-.35-.21-3.7.97.99-3.6-.23-.37a9.7 9.7 0 0 1-1.5-5.2c0-5.37 4.37-9.74 9.76-9.74 2.6 0 5.05 1.02 6.9 2.87a9.68 9.68 0 0 1 2.86 6.9c0 5.37-4.38 9.74-9.77 9.74z" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="premium-card rounded-3xl p-8 sm:p-10 space-y-5"
            >
              {/* Routes the notification to the owner's inbox in the EmailJS template */}
              <input type="hidden" name="to_email" value={siteConfig.email} />
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-label text-xs font-semibold text-slate-500 mb-1.5 block">
                    Full Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky"
                  />
                </div>
                <div>
                  <label className="font-label text-xs font-semibold text-slate-500 mb-1.5 block">
                    Phone Number
                  </label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky"
                  />
                </div>
              </div>
              <div>
                <label className="font-label text-xs font-semibold text-slate-500 mb-1.5 block">
                  Email Address
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky"
                />
              </div>
              <div>
                <label className="font-label text-xs font-semibold text-slate-500 mb-1.5 block">
                  Service Required
                </label>
                <select
                  name="service"
                  defaultValue={services[0]}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky"
                >
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-label text-xs font-semibold text-slate-500 mb-1.5 block">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your company, its location, and the number of people required for your services"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-gold w-full font-label font-bold py-4 rounded-xl text-sm inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' && <Loader2 size={16} className="animate-spin" />}
                {status === 'submitting' ? 'Sending...' : 'Book Now'}
              </button>
              {status === 'success' && (
                <p className="text-sm font-semibold text-emerald">
                  Thank you! We&apos;ve received your request and will reach out shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm font-semibold text-red-500">
                  {errorMsg || 'Something went wrong. Please call or WhatsApp us instead.'}
                </p>
              )}
            </form>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="relative rounded-3xl overflow-hidden shadow-xl w-full" style={{ aspectRatio: '1401 / 1120' }}>
            <Image
              src="/assets/service-coverage-map.png"
              alt="Om Sai Housekeeping Services coverage map — 40 km radius from Hayathnagar, Telangana"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
          </div>
          <p className="text-center text-sm text-slate-500 mt-4 font-label">
            📍 {siteConfig.location} — {siteConfig.serviceArea}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
