import { useState } from "react";
import { Menu, X } from "lucide-react";
import lizardIcon from "@/assets/lizard-divider.png";

const navLinks = [
  { label: "Услуги", href: "#uslugi" },
  { label: "Обо мне", href: "#about" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Контакты", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-accent/20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={lizardIcon} alt="" className="h-8 w-8" />
          <span className="font-display text-xl font-bold text-accent">
            Малахитовая шкатулка
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-gold text-sm">
            Записаться
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-primary/95 backdrop-blur-md border-t border-accent/20 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-gold text-sm w-full text-center">
              Записаться
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
