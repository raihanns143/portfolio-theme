import type { Project } from '../data/portfolio';

/**
 * Generative monochrome previews — custom designed per project — drawn in SVG
 * so they are razor-sharp, lightweight, theme-aware, and accurately illustrate
 * what each system actually does.
 */
export default function ProjectVisual({ motif, cover = false }: { motif: Project['motif']; cover?: boolean }) {
  return (
    <svg viewBox="0 0 800 560" preserveAspectRatio={cover ? 'xMidYMid slice' : 'xMidYMid meet'} className="h-full w-full" aria-hidden="true">
      <defs>
        <pattern id={`grid-${motif}`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="var(--line)" strokeWidth="1" />
        </pattern>
        <linearGradient id="beam" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--fg)" stopOpacity="0" />
          <stop offset="1" stopColor="var(--fg)" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="line-glow" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="var(--line)" />
          <stop offset="50%" stopColor="var(--fg)" />
          <stop offset="100%" stopColor="var(--line)" />
        </linearGradient>
      </defs>
      <rect width="800" height="560" fill="var(--surface)" />
      <rect width="800" height="560" fill={`url(#grid-${motif})`} opacity="0.6" />

      {motif === 'freshmart' && <FreshMartVisual />}
      {motif === 'vibe' && <VibeVisual />}
      {motif === 'bloodon' && <BloodOnVisual />}
      {motif === 'network' && <NetworkVisual />}
      {motif === 'waterq' && <WaterQVisual />}
      {motif === 'news' && <NewsVisual />}

      <style>{`
        @keyframes pv-scan { 0% { transform: translateY(0) } 100% { transform: translateY(280px) } }
        @keyframes pv-blink { 0%,100% { opacity: .15 } 50% { opacity: 1 } }
        @keyframes pv-dash { to { stroke-dashoffset: -40 } }
        @keyframes pv-dash-rev { to { stroke-dashoffset: 40 } }
        @keyframes pv-pop { 0%, 20% { opacity: 0; transform: translateY(8px) } 30%, 85% { opacity: 1; transform: none } 100% { opacity: 0 } }
        @keyframes pv-pulse { 0% { r: 16px; opacity: 0.8 } 100% { r: 120px; opacity: 0 } }
        @keyframes pv-pulse-slow { 0% { r: 24px; opacity: 0.6 } 100% { r: 180px; opacity: 0 } }
        @keyframes pv-waveform { 0% { stroke-dashoffset: 0 } 100% { stroke-dashoffset: -200 } }
        @keyframes pv-float { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-5px) } }
        @media (prefers-reduced-motion: reduce) { svg * { animation: none !important } }
      `}</style>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 01. FRESHMART PRO — E-Commerce Storefront, Cart & Order State
// ─────────────────────────────────────────────────────────────────────────────
function FreshMartVisual() {
  const node = (x: number, y: number, label: string, solid = false) => (
    <g key={label}>
      <rect x={x - 68} y={y - 24} width="136" height="48" rx="24" fill={solid ? 'var(--fg)' : 'var(--bg)'} stroke="var(--fg)" strokeOpacity={solid ? 1 : 0.4} />
      <text x={x} y={y + 5} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1.5" fill={solid ? 'var(--bg)' : 'var(--fg)'}>
        {label}
      </text>
    </g>
  );

  return (
    <g>
      {/* Product SKU Card */}
      <rect x="74" y="110" width="280" height="260" rx="8" fill="var(--bg)" stroke="var(--line)" />
      {/* Product Image placeholder */}
      <rect x="94" y="130" width="240" height="110" rx="6" fill="var(--surface-2)" stroke="var(--line)" />
      <path d="M 174 195 L 204 165 L 234 195 L 264 175 L 294 195" fill="none" stroke="var(--line)" strokeWidth="2" />
      <circle cx="154" cy="160" r="10" fill="var(--line)" />
      {/* SKU details */}
      <text x="94" y="264" fontFamily="var(--font-mono)" fontSize="12" fill="var(--fg)" letterSpacing="1">ORGANIC FRESH PACK</text>
      <text x="94" y="286" fontFamily="var(--font-mono)" fontSize="11" fill="var(--muted)">SKU-9042 · $24.00</text>
      {/* Variant Pills */}
      <g>
        <rect x="94" y="304" width="46" height="22" rx="4" fill="var(--fg)" />
        <text x="117" y="319" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--bg)">500g</text>
        <rect x="148" y="304" width="46" height="22" rx="4" fill="var(--surface-2)" stroke="var(--line)" />
        <text x="171" y="319" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)">1kg</text>
        <rect x="202" y="304" width="46" height="22" rx="4" fill="var(--surface-2)" stroke="var(--line)" />
        <text x="225" y="319" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)">2kg</text>
      </g>
      {/* Real-time Inventory badge */}
      <g style={{ animation: 'pv-pop 5s ease-in-out infinite' }}>
        <rect x="94" y="338" width="168" height="20" rx="10" fill="var(--surface-2)" stroke="var(--line)" />
        <circle cx="106" cy="348" r="4" fill="var(--fg)" />
        <text x="118" y="352" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)" letterSpacing="0.8">IN STOCK · REAL-TIME</text>
      </g>

      {/* Cart & Checkout Flow */}
      <path d="M 354 240 C 400 240, 410 170, 460 170" fill="none" stroke="var(--line)" strokeWidth="2" />
      <path d="M 354 240 C 400 240, 410 170, 460 170" fill="none" stroke="var(--fg)" strokeWidth="2" strokeDasharray="4 14" style={{ animation: 'pv-dash 1.4s linear infinite' }} />
      <path d="M 586 170 C 620 170, 620 280, 660 280" fill="none" stroke="var(--line)" strokeWidth="2" />
      <path d="M 586 170 C 620 170, 620 280, 660 280" fill="none" stroke="var(--fg)" strokeWidth="2" strokeDasharray="4 14" style={{ animation: 'pv-dash 1.4s 0.3s linear infinite' }} />
      <path d="M 586 170 C 620 170, 620 370, 660 370" fill="none" stroke="var(--line)" strokeWidth="2" />
      <path d="M 586 170 C 620 170, 620 370, 660 370" fill="none" stroke="var(--fg)" strokeWidth="2" strokeDasharray="4 14" style={{ animation: 'pv-dash 1.4s 0.6s linear infinite' }} />

      {node(526, 170, 'CART (ZUSTAND)', true)}
      {node(720, 280, 'PAID · FULFILLED')}
      {node(720, 370, 'COUPON · -20%')}

      {/* Floating coupon toast */}
      <g style={{ animation: 'pv-pop 6s 1.5s ease-in-out infinite' }}>
        <rect x="420" y="270" width="190" height="48" rx="8" fill="var(--fg)" />
        <text x="436" y="294" fontFamily="var(--font-mono)" fontSize="10" fill="var(--bg)" letterSpacing="1">COUPON APPLIED</text>
        <text x="436" y="308" fontFamily="var(--font-mono)" fontSize="9" fill="var(--bg)" opacity="0.8">DISCOUNT: -20% CODE: PROMO</text>
      </g>

      <text x="56" y="70" fontFamily="var(--font-mono)" fontSize="11" fill="var(--muted)" letterSpacing="2">NEXT.JS · PRISMA · POSTGRESQL</text>
      <text x="56" y="508" fontFamily="var(--font-mono)" fontSize="12" fill="var(--muted)" letterSpacing="2">STOREFRONT · SKU VARIANTS · ORDER STATE</text>
    </g>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 02. VIBE — Social Platform, Reactive Feed & Micro-Interactions
// ─────────────────────────────────────────────────────────────────────────────
function VibeVisual() {
  return (
    <g>
      {/* Main Feed Card */}
      <rect x="180" y="90" width="440" height="340" rx="12" fill="var(--bg)" stroke="var(--line)" />
      {/* User profile row */}
      <circle cx="218" cy="132" r="18" fill="var(--surface-2)" stroke="var(--line)" />
      <text x="218" y="137" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fill="var(--fg)">R</text>
      <text x="252" y="130" fontFamily="var(--font-mono)" fontSize="12" fill="var(--fg)" letterSpacing="0.5">Abu Raihan</text>
      <text x="252" y="146" fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)">@raihan · verified developer</text>
      {/* Verified check badge */}
      <circle cx="340" cy="126" r="6" fill="var(--fg)" />
      <path d="M 338 126 L 339.5 128 L 342.5 124" fill="none" stroke="var(--bg)" strokeWidth="1.2" />

      {/* Post content lines */}
      <rect x="204" y="172" width="370" height="7" rx="3.5" fill="var(--fg)" />
      <rect x="204" y="190" width="300" height="7" rx="3.5" fill="var(--line)" />

      {/* Interactive Poll Box */}
      <rect x="204" y="216" width="392" height="120" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
      <text x="220" y="238" fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)" letterSpacing="1">COMMUNITY POLL</text>
      {/* Option 1 (winning 74%) */}
      <g>
        <rect x="220" y="250" width="360" height="32" rx="6" fill="var(--bg)" stroke="var(--line)" />
        <rect x="220" y="250" width="266" height="32" rx="6" fill="var(--fg)" fillOpacity="0.18" />
        <text x="234" y="270" fontFamily="var(--font-mono)" fontSize="11" fill="var(--fg)">React 19 + Framer Motion</text>
        <text x="564" y="270" textAnchor="end" fontFamily="var(--font-mono)" fontSize="11" fill="var(--fg)">74%</text>
      </g>
      {/* Option 2 (26%) */}
      <g>
        <rect x="220" y="290" width="360" height="32" rx="6" fill="var(--bg)" stroke="var(--line)" />
        <rect x="220" y="290" width="94" height="32" rx="6" fill="var(--line)" fillOpacity="0.4" />
        <text x="234" y="310" fontFamily="var(--font-mono)" fontSize="11" fill="var(--muted)">Legacy Stack</text>
        <text x="564" y="310" textAnchor="end" fontFamily="var(--font-mono)" fontSize="11" fill="var(--muted)">26%</text>
      </g>

      {/* Reaction Bar */}
      <g>
        {/* Heart / Like */}
        <g style={{ animation: 'pv-pop 4s ease-in-out infinite' }}>
          <rect x="204" y="356" width="78" height="28" rx="14" fill="var(--surface-2)" stroke="var(--line)" />
          <path d="M 218 370 C 218 366, 222 364, 224 367 C 226 364, 230 366, 230 370 C 230 374, 224 378, 224 378 C 224 378, 218 374, 218 370 Z" fill="var(--fg)" />
          <text x="238" y="374" fontFamily="var(--font-mono)" fontSize="10" fill="var(--fg)">1.4k</text>
        </g>
        {/* Comment */}
        <rect x="290" y="356" width="78" height="28" rx="14" fill="var(--bg)" stroke="var(--line)" />
        <circle cx="304" cy="370" r="5" fill="none" stroke="var(--muted)" strokeWidth="1.2" />
        <text x="316" y="374" fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)">284</text>
        {/* Repost */}
        <rect x="376" y="356" width="70" height="28" rx="14" fill="var(--bg)" stroke="var(--line)" />
        <text x="411" y="374" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)">SHARE</text>
      </g>

      {/* Floating active comment toast */}
      <g style={{ animation: 'pv-pop 5s 1.5s ease-in-out infinite' }}>
        <rect x="520" y="70" width="220" height="54" rx="10" fill="var(--fg)" />
        <text x="536" y="93" fontFamily="var(--font-mono)" fontSize="10" fill="var(--bg)" letterSpacing="1">NEW COMMENT</text>
        <text x="536" y="109" fontFamily="var(--font-mono)" fontSize="9" fill="var(--bg)" opacity="0.8">Butter-smooth 60fps animations!</text>
      </g>

      <text x="56" y="70" fontFamily="var(--font-mono)" fontSize="11" fill="var(--muted)" letterSpacing="2">REACT 19 · MOTION · TAILWIND CSS</text>
      <text x="56" y="508" fontFamily="var(--font-mono)" fontSize="12" fill="var(--muted)" letterSpacing="2">REACTIVE SOCIAL FEED · FLUID MICRO-INTERACTIONS</text>
    </g>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 03. BLOODON — Emergency Blood Dispatch & Donor Matching Radar
// ─────────────────────────────────────────────────────────────────────────────
function BloodOnVisual() {
  const donorNode = (x: number, y: number, blood: string, name: string, matched = false) => (
    <g key={name}>
      <rect x={x - 64} y={y - 28} width="128" height="56" rx="10" fill={matched ? 'var(--fg)' : 'var(--bg)'} stroke="var(--fg)" strokeOpacity={matched ? 1 : 0.3} />
      <text x={x - 48} y={y - 8} fontFamily="var(--font-mono)" fontSize="15" fontWeight="bold" fill={matched ? 'var(--bg)' : 'var(--fg)'}>{blood}</text>
      <text x={x - 48} y={y + 14} fontFamily="var(--font-mono)" fontSize="9" fill={matched ? 'var(--bg)' : 'var(--muted)'}>{name}</text>
      <circle cx={x + 44} cy={y - 10} r="4" fill={matched ? 'var(--bg)' : 'var(--line)'} />
    </g>
  );

  return (
    <g>
      {/* Radar rings from emergency hospital center */}
      <circle cx="400" cy="270" r="100" fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="3 6" />
      <circle cx="400" cy="270" r="180" fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="4 8" />
      <circle cx="400" cy="270" r="240" fill="none" stroke="var(--line)" strokeWidth="1" opacity="0.3" />
      {/* Radar sweeping beam */}
      <circle cx="400" cy="270" r="40" fill="none" stroke="var(--fg)" strokeWidth="2" style={{ animation: 'pv-pulse 3s cubic-bezier(0,0.2,0.8,1) infinite' }} />
      <circle cx="400" cy="270" r="40" fill="none" stroke="var(--fg)" strokeWidth="1.5" style={{ animation: 'pv-pulse 3s 1.5s cubic-bezier(0,0.2,0.8,1) infinite' }} />

      {/* Central Emergency Dispatch Beacon */}
      <circle cx="400" cy="270" r="46" fill="var(--bg)" stroke="var(--fg)" strokeWidth="2" />
      <text x="400" y="264" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fontWeight="bold" fill="var(--fg)">O+</text>
      <text x="400" y="280" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--muted)" letterSpacing="1">URGENT</text>

      {/* Connection paths */}
      <path d="M 400 270 L 190 160" fill="none" stroke="var(--line)" strokeWidth="1.5" />
      <path d="M 400 270 L 190 160" fill="none" stroke="var(--fg)" strokeWidth="2" strokeDasharray="4 12" style={{ animation: 'pv-dash-rev 1.2s linear infinite' }} />

      <path d="M 400 270 L 610 160" fill="none" stroke="var(--line)" strokeWidth="1.5" />
      <path d="M 400 270 L 610 160" fill="none" stroke="var(--fg)" strokeWidth="2" strokeDasharray="4 12" style={{ animation: 'pv-dash 1.2s linear infinite' }} />

      <path d="M 400 270 L 190 380" fill="none" stroke="var(--line)" strokeWidth="1" opacity="0.5" />
      <path d="M 400 270 L 610 380" fill="none" stroke="var(--line)" strokeWidth="1" opacity="0.5" />

      {/* Donor Nodes */}
      {donorNode(190, 160, 'O+', 'DONOR #104 · RAJSHAHI', true)}
      {donorNode(610, 160, 'O+', 'DONOR #218 · ELIGIBLE', true)}
      {donorNode(190, 380, 'A+', 'DONOR #301 · RECOVERY')}
      {donorNode(610, 380, 'B+', 'DONOR #412 · RECOVERY')}

      {/* Floating Status Pill */}
      <g style={{ animation: 'pv-pop 5s ease-in-out infinite' }}>
        <rect x="290" y="100" width="220" height="36" rx="18" fill="var(--fg)" />
        <circle cx="308" cy="118" r="4" fill="var(--bg)" />
        <text x="320" y="122" fontFamily="var(--font-mono)" fontSize="10" fill="var(--bg)" letterSpacing="1">MATCH FOUND: 2 DONORS</text>
      </g>

      <text x="56" y="70" fontFamily="var(--font-mono)" fontSize="11" fill="var(--muted)" letterSpacing="2">NEXT.JS · POSTGRESQL · PRISMA</text>
      <text x="56" y="508" fontFamily="var(--font-mono)" fontSize="12" fill="var(--muted)" letterSpacing="2">EMERGENCY DISPATCH · VERIFIED DONOR MATCHING</text>
    </g>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 04. SMART NETWORK MONITOR — Subnet ARP Probing & Scapy Packet Telemetry
// ─────────────────────────────────────────────────────────────────────────────
function NetworkVisual() {
  const devices = [
    { ip: '192.168.1.1', mac: 'Gateway · Router', status: 'GATEWAY' },
    { ip: '192.168.1.102', mac: 'B4:E6:2D:9A:1F:02', status: 'ACTIVE' },
    { ip: '192.168.1.108', mac: '24:0A:C4:58:3B:EE (ESP32)', status: 'ACTIVE' },
    { ip: '192.168.1.115', mac: '00:1A:79:33:4D:A1', status: 'NEW' },
  ];

  return (
    <g>
      {/* Table container */}
      <rect x="94" y="96" width="612" height="236" rx="8" fill="var(--bg)" stroke="var(--line)" />
      {/* Table header */}
      <rect x="94" y="96" width="612" height="38" rx="8" fill="var(--surface-2)" />
      <text x="120" y="120" fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)" letterSpacing="1">IP ADDRESS</text>
      <text x="310" y="120" fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)" letterSpacing="1">MAC / HARDWARE VENDOR</text>
      <text x="570" y="120" fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)" letterSpacing="1">STATUS</text>

      {/* Rows */}
      {devices.map((d, i) => (
        <g key={d.ip}>
          <line x1="94" y1={134 + i * 48} x2="706" y2={134 + i * 48} stroke="var(--line)" strokeWidth="1" />
          <text x="120" y={164 + i * 48} fontFamily="var(--font-mono)" fontSize="11" fill="var(--fg)">{d.ip}</text>
          <text x="310" y={164 + i * 48} fontFamily="var(--font-mono)" fontSize="11" fill="var(--muted)">{d.mac}</text>
          <rect x="566" y={150 + i * 48} width="68" height="22" rx="4" fill={d.status === 'NEW' ? 'var(--fg)' : 'var(--surface-2)'} />
          <text x="600" y={165 + i * 48} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill={d.status === 'NEW' ? 'var(--bg)' : 'var(--fg)'}>{d.status}</text>
        </g>
      ))}

      {/* Sweeping ARP probe bar */}
      <g style={{ animation: 'pv-scan 3.2s ease-in-out infinite alternate' }}>
        <rect x="94" y="96" width="612" height="28" fill="url(#beam)" opacity="0.7" />
        <line x1="94" y1="124" x2="706" y2="124" stroke="var(--fg)" strokeWidth="1.5" />
      </g>

      {/* Bandwidth Telemetry Graph (Psutil) */}
      <rect x="94" y="348" width="612" height="110" rx="8" fill="var(--bg)" stroke="var(--line)" />
      <text x="120" y="374" fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)" letterSpacing="1.2">REAL-TIME BANDWIDTH TELEMETRY (PSUTIL)</text>
      <text x="560" y="374" fontFamily="var(--font-mono)" fontSize="10" fill="var(--fg)">TX: 18.2 MB/s · RX: 44.6 MB/s</text>
      {/* Waveform line */}
      <path
        d="M 120 424 L 170 410 L 220 430 L 270 395 L 320 415 L 370 380 L 420 410 L 470 385 L 520 415 L 570 390 L 620 420 L 670 405"
        fill="none"
        stroke="var(--fg)"
        strokeWidth="2"
      />
      <circle cx="370" cy="380" r="4" fill="var(--fg)" style={{ animation: 'pv-blink 1.8s ease-in-out infinite' }} />

      <text x="56" y="70" fontFamily="var(--font-mono)" fontSize="11" fill="var(--muted)" letterSpacing="2">PYTHON · FLASK · SCAPY · PSUTIL</text>
      <text x="56" y="508" fontFamily="var(--font-mono)" fontSize="12" fill="var(--muted)" letterSpacing="2">SUBNET-WIDE ARP PROBE · PACKET INSPECTION</text>
    </g>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 05. WATERQ — IoT Sensor Node & Microcontroller Telemetry
// ─────────────────────────────────────────────────────────────────────────────
function WaterQVisual() {
  const sensorGauge = (x: number, y: number, name: string, value: string, sub: string) => (
    <g key={name}>
      <rect x={x - 70} y={y - 50} width="140" height="100" rx="10" fill="var(--bg)" stroke="var(--line)" />
      <text x={x} y={y - 26} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)" letterSpacing="1">{name}</text>
      <text x={x} y={y + 8} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="20" fontWeight="bold" fill="var(--fg)">{value}</text>
      <rect x={x - 46} y={y + 20} width="92" height="18" rx="9" fill="var(--surface-2)" />
      <text x={x} y={y + 32} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--muted)" letterSpacing="0.8">{sub}</text>
    </g>
  );

  return (
    <g>
      {/* Central ESP32 Microcontroller */}
      <rect x="310" y="180" width="180" height="180" rx="12" fill="var(--bg)" stroke="var(--fg)" strokeWidth="2" />
      <rect x="330" y="200" width="140" height="140" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
      <text x="400" y="260" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="18" fontWeight="bold" fill="var(--fg)">ESP32</text>
      <text x="400" y="280" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)" letterSpacing="1.5">WIFI + BLUETOOTH</text>

      {/* ESP32 Pin Headers */}
      {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="298" y={270 + i * 14} width="12" height="5" rx="1" fill="var(--fg)" />
          <rect x="490" y={270 + i * 14} width="12" height="5" rx="1" fill="var(--fg)" />
        </g>
      ))}

      {/* Probes: pH, Turbidity, Temp */}
      <path d="M 180 140 L 310 230" fill="none" stroke="var(--line)" strokeWidth="2" />
      <path d="M 180 140 L 310 230" fill="none" stroke="var(--fg)" strokeWidth="2" strokeDasharray="4 12" style={{ animation: 'pv-dash 1.2s linear infinite' }} />

      <path d="M 180 380 L 310 310" fill="none" stroke="var(--line)" strokeWidth="2" />
      <path d="M 180 380 L 310 310" fill="none" stroke="var(--fg)" strokeWidth="2" strokeDasharray="4 12" style={{ animation: 'pv-dash 1.2s 0.3s linear infinite' }} />

      <path d="M 620 140 L 490 230" fill="none" stroke="var(--line)" strokeWidth="2" />
      <path d="M 620 140 L 490 230" fill="none" stroke="var(--fg)" strokeWidth="2" strokeDasharray="4 12" style={{ animation: 'pv-dash-rev 1.2s 0.6s linear infinite' }} />

      {/* Cloud Uplink Path */}
      <path d="M 490 310 L 620 380" fill="none" stroke="var(--line)" strokeWidth="2" />
      <path d="M 490 310 L 620 380" fill="none" stroke="var(--fg)" strokeWidth="2" strokeDasharray="4 12" style={{ animation: 'pv-dash 1.2s 0.9s linear infinite' }} />

      {/* Gauges */}
      {sensorGauge(180, 140, 'pH SENSOR', '7.2', 'SAFE · NEUTRAL')}
      {sensorGauge(180, 380, 'TURBIDITY', '1.2 NTU', 'CLEAR WATER')}
      {sensorGauge(620, 140, 'TEMPERATURE', '24.5°C', 'OPTIMAL')}

      {/* Blynk IoT Cloud Node */}
      <g>
        <rect x="550" y="330" width="140" height="100" rx="10" fill="var(--fg)" />
        <circle cx="620" cy="365" r="14" fill="var(--bg)" />
        <text x="620" y="370" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fontWeight="bold" fill="var(--fg)">☁</text>
        <text x="620" y="398" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fontWeight="bold" fill="var(--bg)" letterSpacing="1">BLYNK IoT</text>
        <text x="620" y="412" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--bg)" opacity="0.8">TELEMETRY SYNC</text>
      </g>

      {/* Floating Alert Pill */}
      <g style={{ animation: 'pv-pop 5s ease-in-out infinite' }}>
        <rect x="300" y="90" width="200" height="34" rx="17" fill="var(--surface-2)" stroke="var(--line)" />
        <circle cx="318" cy="107" r="4" fill="var(--fg)" />
        <text x="330" y="111" fontFamily="var(--font-mono)" fontSize="9.5" fill="var(--fg)" letterSpacing="0.8">24/7 PROBE MONITORING</text>
      </g>

      <text x="56" y="70" fontFamily="var(--font-mono)" fontSize="11" fill="var(--muted)" letterSpacing="2">ESP32 · EMBEDDED C/C++ · BLYNK IoT</text>
      <text x="56" y="508" fontFamily="var(--font-mono)" fontSize="12" fill="var(--muted)" letterSpacing="2">CONTINUOUS WATER TELEMETRY · THRESHOLD ALERTS</text>
    </g>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 06. NEWS TODAY — Dynamic Publishing Portal & CMS Architecture
// ─────────────────────────────────────────────────────────────────────────────
function NewsVisual() {
  return (
    <g>
      {/* Editorial Portal Window */}
      <rect x="100" y="90" width="600" height="340" rx="8" fill="var(--bg)" stroke="var(--line)" />
      {/* Browser Bar */}
      <rect x="100" y="90" width="600" height="36" rx="8" fill="var(--surface-2)" />
      <circle cx="124" cy="108" r="5" fill="var(--line)" />
      <circle cx="140" cy="108" r="5" fill="var(--line)" />
      <circle cx="156" cy="108" r="5" fill="var(--line)" />
      <text x="400" y="112" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)" letterSpacing="1">DAILYNEWS-BPI.VERCEL.APP</text>

      {/* Category Navigation Bar */}
      <g>
        <rect x="130" y="142" width="70" height="22" rx="4" fill="var(--fg)" />
        <text x="165" y="156" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--bg)">TECH</text>

        <rect x="208" y="142" width="84" height="22" rx="4" fill="var(--surface-2)" stroke="var(--line)" />
        <text x="250" y="156" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)">NATIONAL</text>

        <rect x="300" y="142" width="86" height="22" rx="4" fill="var(--surface-2)" stroke="var(--line)" />
        <text x="343" y="156" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)">EDITORIAL</text>
      </g>

      {/* Headline article card */}
      <rect x="130" y="180" width="310" height="220" rx="6" fill="var(--surface-2)" stroke="var(--line)" />
      <rect x="146" y="196" width="278" height="90" rx="4" fill="var(--bg)" stroke="var(--line)" />
      <text x="146" y="310" fontFamily="var(--font-mono)" fontSize="12" fontWeight="bold" fill="var(--fg)">HEADLINE PUBLISHING</text>
      <rect x="146" y="324" width="260" height="6" rx="3" fill="var(--line)" />
      <rect x="146" y="338" width="220" height="6" rx="3" fill="var(--line)" />
      <rect x="146" y="352" width="160" height="6" rx="3" fill="var(--line)" />
      <text x="146" y="380" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)">PHP REST ENDPOINT · 12ms LATENCY</text>

      {/* Sidebar articles */}
      <g>
        <rect x="460" y="180" width="210" height="62" rx="6" fill="var(--bg)" stroke="var(--line)" />
        <rect x="474" y="194" width="140" height="6" rx="3" fill="var(--fg)" />
        <rect x="474" y="208" width="180" height="5" rx="2.5" fill="var(--line)" />
        <rect x="474" y="220" width="100" height="5" rx="2.5" fill="var(--line)" />

        <rect x="460" y="254" width="210" height="62" rx="6" fill="var(--bg)" stroke="var(--line)" />
        <rect x="474" y="268" width="130" height="6" rx="3" fill="var(--fg)" />
        <rect x="474" y="282" width="180" height="5" rx="2.5" fill="var(--line)" />
        <rect x="474" y="294" width="90" height="5" rx="2.5" fill="var(--line)" />

        {/* CMS Publish Workflow Badge */}
        <g style={{ animation: 'pv-pop 5s ease-in-out infinite' }}>
          <rect x="460" y="328" width="210" height="72" rx="6" fill="var(--fg)" />
          <text x="476" y="352" fontFamily="var(--font-mono)" fontSize="10" fill="var(--bg)" letterSpacing="1">CMS STATE: PUBLISHED</text>
          <text x="476" y="370" fontFamily="var(--font-mono)" fontSize="9" fill="var(--bg)" opacity="0.8">MYSQL INDEXED ARCHIVE</text>
          <text x="476" y="384" fontFamily="var(--font-mono)" fontSize="9" fill="var(--bg)" opacity="0.8">DECOUPLED ARCHITECTURE</text>
        </g>
      </g>

      <text x="56" y="70" fontFamily="var(--font-mono)" fontSize="11" fill="var(--muted)" letterSpacing="2">REACT · PHP REST API · MYSQL</text>
      <text x="56" y="508" fontFamily="var(--font-mono)" fontSize="12" fill="var(--muted)" letterSpacing="2">EDITORIAL CMS WORKFLOW · FAST CATEGORIZED READER</text>
    </g>
  );
}
