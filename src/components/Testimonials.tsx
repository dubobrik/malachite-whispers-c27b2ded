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
    <section className="py-20 md:py-32 px-6 md:px-10 relative overflow-hidden">
      {/* Background */}
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

      <ParallaxLayer speed={0.45}>
        <SectionDecor variant="testimonials" />
        <FantasyDecor variant="testimonials" />
      </ParallaxLayer>

      {/* Content */}
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header — right-aligned for variety */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-right mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 justify-end mb-4">
            <span className="font-body text-[11px] uppercase tracking-[0.3em] text-accent/40">Отзывы</span>
            <div className="w-8 h-px bg-accent/20" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold"
            style={{
              background: 'linear-gradient(135deg, hsl(43 76% 68%), hsl(43 76% 45%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Истории тех, кто нашёл ответы
          </h2>
        </motion.div>

        {/* Staggered layout — not equal columns */}
        <div className="space-y-6">
          {/* First testimonial — full width, editorial */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="gold-border-card group md:max-w-2xl"
          >
            <Quote className="h-5 w-5 text-accent/15 mb-4 transition-all duration-700 group-hover:text-accent/30" />
            <p className="font-body text-foreground/55 leading-[1.9] mb-6 italic">
              «{testimonials[0].text}»
            </p>
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-accent/15" />
              <span className="font-display text-sm font-semibold text-foreground/70">{testimonials[0].name}</span>
              <span className="font-body text-xs text-foreground/25">{testimonials[0].location}</span>
            </div>
          </motion.div>

          {/* Second and third — side by side, offset */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:pl-16">
            {testimonials.slice(1).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (i + 1) * 0.12 }}
                className="gold-border-card group"
              >
                <Quote className="h-4 w-4 text-accent/12 mb-4 transition-all duration-700 group-hover:text-accent/25" />
                <p className="font-body text-sm text-foreground/50 leading-[1.9] mb-6 italic">
                  «{t.text}»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-px bg-accent/12" />
                  <span className="font-display text-sm font-semibold text-foreground/65">{t.name}</span>
                  <span className="font-body text-[11px] text-foreground/20">{t.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
