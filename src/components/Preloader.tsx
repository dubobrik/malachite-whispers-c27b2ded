import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import boxImg from "@/assets/box-preloader.jpg";
import MagicalDust from "./MagicalDust";

type Phase = "dark" | "appear" | "lidOpen" | "glow" | "expand" | "fade";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<Phase>("dark");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("appear"), 300),
      setTimeout(() => setPhase("lidOpen"), 900),
      setTimeout(() => setPhase("glow"), 1800),
      setTimeout(() => setPhase("expand"), 2400),
      setTimeout(() => setPhase("fade"), 3000),
      setTimeout(onComplete, 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const isOpen = phase !== "dark" && phase !== "appear";
  const isGlowing = phase === "glow" || phase === "expand" || phase === "fade";
  const isExpanding = phase === "expand" || phase === "fade";

  const particles = useMemo(() =>
    Array.from({ length: 28 }, (_, i) => ({
      id: i,
      size: 1.5 + Math.random() * 4,
      hue: 38 + Math.random() * 12,
      sat: 60 + Math.random() * 25,
      light: 50 + Math.random() * 25,
      startX: (Math.random() - 0.5) * 30,
      driftX: (Math.random() - 0.5) * 100,
      travelY: -100 - Math.random() * 180,
      duration: 1.4 + Math.random() * 1.2,
      delay: i * 0.06,
    })), []
  );

  // Smooth cubic-bezier for organic, non-mechanical motion
  const smoothEase = [0.25, 0.1, 0.25, 1] as const;
  const lidEase = [0.16, 0.85, 0.35, 1] as const;

  return (
    <AnimatePresence>
      {phase !== "fade" ? (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "hsl(160 30% 3%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: smoothEase }}
        >
          {/* Ambient background glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: isExpanding ? 1 : isGlowing ? 0.6 : isOpen ? 0.15 : 0,
              scale: isExpanding ? 1.5 : 1,
            }}
            transition={{ duration: 1.2, ease: smoothEase }}
            style={{
              background: `
                radial-gradient(ellipse 60% 50% at 50% 48%, hsl(43 76% 52% / 0.15) 0%, transparent 70%),
                radial-gradient(ellipse 80% 60% at 50% 55%, hsl(160 60% 25% / 0.08) 0%, transparent 60%)
              `,
            }}
          />

          {/* Full-screen golden wash for "expand" phase */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: isExpanding ? 0.7 : 0,
            }}
            transition={{ duration: 0.8, ease: smoothEase }}
            style={{
              background: `radial-gradient(ellipse 100% 80% at 50% 45%, hsl(43 76% 52% / 0.25) 0%, hsl(43 76% 52% / 0.05) 50%, transparent 80%)`,
            }}
          />

          <div className="relative flex flex-col items-center">
            {/* Golden light burst behind box */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                width: 500, height: 500,
                left: "50%", top: "40%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                opacity: isExpanding ? 1 : isGlowing ? 0.8 : isOpen ? 0.15 : 0,
                scale: isExpanding ? 2 : isGlowing ? 1.3 : 1,
              }}
              transition={{ duration: 1, ease: smoothEase }}
            >
              <div className="w-full h-full rounded-full" style={{
                background: `
                  radial-gradient(circle, hsl(43 76% 55% / 0.3) 0%, hsl(43 76% 52% / 0.1) 35%, transparent 65%)
                `,
                filter: "blur(40px)",
              }} />
            </motion.div>

            {/* Box container */}
            <motion.div
              className="relative"
              style={{ width: "min(30vh, 290px)", perspective: "1000px" }}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{
                opacity: isExpanding ? 0 : 1,
                scale: isExpanding ? 1.1 : 1,
                y: 0,
              }}
              transition={{ duration: 0.7, ease: smoothEase }}
            >
              {/* Box body */}
              <div className="relative overflow-visible rounded-lg" style={{
                aspectRatio: "1",
                border: "2px solid hsl(43 76% 52% / 0.35)",
                boxShadow: `
                  0 10px 40px hsl(0 0% 0% / 0.6),
                  0 0 50px hsl(160 60% 20% / 0.12),
                  inset 0 -3px 10px hsl(0 0% 0% / 0.3)
                `,
                overflow: "hidden",
              }}>
                <img
                  src={boxImg}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {/* Lid — rotates upward with realistic 3D pivot */}
                <motion.div
                  className="absolute top-0 left-0 right-0 origin-top"
                  style={{
                    height: "50%",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  animate={{
                    rotateX: isOpen ? -85 : 0,
                    opacity: isOpen ? 0.5 : 1,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: lidEase,
                    rotateX: {
                      duration: 1.4,
                      ease: lidEase,
                    },
                  }}
                >
                  {/* Lid surface */}
                  <div className="absolute inset-0" style={{
                    background: `
                      linear-gradient(180deg, hsl(160 40% 7%) 0%, hsl(160 35% 11%) 55%, hsl(160 30% 9%) 100%)
                    `,
                    borderBottom: "1px solid hsl(43 76% 52% / 0.2)",
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
                        background: "linear-gradient(180deg, hsl(43 76% 55% / 0.6), hsl(38 87% 38% / 0.5))",
                        boxShadow: "0 2px 8px hsl(43 76% 52% / 0.2)",
                      }} />
                  </div>

                  {/* Lid inner side (visible when open) */}
                  <div className="absolute inset-0" style={{
                    transform: "rotateX(180deg)",
                    backfaceVisibility: "hidden",
                    background: "linear-gradient(180deg, hsl(43 76% 25% / 0.4), hsl(160 30% 8%))",
                  }} />
                </motion.div>

                {/* Golden light from inside — gradual reveal */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    opacity: isExpanding ? 1 : isGlowing ? 0.85 : isOpen ? 0.25 : 0,
                  }}
                  transition={{ duration: 0.9, ease: smoothEase }}
                  style={{
                    background: `
                      radial-gradient(ellipse 90% 70% at 50% 15%, hsl(43 76% 58% / 0.55) 0%, transparent 55%),
                      radial-gradient(ellipse 60% 40% at 50% 25%, hsl(43 70% 70% / 0.35) 0%, transparent 45%),
                      linear-gradient(180deg, hsl(43 76% 52% / 0.2) 0%, transparent 50%)
                    `,
                  }}
                />

                {/* Light rays from inside */}
                <motion.div
                  className="absolute pointer-events-none"
                  style={{
                    top: 0, left: "10%", right: "10%", height: "60%",
                    background: `
                      conic-gradient(from 250deg at 50% 0%, transparent 30%, hsl(43 76% 60% / 0.08) 35%, transparent 40%, transparent 55%, hsl(43 76% 60% / 0.06) 58%, transparent 62%, transparent 75%, hsl(43 76% 60% / 0.05) 78%, transparent 82%)
                    `,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: isGlowing ? 1 : 0,
                    scaleY: isGlowing ? 1.3 : 0.5,
                  }}
                  transition={{ duration: 1, ease: smoothEase }}
                />
              </div>

              {/* Gold ornament corners */}
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
                    background: `radial-gradient(circle, hsl(${p.hue} ${p.sat}% ${p.light}%), hsl(${p.hue} ${p.sat}% ${p.light - 15}%))`,
                    left: `calc(50% + ${p.startX}px)`,
                    top: "25%",
                    boxShadow: `0 0 ${p.size * 3}px hsl(${p.hue} ${p.sat}% ${p.light}% / 0.6)`,
                  }}
                  initial={{ opacity: 0, y: 0, x: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.9, 0.7, 0],
                    y: p.travelY,
                    x: p.driftX,
                    scale: [0, 1.2, 1, 0.5],
                  }}
                  transition={{
                    duration: p.duration,
                    delay: p.delay + 0.5,
                    ease: [0.2, 0.6, 0.35, 1],
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
                opacity: isExpanding ? 0 : isOpen ? 1 : 0,
                y: isOpen ? 0 : 12,
              }}
              transition={{ duration: 0.8, ease: smoothEase, delay: 0.3 }}
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
