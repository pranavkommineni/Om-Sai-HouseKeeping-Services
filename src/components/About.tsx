'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Counter from '@/components/ui/Counter';
import { siteConfig } from '@/data/siteConfig';

const points = [
  'Customer-first approach in every job, big or small',
  'Verified, uniformed & trained professionals',
  'Eco-friendly products & modern equipment',
  'Committed to consistent quality, every visit',
];

const miniStats = [
  { value: 2500, suffix: '+', label: 'Projects' },
  { value: 1000, suffix: '+', label: 'Clients' },
  { value: 13, suffix: '+', label: 'Years' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white bg-pattern">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal direction="left" className="relative">
          <div className="shine-frame rounded-3xl overflow-hidden shadow-2xl relative h-[520px]">
            <Image
              src="/assets/ceo-team.jpeg"
              alt="Om Sai Housekeeping Services team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 sm:-right-10 bg-white rounded-2xl shadow-2xl px-6 py-5 border border-slate-100">
            <p className="stat-num text-3xl text-royal">{siteConfig.founded}</p>
            <p className="font-label text-xs font-semibold text-slate-500 tracking-wide">Year Founded</p>
          </div>
        </Reveal>

        <Reveal direction="right">
          <span className="font-label text-xs font-bold tracking-widest uppercase text-gold">
            About Us
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 mb-6 gold-underline pb-4 text-royal-deep">
            A Decade of Spotless Standards
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            {siteConfig.name} has been a dependable name in professional housekeeping since{' '}
            {siteConfig.founded}. What began as a small, dedicated team has grown into a trusted
            housekeeping partner for hospitals, schools, colleges, and shopping malls across
            Telangana.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Our mission is simple: deliver consistently spotless, hygienic spaces through trained
            staff, disciplined processes, and eco-conscious methods — while our vision is to be
            the most trusted housekeeping partner for every space we serve, one satisfied client
            at a time.
          </p>

          <div className="grid grid-cols-2 gap-5 mb-9">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="icon-wrap w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0">
                  <Check size={18} />
                </span>
                <p className="text-sm text-slate-600 font-medium pt-1.5">{point}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4 border-t border-slate-100 pt-7">
            {miniStats.map((stat) => (
              <div key={stat.label}>
                <p className="stat-num text-2xl sm:text-3xl text-royal">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-label text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
