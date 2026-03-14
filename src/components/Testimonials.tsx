import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Благодаря консультации я наконец увидела свою ситуацию целиком. Таро в сочетании с психологическим подходом помогло мне принять важное решение.",
    name: "Анна",
    location: "Москва, 34 года",
  },
  {
    text: "Удивительный специалист! Чувствуется и научный подход, и глубинное понимание. После сессий коучинга я нашла свой путь в карьере.",
    name: "Екатерина",
    location: "Санкт-Петербург, 42 года",
  },
  {
    text: "Семейная консультация помогла нам с мужем найти общий язык. Благодарю за чуткость, профессионализм и безопасную атмосферу.",
    name: "Мария",
    location: "Екатеринбург, 38 лет",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl font-bold text-primary text-center mb-12"
        >
          Отзывы
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="gold-border-card"
            >
              <Quote className="h-6 w-6 text-accent/40 mb-4" />
              <p className="font-body text-sm text-foreground/75 leading-relaxed mb-6 italic">
                «{t.text}»
              </p>
              <div>
                <p className="font-display text-lg font-bold text-primary">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
