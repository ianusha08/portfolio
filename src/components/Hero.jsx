import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, FileText, ArrowUpRight, Terminal, MapPin, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero = ({ onOpenResume }) => {
  return (
    <section className="pt-24 pb-12">
      {/* Top Banner — Technical Abstract Neural/Grid Circuit Aesthetic */}
      <div className="relative w-full h-44 sm:h-56 rounded-2xl overflow-hidden border border-dark-border bg-gradient-to-br from-[var(--banner-grad-from)] via-[var(--banner-grad-via)] to-[var(--banner-grad-to)] shadow-inner transition-colors duration-200">
        {/* Subtle Geometric Wireframe / Grid Layer */}
        <div className="absolute inset-0 bg-editorial-grid opacity-60 pointer-events-none" />
        
        {/* Abstract Technical Vector Lines & Glowing Node Points */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30 text-accent-amber/40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 800 240"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(245, 158, 11, 0.4)" />
              <stop offset="50%" stopColor="rgba(16, 185, 129, 0.2)" />
              <stop offset="100%" stopColor="rgba(56, 189, 248, 0.3)" />
            </linearGradient>
          </defs>
          <line x1="0" y1="40" x2="800" y2="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="0" y1="120" x2="800" y2="120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="0" y1="200" x2="800" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <path d="M 50 180 Q 200 40 400 120 T 750 60" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" />
          <path d="M 100 220 Q 300 100 500 160 T 780 140" fill="none" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="1" />
          <circle cx="200" cy="80" r="3" fill="#f59e0b" />
          <circle cx="400" cy="120" r="3" fill="#10b981" />
          <circle cx="600" cy="90" r="3" fill="#38bdf8" />
        </svg>

        {/* Technical Banner Monospace Overlay Tag */}
        <div className="absolute top-4 right-4 flex items-center gap-2 px-2.5 py-1 rounded border border-dark-border/80 bg-dark-bg/80 backdrop-blur-md text-[11px] font-mono text-dark-muted">
          <Terminal className="w-3 h-3 text-accent-amber" />
          <span>system: ai/ml_workspace // 2026</span>
        </div>

        {/* Minimal Bottom Label */}
        <div className="absolute bottom-3 left-4 text-[10px] font-mono text-dark-faint">
          <span>LAT: 28.5355° N • LON: 77.3910° E</span>
        </div>
      </div>

      {/* Compact Profile Block */}
      <div className="relative px-2 sm:px-4 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          
          {/* Identity & Subtitle */}
          <div>
            <div className="flex items-center gap-3.5 mb-2.5">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-dark-border bg-dark-surface p-1 shrink-0 shadow-sm">
                <img
                  src="/avatar.png"
                  alt="Anusha Singh"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-dark-text">
                    {personalInfo.name}
                  </h1>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-accent-amberDim border border-accent-amber/30 text-accent-amber font-medium">
                    Student Dev
                  </span>
                </div>
                <div className="text-xs font-mono text-dark-muted flex flex-wrap items-center gap-1.5 mt-0.5">
                  <span className="text-dark-text font-medium">{personalInfo.title}</span>
                  <span className="text-dark-faint">•</span>
                  <span>{personalInfo.institution}</span>
                  <span className="text-dark-faint">•</span>
                  <span className="inline-flex items-center gap-1 text-dark-faint">
                    <MapPin className="w-3 h-3" />
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Authentic Short Introduction */}
            <p className="text-sm sm:text-base text-dark-text leading-relaxed max-w-xl mb-4 font-sans">
              {personalInfo.headline}
            </p>
            <p className="text-xs sm:text-sm text-dark-muted leading-relaxed max-w-xl">
              {personalInfo.subheadline}
            </p>
          </div>

          {/* Status Indicator & Quick Resume CTA */}
          <div className="flex flex-col items-start sm:items-end gap-3 shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Summer '26 Internships</span>
            </div>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-accent-amber/40 bg-accent-amber/10 hover:bg-accent-amber hover:text-zinc-950 text-accent-amber text-xs font-mono font-semibold transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Compact Socials Strip */}
        <div className="mt-6 pt-5 border-t border-dark-border flex flex-wrap items-center gap-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dark-border bg-dark-surface hover:bg-dark-subtle hover:border-dark-borderLight text-xs font-mono text-dark-text transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-accent-amber" />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dark-border bg-dark-surface hover:bg-dark-subtle hover:border-dark-borderLight text-xs font-mono text-dark-text transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-accent-blue" />
            <span>LinkedIn</span>
          </a>

          <a
            href={personalInfo.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dark-border bg-dark-surface hover:bg-dark-subtle hover:border-dark-borderLight text-xs font-mono text-dark-text transition-colors"
          >
            <Twitter className="w-3.5 h-3.5 text-sky-400" />
            <span>X / Twitter</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dark-border bg-dark-surface hover:bg-dark-subtle hover:border-dark-borderLight text-xs font-mono text-dark-text transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>Email</span>
          </a>
        </div>

      </div>
    </section>
  );
};
