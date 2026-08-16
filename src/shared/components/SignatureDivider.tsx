/**
 * The site's signature visual motif: a horizontal band that reads as water
 * ripples on the left and resolves into a grain-field texture on the right —
 * a literal representation of AquaModernix bridging aquaculture and
 * agriculture/poultry in one consultancy.
 */
export function SignatureDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none w-full overflow-hidden ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="h-16 w-full md:h-20"
      >
        <defs>
          <linearGradient id="divider-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(180 55% 15%)" stopOpacity="0.35" />
            <stop offset="55%" stopColor="hsl(100 28% 32%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(38 62% 47%)" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Ripple half */}
        <path
          d="M0 40 Q 50 20 100 40 T 200 40 T 300 40 T 400 40 T 500 40 T 600 40"
          fill="none"
          stroke="url(#divider-fade)"
          strokeWidth="2"
        />
        <path
          d="M0 55 Q 50 35 100 55 T 200 55 T 300 55 T 400 55 T 500 55 T 600 55"
          fill="none"
          stroke="url(#divider-fade)"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Grain half — vertical stalks tapering in, replacing the ripple curves */}
        {Array.from({ length: 24 }).map((_, i) => {
          const x = 620 + i * 24;
          const sway = i % 2 === 0 ? 6 : -6;
          return (
            <path
              key={i}
              d={`M${x} 65 Q${x + sway} 40 ${x} 15`}
              fill="none"
              stroke="url(#divider-fade)"
              strokeWidth="2"
              opacity={0.5 + (i / 24) * 0.5}
            />
          );
        })}
      </svg>
    </div>
  );
}
