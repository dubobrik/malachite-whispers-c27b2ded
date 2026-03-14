import { useState } from "react";
import { MessageCircle, Mail, ExternalLink, X, Gem } from "lucide-react";
import lizardDivider from "@/assets/lizard-divider.png";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="py-8 px-4 border-t border-accent/8"
        style={{ background: 'linear-gradient(135deg, hsl(160 30% 4%), hsl(160 30% 3%))' }}>
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Gem className="h-4 w-4 text-accent/30" />
            <span className="font-body text-xs text-foreground/35">
              © 2024 [Имя]. Все права защищены.
            </span>
            {/* Lizard guardian — subtle decorative accent */}
            <img
              src={lizardDivider}
              alt=""
              className="h-5 w-auto opacity-20 ml-2"
              style={{ filter: "sepia(1) hue-rotate(10deg) saturate(0.6) brightness(1.2)" }}
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPrivacy(true)}
              className="font-body text-xs text-foreground/30 hover:text-accent transition-colors underline"
            >
              Политика конфиденциальности
            </button>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="text-foreground/30 hover:text-accent transition-colors">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" className="text-foreground/30 hover:text-accent transition-colors">
              <ExternalLink className="h-4 w-4" />
            </a>
            <a href="mailto:example@email.com" className="text-foreground/30 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>

      {showPrivacy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'hsl(160 30% 3% / 0.9)', backdropFilter: 'blur(12px)' }}
          onClick={() => setShowPrivacy(false)}>
          <div
            className="rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-8 relative gold-border-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setShowPrivacy(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
              <X size={20} />
            </button>
            <h3 className="font-display text-2xl font-bold text-primary mb-4">Политика конфиденциальности</h3>
            <div className="font-body text-sm text-foreground/60 space-y-3 leading-relaxed">
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
