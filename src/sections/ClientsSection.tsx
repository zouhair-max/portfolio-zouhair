import { motion } from 'framer-motion';
import { clients } from '@/data/content';
import { FadeInView } from '@/components/FadeInView';
import { ANIMATION_CONFIG } from '@/lib/animations';

export function ClientsSection() {
  return (
    <section className="bg-bg-primary py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Header */}
          <FadeInView>
            <div>
              <p className="text-xs font-medium tracking-widest text-text-secondary mb-4">
                • CLIENTS (08)
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                BRANDS I'VE WORKED WITH
              </h2>
              <p className="text-lg text-white/70">
                The goal is always the same: design that communicates clearly and leaves a lasting impression.
              </p>
            </div>
          </FadeInView>

          {/* Right - Client List */}
          <div className="space-y-0">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                className="flex items-center justify-between py-4 border-b border-border-custom group cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                  duration: ANIMATION_CONFIG.duration.slow,
                  ease: ANIMATION_CONFIG.easing.default,
                }}
              >
                <span className="text-lg lg:text-xl font-semibold text-white group-hover:text-text-secondary transition-colors">
                  {client.name}
                </span>
                <span className="text-xs text-text-secondary">{client.year}/</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
