import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { FadeInView } from '@/components/FadeInView';

const navLinks = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'WORKS', href: '#works' },
  { label: 'CONTACT', href: '#contact' },
];

const socialLinks = [

  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/boudeir-zouhair2005/' },
  { label: 'GITHUB', href: 'https://github.com/zouhair-max' },
];

export function Footer() {
  return (
    <footer className="bg-bg-primary pt-20 lg:pt-32 border-t border-border-custom">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-16">
          {/* Logo & Tagline */}
          <FadeInView>
            <div>
              <Logo className="mb-6" />
              <p className="text-xs text-text-secondary leading-relaxed max-w-xs">
                BUILDING MODERN WEB AND MOBILE APPLICATIONS WITH CLEAN CODE, SCALABLE ARCHITECTURE, AND EXCEPTIONAL USER EXPERIENCES.
              </p>
            </div>
          </FadeInView>

          {/* Navigation */}
          <FadeInView delay={0.1}>
            <div>
              <nav className="space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-sm font-medium text-white hover:text-text-secondary transition-colors group flex items-center gap-2"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </nav>
            </div>
          </FadeInView>

          {/* Social */}
          <FadeInView delay={0.2}>
            <div>
              <p className="text-xs text-text-secondary mb-4">FOLLOW ON</p>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-sm font-medium text-white hover:text-text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </FadeInView>

          {/* CTA */}
          <FadeInView delay={0.3}>
            <div className="text-right">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-white hover:text-text-secondary transition-colors mb-6"
              >
                BOOK A CALL
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-text-secondary leading-relaxed">
                SPECIALIZING IN REACT, NODE.JS, LARAVEL, AND MODERN WEB TECHNOLOGIES.
              </p>
            </div>
          </FadeInView>
        </div>

        {/* Large Text */}
        <FadeInView>
          <div className="relative py-12 overflow-hidden">
            <h2 className="text-[12vw] lg:text-[10vw] font-black text-white tracking-[-0.04em] leading-none text-center">
              ZOUHAIR BOUDEIR
            </h2>
          </div>
        </FadeInView>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <p className="text-xs text-text-secondary">
              © {new Date().getFullYear()} ZOUHAIR BOUDEIR. ALL RIGHTS RESERVED.
            </p>
            <p className="text-xs text-text-secondary">
              FULL STACK DEVELOPER
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-text-secondary">
            <a href="mailto:zouhairboudeir0@gmail.com" className="hover:text-white transition-colors">
           zouhairboudeir0@gmail.com
            </a>
            <span className="hidden sm:inline">•</span>
            <span>MOROCCO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
