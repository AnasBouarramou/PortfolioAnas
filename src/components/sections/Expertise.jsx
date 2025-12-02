// ============================================
// COMPONENTS/SECTIONS/EXPERTISE.JSX
// Section expertise / about
// ============================================

import { memo } from 'react';
import { useLanguage } from '../../lib/i18n';
import { TechCard } from '../ui/TechCard';
import { technologies } from '../../data/content';

export const Expertise = memo(function Expertise({ onHoverEnter, onHoverLeave }) {
  const { t } = useLanguage();
  const bio = t('bio');

  return (
    <section className="section-padding" aria-labelledby="expertise-heading">
      <div className="container">
        <h2 className="label" id="expertise-heading">
          {t('label_expertise')}
        </h2>

        <div className="expertise__grid">
          <div>
            <p className="expertise__bio">
              {bio.text} <strong>{bio.highlight1}</strong> {bio.middle}{' '}
              <strong>{bio.highlight2}</strong>
              {bio.end}
            </p>
            <a
              href="#"
              className="expertise__resume hover-trigger"
              onMouseEnter={onHoverEnter}
              onMouseLeave={onHoverLeave}
            >
              {t('resume')}
            </a>
          </div>

          <div>
            <div className="expertise__tech-label">{t('core_tech')}</div>
            <div className="expertise__tech-grid" role="list">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  onHoverEnter={onHoverEnter}
                  onHoverLeave={onHoverLeave}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
