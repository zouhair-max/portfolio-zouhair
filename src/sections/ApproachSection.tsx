import { motion } from 'framer-motion';
import { processSteps } from '@/data/content';
import { FadeInView } from '@/components/FadeInView';
import { ANIMATION_CONFIG } from '@/lib/animations';

export function ApproachSection() {
  return (
    <section className="bg-bg-light py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Header */}
          <FadeInView>
            <div>
              <p className="text-xs font-medium tracking-widest text-text-dark/60 mb-4">
                • APPROACH (04)
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-dark mb-8">
                CREATIVE APPROACH
              </h2>
              <div className="aspect-square max-w-md bg-gray-200">
                <img
                  src="/images/service-brand.jpg"
                  alt="Creative Process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeInView>

          {/* Right - Steps */}
          <div>
            <FadeInView delay={0.1}>
              <p className="text-sm text-text-dark/60 mb-12 max-w-sm">
                EVERY PROJECT IS DIFFERENT, BUT THE PATH TO GREAT WORK STAYS THE SAME — A BALANCE OF RESEARCH, CLARITY, CREATIVITY, AND REFINEMENT.
              </p>
            </FadeInView>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="border-t border-text-dark/20 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: ANIMATION_CONFIG.duration.slow,
                    ease: ANIMATION_CONFIG.easing.default,
                  }}
                >
                  <span className="text-sm text-text-dark/40 mb-4 block">{step.number}</span>
                  <h3 className="text-lg font-bold text-text-dark mb-3">{step.title}</h3>
                  <p className="text-sm text-text-dark/70 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
