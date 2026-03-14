import { useState } from "react";
import { MessageCircle, Mail, ExternalLink, X } from "lucide-react";
import lizardIcon from "@/assets/lizard-divider.png";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="py-8 px-4 border-t border-accent/10"
        style={{ background: 'linear-gradient(135deg, hsl(165 80% 8%), hsl(165 80% 6%))' }}>
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={lizardIcon} alt="Ящерица-хранитель" className="h-6 w-6 opacity-40" />
            <span className="font-body text-xs text-primary-foreground/45">
              © 2024 [Имя]. Все права защищены.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPrivacy(true)}
              className="font-body text-xs text-primary-foreground/35 hover:text-accent transition-colors underline"
            >
              Политика конфиденциальности
            </button>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/35 hover:text-accent transition-colors">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/35 hover:text-accent transition-colors">
              <ExternalLink className="h-4 w-4" />
            </a>
            <a href="mailto:example@email.com" className="text-primary-foreground/35 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>

      {/* Privacy modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'hsl(165 80% 6% / 0.85)', backdropFilter: 'blur(8px)' }}
          onClick={() => setShowPrivacy(false)}>
          <div
            className="bg-background rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-8 relative gold-border-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setShowPrivacy(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
              <X size={20} />
            </button>
            <h3 className="font-display text-2xl font-bold text-primary mb-4">Политика конфиденциальности</h3>
            <div className="font-body text-sm text-foreground/70 space-y-3 leading-relaxed">
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
