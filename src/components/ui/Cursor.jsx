// ============================================
// COMPONENTS/UI/CURSOR.JSX
// Curseur custom accessible
// ============================================

import { memo } from 'react';
import { cn } from '../../lib/utils';

export const Cursor = memo(function Cursor({ dotRef, outlineRef, isActive }) {
  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div
        ref={outlineRef}
        className={cn('cursor-outline', isActive && 'cursor-outline--active')}
        aria-hidden="true"
      />
    </>
  );
});
