'use client';

import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';

export default function Leadership() {
  return (
    <section className="py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal direction="left">
          <span className="font-label text-xs font-bold tracking-widest uppercase text-gold">
            Leadership
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 mb-6 gold-underline pb-4 text-royal-deep">
            Led From the Front
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Since {siteConfig.founded}, our Founder &amp; CEO has personally driven the standards
            that define {siteConfig.name} — building a culture where training, discipline, and
            genuine care for every client&apos;s space come first.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            That same hands-on leadership extends to our full team of trained housekeeping
            professionals, who carry these standards into every home, office, and facility we
            serve.
          </p>
          <div className="premium-card rounded-2xl p-6 inline-flex items-center gap-4">
            <div className="shine-frame w-16 h-16 rounded-full overflow-hidden shrink-0 relative">
              <Image
                src="/assets/ceo-solo.jpeg"
                alt="Founder and CEO, On Sai House Keeping Services"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="font-display font-bold text-royal-deep">Founder &amp; CEO</p>
              <p className="text-xs text-slate-500 font-label">
                {siteConfig.name} · Est. {siteConfig.founded}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <div className="shine-frame rounded-3xl overflow-hidden shadow-2xl relative h-[480px]">
            <Image
              src="/assets/ceo-team.jpeg"
              alt="Founder with the On Sai House Keeping Services team"
              fill
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
