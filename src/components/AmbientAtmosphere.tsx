import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

interface DustMote {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  driftX: number;
  driftY: number;
  duration: number;
  delay: number;
  hue: number;
}

interface LightReflection {
  id: number;
  x: number;
  y: number;
  size: number;
  hue: number;
  sat: number;
  light: number;
  duration: number;
  delay: number;
}

const AmbientAtmosphere = () => {
  // ✅ ОТКЛЮЧАЕМ НА МОБИЛЬНЫХ
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) return null;

  const { scrollYProgress } = useScroll();
  const glowShift = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const dustMotes = useMemo<DustMote[]>(() =>
    Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      opacity: 0.08 + Math.random() * 0.12,
      driftX: (Math.random() - 0.5) * 40,
      driftY: (Math.random() - 0.5) * 30,
      duration: 14 + Math.random() * 12,
      delay: Math.random() * 10,
      hue: Math.random() > 0.7 ? 160 : 43,
    })), []
  );

  const reflections = useMemo<LightReflection[]>(() =>
    Array.from({ length: 6 }, (_, i) => {
      const palette = [
        { hue: 43, sat: 76, light: 62 },
        { hue: 160, sat: 50, light: 45 },
        { hue: 145, sat: 55, light: 50 },
        { hue: 270, sat: 35, light: 55 },
        { hue: 43, sat: 70, light: 55 },
        { hue: 160, sat: 60, light: 40 },
      ][i];
      return {
        id: i,
        x: 10 + (i * 16) + (Math.random() - 0.5) * 10,
        y: 15 + Math.random() * 70,
        size: 80 + Math.random() * 120,
        ...palette,
        duration: 12 + Math.random() * 8,
        delay: i * 2.5,
      };
    }), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]" aria-hidden="true">
      {dustMotes.map((m) => (
        <motion.div
          key={m.id}
          className="absolute rounded-full"
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            width: m.size,
            height: m.size,
            background: `radial-gradient(circle, hsl(${m.hue} ${
              m.hue === 43 ? "76%" : "50%"
            } ${m.hue === 43 ? "62%" : "45%"}), transparent)`,
            boxShadow: `0 0 ${m.size * 4}px hsl(${m.hue} ${
              m.hue === 43 ? "76%" : "50%"
            } ${m.hue === 43 ? "52%" : "40%"} / 0.15)`,
          }}
          animate={{
            x: [0, m.driftX, -m.driftX * 0.6, m.driftX * 0.4, 0],
            y: [0, m.driftY, -m.driftY * 0.5, m.driftY * 0.3, 0],
            opacity: [0, m.opacity, m.opacity * 0.4, m.opacity * 0.8, 0],
            scale: [0.5, 1, 0.7, 1.1, 0.5],
          }}
          transition={{
            duration: m.duration,
            delay: m.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {reflections.map((r) => (
        <motion.div
          key={`ref-${r.id}`}
          className="absolute rounded-full"
          style={{
            left: `${r.x}%`,
            top: `${r.y}%`,
            width: r.size,
            height: r.size,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, hsl(${r.hue} ${r.sat}% ${r.light}% / 0.03), transparent 70%)`,
            filter: `blur(${r.size * 0.4}px)`,
            y: glowShift,
          }}
          animate={{
            opacity: [0.3, 0.7, 0.4, 0.6, 0.3],
            scale: [1, 1.08, 0.95, 1.04, 1],
          }}
          transition={{
            duration: r.duration,
            delay: r.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AmbientAtmosphere;
