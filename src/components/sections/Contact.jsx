// ============================================
// COMPONENTS/SECTIONS/CONTACT.JSX
// Section contact avec CTA
// ============================================

import { memo } from 'react';
import { useLanguage } from '../../lib/i18n';
import { siteConfig } from '../../data/content';

export const Contact = memo(function Contact({ onHoverEnter, onHoverLeave }) {
  const { t } = useLanguage();

  return (
    <section className="section-padding contact" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <h2 className="label" id="contact-heading">
          {t('label_contact')}
        </h2>
        <p className="contact__subtitle">{t('idea')}</p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="contact__cta hover-trigger"
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
        >
          {t('talk')}
        </a>
      </div>
    </section>
  );
});
