import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import lizardIcon from "@/assets/lizard-divider.png";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"sleeping" | "waking" | "done">("sleeping");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("waking"), 600);
    const t2 = setTimeout(() => setPhase("done"), 2200);
    const t3 = setTimeout(onComplete, 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" ? null : null}
      <motion.div
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(135deg, hsl(165 80% 6%), hsl(165 80% 10%), hsl(162 70% 8%))",
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Gemstone box base */}
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Box shape */}
          <div className="relative w-24 h-16 rounded-lg border-2 border-accent/40 flex items-center justify-center"
            style={{
              background: "linear-gradient(145deg, hsl(162 70% 15%), hsl(165 80% 10%))",
              boxShadow: "0 8px 30px hsl(43 76% 52% / 0.15), inset 0 1px 0 hsl(43 76% 52% / 0.1)",
            }}>
            {/* Gold lock ornament */}
            <div className="w-4 h-4 rounded-full border border-accent/50"
              style={{ background: "radial-gradient(circle, hsl(43 76% 52% / 0.4), transparent)" }} />
          </div>

          {/* Lizard waking up on top of the box */}
          <motion.div
            className="absolute -top-10"
            initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
            animate={
              phase === "sleeping"
                ? { opacity: 0.4, scale: 0.6, rotate: -10 }
                : { opacity: 1, scale: 1, rotate: 0, y: -8 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src={lizardIcon} alt="" className="h-12 w-12 drop-shadow-lg" />
          </motion.div>

          {/* Emerald glow around box */}
          <motion.div
            className="absolute inset-0 -m-6 rounded-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={phase === "waking" ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              background: "radial-gradient(circle, hsl(160 70% 40% / 0.15), transparent 70%)",
            }}
          />

          {/* Floating gold particles */}
          {phase === "waking" && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{ background: "hsl(43 76% 52%)" }}
                  initial={{
                    opacity: 0,
                    x: (Math.random() - 0.5) * 20,
                    y: 0,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    y: -60 - Math.random() * 40,
                    x: (Math.random() - 0.5) * 60,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </>
          )}
        </motion.div>

        {/* Text */}
        <motion.p
          className="mt-10 font-display text-lg tracking-widest"
          style={{
            background: "linear-gradient(135deg, hsl(43 76% 62%), hsl(43 76% 42%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "waking" ? 1 : 0.3 }}
          transition={{ duration: 0.8 }}
        >
          LoveBL
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
