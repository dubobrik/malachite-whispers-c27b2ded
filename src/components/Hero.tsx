import { motion } from "framer-motion";
import { Gem, Sparkles, KeyRound } from "lucide-react";
import malachiteTexture from "@/assets/malachite-texture.jpg";
import GoldParticles from "./GoldParticles";
import MagicCircle from "./MagicCircle";
import MagicalDust from "./MagicalDust";
import ParallaxLayer from "./ParallaxLayer";

const GoldOrnamentCorner = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => {
  const styles: Record<string, React.CSSProperties> = {
    tl: { top: 32, left: 32, borderTop: '1px solid', borderLeft: '1px solid', borderColor: 'hsl(43 76% 52% / 0.15)' },
    tr: { top: 32, right: 32, borderTop: '1px solid', borderRight: '1px solid', borderColor: 'hsl(43 76% 52% / 0.15)' },
    bl: { bottom: 32, left: 32, borderBottom: '1px solid', borderLeft: '1px solid', borderColor: 'hsl(43 76% 52% / 0.15)' },
    br: { bottom: 32, right: 32, borderBottom: '1px solid', borderRight: '1px solid', borderColor: 'hsl(43 76% 52% / 0.15)' },
  };
  return (
    <div className="absolute w-14 h-14 pointer-events-none" style={styles[position]}>
      <div
        className="absolute w-1.5 h-1.5 rotate-45"
        style={{
          background: 'hsl(43 76% 52% / 0.25)',
          boxShadow: '0 0 8px hsl(43 76% 52% / 0.15)',
          ...(position === 'tl' ? { top: -3, left: -3 } :
             position === 'tr' ? { top: -3, right: -3 } :
             position === 'bl' ? { bottom: -3, left: -3 } :
             { bottom: -3, right: -3 }),
        }}
      />
    </div>
  );
};

const Hero = () => {
  return (
    <section
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${malachiteTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Deep layered overlay */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 50% 45% at 50% 48%, hsl(160 50% 10% / 0.3) 0%, transparent 70%),
          radial-gradient(ellipse 80% 60% at 20% 80%, hsl(270 25% 8% / 0.1) 0%, transparent 50%),
          radial-gradient(ellipse 80% 60% at 80% 20%, hsl(160 35% 8% / 0.1) 0%, transparent 50%),
          linear-gradient(180deg, hsl(160 30% 3% / 0.94) 0%, hsl(160 30% 4% / 0.8) 40%, hsl(160 30% 4% / 0.85) 65%, hsl(160 30% 3% / 0.96) 100%)
        `,
      }} />

      {/* Central emerald glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px', height: '700px',
        }}
        animate={{
          opacity: [0.3, 0.55, 0.4, 0.5, 0.3],
          scale: [1, 1.04, 0.98, 1.02, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full" style={{
          background: 'radial-gradient(circle, hsl(160 50% 22% / 0.1) 0%, hsl(145 40% 18% / 0.04) 40%, transparent 70%)',
          filter: 'blur(50px)',
        }} />
      </motion.div>

      {/* Warm gold accent glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: '50%', top: '46%',
          transform: 'translate(-50%, -50%)',
          width: '350px', height: '350px',
        }}
        animate={{ opacity: [0.2, 0.4, 0.25, 0.35, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="w-full h-full rounded-full" style={{
          background: 'radial-gradient(circle, hsl(43 76% 52% / 0.05) 0%, transparent 70%)',
          filter: 'blur(35px)',
        }} />
      </motion.div>

      {/* Magic circle — large, subtle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <MagicCircle className="w-[600px] h-[600px] md:w-[850px] md:h-[850px] opacity-[0.08]" />
      </div>

      {/* Gold ornament corners */}
      <GoldOrnamentCorner position="tl" />
      <GoldOrnamentCorner position="tr" />
      <GoldOrnamentCorner position="bl" />
      <GoldOrnamentCorner position="br" />

      {/* Subtle frame lines */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-20 left-20 right-20 h-px opacity-[0.06]"
          style={{ background: 'linear-gradient(90deg, transparent, hsl(43 76% 52%), transparent)' }} />
        <div className="absolute bottom-20 left-20 right-20 h-px opacity-[0.06]"
          style={{ background: 'linear-gradient(90deg, transparent, hsl(43 76% 52%), transparent)' }} />
      </div>

      {/* Particles — reduced count for elegance */}
      <GoldParticles count={16} />
      <MagicalDust count={12} />

      {/* ── Main content ── */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        {/* Artifact icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex items-center justify-center gap-10 md:gap-16 mb-14"
        >
          {[
            { Icon: Gem, delay: 0.5, label: "Кристалл", color: 'hsl(145 55% 45%)' },
            { Icon: Sparkles, delay: 0.7, label: "Магия", color: 'hsl(43 76% 52%)' },
            { Icon: KeyRound, delay: 0.9, label: "Ключ", color: 'hsl(270 35% 55%)' },
          ].map(({ Icon, delay, label, color }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay, ease: "easeOut" }}
              className="flex flex-col items-center gap-3"
            >
              <motion.div
                className="relative p-5 rounded-full"
                style={{
                  border: `1px solid ${color}20`,
                  background: `radial-gradient(circle, ${color}10, transparent 70%)`,
                }}
                animate={{
                  boxShadow: [
                    `0 0 20px ${color}15`,
                    `0 0 35px ${color}20`,
                    `0 0 20px ${color}15`,
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 }}
              >
                <Icon className="h-6 w-6 md:h-7 md:w-7" style={{ color }} />
              </motion.div>
              <span className="font-body text-[10px] uppercase tracking-[0.25em]" style={{ color: `${color}60` }}>
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-sm"
        >
          <div className="malachite-vein" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
          style={{
            background: 'linear-gradient(140deg, hsl(43 76% 74%), hsl(43 76% 50%), hsl(43 70% 60%), hsl(43 76% 70%))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 3px 12px hsl(43 76% 52% / 0.12))',
          }}
        >
          Интегральный подход к&nbsp;вашей жизни
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-display text-xl md:text-2xl lg:text-3xl text-foreground/70 italic mb-4 tracking-wide"
        >
          Таролог · Социолог · Коуч · Семейный психолог
        </motion.p>

        {/* Small decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="mx-auto mb-8 w-20"
        >
          <div className="h-px" style={{
            background: 'linear-gradient(90deg, transparent, hsl(160 50% 35% / 0.3), transparent)',
          }} />
        </motion.div>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-body text-base md:text-lg text-foreground/50 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Помогаю найти опору и ответы через глубину традиций и ясность знания
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <a href="#contact" className="btn-gold text-base md:text-lg px-12 py-5">
            Записаться на консультацию
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 mx-auto rounded-full border border-accent/15"
          >
            <motion.div
              animate={{ y: [2, 12, 2] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 mx-auto mt-1.5 rounded-full bg-accent/30"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to top, hsl(var(--background)), transparent)' }} />

      {/* Top vignette */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, hsl(160 30% 3% / 0.6), transparent)' }} />
    </section>
  );
};

export default Hero;
