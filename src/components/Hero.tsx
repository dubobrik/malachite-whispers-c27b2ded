import { motion } from "framer-motion";
import { Gem, Sparkles, KeyRound } from "lucide-react";
import malachiteTexture from "@/assets/malachite-texture.jpg";
import GoldParticles from "./GoldParticles";
import MagicCircle from "./MagicCircle";
import MagicalDust from "./MagicalDust";

const FloatingCrystal = ({ 
  x, y, size, color, glow, delay, duration 
}: { 
  x: string; y: string; size: number; color: string; glow: string; delay: number; duration: number;
}) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0, 0.6, 0.3, 0.7, 0.4],
      y: [20, -8, 12, -15, 20],
      rotate: [0, 5, -3, 7, 0],
    }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    <div
      className="rotate-45"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${color}, transparent)`,
        boxShadow: `0 0 ${size * 2}px ${glow}, 0 0 ${size * 4}px ${glow}`,
        borderRadius: '2px',
      }}
    />
  </motion.div>
);

const GoldOrnamentCorner = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => {
  const styles: Record<string, React.CSSProperties> = {
    tl: { top: 24, left: 24, borderTop: '1px solid', borderLeft: '1px solid', borderColor: 'hsl(43 76% 52% / 0.2)' },
    tr: { top: 24, right: 24, borderTop: '1px solid', borderRight: '1px solid', borderColor: 'hsl(43 76% 52% / 0.2)' },
    bl: { bottom: 24, left: 24, borderBottom: '1px solid', borderLeft: '1px solid', borderColor: 'hsl(43 76% 52% / 0.2)' },
    br: { bottom: 24, right: 24, borderBottom: '1px solid', borderRight: '1px solid', borderColor: 'hsl(43 76% 52% / 0.2)' },
  };
  return (
    <div className="absolute w-12 h-12 pointer-events-none" style={styles[position]}>
      <div
        className="absolute w-1.5 h-1.5 rotate-45"
        style={{
          background: 'hsl(43 76% 52% / 0.3)',
          boxShadow: '0 0 6px hsl(43 76% 52% / 0.2)',
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
  const crystals = [
    { x: '8%', y: '18%', size: 10, color: 'hsl(145 60% 45% / 0.5)', glow: 'hsl(145 60% 45% / 0.15)', delay: 0, duration: 7 },
    { x: '88%', y: '22%', size: 8, color: 'hsl(270 45% 55% / 0.4)', glow: 'hsl(270 45% 55% / 0.12)', delay: 1.5, duration: 8 },
    { x: '15%', y: '65%', size: 6, color: 'hsl(43 76% 55% / 0.4)', glow: 'hsl(43 76% 55% / 0.12)', delay: 0.8, duration: 6 },
    { x: '82%', y: '70%', size: 9, color: 'hsl(160 55% 40% / 0.45)', glow: 'hsl(160 55% 40% / 0.12)', delay: 2, duration: 9 },
    { x: '5%', y: '42%', size: 5, color: 'hsl(200 50% 50% / 0.3)', glow: 'hsl(200 50% 50% / 0.1)', delay: 3, duration: 7.5 },
    { x: '92%', y: '48%', size: 7, color: 'hsl(145 50% 50% / 0.35)', glow: 'hsl(145 50% 50% / 0.1)', delay: 1, duration: 8.5 },
    { x: '25%', y: '15%', size: 4, color: 'hsl(43 76% 60% / 0.3)', glow: 'hsl(43 76% 60% / 0.08)', delay: 2.5, duration: 6.5 },
    { x: '72%', y: '80%', size: 5, color: 'hsl(270 40% 50% / 0.3)', glow: 'hsl(270 40% 50% / 0.08)', delay: 0.5, duration: 7 },
    { x: '50%', y: '12%', size: 6, color: 'hsl(160 60% 45% / 0.3)', glow: 'hsl(160 60% 45% / 0.1)', delay: 1.8, duration: 8 },
    { x: '38%', y: '82%', size: 4, color: 'hsl(43 70% 50% / 0.25)', glow: 'hsl(43 70% 50% / 0.08)', delay: 3.5, duration: 7 },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${malachiteTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Deep layered overlay — velvet darkness with emerald depth */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 60% 50% at 50% 45%, hsl(160 60% 12% / 0.25) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 50% 50%, hsl(145 50% 18% / 0.15) 0%, transparent 60%),
          radial-gradient(ellipse 80% 60% at 20% 80%, hsl(270 30% 12% / 0.12) 0%, transparent 50%),
          radial-gradient(ellipse 80% 60% at 80% 20%, hsl(160 40% 10% / 0.12) 0%, transparent 50%),
          linear-gradient(180deg, hsl(160 30% 3% / 0.92) 0%, hsl(160 30% 5% / 0.78) 35%, hsl(160 30% 4% / 0.82) 65%, hsl(160 30% 3% / 0.95) 100%)
        `,
      }} />

      {/* Central magical glow — the "artifact display" */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: '50%', top: '48%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px',
        }}
        animate={{
          opacity: [0.4, 0.7, 0.5, 0.65, 0.4],
          scale: [1, 1.05, 0.98, 1.03, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full" style={{
          background: `
            radial-gradient(circle, hsl(160 60% 25% / 0.12) 0%, hsl(145 50% 20% / 0.06) 40%, transparent 70%)
          `,
          filter: 'blur(40px)',
        }} />
      </motion.div>

      {/* Secondary warm glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: '50%', top: '45%',
          transform: 'translate(-50%, -50%)',
          width: '300px', height: '300px',
        }}
        animate={{ opacity: [0.3, 0.5, 0.35, 0.55, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-full h-full rounded-full" style={{
          background: 'radial-gradient(circle, hsl(43 76% 52% / 0.06) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }} />
      </motion.div>

      {/* Magic circle SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <MagicCircle className="w-[550px] h-[550px] md:w-[750px] md:h-[750px] opacity-[0.12]" />
      </div>

      {/* Gold ornament corners */}
      <GoldOrnamentCorner position="tl" />
      <GoldOrnamentCorner position="tr" />
      <GoldOrnamentCorner position="bl" />
      <GoldOrnamentCorner position="br" />

      {/* Gold ornament lines — horizontal & vertical frame */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top decorative line */}
        <div className="absolute top-16 left-16 right-16 h-px opacity-[0.08]" 
          style={{ background: 'linear-gradient(90deg, transparent 0%, hsl(43 76% 52%) 20%, hsl(43 76% 52%) 80%, transparent 100%)' }} />
        {/* Bottom decorative line */}
        <div className="absolute bottom-16 left-16 right-16 h-px opacity-[0.08]" 
          style={{ background: 'linear-gradient(90deg, transparent 0%, hsl(43 76% 52%) 20%, hsl(43 76% 52%) 80%, transparent 100%)' }} />
        {/* Left */}
        <div className="absolute top-16 bottom-16 left-16 w-px opacity-[0.06]" 
          style={{ background: 'linear-gradient(180deg, transparent 0%, hsl(43 76% 52%) 20%, hsl(43 76% 52%) 80%, transparent 100%)' }} />
        {/* Right */}
        <div className="absolute top-16 bottom-16 right-16 w-px opacity-[0.06]" 
          style={{ background: 'linear-gradient(180deg, transparent 0%, hsl(43 76% 52%) 20%, hsl(43 76% 52%) 80%, transparent 100%)' }} />

        {/* Center horizontal ornament */}
        <div className="absolute top-1/2 left-[10%] right-[10%] h-px opacity-[0.04] -translate-y-1/2"
          style={{ background: 'linear-gradient(90deg, transparent, hsl(43 76% 52%), transparent)' }} />
      </div>

      {/* Floating crystals */}
      {crystals.map((c, i) => (
        <FloatingCrystal key={i} {...c} />
      ))}

      {/* Gold particles */}
      <GoldParticles count={24} />

      {/* Main content — "artifact display" */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-20">
        {/* Artifact icons row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center justify-center gap-8 md:gap-14 mb-10"
        >
          {[
            { Icon: Gem, delay: 0.6, label: "Кристалл", glowColor: 'hsl(145 60% 45% / 0.15)' },
            { Icon: Sparkles, delay: 0.8, label: "Магия", glowColor: 'hsl(43 76% 52% / 0.15)' },
            { Icon: KeyRound, delay: 1.0, label: "Ключ", glowColor: 'hsl(270 40% 55% / 0.12)' },
          ].map(({ Icon, delay, label, glowColor }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay, ease: "easeOut" }}
              className="flex flex-col items-center gap-2"
            >
              <motion.div
                className="relative p-4 rounded-full border border-accent/15"
                style={{
                  background: `radial-gradient(circle, ${glowColor}, transparent 70%)`,
                  boxShadow: `0 0 30px ${glowColor}`,
                }}
                animate={{ 
                  boxShadow: [
                    `0 0 20px ${glowColor}`,
                    `0 0 40px ${glowColor}`,
                    `0 0 20px ${glowColor}`,
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 }}
              >
                <Icon className="h-6 w-6 md:h-7 md:w-7 text-accent" />
              </motion.div>
              <span className="font-body text-[9px] text-accent/35 uppercase tracking-[0.2em]">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Text content with dark backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-backdrop"
        >
          {/* Decorative line above title */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="mx-auto mb-6 max-w-xs"
          >
            <div className="h-px" style={{
              background: 'linear-gradient(90deg, transparent, hsl(43 76% 52% / 0.4), transparent)',
            }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{
              background: 'linear-gradient(135deg, hsl(43 76% 72%), hsl(43 76% 48%), hsl(43 70% 58%), hsl(43 76% 68%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 8px hsl(43 76% 52% / 0.15))',
            }}
          >
            Интегральный подход к&nbsp;вашей жизни
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-display text-lg md:text-2xl text-foreground/85 italic mb-3"
          >
            Таролог · Социолог · Коуч · Семейный психолог
          </motion.p>

          {/* Decorative line below subtitle */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="mx-auto mb-5 max-w-[120px]"
          >
            <div className="h-px" style={{
              background: 'linear-gradient(90deg, transparent, hsl(160 50% 35% / 0.3), transparent)',
            }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="font-body text-sm md:text-base text-foreground/65 mb-8 max-w-xl mx-auto leading-relaxed"
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
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, hsl(var(--background)), transparent)' }} />
      
      {/* Top vignette */}
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, hsl(160 30% 3% / 0.5), transparent)' }} />
    </section>
  );
};

export default Hero;