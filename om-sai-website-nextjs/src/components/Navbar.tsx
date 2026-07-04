'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import RippleButton from '@/components/ui/RippleButton';
import Logo from '@/components/ui/Logo';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkColor = scrolled ? 'text-royal-deep' : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(15,76,129,0.25)]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="#home" className="flex items-center">
          <Logo variant={scrolled ? 'dark' : 'light'} />
        </Link>

        <div className={`hidden lg:flex items-center gap-9 font-label font-semibold text-sm ${linkColor}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="relative group">
              {item.label}
              <span className="absolute left-0 -bottom-1.5 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <RippleButton
          href="#contact"
          className="hidden lg:inline-flex btn-gold font-label font-bold text-sm px-6 py-3 rounded-full"
        >
          Book Now
        </RippleButton>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg ${linkColor}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white mt-4 mx-4 rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
          <div className="flex flex-col font-label font-semibold text-sm text-royal-deep">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-6 py-4 border-b border-slate-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-gold m-4 text-center rounded-full py-3 font-bold"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
