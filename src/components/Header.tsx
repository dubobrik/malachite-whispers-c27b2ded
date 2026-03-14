import { useState } from "react";
import { Menu, X, Gem } from "lucide-react";

const navLinks = [
  { label: "Услуги", href: "#uslugi" },
  { label: "Обо мне", href: "#about" },
  { label: "Контакты", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-accent/10"
      style={{
        background: 'linear-gradient(135deg, hsl(160 30% 4% / 0.97), hsl(160 25% 6% / 0.97))',
        backdropFilter: 'blur(16px)',
      }}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2.5">
          <div className="relative">
            <Gem className="h-5 w-5 text-accent opacity-80" />
            <div className="absolute inset-0 blur-sm" style={{ background: 'hsl(43 76% 52% / 0.2)' }} />
          </div>
          <span
            className="font-display text-xl font-bold tracking-wide"
            style={{
              background: 'linear-gradient(135deg, hsl(43 76% 65%), hsl(43 76% 42%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Малахитовая шкатулка
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-foreground/60 hover:text-accent transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-gold text-sm">
            Записаться
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-accent/10 pb-4"
          style={{ background: 'hsl(160 30% 4% / 0.98)' }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-body text-sm text-foreground/60 hover:text-accent transition-colors"
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