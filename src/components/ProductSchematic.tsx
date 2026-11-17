import React from 'react';

interface ProductSchematicProps {
  studyId: string;
}

/**
 * Bespoke architectural product artifact stages for each case study card.
 * Crisp geometric SVG + typographic craft with zero external asset dependencies.
 */
export const ProductSchematic: React.FC<ProductSchematicProps> = ({ studyId }) => {
  if (studyId === 'google-calendar') {
    return (
      <div
        className="relative h-44 w-full overflow-hidden bg-[#f1f5fb] border-b border-slate-200/90 p-5 flex flex-col justify-between select-none"
        aria-hidden="true"
      >
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>TIME-ZONE PREFERENCE MATRIX</span>
          <span className="text-blue-700 font-medium">POLL · 3 ZONES</span>
        </div>

        <div className="space-y-2 my-auto">
          {/* Row 1: San Francisco */}
          <div className="grid grid-cols-[54px_1fr] items-center gap-2.5">
            <span className="font-mono text-[10px] text-slate-500 tabular-nums">SFO -8</span>
            <div className="relative h-5 rounded bg-white border border-slate-200/90 flex items-center px-1.5 gap-1">
              <div className="h-2.5 w-[24%] rounded-xs bg-slate-200" />
              <div className="h-2.5 w-[20%] rounded-xs bg-slate-200" />
              <div className="h-2.5 w-[24%] rounded-xs bg-blue-600/20 border border-blue-600/50" />
            </div>
          </div>
          {/* Row 2: London */}
          <div className="grid grid-cols-[54px_1fr] items-center gap-2.5">
            <span className="font-mono text-[10px] text-slate-500 tabular-nums">LON +0</span>
            <div className="relative h-5 rounded bg-white border border-slate-200/90 flex items-center px-1.5 gap-1">
              <div className="h-2.5 w-[44%] rounded-xs bg-transparent" />
              <div className="h-2.5 w-[24%] rounded-xs bg-blue-700" />
              <div className="h-2.5 w-[18%] rounded-xs bg-slate-200" />
            </div>
          </div>
          {/* Row 3: Bengaluru */}
          <div className="grid grid-cols-[54px_1fr] items-center gap-2.5">
            <span className="font-mono text-[10px] text-slate-500 tabular-nums">BLR +5.5</span>
            <div className="relative h-5 rounded bg-white border border-slate-200/90 flex items-center px-1.5 gap-1">
              <div className="h-2.5 w-[44%] rounded-xs bg-transparent" />
              <div className="h-2.5 w-[24%] rounded-xs bg-blue-600/80" />
              <div className="h-2.5 w-[22%] rounded-xs bg-amber-200/80" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10.5px] text-slate-600">
          <span>Mutual overlap window identified</span>
          <span className="font-mono text-blue-700 font-medium tabular-nums">16:30 UTC</span>
        </div>
      </div>
    );
  }

  if (studyId === 'google-maps') {
    return (
      <div
        className="relative h-44 w-full overflow-hidden bg-[#eef3f8] border-b border-slate-200/90 p-5 flex flex-col justify-between select-none"
        aria-hidden="true"
      >
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>MULTI-VEHICLE TOPOLOGY</span>
          <span className="text-blue-700 font-medium">SHARED JOURNEY</span>
        </div>

        <svg viewBox="0 0 360 92" className="w-full h-24" fill="none">
          {/* Subtle cartographic grid */}
          <line x1="0" y1="24" x2="360" y2="24" stroke="#cbd5e1" strokeWidth="0.6" strokeDasharray="2 4" />
          <line x1="0" y1="68" x2="360" y2="68" stroke="#cbd5e1" strokeWidth="0.6" strokeDasharray="2 4" />
          <line x1="90" y1="0" x2="90" y2="92" stroke="#cbd5e1" strokeWidth="0.6" strokeDasharray="2 4" />
          <line x1="210" y1="0" x2="210" y2="92" stroke="#cbd5e1" strokeWidth="0.6" strokeDasharray="2 4" />

          {/* Secondary car route */}
          <path
            d="M 24 72 C 92 72, 130 34, 210 46"
            stroke="#64748b"
            strokeWidth="1.75"
            strokeDasharray="4 3"
          />
          {/* Primary car route */}
          <path
            d="M 24 22 C 98 22, 140 54, 210 46 C 260 40, 290 46, 332 46"
            stroke="#1d4ed8"
            strokeWidth="2.25"
          />

          {/* Origin nodes */}
          <circle cx="24" cy="22" r="4.5" fill="#1d4ed8" />
          <circle cx="24" cy="72" r="4.5" fill="#64748b" />

          {/* Regroup point */}
          <circle cx="210" cy="46" r="7" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2.25" />
          <circle cx="210" cy="46" r="2.5" fill="#1d4ed8" />

          {/* Destination */}
          <rect x="326" y="40" width="12" height="12" rx="2.5" fill="#0f172a" />

          <text x="34" y="25" className="fill-slate-700 text-[9px] font-mono">CAR A · +12m</text>
          <text x="34" y="75" className="fill-slate-500 text-[9px] font-mono">CAR B · 8.4 km</text>
          <text x="210" y="28" textAnchor="middle" className="fill-blue-800 text-[9px] font-mono font-semibold">
            REGROUP STOP
          </text>
          <text x="322" y="28" textAnchor="end" className="fill-slate-700 text-[9px] font-mono">
            DEST
          </text>
        </svg>

        <div className="flex items-center justify-between text-[10.5px] text-slate-600">
          <span>Independent routes, shared arrival context</span>
          <span className="font-mono text-slate-700 tabular-nums">ETA Δ 04m</span>
        </div>
      </div>
    );
  }

  if (studyId === 'google-gemini') {
    return (
      <div
        className="relative h-44 w-full overflow-hidden bg-[#0f172a] border-b border-slate-800 p-5 flex flex-col justify-between text-slate-200 select-none"
        aria-hidden="true"
      >
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>CAPABILITY AWARENESS LAYER</span>
          <span className="text-blue-300 font-medium">TRUST ARCHITECTURE</span>
        </div>

        <div className="grid grid-cols-[1fr_auto_1.25fr_auto_1fr] items-center gap-2 my-auto">
          <div className="rounded border border-slate-700 bg-slate-800/70 px-2.5 py-2.5">
            <span className="block font-mono text-[9px] text-slate-400">01 INPUT</span>
            <span className="block text-[11px] font-medium text-white mt-0.5">User Intent</span>
          </div>

          <span className="font-mono text-xs text-slate-500">→</span>

          <div className="rounded border border-blue-500/60 bg-blue-950/60 px-2.5 py-2.5">
            <span className="block font-mono text-[9px] text-blue-300">02 LIVE CHECK</span>
            <span className="block text-[11px] font-semibold text-white mt-0.5">
              App · Mode · Auth
            </span>
          </div>

          <span className="font-mono text-xs text-slate-500">→</span>

          <div className="rounded border border-slate-700 bg-slate-800/70 px-2.5 py-2.5">
            <span className="block font-mono text-[9px] text-emerald-300">03 VERIFIED</span>
            <span className="block text-[11px] font-medium text-white mt-0.5">Receipt</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10.5px] text-slate-400">
          <span>Verify Connected Apps before promising execution</span>
          <span className="font-mono text-blue-300">WSUG</span>
        </div>
      </div>
    );
  }

  // Strava
  return (
    <div
      className="relative h-44 w-full overflow-hidden bg-[#18181b] border-b border-zinc-800 p-5 flex flex-col justify-between text-zinc-200 select-none"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <span>ASYNC CREW MOMENTUM</span>
        <span className="text-orange-400 font-medium">HABIT LOOP</span>
      </div>

      <div className="my-auto space-y-3">
        <div className="flex items-end justify-between gap-2">
          <div>
            <span className="block font-mono text-[10px] text-zinc-400">WEEKLY CREW TARGET</span>
            <span className="font-mono text-lg font-semibold text-white tabular-nums">
              32.4 <span className="text-xs font-normal text-zinc-400">/ 40.0 km</span>
            </span>
          </div>
          <span className="font-mono text-[11px] text-orange-300 tabular-nums">5 athletes · async</span>
        </div>

        {/* Segmented contribution bar */}
        <div className="h-2.5 w-full rounded bg-zinc-800 overflow-hidden flex gap-0.5 p-0.5">
          <div className="h-full w-[26%] rounded-xs bg-orange-500" />
          <div className="h-full w-[19%] rounded-xs bg-orange-400/90" />
          <div className="h-full w-[22%] rounded-xs bg-amber-300/80" />
          <div className="h-full w-[14%] rounded-xs bg-zinc-500" />
        </div>
      </div>

      <div className="flex items-center justify-between text-[10.5px] text-zinc-400">
        <span>See → Move → Share → Recognition</span>
        <span className="font-mono text-zinc-300 tabular-nums">81%</span>
      </div>
    </div>
  );
};
