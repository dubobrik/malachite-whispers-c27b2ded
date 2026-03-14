import { Gem } from "lucide-react";

const LizardDivider = () => (
  <div className="relative py-8">
    <div className="flex items-center justify-center">
      <div className="malachite-vein flex-1 max-w-xs" />
      <div className="mx-5 relative">
        <Gem className="h-4 w-4 text-accent/40 animate-shimmer" />
        <div className="absolute inset-0 blur-md" style={{ background: 'hsl(43 76% 52% / 0.15)' }} />
      </div>
      <div className="malachite-vein flex-1 max-w-xs" />
    </div>
  </div>
);

export default LizardDivider;