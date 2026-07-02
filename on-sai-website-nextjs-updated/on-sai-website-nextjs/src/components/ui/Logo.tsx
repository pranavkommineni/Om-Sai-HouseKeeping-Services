interface LogoProps {
  variant?: 'light' | 'dark';
  showText?: boolean;
  className?: string;
}

/**
 * On Sai brand mark — a shield (trust & protection) holding a sparkle/polish
 * burst, rendered in the royal-to-gold gradient that anchors the site's
 * premium palette.
 */
export default function Logo({ variant = 'dark', showText = true, className = '' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-royal-deep';
  const subColor = variant === 'light' ? 'text-white/70' : 'text-gold';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="osLogoShield" x1="4" y1="2" x2="44" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#12539E" />
            <stop offset="55%" stopColor="#1B6FC2" />
            <stop offset="100%" stopColor="#0B3866" />
          </linearGradient>
          <linearGradient id="osLogoSpark" x1="16" y1="12" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F8D673" />
            <stop offset="100%" stopColor="#D9A93B" />
          </linearGradient>
        </defs>
        <path
          d="M24 2.5 L43 9.5 V22.5 C43 33.8 35.3 41.3 24 45.5 C12.7 41.3 5 33.8 5 22.5 V9.5 Z"
          fill="url(#osLogoShield)"
        />
        <path
          d="M24 2.5 L43 9.5 V22.5 C43 33.8 35.3 41.3 24 45.5 Z"
          fill="white"
          fillOpacity="0.06"
        />
        <path
          d="M24 11 L26.6 19.4 L35 22 L26.6 24.6 L24 33 L21.4 24.6 L13 22 L21.4 19.4 Z"
          fill="url(#osLogoSpark)"
        />
        <circle cx="33.5" cy="13.5" r="2.1" fill="url(#osLogoSpark)" />
        <circle cx="14.5" cy="30" r="1.4" fill="url(#osLogoSpark)" fillOpacity="0.85" />
      </svg>

      {showText && (
        <span className={`font-display font-bold text-lg leading-tight ${textColor}`}>
          On Sai
          <span className={`block text-[11px] font-label font-semibold tracking-widest ${subColor}`}>
            HOUSE KEEPING SERVICES
          </span>
        </span>
      )}
    </div>
  );
}
