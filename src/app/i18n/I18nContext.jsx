"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const I18nContext = createContext();

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

export const I18nProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');
  const [mounted, setMounted] = useState(false);

  // Load locale from localStorage on mount (client-side only)
  useEffect(() => {
    setMounted(true);
    
    // Check if we're on the client
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale');
      if (savedLocale && (savedLocale === 'en' || savedLocale === 'fr')) {
        setLocale(savedLocale);
      } else {
        // Detect browser language
        const browserLang = navigator.language.split('-')[0];
        if (browserLang === 'fr') {
          setLocale('fr');
        }
      }
    }
  }, []);

  // Save locale to localStorage when it changes (client-side only)
  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem('locale', locale);
    }
  }, [locale, mounted]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[locale];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const changeLocale = (newLocale) => {
    if (newLocale === 'en' || newLocale === 'fr') {
      setLocale(newLocale);
    }
  };

  return (
    <I18nContext.Provider value={{ locale, t, changeLocale }}>
      {children}
    </I18nContext.Provider>
  );
};

