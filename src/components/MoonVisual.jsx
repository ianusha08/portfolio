import React from 'react';
import { Moon, Sparkles } from 'lucide-react';

export const MoonVisual = () => {
  return (
    <section className="py-14 sm:py-20 border-t border-dark-border relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Ethereal Atmospheric Radial Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-32 bg-accent-amber/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-4 flex flex-col items-center">
        {/* Minimal Lunar Phase Accent */}
        <div className="flex items-center gap-1.5 mb-4 text-accent-amber/70">
          <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-accent-amber/40" />
          <Moon className="w-3.5 h-3.5 text-accent-amber" />
          <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-accent-amber/40" />
        </div>

        {/* The Quote */}
        <blockquote className="font-mono text-xs sm:text-sm md:text-base text-dark-text tracking-wide sm:tracking-wider leading-relaxed select-none font-medium">
          “She was like the moon — part of her was always hidden away”
        </blockquote>

        {/* Author Signature */}
        <div className="mt-3.5 text-[11px] font-mono tracking-widest text-dark-faint uppercase flex items-center gap-2 select-none">
          <span>-- Dia Reeves --</span>
        </div>
      </div>
    </section>
  );
};
