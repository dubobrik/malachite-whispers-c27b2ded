import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Gem } from "lucide-react";

const navLinks = [
  { label: "Услуги", href: "#uslugi" },
  { label: "Обо мне", href: "#about" },
  { label: "Контакты", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setOpen(false);
    const id = href.slice(1);
    // Defer so the closing menu animation doesn't fight the scroll on iOS.
    const scroll = (attempt = 0) => {
      const el = id ? document.getElementById(id) : null;
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 60;
        window.scrollTo({ top, behavior: "smooth" });
        history.replaceState(null, "", href);
      } else if (!id) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (attempt < 8) {
        setTimeout(() => scroll(attempt + 1), 80);
      }
    };
    setTimeout(scroll, 60);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'hsl(160 30% 4% / 0.95)'
          : 'hsl(160 30% 4% / 0.6)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid hsl(43 76% 52% / ${scrolled ? '0.08' : '0.04'})`,
      }}
    >
      <div className="container mx-auto flex items-center justify-between h-18 px-6" style={{ height: scrolled ? 60 : 72, transition: 'height 0.5s ease' }}>
        <a href="#" onClick={(e) => handleAnchorClick(e, "#")} className="flex items-center gap-3 group">
          <div className="relative transition-transform duration-500 group-hover:scale-110">
            <Gem className="h-5 w-5 text-accent opacity-70" />
            <div className="absolute inset-0 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'hsl(43 76% 52% / 0.3)' }} />
          </div>
          <span
            className="font-display text-xl font-bold tracking-wider"
            style={{
              background: 'linear-gradient(135deg, hsl(43 76% 68%), hsl(43 76% 42%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Малахитовая шкатулка
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleAnchorClick(e, l.href)}
              className="font-body text-sm text-foreground/50 hover:text-accent transition-colors duration-500 tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleAnchorClick(e, "#contact")} className="btn-gold text-sm px-6 py-2.5">
            Записаться
          </a>
        </nav>

        <button
          className="md:hidden text-foreground/70"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-accent/8 overflow-hidden"
            style={{ background: 'hsl(160 30% 4% / 0.98)' }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchorClick(e, l.href)}
                className="block px-8 py-4 font-body text-sm text-foreground/50 hover:text-accent transition-colors tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <div className="px-8 pb-5 pt-2">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-gold text-sm w-full text-center">
                Записаться
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
