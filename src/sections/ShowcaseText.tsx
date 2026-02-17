import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ShowcaseText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['-20%', '0%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['20%', '0%']);

  return (
    <section
      ref={containerRef}
      className="bg-bg-primary py-20 lg:py-32 overflow-hidden"
    >
      <div className="relative">
        <motion.div
          className="flex items-center justify-center gap-4 lg:gap-8"
          style={{ x: x1 }}
        >
          <span className="text-[15vw] lg:text-[12vw] font-black text-white tracking-[-0.04em]">
            SHOW
          </span>
        </motion.div>
        <motion.div
          className="flex items-center justify-center gap-4 lg:gap-8"
          style={{ x: x2 }}
        >
          <span className="text-[15vw] lg:text-[12vw] font-black text-white tracking-[-0.04em]">
            CASE
          </span>
        </motion.div>
      </div>
    </section>
  );
}
