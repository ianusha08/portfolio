import React from 'react';
import { toolboxData } from '../data/portfolioData';
import { Terminal, Code, Cpu, Database, Wrench, Layers } from 'lucide-react';

export const Toolbox = () => {
  const getIcon = (category) => {
    switch (category) {
      case 'Languages':
        return <Code className="w-3.5 h-3.5 text-accent-amber" />;
      case 'Frontend':
        return <Layers className="w-3.5 h-3.5 text-accent-blue" />;
      case 'Backend':
        return <Terminal className="w-3.5 h-3.5 text-accent-emerald" />;
      case 'AI / ML':
        return <Cpu className="w-3.5 h-3.5 text-purple-400" />;
      case 'Tools':
        return <Wrench className="w-3.5 h-3.5 text-dark-muted" />;
      default:
        return <Terminal className="w-3.5 h-3.5 text-accent-amber" />;
    }
  };

  return (
    <section id="skills" className="py-12 border-t border-dark-border">
      {/* Monospace Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-dark-faint uppercase">
          <span className="text-accent-amber font-semibold">06 //</span>
          <span className="text-dark-muted font-medium">TECHNICAL TOOLBOX</span>
        </div>
        <span className="text-[11px] font-mono text-dark-faint">
          active stack
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {toolboxData.map((box) => (
          <div
            key={box.category}
            className="tech-card p-4 rounded-xl border border-dark-border"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded bg-dark-subtle border border-dark-border">
                {getIcon(box.category)}
              </div>
              <h3 className="text-xs font-mono font-semibold text-dark-text uppercase tracking-wider">
                {box.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {box.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-dark-subtle border border-dark-border text-dark-text hover:border-dark-borderLight transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
