'use client';

import Reveal from '@/components/ui/Reveal';
import SectionTag from '@/components/ui/SectionTag';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTag
          eyebrow="What We Offer"
          title="Our Services"
          description="Specialized housekeeping for hospitals, schools, colleges, and shopping malls — tailored to each facility's standards."
        />

        <div className="grid sm:grid-cols-2 gap-7">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(i % 2) * 0.08}>
                <div className="premium-card rounded-2xl p-8 h-full flex flex-col">
                  <div className="icon-wrap w-16 h-16 rounded-2xl flex items-center justify-center mb-5">
                    <Icon size={28} color="white" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 text-royal-deep">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="font-label text-[11px] font-semibold px-3 py-1 rounded-full bg-[#EEF4FA] text-royal"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="font-label font-bold text-sm inline-flex items-center gap-1.5 text-gold"
                  >
                    Book Now <span>&rarr;</span>
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
