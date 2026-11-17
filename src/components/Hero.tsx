import React from 'react';

interface HeroProps {
  activeTrackFilter: 'all' | 'improvement' | 'teardown';
  onChangeTrackFilter: (track: 'all' | 'improvement' | 'teardown') => void;
  quickScan: boolean;
  onToggleQuickScan: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  activeTrackFilter,
  onChangeTrackFilter,
  quickScan,
  onToggleQuickScan,
}) => {
  return (
    <section
      id="overview"
      className="pt-12 pb-10 sm:pt-16 sm:pb-12 border-b border-slate-200 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] gap-8 lg:gap-12 items-end">
          <div>
            <p className="text-xs font-medium text-slate-500 mb-3">
              Associate Product Manager Portfolio · Selected Works
            </p>

            <h1 className="font-editorial text-[clamp(2.35rem,4.5vw,3.75rem)] font-medium tracking-tight text-slate-950 leading-[1.06] mb-5">
              Product strategy, discovery, and execution craft.
            </h1>

            <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed max-w-[60ch]">
              Four case studies spanning product improvement strategy and product teardowns.
              Explore how ambiguous user friction becomes focused MVP scope, measurable
              outcomes, and deliberate trade-offs.
            </p>
          </div>

          <div className="lg:pb-1 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 border-t lg:border-t-0 pt-5 lg:pt-0 border-slate-200">
            <div className="text-xs text-slate-500 lg:text-right leading-relaxed max-w-xs">
              Click any of the nine numbered tabs inside a case study card to expand that
              section into a full reading view.
            </div>
            <button
              type="button"
              onClick={onToggleQuickScan}
              aria-pressed={quickScan}
              className={`px-4 py-2 rounded-lg border text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                quickScan
                  ? 'border-blue-700 bg-blue-700 text-white'
                  : 'border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50'
              }`}
            >
              {quickScan ? 'Executive Briefs: Visible' : 'Show Executive Briefs on Cards'}
            </button>
          </div>
        </div>

        {/* Clean Track Filter Row */}
        <div className="mt-9 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
          <div
            role="group"
            aria-label="Filter case study track"
            className="inline-flex items-center gap-1 p-1 rounded-lg bg-slate-100 border border-slate-200/80"
          >
            <button
              type="button"
              onClick={() => onChangeTrackFilter('all')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeTrackFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Works (4)
            </button>
            <button
              type="button"
              onClick={() => onChangeTrackFilter('improvement')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeTrackFilter === 'improvement'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Improvement Strategy (2)
            </button>
            <button
              type="button"
              onClick={() => onChangeTrackFilter('teardown')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeTrackFilter === 'teardown'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Product Teardowns (2)
            </button>
          </div>

          <p className="text-xs text-slate-500">
            Google Calendar · Google Maps · Google Gemini · Strava
          </p>
        </div>
      </div>
    </section>
  );
};
