// ============================================
// COMPONENTS/UI/TECH-CARD.JSX
// Carte technologie réutilisable
// ============================================

import { memo } from 'react';
import { icons } from './Icons';

export const TechCard = memo(function TechCard({ name, icon, onHoverEnter, onHoverLeave }) {
  return (
    <div
      className="tech-card hover-trigger"
      role="listitem"
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
    >
      <span className="tech-card__icon">{icons[icon]}</span>
      <span className="tech-card__name">{name}</span>
    </div>
  );
});
