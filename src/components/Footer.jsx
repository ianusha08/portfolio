import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer = ({ onOpenCommand }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-dark-border bg-dark-bg text-dark-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand Copyright */}
        <div className="flex flex-col text-center sm:text-left">
          <div className="text-xs font-mono font-bold text-dark-text">
            {personalInfo.name} — AI/ML Engineer & Builder
          </div>
          <div className="text-[11px] font-mono text-dark-faint mt-0.5">
            Models • Systems • Code • Coffee • Curiosity
          </div>
        </div>

        {/* Action Controls & Scroll Top */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCommand}
            className="text-xs font-mono text-dark-faint hover:text-accent-amber transition-colors"
          >
            Cmd + K
          </button>
          
          <span className="text-dark-border">•</span>

          <div className="flex items-center gap-2.5 text-dark-muted">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-dark-text transition-colors">
              <Github className="w-3.5 h-3.5" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-dark-text transition-colors">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-dark-text transition-colors">
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>

          <span className="text-dark-border">•</span>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-1.5 rounded-lg border border-dark-border bg-dark-surface hover:bg-dark-subtle text-dark-muted hover:text-dark-text transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
