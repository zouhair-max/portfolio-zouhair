import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { ANIMATION_CONFIG } from '@/lib/animations';

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
}

export function FadeInView({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}: FadeInViewProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration: ANIMATION_CONFIG.duration.slow,
        delay,
        ease: ANIMATION_CONFIG.easing.default,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
