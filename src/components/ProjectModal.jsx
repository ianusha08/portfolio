import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Target } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[var(--modal-backdrop)] backdrop-blur-sm"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-dark-border bg-dark-surface p-5 sm:p-7 text-dark-text shadow-2xl z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-lg border border-dark-border bg-dark-subtle text-dark-muted hover:text-dark-text transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Category Tag & Title */}
          <div className="mb-4 pr-8">
            <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-dark-subtle border border-dark-border text-accent-amber mb-2">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1">
              {project.title}
            </h3>
            <p className="text-xs text-dark-muted">
              {project.tagline}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-2 mb-6 pb-4 border-b border-dark-border">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-accent-amber hover:bg-amber-500 text-zinc-950 font-mono font-semibold text-xs transition-colors flex items-center gap-1.5"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg border border-dark-border bg-dark-subtle hover:border-dark-borderLight text-xs font-mono flex items-center gap-1.5 text-dark-text transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
            <span className="text-xs font-mono text-dark-faint ml-auto">
              Role: <strong className="text-dark-text font-semibold">{project.role}</strong>
            </span>
          </div>

          {/* Case Study Details */}
          <div className="space-y-4 text-xs">
            
            {/* The Problem / Challenge */}
            <div className="p-4 rounded-xl border border-dark-border bg-dark-subtle">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-accent-amber mb-1.5 font-bold uppercase">
                <Target className="w-3.5 h-3.5" />
                <span>Challenge</span>
              </div>
              <p className="text-dark-text leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution / Approach */}
            <div className="p-4 rounded-xl border border-dark-border bg-dark-subtle">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-accent-emerald mb-1.5 font-bold uppercase">
                <Cpu className="w-3.5 h-3.5" />
                <span>Approach</span>
              </div>
              <p className="text-dark-text leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Key Technical Highlights */}
            {project.highlights && (
              <div className="p-4 rounded-xl border border-dark-border bg-dark-subtle">
                <div className="text-[11px] font-mono text-dark-faint uppercase mb-2">
                  Technical Details
                </div>
                <ul className="space-y-1.5">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-dark-text leading-relaxed">
                      <span className="text-accent-amber font-mono mt-0.5">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div>
              <div className="text-[11px] font-mono text-dark-faint uppercase mb-2">
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-subtle border border-dark-border text-dark-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
