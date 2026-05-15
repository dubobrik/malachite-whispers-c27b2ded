import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the element matching `location.hash` whenever the hash or
 * pathname changes. Fixes anchor links on mobile where iOS Safari can
 * fail to scroll on initial paint (#about, #contact, etc.).
 */
const HashScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }
    const id = hash.replace("#", "");
    // Defer until after layout to ensure the section exists.
    const tryScroll = (attempt = 0) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempt < 10) {
        setTimeout(() => tryScroll(attempt + 1), 100);
      }
    };
    tryScroll();
  }, [pathname, hash]);

  return null;
};

export default HashScroll;
