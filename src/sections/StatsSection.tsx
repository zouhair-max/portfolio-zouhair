import { motion } from 'framer-motion';
import { stats } from '@/data/content';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { FadeInView } from '@/components/FadeInView';
import { ANIMATION_CONFIG } from '@/lib/animations';

export function StatsSection() {
  return (
    <section className="bg-bg-primary py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <FadeInView className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <p className="text-xs font-medium tracking-widest text-text-secondary mb-4">
                • DRIVEN RESULT
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
                THE WORK DOESN'T JUST LOOK GOOD — IT PERFORMS. HERE'S THE IMPACT BEHIND THE DESIGN.
              </h2>
            </div>
          </div>
        </FadeInView>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border-custom">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-bg-primary p-8 lg:p-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.1,
                duration: ANIMATION_CONFIG.duration.slow,
                ease: ANIMATION_CONFIG.easing.default,
              }}
            >
              <div className="flex items-start gap-2 mb-4">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <p className="text-xs font-medium tracking-widest text-text-secondary mb-3">
                {stat.label}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
