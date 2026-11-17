import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ExternalLink, Minimize2, BookOpen } from 'lucide-react';
import type { CaseStudy } from '../types/portfolio';
import { ProductSchematic } from './ProductSchematic';
import { SectionRenderer } from './SectionRenderer';

interface CaseStudyCardProps {
  study: CaseStudy;
  activeSectionIndex: number | null;
  quickScan: boolean;
  onSelectSection: (sectionIndex: number) => void;
  onCollapse: () => void;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  study,
  activeSectionIndex,
  quickScan,
  onSelectSection,
  onCollapse,
}) => {
  const isExpanded = activeSectionIndex !== null;
  const cardRef = useRef<HTMLElement>(null);
  const [showBriefInExpanded, setShowBriefInExpanded] = useState(false);
  const [showSources, setShowSources] = useState(false);

  const currentSection =
    activeSectionIndex !== null ? study.sections[activeSectionIndex] : null;

  useEffect(() => {
    if (isExpanded && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      if (rect.top < 16 || rect.top > window.innerHeight * 0.55) {
        cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [isExpanded]);

  useEffect(() => {
    if (!isExpanded) {
      setShowBriefInExpanded(false);
      setShowSources(false);
    }
  }, [isExpanded]);

  return (
    <motion.article
      ref={cardRef}
      layout="position"
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      id={study.id}
      aria-label={`${study.product} — ${study.title}`}
      className={`scroll-mt-20 overflow-hidden rounded-2xl border bg-white transition-all ${
        isExpanded
          ? 'lg:col-span-2 border-slate-300 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.14)]'
          : 'border-slate-200/90 hover:border-slate-300 hover:shadow-[0_14px_34px_-22px_rgba(15,23,42,0.16)] flex flex-col justify-between'
      }`}
    >
      {/* COMPACT CARD VIEW */}
      {!isExpanded && (
        <div className="flex flex-col h-full justify-between">
          <div>
            {/* Edge-to-edge architectural product stage */}
            <ProductSchematic studyId={study.id} />

            <div className="p-6 sm:p-7 pb-5">
              {/* Quiet unboxed metadata line */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2.5">
                <span className="font-mono font-semibold text-blue-700 tabular-nums">
                  {study.indexLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-slate-700">{study.product}</span>
                <span aria-hidden="true">·</span>
                <span>{study.focusLabel}</span>
              </div>

              <h3 className="font-editorial text-2xl font-medium tracking-tight text-slate-950 leading-snug mb-2">
                {study.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3.5">
                {study.subtitle}
              </p>

              <p className="text-[13.5px] leading-relaxed text-slate-700">
                {study.thesis}
              </p>

              {/* Optional Executive Brief inside compact card */}
              <AnimatePresence initial={false}>
                {quickScan && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.16 }}
                    className="mt-4 pt-4 border-t border-slate-200 space-y-2 text-xs"
                  >
                    <div>
                      <span className="font-semibold text-slate-900">North Star: </span>
                      <span className="text-slate-600">{study.executiveSummary.northStar}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">Primary Bet: </span>
                      <span className="text-slate-600">{study.executiveSummary.mvpScope}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">Key Trade-off: </span>
                      <span className="text-slate-600">{study.executiveSummary.keyTradeoff}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* 9 Interactive Tabs inside each card */}
          <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-4 border-t border-slate-200/80 bg-slate-50/40">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-semibold text-slate-800">
                Explore Sections
              </span>
              <span className="text-[11px] font-mono text-slate-500 tabular-nums">
                01 — 09
              </span>
            </div>
            <div
              role="tablist"
              aria-label={`${study.product} 9 sections`}
              className="grid grid-cols-3 gap-1.5"
            >
              {study.sections.map((section, idx) => (
                <button
                  key={section.number}
                  type="button"
                  role="tab"
                  aria-selected={false}
                  onClick={() => onSelectSection(idx)}
                  className="group flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-left text-xs font-medium text-slate-700 hover:border-blue-400 hover:bg-blue-50/70 hover:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors min-h-[40px]"
                >
                  <span className="font-mono text-[11px] font-semibold text-slate-400 group-hover:text-blue-700 tabular-nums shrink-0">
                    {section.number}
                  </span>
                  <span className="truncate whitespace-nowrap">{section.shortTab}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* EXPANDED BIGGER CARD VIEW */}
      {isExpanded && currentSection && (
        <div className="divide-y divide-slate-200">
          {/* Expanded Header */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-slate-50/70 to-white">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-1.5 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="font-mono font-semibold text-blue-700 tabular-nums">
                    {study.indexLabel}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{study.trackLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-slate-700">{study.product}</span>
                  <span aria-hidden="true">·</span>
                  <span>{study.dateLabel}</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-slate-950 leading-tight">
                  {study.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600">{study.subtitle}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowBriefInExpanded((v) => !v)}
                  aria-expanded={showBriefInExpanded}
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors ${
                    showBriefInExpanded
                      ? 'border-blue-300 bg-blue-50 text-blue-900'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{showBriefInExpanded ? 'Hide Brief' : 'Executive Brief'}</span>
                </button>
                <button
                  type="button"
                  onClick={onCollapse}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors"
                >
                  <Minimize2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Collapse</span>
                </button>
              </div>
            </div>

            {/* Optional Executive Brief Drawer inside Expanded Card */}
            <AnimatePresence initial={false}>
              {showBriefInExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.16 }}
                  className="mt-5 rounded-xl border border-blue-200/80 bg-blue-50/40 p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed"
                >
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Core Hook</p>
                    <p className="text-slate-700">{study.executiveSummary.hook}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">North Star Metric</p>
                    <p className="text-slate-700">{study.executiveSummary.northStar}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Proposed MVP Scope</p>
                    <p className="text-slate-700">{study.executiveSummary.mvpScope}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Key Trade-off &amp; Evidence</p>
                    <p className="text-slate-700 mb-1">{study.executiveSummary.keyTradeoff}</p>
                    <p className="text-slate-500">{study.executiveSummary.evidenceNote}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 9-Tab Navigation Bar inside Expanded Card */}
            <div
              role="tablist"
              aria-label={`${study.product} sections`}
              className="mt-6 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-1.5"
            >
              {study.sections.map((section, idx) => {
                const active = idx === activeSectionIndex;
                return (
                  <button
                    key={section.number}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => onSelectSection(idx)}
                    className={`flex items-center justify-center sm:justify-start gap-1.5 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors whitespace-nowrap min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      active
                        ? 'bg-blue-700 text-white shadow-xs'
                        : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`font-mono text-[11px] tabular-nums shrink-0 ${
                        active ? 'text-blue-100' : 'text-slate-400'
                      }`}
                    >
                      {section.number}
                    </span>
                    <span className="truncate">{section.shortTab}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Section Content */}
          <div role="tabpanel" className="p-6 sm:p-8 lg:px-10">
            <motion.div
              key={currentSection.number}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-6 pb-4 border-b border-slate-200/80">
                <p className="font-mono text-xs font-medium text-blue-700 mb-1">
                  {currentSection.kicker}
                </p>
                <h4 className="font-editorial text-2xl sm:text-[28px] font-medium tracking-tight text-slate-950">
                  {currentSection.title}
                </h4>
              </div>

              <SectionRenderer blocks={currentSection.blocks} />
            </motion.div>
          </div>

          {/* Section Prev / Next & Sources Footer */}
          <div className="px-6 py-4 sm:px-8 bg-slate-50/70 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                disabled={activeSectionIndex === 0}
                onClick={() =>
                  activeSectionIndex !== null &&
                  activeSectionIndex > 0 &&
                  onSelectSection(activeSectionIndex - 1)
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
                <span>
                  {activeSectionIndex !== null && activeSectionIndex > 0
                    ? `${study.sections[activeSectionIndex - 1].number}. ${study.sections[activeSectionIndex - 1].shortTab}`
                    : 'Start of study'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setShowSources((v) => !v)}
                aria-expanded={showSources}
                className="text-xs font-medium text-slate-600 hover:text-blue-700 underline underline-offset-4 whitespace-nowrap"
              >
                {showSources
                  ? 'Hide Primary Sources'
                  : `View Primary Sources (${study.references.length})`}
              </button>

              <button
                type="button"
                disabled={activeSectionIndex === study.sections.length - 1}
                onClick={() =>
                  activeSectionIndex !== null &&
                  activeSectionIndex < study.sections.length - 1 &&
                  onSelectSection(activeSectionIndex + 1)
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>
                  {activeSectionIndex !== null &&
                  activeSectionIndex < study.sections.length - 1
                    ? `${study.sections[activeSectionIndex + 1].number}. ${study.sections[activeSectionIndex + 1].shortTab}`
                    : 'End of study'}
                </span>
                <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>

            {showSources && (
              <div className="pt-4 border-t border-slate-200 space-y-2.5 text-xs text-slate-600">
                <p className="text-slate-500">{study.referencesNote}</p>
                <ol className="space-y-1.5 pl-4 list-decimal">
                  {study.references.map((ref) => (
                    <li key={ref.id}>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-blue-700 hover:text-blue-900 underline underline-offset-2"
                      >
                        <span>{ref.title}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
                      </a>
                      <span className="text-slate-500"> · {ref.source}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.article>
  );
};
