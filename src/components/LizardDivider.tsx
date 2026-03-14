import lizardDivider from "@/assets/lizard-divider.png";

const LizardDivider = () => (
  <div className="relative py-6">
    <div className="flex items-center justify-center">
      <div className="malachite-vein flex-1 max-w-xs" />
      <img src={lizardDivider} alt="" className="h-8 w-8 mx-4 opacity-40" />
      <div className="malachite-vein flex-1 max-w-xs" />
    </div>
  </div>
);

export default LizardDivider;
