// ============================================
// COMPONENTS/SECTIONS/HERO.JSX
// Section hero avec titre animé
// ============================================

import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../lib/i18n';
import { useFitText } from '../../hooks';
import { icons } from '../ui/Icons';

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Hero = memo(function Hero({ onHoverEnter, onHoverLeave }) {
  const { t, language } = useLanguage();
  const heroDesc = t('hero_desc');
  const { containerRef, registerElement } = useFitText([language]);

  const createRef = useCallback(
    (el) => {
      registerElement(el);
    },
    [registerElement]
  );

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container" ref={containerRef}>
        <h1 id="hero-title" className="hero__title">
          <motion.span
            ref={createRef}
            className="hero__title-line"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            {t('hero_1')}
          </motion.span>
          <motion.span
            ref={createRef}
            className="hero__title-line hero__title-line--outline"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            {t('hero_2')}
          </motion.span>
          <motion.span
            ref={createRef}
            className="hero__title-line"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            {t('hero_3')}
          </motion.span>
        </h1>

        <div className="hero__footer">
          <div>
            <p className="hero__desc">
              {heroDesc.text} <strong>{heroDesc.highlight1}</strong> {heroDesc.middle}{' '}
              <strong>{heroDesc.highlight2}</strong>
              {heroDesc.end}
            </p>

            <motion.div
              className="hero__stack"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              <div className="hero__stack-label">{t('stack_label')}</div>
              <div className="hero__stack-icons" role="list" aria-label="Tech stack">
                {['react', 'javascript', 'threejs', 'nodejs'].map((icon) => (
                  <span
                    key={icon}
                    className="hero__stack-icon"
                    role="listitem"
                    onMouseEnter={onHoverEnter}
                    onMouseLeave={onHoverLeave}
                  >
                    {icons[icon]}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero__scroll"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            aria-hidden="true"
          >
            {icons.arrowDown}
          </motion.div>
        </div>
      </div>
    </section>
  );
});
