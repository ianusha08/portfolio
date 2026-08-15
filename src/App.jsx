import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { FeaturedWork } from './components/FeaturedWork';
import { Achievements } from './components/Achievements';
import { OpenSource } from './components/OpenSource';
import { Toolbox } from './components/Toolbox';
import { Contact } from './components/Contact';
import { MoonVisual } from './components/MoonVisual';
import { Footer } from './components/Footer';
import { IndexNav } from './components/IndexNav';
import { CommandPalette } from './components/CommandPalette';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text font-sans selection:bg-accent-amber/20 selection:text-accent-amber relative">
      
      {/* Subtle Background Grid Pattern */}
      <div className="fixed inset-0 bg-editorial-grid opacity-50 pointer-events-none z-0" />

      {/* Fixed Header Bar */}
      <Navbar
        onOpenCommand={() => setCommandOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Layout with 2-Column Editorial Stream + Right Index */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-16">
        <div className="lg:grid lg:grid-cols-[1fr_190px] gap-8 xl:gap-12 items-start">
          
          {/* Main Content Column */}
          <main className="min-w-0 space-y-2">
            <Hero onOpenResume={() => setResumeOpen(true)} />
            <About />
            <Experience />
            <FeaturedWork />
            <Achievements />
            <OpenSource />
            <Toolbox />
            <Contact />
            <MoonVisual />
          </main>

          {/* Persistent / Sticky Right-Side Index Navigation */}
          <IndexNav />

        </div>
      </div>

      {/* Footer */}
      <Footer onOpenCommand={() => setCommandOpen(true)} />

      {/* Recruiter Cmd+K Navigation Palette */}
      <CommandPalette
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

    </div>
  );
}
