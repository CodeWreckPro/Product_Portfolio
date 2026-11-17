import { useEffect, useMemo, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { ALL_CASE_STUDIES, IMPROVEMENT_STUDIES, TEARDOWN_STUDIES } from './data';
import type { CaseStudy } from './types/portfolio';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CaseStudyCard } from './components/CaseStudyCard';
import { HiringManagerRubric } from './components/HiringManagerRubric';

type TrackFilter = 'all' | 'improvement' | 'teardown';

function detectEmbedMode(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get('embed') === 'true' || params.get('embed') === '1') {
      return true;
    }
    return window.self !== window.top;
  } catch {
    // Cross-origin iframe throws SecurityError when accessing window.top
    return true;
  }
}

function parseInitialDeepLink(): Record<string, number | null> {
  const initial: Record<string, number | null> = {};
  if (typeof window === 'undefined') return initial;
  const hash = window.location.hash.replace(/^#/, '');
  if (!hash) return initial;

  const [studyId, sectionNum] = hash.split('/');
  const matched = ALL_CASE_STUDIES.find((s) => s.id === studyId);
  if (matched && sectionNum) {
    const idx = matched.sections.findIndex((sec) => sec.number === sectionNum);
    if (idx !== -1) {
      initial[matched.id] = idx;
    }
  }
  return initial;
}

export default function App() {
  const [isEmbedded, setIsEmbedded] = useState(false);
  const [trackFilter, setTrackFilter] = useState<TrackFilter>('all');
  const [quickScan, setQuickScan] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, number | null>>(
    parseInitialDeepLink
  );

  useEffect(() => {
    setIsEmbedded(detectEmbedMode());
  }, []);

  // Close expanded cards on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setExpandedSections({});
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectSection = (study: CaseStudy, sectionIndex: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [study.id]: sectionIndex,
    }));
    const sec = study.sections[sectionIndex];
    if (sec && typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${study.id}/${sec.number}`);
    }
  };

  const handleCollapse = (studyId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [studyId]: null,
    }));
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  const showImprovement = trackFilter === 'all' || trackFilter === 'improvement';
  const showTeardowns = trackFilter === 'all' || trackFilter === 'teardown';

  const anyExpanded = useMemo(
    () => Object.values(expandedSections).some((v) => v !== null && v !== undefined),
    [expandedSections]
  );

  const handleCollapseAll = () => {
    setExpandedSections({});
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#f6f7f9] text-slate-950">
        <Header
          isEmbedded={isEmbedded}
          quickScan={quickScan}
          onToggleQuickScan={() => setQuickScan((v) => !v)}
        />

        <main className="flex-1">
          <Hero
            activeTrackFilter={trackFilter}
            onChangeTrackFilter={setTrackFilter}
            quickScan={quickScan}
            onToggleQuickScan={() => setQuickScan((v) => !v)}
          />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-16">
            {anyExpanded && (
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-600 shadow-xs">
                <span>Viewing expanded case study section. Press Esc or collapse to return to side-by-side view.</span>
                <button
                  type="button"
                  onClick={handleCollapseAll}
                  className="font-semibold text-blue-700 hover:text-blue-900 underline underline-offset-4 whitespace-nowrap shrink-0 ml-4"
                >
                  Collapse all cards
                </button>
              </div>
            )}

            {/* Track 01: Product Improvement Strategy (2 cards side-by-side) */}
            {showImprovement && (
              <section id="improvement" aria-labelledby="improvement-heading" className="scroll-mt-16">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
                  <div>
                    <p className="font-mono text-xs font-semibold text-blue-700 mb-1.5">
                      01 · Track One
                    </p>
                    <h2
                      id="improvement-heading"
                      className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-slate-950"
                    >
                      Product Improvement Strategy
                    </h2>
                  </div>
                  <p className="text-sm text-slate-600 max-w-md">
                    Focused, measurable feature interventions within existing ecosystems—Google Calendar and Google Maps.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
                  {IMPROVEMENT_STUDIES.map((study) => (
                    <CaseStudyCard
                      key={study.id}
                      study={study}
                      activeSectionIndex={expandedSections[study.id] ?? null}
                      quickScan={quickScan}
                      onSelectSection={(idx) => handleSelectSection(study, idx)}
                      onCollapse={() => handleCollapse(study.id)}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Track 02: Product Breakdowns & Teardowns (2 cards side-by-side) */}
            {showTeardowns && (
              <section id="teardowns" aria-labelledby="teardowns-heading" className="scroll-mt-16">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
                  <div>
                    <p className="font-mono text-xs font-semibold text-blue-700 mb-1.5">
                      02 · Track Two
                    </p>
                    <h2
                      id="teardowns-heading"
                      className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-slate-950"
                    >
                      Product Breakdowns &amp; Teardowns
                    </h2>
                  </div>
                  <p className="text-sm text-slate-600 max-w-md">
                    Deconstructing retention loops, capability trust, and monetisation mechanics across Google Gemini and Strava.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
                  {TEARDOWN_STUDIES.map((study) => (
                    <CaseStudyCard
                      key={study.id}
                      study={study}
                      activeSectionIndex={expandedSections[study.id] ?? null}
                      quickScan={quickScan}
                      onSelectSection={(idx) => handleSelectSection(study, idx)}
                      onCollapse={() => handleCollapse(study.id)}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>

          <HiringManagerRubric />
        </main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              Independent Product Management Portfolio · Case studies &amp; teardowns prepared November 2026. Not affiliated with Google or Strava.
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <a href="#overview" className="hover:text-slate-900 underline underline-offset-4 whitespace-nowrap">
                Back to top
              </a>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
