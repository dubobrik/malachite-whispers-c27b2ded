import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import specialistPhoto from "@/assets/specialist-photo.jpg";
import SectionDecor from "./SectionDecor";
import FantasyDecor from "./FantasyDecor";
import malachiteTexture from "@/assets/malachite-texture.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Layer 1: Malachite texture */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${malachiteTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 50%',
        opacity: 0.03,
      }} />
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 50% 60% at 25% 40%, hsl(160 50% 12% / 0.12) 0%, transparent 60%),
          radial-gradient(ellipse 40% 40% at 75% 60%, hsl(43 76% 52% / 0.04) 0%, transparent 50%),
          linear-gradient(180deg, hsl(160 30% 5%) 0%, hsl(160 27% 6%) 50%, hsl(160 30% 5%) 100%)
        `,
      }} />

      {/* Layer 2: Decorative elements */}
      <SectionDecor variant="about" />
      <FantasyDecor variant="about" />

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
          Обо мне
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Photo with enhanced frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Photo glow behind */}
            <div className="absolute -inset-4 rounded-2xl pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, hsl(43 76% 52% / 0.06), transparent 70%)',
                filter: 'blur(20px)',
              }} />

            <div className="relative aspect-[3/4] rounded-xl bg-muted overflow-hidden gold-photo-frame">
              <img src={specialistPhoto} alt="Фото специалиста" className="w-full h-full object-cover" />
              {/* Inner vignette overlay */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse at 50% 50%, transparent 50%, hsl(160 30% 4% / 0.3) 100%)',
              }} />
            </div>

            {/* L-shaped gold corners */}
            <div className="absolute -top-1.5 -left-1.5 w-12 h-12 border-t-2 border-l-2 border-accent/40 rounded-tl-lg" />
            <div className="absolute -top-1.5 -right-1.5 w-12 h-12 border-t-2 border-r-2 border-accent/40 rounded-tr-lg" />
            <div className="absolute -bottom-1.5 -left-1.5 w-12 h-12 border-b-2 border-l-2 border-accent/40 rounded-bl-lg" />
            <div className="absolute -bottom-1.5 -right-1.5 w-12 h-12 border-b-2 border-r-2 border-accent/40 rounded-br-lg" />

            {/* Corner diamonds */}
            <div className="absolute -top-2 -left-2 w-1.5 h-1.5 rotate-45 bg-accent/30" style={{ boxShadow: '0 0 8px hsl(43 76% 52% / 0.3)' }} />
            <div className="absolute -top-2 -right-2 w-1.5 h-1.5 rotate-45 bg-accent/30" style={{ boxShadow: '0 0 8px hsl(43 76% 52% / 0.3)' }} />
            <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 rotate-45 bg-accent/30" style={{ boxShadow: '0 0 8px hsl(43 76% 52% / 0.3)' }} />
            <div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 rotate-45 bg-accent/30" style={{ boxShadow: '0 0 8px hsl(43 76% 52% / 0.3)' }} />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-backdrop space-y-4"
          >
            <p className="font-body text-foreground/80 leading-relaxed">
              Меня зовут [Имя], и я — интегральный специалист с многолетним опытом
              работы в социологии, психологии и практике Таро. Моё образование
              включает социологический факультет и дополнительную подготовку в
              области семейной психологии и коучинга.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed">
              Интерес к символическому языку Таро пришёл через глубинную
              психологию. Карты для меня — это не предсказания, а инструмент
              самопознания, метафорический мост к бессознательному.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed">
              Мой принцип работы — целостный взгляд на человека: контекст его
              жизни, внутренние процессы и символическое пространство. Я создаю
              безопасную атмосферу, где каждый может быть услышан.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { icon: GraduationCap, label: "Социолог" },
                { icon: Award, label: "Психолог" },
                { icon: BookOpen, label: "Таролог" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-2 rounded-full border border-accent/25 px-4 py-2 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_hsl(43_76%_52%/0.12)] backdrop-blur-sm"
                  style={{ background: 'rgba(0, 0, 0, 0.25)' }}
                >
                  <c.icon className="h-4 w-4 text-accent" />
                  <span className="font-body text-sm text-foreground/75">{c.label}</span>
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