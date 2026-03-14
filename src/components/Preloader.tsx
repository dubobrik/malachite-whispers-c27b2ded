import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import boxImg from "@/assets/box-preloader.jpg";

type Phase = "dark" | "appear" | "open" | "glow" | "expand" | "fade";

const ease = [0.25, 0.1, 0.25, 1] as const;
const lidEase = [0.12, 0.8, 0.3, 1] as const;

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<Phase>("dark");

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase("appear"), 150),
      setTimeout(() => setPhase("open"), 550),
      setTimeout(() => setPhase("glow"), 1350),
      setTimeout(() => setPhase("expand"), 1900),
      setTimeout(() => setPhase("fade"), 2350),
      setTimeout(onComplete, 2800),
    ];
    return () => t.forEach(clearTimeout);
  }, [onComplete]);

  const opened = phase !== "dark" && phase !== "appear";
  const glowing = phase === "glow" || phase === "expand" || phase === "fade";
  const expanding = phase === "expand" || phase === "fade";

  const particles = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      size: 1.5 + Math.random() * 3.5,
      hue: 38 + Math.random() * 12,
      sat: 60 + Math.random() * 20,
      light: 52 + Math.random() * 22,
      startX: (Math.random() - 0.5) * 26,
      driftX: (Math.random() - 0.5) * 90,
      travelY: -80 - Math.random() * 160,
      dur: 1.2 + Math.random() * 1,
      delay: i * 0.05,
    })), []
  );

  return (
    <AnimatePresence>
      {phase !== "fade" ? (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "hsl(160 30% 3%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          {/* ── Ambient emerald glow ── */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: expanding ? 1 : glowing ? 0.5 : opened ? 0.1 : 0,
              scale: expanding ? 1.6 : 1,
            }}
            transition={{ duration: 1, ease }}
            style={{
              background: `
                radial-gradient(ellipse 55% 45% at 50% 48%, hsl(43 76% 52% / 0.12) 0%, transparent 70%),
                radial-gradient(ellipse 70% 55% at 50% 55%, hsl(160 55% 22% / 0.06) 0%, transparent 60%)
              `,
            }}
          />

          {/* ── Full-screen golden wash ── */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: expanding ? 0.8 : 0 }}
            transition={{ duration: 0.6, ease }}
            style={{
              background: `radial-gradient(ellipse 120% 90% at 50% 45%, hsl(43 76% 52% / 0.2) 0%, hsl(43 76% 52% / 0.04) 45%, transparent 75%)`,
            }}
          />

          <div className="relative flex flex-col items-center">
            {/* ── Golden light burst behind box ── */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                width: 450, height: 450,
                left: "50%", top: "42%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                opacity: expanding ? 1 : glowing ? 0.7 : opened ? 0.1 : 0,
                scale: expanding ? 2.5 : glowing ? 1.4 : 1,
              }}
              transition={{ duration: 0.8, ease }}
            >
              <div className="w-full h-full rounded-full" style={{
                background: `radial-gradient(circle, hsl(43 76% 55% / 0.25) 0%, hsl(43 76% 52% / 0.08) 35%, transparent 65%)`,
                filter: "blur(40px)",
              }} />
            </motion.div>

            {/* ── Box container ── */}
            <motion.div
              className="relative"
              style={{ width: "min(28vh, 260px)", perspective: "900px" }}
              initial={{ opacity: 0, scale: 0.75, y: 25 }}
              animate={{
                opacity: expanding ? 0 : 1,
                scale: expanding ? 1.15 : 1,
                y: 0,
              }}
              transition={{ duration: 0.6, ease }}
            >
              {/* Box body */}
              <div className="relative rounded-xl" style={{
                aspectRatio: "1",
                border: "1.5px solid hsl(43 76% 52% / 0.25)",
                boxShadow: `
                  0 12px 48px hsl(0 0% 0% / 0.6),
                  0 0 60px hsl(160 50% 18% / 0.08),
                  inset 0 -4px 12px hsl(0 0% 0% / 0.3)
                `,
                overflow: "hidden",
              }}>
                <img src={boxImg} alt="" className="w-full h-full object-cover" />

                {/* ── Lid — realistic hinge rotation ── */}
                <motion.div
                  className="absolute top-0 left-0 right-0 origin-top"
                  style={{
                    height: "50%",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  animate={{
                    rotateX: opened ? -80 : 0,
                    opacity: opened ? 0.45 : 1,
                  }}
                  transition={{
                    rotateX: { duration: 1.1, ease: lidEase },
                    opacity: { duration: 0.8, ease },
                  }}
                >
                  {/* Lid outer surface */}
                  <div className="absolute inset-0" style={{
                    background: `linear-gradient(180deg, hsl(160 38% 7%) 0%, hsl(160 32% 10%) 50%, hsl(160 28% 8%) 100%)`,
                    borderBottom: "1px solid hsl(43 76% 52% / 0.15)",
                  }}>
                    {/* Malachite stone texture */}
                    <div className="absolute inset-0 opacity-25" style={{
                      background: `
                        repeating-linear-gradient(155deg, transparent, transparent 7px, hsl(160 45% 16% / 0.25) 7px, hsl(160 45% 16% / 0.25) 8px),
                        repeating-linear-gradient(195deg, transparent, transparent 11px, hsl(160 38% 14% / 0.18) 11px, hsl(160 38% 14% / 0.18) 12px)
                      `,
                    }} />
                    {/* Gold clasp */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-2.5 rounded-b-full"
                      style={{
                        background: "linear-gradient(180deg, hsl(43 76% 55% / 0.5), hsl(38 87% 38% / 0.4))",
                        boxShadow: "0 1px 6px hsl(43 76% 52% / 0.15)",
                      }} />
                  </div>
                  {/* Lid inner face */}
                  <div className="absolute inset-0" style={{
                    transform: "rotateX(180deg)",
                    backfaceVisibility: "hidden",
                    background: "linear-gradient(180deg, hsl(43 70% 22% / 0.35), hsl(160 28% 7%))",
                  }} />
                </motion.div>

                {/* ── Golden interior light ── */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    opacity: expanding ? 1 : glowing ? 0.8 : opened ? 0.2 : 0,
                  }}
                  transition={{ duration: 0.7, ease }}
                  style={{
                    background: `
                      radial-gradient(ellipse 85% 65% at 50% 12%, hsl(43 76% 58% / 0.5) 0%, transparent 55%),
                      radial-gradient(ellipse 55% 35% at 50% 22%, hsl(43 70% 68% / 0.3) 0%, transparent 45%),
                      linear-gradient(180deg, hsl(43 76% 52% / 0.15) 0%, transparent 45%)
                    `,
                  }}
                />

                {/* ── Light rays ── */}
                <motion.div
                  className="absolute pointer-events-none"
                  style={{
                    top: 0, left: "8%", right: "8%", height: "55%",
                    background: `conic-gradient(from 250deg at 50% 0%, transparent 28%, hsl(43 76% 60% / 0.07) 33%, transparent 38%, transparent 53%, hsl(43 76% 60% / 0.05) 57%, transparent 61%, transparent 73%, hsl(43 76% 60% / 0.04) 77%, transparent 81%)`,
                    filter: "blur(6px)",
                  }}
                  animate={{
                    opacity: glowing ? 1 : 0,
                    scaleY: glowing ? 1.4 : 0.4,
                  }}
                  transition={{ duration: 0.8, ease }}
                />
              </div>

              {/* Gold ornament corners */}
              {[
                "absolute -top-1 -left-1 w-4 h-4 border-t border-l border-accent/30 rounded-tl",
                "absolute -top-1 -right-1 w-4 h-4 border-t border-r border-accent/30 rounded-tr",
                "absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-accent/30 rounded-bl",
                "absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-accent/30 rounded-br",
              ].map((cls, i) => (
                <div key={i} className={`${cls} pointer-events-none`} />
              ))}

              {/* ── Rising particles ── */}
              {opened && particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: p.size,
                    height: p.size,
                    background: `radial-gradient(circle, hsl(${p.hue} ${p.sat}% ${p.light}%), hsl(${p.hue} ${p.sat}% ${p.light - 12}% / 0.5))`,
                    left: `calc(50% + ${p.startX}px)`,
                    top: "22%",
                    boxShadow: `0 0 ${p.size * 2.5}px hsl(${p.hue} ${p.sat}% ${p.light}% / 0.5)`,
                  }}
                  initial={{ opacity: 0, y: 0, x: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.85, 0.6, 0],
                    y: p.travelY,
                    x: p.driftX,
                    scale: [0, 1, 0.8, 0.3],
                  }}
                  transition={{
                    duration: p.dur,
                    delay: p.delay + 0.4,
                    ease: [0.2, 0.6, 0.4, 1],
                  }}
                />
              ))}
            </motion.div>

            {/* ── Title ── */}
            <motion.p
              className="mt-8 font-display text-lg tracking-[0.25em]"
              style={{
                background: "linear-gradient(135deg, hsl(43 76% 70%), hsl(43 76% 42%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              animate={{
                opacity: expanding ? 0 : opened ? 1 : 0,
                y: opened ? 0 : 10,
              }}
              transition={{ duration: 0.6, ease, delay: 0.25 }}
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
