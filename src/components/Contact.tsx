import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, ExternalLink } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder — can be connected to Formspree later
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container mx-auto max-w-5xl">
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
          {/* Form */}
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
                <p className="font-body text-primary-foreground/70">
                  Я свяжусь с вами в ближайшее время
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <label className="font-body text-sm text-primary-foreground/70 mb-1 block">Услуга</label>
                  <select
                    id="service-select"
                    name="service"
                    className="w-full rounded-lg border border-accent/30 bg-primary-foreground/10 text-primary-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-accent"
                  >
                    <option value="Таролог">Таролог</option>
                    <option value="Социолог">Социолог</option>
                    <option value="Коуч">Коуч</option>
                    <option value="Семейный психолог">Семейный психолог</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-sm text-primary-foreground/70 mb-1 block">Имя *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-accent/30 bg-primary-foreground/10 text-primary-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-accent placeholder:text-primary-foreground/30"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-primary-foreground/70 mb-1 block">Контакт (Telegram / VK / Email) *</label>
                  <input
                    type="text"
                    name="contact"
                    required
                    className="w-full rounded-lg border border-accent/30 bg-primary-foreground/10 text-primary-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-accent placeholder:text-primary-foreground/30"
                    placeholder="@username или email"
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-primary-foreground/70 mb-1 block">Желаемая дата и время</label>
                  <input
                    type="text"
                    name="datetime"
                    className="w-full rounded-lg border border-accent/30 bg-primary-foreground/10 text-primary-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-accent placeholder:text-primary-foreground/30"
                    placeholder="Например, 20 марта, вечер"
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-primary-foreground/70 mb-1 block">Комментарий</label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full rounded-lg border border-accent/30 bg-primary-foreground/10 text-primary-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-accent placeholder:text-primary-foreground/30 resize-none"
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

          {/* Right column — contacts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="font-display text-xl text-primary-foreground/80 italic">
              Или напишите мне напрямую
            </p>

            <div className="space-y-4">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-body text-sm">Telegram</span>
                <ExternalLink className="h-3 w-3 ml-auto opacity-40" />
              </a>

              <a
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="font-body text-sm">ВКонтакте</span>
                <ExternalLink className="h-3 w-3 ml-auto opacity-40" />
              </a>

              <a
                href="mailto:example@email.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
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
