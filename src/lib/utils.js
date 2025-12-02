// ============================================
// LIB/UTILS.JS
// Fonctions utilitaires
// ============================================

/**
 * Combine des classes CSS conditionnellement
 * @param  {...string} classes - Classes à combiner
 * @returns {string} Classes combinées
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Interpolation linéaire
 * @param {number} a - Valeur de départ
 * @param {number} b - Valeur d'arrivée
 * @param {number} n - Facteur d'interpolation (0-1)
 * @returns {number} Valeur interpolée
 */
export function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

/**
 * Vérifie si le device a un pointeur fin (souris)
 * @returns {boolean}
 */
export function hasFinePointer() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: fine)').matches;
}

/**
 * Debounce une fonction
 * @param {Function} func - Fonction à debounce
 * @param {number} wait - Temps d'attente en ms
 * @returns {Function} Fonction debouncée
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
