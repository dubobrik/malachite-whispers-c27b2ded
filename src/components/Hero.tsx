import { motion } from "framer-motion";
import { Gem, BookOpen, KeyRound, Sparkles } from "lucide-react";
import malachiteTexture from "@/assets/malachite-texture.jpg";
import GoldParticles from "./GoldParticles";
import MagicCircle from "./MagicCircle";

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
      {/* Deep velvet overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 40%, hsl(160 50% 15% / 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, hsl(270 40% 20% / 0.1) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 20%, hsl(145 60% 15% / 0.1) 0%, transparent 40%),
            linear-gradient(180deg, hsl(160 30% 4% / 0.85) 0%, hsl(160 30% 5% / 0.7) 40%, hsl(160 30% 4% / 0.9) 100%)
          `,
        }}
      />

      {/* Magic circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <MagicCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-15" />
      </div>

      {/* Gold ornament lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
        <div className="absolute top-20 left-10 right-10 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(43 76% 52%), transparent)' }} />
        <div className="absolute bottom-20 left-10 right-10 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(43 76% 52%), transparent)' }} />
        <div className="absolute top-10 bottom-10 left-20 w-px" style={{ background: 'linear-gradient(180deg, transparent, hsl(43 76% 52%), transparent)' }} />
        <div className="absolute top-10 bottom-10 right-20 w-px" style={{ background: 'linear-gradient(180deg, transparent, hsl(43 76% 52%), transparent)' }} />
      </div>

      {/* Floating crystal accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-2 h-2 rotate-45 animate-shimmer" 
          style={{ background: 'hsl(145 60% 40% / 0.3)', boxShadow: '0 0 15px hsl(145 60% 40% / 0.2)' }} />
        <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 rotate-45 animate-shimmer" 
          style={{ background: 'hsl(270 40% 55% / 0.25)', boxShadow: '0 0 12px hsl(270 40% 55% / 0.2)', animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[20%] w-1 h-1 rotate-45 animate-shimmer" 
          style={{ background: 'hsl(43 76% 52% / 0.3)', boxShadow: '0 0 10px hsl(43 76% 52% / 0.2)', animationDelay: '2s' }} />
        <div className="absolute bottom-[20%] right-[10%] w-2 h-2 rotate-45 animate-shimmer" 
          style={{ background: 'hsl(145 60% 40% / 0.2)', boxShadow: '0 0 15px hsl(145 60% 40% / 0.15)', animationDelay: '1.5s' }} />
      </div>

      <GoldParticles count={20} />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        {/* Magical artifacts */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center justify-center gap-6 md:gap-10 mb-8"
        >
          {[
            { Icon: Gem, delay: 0.8, label: "Кристалл" },
            { Icon: Sparkles, delay: 1.0, label: "Магия" },
            { Icon: KeyRound, delay: 1.2, label: "Ключ" },
          ].map(({ Icon, delay, label }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay, ease: "easeOut" }}
              className="flex flex-col items-center gap-1"
            >
              <div className="p-3 rounded-full border border-accent/20 backdrop-blur-sm animate-shimmer"
                style={{ background: 'linear-gradient(135deg, hsl(43 76% 52% / 0.1), hsl(160 50% 25% / 0.15))' }}>
                <Icon className="h-6 w-6 md:h-8 md:w-8 text-accent" />
              </div>
              <span className="font-body text-[10px] text-accent/40 uppercase tracking-widest">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{
            background: 'linear-gradient(135deg, hsl(43 76% 70%), hsl(43 76% 48%), hsl(43 76% 60%))',
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
          className="font-display text-xl md:text-2xl text-foreground/80 italic mb-4"
        >
          Таролог · Социолог · Коуч · Семейный психолог
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-body text-base md:text-lg text-foreground/50 mb-10 max-w-2xl mx-auto"
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

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, hsl(var(--background)), transparent)' }} />
    </section>
  );
};

export default Hero;