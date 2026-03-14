import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import lizardIcon from "@/assets/lizard-divider.png";

type Phase = "closed" | "opening" | "revealing" | "done";

const crystals = [
  { color: "linear-gradient(135deg, hsl(160 70% 40%), hsl(160 80% 25%))", size: 28, x: -40, delay: 0 },
  { color: "linear-gradient(135deg, hsl(280 60% 50%), hsl(280 50% 35%))", size: 22, x: 35, delay: 0.15 },
  { color: "linear-gradient(135deg, hsl(43 76% 52%), hsl(43 60% 38%))", size: 18, x: -10, delay: 0.3 },
  { color: "linear-gradient(135deg, hsl(160 90% 50%), hsl(160 70% 30%))", size: 24, x: 50, delay: 0.1 },
  { color: "linear-gradient(135deg, hsl(340 60% 50%), hsl(340 50% 35%))", size: 16, x: -55, delay: 0.25 },
];

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<Phase>("closed");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("opening"), 800),
      setTimeout(() => setPhase("revealing"), 2000),
      setTimeout(() => setPhase("done"), 3200),
      setTimeout(onComplete, 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const isOpen = phase === "opening" || phase === "revealing" || phase === "done";
  const isRevealing = phase === "revealing" || phase === "done";

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{
            background: "linear-gradient(135deg, hsl(165 80% 4%), hsl(165 60% 8%), hsl(162 70% 5%))",
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main container with perspective */}
          <motion.div
            className="relative"
            style={{ perspective: "800px" }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Inner glow when opening */}
            <motion.div
              className="absolute inset-0 -m-8 rounded-3xl pointer-events-none"
              animate={{
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1.2 : 0.8,
              }}
              transition={{ duration: 1 }}
              style={{
                background: "radial-gradient(ellipse at center, hsl(160 70% 40% / 0.3), hsl(43 76% 52% / 0.1), transparent 70%)",
              }}
            />

            {/* === LID === */}
            <motion.div
              className="relative z-10 mx-auto"
              style={{
                width: "min(30vh, 280px)",
                height: "min(8vh, 60px)",
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateX: isOpen ? -110 : 0,
              }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            >
              <div
                className="w-full h-full rounded-t-lg relative overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, hsl(162 60% 22%), hsl(162 50% 16%), hsl(162 70% 12%))",
                  borderTop: "2px solid hsl(43 76% 52% / 0.6)",
                  borderLeft: "2px solid hsl(43 76% 52% / 0.4)",
                  borderRight: "2px solid hsl(43 76% 52% / 0.4)",
                  boxShadow: "0 -4px 20px hsl(43 76% 52% / 0.15), inset 0 2px 8px hsl(160 70% 30% / 0.3)",
                }}
              >
                {/* Malachite veins on lid */}
                <div className="absolute inset-0 opacity-40" style={{
                  background: `
                    radial-gradient(ellipse 80% 60% at 30% 50%, hsl(160 80% 30% / 0.5), transparent),
                    radial-gradient(ellipse 60% 80% at 70% 40%, hsl(162 70% 25% / 0.4), transparent)
                  `,
                }} />
                {/* Gold trim line */}
                <div className="absolute bottom-0 left-2 right-2 h-[1px]"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(43 76% 52% / 0.5), transparent)" }} />
              </div>
            </motion.div>

            {/* === BOX BODY === */}
            <div
              className="relative mx-auto rounded-b-lg overflow-hidden"
              style={{
                width: "min(30vh, 280px)",
                height: "min(20vh, 180px)",
                background: "linear-gradient(180deg, hsl(162 60% 18%), hsl(162 50% 12%), hsl(162 70% 8%))",
                border: "2px solid hsl(43 76% 52% / 0.4)",
                borderTop: "none",
                boxShadow: `
                  0 12px 40px hsl(0 0% 0% / 0.5),
                  0 4px 20px hsl(160 70% 20% / 0.3),
                  inset 0 2px 15px hsl(160 60% 20% / 0.4)
                `,
              }}
            >
              {/* Malachite texture layers */}
              <div className="absolute inset-0" style={{
                background: `
                  radial-gradient(ellipse 120% 80% at 20% 30%, hsl(160 80% 25% / 0.5), transparent 50%),
                  radial-gradient(ellipse 100% 120% at 80% 60%, hsl(162 70% 20% / 0.4), transparent 50%),
                  radial-gradient(ellipse 60% 40% at 50% 80%, hsl(158 60% 30% / 0.3), transparent 40%),
                  radial-gradient(ellipse 140% 60% at 40% 20%, hsl(165 90% 15% / 0.3), transparent 60%)
                `,
              }} />

              {/* Gold corner ornaments */}
              {[
                { bottom: 6, left: 6 },
                { bottom: 6, right: 6 },
              ].map((pos, i) => (
                <div key={i} className="absolute w-5 h-5" style={{
                  ...pos,
                  borderBottom: "2px solid hsl(43 76% 52% / 0.5)",
                  [i === 0 ? "borderLeft" : "borderRight"]: "2px solid hsl(43 76% 52% / 0.5)",
                }} />
              ))}

              {/* Gold clasp */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-5 flex items-center justify-center">
                <div className="w-5 h-3 rounded-b-sm border border-t-0"
                  style={{
                    borderColor: "hsl(43 76% 52% / 0.6)",
                    background: "linear-gradient(180deg, hsl(43 76% 52% / 0.3), hsl(43 76% 40% / 0.15))",
                  }}>
                  <div className="w-2 h-2 mx-auto mt-0.5 rounded-full"
                    style={{ background: "radial-gradient(circle, hsl(43 76% 60% / 0.6), hsl(43 76% 40% / 0.2))" }} />
                </div>
              </div>

              {/* Inner glow visible when open */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  background: "radial-gradient(ellipse at center top, hsl(160 80% 45% / 0.35), hsl(43 76% 52% / 0.1) 40%, transparent 70%)",
                }}
              />

              {/* === CRYSTALS emerging === */}
              {isRevealing && crystals.map((c, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-0"
                  initial={{ opacity: 0, y: 40, scale: 0.3 }}
                  animate={{ opacity: 1, y: -c.size * 2.5, x: c.x, scale: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: c.delay,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className="rotate-45"
                    style={{
                      width: c.size,
                      height: c.size,
                      background: c.color,
                      boxShadow: `0 0 ${c.size}px hsl(160 70% 40% / 0.4), 0 0 ${c.size * 2}px hsl(160 70% 40% / 0.15)`,
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                      transform: "rotate(0deg)",
                    }}
                  />
                </motion.div>
              ))}

              {/* === LIZARD climbing out === */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-0 z-20"
                initial={{ opacity: 0, y: 60, scale: 0.3, rotate: 30 }}
                animate={isRevealing ? {
                  opacity: 1,
                  y: -45,
                  scale: 1,
                  rotate: 0,
                } : { opacity: 0, y: 60, scale: 0.3, rotate: 30 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                <img
                  src={lizardIcon}
                  alt=""
                  className="w-16 h-16 drop-shadow-[0_0_12px_hsl(160_70%_40%_/_0.5)]"
                />
              </motion.div>
            </div>

            {/* Gold particles */}
            {isOpen && [...Array(14)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 2 + Math.random() * 3,
                  height: 2 + Math.random() * 3,
                  background: `hsl(43 ${60 + Math.random() * 20}% ${45 + Math.random() * 20}%)`,
                  left: `calc(50% + ${(Math.random() - 0.5) * 40}px)`,
                  top: "30%",
                }}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, 0.9, 0],
                  y: -80 - Math.random() * 100,
                  x: (Math.random() - 0.5) * 120,
                }}
                transition={{
                  duration: 1.5 + Math.random() * 1,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>

          {/* Title text */}
          <motion.p
            className="mt-12 font-display text-xl tracking-[0.2em]"
            style={{
              background: "linear-gradient(135deg, hsl(43 76% 65%), hsl(43 76% 42%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isRevealing ? 1 : 0, y: isRevealing ? 0 : 10 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Малахитовая шкатулка
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
