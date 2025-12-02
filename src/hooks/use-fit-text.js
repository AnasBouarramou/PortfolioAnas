// ============================================
// HOOKS/USE-FIT-TEXT.JS
// Ajustement dynamique de la taille du texte
// ============================================

import { useEffect, useRef, useCallback } from 'react';

export function useFitText(dependencies = []) {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  const registerElement = useCallback((el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  }, []);

  const fitText = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;

    elementsRef.current.forEach((span) => {
      if (!span) return;

      // Reset pour mesurer correctement
      span.style.fontSize = '';

      let fontSize = Math.min(containerWidth * 0.12, 160);
      span.style.fontSize = `${fontSize}px`;

      // Réduire jusqu'à ce que ça tienne
      while (span.scrollWidth > containerWidth && fontSize > 20) {
        fontSize -= 2;
        span.style.fontSize = `${fontSize}px`;
      }
    });
  }, []);

  useEffect(() => {
    fitText();

    const handleResize = () => fitText();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [fitText]);

  // Re-fit quand les dépendances changent (ex: langue)
  useEffect(() => {
    const timeout = setTimeout(fitText, 10);
    return () => clearTimeout(timeout);
  }, [fitText, ...dependencies]);

  return { containerRef, registerElement };
}
