import { ReactNode } from "react";
import { useParallax } from "@/hooks/use-parallax";

interface ParallaxLayerProps {
  children: ReactNode;
  /** 0 = fixed, 0.5 = half speed, 1 = normal scroll speed. Default 0.5 */
  speed?: number;
  className?: string;
}

/**
 * Wraps children in a parallax-shifted container.
 * Decorative elements use speed < 1 to lag behind content.
 */
const ParallaxLayer = ({ children, speed = 0.5, className = "" }: ParallaxLayerProps) => {
  const { ref, offset } = useParallax(speed);

  return (
    <div
      ref={ref}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        transform: `translateY(${offset}px)`,
        willChange: "transform",
        transition: "transform 0.1s linear",
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer;
