import React from 'react';

const PRINCIPLES = [
  {
    index: '01',
    title: 'Anchor on the real friction',
    detail:
      'Distinguish established product facts and published behavioural signals from unvalidated hypotheses before committing to a solution.',
  },
  {
    index: '02',
    title: 'Scope ruthlessly to learn fast',
    detail:
      'Every proposed feature starts with an explicit MVP boundary—and an equally explicit list of what should wait until core value is proven.',
  },
  {
    index: '03',
    title: 'Measure outcomes, protect trust',
    detail:
      'Pair North Star progress with guardrail metrics for privacy, permission accuracy, and healthy user behaviour so growth never erodes confidence.',
  },
];

export const HiringManagerRubric: React.FC = () => {
  return (
    <section id="approach" className="py-14 sm:py-16 border-t border-slate-200 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="max-w-2xl mb-8">
          <p className="text-xs font-medium text-blue-700 mb-2">
            Product Philosophy
          </p>
          <h2 className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-slate-950">
            How I work through product problems
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-slate-50/40">
          {PRINCIPLES.map((item) => (
            <div key={item.index} className="p-6 sm:p-7">
              <p className="font-mono text-xs font-semibold text-blue-700 tabular-nums mb-2">
                {item.index}
              </p>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-slate-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
