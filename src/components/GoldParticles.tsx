import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Particle {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

const GoldParticles = ({ count = 15 }: { count?: number }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 10,
        duration: Math.random() * 8 + 6,
        opacity: Math.random() * 0.5 + 0.2,
      }))
    );
  }, [count]);

  if (isMobile) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, hsl(43 76% 62%), hsl(43 76% 42%))`,
            animation: `gold-float ${p.duration}s ${p.delay}s ease-in-out infinite`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default GoldParticles;
