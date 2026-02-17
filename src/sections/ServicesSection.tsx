import { motion } from 'framer-motion';
import { services } from '@/data/content';
import { FadeInView } from '@/components/FadeInView';
import { ANIMATION_CONFIG } from '@/lib/animations';

export function ServicesSection() {
  return (
    <section id="services" className="bg-bg-light py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <FadeInView className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-medium tracking-widest text-text-dark/60 mb-4">
                • SERVICES (04)
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text-dark">
                DESIGN THAT SPEAKS FOR YOU
              </h2>
            </div>
            <div className="lg:flex lg:items-end lg:justify-end">
              <p className="text-sm text-text-dark/60 max-w-sm text-right">
                I HELP BRANDS AND STARTUPS CREATE DIGITAL EXPERIENCES THAT FEEL CLEAR, MODERN, AND EFFORTLESS TO USE.
              </p>
            </div>
          </div>
        </FadeInView>

        {/* Services Grid */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <FadeInView key={service.id} delay={index * 0.1}>
              <ServiceCard service={service} />
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: typeof services[0];
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-t border-text-dark/10 group"
      whileHover={{ x: 10 }}
      transition={{ duration: 0.3, ease: ANIMATION_CONFIG.easing.default }}
    >
      {/* Number */}
      <div className="lg:col-span-1">
        <span className="text-sm font-medium text-text-dark/40">{service.number}</span>
      </div>

      {/* Content */}
      <div className="lg:col-span-5">
        <h3 className="text-xl lg:text-2xl font-bold text-text-dark mb-4">
          {service.title}
        </h3>
        <p className="text-sm text-text-dark/70 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Tags */}
      <div className="lg:col-span-3">
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium tracking-wider text-text-dark/80 border border-text-dark/20 hover:bg-text-dark hover:text-white transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="lg:col-span-3">
        {service.image && (
          <div className="aspect-video overflow-hidden">
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
