'use client';

import { motion } from 'framer-motion';
import RippleButton from '@/components/ui/RippleButton';
import { siteConfig } from '@/data/siteConfig';

const trustPoints = [
  '1000+ Happy Clients',
  'Trained Professionals',
  'Affordable Pricing',
  'Quality Assured',
  'On-Time Service',
  'Eco-Friendly Cleaning',
];

export default function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/team-wide-1.jpeg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-royal-deep/85 via-royal/70 to-royal-deep/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-label inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase glass text-white px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gold" /> Trusted Since {siteConfig.founded} &nbsp;•&nbsp;{' '}
            {siteConfig.location}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
          >
            Professional Housekeeping &amp; Facility Management Services You Can{' '}
            <span className="text-gold">Trust</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-100/90 text-lg leading-relaxed mb-9 max-w-xl"
          >
            Delivering spotless spaces with trained professionals, advanced cleaning techniques,
            eco-friendly products, and unmatched customer satisfaction — for homes, offices, and
            industries alike.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <RippleButton href="#contact" className="btn-gold font-label font-bold px-8 py-4 rounded-full text-sm">
              Book Now
            </RippleButton>
            <RippleButton
              href="#contact"
              className="btn-outline-light font-label font-bold px-8 py-4 rounded-full text-sm"
            >
              Contact Us
            </RippleButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl"
          >
            {trustPoints.map((point) => (
              <div
                key={point}
                className="glass rounded-xl px-4 py-3 flex items-center gap-2 text-white text-sm font-label font-semibold"
              >
                <span className="text-gold">✔</span> {point}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden xl:block absolute right-14 bottom-16 z-10 glass rounded-2xl p-5 text-white"
      >
        <p className="stat-num text-3xl text-gold">{siteConfig.founded ? new Date().getFullYear() - siteConfig.founded : 13}+</p>
        <p className="font-label text-xs tracking-wide">Years of Excellence</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="hidden xl:block absolute right-56 top-40 z-10 glass rounded-2xl p-5 text-white"
      >
        <p className="stat-num text-3xl text-gold">98%</p>
        <p className="font-label text-xs tracking-wide">Client Satisfaction</p>
      </motion.div>
    </header>
  );
}
