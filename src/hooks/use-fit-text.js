// ============================================
// HOOKS/USE-FIT-TEXT.JS
// Ajustement dynamique : chaque mot a sa propre font-size
// Pour que chaque ligne occupe exactement 100% de la largeur
// ============================================

import { useEffect, useRef, useCallback } from "react";

export function useFitText(dependencies = [], selector = ".hero__title-text") {
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

    elementsRef.current.forEach((element) => {
      if (!element) return;

      // Chercher le span interne ou utiliser l'élément directement
      const textSpan = element.querySelector(selector) || element;
      if (!textSpan) return;

      // Reset pour mesurer
      textSpan.style.fontSize = "100px";

      // Mesurer la largeur du texte à 100px
      const textWidth = textSpan.scrollWidth;

      // Calculer la font-size pour que le texte occupe 100% du container
      const newFontSize = Math.floor((containerWidth / textWidth) * 100);

      // Appliquer (avec min/max pour sécurité)
      textSpan.style.fontSize = `${Math.min(Math.max(newFontSize, 40), 400)}px`;
    });
  }, [selector]);

  useEffect(() => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        setTimeout(fitText, 50);
      });
    } else {
      setTimeout(fitText, 150);
    }

    const handleResize = () => {
      requestAnimationFrame(fitText);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [fitText]);

  useEffect(() => {
    const timeout = setTimeout(fitText, 100);
    return () => clearTimeout(timeout);
  }, [fitText, ...dependencies]);

  return { containerRef, registerElement };
}
