import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, ExternalLink } from "lucide-react";
import GoldParticles from "./GoldParticles";
import SectionDecor from "./SectionDecor";
import FantasyDecor from "./FantasyDecor";
import malachiteTexture from "@/assets/malachite-texture.jpg";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl border border-accent/10 font-body text-sm px-5 py-3.5 focus:outline-none focus:border-accent/30 focus:shadow-[0_0_24px_hsl(43_76%_52%/0.08)] transition-all duration-500 placeholder:text-foreground/15 bg-[hsl(160_25%_6%_/_0.8)] backdrop-blur-sm text-foreground";

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${malachiteTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 80%',
        opacity: 0.03,
      }} />
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 45% 45% at 35% 30%, hsl(160 45% 12% / 0.12) 0%, transparent 60%),
          radial-gradient(ellipse 35% 35% at 65% 70%, hsl(43 76% 52% / 0.03) 0%, transparent 50%),
          linear-gradient(180deg, hsl(var(--background)) 0%, hsl(160 27% 4.5%) 50%, hsl(var(--background)) 100%)
        `,
      }} />

      <SectionDecor variant="contact" />
      <FantasyDecor variant="contact" />
      <GoldParticles count={8} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Записаться на консультацию
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-subtitle"
        >
          Выберите удобный способ связи
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                  <label className="font-body text-sm text-foreground/50 mb-1.5 block tracking-wide">Услуга</label>
                  <select id="service-select" name="service" className={inputClass}>
                    <option value="Таролог">Таролог</option>
                    <option value="Социолог">Социолог</option>
                    <option value="Коуч">Коуч</option>
                    <option value="Семейный психолог">Семейный психолог</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-sm text-foreground/50 mb-1.5 block tracking-wide">Имя *</label>
                  <input type="text" name="name" required className={inputClass} placeholder="Ваше имя" />
                </div>

                <div>
                  <label className="font-body text-sm text-foreground/50 mb-1.5 block tracking-wide">Контакт *</label>
                  <input type="text" name="contact" required className={inputClass} placeholder="Telegram, VK или Email" />
                </div>

                <div>
                  <label className="font-body text-sm text-foreground/50 mb-1.5 block tracking-wide">Дата и время</label>
                  <input type="text" name="datetime" className={inputClass} placeholder="Например, 20 марта, вечер" />
                </div>

                <div>
                  <label className="font-body text-sm text-foreground/50 mb-1.5 block tracking-wide">Комментарий</label>
                  <textarea
                    name="message"
                    rows={3}
                    className={inputClass + " resize-none"}
                    placeholder="Ваш вопрос или пожелание"
                  />
                </div>

                <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2.5 mt-2">
                  <Send className="h-4 w-4" />
                  Отправить заявку
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <p className="font-display text-2xl text-foreground/60 italic mb-2">
                Или напишите мне напрямую
              </p>
              <div className="w-16 h-px" style={{
                background: 'linear-gradient(90deg, hsl(43 76% 52% / 0.3), transparent)',
              }} />
            </div>

            <div className="space-y-2">
              {[
                { href: "https://t.me/", icon: MessageCircle, label: "Telegram" },
                { href: "https://vk.com/", icon: ExternalLink, label: "ВКонтакте" },
                { href: "mailto:example@email.com", icon: Mail, label: "Email" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : "_blank"}
                  rel={link.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-4 text-foreground/40 hover:text-accent transition-all duration-500 group rounded-xl px-5 py-4 -mx-5 hover:bg-accent/[0.03]"
                >
                  <link.icon className="h-5 w-5 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_hsl(43_76%_52%/0.25)]" />
                  <span className="font-body text-sm tracking-wide">{link.label}</span>
                  <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
