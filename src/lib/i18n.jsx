// ============================================
// LIB/I18N.JSX
// Gestion de l'internationalisation
// ============================================

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from '../data/content';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('preferredLang') || 'en';
    }
    return 'en';
  });

  const t = useCallback(
    (key) => {
      return translations[language]?.[key] || translations.en[key] || key;
    },
    [language]
  );

  const changeLanguage = useCallback((lang) => {
    setLanguage(lang);
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
