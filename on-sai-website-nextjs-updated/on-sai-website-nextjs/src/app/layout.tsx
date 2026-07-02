import type { Metadata } from 'next';
import { Poppins, Manrope, Inter } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'On Sai House Keeping Services | Hospital, School, College & Mall Housekeeping',
  description:
    'On Sai House Keeping Services — trusted housekeeping for hospitals, schools, colleges, and shopping malls since 2013. Serving all areas within 50 km of Hayathnagar, Telangana.',
  keywords: [
    'housekeeping services',
    'hospital housekeeping',
    'school housekeeping',
    'college housekeeping',
    'mall housekeeping',
    'facility management Telangana',
    'Hayathnagar housekeeping',
  ],
  openGraph: {
    title: 'On Sai House Keeping Services',
    description:
      'Trusted housekeeping for hospitals, schools, colleges & malls — serving Hayathnagar, Telangana and 50 km around.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${manrope.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-white">{children}</body>
    </html>
  );
}
