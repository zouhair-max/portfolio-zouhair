"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useI18n } from '../i18n/I18nContext';
import emailjs from '@emailjs/browser';
import { 
  Mail, Phone, MapPin, Send, CheckCircle, AlertCircle,
  Linkedin, Github, Briefcase
} from 'lucide-react';

// ============================================
// DESIGN SYSTEM & CONSTANTS
// ============================================
const DESIGN_CONFIG = {
  colors: {
    background: '#0a0a0a',
    surface: '#1a1a1a',
    surfaceHover: '#252525',
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3',
      tertiary: '#808080'
    },
    accent: '#8d6a9f',
    accentHover: '#9d7aaf',
    accentLight: '#8d6a9f40',
    border: 'rgba(255,255,255,0.1)',
    success: '#10B981',
    error: '#EF4444'
  },
  animations: {
    duration: 800,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    stagger: 100
  }
};

// ============================================
// COMPONENTS
// ============================================

/**
 * Contact Info Card Component
 */
const ContactInfoCard = ({ icon: Icon, title, value, href, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const content = (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 cursor-pointer"
      style={{
        background: DESIGN_CONFIG.colors.surface,
        border: `1px solid ${DESIGN_CONFIG.colors.border}`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = DESIGN_CONFIG.colors.surfaceHover;
        e.currentTarget.style.borderColor = DESIGN_CONFIG.colors.accent;
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = `0 20px 40px ${DESIGN_CONFIG.colors.accentLight}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = DESIGN_CONFIG.colors.surface;
        e.currentTarget.style.borderColor = DESIGN_CONFIG.colors.border;
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-5"
          style={{
            background: `${DESIGN_CONFIG.colors.accent}20`,
            border: `2px solid ${DESIGN_CONFIG.colors.accent}40`
          }}
        >
          <Icon className="w-7 h-7" style={{ color: DESIGN_CONFIG.colors.accent }} />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium mb-2"
            style={{ color: DESIGN_CONFIG.colors.text.secondary }}
          >
            {title}
          </h3>
          <p className="text-lg font-semibold"
            style={{ color: DESIGN_CONFIG.colors.text.primary }}
          >
            {value}
          </p>
        </div>
      </div>
      
      {/* Hover Glow */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at center, ${DESIGN_CONFIG.colors.accent}10, transparent 70%)`
        }}
      />
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
};

/**
 * Social Link Component
 */
const SocialLink = ({ icon: Icon, label, href, color, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const linkRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (linkRef.current) {
      observer.observe(linkRef.current);
    }

    return () => {
      if (linkRef.current) {
        observer.unobserve(linkRef.current);
      }
    };
  }, []);

  return (
    <a
      ref={linkRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300"
      style={{
        background: DESIGN_CONFIG.colors.surface,
        border: `1px solid ${DESIGN_CONFIG.colors.border}`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
        transitionDelay: `${delay}ms`
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = DESIGN_CONFIG.colors.surfaceHover;
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.transform = 'translateX(5px)';
        e.currentTarget.style.boxShadow = `0 10px 30px ${color}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = DESIGN_CONFIG.colors.surface;
        e.currentTarget.style.borderColor = DESIGN_CONFIG.colors.border;
        e.currentTarget.style.transform = 'translateX(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{
          background: `${color}20`,
          border: `2px solid ${color}40`
        }}
      >
        <Icon className="w-5 h-5" style={{ color: color }} />
      </div>
      <span className="font-medium" style={{ color: DESIGN_CONFIG.colors.text.primary }}>
        {label}
      </span>
      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          style={{ color: DESIGN_CONFIG.colors.text.secondary }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
};

/**
 * Form Input Component
 */
const FormInput = ({ label, type = 'text', placeholder, value, onChange, error, icon: Icon, required = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    setHasValue(value && value.length > 0);
  }, [value]);

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2"
        style={{ color: DESIGN_CONFIG.colors.text.secondary }}
      >
        {label} {required && <span style={{ color: DESIGN_CONFIG.colors.error }}>*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
            style={{ color: isFocused ? DESIGN_CONFIG.colors.accent : DESIGN_CONFIG.colors.text.tertiary }}
          >
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setHasValue(e.target.value.length > 0);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          required={required}
          className="w-full px-4 py-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2"
          style={{
            background: DESIGN_CONFIG.colors.surface,
            border: `2px solid ${error ? DESIGN_CONFIG.colors.error : isFocused ? DESIGN_CONFIG.colors.accent : DESIGN_CONFIG.colors.border}`,
            color: DESIGN_CONFIG.colors.text.primary,
            paddingLeft: Icon ? '3rem' : '1rem',
            boxShadow: isFocused ? `0 0 0 4px ${DESIGN_CONFIG.colors.accentLight}` : 'none'
          }}
        />
        {hasValue && !error && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <CheckCircle className="w-5 h-5" style={{ color: DESIGN_CONFIG.colors.success }} />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm flex items-center gap-2"
          style={{ color: DESIGN_CONFIG.colors.error }}
        >
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
};

/**
 * Form Textarea Component
 */
const FormTextarea = ({ label, placeholder, value, onChange, error, required = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    setHasValue(value && value.length > 0);
  }, [value]);

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2"
        style={{ color: DESIGN_CONFIG.colors.text.secondary }}
      >
        {label} {required && <span style={{ color: DESIGN_CONFIG.colors.error }}>*</span>}
      </label>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setHasValue(e.target.value.length > 0);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          required={required}
          rows={6}
          className="w-full px-4 py-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
          style={{
            background: DESIGN_CONFIG.colors.surface,
            border: `2px solid ${error ? DESIGN_CONFIG.colors.error : isFocused ? DESIGN_CONFIG.colors.accent : DESIGN_CONFIG.colors.border}`,
            color: DESIGN_CONFIG.colors.text.primary,
            boxShadow: isFocused ? `0 0 0 4px ${DESIGN_CONFIG.colors.accentLight}` : 'none'
          }}
        />
        {hasValue && !error && (
          <div className="absolute right-4 top-4">
            <CheckCircle className="w-5 h-5" style={{ color: DESIGN_CONFIG.colors.success }} />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm flex items-center gap-2"
          style={{ color: DESIGN_CONFIG.colors.error }}
        >
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
      <p className="mt-2 text-xs"
        style={{ color: DESIGN_CONFIG.colors.text.tertiary }}
      >
        {value.length} characters
      </p>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================
export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const sectionRef = useRef(null);
  const { t } = useI18n();

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Initialize EmailJS on component mount
  useEffect(() => {
    // Initialize EmailJS with your public key
    // You can get this from https://www.emailjs.com/
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      // If EmailJS is not configured, use mailto as fallback
      if (!serviceId || !templateId || !publicKey) {
        // Fallback to mailto link
        const mailtoLink = `mailto:zouhairboudeir0@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        window.location.href = mailtoLink;
        
        // Show success message
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
        
        setIsSubmitting(false);
        return;
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'zouhairboudeir0@gmail.com', // Your email where you'll receive messages
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen relative overflow-hidden"
      style={{
        background: DESIGN_CONFIG.colors.background
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 opacity-10"
          style={{
            background: `radial-gradient(circle, ${DESIGN_CONFIG.colors.accent}, transparent)`,
            filter: 'blur(80px)'
          }}
        />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 opacity-10"
          style={{
            background: `radial-gradient(circle, ${DESIGN_CONFIG.colors.accent}, transparent)`,
            filter: 'blur(80px)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: `${DESIGN_CONFIG.colors.accent}20`,
              border: `1px solid ${DESIGN_CONFIG.colors.accent}40`
            }}
          >
            <Mail className="w-4 h-4" style={{ color: DESIGN_CONFIG.colors.accent }} />
            <span className="text-sm font-medium" style={{ color: DESIGN_CONFIG.colors.accent }}>
              {t('contact.title')}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{ color: DESIGN_CONFIG.colors.text.primary }}
          >
            {t('contact.title')}
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-4"
            style={{ color: DESIGN_CONFIG.colors.text.secondary }}
          >
            {t('contact.subtitle')}
          </p>
          <p className="text-base max-w-2xl mx-auto"
            style={{ color: DESIGN_CONFIG.colors.text.tertiary }}
          >
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column - Contact Info & Social */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h3 className="text-2xl font-bold mb-6"
                style={{ color: DESIGN_CONFIG.colors.text.primary }}
              >
                {t('contact.info.title')}
              </h3>
              <div className="space-y-4">
                <ContactInfoCard
                  icon={Mail}
                  title={t('contact.info.email')}
                  value={t('contact.info.emailValue')}
                  href={`mailto:${t('contact.info.emailValue')}`}
                  delay={0}
                />
                <ContactInfoCard
                  icon={Phone}
                  title={t('contact.info.phone')}
                  value={t('contact.info.phoneValue')}
                  href={`tel:${t('contact.info.phoneValue')}`}
                  delay={100}
                />
                <ContactInfoCard
                  icon={MapPin}
                  title={t('contact.info.location')}
                  value={t('contact.info.locationValue')}
                  delay={200}
                />
                <ContactInfoCard
                  icon={Briefcase}
                  title={t('contact.info.availability')}
                  value={t('contact.info.availabilityValue')}
                  delay={300}
                />
              </div>
            </div>

            {/* Social Links */}
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h3 className="text-2xl font-bold mb-6"
                style={{ color: DESIGN_CONFIG.colors.text.primary }}
              >
                {t('contact.social.title')}
              </h3>
              <div className="space-y-3">
                <SocialLink
                  icon={Linkedin}
                  label={t('contact.social.linkedin')}
                  href="https://www.linkedin.com/in/boudeir-zouhair2005/"
                  color="#0A66C2"
                  delay={0}
                />
                <SocialLink
                  icon={Github}
                  label={t('contact.social.github')}
                  href="https://github.com/zouhair-max"
                  color="#FFFFFF"
                  delay={100}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <form
                onSubmit={handleSubmit}
                className="relative overflow-hidden rounded-2xl p-8 lg:p-10"
                style={{
                  background: DESIGN_CONFIG.colors.surface,
                  border: `1px solid ${DESIGN_CONFIG.colors.border}`
                }}
              >
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 rounded-xl flex items-center gap-3 animate-slide-down"
                    style={{
                      background: `${DESIGN_CONFIG.colors.success}20`,
                      border: `1px solid ${DESIGN_CONFIG.colors.success}40`
                    }}
                  >
                    <CheckCircle className="w-6 h-6" style={{ color: DESIGN_CONFIG.colors.success }} />
                    <p className="font-medium" style={{ color: DESIGN_CONFIG.colors.success }}>
                      {t('contact.form.success')}
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 rounded-xl flex items-center gap-3 animate-slide-down"
                    style={{
                      background: `${DESIGN_CONFIG.colors.error}20`,
                      border: `1px solid ${DESIGN_CONFIG.colors.error}40`
                    }}
                  >
                    <AlertCircle className="w-6 h-6" style={{ color: DESIGN_CONFIG.colors.error }} />
                    <p className="font-medium" style={{ color: DESIGN_CONFIG.colors.error }}>
                      {t('contact.form.error')}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label={t('contact.form.name')}
                    type="text"
                    placeholder={t('contact.form.namePlaceholder')}
                    value={formData.name}
                    onChange={(value) => setFormData({ ...formData, name: value })}
                    error={errors.name}
                    icon={null}
                    required
                  />
                  <FormInput
                    label={t('contact.form.email')}
                    type="email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    value={formData.email}
                    onChange={(value) => setFormData({ ...formData, email: value })}
                    error={errors.email}
                    icon={Mail}
                    required
                  />
                </div>

                <FormInput
                  label={t('contact.form.subject')}
                  type="text"
                  placeholder={t('contact.form.subjectPlaceholder')}
                  value={formData.subject}
                  onChange={(value) => setFormData({ ...formData, subject: value })}
                  error={errors.subject}
                  icon={null}
                  required
                />

                <FormTextarea
                  label={t('contact.form.message')}
                  placeholder={t('contact.form.messagePlaceholder')}
                  value={formData.message}
                  onChange={(value) => setFormData({ ...formData, message: value })}
                  error={errors.message}
                  required
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full md:w-auto px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  style={{
                    background: isSubmitting 
                      ? DESIGN_CONFIG.colors.accentLight 
                      : DESIGN_CONFIG.colors.accent,
                    color: DESIGN_CONFIG.colors.text.primary,
                    boxShadow: isSubmitting 
                      ? 'none' 
                      : `0 10px 30px ${DESIGN_CONFIG.colors.accentLight}`
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.background = DESIGN_CONFIG.colors.accentHover;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = `0 15px 40px ${DESIGN_CONFIG.colors.accentLight}`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.background = DESIGN_CONFIG.colors.accent;
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = `0 10px 30px ${DESIGN_CONFIG.colors.accentLight}`;
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{t('contact.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{t('contact.form.send')}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}

