const LizardDivider = () => (
  <div className="relative py-6">
    <div className="flex items-center justify-center">
      <div className="malachite-vein flex-1 max-w-xs" />
      <div className="mx-4 w-3 h-3 rotate-45 border border-accent/30"
        style={{ background: 'linear-gradient(135deg, hsl(43 76% 52% / 0.2), hsl(162 70% 21% / 0.15))' }} />
      <div className="malachite-vein flex-1 max-w-xs" />
    </div>
  </div>
);

export default LizardDivider;
