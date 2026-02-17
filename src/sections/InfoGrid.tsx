import { motion } from 'framer-motion';
import { infoItems } from '@/data/content';
import { ANIMATION_CONFIG } from '@/lib/animations';

export function InfoGrid() {
  return (
    <section className="bg-bg-primary border-y border-border-custom">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {infoItems.map((item, index) => (
            <motion.div
              key={item.label}
              className={`px-6 py-8 lg:px-12 lg:py-10 ${
                index < infoItems.length - 1 ? 'border-r border-border-custom' : ''
              } ${index === 1 ? 'hidden lg:block' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: ANIMATION_CONFIG.duration.slow,
                ease: ANIMATION_CONFIG.easing.default,
              }}
            >
              <p className="text-xs font-medium tracking-widest text-text-secondary mb-2">
                {item.label}
              </p>
              <p className="text-sm font-semibold tracking-wide text-white">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
