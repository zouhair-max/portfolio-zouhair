import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = '',
  duration = 2000,
  delay = 0,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const count = useCountUp({
    end: value,
    duration,
    delay,
    enabled: isInView,
  });

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
