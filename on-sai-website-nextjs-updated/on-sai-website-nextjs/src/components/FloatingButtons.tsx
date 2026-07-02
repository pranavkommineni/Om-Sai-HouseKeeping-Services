'use client';

import { useEffect, useState } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fab pulse fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full flex items-center justify-center bg-emerald"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.32-1.66a11.86 11.86 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.43-8.42zM12.05 21.6h-.01a9.7 9.7 0 0 1-4.95-1.36l-.35-.21-3.7.97.99-3.6-.23-.37a9.7 9.7 0 0 1-1.5-5.2c0-5.37 4.37-9.74 9.76-9.74 2.6 0 5.05 1.02 6.9 2.87a9.68 9.68 0 0 1 2.86 6.9c0 5.37-4.38 9.74-9.77 9.74z" />
        </svg>
      </a>

      <a
        href={`tel:${siteConfig.phoneIntl}`}
        aria-label="Call us"
        className="fab fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center text-white bg-royal"
      >
        <Phone size={22} />
      </a>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fab fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center bg-gold-light text-royal-deep"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
