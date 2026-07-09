'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionTag from '@/components/ui/SectionTag';
import { faqs } from '@/data/faqs';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTag eyebrow="Questions" title="Frequently Asked Questions" />

        <div className="space-y-4 -mt-6">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div className="premium-card rounded-2xl px-6 py-5">
                  <button
                    className="w-full flex items-center justify-between font-display font-semibold text-[15px] text-royal-deep text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {faq.question}
                    <ChevronDown
                      size={18}
                      className={`shrink-0 ml-4 text-gold transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? '300px' : '0px' }}
                  >
                    <p className="text-slate-500 text-sm leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
