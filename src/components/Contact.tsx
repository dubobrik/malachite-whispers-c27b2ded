import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, ExternalLink } from "lucide-react";
import GoldParticles from "./GoldParticles";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full rounded-lg border border-accent/15 font-body text-sm px-4 py-3 focus:outline-none focus:border-accent/40 focus:shadow-[0_0_15px_hsl(43_76%_52%/0.1)] transition-all placeholder:text-foreground/20"
    + " bg-[hsl(160_25%_8%_/_0.8)] text-foreground";

  return (
    <section id="contact" className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, hsl(160 30% 4%), hsl(160 25% 6%), hsl(160 30% 4%))' }}>
      <GoldParticles count={10} />
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl font-bold text-accent text-center mb-12"
        >
          Записаться на консультацию
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <div className="gold-border-card text-center py-12">
                <p className="font-display text-2xl text-accent font-bold mb-2">
                  Спасибо!
                </p>
                <p className="font-body text-foreground/55">
                  Я свяжусь с вами в ближайшее время
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <label className="font-body text-sm text-foreground/50 mb-1 block">Услуга</label>
                  <select id="service-select" name="service" className={inputClass}>
                    <option value="Таролог">Таролог</option>
                    <option value="Социолог">Социолог</option>
                    <option value="Коуч">Коуч</option>
                    <option value="Семейный психолог">Семейный психолог</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-sm text-foreground/50 mb-1 block">Имя *</label>
                  <input type="text" name="name" required className={inputClass} placeholder="Ваше имя" />
                </div>

                <div>
                  <label className="font-body text-sm text-foreground/50 mb-1 block">Контакт (Telegram / VK / Email) *</label>
                  <input type="text" name="contact" required className={inputClass} placeholder="@username или email" />
                </div>

                <div>
                  <label className="font-body text-sm text-foreground/50 mb-1 block">Желаемая дата и время</label>
                  <input type="text" name="datetime" className={inputClass} placeholder="Например, 20 марта, вечер" />
                </div>

                <div>
                  <label className="font-body text-sm text-foreground/50 mb-1 block">Комментарий</label>
                  <textarea
                    name="message"
                    rows={3}
                    className={inputClass + " resize-none"}
                    placeholder="Ваш вопрос или пожелание"
                  />
                </div>

                <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
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
            className="flex flex-col justify-center space-y-6"
          >
            <p className="font-display text-xl text-foreground/60 italic">
              Или напишите мне напрямую
            </p>

            <div className="space-y-4">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/45 hover:text-accent transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-body text-sm">Telegram</span>
                <ExternalLink className="h-3 w-3 ml-auto opacity-40" />
              </a>

              <a
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/45 hover:text-accent transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="font-body text-sm">ВКонтакте</span>
                <ExternalLink className="h-3 w-3 ml-auto opacity-40" />
              </a>

              <a
                href="mailto:example@email.com"
                className="flex items-center gap-3 text-foreground/45 hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="font-body text-sm">Email</span>
                <ExternalLink className="h-3 w-3 ml-auto opacity-40" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;