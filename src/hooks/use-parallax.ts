import { useRef, useEffect, useState, useCallback } from "react";

/**
 * Returns a CSS translateY value based on scroll position relative to the element.
 * speed < 1 = moves slower than content (background parallax)
 * speed > 1 = moves faster (foreground effect)
 */
export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowH = window.innerHeight;
    // How far the element center is from viewport center, normalized
    const centerOffset = rect.top + rect.height / 2 - windowH / 2;
    setOffset(centerOffset * (1 - speed) * 0.15);
  }, [speed]);

  useEffect(() => {
    // Use passive scroll + rAF for smooth performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  return { ref, offset };
};
