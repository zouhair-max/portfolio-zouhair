import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import image1 from "../../assets/image1.png";

function Home() { 
  const { t, i18n: i18nInstance } = useTranslation();
  const currentLanguage = i18nInstance.language;
  const isRTL = currentLanguage === 'ar';

  const stats = [
    { icon: Calendar, value: t('home.stats.experience.value'), label: t('home.stats.experience.label') },
    { icon: Award, value: t('home.stats.projects.value'), label: t('home.stats.projects.label') },
    { icon: MapPin, value: t('home.stats.location.value'), label: t('home.stats.location.label') }
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkResponsive = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1280);
      setIsDesktop(width >= 1280);
    };
    
    checkResponsive();
    window.addEventListener('resize', checkResponsive);
    
    // Trigger animations when component mounts
    setTimeout(() => setIsVisible(true), 100);
    
    return () => window.removeEventListener('resize', checkResponsive);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: isRTL ? 50 : -50,
      y: 20 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: isRTL ? -50 : 50,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const statItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -5,
      scale: 1.05,
      backgroundColor: "rgba(6, 182, 212, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 xl:py-16">
      <motion.div 
        className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Text Content */}
        <motion.div 
          variants={containerVariants}
          className={`space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 order-2 lg:order-1 ${
            isDesktop ? "lg:-ml-20 xl:-ml-32" : ""
          }`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <motion.div 
            className="text-center lg:text-left"
            variants={textVariants}
          >
            <motion.span 
              className="text-cyan-600 dark:text-cyan-400 font-semibold text-lg md:text-xl lg:text-xl xl:text-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('home.greeting')}
            </motion.span>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-800 to-cyan-600 dark:from-white dark:to-cyan-400 bg-clip-text text-transparent mt-2 md:mt-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            >
              {t('home.name')}
            </motion.h1>
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-2 mt-3 md:mt-4"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-4 h-0.5 bg-cyan-500"></div>
              <motion.span 
                className="text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {t('home.title')}
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.p 
            className="text-base md:text-lg lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 leading-relaxed md:leading-loose text-center lg:text-left"
            variants={textVariants}
          >
            {t('home.description')}
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 py-4 md:py-0 "
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={statItemVariants}
                whileHover="hover"
                custom={index}
                className="text-center p-4 md:p-6 rounded-2xl bg-white/50 dark:bg-gray-800 backdrop-blur-sm border border-gray-100 dark:border-gray-700 cursor-pointer"
              >
                <motion.div
                  animate={floatingAnimation}
                >
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-cyan-500 mx-auto mb-2 md:mb-3" />
                </motion.div>
                <div className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
                <div className="text-xs md:text-sm lg:text-xs xl:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col  sm:flex-row gap-4 md:gap-6 pt-4 md:pt-0 -mt-10 justify-center lg:justify-cnter"
            variants={containerVariants}
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv.pdf';
                link.download = 'CV_BOUDEIR.pdf';
                link.click();
              }} 
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-3 md:px-8 md:py-4 lg:px-7 lg:py-3 xl:px-8 xl:py-4 rounded-xl font-semibold transition-all duration-300 text-base md:text-lg lg:text-base xl:text-lg relative overflow-hidden"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Download size={20} className="md:size-6 lg:size-5 xl:size-6" />
              </motion.div>
              {t('home.downloadCV')}
              
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </motion.button>
          </motion.div>
        
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageVariants}
          className="relative order-1  lg:order-2 mb-8 lg:mb-0"
        >
          <div className="relative z-10 flex justify-center lg:justify-end  md:-mt-[200px] xl:-mt-[175px] ">
            <motion.img 
              src={image1} 
              alt={t('home.imageAlt')} 
              className={`
                rounded-3xl 
                ${isMobile 
                  ? "w-full max-w-md" 
                  : isTablet 
                    ? "w-full max-w-2xl" 
                    : "w-full max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl"
                }
                ${isDesktop ? " xl:w-[900px]  xl:-mr-[350px]  " : "md:w-[900px] md:-mr-16  "}
              `}
              whileHover="hover"
            />
            
            {/* Animated decorative elements - Only show on lg and above */}
            <motion.div 
              className="hidden lg:block absolute -top-4 -right-4 lg:-top-6 lg:-right-6 xl:-top-8 xl:-right-8 w-20 h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 bg-cyan-500/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="hidden lg:block absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 xl:-bottom-8 xl:-left-8 w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-cyan-500/10 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.8, 0.5, 0.8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            {/* Floating particles - Only show on xl and above */}
            <motion.div
              className="hidden xl:block absolute -top-12 -right-12 w-4 h-4 bg-cyan-400 rounded-full"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <motion.div
              className="hidden xl:block absolute bottom-4 -left-8 w-3 h-3 bg-cyan-300 rounded-full"
              animate={{
                y: [0, 15, 0],
                x: [0, -5, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;