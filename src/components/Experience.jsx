import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Mic, GitPullRequest, GraduationCap, Calendar } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'Internship':
        return <Briefcase className="w-3.5 h-3.5 text-accent-amber" />;
      case 'Project / AI Challenge':
        return <Mic className="w-3.5 h-3.5 text-accent-blue" />;
      case 'Open Source':
        return <GitPullRequest className="w-3.5 h-3.5 text-accent-emerald" />;
      case 'Education':
        return <GraduationCap className="w-3.5 h-3.5 text-purple-400" />;
      default:
        return <Briefcase className="w-3.5 h-3.5 text-accent-amber" />;
    }
  };

  return (
    <section id="experience" className="py-12 border-t border-dark-border">
      {/* Monospace Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-dark-faint uppercase">
          <span className="text-accent-amber font-semibold">02 //</span>
          <span className="text-dark-muted font-medium">EXPERIENCE & JOURNEY</span>
        </div>
        <span className="text-[11px] font-mono text-dark-faint">
          chronological / verified
        </span>
      </div>

      {/* Editorial Timeline Cards */}
      <div className="space-y-4">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="tech-card p-5 rounded-xl border border-dark-border hover:border-dark-borderLight transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2.5">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded bg-dark-subtle border border-dark-border">
                  {getIcon(item.type)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-dark-text">
                    {item.role}
                  </h3>
                  <div className="text-xs font-mono text-dark-muted">
                    {item.organization}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-dark-faint sm:self-start">
                <Calendar className="w-3 h-3 text-dark-muted" />
                <span>{item.period}</span>
              </div>
            </div>

            <p className="text-xs text-dark-muted leading-relaxed mb-3">
              {item.description}
            </p>

            {/* Key Bullet Points */}
            <ul className="space-y-1.5 pt-2.5 border-t border-dark-border">
              {item.achievements.map((ach, i) => (
                <li key={i} className="text-xs text-dark-text flex items-start gap-2">
                  <span className="text-accent-amber font-mono text-[10px] mt-0.5">›</span>
                  <span className="leading-snug">{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
