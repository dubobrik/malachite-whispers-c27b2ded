import { Gem } from "lucide-react";
import { motion } from "framer-motion";

const LizardDivider = () => (
  <div className="relative py-10 overflow-hidden">
    {/* Ambient glow behind divider */}
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      <div className="w-64 h-8 rounded-full" style={{
        background: 'radial-gradient(ellipse, hsl(43 76% 52% / 0.04), transparent 70%)',
        filter: 'blur(15px)',
      }} />
    </div>

    <div className="flex items-center justify-center">
      <div className="malachite-vein flex-1 max-w-xs" />
      <motion.div
        className="mx-5 relative"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Gem className="h-4 w-4 text-accent/40" />
        <div className="absolute inset-0 blur-md" style={{ background: 'hsl(43 76% 52% / 0.2)' }} />
      </motion.div>
      <div className="malachite-vein flex-1 max-w-xs" />
    </div>
  </div>
);

export default LizardDivider;