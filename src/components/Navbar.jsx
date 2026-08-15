import React, { useState } from 'react';
import { Command, FileText, ArrowUpRight, Menu, X, Terminal, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Navbar = ({ onOpenCommand, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Open Source', href: '#opensource' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-dark-bg/85 backdrop-blur-md border-b border-dark-border py-3 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Monogram & Name */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-dark-border bg-dark-surface p-0.5 group-hover:border-accent-amber/50 transition-colors shrink-0">
            <img src="/avatar.png" alt="Anusha Singh" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold font-mono text-dark-text tracking-tight group-hover:text-accent-amber transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono text-dark-faint">
              AI/ML • Developer
            </span>
          </div>
        </a>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          
          {/* Quick Command Trigger */}
          <button
            onClick={onOpenCommand}
            className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1.5 rounded-lg border border-dark-border bg-dark-surface hover:bg-dark-subtle text-dark-muted hover:text-dark-text transition-colors"
            title="Recruiter Quick Search (Cmd + K)"
          >
            <Command className="w-3.5 h-3.5 text-accent-amber" />
            <span className="hidden sm:inline">Cmd + K</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg border border-dark-border bg-dark-surface hover:bg-dark-subtle text-dark-muted hover:text-dark-text transition-all flex items-center justify-center"
            title={theme === 'dark' ? 'Switch to light theme (Warm Editorial)' : 'Switch to dark theme (Vengeance Dark)'}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 text-accent-amber transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-accent-blue transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Resume Trigger */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1 text-xs font-mono font-medium px-3 py-1.5 rounded-lg bg-accent-amber hover:bg-amber-400 text-zinc-950 transition-colors shadow-sm"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg border border-dark-border bg-dark-surface text-dark-muted hover:text-dark-text"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-dark-border bg-dark-bg/95 backdrop-blur-xl px-4 py-4 space-y-2">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-mono rounded-lg text-dark-muted hover:text-dark-text hover:bg-dark-surface transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Theme Toggle Item */}
            <div className="pt-2 border-t border-dark-border/60">
              <button
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-between px-3 py-2 text-xs font-mono rounded-lg text-dark-muted hover:text-dark-text hover:bg-dark-surface transition-colors text-left"
              >
                <span>Theme: {theme === 'dark' ? 'Dark (Vengeance)' : 'Light (Warm Editorial)'}</span>
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-accent-amber" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-accent-blue" />
                )}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
