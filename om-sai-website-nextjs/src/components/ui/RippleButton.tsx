'use client';

import { useState, type ReactNode, type MouseEvent, type AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface RippleButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
}

interface RippleSpan {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function RippleButton({ children, className, href = '#', ...rest }: RippleButtonProps) {
  const [ripples, setRipples] = useState<RippleSpan[]>([]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const id = Date.now();
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top, size },
    ]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 650);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn('relative overflow-hidden inline-flex items-center justify-center', className)}
      {...rest}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple-span"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}
    </a>
  );
}
