import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import Logo from '@/components/ui/Logo';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const footerServices = [
  'Hospital Housekeeping',
  'School Housekeeping',
  'College Housekeeping',
  'Mall Housekeeping',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-8 text-white bg-royal-deep">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
        <div>
          <div className="mb-5">
            <Logo variant="light" />
          </div>
          <p className="text-slate-300 text-sm leading-relaxed mb-5">
            Professional housekeeping &amp; facility management services, trusted since{' '}
            {siteConfig.founded}.
          </p>
          <div className="flex gap-3">
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Facebook"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <p className="font-display font-bold mb-5">Quick Links</p>
          <ul className="space-y-3 text-sm text-slate-300">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-bold mb-5">Services</p>
          <ul className="space-y-3 text-sm text-slate-300">
            {footerServices.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-bold mb-5">Contact</p>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>{siteConfig.phoneDisplay}</li>
            <li className="break-all">{siteConfig.email}</li>
            <li>{siteConfig.location}</li>
            <li className="text-slate-400 text-xs">{siteConfig.serviceArea}</li>
            <li>{siteConfig.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-7">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
