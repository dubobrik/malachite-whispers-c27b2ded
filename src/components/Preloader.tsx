import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import boxImg from "@/assets/box-preloader.jpg";

type Phase = "dark" | "appear" | "open" | "glow" | "fade";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<Phase>("dark");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("appear"), 200),
      setTimeout(() => setPhase("open"), 700),
      setTimeout(() => setPhase("glow"), 1400),
      setTimeout(() => setPhase("fade"), 2100),
      setTimeout(onComplete, 2600),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const isOpen = phase === "open" || phase === "glow" || phase === "fade";
  const isGlowing = phase === "glow" || phase === "fade";

  // Pre-generate particles so they don't re-randomize on render
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: 1.5 + Math.random() * 3,
      hue: 43,
      sat: 60 + Math.random() * 20,
      light: 48 + Math.random() * 20,
      offsetX: (Math.random() - 0.5) * 120,
      startX: (Math.random() - 0.5) * 40,
      driftX: (Math.random() - 0.5) * 80,
      travelY: -80 - Math.random() * 140,
      duration: 1 + Math.random() * 0.8,
      delay: i * 0.04,
    })), []
  );

  return (
    <AnimatePresence>
      {phase !== "fade" ? (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "hsl(160 30% 3%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Ambient background glow — reacts to box opening */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: isGlowing ? 1 : isOpen ? 0.4 : 0,
            }}
            transition={{ duration: 0.8 }}
            style={{
              background: `
                radial-gradient(ellipse 50% 40% at 50% 50%, hsl(43 76% 52% / 0.12) 0%, transparent 70%),
                radial-gradient(ellipse 70% 50% at 50% 55%, hsl(160 60% 25% / 0.08) 0%, transparent 60%)
              `,
            }}
          />

          <div className="relative flex flex-col items-center">
            {/* Golden light burst behind box */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                width: 400, height: 400,
                left: "50%", top: "45%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                opacity: isGlowing ? 1 : isOpen ? 0.3 : 0,
                scale: isGlowing ? 1.4 : 1,
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="w-full h-full rounded-full" style={{
                background: `radial-gradient(circle, hsl(43 76% 52% / 0.2) 0%, hsl(43 76% 52% / 0.06) 40%, transparent 70%)`,
                filter: "blur(30px)",
              }} />
            </motion.div>

            {/* Box container */}
            <motion.div
              className="relative"
              style={{ width: "min(28vh, 280px)", perspective: "800px" }}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              {/* Box body */}
              <div className="relative overflow-hidden rounded-lg" style={{
                aspectRatio: "1",
                border: "2px solid hsl(43 76% 52% / 0.4)",
                boxShadow: `
                  0 8px 32px hsl(0 0% 0% / 0.6),
                  0 0 40px hsl(160 60% 20% / 0.15),
                  inset 0 -2px 8px hsl(0 0% 0% / 0.3)
                `,
              }}>
                <img
                  src={boxImg}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {/* Lid — dark top half that rotates open */}
                <motion.div
                  className="absolute top-0 left-0 right-0 origin-top"
                  style={{ height: "50%", transformStyle: "preserve-3d" }}
                  animate={{
                    rotateX: isOpen ? -75 : 0,
                    opacity: isOpen ? 0.6 : 1,
                  }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                >
                  {/* Lid surface */}
                  <div className="absolute inset-0" style={{
                    background: `
                      linear-gradient(180deg, hsl(160 40% 8%) 0%, hsl(160 35% 12%) 60%, hsl(160 30% 10%) 100%)
                    `,
                    borderBottom: "1px solid hsl(43 76% 52% / 0.25)",
                  }}>
                    {/* Malachite texture on lid */}
                    <div className="absolute inset-0 opacity-30" style={{
                      background: `
                        repeating-linear-gradient(160deg, transparent, transparent 8px, hsl(160 50% 18% / 0.3) 8px, hsl(160 50% 18% / 0.3) 9px),
                        repeating-linear-gradient(200deg, transparent, transparent 12px, hsl(160 40% 15% / 0.2) 12px, hsl(160 40% 15% / 0.2) 13px)
                      `,
                    }} />
                    {/* Gold clasp */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-3 rounded-b-full"
                      style={{
                        background: "linear-gradient(180deg, hsl(43 76% 52% / 0.6), hsl(38 87% 38% / 0.5))",
                        boxShadow: "0 2px 6px hsl(43 76% 52% / 0.2)",
                      }} />
                  </div>
                </motion.div>

                {/* Golden light from inside when opened */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    opacity: isGlowing ? 0.9 : isOpen ? 0.4 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background: `
                      radial-gradient(ellipse 80% 60% at 50% 20%, hsl(43 76% 55% / 0.5) 0%, transparent 60%),
                      radial-gradient(ellipse 60% 40% at 50% 30%, hsl(43 70% 65% / 0.3) 0%, transparent 50%),
                      linear-gradient(180deg, hsl(43 76% 52% / 0.15) 0%, transparent 60%)
                    `,
                  }}
                />
              </div>

              {/* Gold ornament corners on box */}
              <div className="absolute -top-1 -left-1 w-5 h-5 border-t border-l border-accent/40 rounded-tl pointer-events-none" />
              <div className="absolute -top-1 -right-1 w-5 h-5 border-t border-r border-accent/40 rounded-tr pointer-events-none" />
              <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b border-l border-accent/40 rounded-bl pointer-events-none" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b border-r border-accent/40 rounded-br pointer-events-none" />

              {/* Rising magical particles */}
              {isOpen && particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: p.size,
                    height: p.size,
                    background: `hsl(${p.hue} ${p.sat}% ${p.light}%)`,
                    left: `calc(50% + ${p.startX}px)`,
                    top: "30%",
                    boxShadow: `0 0 ${p.size * 2}px hsl(${p.hue} ${p.sat}% ${p.light}% / 0.5)`,
                  }}
                  initial={{ opacity: 0, y: 0, x: 0 }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    y: p.travelY,
                    x: p.driftX,
                  }}
                  transition={{
                    duration: p.duration,
                    delay: p.delay + 0.3,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Title text */}
            <motion.p
              className="mt-8 font-display text-lg tracking-[0.2em]"
              style={{
                background: "linear-gradient(135deg, hsl(43 76% 68%), hsl(43 76% 42%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 8,
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Малахитовая шкатулка
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Preloader;