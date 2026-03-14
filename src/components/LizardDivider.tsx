import lizardDivider from "@/assets/lizard-divider.png";

const LizardDivider = () => (
  <div className="flex items-center justify-center py-8">
    <div className="h-px flex-1 bg-accent/20 max-w-xs" />
    <img src={lizardDivider} alt="" className="h-10 w-10 mx-4 opacity-60" />
    <div className="h-px flex-1 bg-accent/20 max-w-xs" />
  </div>
);

export default LizardDivider;
