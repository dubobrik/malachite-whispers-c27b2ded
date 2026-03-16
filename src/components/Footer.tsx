import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, MessageSquare, Mail, ExternalLink, Gem } from "lucide-react";
import lizardDivider from "@/assets/lizard-divider.png";

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-accent/6"
      style={{ background: 'linear-gradient(180deg, hsl(160 30% 4% / 0.6), hsl(160 30% 3% / 0.7))' }}>
      <div className="container mx-auto max-w-5xl flex flex-col gap-6">
        {/* Main footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <Gem className="h-4 w-4 text-accent/25" />
            <span className="font-body text-xs text-foreground/30 tracking-wide">
              © 2024 Савельева Н.В. Все права защищены.
            </span>
            <img
              src={lizardDivider}
              alt=""
              className="h-5 w-auto opacity-15 ml-2"
              style={{ filter: "sepia(1) hue-rotate(10deg) saturate(0.5) brightness(1.2)" }}
            />
          </div>

          <div className="flex items-center gap-5">
            {[
              { href: "https://t.me/", icon: MessageCircle },
              { href: "https://max.ru/", icon: MessagesSquare },
              { href: "https://vk.com/", icon: ExternalLink },
              { href: "mailto:example@email.com", icon: Mail },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : "_blank"}
                rel={link.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                className="text-foreground/20 hover:text-accent transition-colors duration-500"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Legal links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <Link
            to="/privacy-policy"
            className="font-body text-xs text-foreground/25 hover:text-accent transition-colors duration-500 underline underline-offset-4 decoration-accent/10 tracking-wide"
          >
            Политика обработки персональных данных
          </Link>
          <Link
            to="/privacy-policy#consent"
            className="font-body text-xs text-foreground/25 hover:text-accent transition-colors duration-500 underline underline-offset-4 decoration-accent/10 tracking-wide"
          >
            Согласие на обработку персональных данных
          </Link>
        </div>

        {/* 152-FZ notice */}
        <p className="font-body text-[10px] text-foreground/15 text-center leading-relaxed max-w-2xl mx-auto">
          Сайт обрабатывает персональные данные в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных». Оставляя заявку, вы даёте согласие на обработку ваших персональных данных.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
