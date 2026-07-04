'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionTag from '@/components/ui/SectionTag';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTag eyebrow="Client Love" title="What Our Clients Say" />

        <div className="relative max-w-3xl mx-auto -mt-6">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full shrink-0 px-2">
                  <div className="premium-card rounded-3xl p-9 text-center">
                    <div className="flex justify-center gap-1 mb-5 text-gold">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed italic mb-7">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="font-display font-bold text-royal-deep">{t.name}</p>
                    <p className="text-xs text-slate-500 font-label">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-4 sm:-left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-royal"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-4 sm:-right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-royal"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="w-2.5 h-2.5 rounded-full transition-colors"
                style={{ background: i === index ? 'var(--gold)' : '#E2E8F0' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
