import { useState } from "react";
import { MessageCircle, Mail, ExternalLink, X, Gem } from "lucide-react";
import lizardDivider from "@/assets/lizard-divider.png";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="py-10 px-6 border-t border-accent/6"
        style={{ background: 'linear-gradient(180deg, hsl(160 30% 4%), hsl(160 30% 3%))' }}>
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <Gem className="h-4 w-4 text-accent/25" />
            <span className="font-body text-xs text-foreground/30 tracking-wide">
              © 2024 [Имя]. Все права защищены.
            </span>
            <img
              src={lizardDivider}
              alt=""
              className="h-5 w-auto opacity-15 ml-2"
              style={{ filter: "sepia(1) hue-rotate(10deg) saturate(0.5) brightness(1.2)" }}
            />
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setShowPrivacy(true)}
              className="font-body text-xs text-foreground/25 hover:text-accent transition-colors duration-500 underline underline-offset-4 decoration-accent/10 tracking-wide"
            >
              Политика конфиденциальности
            </button>
            {[
              { href: "https://t.me/", icon: MessageCircle },
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
      </footer>

      {showPrivacy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'hsl(160 30% 3% / 0.92)', backdropFilter: 'blur(16px)' }}
          onClick={() => setShowPrivacy(false)}>
          <div
            className="rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-10 relative gold-border-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setShowPrivacy(false)} className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors">
              <X size={20} />
            </button>
            <h3 className="font-display text-2xl font-bold text-accent mb-5">Политика конфиденциальности</h3>
            <div className="font-body text-sm text-foreground/50 space-y-4 leading-[1.9]">
              <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей данного сайта.</p>
              <p>Мы собираем только те данные, которые вы предоставляете через форму обратной связи: имя, контактные данные, предпочтения по услугам.</p>
              <p>Ваши данные используются исключительно для связи с вами и организации консультаций. Мы не передаём данные третьим лицам.</p>
              <p>Оставляя заявку, вы даёте согласие на обработку персональных данных в соответствии с данной политикой.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
