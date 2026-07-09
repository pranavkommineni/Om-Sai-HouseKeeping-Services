'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const variantsFor = (direction: RevealProps['direction']): Variants => {
  const offset =
    direction === 'left' ? { x: -32 } : direction === 'right' ? { x: 32 } : { y: 28 };
  return {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0 },
  };
};

export default function Reveal({ children, direction = 'up', delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
      variants={variantsFor(direction)}
    >
      {children}
    </motion.div>
  );
}
