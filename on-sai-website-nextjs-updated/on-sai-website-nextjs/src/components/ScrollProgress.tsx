'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0% 0%' }}
      className="fixed top-0 left-0 h-[3px] w-full z-[9999] bg-gradient-to-r from-royal via-sky to-gold"
    />
  );
}
