const MagicCircle = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 400 400"
    className={`animate-slow-rotate ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer ring */}
    <circle cx="200" cy="200" r="190" stroke="hsl(43 76% 52%)" strokeWidth="0.5" opacity="0.3" />
    <circle cx="200" cy="200" r="180" stroke="hsl(43 76% 52%)" strokeWidth="0.3" opacity="0.2" />
    
    {/* Rune marks on outer ring */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x = 200 + 185 * Math.cos(rad);
      const y = 200 + 185 * Math.sin(rad);
      return (
        <g key={angle} transform={`translate(${x},${y}) rotate(${angle + 90})`}>
          <line x1="0" y1="-5" x2="0" y2="5" stroke="hsl(43 76% 52%)" strokeWidth="0.8" opacity="0.4" />
        </g>
      );
    })}

    {/* Inner geometric pattern */}
    <circle cx="200" cy="200" r="140" stroke="hsl(160 70% 40%)" strokeWidth="0.4" opacity="0.2" />
    
    {/* Hexagon */}
    <polygon
      points="200,60 321,130 321,270 200,340 79,270 79,130"
      stroke="hsl(43 76% 52%)"
      strokeWidth="0.4"
      opacity="0.15"
    />
    
    {/* Inner triangle */}
    <polygon
      points="200,80 310,280 90,280"
      stroke="hsl(43 76% 52%)"
      strokeWidth="0.3"
      opacity="0.12"
    />
    
    {/* Inverted triangle */}
    <polygon
      points="200,320 90,120 310,120"
      stroke="hsl(43 76% 52%)"
      strokeWidth="0.3"
      opacity="0.12"
    />

    {/* Center circle */}
    <circle cx="200" cy="200" r="30" stroke="hsl(43 76% 52%)" strokeWidth="0.5" opacity="0.25" />
    <circle cx="200" cy="200" r="8" fill="hsl(43 76% 52%)" opacity="0.1" />

    {/* Small gem dots */}
    {[0, 60, 120, 180, 240, 300].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x = 200 + 140 * Math.cos(rad);
      const y = 200 + 140 * Math.sin(rad);
      return <circle key={angle} cx={x} cy={y} r="3" fill="hsl(43 76% 52%)" opacity="0.2" />;
    })}
  </svg>
);

export default MagicCircle;
