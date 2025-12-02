// ============================================
// COMPONENTS/UI/BACKGROUND.JSX
// Effets visuels de fond (ambient lights + grid)
// ============================================

import { memo } from 'react';

export const Background = memo(function Background() {
  return (
    <>
      {/* Ambient Lights */}
      <div className="ambient-light ambient-light--top" aria-hidden="true" />
      <div className="ambient-light ambient-light--bottom" aria-hidden="true" />
      <div className="ambient-light ambient-light--center" aria-hidden="true" />

      {/* Background Grid */}
      <div className="bg-grid" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-grid__line" />
        ))}
      </div>
    </>
  );
});
