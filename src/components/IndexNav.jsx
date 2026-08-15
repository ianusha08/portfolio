import React, { useEffect, useState } from 'react';

export const IndexNav = () => {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', index: '01', label: 'About' },
    { id: 'experience', index: '02', label: 'Experience' },
    { id: 'projects', index: '03', label: 'Projects' },
    { id: 'achievements', index: '04', label: 'Achievements' },
    { id: 'opensource', index: '05', label: 'Open Source' },
    { id: 'skills', index: '06', label: 'Skills' },
    { id: 'contact', index: '07', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(navItems[i].id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside className="hidden lg:block w-48 shrink-0 self-stretch">
      <div className="sticky top-28 space-y-6">
        <div className="text-[11px] font-mono tracking-widest text-dark-faint uppercase font-medium">
          // INDEX
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left flex items-center gap-2.5 py-1.5 px-2 rounded text-xs font-mono transition-all group ${
                  isActive
                    ? 'text-accent-amber font-semibold translate-x-1'
                    : 'text-dark-muted hover:text-dark-text hover:translate-x-0.5'
                }`}
              >
                <span
                  className={`text-[10px] transition-colors ${
                    isActive ? 'text-accent-amber font-bold' : 'text-dark-faint group-hover:text-dark-muted'
                  }`}
                >
                  {item.index}
                </span>
                <span className="truncate">{item.label}</span>
                {isActive && (
                  <span className="ml-auto w-1 h-1 rounded-full bg-accent-amber animate-pulse" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-dark-border">
          <div className="text-[10px] font-mono text-dark-faint leading-relaxed">
            <div>STATUS: LEARNING & SHIPPING</div>
            <div className="text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
              <span>Available '26 Intern</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
