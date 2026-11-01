import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Mail, MapPin, Briefcase, GraduationCap, Code, FileText, ExternalLink, Award } from 'lucide-react';
import { personalInfo, projectsData, experienceData, toolboxData, openSourceData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

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
          className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl border border-dark-border bg-dark-surface p-5 sm:p-8 text-dark-text shadow-2xl z-10 font-sans"
        >
          {/* Top Actions Bar */}
          <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-dark-border print:hidden">
            <div className="flex items-center gap-2 text-xs font-mono text-accent-amber font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>OFFICIAL RESUME // ANUSHA SINGH</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-accent-amber hover:bg-amber-500 text-zinc-950 font-mono font-medium text-xs transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save / Print PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg border border-dark-border bg-dark-subtle text-dark-muted hover:text-dark-text transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="space-y-6">
            
            {/* Header / Identity */}
            <div className="border-b border-dark-border pb-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h1 className="text-2xl font-bold tracking-tight text-dark-text">
                  {personalInfo.name}
                </h1>
                <span className="text-xs font-mono text-accent-amber">
                  {personalInfo.title}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-dark-muted mt-2">
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-accent-amber" />
                  {personalInfo.email}
                </span>
                <span>•</span>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-dark-text transition-colors">
                  github.com/ianusha08
                </a>
                <span>•</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-dark-text transition-colors">
                  linkedin.com/in/anushasingh18
                </a>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-accent-amber font-semibold mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </h2>
              <div className="p-3 rounded-lg border border-dark-border bg-dark-subtle text-xs">
                <div className="flex items-center justify-between font-bold text-dark-text mb-0.5">
                  <span>Bachelor of Technology in Computer Science & Engineering (AI/ML)</span>
                  <span className="font-mono text-dark-faint">Aug 2024 – May 2028</span>
                </div>
                <div className="text-dark-muted mb-1">
                  {personalInfo.institution} • Specialization in Artificial Intelligence & Machine Learning
                </div>
                <div className="text-dark-faint text-[11px]">
                  Coursework: Data Structures & Algorithms, Machine Learning, Deep Learning, Linear Algebra, DBMS, Operating Systems.
                </div>
              </div>
            </div>

            {/* Experience & Open Source */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-accent-amber font-semibold mb-2 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Experience & Open Source</span>
              </h2>
              <div className="space-y-2.5">
                {experienceData.filter(e => e.type !== 'Education').map((exp, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-dark-border bg-dark-subtle text-xs">
                    <div className="flex items-center justify-between font-bold text-dark-text mb-1">
                      <span>{exp.role} <span className="font-normal text-dark-muted">@ {exp.organization}</span></span>
                      <span className="font-mono text-dark-faint text-[11px]">{exp.period}</span>
                    </div>
                    <p className="text-dark-muted mb-1.5 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-0.5">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="text-dark-text text-[11px] flex items-start gap-1.5">
                          <span className="text-accent-amber">›</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-accent-amber font-semibold mb-2 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" />
                <span>Selected Engineering Projects</span>
              </h2>
              <div className="space-y-2.5">
                {projectsData.filter(p => p.id !== 'ets-platform').slice(0, 3).map((proj) => (
                  <div key={proj.id} className="p-3 rounded-lg border border-dark-border bg-dark-subtle text-xs">
                    <div className="flex items-center justify-between font-bold text-dark-text mb-1">
                      <span>{proj.title} <span className="font-mono text-[10px] text-accent-amber font-normal">[{proj.category}]</span></span>
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[10px] text-dark-muted hover:text-dark-text flex items-center gap-1 transition-colors"
                        >
                          <span>GitHub</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                    <ul className="space-y-0.5 mb-1.5">
                      {proj.highlights?.map((bullet, i) => (
                        <li key={i} className="text-dark-text text-[11px] flex items-start gap-1.5">
                          <span className="text-accent-amber">›</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-[10px] font-mono text-dark-faint">
                      Stack: {proj.technologies.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-accent-amber font-semibold mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Technical Skills</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {toolboxData.map((box) => (
                  <div key={box.category} className="p-2.5 rounded-lg border border-dark-border bg-dark-subtle">
                    <div className="font-mono font-bold text-accent-amber text-[11px] mb-1">{box.category}</div>
                    <div className="text-dark-text font-mono text-[11px]">
                      {box.skills.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
