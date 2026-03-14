import { motion } from "framer-motion";
import { Gem, BookOpen, KeyRound } from "lucide-react";
import malachiteTexture from "@/assets/malachite-texture.jpg";
import GoldParticles from "./GoldParticles";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: `url(${malachiteTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Deep overlay with malachite gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 120%, hsl(162 70% 21% / 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 20%, hsl(165 80% 10% / 0.5) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 30%, hsl(164 80% 18% / 0.4) 0%, transparent 40%),
            linear-gradient(180deg, hsl(165 80% 10% / 0.75) 0%, hsl(165 80% 10% / 0.6) 50%, hsl(165 80% 10% / 0.8) 100%)
          `,
        }}
      />

      {/* Gold ornament lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 right-10 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(43 76% 52%), transparent)' }} />
        <div className="absolute bottom-20 left-10 right-10 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(43 76% 52%), transparent)' }} />
        <div className="absolute top-10 bottom-10 left-20 w-px" style={{ background: 'linear-gradient(180deg, transparent, hsl(43 76% 52%), transparent)' }} />
        <div className="absolute top-10 bottom-10 right-20 w-px" style={{ background: 'linear-gradient(180deg, transparent, hsl(43 76% 52%), transparent)' }} />
      </div>

      {/* Gold dust particles */}
      <GoldParticles count={20} />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        {/* Magical artifacts appearing from "box" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center justify-center gap-6 md:gap-10 mb-8"
        >
          {[
            { Icon: Gem, delay: 0.8, label: "Кристалл" },
            { Icon: BookOpen, delay: 1.0, label: "Книга" },
            { Icon: KeyRound, delay: 1.2, label: "Ключ" },
          ].map(({ Icon, delay, label }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay, ease: "easeOut" }}
              className="flex flex-col items-center gap-1"
            >
              <div className="p-3 rounded-full border border-accent/30 backdrop-blur-sm animate-shimmer"
                style={{ background: 'linear-gradient(135deg, hsl(43 76% 52% / 0.15), hsl(162 70% 21% / 0.2))' }}>
                <Icon className="h-6 w-6 md:h-8 md:w-8 text-accent" />
              </div>
              <span className="font-body text-[10px] text-accent/50 uppercase tracking-widest">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{
            background: 'linear-gradient(135deg, hsl(43 76% 62%), hsl(43 76% 42%), hsl(43 76% 55%))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Интегральный подход к&nbsp;вашей жизни
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display text-xl md:text-2xl text-primary-foreground/90 italic mb-4"
        >
          Таролог · Социолог · Коуч · Семейный психолог
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-body text-base md:text-lg text-primary-foreground/65 mb-10 max-w-2xl mx-auto"
        >
          Помогаю найти опору и ответы через глубину традиций и ясность знания
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a href="#contact" className="btn-gold text-base px-10 py-4">
            Записаться на консультацию
          </a>
        </motion.div>
      </div>

      {/* Bottom crystal glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, hsl(var(--background)), transparent)' }} />
    </section>
  );
};

export default Hero;
