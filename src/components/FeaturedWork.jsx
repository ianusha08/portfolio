import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Github, ExternalLink, Code2, Terminal, Layers, Mic, Eye, BarChart3, Bot } from 'lucide-react';

export const FeaturedWork = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Voice AI', 'Generative AI', 'Computer Vision', 'Full Stack'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Voice AI') return project.category.toLowerCase().includes('voice');
    if (activeCategory === 'Generative AI') return project.category.toLowerCase().includes('generative');
    if (activeCategory === 'Computer Vision') return project.category.toLowerCase().includes('computer vision');
    if (activeCategory === 'Full Stack') return project.category.toLowerCase().includes('full stack');
    return true;
  });

  const getProjectIcon = (id) => {
    switch (id) {
      case 'saksham':
      case 'voice-ai-agent':
        return <Mic className="w-4 h-4 text-accent-amber" />;
      case 'nuurai':
        return <Bot className="w-4 h-4 text-accent-blue" />;
      case 'restricted-area-intrusion-detection':
      case 'halo-scan':
        return <Eye className="w-4 h-4 text-accent-emerald" />;
      case 'ets-platform':
        return <Layers className="w-4 h-4 text-purple-400" />;
      case 'titanic-survival-prediction':
        return <BarChart3 className="w-4 h-4 text-amber-400" />;
      default:
        return <Terminal className="w-4 h-4 text-accent-amber" />;
    }
  };

  return (
    <section id="projects" className="py-12 border-t border-dark-border">
      {/* Monospace Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-dark-faint uppercase">
          <span className="text-accent-amber font-semibold">03 //</span>
          <span className="text-dark-muted font-medium">PROJECTS & CASE STUDIES</span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all border ${
                activeCategory === cat
                  ? 'bg-accent-amber/15 border-accent-amber/40 text-accent-amber'
                  : 'bg-dark-subtle border-dark-border text-dark-muted hover:text-dark-text hover:border-dark-borderLight'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => {
          const isFeatured = project.featured && activeCategory === 'All';

          return (
            <div
              key={project.id}
              className={`tech-card rounded-xl p-5 border border-dark-border hover:border-dark-borderLight transition-all flex flex-col justify-between ${
                isFeatured ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                {/* Header Meta: Category + Links */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded bg-dark-subtle border border-dark-border">
                      {getProjectIcon(project.id)}
                    </span>
                    <span className="text-[11px] font-mono text-dark-faint uppercase">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded border border-dark-border bg-dark-subtle hover:bg-dark-border text-dark-muted hover:text-dark-text transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded border border-dark-border bg-dark-subtle hover:bg-dark-border text-dark-muted hover:text-dark-text transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-base font-bold text-dark-text mb-1.5 group-hover:text-accent-amber transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-dark-muted leading-relaxed mb-4">
                  {project.tagline}
                </p>

                {/* Problem / Solution Snapshot for Featured Projects */}
                {isFeatured && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-lg bg-dark-subtle border border-dark-border mb-4 text-xs">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-dark-faint mb-1">
                        Challenge
                      </div>
                      <p className="text-dark-text leading-snug line-clamp-2">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-accent-emerald mb-1">
                        Engineered Approach
                      </div>
                      <p className="text-dark-text leading-snug line-clamp-2">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom: Tech Stack Chips + Case Study CTA */}
              <div className="pt-3 border-t border-dark-border flex flex-wrap items-center justify-between gap-3 mt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-dark-subtle border border-dark-border text-dark-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-dark-faint">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-mono text-accent-amber hover:text-amber-300 font-medium transition-colors ml-auto"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
