import { motion } from "framer-motion";
import { useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MagicalDustProps {
  count?: number;
  className?: string;
}

const MagicalDust = ({ count = 18, className = "" }: MagicalDustProps) => {
  const motes = useMemo(() =>
    Array.from({ length: count }, (_, i) => {
      const hueBase = [43, 145, 160, 270][i % 4];
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1.5 + Math.random() * 2.5,
        hue: hueBase + (Math.random() - 0.5) * 10,
        sat: 50 + Math.random() * 30,
        light: 55 + Math.random() * 20,
        driftX: (Math.random() - 0.5) * 30,
        driftY: (Math.random() - 0.5) * 25,
        duration: 8 + Math.random() * 7,
        delay: Math.random() * 6,
        peakOpacity: 0.25 + Math.random() * 0.3,
      };
    }), [count]
  );

  const isMobile = useIsMobile();
  if (isMobile) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {motes.map((m) => (
        <motion.div
          key={m.id}
          className="absolute rounded-full"
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            width: m.size,
            height: m.size,
            background: `radial-gradient(circle, hsl(${m.hue} ${m.sat}% ${m.light}%), hsl(${m.hue} ${m.sat}% ${m.light - 15}% / 0.4))`,
            boxShadow: `0 0 ${m.size * 3}px hsl(${m.hue} ${m.sat}% ${m.light}% / 0.3)`,
          }}
          animate={{
            x: [0, m.driftX, -m.driftX * 0.5, m.driftX * 0.7, 0],
            y: [0, m.driftY, -m.driftY * 0.6, m.driftY * 0.4, 0],
            opacity: [0, m.peakOpacity, m.peakOpacity * 0.5, m.peakOpacity * 0.8, 0],
            scale: [0.6, 1, 0.8, 1.1, 0.6],
          }}
          transition={{
            duration: m.duration,
            delay: m.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default MagicalDust;
