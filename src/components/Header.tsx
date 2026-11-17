import React from 'react';

interface HeaderProps {
  isEmbedded: boolean;
  quickScan: boolean;
  onToggleQuickScan: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isEmbedded,
  quickScan,
  onToggleQuickScan,
}) => {
  if (isEmbedded) {
    return (
      <header className="border-b border-slate-200/80 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-4 pl-44 sm:pl-52 flex items-center justify-end gap-8">
          <nav
            aria-label="Room sections"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
          >
            <a
              href="#overview"
              className="hover:text-slate-900 hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Overview
            </a>
            <a
              href="#improvement"
              className="hover:text-slate-900 hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Improvement
            </a>
            <a
              href="#teardowns"
              className="hover:text-slate-900 hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Teardowns
            </a>
            <a
              href="#approach"
              className="hover:text-slate-900 hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Approach
            </a>
          </nav>

          <button
            type="button"
            onClick={onToggleQuickScan}
            aria-pressed={quickScan}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
              quickScan
                ? 'bg-blue-700 text-white hover:bg-blue-800'
                : 'bg-slate-950 text-white hover:bg-slate-800'
            }`}
          >
            {quickScan ? 'Briefs: On' : 'Executive Briefs'}
          </button>
        </div>
      </header>
    );
  }

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-4 flex items-center justify-between gap-8">
        <a
          href="#overview"
          className="font-editorial text-xl font-medium tracking-tight text-slate-950 whitespace-nowrap shrink-0"
        >
          Product Portfolio
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          <a
            href="#overview"
            className="hover:text-slate-900 hover:underline underline-offset-4 whitespace-nowrap shrink-0"
          >
            Overview
          </a>
          <a
            href="#improvement"
            className="hover:text-slate-900 hover:underline underline-offset-4 whitespace-nowrap shrink-0"
          >
            Improvement
          </a>
          <a
            href="#teardowns"
            className="hover:text-slate-900 hover:underline underline-offset-4 whitespace-nowrap shrink-0"
          >
            Teardowns
          </a>
          <a
            href="#approach"
            className="hover:text-slate-900 hover:underline underline-offset-4 whitespace-nowrap shrink-0"
          >
            Approach
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onToggleQuickScan}
            aria-pressed={quickScan}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
              quickScan
                ? 'bg-blue-700 text-white hover:bg-blue-800'
                : 'bg-slate-950 text-white hover:bg-slate-800'
            }`}
          >
            {quickScan ? 'Briefs: On' : 'Executive Briefs'}
          </button>
        </div>
      </div>
    </header>
  );
};
