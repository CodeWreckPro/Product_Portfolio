import React from 'react';
import { ArrowRight, ExternalLink, RefreshCw } from 'lucide-react';
import type { ContentBlock, TableRowCell } from '../types/portfolio';

const badgeStyles: Record<string, string> = {
  neutral: 'bg-slate-100 text-slate-700 border-slate-200',
  fact: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  hypothesis: 'bg-amber-50 text-amber-800 border-amber-200',
  proposal: 'bg-blue-50 text-blue-800 border-blue-200',
  core: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  high: 'bg-rose-50 text-rose-800 border-rose-200',
  medium: 'bg-amber-50 text-amber-800 border-amber-200',
  low: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  p0: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  p1: 'bg-blue-50 text-blue-800 border-blue-200',
  p2: 'bg-slate-100 text-slate-700 border-slate-200',
};

const calloutStyles: Record<string, string> = {
  blue: 'bg-blue-50/50 border-blue-200/90 text-slate-900',
  green: 'bg-emerald-50/50 border-emerald-200/90 text-slate-900',
  amber: 'bg-amber-50/60 border-amber-200/90 text-slate-900',
  red: 'bg-rose-50/50 border-rose-200/90 text-slate-900',
  neutral: 'bg-slate-50 border-slate-200 text-slate-900',
};

function renderCell(cell: string | TableRowCell) {
  if (typeof cell === 'string') {
    return <span>{cell}</span>;
  }
  return (
    <div className="space-y-1">
      {cell.badge ? (
        <span
          className={`inline-block rounded border px-1.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase whitespace-nowrap ${
            badgeStyles[cell.badge.tone] || badgeStyles.neutral
          }`}
        >
          {cell.badge.label}
        </span>
      ) : (
        <span className={cell.bold ? 'font-semibold text-slate-900' : ''}>{cell.text}</span>
      )}
      {cell.link && (
        <a
          href={cell.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 hover:text-blue-900 underline underline-offset-2"
        >
          {cell.link.label}
          <ExternalLink className="w-3 h-3" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

interface SectionRendererProps {
  blocks: ContentBlock[];
}

export const SectionRenderer: React.FC<SectionRendererProps> = ({ blocks }) => {
  return (
    <div className="space-y-5 text-[15px] leading-relaxed text-slate-700">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'lead':
            return (
              <p key={index} className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-medium max-w-[74ch]">
                {block.text}
              </p>
            );

          case 'paragraph':
            return (
              <p key={index} className="max-w-[74ch]">
                {block.text}{' '}
                {block.link && (
                  <a
                    href={block.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-blue-700 hover:text-blue-900 underline underline-offset-4"
                  >
                    {block.link.label}
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
                {block.suffix && <span> {block.suffix}</span>}
              </p>
            );

          case 'heading':
            return (
              <div key={index} className="pt-3 flex flex-wrap items-center gap-2.5">
                <h4 className="text-lg font-semibold tracking-tight text-slate-900">{block.text}</h4>
                {block.badge && (
                  <span
                    className={`inline-block rounded border px-2 py-0.5 text-[11px] font-semibold tracking-wide uppercase whitespace-nowrap ${
                      badgeStyles[block.badge.tone] || badgeStyles.neutral
                    }`}
                  >
                    {block.badge.label}
                  </span>
                )}
              </div>
            );

          case 'subheading':
            return (
              <h5 key={index} className="pt-1 text-sm font-semibold text-slate-900 tracking-tight">
                {block.text}
              </h5>
            );

          case 'note':
            return (
              <p key={index} className="text-xs leading-relaxed text-slate-500 max-w-[74ch]">
                {block.text}
              </p>
            );

          case 'quote':
            return (
              <blockquote
                key={index}
                className="my-5 py-4 border-y border-slate-200 text-slate-900"
              >
                <p className="text-base sm:text-lg font-medium leading-snug text-slate-900">
                  “{block.text}”
                </p>
                {block.attribution && (
                  <footer className="mt-2 text-xs font-medium text-slate-500">
                    — {block.attribution}
                  </footer>
                )}
              </blockquote>
            );

          case 'callout':
            return (
              <div
                key={index}
                className={`rounded-lg border p-4 sm:p-5 ${
                  calloutStyles[block.tone || 'neutral']
                }`}
              >
                <p className="text-sm font-semibold text-slate-900 mb-1.5">{block.title}</p>
                <p className="text-sm leading-relaxed text-slate-700">{block.body}</p>
                {block.code && (
                  <div className="mt-3 rounded border border-slate-200 bg-white px-3 py-2 font-mono text-xs text-slate-800 tabular-nums">
                    {block.code}
                  </div>
                )}
              </div>
            );

          case 'list':
            return (
              <ul key={index} className="space-y-2 pl-5 list-disc marker:text-slate-400 max-w-[74ch]">
                {block.items.map((item, idx) => (
                  <li key={idx}>
                    {item.lead && <strong className="font-semibold text-slate-900">{item.lead} </strong>}
                    <span>{item.text}</span>
                    {item.link && (
                      <>
                        {' '}
                        <a
                          href={item.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 underline underline-offset-2"
                        >
                          {item.link.label}
                          <ExternalLink className="w-3 h-3" aria-hidden="true" />
                        </a>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            );

          case 'orderedList':
            return (
              <ol key={index} className="space-y-2 pl-5 list-decimal marker:text-slate-500 marker:font-mono marker:text-xs max-w-[74ch]">
                {block.items.map((item, idx) => (
                  <li key={idx}>
                    {item.lead && <strong className="font-semibold text-slate-900">{item.lead} </strong>}
                    <span>{item.text}</span>
                    {item.note && <span className="block text-xs text-slate-500 mt-0.5">{item.note}</span>}
                  </li>
                ))}
              </ol>
            );

          case 'table':
            return (
              <div key={index} className="my-4 overflow-x-auto rounded-lg border border-slate-200 bg-white">
                <table className="w-full border-collapse text-left text-[13.5px] leading-snug tabular-nums">
                  {block.caption && (
                    <caption className="px-4 py-2.5 text-left text-xs font-medium text-slate-500 bg-slate-50 border-b border-slate-200">
                      {block.caption}
                    </caption>
                  )}
                  <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-200">
                      {block.headers.map((header, hIdx) => (
                        <th
                          key={hIdx}
                          scope="col"
                          className="px-4 py-2.5 text-xs font-semibold text-slate-700 whitespace-nowrap"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80">
                    {block.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/50 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`px-4 py-3 align-top ${
                              cIdx === 0 ? 'font-medium text-slate-900 min-w-[140px]' : 'text-slate-700 min-w-[140px]'
                            }`}
                          >
                            {renderCell(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case 'flowSteps':
            return (
              <div key={index} className="my-4">
                {block.title && (
                  <p className="text-xs font-semibold text-slate-500 mb-2.5">{block.title}</p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {block.steps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="rounded-lg border border-slate-200 bg-slate-50/50 p-3.5"
                    >
                      <span className="block font-mono text-[11px] font-semibold text-blue-700 tabular-nums mb-1">
                        {String(sIdx + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm font-semibold text-slate-900 mb-1">{step.title}</p>
                      <p className="text-xs leading-relaxed text-slate-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );

          case 'feedbackLoop':
            return (
              <div
                key={index}
                className="my-4 rounded-lg border border-slate-200 bg-slate-50/60 p-4 flex flex-wrap items-center justify-center gap-2"
              >
                {block.nodes.map((node, nIdx) => (
                  <React.Fragment key={nIdx}>
                    <span className="rounded border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800">
                      {node}
                    </span>
                    {nIdx < block.nodes.length - 1 ? (
                      <ArrowRight className="w-3.5 h-3.5 text-blue-700 shrink-0" aria-hidden="true" />
                    ) : (
                      <RefreshCw className="w-3.5 h-3.5 text-blue-700 shrink-0 ml-0.5" aria-hidden="true" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            );

          case 'formula':
            return (
              <div
                key={index}
                className="my-4 rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 text-center"
              >
                <div className="font-mono text-sm sm:text-base font-semibold text-slate-900 tabular-nums">
                  {block.expression}
                </div>
                {block.caption && (
                  <p className="mt-1.5 text-xs text-slate-500">{block.caption}</p>
                )}
              </div>
            );

          case 'scorecard':
            return (
              <div key={index} className="my-4 space-y-3">
                <p className="text-xs text-slate-500">{block.disclaimer}</p>
                <div className="rounded-lg border border-slate-200 divide-y divide-slate-200 bg-white">
                  {block.items.map((item, sIdx) => {
                    const pct = Math.round((item.score / item.maxScore) * 100);
                    return (
                      <div
                        key={sIdx}
                        className="p-3.5 sm:px-4 grid grid-cols-1 sm:grid-cols-[190px_90px_1fr] gap-2 sm:gap-4 items-center"
                      >
                        <span className="text-sm font-semibold text-slate-900">{item.dimension}</span>
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xs font-semibold text-slate-900 tabular-nums w-9">
                            {item.score}/{item.maxScore}
                          </span>
                          <div className="h-1.5 flex-1 rounded-sm bg-slate-100 overflow-hidden">
                            <div
                              className={`h-full ${
                                item.score >= 4
                                  ? 'bg-blue-700'
                                  : item.score === 3
                                  ? 'bg-slate-500'
                                  : 'bg-amber-600'
                              }`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-xs text-slate-600">{item.rationale}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );

          case 'cards':
            return (
              <div
                key={index}
                className={`my-4 rounded-lg border border-slate-200 bg-slate-50/40 divide-y md:divide-y-0 md:divide-x divide-slate-200 grid grid-cols-1 ${
                  block.columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
                }`}
              >
                {block.items.map((item, cIdx) => (
                  <div key={cIdx} className="p-4 sm:p-5">
                    {item.kicker && (
                      <p className="font-mono text-[11px] font-medium text-blue-700 mb-1">
                        {item.kicker}
                      </p>
                    )}
                    <p className="text-sm font-semibold text-slate-900 mb-1.5">{item.title}</p>
                    {item.body && <p className="text-xs leading-relaxed text-slate-600">{item.body}</p>}
                    {item.bullets && (
                      <ul className="mt-2 space-y-1.5 pl-4 list-disc marker:text-slate-400 text-xs text-slate-600">
                        {item.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};
