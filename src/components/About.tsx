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
      {/* Layer 1: Background */}
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

      {/* Layer 2: Floating decor (parallax) */}
      <ParallaxLayer speed={0.4}>
        <SectionDecor variant="about" />
        <FantasyDecor variant="about" />
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
          Обо мне
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-subtitle"
        >
          Путь через знание, интуицию и принятие
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-2xl pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, hsl(43 76% 52% / 0.04), transparent 70%)',
                filter: 'blur(25px)',
              }} />

            <div className="relative aspect-[3/4] rounded-2xl bg-muted overflow-hidden gold-photo-frame">
              <img src={specialistPhoto} alt="Фото специалиста" className="w-full h-full object-cover" />
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse at 50% 50%, transparent 50%, hsl(160 30% 4% / 0.3) 100%)',
              }} />
            </div>

            <div className="absolute -top-2 -left-2 w-14 h-14 border-t-2 border-l-2 border-accent/25 rounded-tl-xl" />
            <div className="absolute -top-2 -right-2 w-14 h-14 border-t-2 border-r-2 border-accent/25 rounded-tr-xl" />
            <div className="absolute -bottom-2 -left-2 w-14 h-14 border-b-2 border-l-2 border-accent/25 rounded-bl-xl" />
            <div className="absolute -bottom-2 -right-2 w-14 h-14 border-b-2 border-r-2 border-accent/25 rounded-br-xl" />

            {[
              { top: -4, left: -4 },
              { top: -4, right: -4 },
              { bottom: -4, left: -4 },
              { bottom: -4, right: -4 },
            ].map((pos, i) => (
              <div key={i} className="absolute w-2 h-2 rotate-45 bg-accent/25 pointer-events-none"
                style={{ ...pos, boxShadow: '0 0 10px hsl(43 76% 52% / 0.2)' }} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            {[
              "Меня зовут [Имя], и я — интегральный специалист с многолетним опытом работы в социологии, психологии и практике Таро. Моё образование включает социологический факультет и дополнительную подготовку в области семейной психологии и коучинга.",
              "Интерес к символическому языку Таро пришёл через глубинную психологию. Карты для меня — это не предсказания, а инструмент самопознания, метафорический мост к бессознательному.",
              "Мой принцип работы — целостный взгляд на человека: контекст его жизни, внутренние процессы и символическое пространство. Я создаю безопасную атмосферу, где каждый может быть услышан.",
            ].map((text, i) => (
              <p key={i} className="font-body text-foreground/65 leading-[1.9]">
                {text}
              </p>
            ))}

            <div className="flex flex-wrap gap-4 pt-6">
              {[
                { icon: GraduationCap, label: "Социолог" },
                { icon: Award, label: "Психолог" },
                { icon: BookOpen, label: "Таролог" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-2.5 rounded-full border border-accent/15 px-5 py-2.5 transition-all duration-500 hover:border-accent/35 hover:shadow-[0_0_24px_hsl(43_76%_52%/0.08)]"
                  style={{ background: 'hsl(160 30% 4% / 0.5)' }}
                >
                  <c.icon className="h-4 w-4 text-accent/70" />
                  <span className="font-body text-sm text-foreground/60 tracking-wide">{c.label}</span>
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
