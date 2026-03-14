import { motion } from "framer-motion";
import { Gem } from "lucide-react";

const LizardDivider = () => (
  <div className="relative py-8 overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      <div className="w-80 h-6 rounded-full" style={{
        background: 'radial-gradient(ellipse, hsl(43 76% 52% / 0.03), transparent 70%)',
        filter: 'blur(15px)',
      }} />
    </div>

    <div className="flex items-center justify-center">
      <div className="malachite-vein flex-1 max-w-md" />
      <motion.div
        className="mx-6 relative"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Gem className="h-3.5 w-3.5 text-accent/30" />
        <div className="absolute inset-0 blur-lg" style={{ background: 'hsl(43 76% 52% / 0.15)' }} />
      </motion.div>
      <div className="malachite-vein flex-1 max-w-md" />
    </div>
  </div>
);

export default LizardDivider;
