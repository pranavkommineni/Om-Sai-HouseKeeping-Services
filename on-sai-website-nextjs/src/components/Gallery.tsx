'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Expand } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionTag from '@/components/ui/SectionTag';
import { galleryImages, type GalleryImage } from '@/data/gallery';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'leadership', label: 'Leadership' },
  { key: 'team', label: 'Our Team' },
] as const;

const sizeClasses: Record<NonNullable<GalleryImage['size']>, string> = {
  lg: 'sm:col-span-2 sm:row-span-2',
  tall: 'sm:row-span-2',
  wide: 'sm:col-span-2',
  md: '',
};

export default function Gallery() {
  const [active, setActive] = useState<(typeof filters)[number]['key']>('all');
  const [lightboxImg, setLightboxImg] = useState<GalleryImage | null>(null);

  const featured = galleryImages.find((g) => g.featured);
  const rest = galleryImages.filter((g) => !g.featured);
  const items = active === 'all' ? rest : rest.filter((g) => g.category === active);
  const showFeatured = active === 'all' || active === 'leadership';

  return (
    <section id="gallery" className="py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTag
          eyebrow="Our Work"
          title="Gallery"
          description="A look at the people behind Om Sai's spotless standards."
        />

        {featured && showFeatured && (
          <Reveal className="mb-10">
            <div
              className="shine-frame gallery-item relative w-full rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
              style={{ aspectRatio: '16 / 8' }}
              onClick={() => setLightboxImg(featured)}
            >
              <Image
                src={featured.src}
                alt={featured.label}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 1152px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-deep/90 via-royal-deep/10 to-transparent" />
              <div className="absolute left-0 bottom-0 p-7 sm:p-10">
                <span className="font-label text-[11px] font-bold tracking-widest uppercase text-gold bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
                  Meet Our Founder
                </span>
                <h3 className="font-display font-bold text-white text-2xl sm:text-4xl mt-4">
                  {featured.label}
                </h3>
                {featured.sub && (
                  <p className="text-slate-200 text-sm sm:text-base mt-2 max-w-md">{featured.sub}</p>
                )}
              </div>
              <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                <Expand size={18} />
              </div>
            </div>
          </Reveal>
        )}

        <div className="flex flex-wrap justify-center gap-3 mb-10 font-label font-semibold text-sm">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2 rounded-full border transition ${
                active === f.key
                  ? 'bg-royal text-white border-royal'
                  : 'border-slate-200 text-ink hover:border-royal/40'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 sm:grid-flow-dense auto-rows-[170px] sm:auto-rows-[190px] gap-5">
          {items.map((item, i) => (
            <div
              key={`${item.src}-${i}`}
              className={`gallery-item shadow-lg relative ${sizeClasses[item.size ?? 'md']}`}
              onClick={() => setLightboxImg(item)}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover object-top rounded-2xl"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="gallery-caption absolute inset-0 rounded-2xl flex items-end p-5">
                <p className="text-white font-label font-semibold text-sm">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setLightboxImg(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-3xl h-[80vh]">
            <Image
              src={lightboxImg.src}
              alt={lightboxImg.label}
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
