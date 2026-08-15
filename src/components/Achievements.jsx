import React from 'react';
import { Trophy, Award, Target, Sparkles, Terminal } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements = () => {
  return (
    <section id="achievements" className="py-12 border-t border-dark-border">
      {/* Monospace Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-dark-faint uppercase">
          <span className="text-accent-amber font-semibold">04 //</span>
          <span className="text-dark-muted font-medium">ACHIEVEMENTS & RECOGNITION</span>
        </div>
        <span className="text-[11px] font-mono text-dark-faint">
          competitive excellence
        </span>
      </div>

      <div className="space-y-4">
        {achievementsData.map((item, index) => (
          <div
            key={index}
            className="tech-card p-5 sm:p-6 rounded-xl border border-dark-border hover:border-dark-borderLight transition-all relative overflow-hidden group"
          >
            {/* Subtle Gradient Accent */}
            <div className="absolute top-0 right-0 w-64 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3 relative z-10">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-accent-amber shrink-0 mt-0.5 shadow-sm">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-dark-text tracking-tight group-hover:text-accent-amber transition-colors">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-accent-amberDim border border-accent-amber/30 text-accent-amber">
                      <Sparkles className="w-3 h-3" />
                      <span>{item.rank}</span>
                    </span>
                  </div>
                  <div className="text-xs font-mono text-dark-muted">
                    ICPC Competitive Programming Challenge • National Finalist
                  </div>
                </div>
              </div>

              <span className="text-xs font-mono text-dark-faint shrink-0 self-start sm:self-auto px-2 py-0.5 rounded bg-dark-subtle border border-dark-border">
                {item.period}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-dark-text leading-relaxed mb-4 font-sans relative z-10">
              {item.description}
            </p>

            {/* Tags Strip */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-dark-border relative z-10">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-dark-subtle border border-dark-border text-dark-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
