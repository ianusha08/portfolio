import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, Github, Linkedin, Mail, ArrowRight, X, Briefcase, Code, Trophy, GitPullRequest, Wrench, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const CommandPalette = ({ isOpen, onClose, onOpenResume }) => {
  const [query, setQuery] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      title: 'View Engineering Projects',
      category: 'Navigation',
      icon: <Code className="w-3.5 h-3.5 text-accent-amber" />,
      action: () => { window.location.href = '#projects'; onClose(); }
    },
    {
      title: 'View ICPC & Key Achievements',
      category: 'Navigation',
      icon: <Trophy className="w-3.5 h-3.5 text-accent-amber" />,
      action: () => { window.location.href = '#achievements'; onClose(); }
    },
    {
      title: 'Read Official Resume',
      category: 'Recruiter Quick Access',
      icon: <FileText className="w-3.5 h-3.5 text-accent-emerald" />,
      action: () => { onClose(); onOpenResume(); }
    },
    {
      title: `Toggle Theme (Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode)`,
      category: 'Appearance',
      icon: theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-accent-amber" /> : <Moon className="w-3.5 h-3.5 text-accent-blue" />,
      action: () => { toggleTheme(); onClose(); }
    },
    {
      title: 'View Experience & Journey',
      category: 'Navigation',
      icon: <Briefcase className="w-3.5 h-3.5 text-accent-blue" />,
      action: () => { window.location.href = '#experience'; onClose(); }
    },
    {
      title: 'Explore Open Source & GSSoC',
      category: 'Navigation',
      icon: <GitPullRequest className="w-3.5 h-3.5 text-purple-400" />,
      action: () => { window.location.href = '#opensource'; onClose(); }
    },
    {
      title: 'Explore Technical Toolbox',
      category: 'Navigation',
      icon: <Wrench className="w-3.5 h-3.5 text-accent-amber" />,
      action: () => { window.location.href = '#skills'; onClose(); }
    },
    {
      title: 'Open GitHub Profile (@ianusha08)',
      category: 'External',
      icon: <Github className="w-3.5 h-3.5 text-dark-muted" />,
      action: () => { window.open(personalInfo.github, '_blank'); onClose(); }
    },
    {
      title: 'Open LinkedIn Profile',
      category: 'External',
      icon: <Linkedin className="w-3.5 h-3.5 text-sky-400" />,
      action: () => { window.open(personalInfo.linkedin, '_blank'); onClose(); }
    },
    {
      title: 'Send Direct Email',
      category: 'Contact',
      icon: <Mail className="w-3.5 h-3.5 text-accent-amber" />,
      action: () => { window.location.href = `mailto:${personalInfo.email}`; onClose(); }
    }
  ];

  const filteredActions = actions.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) || 
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
        
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Command Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          className="relative w-full max-w-lg rounded-2xl border border-dark-border bg-dark-surface shadow-2xl z-10 overflow-hidden text-dark-text"
        >
          {/* Search Header Input */}
          <div className="flex items-center gap-2.5 px-4 py-3 border-b border-dark-border bg-dark-surface">
            <Search className="w-4 h-4 text-accent-amber shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Type a command or search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-xs font-mono outline-none text-dark-text placeholder:text-dark-faint"
            />
            <button
              onClick={onClose}
              className="p-1 text-dark-muted hover:text-dark-text"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Action Items List */}
          <div className="max-h-72 overflow-y-auto p-2 space-y-1">
            {filteredActions.length === 0 ? (
              <div className="p-4 text-center text-xs text-dark-faint font-mono">
                No matching results found.
              </div>
            ) : (
              filteredActions.map((item, idx) => (
                <button
                  key={idx}
                  onClick={item.action}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-dark-subtle transition-colors text-left group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded bg-dark-subtle border border-dark-border">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-mono text-dark-text group-hover:text-accent-amber transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[10px] font-mono text-dark-faint">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-3 h-3 text-accent-amber opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))
            )}
          </div>

          {/* Footer Hint */}
          <div className="px-3.5 py-2 border-t border-dark-border bg-dark-subtle/60 flex items-center justify-between text-[10px] font-mono text-dark-faint">
            <span>COMMAND PALETTE</span>
            <span><kbd className="px-1 py-0.5 rounded border border-dark-border bg-dark-surface">ESC</kbd> to close</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
