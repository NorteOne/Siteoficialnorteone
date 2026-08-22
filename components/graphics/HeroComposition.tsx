export function HeroComposition() {
  return (
    <svg
      viewBox="0 0 560 560"
      role="img"
      aria-label="Composição abstrata representando fluxos de dados e processos empresariais conectados"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="panelGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0F2A44" />
          <stop offset="100%" stopColor="#0B1F33" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#D8E1E8" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#D8E1E8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="560" height="560" rx="28" fill="url(#panelGradient)" />
      <rect x="0" y="0" width="560" height="560" rx="28" fill="url(#glow)" />

      {/* grid base */}
      <g opacity="0.18" stroke="#D8E1E8" strokeWidth="1">
        <line x1="0" y1="140" x2="560" y2="140" />
        <line x1="0" y1="280" x2="560" y2="280" />
        <line x1="0" y1="420" x2="560" y2="420" />
        <line x1="140" y1="0" x2="140" y2="560" />
        <line x1="280" y1="0" x2="280" y2="560" />
        <line x1="420" y1="0" x2="420" y2="560" />
      </g>

      {/* connective paths */}
      <g fill="none" stroke="#B87945" strokeWidth="1.5" opacity="0.85">
        <path d="M110 400 C 160 340, 180 260, 150 190" />
        <path d="M150 190 C 210 150, 300 150, 340 110" />
        <path d="M150 190 C 220 210, 300 230, 380 300" />
        <path d="M380 300 C 410 340, 400 380, 440 420" />
      </g>
      <g fill="none" stroke="#D8E1E8" strokeWidth="1" opacity="0.5">
        <path d="M340 110 C 380 140, 420 160, 450 210" />
        <path d="M110 400 C 150 430, 220 440, 260 470" />
      </g>

      {/* nodes */}
      {[
        { cx: 110, cy: 400, r: 5 },
        { cx: 150, cy: 190, r: 6 },
        { cx: 340, cy: 110, r: 5 },
        { cx: 380, cy: 300, r: 7 },
        { cx: 440, cy: 420, r: 5 },
        { cx: 450, cy: 210, r: 4 },
        { cx: 260, cy: 470, r: 4 },
      ].map((node, index) => (
        <circle
          key={`${node.cx}-${node.cy}`}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          fill={index % 3 === 0 ? "#B87945" : "#D8E1E8"}
          className="motion-safe:animate-pulse"
          style={{ animationDelay: `${index * 220}ms` }}
        />
      ))}

      {/* floating operational cards */}
      <g>
        <rect x="70" y="70" width="150" height="86" rx="14" fill="#F4F1EA" opacity="0.96" />
        <rect x="88" y="92" width="90" height="8" rx="4" fill="#20242A" opacity="0.7" />
        <rect x="88" y="110" width="60" height="6" rx="3" fill="#8A8F98" />
        <rect x="88" y="126" width="80" height="18" rx="6" fill="#0B1F33" opacity="0.08" />
        <rect x="94" y="131" width="34" height="8" rx="4" fill="#B87945" />

        <rect x="330" y="330" width="164" height="94" rx="14" fill="#F4F1EA" opacity="0.96" />
        <rect x="350" y="352" width="100" height="8" rx="4" fill="#20242A" opacity="0.7" />
        <rect x="350" y="370" width="70" height="6" rx="3" fill="#8A8F98" />
        <g transform="translate(350 386)">
          {[10, 22, 16, 28, 20].map((h, i) => (
            <rect
              key={i}
              x={i * 18}
              y={28 - h}
              width="10"
              height={h}
              rx="2"
              fill={i === 3 ? "#B87945" : "#D8E1E8"}
            />
          ))}
        </g>

        <rect x="230" y="200" width="120" height="70" rx="12" fill="#0B1F33" stroke="#D8E1E8" strokeOpacity="0.35" />
        <rect x="246" y="218" width="70" height="7" rx="3.5" fill="#D8E1E8" opacity="0.8" />
        <rect x="246" y="234" width="46" height="6" rx="3" fill="#D8E1E8" opacity="0.5" />
        <circle cx="322" cy="222" r="4" fill="#B87945" />
      </g>
    </svg>
  );
}
