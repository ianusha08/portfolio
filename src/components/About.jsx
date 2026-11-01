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
          I build software applications that bring AI into practical use.
        </p>
        <p className="text-dark-muted leading-relaxed">
          My work explores machine learning, computer vision, and voice-based AI, with an interest in turning technical ideas into useful, real-world applications.
        </p>
        <p className="text-dark-muted leading-relaxed">
          Through projects like real-time intrusion detection, a voice-first learning companion, and a wellness platform, I've been exploring how AI can be applied to different problems.
        </p>
        <p className="text-dark-muted leading-relaxed">
          I'm continuously strengthening my foundations in machine learning, data structures and algorithms, and software engineering while learning to build more reliable and scalable applications.
        </p>
        <p className="text-dark-muted leading-relaxed">
          <span className="font-medium text-dark-text">Current goal:</span> Seeking AI/ML and software engineering internship opportunities where I can contribute to practical projects, learn from experienced engineers, and grow through hands-on development.
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
          <span className="text-dark-text">AI/ML • Software Development</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-accent-blue">MINDSET:</span>
          <span>Problem Solving • Clean Code • Curiosity • Coffee</span>
        </div>
      </div>
    </section>
  );
};
