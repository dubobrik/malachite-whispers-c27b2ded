import { motion } from "framer-motion";

/**
 * Subtle fantasy artifact decorations:
 * - Malachite swirl patterns (SVG)
 * - Gemstone accents (emerald, amethyst, gold)
 * - Gold filigree ornaments
 * - Arcane/magical symbols
 *
 * Each variant places decorations at different edges to avoid repetition.
 */

type Variant = "about" | "services" | "approach" | "testimonials" | "contact";

/* ── Malachite Swirl ── */
const MalachiteSwirl = ({
  x, y, scale = 1, rotate = 0, opacity = 0.06,
}: { x: string; y: string; scale?: number; rotate?: number; opacity?: number }) => (
  <div
    className="absolute pointer-events-none"
    style={{ left: x, top: y, opacity, transform: `rotate(${rotate}deg) scale(${scale})` }}
  >
    <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
      <path
        d="M10 80 Q40 10 100 60 T190 40"
        stroke="hsl(160 55% 35%)"
        strokeWidth="1.2"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M15 90 Q55 25 110 65 T185 55"
        stroke="hsl(160 45% 28%)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M20 100 Q65 40 120 70 T180 65"
        stroke="hsl(160 50% 32%)"
        strokeWidth="0.5"
        fill="none"
        opacity="0.3"
      />
    </svg>
  </div>
);

/* ── Gemstone ── */
const Gemstone = ({
  x, y, hue, sat, light, size = 12, delay = 0,
}: { x: string; y: string; hue: number; sat: number; light: number; size?: number; delay?: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: y }}
    animate={{
      opacity: [0.15, 0.35, 0.2, 0.3, 0.15],
      scale: [1, 1.08, 0.95, 1.05, 1],
    }}
    transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg width={size * 2.5} height={size * 3} viewBox="0 0 25 30" fill="none">
      {/* Gem body — faceted shape */}
      <polygon
        points="12.5,1 24,10 20,29 5,29 1,10"
        fill={`hsl(${hue} ${sat}% ${light}% / 0.25)`}
        stroke={`hsl(${hue} ${sat}% ${light}% / 0.4)`}
        strokeWidth="0.5"
      />
      {/* Top facet */}
      <polygon
        points="12.5,1 24,10 12.5,14 1,10"
        fill={`hsl(${hue} ${sat}% ${light + 15}% / 0.15)`}
      />
      {/* Center highlight */}
      <polygon
        points="12.5,14 20,29 5,29"
        fill={`hsl(${hue} ${sat}% ${light}% / 0.1)`}
      />
    </svg>
    {/* Glow */}
    <div
      className="absolute rounded-full"
      style={{
        width: size * 2, height: size * 2,
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        background: `radial-gradient(circle, hsl(${hue} ${sat}% ${light}% / 0.15), transparent 70%)`,
        filter: `blur(${size}px)`,
      }}
    />
  </motion.div>
);

/* ── Gold Filigree ── */
const GoldFiligree = ({
  x, y, flip = false, opacity = 0.08,
}: { x: string; y: string; flip?: boolean; opacity?: number }) => (
  <div
    className="absolute pointer-events-none"
    style={{ left: x, top: y, opacity, transform: flip ? "scaleX(-1)" : undefined }}
  >
    <svg width="140" height="80" viewBox="0 0 140 80" fill="none">
      {/* Main scroll */}
      <path
        d="M5 75 Q20 30 50 50 T90 25 Q110 15 130 30"
        stroke="hsl(43 76% 52%)"
        strokeWidth="0.8"
        fill="none"
      />
      {/* Inner curl */}
      <path
        d="M15 70 Q30 40 55 52 T85 35"
        stroke="hsl(43 76% 52%)"
        strokeWidth="0.5"
        fill="none"
        opacity="0.6"
      />
      {/* Leaf/petal shapes */}
      <ellipse cx="50" cy="48" rx="6" ry="3" transform="rotate(-20 50 48)"
        fill="hsl(43 76% 52% / 0.15)" stroke="hsl(43 76% 52% / 0.3)" strokeWidth="0.4" />
      <ellipse cx="90" cy="28" rx="5" ry="2.5" transform="rotate(10 90 28)"
        fill="hsl(43 76% 52% / 0.12)" stroke="hsl(43 76% 52% / 0.25)" strokeWidth="0.4" />
      {/* Dots/beads along the scroll */}
      <circle cx="30" cy="58" r="1.5" fill="hsl(43 76% 52% / 0.3)" />
      <circle cx="70" cy="38" r="1.2" fill="hsl(43 76% 52% / 0.25)" />
      <circle cx="115" cy="28" r="1.8" fill="hsl(43 76% 52% / 0.3)" />
      <circle cx="130" cy="30" r="1" fill="hsl(43 76% 52% / 0.2)" />
    </svg>
  </div>
);

/* ── Arcane Symbol ── */
const ArcaneSymbol = ({
  x, y, variant = 0, opacity = 0.06, size = 60, delay = 0,
}: { x: string; y: string; variant?: number; opacity?: number; size?: number; delay?: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: y, opacity }}
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 120, delay, repeat: Infinity, ease: "linear" }}
  >
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      {variant === 0 && (
        <>
          {/* Triple crescent */}
          <path d="M30 5 A25 25 0 0 1 30 55" stroke="hsl(43 76% 52%)" strokeWidth="0.5" fill="none" />
          <path d="M30 5 A25 25 0 0 0 30 55" stroke="hsl(43 76% 52%)" strokeWidth="0.5" fill="none" opacity="0.5" />
          <circle cx="30" cy="30" r="8" stroke="hsl(43 76% 52%)" strokeWidth="0.4" fill="none" />
          <circle cx="30" cy="30" r="2" fill="hsl(43 76% 52% / 0.3)" />
        </>
      )}
      {variant === 1 && (
        <>
          {/* Rune-like cross */}
          <line x1="30" y1="5" x2="30" y2="55" stroke="hsl(160 50% 35%)" strokeWidth="0.5" />
          <line x1="5" y1="30" x2="55" y2="30" stroke="hsl(160 50% 35%)" strokeWidth="0.5" />
          <line x1="12" y1="12" x2="48" y2="48" stroke="hsl(160 50% 35%)" strokeWidth="0.3" opacity="0.5" />
          <line x1="48" y1="12" x2="12" y2="48" stroke="hsl(160 50% 35%)" strokeWidth="0.3" opacity="0.5" />
          <circle cx="30" cy="30" r="12" stroke="hsl(160 50% 35%)" strokeWidth="0.4" fill="none" />
          <circle cx="30" cy="30" r="3" fill="hsl(160 50% 35% / 0.2)" />
        </>
      )}
      {variant === 2 && (
        <>
          {/* Eye of wisdom */}
          <ellipse cx="30" cy="30" rx="22" ry="12" stroke="hsl(43 76% 52%)" strokeWidth="0.5" fill="none" />
          <circle cx="30" cy="30" r="6" stroke="hsl(43 76% 52%)" strokeWidth="0.4" fill="hsl(43 76% 52% / 0.1)" />
          <circle cx="30" cy="30" r="2.5" fill="hsl(43 76% 52% / 0.25)" />
          <path d="M8 30 Q20 18 30 18 T52 30" stroke="hsl(43 76% 52%)" strokeWidth="0.3" fill="none" opacity="0.4" />
          <path d="M8 30 Q20 42 30 42 T52 30" stroke="hsl(43 76% 52%)" strokeWidth="0.3" fill="none" opacity="0.4" />
        </>
      )}
    </svg>
  </motion.div>
);

/* ── Variant configs ── */
const configs: Record<Variant, {
  swirls: React.ComponentProps<typeof MalachiteSwirl>[];
  gems: React.ComponentProps<typeof Gemstone>[];
  filigrees: React.ComponentProps<typeof GoldFiligree>[];
  symbols: React.ComponentProps<typeof ArcaneSymbol>[];
}> = {
  about: {
    swirls: [
      { x: "-3%", y: "10%", rotate: 12, opacity: 0.05 },
    ],
    gems: [
      { x: "93%", y: "15%", hue: 270, sat: 45, light: 55, size: 10, delay: 0 },
      { x: "5%", y: "78%", hue: 145, sat: 55, light: 45, size: 8, delay: 2 },
    ],
    filigrees: [
      { x: "75%", y: "85%", flip: true, opacity: 0.06 },
    ],
    symbols: [
      { x: "88%", y: "70%", variant: 0, size: 50, opacity: 0.04, delay: 5 },
    ],
  },
  services: {
    swirls: [
      { x: "70%", y: "5%", rotate: -15, scale: 1.2, opacity: 0.04 },
      { x: "-5%", y: "65%", rotate: 25, opacity: 0.05 },
    ],
    gems: [
      { x: "95%", y: "50%", hue: 43, sat: 76, light: 55, size: 11, delay: 1 },
      { x: "3%", y: "30%", hue: 160, sat: 55, light: 40, size: 9, delay: 3 },
    ],
    filigrees: [
      { x: "60%", y: "92%", opacity: 0.07 },
    ],
    symbols: [
      { x: "90%", y: "8%", variant: 2, size: 55, opacity: 0.04, delay: 0 },
      { x: "2%", y: "88%", variant: 1, size: 45, opacity: 0.035, delay: 8 },
    ],
  },
  approach: {
    swirls: [
      { x: "65%", y: "60%", rotate: -8, opacity: 0.05 },
    ],
    gems: [
      { x: "90%", y: "25%", hue: 270, sat: 40, light: 50, size: 9, delay: 1.5 },
    ],
    filigrees: [
      { x: "2%", y: "15%", opacity: 0.06 },
      { x: "70%", y: "5%", flip: true, opacity: 0.05 },
    ],
    symbols: [
      { x: "92%", y: "60%", variant: 1, size: 40, opacity: 0.04, delay: 3 },
    ],
  },
  testimonials: {
    swirls: [
      { x: "75%", y: "70%", rotate: 20, opacity: 0.04 },
    ],
    gems: [
      { x: "4%", y: "20%", hue: 43, sat: 76, light: 58, size: 10, delay: 0 },
      { x: "96%", y: "75%", hue: 145, sat: 60, light: 45, size: 8, delay: 2.5 },
    ],
    filigrees: [
      { x: "5%", y: "85%", opacity: 0.06 },
    ],
    symbols: [
      { x: "50%", y: "88%", variant: 0, size: 45, opacity: 0.035, delay: 6 },
    ],
  },
  contact: {
    swirls: [
      { x: "-2%", y: "40%", rotate: 5, opacity: 0.05 },
    ],
    gems: [
      { x: "92%", y: "20%", hue: 160, sat: 50, light: 42, size: 11, delay: 0.5 },
      { x: "8%", y: "70%", hue: 270, sat: 40, light: 50, size: 9, delay: 3 },
    ],
    filigrees: [
      { x: "65%", y: "80%", flip: true, opacity: 0.07 },
    ],
    symbols: [
      { x: "88%", y: "55%", variant: 2, size: 50, opacity: 0.04, delay: 2 },
    ],
  },
};

const FantasyDecor = ({ variant }: { variant: Variant }) => {
  const cfg = configs[variant];

  return (
    <>
      {cfg.swirls.map((props, i) => <MalachiteSwirl key={`s${i}`} {...props} />)}
      {cfg.gems.map((props, i) => <Gemstone key={`g${i}`} {...props} />)}
      {cfg.filigrees.map((props, i) => <GoldFiligree key={`f${i}`} {...props} />)}
      {cfg.symbols.map((props, i) => <ArcaneSymbol key={`a${i}`} {...props} />)}
    </>
  );
};

export default FantasyDecor;
