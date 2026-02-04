"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

export default function Homepage() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="home" className="min-h-[100dvh] bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8d6a9f]/30 via-black to-[#8d6a9f]/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(141,106,159,0.15),transparent_50%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(141,106,159,0.1),transparent_50%)]"></div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className={`max-w-5xl w-full text-center relative z-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>

        {/* Profile Picture - Perfect spacing and animation */}
        <div className="mb-10  mt-10 sm:mb-12 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-[#8d6a9f] opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-[#8d6a9f]/40 shadow-2xl shadow-[#8d6a9f]/30 group-hover:ring-[#8d6a9f]/60 group-hover:shadow-[#8d6a9f]/50 transition-all duration-500 transform group-hover:scale-105">
              <Image
                src="/me.jpg"
                alt="ZOUHAIR - Full Stack Developer"
                width={176}
                height={176}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Greeting - Perfect typography hierarchy */}
        <div className={`mb-8 sm:mb-10 transition-all duration-1000 delay-100 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-semibold mb-2 tracking-wide">
            {t('home.greeting')}{' '}
            <span className="text-[#8d6a9f] font-bold drop-shadow-[0_0_15px_rgba(141,106,159,0.6)]">
              {t('home.name')}
            </span>{' '}

          </h2>
        </div>

        {/* Main Title - Perfect typography and spacing */}
        <h1 className={`mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-3 sm:mb-4 leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-white via-[#8d6a9f]/80 to-white bg-clip-text text-transparent">
              {t('home.title')}
            </span>
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] tracking-tight">
            <span className="text-[#8d6a9f]">
              {t('home.subtitle')}
            </span>
          </span>
          <span className="block mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl text-gray-400 font-medium tracking-wide">
            {t('home.location')} <span className="text-gray-300">{t('home.locationValue')}</span>
          </span>
        </h1>

        {/* Description - Perfect readability */}
        <p className={`text-base sm:text-lg md:text-xl text-gray-400 mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed font-normal transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          {t('home.description')}{' '}
          <span className="text-[#8d6a9f] font-semibold">{t('home.descriptionRole')}</span>{' '}
          {t('home.descriptionText')}{' '}
          <span className="text-white font-medium">{t('home.descriptionHighlight')}</span>{' '}
          {t('home.descriptionEnd')}
        </p>

        {/* Action Buttons - Perfect UX with micro-interactions */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          {/* Primary CTA - Contact Me */}
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-[#8d6a9f] text-white font-semibold text-base sm:text-lg rounded-xl hover:bg-[#7d5a8f] transition-all duration-300 shadow-lg shadow-[#8d6a9f]/30 hover:shadow-[#8d6a9f]/50 hover:shadow-xl transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-4 focus:ring-[#8d6a9f]/50 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Contact ZOUHAIR"
          >
            <span className="relative z-10">{t('home.contactButton')}</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-xl bg-[#8d6a9f] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
          </a>

          {/* Secondary CTA - Resume */}
          <a
            href="/cv/cv boudeir ZOUHAIR.pdf"
            download="CV_BOUDEIR_ZOUHAIR.pdf"
            className="group relative inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 border-2 border-[#8d6a9f]/60 text-white font-semibold text-base sm:text-lg rounded-xl hover:border-[#8d6a9f] hover:bg-[#8d6a9f]/10 transition-all duration-300 backdrop-blur-sm shadow-lg shadow-[#8d6a9f]/20 hover:shadow-[#8d6a9f]/40 hover:shadow-xl transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-4 focus:ring-[#8d6a9f]/50 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Download ZOUHAIR's Resume"
          >
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
            <span>{t('home.resumeButton')}</span>
          </a>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
          display: inline-block;
          transform-origin: 70% 70%;
        }
      `}</style>
    </div>
  );
}