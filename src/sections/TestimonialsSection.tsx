import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/content';
import { FadeInView } from '@/components/FadeInView';
import { ANIMATION_CONFIG } from '@/lib/animations';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-bg-primary py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <FadeInView className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-text-secondary mb-4">
            • TESTIMONIALS (04)
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            WORDS THAT CARRY WEIGHT
          </h2>
        </FadeInView>

        {/* Testimonial Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: ANIMATION_CONFIG.easing.default }}
              className="text-center"
            >
              {/* Quote */}
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-12">
                "{current.quote}"
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <motion.img
                  src={current.avatar}
                  alt={current.author}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                />
                <p className="text-sm font-semibold text-white">{current.author}</p>
                <p className="text-xs text-text-secondary">
                  {current.role}, {current.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              onClick={prev}
              className="text-xs font-medium tracking-widest text-text-secondary hover:text-white transition-colors flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              PREV
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="text-xs font-medium tracking-widest text-text-secondary hover:text-white transition-colors flex items-center gap-2"
            >
              NEXT
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
