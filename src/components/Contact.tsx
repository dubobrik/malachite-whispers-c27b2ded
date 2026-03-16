import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, MessageSquare, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import GoldParticles from "./GoldParticles";
import SectionDecor from "./SectionDecor";
import FantasyDecor from "./FantasyDecor";
import ParallaxLayer from "./ParallaxLayer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consentChecked) return;
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl border border-accent/10 font-body text-sm px-5 py-3.5 focus:outline-none focus:border-accent/30 focus:shadow-[0_0_24px_hsl(43_76%_52%/0.08)] transition-all duration-500 placeholder:text-foreground/15 bg-[hsl(160_25%_6%_/_0.8)] backdrop-blur-sm text-foreground";

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 45% 45% at 35% 30%, hsl(160 45% 12% / 0.12) 0%, transparent 60%),
          radial-gradient(ellipse 35% 35% at 65% 70%, hsl(43 76% 52% / 0.03) 0%, transparent 50%),
          linear-gradient(180deg, hsl(160 30% 4% / 0.3) 0%, hsl(160 27% 4.5% / 0.4) 50%, hsl(160 30% 4% / 0.3) 100%)
        `,
      }} />

      <ParallaxLayer speed={0.4}>
        <SectionDecor variant="contact" />
        <FantasyDecor variant="contact" />
        <GoldParticles count={6} />
      </ParallaxLayer>

      {/* Content */}
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-3"
            style={{
              background: 'linear-gradient(135deg, hsl(43 76% 68%), hsl(43 76% 45%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Записаться
          </h2>
          <p className="font-display text-sm text-foreground/35 italic">Выберите удобный способ связи</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <div className="gold-border-card text-center py-16">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 blur-xl" style={{ background: 'hsl(43 76% 52% / 0.12)' }} />
                  <p className="font-display text-3xl text-accent font-bold relative">
                    Спасибо!
                  </p>
                </div>
                <p className="font-body text-foreground/45">
                  Я свяжусь с вами в ближайшее время
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="gold-border-card space-y-5">
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <label className="font-body text-xs text-foreground/40 mb-1.5 block tracking-wide uppercase">Услуга</label>
                  <select id="service-select" name="service" className={inputClass}>
                    <option value="Таролог">Таролог</option>
                    <option value="Социолог">Социолог</option>
                    <option value="Коуч">Коуч</option>
                    <option value="Семейный психолог">Семейный психолог</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs text-foreground/40 mb-1.5 block tracking-wide uppercase">Имя *</label>
                    <input type="text" name="name" required className={inputClass} placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="font-body text-xs text-foreground/40 mb-1.5 block tracking-wide uppercase">Контакт (Email, Telegram или VK) *</label>
                    <input type="text" name="contact" required className={inputClass} placeholder="Telegram, VK или Email" />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs text-foreground/40 mb-1.5 block tracking-wide uppercase">Удобное время</label>
                  <input type="text" name="datetime" className={inputClass} placeholder="Например, 20 марта, вечер" />
                </div>

                <div>
                  <label className="font-body text-xs text-foreground/40 mb-1.5 block tracking-wide uppercase">Комментарий</label>
                  <textarea
                    name="message"
                    rows={3}
                    className={inputClass + " resize-none"}
                    placeholder="Ваш вопрос или пожелание"
                  />
                </div>

                {/* Consent checkbox */}
                <div className="pt-2 space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={consentChecked}
                      onChange={(e) => setConsentChecked(e.target.checked)}
                      required
                      className="mt-1 h-4 w-4 rounded border-accent/20 bg-transparent accent-accent shrink-0"
                    />
                    <span className="font-body text-xs text-foreground/35 leading-relaxed group-hover:text-foreground/50 transition-colors">
                      Я даю согласие на обработку моих персональных данных и принимаю{" "}
                      <Link
                        to="/privacy-policy"
                        target="_blank"
                        className="text-accent/60 hover:text-accent underline underline-offset-2 decoration-accent/20"
                      >
                        политику обработки персональных данных
                      </Link>.
                    </span>
                  </label>
                  <p className="font-body text-[10px] text-foreground/20 ml-7">
                    Собираемые данные: имя, контактные данные, предпочтения по услугам, комментарий.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={!consentChecked}
                  className="btn-gold w-full flex items-center justify-center gap-2.5 mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                  Отправить
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="font-display text-xl text-foreground/50 italic mb-8 leading-relaxed">
              Или напишите напрямую — я отвечу в течение дня
            </p>

            <div className="space-y-1">
              {[
              { href: "https://t.me/", icon: MessageCircle, label: "Telegram" },
                { href: "https://max.ru/", icon: MessagesSquare, label: "MAX" },
                { href: "https://vk.com/", icon: ExternalLink, label: "ВКонтакте" },
                { href: "mailto:example@email.com", icon: Mail, label: "Email" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : "_blank"}
                  rel={link.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-4 text-foreground/35 hover:text-accent transition-all duration-500 group rounded-xl px-5 py-4 -mx-5 hover:bg-accent/[0.03]"
                >
                  <link.icon className="h-4 w-4 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_hsl(43_76%_52%/0.2)]" />
                  <span className="font-body text-sm tracking-wide">{link.label}</span>
                  <span className="ml-auto text-xs opacity-0 group-hover:opacity-30 transition-opacity duration-500">→</span>
                </a>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-accent/6">
              <p className="font-body text-xs text-foreground/20 leading-relaxed">
                Все данные конфиденциальны и обрабатываются в соответствии с Федеральным законом № 152-ФЗ «О персональных данных». Консультации проводятся онлайн через Zoom или Telegram.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
