import { motion } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/lib/animations';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen bg-accent-red overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.4,
          ease: ANIMATION_CONFIG.easing.smooth,
        }}
      >
        <img
          src="/images/ME.png"
          alt="Zouhair Boudeir"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-red/30 via-transparent to-accent-red/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-12">
          <div className="w-full max-w-[1440px] relative">
            {/* ZOUHAIR Text */}
            <motion.h1
              className="text-[18vw] mt-[10vw] md:text-[15vw] font-black leading-[0.85] tracking-[-0.04em] text-white"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: ANIMATION_CONFIG.easing.default,
              }}
            >
              ZOUHAIR
            </motion.h1>

            {/* BOUDEIR Text - positioned to the right */}
            <motion.h1
              className="text-[18vw] mt-[1vw] md:text-[15vw] font-black leading-[0.85] tracking-[-0.04em] text-white text-right mt-[-5vw]"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: ANIMATION_CONFIG.easing.default,
              }}
            >
              BOUDEIR
            </motion.h1>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative z-20 px-4 sm:px-6 lg:px-12 pb-8">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
            {/* Badge */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xs font-medium tracking-widest text-white/90">
                FULL STACK DEVELOPER
              </span>
            </motion.div>

            {/* Description */}
            <motion.div
              className="lg:col-span-2 lg:text-right"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <p className="text-xs sm:text-sm font-medium tracking-wide text-white/90 max-w-md lg:ml-auto leading-relaxed">
                I BUILD MODERN WEB AND MOBILE APPLICATIONS THAT ARE FAST, SCALABLE, AND USER-FRIENDLY—USING REACT, NODE.JS, AND CUTTING-EDGE TECHNOLOGIES TO CREATE DIGITAL SOLUTIONS THAT DRIVE RESULTS
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
