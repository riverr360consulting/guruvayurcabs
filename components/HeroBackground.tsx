export default function HeroBackground() {
  return (
    <svg
      viewBox="0 0 1400 700"
      preserveAspectRatio="xMaxYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a2e20" />
          <stop offset="55%" stopColor="#0e3d2a" />
          <stop offset="100%" stopColor="#135c3f" />
        </linearGradient>
        <radialGradient id="glow" cx="78%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#f5c35c" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#f5c35c" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1400" height="700" fill="url(#skyGlow)" />
      <rect width="1400" height="700" fill="url(#glow)" />

      {/* ground */}
      <rect y="560" width="1400" height="140" fill="#061e15" />

      {/* palm silhouettes, left */}
      <g opacity="0.35" fill="#135c3f">
        <path d="M120 560 C118 470 140 420 150 400 C130 410 90 405 70 385 C100 400 130 400 148 392 C120 380 100 350 95 320 C120 350 140 372 152 380 C148 350 155 315 172 290 C168 325 168 358 176 378 C190 355 215 340 245 335 C220 350 195 368 182 388 C205 385 235 392 255 408 C225 400 195 402 178 412 C168 470 165 520 165 560 Z" />
      </g>

      {/* temple gopuram (stepped pyramidal tower) */}
      <g transform="translate(870 90)">
        {/* finials */}
        <circle cx="180" cy="6" r="7" fill="#f5c35c" />
        <rect x="176" y="10" width="8" height="22" fill="#0a2e20" />

        {/* tiers, wide at base, narrow at top */}
        <g fill="#0a2e20" stroke="#135c3f" strokeWidth="2">
          <polygon points="180,30 130,70 230,70" />
          <rect x="140" y="70" width="80" height="24" />
          <polygon points="180,80 110,128 250,128" />
          <rect x="118" y="128" width="124" height="26" />
          <polygon points="180,138 90,192 270,192" />
          <rect x="96" y="192" width="168" height="28" />
          <polygon points="180,202 65,264 295,264" />
          <rect x="72" y="264" width="216" height="32" />
          <polygon points="180,278 40,350 320,350" />
          <rect x="46" y="350" width="268" height="40" />
        </g>

        {/* decorative tier lines */}
        <g stroke="#f5c35c" strokeWidth="1.5" opacity="0.5">
          <line x1="140" y1="82" x2="220" y2="82" />
          <line x1="118" y1="141" x2="242" y2="141" />
          <line x1="96" y1="206" x2="264" y2="206" />
          <line x1="72" y1="280" x2="288" y2="280" />
        </g>

        {/* archway entrance */}
        <path
          d="M150 390 v-40 a30 30 0 0 1 60 0 v40 Z"
          fill="#061e15"
        />
      </g>

      {/* temple base / wall */}
      <rect x="700" y="470" width="580" height="90" fill="#0a2e20" />
      <g fill="#135c3f" opacity="0.6">
        <rect x="720" y="486" width="24" height="58" />
        <rect x="770" y="486" width="24" height="58" />
        <rect x="1180" y="486" width="24" height="58" />
        <rect x="1130" y="486" width="24" height="58" />
      </g>

      {/* taxi car, foreground */}
      <g transform="translate(120 470)">
        <ellipse cx="230" cy="150" rx="260" ry="18" fill="#061e15" opacity="0.6" />

        {/* body */}
        <path
          d="M20 120 
             C20 95 45 90 70 88
             L110 60 C125 44 150 36 185 36
             L300 36 C330 36 350 46 360 64
             L392 90
             C420 92 448 100 452 122
             L452 132 L20 132 Z"
          fill="#f4f4f4"
        />
        {/* roof/window band */}
        <path
          d="M128 60 C142 46 162 40 188 40 L292 40 C312 40 326 47 336 62 L352 90 L120 90 Z"
          fill="#0e3d2a"
        />
        {/* window panes */}
        <path d="M136 62 C148 50 164 46 186 46 L206 46 L206 88 L128 88 Z" fill="#eefaf3" opacity="0.85" />
        <path d="M214 46 L286 46 C304 46 314 52 322 63 L336 88 L214 88 Z" fill="#eefaf3" opacity="0.85" />

        {/* door lines */}
        <line x1="240" y1="90" x2="240" y2="130" stroke="#d9d9d9" strokeWidth="2" />

        {/* taxi stripe */}
        <rect x="20" y="106" width="432" height="10" fill="#f5c35c" />

        {/* headlight / taillight */}
        <circle cx="440" cy="112" r="7" fill="#f5c35c" />
        <rect x="20" y="106" width="14" height="10" fill="#eeb43a" />

        {/* wheels */}
        <circle cx="110" cy="132" r="26" fill="#061e15" />
        <circle cx="110" cy="132" r="11" fill="#d1d1d1" />
        <circle cx="370" cy="132" r="26" fill="#061e15" />
        <circle cx="370" cy="132" r="11" fill="#d1d1d1" />
      </g>
    </svg>
  );
}
