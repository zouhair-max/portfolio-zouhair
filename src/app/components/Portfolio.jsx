"use client";

import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { useI18n } from '../i18n/I18nContext';
import { ExternalLink, Github, Play, X, Code2, Filter, Sparkles, TrendingUp, Award, ChevronRight, Zap, Layers, Users, Globe, Smartphone, Palette, Clock, CheckCircle } from 'lucide-react';

// ============================================
// ENHANCED DESIGN SYSTEM & CONSTANTS
// ============================================
const ENHANCED_DESIGN_CONFIG = {
  colors: {
    background: '#0A0A0A',
    surface: {
      primary: '#111111',
      secondary: '#1A1A1A',
      tertiary: '#222222'
    },
    gradient: {
      primary: 'linear-gradient(135deg, #8D6A9F 0%, #6D4A7F 50%, #4D2A5F 100%)',
      secondary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      accent: 'linear-gradient(135deg, #8D6A9F 0%, #C44569 100%)',
      glass: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
      tertiary: '#888888',
      accent: '#8D6A9F'
    },
    accent: {
      primary: '#8D6A9F',
      secondary: '#C44569',
      tertiary: '#4ECDC4'
    },
    status: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444'
    }
  },
  animations: {
    duration: {
      fast: '300ms',
      normal: '600ms',
      slow: '900ms'
    },
    easing: {
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      elastic: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    },
    stagger: 120
  },
  spacing: {
    section: 'py-16 md:py-24 lg:py-32',
    container: 'px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto',
    card: 'p-6 md:p-8'
  },
  typography: {
    h1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold',
    h2: 'text-3xl sm:text-4xl md:text-5xl font-bold',
    h3: 'text-2xl sm:text-3xl font-semibold',
    body: 'text-base sm:text-lg leading-relaxed'
  },
  effects: {
    glass: 'backdrop-blur-xl bg-white/5',
    shadow: {
      soft: '0 8px 32px rgba(0, 0, 0, 0.3)',
      medium: '0 20px 60px rgba(0, 0, 0, 0.5)',
      glow: '0 0 60px rgba(141, 106, 159, 0.3)'
    },
    border: {
      glass: '1px solid rgba(255, 255, 255, 0.1)',
      accent: '1px solid rgba(141, 106, 159, 0.3)'
    }
  }
};

// ============================================
// ENHANCED PROJECT DATA
// ============================================
const ENHANCED_PROJECTS_DATA = [
  {
    id: 1,
    title: "QuerySQL",
    category: "web",
    type: "image",
    image: "/portfolio/querysql.png",
    description: "Advanced SQL query builder with AI-powered optimization, real-time collaboration, and comprehensive database management.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Redis"],
    link: "#",
    github: "#",
    featured: true,
    stats: {
      complexity: "High",
      timeline: "6 months",
      team: "Solo",
      impact: "40% faster queries"
    }
  },
  {
    id: 2,
    title: "SmartMenu",
    category: "web",
    type: "video",
    video: "/portfolio/smartmenu.mp4",
    thumbnail: "/portfolio/smartmenu.png",
    description: "Intelligent restaurant management platform with QR ordering, real-time analytics, and integrated payment processing.",
    technologies: ["React", "Laravel", "Stripe", "Socket.io", "Redis"],
    link: "#",
    github: "#",
    featured: true,
    stats: {
      complexity: "Medium",
      timeline: "4 months",
      team: "3 members",
      impact: "30% more orders"
    }
  },
  {
    id: 3,
    title: "ChoufRap",
    category: "web",
    type: "video",
    video: "/portfolio/choufrap.mp4",
    thumbnail: "/portfolio/choufrap.png",
    description: "Social music streaming platform with AI recommendations, collaborative playlists, and artist discovery.",
    technologies: ["Next.js", "Node.js", "MongoDB", "WebAudio API", "WebRTC"],
    link: "#",
    github: "#",
    featured: true,
    stats: {
      complexity: "High",
      timeline: "8 months",
      team: "5 members",
      impact: "50k+ users"
    }
  },
  {
    id: 4,
    title: "LeafyPaws",
    category: "mobile",
    type: "image",
    image: "/portfolio/leafypaws.jpg",
    description: "E-commerce mobile app for pet products with AR pet preview, subscription model, and community features.",
    technologies: ["React Native", "Laravel", "AR Kit", "Stripe", "Firebase"],
    link: "#",
    github: "#",
    featured: false,
    stats: {
      complexity: "Medium",
      timeline: "5 months",
      team: "4 members",
      impact: "25% repeat customers"
    }
  },
  {
    id: 5,
    title: "Questionnaire Pro",
    category: "web",
    type: "image",
    image: "/portfolio/qustainnaire.png",
    description: "Enterprise survey platform with advanced analytics, conditional logic, and multi-language support.",
    technologies: ["React", "TypeScript", "Express", "MySQL", "Chart.js"],
    link: "#",
    github: "#",
    featured: false,
    stats: {
      complexity: "Medium",
      timeline: "3 months",
      team: "2 members",
      impact: "98% completion rate"
    }
  },
  {
    id: 6,
    title: "Khayrat",
    category: "mobile",
    type: "image",
    image: "/portfolio/khayrat.png",
    description: "Blockchain-based charity platform with transparent donation tracking and impact visualization.",
    technologies: ["React Native", "Solidity", "IPFS", "Web3.js", "Node.js"],
    link: "#",
    github: "#",
    featured: true,
    stats: {
      complexity: "High",
      timeline: "7 months",
      team: "6 members",
      impact: "$2M+ raised"
    }
  }
];

// Add more categories for filtering
const ENHANCED_CATEGORIES = [
  { 
    id: 'all', 
    name: 'All Projects', 
    icon: Sparkles, 
    count: ENHANCED_PROJECTS_DATA.length,
    color: ENHANCED_DESIGN_CONFIG.colors.accent.primary
  },
  { 
    id: 'web', 
    name: 'Web Apps', 
    icon: Globe, 
    count: ENHANCED_PROJECTS_DATA.filter(p => p.category === 'web').length,
    color: '#667eea'
  },
  { 
    id: 'mobile', 
    name: 'Mobile Apps', 
    icon: Smartphone, 
    count: ENHANCED_PROJECTS_DATA.filter(p => p.category === 'mobile').length,
    color: '#10B981'
  },
  { 
    id: 'featured', 
    name: 'Featured', 
    icon: Award, 
    count: ENHANCED_PROJECTS_DATA.filter(p => p.featured).length,
    color: '#F59E0B'
  }
];

// ============================================
// ENHANCED COMPONENTS
// ============================================

/**
 * Floating Background Elements
 */
const FloatingBackground = () => {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 animate-pulse"
          style={{
            background: `radial-gradient(circle at center, ${ENHANCED_DESIGN_CONFIG.colors.accent.primary}20 0%, transparent 70%)`,
            filter: 'blur(80px)',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80"
          style={{
            background: `radial-gradient(circle at center, ${ENHANCED_DESIGN_CONFIG.colors.accent.secondary}15 0%, transparent 70%)`,
            filter: 'blur(60px)',
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -50px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
      `}</style>
    </>
  );
};

/**
 * Enhanced Stats Card
 */
const EnhancedStatsCard = ({ icon: Icon, value, label, description, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateCount = () => {
        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      };

      animateCount();
    }
  }, [isVisible, value]);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-2"
      style={{
        background: ENHANCED_DESIGN_CONFIG.effects.glass,
        border: ENHANCED_DESIGN_CONFIG.effects.border.glass,
        boxShadow: ENHANCED_DESIGN_CONFIG.effects.shadow.soft,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        opacity: isVisible ? 1 : 0,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: ENHANCED_DESIGN_CONFIG.animations.easing.elastic
      }}
    >
      {/* Hover effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-12"
            style={{
              background: ENHANCED_DESIGN_CONFIG.colors.gradient.glass,
              border: ENHANCED_DESIGN_CONFIG.effects.border.glass
            }}
          >
            <Icon className="w-7 h-7" style={{ color: ENHANCED_DESIGN_CONFIG.colors.text.primary }} />
          </div>
          <div className="text-4xl md:text-5xl font-bold leading-none"
            style={{ color: ENHANCED_DESIGN_CONFIG.colors.text.primary }}
          >
            {count}+
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-2"
          style={{ color: ENHANCED_DESIGN_CONFIG.colors.text.primary }}
        >
          {label}
        </h3>
        <p className="text-sm opacity-75"
          style={{ color: ENHANCED_DESIGN_CONFIG.colors.text.secondary }}
        >
          {description}
        </p>
      </div>

      {/* Animated border */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ color: ENHANCED_DESIGN_CONFIG.colors.accent.primary }}
      />
    </div>
  );
};

/**
 * Category Filter Chip
 */
const CategoryChip = ({ category, isActive, onClick }) => {
  const Icon = category.icon;
  
  return (
    <button
      onClick={() => onClick(category.id)}
      className="group relative px-5 py-3.5 md:px-6 md:py-4 rounded-2xl font-medium transition-all duration-500 flex items-center gap-3 overflow-hidden"
      style={{
        background: isActive 
          ? category.color + '20'
          : ENHANCED_DESIGN_CONFIG.effects.glass,
        color: isActive 
          ? category.color
          : ENHANCED_DESIGN_CONFIG.colors.text.secondary,
        border: isActive 
          ? `2px solid ${category.color}40`
          : ENHANCED_DESIGN_CONFIG.effects.border.glass,
        transform: isActive ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isActive 
          ? `0 10px 40px ${category.color}20, 0 0 20px ${category.color}10`
          : 'none'
      }}
    >
      {/* Animated background on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" />
      
      <Icon className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180" />
      <span className="relative whitespace-nowrap">{category.name}</span>
      <span className="px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300"
        style={{
          background: isActive 
            ? category.color + '30'
            : 'rgba(255,255,255,0.1)',
          color: isActive 
            ? '#FFFFFF'
            : ENHANCED_DESIGN_CONFIG.colors.text.secondary
        }}
      >
        {category.count}
      </span>
    </button>
  );
};

/**
 * Enhanced Project Card
 */
const EnhancedProjectCard = React.memo(({ project, index, onSelect, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (isVisible && cardRef.current) {
      const delay = index * ENHANCED_DESIGN_CONFIG.animations.stagger;
      setTimeout(() => {
        cardRef.current.style.opacity = '1';
        cardRef.current.style.transform = 'translateY(0) scale(1) rotateX(0)';
      }, delay);
    }
  }, [isVisible, index]);

  return (
    <div
      ref={cardRef}
      className="group relative cursor-pointer perspective-1000"
      style={{
        opacity: 0,
        transform: 'translateY(40px) scale(0.95) rotateX(10deg)',
        transition: `all ${ENHANCED_DESIGN_CONFIG.animations.duration.normal} ${ENHANCED_DESIGN_CONFIG.animations.easing.elastic}`,
        transitionDelay: `${index * 100}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-3xl transition-all duration-700"
        style={{
          background: ENHANCED_DESIGN_CONFIG.effects.glass,
          border: ENHANCED_DESIGN_CONFIG.effects.border.glass,
          transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? ENHANCED_DESIGN_CONFIG.effects.shadow.glow
            : ENHANCED_DESIGN_CONFIG.effects.shadow.soft
        }}
      >
        {/* Project Image/Video */}
        <div className="relative w-full h-64 md:h-72 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
          
          {project.type === 'video' ? (
            <>
              {project.thumbnail && (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000"
                  style={{
                    transform: isHovered ? 'scale(1.1) rotate(2deg)' : 'scale(1.05)'
                  }}
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${ENHANCED_DESIGN_CONFIG.colors.accent.primary}, ${ENHANCED_DESIGN_CONFIG.colors.accent.secondary})`,
                    transform: isHovered ? 'scale(1.2) rotate(180deg)' : 'scale(1)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                  }}
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>
            </>
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-1000"
              style={{
                transform: isHovered ? 'scale(1.15) rotate(1deg)' : 'scale(1.1)',
                filter: isHovered ? 'brightness(1.1) saturate(1.2)' : 'brightness(1)'
              }}
            />
          )}
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-30">
              <div className="px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-md"
                style={{
                  background: ENHANCED_DESIGN_CONFIG.colors.gradient.accent,
                  color: '#FFFFFF',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}
              >
                <Sparkles className="w-3 h-3" />
                Featured
              </div>
            </div>
          )}
          
          {/* Category Chip */}
          <div className="absolute top-4 right-4 z-30">
            <div className="px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md flex items-center gap-1.5"
              style={{
                background: 'rgba(0,0,0,0.6)',
                color: ENHANCED_DESIGN_CONFIG.colors.text.primary,
                border: ENHANCED_DESIGN_CONFIG.effects.border.glass
              }}
            >
              {project.category === 'mobile' ? (
                <Smartphone className="w-3 h-3" />
              ) : (
                <Globe className="w-3 h-3" />
              )}
              {project.category === 'mobile' ? 'Mobile' : 'Web'}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center justify-between"
            style={{ color: ENHANCED_DESIGN_CONFIG.colors.text.primary }}
          >
            <span className="truncate">{project.title}</span>
            <ChevronRight className={`w-5 h-5 transition-all duration-500 ${
              isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-50'
            }`} />
          </h3>
          
          <p className="text-sm mb-4 line-clamp-2 leading-relaxed opacity-80"
            style={{ color: ENHANCED_DESIGN_CONFIG.colors.text.secondary }}
          >
            {project.description}
          </p>
          
          {/* Stats Preview */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1 text-xs opacity-75"
              style={{ color: ENHANCED_DESIGN_CONFIG.colors.text.tertiary }}
            >
              <Clock className="w-3 h-3" />
              <span>{project.stats.timeline}</span>
            </div>
            <div className="flex items-center gap-1 text-xs opacity-75"
              style={{ color: ENHANCED_DESIGN_CONFIG.colors.text.tertiary }}
            >
              <Users className="w-3 h-3" />
              <span>{project.stats.team}</span>
            </div>
          </div>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300"
                style={{
                  background: ENHANCED_DESIGN_CONFIG.effects.glass,
                  color: ENHANCED_DESIGN_CONFIG.colors.text.secondary,
                  border: ENHANCED_DESIGN_CONFIG.effects.border.glass,
                  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)'
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1.5 text-xs font-medium rounded-lg opacity-75"
                style={{
                  background: ENHANCED_DESIGN_CONFIG.effects.glass,
                  color: ENHANCED_DESIGN_CONFIG.colors.text.tertiary,
                  border: ENHANCED_DESIGN_CONFIG.effects.border.glass
                }}
              >
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${ENHANCED_DESIGN_CONFIG.colors.accent.primary}15, transparent 70%)`,
            opacity: isHovered ? 1 : 0
          }}
        />
      </div>
    </div>
  );
});

EnhancedProjectCard.displayName = 'EnhancedProjectCard';

/**
 * Enhanced Project Modal
 */
const EnhancedProjectModal = React.memo(({ project, onClose }) => {
  const modalRef = useRef(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: 'rgba(10, 10, 10, 0.98)',
        backdropFilter: 'blur(20px)',
        animation: 'modalFadeIn 0.4s ease-out'
      }}
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl"
        style={{
          background: ENHANCED_DESIGN_CONFIG.effects.glass,
          border: ENHANCED_DESIGN_CONFIG.effects.border.accent,
          boxShadow: ENHANCED_DESIGN_CONFIG.effects.shadow.glow,
          animation: 'modalSlideIn 0.4s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90"
          style={{
            background: 'rgba(0,0,0,0.5)',
            border: ENHANCED_DESIGN_CONFIG.effects.border.glass,
            backdropFilter: 'blur(10px)'
          }}
          aria-label="Close modal"
        >
          <X className="w-6 h-6" style={{ color: ENHANCED_DESIGN_CONFIG.colors.text.primary }} />
        </button>

        {/* Modal Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left Column - Media */}
          <div className="relative h-64 lg:h-full min-h-[400px]">
            {project.type === 'video' ? (
              <video
                src={project.video}
                controls
                autoPlay
                muted
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent lg:bg-gradient-to-r" />
          </div>

          {/* Right Column - Details */}
          <div className="p-6 md:p-8 lg:p-10 overflow-y-auto">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1.5 rounded-full text-sm font-bold"
                  style={{
                    background: ENHANCED_DESIGN_CONFIG.colors.gradient.accent,
                    color: '#FFFFFF'
                  }}
                >
                  {project.category === 'mobile' ? 'Mobile App' : 'Web Application'}
                </span>
                {project.featured && (
                  <span className="px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5"
                    style={{
                      background: ENHANCED_DESIGN_CONFIG.colors.gradient.secondary,
                      color: '#FFFFFF'
                    }}
                  >
                    <Sparkles className="w-3 h-3" />
                    Featured Project
                  </span>
                )}
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: ENHANCED_DESIGN_CONFIG.colors.text.primary }}
              >
                {project.title}
              </h2>
              
              <p className="text-lg mb-6 leading-relaxed opacity-90"
                style={{ color: ENHANCED_DESIGN_CONFIG.colors.text.secondary }}
              >
                {project.description}
              </p>
            </div>

            {/* Tabs */}
            <div className="mb-6">
              <div className="flex border-b mb-4"
                style={{ borderColor: ENHANCED_DESIGN_CONFIG.colors.surface.tertiary }}
              >
                {['overview', 'technologies', 'impact'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="px-4 py-2 text-sm font-medium capitalize transition-colors relative"
                    style={{
                      color: activeTab === tab 
                        ? ENHANCED_DESIGN_CONFIG.colors.text.primary
                        : ENHANCED_DESIGN_CONFIG.colors.text.secondary
                    }}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{ background: ENHANCED_DESIGN_CONFIG.colors.gradient.primary }}
                      />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <div className="min-h-[200px]">
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl"
                        style={{
                          background: ENHANCED_DESIGN_CONFIG.colors.surface.secondary,
                          border: ENHANCED_DESIGN_CONFIG.effects.border.glass
                        }}
                      >
                        <div className="text-sm opacity-75 mb-1">Timeline</div>
                        <div className="font-semibold">{project.stats.timeline}</div>
                      </div>
                      <div className="p-4 rounded-2xl"
                        style={{
                          background: ENHANCED_DESIGN_CONFIG.colors.surface.secondary,
                          border: ENHANCED_DESIGN_CONFIG.effects.border.glass
                        }}
                      >
                        <div className="text-sm opacity-75 mb-1">Team Size</div>
                        <div className="font-semibold">{project.stats.team}</div>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl"
                      style={{
                        background: ENHANCED_DESIGN_CONFIG.colors.surface.secondary,
                        border: ENHANCED_DESIGN_CONFIG.effects.border.glass
                      }}
                    >
                      <div className="text-sm opacity-75 mb-1">Complexity</div>
                      <div className="font-semibold">{project.stats.complexity}</div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'technologies' && (
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          background: ENHANCED_DESIGN_CONFIG.effects.glass,
                          color: ENHANCED_DESIGN_CONFIG.colors.text.primary,
                          border: ENHANCED_DESIGN_CONFIG.effects.border.glass
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                {activeTab === 'impact' && (
                  <div className="p-4 rounded-2xl"
                    style={{
                      background: ENHANCED_DESIGN_CONFIG.colors.surface.secondary,
                      border: ENHANCED_DESIGN_CONFIG.effects.border.glass
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5" style={{ color: ENHANCED_DESIGN_CONFIG.colors.accent.primary }} />
                      <div className="font-semibold">Key Impact</div>
                    </div>
                    <p className="opacity-90"
                      style={{ color: ENHANCED_DESIGN_CONFIG.colors.text.secondary }}
                    >
                      {project.stats.impact}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t"
              style={{ borderColor: ENHANCED_DESIGN_CONFIG.colors.surface.tertiary }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: ENHANCED_DESIGN_CONFIG.colors.gradient.primary,
                  color: '#FFFFFF',
                  boxShadow: `0 10px 40px ${ENHANCED_DESIGN_CONFIG.colors.accent.primary}30`
                }}
              >
                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                View Live Project
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: ENHANCED_DESIGN_CONFIG.colors.surface.secondary,
                  color: ENHANCED_DESIGN_CONFIG.colors.text.primary,
                  border: ENHANCED_DESIGN_CONFIG.effects.border.glass
                }}
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(20px);
          }
        }
        
        @keyframes modalSlideIn {
          from {
            transform: scale(0.95) translateY(40px);
            opacity: 0;
          }
          to {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
});

EnhancedProjectModal.displayName = 'EnhancedProjectModal';

// ============================================
// MAIN COMPONENT
// ============================================
export default function EnhancedPortfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);
  const { t } = useI18n();

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return ENHANCED_PROJECTS_DATA;
    if (activeFilter === 'featured') return ENHANCED_PROJECTS_DATA.filter(p => p.featured);
    return ENHANCED_PROJECTS_DATA.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  // Handlers
  const handleProjectSelect = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Enhanced stats
  const enhancedStats = [
    {
      icon: Layers,
      value: ENHANCED_PROJECTS_DATA.length,
      label: "Projects Delivered",
      description: "Successful implementations"
    },
    {
      icon: Award,
      value: ENHANCED_PROJECTS_DATA.filter(p => p.featured).length,
      label: "Featured Works",
      description: "Highlight projects"
    },
    {
      icon: Code2,
      value: new Set(ENHANCED_PROJECTS_DATA.flatMap(p => p.technologies)).size,
      label: "Technologies",
      description: "Mastered stack"
    },
    {
      icon: Users,
      value: ENHANCED_PROJECTS_DATA.reduce((sum, p) => {
        const teamSize = parseInt(p.stats.team.split(' ')[0]) || 1;
        return sum + teamSize;
      }, 0),
      label: "Team Members",
      description: "Collaborated with"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="min-h-screen relative"
      style={{
        background: ENHANCED_DESIGN_CONFIG.colors.background
      }}
    >
      {/* Background Elements */}
      <FloatingBackground />
      
      {/* Main Content */}
      <div className={`relative z-10 ${ENHANCED_DESIGN_CONFIG.spacing.container} ${ENHANCED_DESIGN_CONFIG.spacing.section}`}>
        
        {/* Header Section */}
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-md"
            style={{
              background: ENHANCED_DESIGN_CONFIG.effects.glass,
              border: ENHANCED_DESIGN_CONFIG.effects.border.glass
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: ENHANCED_DESIGN_CONFIG.colors.accent.primary }} />
            <span className="text-sm font-medium" style={{ color: ENHANCED_DESIGN_CONFIG.colors.text.primary }}>
              Portfolio Showcase
            </span>
          </div>
          
          <h1 className={`${ENHANCED_DESIGN_CONFIG.typography.h1} mb-6 bg-clip-text text-transparent`}
            style={{
              backgroundImage: ENHANCED_DESIGN_CONFIG.colors.gradient.primary,
              WebkitBackgroundClip: 'text'
            }}
          >
            {t('portfolio.title')}
          </h1>
          
          <p className={`${ENHANCED_DESIGN_CONFIG.typography.body} max-w-3xl mx-auto opacity-90`}
            style={{ color: ENHANCED_DESIGN_CONFIG.colors.text.secondary }}
          >
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {enhancedStats.map((stat, index) => (
            <EnhancedStatsCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {ENHANCED_CATEGORIES.map((category) => (
            <CategoryChip
              key={category.id}
              category={category}
              isActive={activeFilter === category.id}
              onClick={setActiveFilter}
            />
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <EnhancedProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={handleProjectSelect}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center backdrop-blur-md"
              style={{
                background: ENHANCED_DESIGN_CONFIG.effects.glass,
                border: ENHANCED_DESIGN_CONFIG.effects.border.glass
              }}
            >
              <Filter className="w-12 h-12" style={{ color: ENHANCED_DESIGN_CONFIG.colors.accent.primary }} />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: ENHANCED_DESIGN_CONFIG.colors.text.primary }}>
              No projects found
            </h3>
            <p className="opacity-75 max-w-md mx-auto" style={{ color: ENHANCED_DESIGN_CONFIG.colors.text.secondary }}>
              Try selecting a different category to explore more projects.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-6 px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105"
              style={{
                background: ENHANCED_DESIGN_CONFIG.colors.gradient.glass,
                color: ENHANCED_DESIGN_CONFIG.colors.text.primary,
                border: ENHANCED_DESIGN_CONFIG.effects.border.glass
              }}
            >
              View All Projects
            </button>
          </div>
        )}

        {/* View More (if applicable) */}
        {filteredProjects.length > 0 && filteredProjects.length < ENHANCED_PROJECTS_DATA.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setActiveFilter('all')}
              className="group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              style={{
                background: ENHANCED_DESIGN_CONFIG.effects.glass,
                color: ENHANCED_DESIGN_CONFIG.colors.text.primary,
                border: ENHANCED_DESIGN_CONFIG.effects.border.accent
              }}
            >
              <span>View All Projects</span>
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <EnhancedProjectModal
        project={selectedProject}
        onClose={handleModalClose}
      />

      {/* Global Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}