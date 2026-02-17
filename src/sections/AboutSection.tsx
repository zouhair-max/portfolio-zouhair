import { FadeInView } from '@/components/FadeInView';

export function AboutSection() {
  return (
    <section id="about" className="bg-bg-primary py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left - Large Text */}
          <FadeInView direction="up">
            <div className="space-y-2">
              <p className="text-xs font-medium tracking-widest text-text-secondary mb-6">
                • ABOUT
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gradient">
                I'M A FULL STACK DEVELOPER FROM MOROCCO, SPECIALIZING IN BUILDING MODERN WEB AND MOBILE APPLICATIONS WITH REACT, NODE.JS, AND CUTTING-EDGE TECHNOLOGIES.
              </h2>
            </div>
          </FadeInView>

          {/* Right - Image */}
          <FadeInView direction="up" delay={0.2}>
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full min-h-[400px]">
              <img
                src="/images/meabout.png"
                alt="Zouhair Boudeir"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeInView>
        </div>

        {/* Secondary Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Portrait Image */}
          <FadeInView direction="up">
            <div className="relative aspect-square max-w-md">
              <img
                src="/images/me.jpg"
                alt="Zouhair Boudeir Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeInView>

          {/* Right - Text Content */}
          <div className="space-y-8">
            <FadeInView direction="up" delay={0.1}>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-white">
                I'M PASSIONATE ABOUT CREATING DIGITAL SOLUTIONS THAT SOLVE REAL PROBLEMS AND DELIVER EXCEPTIONAL USER EXPERIENCES.
              </p>
            </FadeInView>

            <FadeInView direction="up" delay={0.2}>
              <p className="text-lg leading-relaxed text-white/80">
                WITH OVER 2 YEARS OF EXPERIENCE IN FULL STACK DEVELOPMENT, I SPECIALIZE IN BUILDING SCALABLE WEB AND MOBILE APPLICATIONS USING MODERN TECHNOLOGIES LIKE REACT, NEXT.JS, NODE.JS, LARAVEL, AND PYTHON.
              </p>
            </FadeInView>

            <FadeInView direction="up" delay={0.3}>
              <div className="pt-8 border-t border-border-custom">
                <p className="text-sm font-medium tracking-wide text-text-secondary uppercase">
                  I WRITE CLEAN, MAINTAINABLE CODE AND BUILD APPLICATIONS THAT ARE FAST, SECURE, AND USER-FRIENDLY.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}
