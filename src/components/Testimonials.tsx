import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionDecor from "./SectionDecor";
import FantasyDecor from "./FantasyDecor";
import malachiteTexture from "@/assets/malachite-texture.jpg";

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
    <section className="section-padding relative overflow-hidden">
      {/* Layer 1: Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${malachiteTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 70%',
        opacity: 0.03,
      }} />
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 40%, hsl(160 50% 12% / 0.1) 0%, transparent 70%),
          linear-gradient(180deg, hsl(160 22% 6.5%) 0%, hsl(160 20% 7%) 50%, hsl(160 22% 6.5%) 100%)
        `,
      }} />

      {/* Layer 2: Decorative */}
      <SectionDecor variant="testimonials" />
      <FantasyDecor variant="testimonials" />

      {/* Layer 3: Content */}
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl font-bold text-accent text-center mb-12"
          style={{ filter: 'drop-shadow(0 0 20px hsl(43 76% 52% / 0.15))' }}
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
              className="gold-border-card group backdrop-blur-sm"
            >
              <Quote className="h-6 w-6 text-accent/30 mb-4 transition-all duration-500 group-hover:text-accent/50 group-hover:drop-shadow-[0_0_8px_hsl(43_76%_52%/0.2)]" />
              <p className="font-body text-sm text-foreground/75 leading-relaxed mb-6 italic">
                «{t.text}»
              </p>
              <div>
                <p className="font-display text-lg font-bold text-foreground">{t.name}</p>
                <p className="font-body text-xs text-foreground/50">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;