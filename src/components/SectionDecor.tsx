import { motion } from "framer-motion";

interface Crystal {
  x: string;
  y: string;
  size: number;
  color: string;
  glow: string;
  delay: number;
  duration: number;
}

interface GlowOrb {
  x: string;
  y: string;
  w: number;
  h: number;
  color: string;
  blur: number;
  delay: number;
}

const presets: Record<string, { crystals: Crystal[]; glows: GlowOrb[]; veins?: boolean }> = {
  approach: {
    crystals: [
      { x: '5%', y: '20%', size: 7, color: 'hsl(145 60% 45% / 0.3)', glow: 'hsl(145 60% 45% / 0.1)', delay: 0, duration: 8 },
      { x: '92%', y: '60%', size: 5, color: 'hsl(270 40% 50% / 0.25)', glow: 'hsl(270 40% 50% / 0.08)', delay: 1.5, duration: 7 },
      { x: '88%', y: '15%', size: 4, color: 'hsl(43 76% 55% / 0.25)', glow: 'hsl(43 76% 55% / 0.08)', delay: 2.5, duration: 9 },
    ],
    glows: [
      { x: '50%', y: '50%', w: 400, h: 300, color: 'hsl(160 60% 20% / 0.08)', blur: 60, delay: 0 },
      { x: '20%', y: '30%', w: 200, h: 200, color: 'hsl(43 76% 52% / 0.04)', blur: 40, delay: 1 },
    ],
    veins: true,
  },
  services: {
    crystals: [
      { x: '3%', y: '15%', size: 8, color: 'hsl(160 55% 40% / 0.3)', glow: 'hsl(160 55% 40% / 0.1)', delay: 0.5, duration: 9 },
      { x: '95%', y: '25%', size: 6, color: 'hsl(43 76% 55% / 0.3)', glow: 'hsl(43 76% 55% / 0.1)', delay: 1, duration: 7 },
      { x: '8%', y: '75%', size: 5, color: 'hsl(270 40% 50% / 0.2)', glow: 'hsl(270 40% 50% / 0.07)', delay: 2, duration: 8 },
      { x: '90%', y: '80%', size: 7, color: 'hsl(145 60% 45% / 0.25)', glow: 'hsl(145 60% 45% / 0.08)', delay: 0, duration: 7.5 },
      { x: '50%', y: '5%', size: 4, color: 'hsl(200 50% 50% / 0.2)', glow: 'hsl(200 50% 50% / 0.06)', delay: 3, duration: 8.5 },
    ],
    glows: [
      { x: '30%', y: '20%', w: 350, h: 250, color: 'hsl(160 60% 18% / 0.1)', blur: 70, delay: 0 },
      { x: '70%', y: '70%', w: 300, h: 250, color: 'hsl(145 50% 20% / 0.08)', blur: 60, delay: 1.5 },
      { x: '50%', y: '50%', w: 200, h: 200, color: 'hsl(43 76% 52% / 0.03)', blur: 50, delay: 2 },
    ],
  },
  about: {
    crystals: [
      { x: '4%', y: '30%', size: 6, color: 'hsl(145 60% 45% / 0.25)', glow: 'hsl(145 60% 45% / 0.08)', delay: 0, duration: 8 },
      { x: '96%', y: '50%', size: 8, color: 'hsl(270 40% 50% / 0.2)', glow: 'hsl(270 40% 50% / 0.07)', delay: 2, duration: 9 },
      { x: '92%', y: '10%', size: 5, color: 'hsl(43 76% 55% / 0.25)', glow: 'hsl(43 76% 55% / 0.08)', delay: 1, duration: 7 },
    ],
    glows: [
      { x: '25%', y: '40%', w: 300, h: 400, color: 'hsl(160 50% 15% / 0.08)', blur: 60, delay: 0 },
      { x: '75%', y: '60%', w: 250, h: 250, color: 'hsl(43 76% 52% / 0.03)', blur: 50, delay: 1 },
    ],
    veins: true,
  },
  testimonials: {
    crystals: [
      { x: '6%', y: '40%', size: 6, color: 'hsl(43 76% 55% / 0.3)', glow: 'hsl(43 76% 55% / 0.1)', delay: 0, duration: 7 },
      { x: '94%', y: '30%', size: 7, color: 'hsl(145 60% 45% / 0.25)', glow: 'hsl(145 60% 45% / 0.08)', delay: 1.5, duration: 8 },
      { x: '50%', y: '90%', size: 4, color: 'hsl(270 40% 50% / 0.2)', glow: 'hsl(270 40% 50% / 0.06)', delay: 2.5, duration: 9 },
    ],
    glows: [
      { x: '50%', y: '40%', w: 500, h: 300, color: 'hsl(160 60% 18% / 0.06)', blur: 80, delay: 0 },
    ],
  },
  contact: {
    crystals: [
      { x: '3%', y: '20%', size: 7, color: 'hsl(145 60% 45% / 0.3)', glow: 'hsl(145 60% 45% / 0.1)', delay: 0, duration: 8 },
      { x: '97%', y: '45%', size: 6, color: 'hsl(270 40% 50% / 0.2)', glow: 'hsl(270 40% 50% / 0.07)', delay: 1, duration: 9 },
      { x: '85%', y: '80%', size: 5, color: 'hsl(43 76% 55% / 0.25)', glow: 'hsl(43 76% 55% / 0.08)', delay: 2, duration: 7 },
      { x: '10%', y: '85%', size: 4, color: 'hsl(160 55% 40% / 0.2)', glow: 'hsl(160 55% 40% / 0.06)', delay: 3, duration: 8.5 },
    ],
    glows: [
      { x: '35%', y: '30%', w: 400, h: 350, color: 'hsl(160 60% 18% / 0.08)', blur: 70, delay: 0 },
      { x: '65%', y: '70%', w: 250, h: 200, color: 'hsl(43 76% 52% / 0.04)', blur: 50, delay: 1.5 },
    ],
  },
};

const SectionDecor = ({ variant }: { variant: keyof typeof presets }) => {
  const { crystals, glows, veins } = presets[variant];

  return (
    <>
      {/* Layer 1.5: Malachite texture veins */}
      {veins && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]">
          <div className="absolute top-[20%] -left-[10%] w-[60%] h-px rotate-[8deg]"
            style={{ background: 'linear-gradient(90deg, transparent, hsl(160 55% 35%), hsl(43 76% 52% / 0.5), transparent)' }} />
          <div className="absolute top-[55%] -right-[5%] w-[50%] h-px rotate-[-5deg]"
            style={{ background: 'linear-gradient(90deg, transparent, hsl(160 55% 35%), transparent)' }} />
          <div className="absolute top-[80%] -left-[5%] w-[40%] h-px rotate-[3deg]"
            style={{ background: 'linear-gradient(90deg, transparent, hsl(43 76% 52% / 0.4), transparent)' }} />
        </div>
      )}

      {/* Layer 2a: Ambient glow orbs */}
      {glows.map((g, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute pointer-events-none"
          style={{
            left: g.x, top: g.y,
            transform: 'translate(-50%, -50%)',
            width: g.w, height: g.h,
          }}
          animate={{ opacity: [0.5, 1, 0.6, 0.9, 0.5], scale: [1, 1.05, 0.97, 1.03, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: g.delay }}
        >
          <div className="w-full h-full rounded-full" style={{
            background: `radial-gradient(circle, ${g.color}, transparent 70%)`,
            filter: `blur(${g.blur}px)`,
          }} />
        </motion.div>
      ))}

      {/* Layer 2b: Floating crystals */}
      {crystals.map((c, i) => (
        <motion.div
          key={`crystal-${i}`}
          className="absolute pointer-events-none"
          style={{ left: c.x, top: c.y }}
          animate={{
            opacity: [0, 0.6, 0.3, 0.7, 0],
            y: [15, -10, 8, -12, 15],
            rotate: [0, 8, -4, 6, 0],
          }}
          transition={{ duration: c.duration, delay: c.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="rotate-45"
            style={{
              width: c.size,
              height: c.size,
              background: `linear-gradient(135deg, ${c.color}, transparent)`,
              boxShadow: `0 0 ${c.size * 2}px ${c.glow}, 0 0 ${c.size * 4}px ${c.glow}`,
              borderRadius: '1px',
            }}
          />
        </motion.div>
      ))}

      {/* Layer 2c: Gold ornament lines at section edges */}
      <div className="absolute top-0 left-[8%] right-[8%] h-px pointer-events-none opacity-[0.06]"
        style={{ background: 'linear-gradient(90deg, transparent, hsl(43 76% 52%), transparent)' }} />
      <div className="absolute bottom-0 left-[8%] right-[8%] h-px pointer-events-none opacity-[0.04]"
        style={{ background: 'linear-gradient(90deg, transparent, hsl(43 76% 52%), transparent)' }} />
    </>
  );
};

export default SectionDecor;