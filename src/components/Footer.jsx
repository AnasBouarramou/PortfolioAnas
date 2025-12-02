// ============================================
// COMPONENTS/FOOTER.JSX
// Pied de page
// ============================================

import { memo } from 'react';
import { socialLinks, siteConfig } from '../data/content';

export const Footer = memo(function Footer({ onHoverEnter, onHoverLeave }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div>&copy; {currentYear} {siteConfig.name}</div>
      <div className="footer__socials">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="footer__link hover-trigger"
            aria-label={link.ariaLabel}
            onMouseEnter={onHoverEnter}
            onMouseLeave={onHoverLeave}
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
});
