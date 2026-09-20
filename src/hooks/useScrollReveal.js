import { useEffect, useRef } from 'react';

/**
 * Custom hook that applies reveal animations to elements on scroll
 * using IntersectionObserver. Respects prefers-reduced-motion.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px 0px -60px 0px' }
    );

    const el = ref.current;
    if (el) {
      const children = el.querySelectorAll('.reveal-item');
      if (children.length > 0) {
        children.forEach((child) => observer.observe(child));
      } else {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}
