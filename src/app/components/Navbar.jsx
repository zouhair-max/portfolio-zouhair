"use client";
import { useState, useEffect, useRef } from 'react';
import { useI18n } from '../i18n/I18nContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuRef = useRef(null);
  const { t, locale, changeLocale } = useI18n();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint de Tailwind
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Exclure le bouton menu flottant du handleClickOutside
      const menuButton = event.target.closest('button[aria-label="Toggle menu"]');
      if (menuButton) {
        return; // Ne pas fermer si on clique sur le bouton menu
      }
      
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Define menu items structure (static, doesn't depend on translations for structure)
  const menuItems = [
    { label: t('nav.home'), href: '#home', id: 'home' },
    { label: t('nav.about'), href: '#about', id: 'about' },
    { label: t('nav.portfolio'), href: '#portfolio', id: 'portfolio' },
    { label: t('nav.skills'), href: '#skills', id: 'skills' },
    { label: t('nav.contact'), href: '#contact', id: 'contact' },
  ];

  // Handle scroll effect, active section detection, and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / windowHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
      
      // Detect active section
      const sectionIds = ['home', 'about', 'portfolio', 'skills', 'contact'];
      const sections = sectionIds.map(id => {
        const element = document.querySelector(`#${id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: id,
            top: rect.top,
            bottom: rect.bottom,
            height: rect.height
          };
        }
        return null;
      }).filter(Boolean);

      // Find the section currently in view
      const scrollPosition = window.scrollY + 150; // Offset for navbar
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.top + window.scrollY;
        
        if (scrollPosition >= sectionTop - 200) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [t]); // Only depend on translation function

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMenuOpen]);

  const toggleLanguage = () => {
    changeLocale(locale === 'en' ? 'fr' : 'en');
  };

  // Handle CV download
  const handleDownloadCV = (e) => {
    e.preventDefault();
    try {
      const link = document.createElement('a');
      link.href = '/cv/cv boudeir ZOUHAIR.pdf';
      link.download = 'CV_BOUDEIR_ZOUHAIR.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Close mobile menu if open
      if (isMobile && isMenuOpen) {
        closeMenu();
      }
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: open in new tab
      window.open('/cv/cv boudeir ZOUHAIR.pdf', '_blank');
    }
  };

  // SUR MOBILE : Seulement le bouton menu
  if (isMobile) {
    return (
      <>
        {/* Bouton menu flottant sur mobile */}
        <button
          onClick={toggleMenu}
          className="fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-xl shadow-lg border-2 border-gray-200/50 group"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-[#8d6a9f] rounded-full transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-[#8d6a9f] rounded-full transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-[#8d6a9f] rounded-full transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40">
            {/* Backdrop - ferme le menu au clic */}
            <div
              className="absolute inset-0 bg-[#8d6a9f]/80 backdrop-blur-sm transition-opacity duration-500 opacity-100"
              onClick={closeMenu}
              aria-hidden="true"
            ></div>

            {/* Menu Panel */}
            <div
              ref={menuRef}
              className="absolute top-0 right-0 h-full w-full max-w-sm bg-black shadow-2xl transform transition-transform duration-300"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navigation mobile"
            >
              <div className="relative h-full flex flex-col">
                {/* Header avec bouton de fermeture */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <span className="text-xl font-bold bg-gradient-to-r from-[#8d6a9f] to-[#8d6a9f] bg-clip-text text-transparent">
                    {t('nav.menu')}
                  </span>
                  {/* BOUTON DE FERMETURE CORRIGÉ */}
                  <button
                    onClick={closeMenu}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors duration-300"
                    aria-label="Fermer le menu"
                  >
                    {/* SVG sans onClick sur le path */}
                    <svg className="w-6 h-6 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto py-6" aria-label="Navigation principale">
                  <div className="space-y-2 px-6">
                    {menuItems.map((item, index) => {
                      const isActive = activeSection === item.id;
                      return (
                        <a
                          key={index}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            closeMenu();
                            const element = document.querySelector(item.href);
                            if (element) {
                              const offset = 100;
                              const elementPosition = element.getBoundingClientRect().top;
                              const offsetPosition = elementPosition + window.pageYOffset - offset;
                              window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth'
                              });
                            }
                          }} 
                          className="group block focus:outline-none focus:ring-2 focus:ring-[#8d6a9f] focus:ring-offset-2 focus:ring-offset-black rounded-xl"
                          style={{
                            animation: `slideInRight 0.3s ease-out ${index * 0.1}s both`,
                          }}
                        >
                          <div className={`relative px-6 py-4 rounded-xl overflow-hidden transition-all duration-300 ${
                            isActive 
                              ? 'bg-[#8d6a9f]/10 border-l-2 border-[#8d6a9f]' 
                              : 'hover:bg-gray-900'
                          }`}>
                            {/* Number indicator */}
                            <span className={`absolute left-2 top-1/2 -translate-y-1/2 text-xs font-bold transition-colors duration-300 ${
                              isActive ? 'text-[#8d6a9f]' : 'text-gray-600 group-hover:text-[#8d6a9f]'
                            }`}>
                              0{index + 1}
                            </span>
                            
                            <div className="flex items-center justify-between">
                              <span className={`text-lg font-semibold transition-colors duration-300 ml-6 ${
                                isActive 
                                  ? 'text-[#8d6a9f]' 
                                  : 'text-[#D6D5C9] group-hover:text-[#8d6a9f]'
                              }`}>
                                {item.label}
                              </span>
                              <svg
                                className={`w-5 h-5 transform transition-all duration-300 ${
                                  isActive 
                                    ? 'text-[#8d6a9f] translate-x-2' 
                                    : 'text-gray-600 group-hover:text-[#8d6a9f] group-hover:translate-x-2'
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            
                            {/* Animated underline */}
                            <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#8d6a9f] to-[#8d6a9f] transition-transform duration-300 origin-left ${
                              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                            }`}></div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </nav>

                {/* Footer Actions */}
                <div className="p-6 border-t border-gray-800 space-y-4">
                  {/* Language Selector */}
                  <button 
                    className="w-full px-6 py-3 border-2 border-gray-800 rounded-xl font-medium text-[#D6D5C9] hover:border-[#8d6a9f] hover:text-[#8d6a9f] transition-all duration-300 flex items-center justify-center space-x-2 group"
                    onClick={() => {
                      toggleLanguage();
                      closeMenu();
                    }}
                  >
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    <span>{locale === 'en' ? 'Français' : 'English'}</span>
                  </button>

                  {/* Download CV */}
                  <a
                    href="/cv/cv boudeir ZOUHAIR.pdf"
                    download="CV_BOUDEIR_ZOUHAIR.pdf"
                    onClick={handleDownloadCV}
                    className="relative w-full px-6 py-3 bg-gradient-to-r from-[#8d6a9f] to-[#8d6a9f] text-white font-semibold rounded-xl overflow-hidden group shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-[#8d6a9f] focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>{t('nav.downloadCV')}</span>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  </a>

                  {/* Social Links */}
                  <div className="flex items-center justify-center space-x-4 pt-4">
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-gray-400 hover:bg-[#8d6a9f] hover:text-white transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#8d6a9f]" onClick={closeMenu}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-gray-400 hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={closeMenu}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-gray-400 hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-700" onClick={closeMenu}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400" onClick={closeMenu}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                      </svg>
                    </a>
                  </div>

                  {/* Footer Text */}
                  <p className="text-center text-sm text-gray-500 pt-2">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </>
    );
  }

  // SUR DESKTOP : La navbar complète
  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
        <div 
          className="h-full bg-gradient-to-r from-[#8d6a9f] via-[#a693d6] to-[#8d6a9f] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navbar - Desktop seulement */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 mr-[7%] ml-[7%] mt-[1.5%] rounded-4xl ${
        isScrolled ? 'bg-transparent  border-2 border-gray-200/50 backdrop-blur-xl shadow-lg shadow-black/5 py-3' : 'bg-transparent backdrop-blur-xl shadow-lg border-2 border-gray-200/50 py-4'
      }`}>
        
        <div className="max-w-full mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with magnetic hover effect - Desktop seulement */}
            <a
              href="#"
              className="relative group"
              onClick={closeMenu}
            >
              <div className="relative ml-7 ">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#8d6a9f] via-[#a693d6] to-[#8d6a9f] bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110 inline-block">
                  Portfolio
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8d6a9f] to-[#e4d9ff] transition-all duration-300 group-hover:w-full"></div>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      closeMenu();
                      const element = document.querySelector(item.href);
                      if (element) {
                        const offset = 100;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className={`relative px-4 py-2 font-medium text-sm group overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#8d6a9f] focus:rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-[#D6D5C9] hover:text-white'
                    }`}
                  >
                    <span className="relative z-10 transition-colors duration-300">
                      {item.label}
                    </span>
                    {/* Active indicator */}
                    {isActive && (
                      <span className="absolute inset-0 bg-gradient-to-r from-[#8d6a9f]/20 to-[#8d6a9f]/10 rounded-lg"></span>
                    )}
                    {/* Animated background on hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#8d6a9f] to-[#8d6a9f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
                    {/* Active dot indicator */}
                    <span className={`absolute -bottom-1 left-1/2 w-1 h-1 bg-[#8d6a9f] rounded-full transform -translate-x-1/2 transition-all duration-300 ${
                      isActive ? 'scale-100' : 'scale-0 group-hover:scale-100'
                    }`}></span>
                  </a>
                );
              })}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4 mr-7">
              {/* Language Selector */}
              <button 
                onClick={toggleLanguage}
                className="relative px-3 py-2 text-sm font-medium text-[#D6D5C9] hover:text-[#8d6a9f] transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-[#8d6a9f] focus:rounded-lg"
                aria-label={t('nav.language')}
              >
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span>{locale === 'en' ? 'FR' : 'EN'}</span>
                </span>
              </button>

              {/* Download CV Button */}
              <a
                href="/cv/cv boudeir ZOUHAIR.pdf"
                download="CV_BOUDEIR_ZOUHAIR.pdf"
                onClick={handleDownloadCV}
                className="relative px-6 py-2.5 bg-gradient-to-r from-[#8d6a9f] via-[#a693d6] to-[#8d6a9f] text-white font-medium text-sm rounded-lg overflow-hidden group shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8d6a9f] focus:ring-offset-2"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{t('nav.downloadCV')}</span>
                </span>
                {/* Animated shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              </a>
            </div>

            {/* Mobile Menu Button - caché sur desktop */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-[#8d6a9f] focus:rounded-full"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-[#D6D5C9] rounded-full transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-[#D6D5C9] rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-[#D6D5C9] rounded-full transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}