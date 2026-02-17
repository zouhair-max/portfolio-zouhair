import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/data/content';
import { FadeInView } from '@/components/FadeInView';
import { ANIMATION_CONFIG } from '@/lib/animations';

export function BlogsSection() {
  return (
    <section id="blogs" className="bg-bg-primary py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Left - Header */}
          <FadeInView>
            <div>
              <p className="text-xs font-medium tracking-widest text-text-secondary mb-4">
                • BLOGS (03)
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                STORIES BEHIND THE WORK
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                I WRITE TO UNPACK THE THINKING BEHIND THE WORK — THE CHOICES, THE REASONING, AND THE QUIET DECISIONS THAT SHAPE HOW A PROJECT FEELS AND PERFORMS.
              </p>
            </div>
          </FadeInView>

          {/* Right - Blog Posts */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: ANIMATION_CONFIG.duration.slow,
                  ease: ANIMATION_CONFIG.easing.default,
                }}
              >
                <div className="aspect-square bg-bg-secondary mb-4 flex items-center justify-center group-hover:bg-border-custom transition-colors duration-300">
                  <ArrowUpRight className="w-8 h-8 text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <p className="text-xs text-text-secondary mb-2">{post.category}</p>
                <p className="text-xs text-text-secondary mb-3">{post.date}</p>
                <h3 className="text-lg font-semibold text-white group-hover:text-text-secondary transition-colors">
                  {post.title}
                </h3>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Read More Link */}
        <FadeInView className="mt-12 text-right">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-white hover:text-text-secondary transition-colors"
          >
            READ MORE BLOGS
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </FadeInView>
      </div>
    </section>
  );
}
