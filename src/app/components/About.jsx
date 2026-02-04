"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useI18n } from '../i18n/I18nContext';
import { Code, Coffee, Rocket, Clock, MapPin, Briefcase } from 'lucide-react';
import ScrollingTech from './ScrollingTech';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Technologies with professional colored icons (Flaticon style)
  const technologies = [
    { 
      name: 'React & Next.js', 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
        </svg>
      )
    },
    { 
      name: 'TypeScript', 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#3178C6">
          <rect width="24" height="24" rx="2" fill="#3178C6"/>
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.08.497c0 .2.053.373.156.52.104.148.257.304.46.468.412.328.9.636 1.463.924.563.288 1.178.603 1.844.946.6.3 1.143.653 1.631 1.06a4.792 4.792 0 0 1 1.125 1.39c.28.4.42.873.42 1.42 0 .593-.125 1.092-.373 1.497a3.467 3.467 0 0 1-1.002 1.09 4.876 4.876 0 0 1-1.437.731c-.566.2-1.163.3-1.79.3a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.436-.415 6.716 6.716 0 0 0-.717-.494c-.28-.15-.6-.304-.96-.464-.72-.31-1.314-.676-1.783-1.1-.47-.423-.82-.92-1.053-1.49a4.033 4.033 0 0 1-.35-1.68c0-.6.123-1.112.369-1.536.246-.425.58-.78 1.003-1.066a4.6 4.6 0 0 1 1.47-.793 6.536 6.536 0 0 1 1.77-.35zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="white"/>
        </svg>
      )
    },
    { 
      name: 'Node.js', 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#339933">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.044,0.151-0.044,0.216,0l2.256,1.339c0.082,0.045,0.197,0.045,0.28,0l8.74-5.044 c0.082-0.045,0.134-0.141,0.134-0.238V6.213c0-0.097-0.052-0.192-0.134-0.238l-8.74-5.033c-0.082-0.057-0.197-0.057-0.28,0 L3.723,6.213c-0.082,0.045-0.134,0.141-0.134,0.238v10.018c0,0.097,0.052,0.203,0.134,0.238l2.375,1.392 c1.112,0.525,1.801-0.198,1.801-0.784V6.434c0-0.221,0.181-0.4,0.403-0.4h1.729c0.221,0,0.4,0.192,0.4,0.4v11.353 c0,0.626,0.044,0.784,0.18,1.048l0.09,0.151c0.198,0.336,0.516,0.54,0.93,0.54c0.221,0,0.4-0.192,0.4-0.4v-0.614 c0-1.347,0.873-1.605,1.587-1.605c0.221,0,0.4,0.192,0.4,0.4c0,0.221-0.181,0.4-0.4,0.4c-0.134,0-0.403,0.03-0.403,0.3v0.614 c0,0.626-0.044,0.784-0.18,1.048l-0.09,0.151c-0.198,0.336-0.516,0.54-0.93,0.54c-0.221,0-0.4,0.192-0.4,0.4v0.614 c0,0.221-0.181,0.4-0.4,0.4H11.998z M19.291,13.993c-0.057,0-0.134,0.03-0.211,0.075l-1.677,0.975 c-0.458,0.27-0.757,0.027-0.757-0.54V8.197c0-0.567,0.299-0.81,0.757-0.54l1.677,0.975c0.154,0.09,0.211,0.27,0.134,0.403 c-0.04,0.067-0.107,0.075-0.134,0.075c-0.026,0-0.08-0.015-0.134-0.045l-1.677-0.975c-0.082-0.057-0.197-0.057-0.28,0 c-0.082,0.045-0.134,0.141-0.134,0.238v7.306c0,0.097,0.052,0.192,0.134,0.238c0.04,0.022,0.09,0.03,0.14,0.03 c0.05,0,0.1-0.008,0.14-0.03l1.677-0.975c0.458-0.27,0.757-0.027,0.757,0.54v1.677c0,0.097-0.052,0.192-0.134,0.238 C19.37,13.978,19.33,13.993,19.291,13.993z" fill="#339933"/>
        </svg>
      )
    },
    { 
      name: 'Python', 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path d="M9.585 2.926c-2.133 0-3.86 1.728-3.86 3.86v2.31h7.72v.772H4.17c-2.133 0-3.86 1.728-3.86 3.86v4.62c0 2.133 1.727 3.86 3.86 3.86h2.31v-3.09c0-2.133 1.728-3.86 3.86-3.86h7.72c2.133 0 3.86-1.727 3.86-3.86V6.786c0-2.133-1.727-3.86-3.86-3.86H9.585zM7.38 5.544c.852 0 1.544.692 1.544 1.544 0 .852-.692 1.544-1.544 1.544-.852 0-1.544-.692-1.544-1.544 0-.852.692-1.544 1.544-1.544z" fill="#3776AB"/>
          <path d="M14.415 21.074c2.133 0 3.86-1.728 3.86-3.86v-2.31h-7.72v-.772h8.375c2.133 0 3.86-1.728 3.86-3.86V4.752c0-2.133-1.727-3.86-3.86-3.86h-2.31v3.09c0 2.133-1.728 3.86-3.86 3.86H4.17c-2.133 0-3.86 1.727-3.86 3.86v4.62c0 2.133 1.727 3.86 3.86 3.86h5.245zm2.205-2.618c-.852 0-1.544-.692-1.544-1.544 0-.852.692-1.544 1.544-1.544.852 0 1.544.692 1.544 1.544 0 .852-.692 1.544-1.544 1.544z" fill="#FFD43B"/>
        </svg>
      )
    },
    { 
      name: 'PHP', 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="10.5" ry="5.5" fill="url(#phpGradient)" stroke="white" strokeWidth="0.5"/>
          <defs>
            <linearGradient id="phpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#777BB4"/>
              <stop offset="50%" stopColor="#6B7EB8"/>
              <stop offset="100%" stopColor="#4F5B93"/>
            </linearGradient>
          </defs>
          <text x="12" y="15.5" fontSize="7" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif" style={{fontStyle: 'italic'}}>php</text>
        </svg>
      )
    },
    { 
      name: 'Laravel', 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#FF2D20">
          <path d="M24 10.248V6.749H13.586c-1.435 0-2.122.9-2.122 2.35 0 1.41.687 2.302 2.122 2.302h1.217v-1.551h-1.21c-.384 0-.59-.2-.59-.551 0-.384.206-.551.59-.551H24zM9.533 3.026l-6.35 14.066h2.213l.6-1.448h6.317l.6 1.448h2.212L9.533 3.026zm-.31 9.64l1.89-4.65 1.93 4.65H9.223z" fill="#FF2D20"/>
        </svg>
      )
    },
    { 
      name: 'MySQL', 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#4479A1">
          <path d="M16.405 5.501c-1.21 0-1.891.74-2.29 1.383-.4.642-.597 1.498-.597 2.462 0 .963.197 1.82.597 2.462.399.643 1.08 1.383 2.29 1.383 1.197 0 1.878-.74 2.277-1.383.4-.642.597-1.499.597-2.462 0-.964-.197-1.82-.597-2.462-.399-.643-1.08-1.383-2.277-1.383zm-2.776 3.845c0-1.78.597-3.24 1.786-4.23 1.19-.99 2.776-1.48 4.58-1.48 1.804 0 3.39.49 4.58 1.48 1.19.99 1.786 2.45 1.786 4.23 0 1.78-.597 3.24-1.786 4.23-1.19.99-2.776 1.48-4.58 1.48-1.804 0-3.39-.49-4.58-1.48-1.19-.99-1.786-2.45-1.786-4.23zm-8.82 2.93c0 .963.197 1.82.597 2.462.399.643 1.08 1.383 2.29 1.383 1.197 0 1.878-.74 2.277-1.383.4-.642.597-1.499.597-2.462 0-.964-.197-1.82-.597-2.462-.399-.643-1.08-1.383-2.277-1.383-1.21 0-1.891.74-2.29 1.383-.4.642-.597 1.498-.597 2.462zm1.786-3.845c1.19-.99 2.776-1.48 4.58-1.48 1.804 0 3.39.49 4.58 1.48 1.19.99 1.786 2.45 1.786 4.23 0 1.78-.597 3.24-1.786 4.23-1.19.99-2.776 1.48-4.58 1.48-1.804 0-3.39-.49-4.58-1.48-1.19-.99-1.786-2.45-1.786-4.23 0-1.78.597-3.24 1.786-4.23z" fill="#4479A1"/>
        </svg>
      )
    },
    { 
      name: 'MongoDB', 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#47A248">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.533 3.682-4.533 10.02 0 7.182 5.223 11.83 5.577 12.105.23.18.46.343.673.48.106-.314.18-.64.23-.97.261-1.856.176-2.918.02-4.307-.02-.19-.04-.38-.06-.57-.15-1.48-.34-3.195-.34-4.99 0-1.795.19-3.51.34-4.99.02-.19.04-.38.06-.57.156-1.389.241-2.451-.02-4.307-.05-.33-.124-.656-.23-.97-.213-.137-.443-.3-.673-.48-.354-.275-5.577-4.923-5.577-12.105 0-6.338 3.81-9.454 4.533-10.02.468-.499.487-.689.523-1.184.205.486.455 1.046.735 1.44.321.701 3.309 2.535 4.573 8.115.08.35.15.69.2 1.04.05-.35.12-.69.2-1.04zm-.52 1.01c-.05.35-.12.69-.2 1.04-.05.35-.12.69-.2 1.04-.15 1.48-.34 3.195-.34 4.99 0 1.795.19 3.51.34 4.99.08.35.15.69.2 1.04.05-.35.12-.69.2-1.04.15-1.48.34-3.195.34-4.99 0-1.795-.19-3.51-.34-4.99z" fill="#47A248"/>
        </svg>
      )
    },
    { 
      name: 'UI/UX Design', 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#8d6a9f" opacity="0.2" stroke="#8d6a9f" strokeWidth="2"/>
          <rect x="6" y="6" width="6" height="4" rx="1" fill="#8d6a9f"/>
          <rect x="6" y="12" width="12" height="2" rx="1" fill="#8d6a9f" opacity="0.7"/>
          <rect x="6" y="16" width="10" height="2" rx="1" fill="#8d6a9f" opacity="0.7"/>
          <circle cx="18" cy="8" r="3" fill="#8d6a9f"/>
        </svg>
      )
    },
    { 
      name: 'Mobile Development', 
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <rect x="7" y="2" width="10" height="20" rx="2" fill="#8d6a9f" opacity="0.2" stroke="#8d6a9f" strokeWidth="2"/>
          <rect x="9" y="4" width="6" height="12" rx="1" fill="#8d6a9f"/>
          <circle cx="12" cy="18" r="1" fill="#8d6a9f"/>
        </svg>
      )
    },
  ];

 

  return (
    <section id="about" className="min-h-screen bg-black relative overflow-hidden">
      {/* Aggressive background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(141,106,159,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(141,106,159,0.15),transparent_50%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#8d6a9f]/30 via-black to-[#8d6a9f]/20"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#8d6a9f_1px,transparent_1px),linear-gradient(to_bottom,#8d6a9f_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        
        {/* Title Section - Aggressive */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 delay-100 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-[#8d6a9f] to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(141,106,159,0.5)]">
              {t('about.title')}
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#8d6a9f] to-transparent mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          
          {/* Left - Profile & Greeting */}
          <div className={`flex flex-col items-center lg:items-start transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {/* Profile Picture - Aggressive Design */}
            <div className="mb-10 relative group">
              <div className="absolute -inset-4 bg-[#8d6a9f] rounded-full opacity-75 blur-2xl group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-[#8d6a9f] to-[#7d5a8f] rounded-full opacity-50"></div>
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 ring-[#8d6a9f] shadow-[0_0_60px_rgba(141,106,159,0.6)] group-hover:shadow-[0_0_80px_rgba(141,106,159,0.8)] transition-all duration-500 transform group-hover:scale-110">
                <Image
                  src="/me.jpg"
                  alt="ZOUHAIR"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

          

           
          </div>

          {/* Right - Description */}
          <div className={`flex flex-col justify-center transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="space-y-6 mb-12">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-medium whitespace-pre-line">
                {t('about.description1')}
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-medium">
                {t('about.description2')}
              </p>
            </div>

           
          </div>
       
        </div>
      {/* Scrolling Technologies - Horizontal Infinite Scroll - Full Width */}
      <div className="relative z-10 w-screen  -mt-20 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <ScrollingTech items={technologies} speed={15} />
      </div>
      </div>


     
    </section>
  );
}
