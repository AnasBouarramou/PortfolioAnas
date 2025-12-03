// ============================================
// COMPONENTS/SECTIONS/CONTACT.JSX
// Section contact avec CTA responsive
// ============================================

import { memo, useCallback } from "react";
import { useLanguage } from "../../lib/i18n";
import { siteConfig } from "../../data/content";
import { useFitText } from "../../hooks";

export const Contact = memo(function Contact({ onHoverEnter, onHoverLeave }) {
  const { t, language } = useLanguage();
  const { containerRef, registerElement } = useFitText(
    [language],
    ".contact__cta-text"
  );

  const createRef = useCallback(
    (el) => {
      registerElement(el);
    },
    [registerElement]
  );

  return (
    <section
      className="section-padding contact"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container" ref={containerRef}>
        <h2 className="label" id="contact-heading">
          {t("label_contact")}
        </h2>
        <p className="contact__subtitle">{t("idea")}</p>
        <a
          ref={createRef}
          href={`mailto:${siteConfig.email}`}
          className="contact__cta hover-trigger"
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
        >
          <span className="contact__cta-text">{t("talk")}</span>
        </a>
      </div>
    </section>
  );
});
