'use client';

import Reveal from '@/components/ui/Reveal';
import SectionTag from '@/components/ui/SectionTag';
import { industries } from '@/data/industries';
import { siteConfig } from '@/data/siteConfig';

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-28 text-white relative overflow-hidden bg-gradient-to-br from-royal-deep to-royal"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTag
          eyebrow="Where We Work"
          title="Industries We Serve"
          description={siteConfig.serviceArea}
          light
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.name} delay={i * 0.08}>
                <div className="glass rounded-3xl p-7 text-center hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center justify-center gap-3">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-gold to-gold-light">
                    <Icon size={26} color="white" strokeWidth={1.8} />
                  </div>
                  <p className="font-display font-bold text-base">{industry.name}</p>
                  <p className="font-label text-xs text-white/70">{industry.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
