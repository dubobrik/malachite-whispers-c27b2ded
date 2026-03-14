import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import boxImg from "@/assets/box-preloader.jpg";
import lizardImg from "@/assets/lizard-preloader.jpg";
import crystalsImg from "@/assets/crystals-preloader.webp";

type Phase = "closed" | "opening" | "revealing" | "done";

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
          {/* Main container */}
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Emerald glow behind box */}
            <motion.div
              className="absolute inset-0 -m-16 rounded-3xl pointer-events-none"
              animate={{
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1.3 : 0.8,
              }}
              transition={{ duration: 1 }}
              style={{
                background: "radial-gradient(ellipse at center, hsl(160 70% 40% / 0.35), hsl(43 76% 52% / 0.12), transparent 70%)",
              }}
            />

            {/* Box image with lid overlay */}
            <div className="relative" style={{ width: "min(30vh, 320px)", height: "min(30vh, 320px)" }}>
              {/* The box image */}
              <img
                src={boxImg}
                alt=""
                className="w-full h-full object-cover rounded-xl"
                style={{
                  border: "3px solid hsl(43 76% 52% / 0.5)",
                  boxShadow: `
                    0 12px 40px hsl(0 0% 0% / 0.6),
                    0 4px 20px hsl(160 70% 20% / 0.3),
                    0 0 60px hsl(160 70% 30% / 0.15)
                  `,
                }}
              />

              {/* Dark overlay that lifts to simulate opening */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: "linear-gradient(180deg, hsl(162 70% 5% / 0.85) 0%, hsl(162 70% 5% / 0.4) 50%, transparent 100%)",
                }}
                animate={{
                  opacity: isOpen ? 0 : 1,
                  y: isOpen ? "-60%" : "0%",
                }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              />

              {/* Inner glow when open */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                animate={{ opacity: isOpen ? 0.7 : 0 }}
                transition={{ duration: 1 }}
                style={{
                  background: "radial-gradient(ellipse at center top, hsl(160 80% 45% / 0.4), hsl(43 76% 52% / 0.15) 40%, transparent 70%)",
                }}
              />

              {/* === CRYSTALS emerging === */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 -top-8 z-20"
                initial={{ opacity: 0, y: 80, scale: 0.2 }}
                animate={isRevealing ? {
                  opacity: 1,
                  y: -60,
                  scale: 0.9,
                } : { opacity: 0, y: 80, scale: 0.2 }}
                transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
              >
                <img
                  src={crystalsImg}
                  alt=""
                  className="w-28 h-28 object-contain drop-shadow-[0_0_20px_hsl(160_70%_40%_/_0.6)]"
                  style={{
                    filter: "drop-shadow(0 0 12px hsl(160 80% 45% / 0.5)) drop-shadow(0 0 30px hsl(280 60% 50% / 0.2))",
                  }}
                />
              </motion.div>

              {/* === LIZARD climbing out === */}
              <motion.div
                className="absolute right-[-20px] top-[-10px] z-20"
                initial={{ opacity: 0, y: 60, scale: 0.3, rotate: 20 }}
                animate={isRevealing ? {
                  opacity: 1,
                  y: -30,
                  scale: 1,
                  rotate: -10,
                } : { opacity: 0, y: 60, scale: 0.3, rotate: 20 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                <img
                  src={lizardImg}
                  alt=""
                  className="w-24 h-24 object-cover rounded-full"
                  style={{
                    border: "2px solid hsl(43 76% 52% / 0.4)",
                    boxShadow: "0 0 20px hsl(160 70% 40% / 0.4), 0 4px 12px hsl(0 0% 0% / 0.4)",
                  }}
                />
              </motion.div>
            </div>

            {/* Gold particles */}
            {isOpen && [...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 2 + Math.random() * 3,
                  height: 2 + Math.random() * 3,
                  background: `hsl(43 ${60 + Math.random() * 20}% ${45 + Math.random() * 20}%)`,
                  left: `calc(50% + ${(Math.random() - 0.5) * 60}px)`,
                  top: "40%",
                }}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, 0.9, 0],
                  y: -100 - Math.random() * 120,
                  x: (Math.random() - 0.5) * 140,
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
