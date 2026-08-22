import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, GitBranch, Binary, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-12 border-t border-dark-border">
      {/* Monospace Section Header */}
      <div className="flex items-center gap-2 mb-6 text-xs font-mono text-dark-faint uppercase">
        <span className="text-accent-amber font-semibold">01 //</span>
        <span className="text-dark-muted font-medium">ABOUT & ENGINEERING APPROACH</span>
      </div>

      <div className="space-y-4 text-sm leading-relaxed mb-8 font-sans">
        <p className="text-base sm:text-lg text-dark-text font-medium leading-relaxed">
          I build AI-powered applications that move beyond prototypes into usable software.
        </p>
        <p className="text-dark-muted leading-relaxed">
          My work spans Generative AI, AI Agents, Computer Vision, Voice AI, and full-stack development, with a focus on real-time and intelligent systems.
        </p>
        <p className="text-dark-muted leading-relaxed">
          Currently strengthening my foundations in Machine Learning, DSA, and software engineering while building practical projects and contributing to open source.
        </p>
        <p className="text-dark-muted leading-relaxed">
          <span className="font-medium text-dark-text">Current goal:</span> AI/ML, GenAI, or software engineering internships where I can contribute to production-oriented systems and grow through real-world engineering.
        </p>
      </div>

      {/* Philosophy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {personalInfo.aboutPhilosophy.map((item, idx) => (
          <div
            key={item.title}
            className="tech-card p-4 rounded-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded bg-dark-subtle border border-dark-border text-accent-amber">
                  {idx === 0 && <Terminal className="w-3.5 h-3.5" />}
                  {idx === 1 && <Binary className="w-3.5 h-3.5 text-accent-blue" />}
                  {idx === 2 && <GitBranch className="w-3.5 h-3.5 text-accent-emerald" />}
                </div>
                <span className="text-xs font-mono text-dark-faint">0{idx + 1}</span>
              </div>
              <h3 className="text-xs font-mono font-semibold text-dark-text mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-dark-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Focus Metadata Banner */}
      <div className="mt-4 p-3.5 rounded-xl border border-dark-border bg-dark-surface flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-dark-muted">
        <div className="flex items-center gap-2">
          <span className="text-accent-amber">FOCUS:</span>
          <span className="text-dark-text">Full-Stack • AI/ML</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-accent-blue">MINDSET:</span>
          <span>Clean Code • Math Rigor • Curiosity • Coffee</span>
        </div>
      </div>
    </section>
  );
};
