'use client';

import { Check } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import RippleButton from '@/components/ui/RippleButton';
import { whyChoose } from '@/data/whyChoose';

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal direction="left" className="order-2 lg:order-1">
          <div className="grid sm:grid-cols-2 gap-5">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="premium-card rounded-2xl p-6 h-full">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-gold to-gold-light">
                    <Check size={18} color="white" strokeWidth={2.5} />
                  </div>
                  <p className="font-display font-bold mb-1.5 text-[15px] text-royal-deep">
                    {item.title}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right" className="order-1 lg:order-2">
          <span className="font-label text-xs font-bold tracking-widest uppercase text-gold">
            Why Om Sai
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 mb-6 gold-underline pb-4 text-royal-deep">
            Why Businesses &amp; Homes Choose Us
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            We back every service with trained people, transparent pricing, and equipment that
            meets enterprise-grade hygiene standards — so you get consistent results, visit after
            visit.
          </p>
          <RippleButton
            href="#contact"
            className="btn-gold font-label font-bold px-8 py-4 rounded-full text-sm"
          >
            Book Now
          </RippleButton>
        </Reveal>
      </div>
    </section>
  );
}
