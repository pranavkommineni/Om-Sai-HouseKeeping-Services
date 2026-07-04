interface SectionTagProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionTag({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionTagProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl mb-16 ${alignment}`}>
      <span className="font-label text-xs font-bold tracking-widest uppercase text-gold">
        {eyebrow}
      </span>
      <h2
        className={`font-display font-bold text-3xl sm:text-4xl mt-3 gold-underline pb-4 ${
          align === 'center' ? 'center' : ''
        } ${light ? 'text-white' : 'text-royal-deep'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-6 ${light ? 'text-slate-200' : 'text-slate-500'}`}>{description}</p>
      )}
    </div>
  );
}
