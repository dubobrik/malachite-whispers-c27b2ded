import { useIsMobile } from "@/hooks/use-mobile";
import DesktopAmbientAtmosphere from "./DesktopAmbientAtmosphere";

const AmbientAtmosphere = () => {
  const isMobile = useIsMobile();
  if (isMobile) return null;
  return <DesktopAmbientAtmosphere />;
};

export default AmbientAtmosphere;
