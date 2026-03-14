import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionDecor from "./SectionDecor";
import FantasyDecor from "./FantasyDecor";
import ParallaxLayer from "./ParallaxLayer";
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
        opacity: 0.02,
      }} />
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 70% 50% at 50% 40%, hsl(160 40% 10% / 0.08) 0%, transparent 70%),
          linear-gradient(180deg, hsl(160 22% 5.5%) 0%, hsl(160 20% 6.5%) 50%, hsl(160 22% 5.5%) 100%)
        `,
      }} />

      {/* Layer 2: Floating decor (parallax) */}
      <ParallaxLayer speed={0.45}>
        <SectionDecor variant="testimonials" />
        <FantasyDecor variant="testimonials" />
      </ParallaxLayer>

      {/* Layer 3: Content */}
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Отзывы
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-subtitle"
        >
          Истории тех, кто нашёл свои ответы
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="gold-border-card group flex flex-col"
            >
              <Quote className="h-6 w-6 text-accent/20 mb-5 transition-all duration-700 group-hover:text-accent/40" />
              <p className="font-body text-sm text-foreground/60 leading-[1.9] mb-8 italic flex-1">
                «{t.text}»
              </p>
              <div className="pt-5 border-t border-accent/8">
                <p className="font-display text-lg font-bold text-foreground/85">{t.name}</p>
                <p className="font-body text-xs text-foreground/35 tracking-wide">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
