'use client';

import Reveal from '@/components/ui/Reveal';
import Counter from '@/components/ui/Counter';
import { stats } from '@/data/stats';

export default function Stats() {
  return (
    <section className="py-24 text-white relative overflow-hidden bg-gradient-to-r from-royal-deep via-royal to-[#0c437a]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <p className="stat-num text-4xl sm:text-5xl mb-2 text-gold">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="font-label text-xs sm:text-sm tracking-wide text-slate-200">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
