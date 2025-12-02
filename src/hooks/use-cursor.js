// ============================================
// HOOKS/USE-CURSOR.JS
// Gestion du curseur custom
// ============================================

import { useState, useEffect, useCallback, useRef } from 'react';
import { lerp, hasFinePointer } from '../lib/utils';

export function useCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    setIsFinePointer(hasFinePointer());
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, 0.15);
      cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, 0.15);

      if (outlineRef.current) {
        outlineRef.current.style.left = `${cursorPos.current.x}px`;
        outlineRef.current.style.top = `${cursorPos.current.y}px`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isFinePointer]);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  return {
    dotRef,
    outlineRef,
    isHovering,
    isFinePointer,
    cursorPos,
    handleMouseEnter,
    handleMouseLeave,
  };
}
