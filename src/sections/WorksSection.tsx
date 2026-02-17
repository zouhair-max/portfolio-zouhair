import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/content';
import { FadeInView } from '@/components/FadeInView';
import { ANIMATION_CONFIG } from '@/lib/animations';
import { useState } from 'react';

export function WorksSection() {
  return (
    <section id="works" className="bg-bg-primary py-24 lg:py-32 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <FadeInView className="mb-20 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <motion.p
                className="text-xs font-medium tracking-widest text-text-secondary mb-6 inline-block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                • SELECTED WORKS (06)
              </motion.p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-gradient">
                A COLLECTION OF
                <br />
                <span className="text-white">REFINED DIGITAL</span>
                <br />
                <span className="text-gradient">EXPERIENCES</span>
              </h2>
            </div>
            <div className="lg:flex lg:items-end lg:justify-end lg:flex-col lg:gap-4">
              <motion.p
                className="text-sm text-text-secondary max-w-md text-left lg:text-right leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                EVERY PROJECT HERE WAS SHAPED WITH INTENTION — FROM LAYOUT AND TYPOGRAPHY TO INTERACTION AND TONE.
              </motion.p>
              <motion.p
                className="text-xs font-medium tracking-widest text-text-secondary mt-4 lg:mt-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                ZOUHAIR BOUDEIR
              </motion.p>
            </div>
          </div>
        </FadeInView>

        {/* Projects Grid */}
        <div className="space-y-12 lg:space-y-16">
          {/* Row 1 - ChoufRap (Full Width) */}
          <FadeInView>
            <ProjectCard project={projects[2]} size="full" index={0} />
          </FadeInView>

          {/* Row 2 - SmartMenu (Full Width) */}
          <FadeInView delay={0.1}>
            <ProjectCard project={projects[1]} size="full" index={1} />
          </FadeInView>

          {/* Row 3 - QuerySQL + Khayrat (1/2 width each) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <FadeInView delay={0.2}>
              <ProjectCard project={projects[0]} size="medium" index={2} />
            </FadeInView>
            <FadeInView delay={0.3}>
              <ProjectCard project={projects[5]} size="medium" index={5} />
            </FadeInView>
          </div>

          {/* Row 4 - LeafyPaws + Questionnaire Pro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <FadeInView delay={0.1}>
              <ProjectCard project={projects[3]} size="medium" index={3} />
            </FadeInView>
            <FadeInView delay={0.2}>
              <ProjectCard project={projects[4]} size="large" index={4} />
            </FadeInView>
          </div>
        </div>

        {/* Bottom Text */}
        <FadeInView className="mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-12 border-t border-border-custom">
            <motion.p
              className="text-lg lg:text-xl text-white/70 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              These selected projects showcase my expertise in full stack development, modern web technologies, and mobile application development.
            </motion.p>
            <div className="lg:text-right">
              <motion.a
                href="#works"
                className="inline-flex items-center gap-3 group/link text-sm font-medium tracking-widest text-white hover:text-text-secondary transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span>EXPLORE ALL WORKS</span>
                <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
              </motion.a>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  size: 'large' | 'medium' | 'small' | 'full';
  index: number;
}

function ProjectCard({ project, size, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const aspectRatio =
    size === 'full' ? 'aspect-[21/9]' :
    size === 'large' ? 'aspect-[16/9]' : 
    size === 'medium' ? 'aspect-[4/3]' : 
    'aspect-[3/4]';

  return (
    <motion.div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: ANIMATION_CONFIG.duration.slow,
        delay: index * 0.1,
        ease: ANIMATION_CONFIG.easing.default,
      }}
    >
      {/* Image Container */}
      <div className={`relative ${aspectRatio} overflow-hidden bg-bg-secondary mb-8 rounded-sm`}>
        {/* Image */}
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1, ease: ANIMATION_CONFIG.easing.smooth }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: isHovered ? 0.9 : 0.7 }}
          transition={{ duration: 0.4 }}
        />

        {/* Hover Overlay with Blur */}
        <motion.div
          className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Project Number (Large) */}
        <motion.div
          className="absolute top-8 left-8 text-7xl lg:text-9xl font-black text-white/5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 0.1 : 0.05,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.4 }}
        >
          {String(index + 1).padStart(2, '0')}
        </motion.div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-12">
          {/* Top Section - Tags */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0.8,
              y: isHovered ? 0 : -10
            }}
            transition={{ duration: 0.4 }}
          >
            {project.tags.slice(0, 4).map((tag, idx) => (
              <motion.span
                key={tag}
                className="px-4 py-2 text-xs font-medium tracking-wider text-white/90 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Bottom Section - Title */}
          <div className="flex items-end justify-between gap-6">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1,
                y: isHovered ? 0 : 10
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 group-hover:text-text-secondary transition-colors duration-300">
                {project.title}
              </h3>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Info Section (Below Image) */}
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <motion.h3
            className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-text-secondary transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {project.tags.map((tag, idx) => (
              <span
                key={tag}
                className="text-xs font-medium tracking-wider text-text-secondary/60 hover:text-text-secondary transition-colors duration-300"
              >
                {tag}
                {idx < project.tags.length - 1 && <span className="mx-2">•</span>}
              </span>
            ))}
          </motion.div>
        </div>
        
        {/* Arrow Indicator */}
        <motion.div
          className="flex-shrink-0 mt-2"
          animate={{ 
            x: isHovered ? 5 : 0,
            y: isHovered ? -5 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight className="w-7 h-7 text-text-secondary/40 group-hover:text-text-secondary transition-colors duration-300" />
        </motion.div>
      </div>
    </motion.div>
  );
}
