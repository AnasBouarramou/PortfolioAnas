// ============================================
// COMPONENTS/LAYOUT.JSX
// Layout global avec SEO
// ============================================

import { useEffect } from 'react';
import { useLanguage } from '../lib/i18n';

export function Layout({ children }) {
  const { t, language } = useLanguage();
  const meta = t('meta');

  useEffect(() => {
    // Update document title
    document.title = meta.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', meta.description);
    }

    // Update language attribute
    document.documentElement.lang = language;
  }, [meta, language]);

  return <>{children}</>;
}
