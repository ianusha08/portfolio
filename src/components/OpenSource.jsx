import React from 'react';
import { GitPullRequest, GitFork, Users, Sparkles } from 'lucide-react';
import { openSourceData } from '../data/portfolioData';

export const OpenSource = () => {
  return (
    <section id="opensource" className="py-12 border-t border-dark-border">
      {/* Monospace Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-dark-faint uppercase">
          <span className="text-accent-amber font-semibold">05 //</span>
          <span className="text-dark-muted font-medium">OPEN SOURCE & COMMUNITY</span>
        </div>
        <span className="text-[11px] font-mono text-dark-faint">
          ecosystem contributions
        </span>
      </div>

      <div className="space-y-4">
        {openSourceData.map((item, index) => (
          <div
            key={index}
            className="tech-card p-5 rounded-xl border border-dark-border hover:border-dark-borderLight transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded bg-dark-subtle border border-dark-border text-accent-emerald">
                  <GitPullRequest className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-dark-text mb-0.5">
                    {item.organization}
                  </h3>
                  <div className="text-xs font-mono text-dark-muted">
                    {item.role}
                  </div>
                </div>
              </div>

              <span className="text-xs font-mono text-dark-faint">
                {item.year}
              </span>
            </div>

            <p className="text-xs text-dark-muted leading-[1.75] mb-3.5">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-dark-border">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-dark-subtle border border-dark-border text-dark-muted"
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
