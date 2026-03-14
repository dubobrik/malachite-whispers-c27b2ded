import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import specialistPhoto from "@/assets/specialist-photo.jpg";
import SectionDecor from "./SectionDecor";
import FantasyDecor from "./FantasyDecor";
import ParallaxLayer from "./ParallaxLayer";
import malachiteTexture from "@/assets/malachite-texture.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${malachiteTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 50%',
        opacity: 0.025,
      }} />
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 45% 50% at 25% 40%, hsl(160 45% 10% / 0.1) 0%, transparent 60%),
          radial-gradient(ellipse 35% 35% at 75% 60%, hsl(43 76% 52% / 0.03) 0%, transparent 50%),
          linear-gradient(180deg, hsl(var(--background)) 0%, hsl(160 27% 5%) 50%, hsl(var(--background)) 100%)
        `,
      }} />

      <ParallaxLayer speed={0.4}>
        <SectionDecor variant="about" />
        <FantasyDecor variant="about" />
      </ParallaxLayer>

      {/* Content */}
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent/20" />
            <span className="font-body text-[11px] uppercase tracking-[0.3em] text-accent/40">О специалисте</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold"
            style={{
              background: 'linear-gradient(135deg, hsl(43 76% 68%), hsl(43 76% 45%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Обо мне
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-start">
          {/* Photo — clean framing, minimal ornaments */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden gold-photo-frame">
              <img src={specialistPhoto} alt="Фото специалиста" className="w-full h-full object-cover" />
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse at 50% 50%, transparent 50%, hsl(160 30% 4% / 0.25) 100%)',
              }} />
            </div>

            {/* Just two corner accents — not four */}
            <div className="absolute -top-2 -left-2 w-10 h-10 border-t border-l border-accent/20 rounded-tl-lg" />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b border-r border-accent/20 rounded-br-lg" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-5"
          >
            {[
              "Меня зовут [Имя], и я — интегральный специалист с многолетним опытом работы в социологии, психологии и практике Таро. Моё образование включает социологический факультет и дополнительную подготовку в области семейной психологии и коучинга.",
              "Интерес к символическому языку Таро пришёл через глубинную психологию. Карты для меня — это не предсказания, а инструмент самопознания, метафорический мост к бессознательному.",
              "Мой принцип работы — целостный взгляд на человека: контекст его жизни, внутренние процессы и символическое пространство. Я создаю безопасную атмосферу, где каждый может быть услышан.",
            ].map((text, i) => (
              <p key={i} className="font-body text-foreground/60 leading-[1.9]">
                {text}
              </p>
            ))}

            <div className="flex flex-wrap gap-3 pt-8">
              {[
                { icon: GraduationCap, label: "Социолог" },
                { icon: Award, label: "Психолог" },
                { icon: BookOpen, label: "Таролог" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-2 rounded-full border border-accent/10 px-4 py-2 transition-all duration-500 hover:border-accent/25"
                  style={{ background: 'hsl(160 30% 5% / 0.5)' }}
                >
                  <c.icon className="h-3.5 w-3.5 text-accent/50" />
                  <span className="font-body text-xs text-foreground/45 tracking-wide">{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
