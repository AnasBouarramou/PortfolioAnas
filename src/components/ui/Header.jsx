// ============================================
// COMPONENTS/UI/HEADER.JSX
// Navigation & Switch langue
// ============================================

import { memo } from 'react';
import { useLanguage } from '../../lib/i18n';
import { siteConfig } from '../../data/content';
import { cn } from '../../lib/utils';

export const Header = memo(function Header({ onHoverEnter, onHoverLeave }) {
  const { language, t, changeLanguage } = useLanguage();

  return (
    <header className="header" role="banner">
      <nav role="navigation" aria-label="Main navigation">
        <div className="header__logo">{siteConfig.logo}</div>
      </nav>

      <div className="header__right">
        {/* Language Switcher */}
        <div className="lang-switch" role="group" aria-label="Language selection">
          <button
            type="button"
            className={cn('lang-switch__btn', language === 'en' && 'lang-switch__btn--active')}
            onClick={() => changeLanguage('en')}
            aria-pressed={language === 'en'}
            onMouseEnter={onHoverEnter}
            onMouseLeave={onHoverLeave}
          >
            EN
          </button>
          <span className="lang-switch__separator" aria-hidden="true">
            /
          </span>
          <button
            type="button"
            className={cn('lang-switch__btn', language === 'fr' && 'lang-switch__btn--active')}
            onClick={() => changeLanguage('fr')}
            aria-pressed={language === 'fr'}
            onMouseEnter={onHoverEnter}
            onMouseLeave={onHoverLeave}
          >
            FR
          </button>
        </div>

        {/* Status Badge */}
        <div className="status" aria-label="Availability status">
          <span className="status__dot" aria-hidden="true" />
          <span className="status__text">{t('status')}</span>
        </div>
      </div>
    </header>
  );
});
