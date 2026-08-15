import React from 'react';
import { learningJourneyData } from '../data/portfolioData';
import { Activity, BookOpen } from 'lucide-react';

export const LearningJourney = () => {
  return (
    <section id="growth" className="py-12 border-t border-dark-border">
      {/* Monospace Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-dark-faint uppercase">
          <span className="text-accent-amber font-semibold">06 //</span>
          <span className="text-dark-muted font-medium">GROWTH & LEARNING RADAR</span>
        </div>
        <span className="text-[11px] font-mono text-dark-faint">
          continuous development
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {learningJourneyData.map((item, index) => (
          <div
            key={item.topic}
            className="tech-card p-4 rounded-xl border border-dark-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                  {item.status}
                </span>
                <span className="text-[10px] font-mono text-dark-faint">0{index + 1}</span>
              </div>

              <h3 className="text-xs font-mono font-bold text-dark-text mb-1.5">
                {item.topic}
              </h3>

              <p className="text-xs text-dark-muted leading-relaxed">
                {item.focus}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
