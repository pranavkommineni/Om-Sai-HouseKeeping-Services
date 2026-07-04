'use client';

import Reveal from '@/components/ui/Reveal';
import SectionTag from '@/components/ui/SectionTag';
import { processSteps } from '@/data/process';

export default function Process() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTag eyebrow="How It Works" title="Our Working Process" />

        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-[3px] timeline-line rounded-full" />
          <div className="grid lg:grid-cols-6 gap-10 lg:gap-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-bold relative z-10 mb-5 bg-gradient-to-br from-royal to-sky shadow-[0_0_0_6px_rgba(15,76,129,0.1)]">
                    {step.number}
                  </div>
                  <p className="font-display font-bold text-sm mb-1.5 text-royal-deep">
                    {step.title}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-[160px]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
