import { motion } from 'framer-motion';
import { awards } from '@/data/content';
import { FadeInView } from '@/components/FadeInView';
import { ANIMATION_CONFIG } from '@/lib/animations';

export function AwardsSection() {
  return (
    <section className="bg-bg-primary py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Header */}
          <FadeInView>
            <div>
              <p className="text-xs font-medium tracking-widest text-text-secondary mb-4">
                • AWARDS & RECOGNITIONS
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                AWARDS THAT DEFINE THE CRAFT
              </h2>
              <p className="text-lg text-white/70">
                Over the years, my work in development, design, and modern web development has been recognized for its clarity, creativity, and technical precision.
              </p>
            </div>
          </FadeInView>

          {/* Right - Awards List */}
          <div className="space-y-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                className="border-b border-border-custom pb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: ANIMATION_CONFIG.duration.slow,
                  ease: ANIMATION_CONFIG.easing.default,
                }}
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-xs text-text-secondary">0{index + 1}/</span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    {award.name} <span className="text-text-secondary">({award.count})</span>
                  </h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pl-10">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
