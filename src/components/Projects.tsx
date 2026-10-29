import React from 'react';
import { portfolioData, type ProjectItem } from '../data/portfolioData';
import { LeadFlowPreview, CareConnectPreview, TransitRescuePreview, ApiPlatformPreview } from './ProjectPreviews';
import { ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  const renderPreview = (type: ProjectItem['previewType']) => {
    switch (type) {
      case 'leadflow':
        return <LeadFlowPreview />;
      case 'care-connect':
        return <CareConnectPreview />;
      case 'transit-rescue':
        return <TransitRescuePreview />;
      case 'api-platform':
        return <ApiPlatformPreview />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span>01</span>
            <span>//</span>
            <span>Selected Projects</span>
          </div>
          <h2 className="section-title">
            Featured Engineering Work
          </h2>
          <p className="section-desc">
            A curated selection of software applications and technical platforms I have designed, built, and tested.
          </p>
        </div>

        {/* Project List */}
        <div className="projects-list">
          {projects.map((project) => (
            <article key={project.id} className="project-card" id={`project-${project.id}`}>
              
              {/* Project Header Row */}
              <div className="project-header-row">
                <div className="project-meta-left">
                  <span className="project-index font-mono">PROJECT {project.number}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>

                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    title={`View ${project.title} on GitHub`}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon size={15} />
                    <span>Repository</span>
                    <ArrowUpRight size={13} />
                  </a>

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn project-link-demo"
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span 
                      className="project-status-pill font-mono" 
                      title={project.statusText || "Demo in progress"}
                    >
                      <span className="status-indicator-dot"></span>
                      {project.statusText || "Active Project"}
                    </span>
                  )}
                </div>
              </div>

              {/* Stack Tags */}
              <div className="project-tech-stack" aria-label="Technologies used">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlight Callout */}
              <div className="project-highlight-badge">
                <CheckCircle2 size={15} className="highlight-icon" />
                <span className="highlight-text">
                  <strong>Technical Core:</strong> {project.highlight}
                </span>
              </div>

              {/* Two Column Content: Problem & Description vs Technical Contribution */}
              <div className="project-narrative-grid">
                <div className="narrative-block">
                  <h4 className="narrative-heading">Problem Statement</h4>
                  <p className="narrative-text">{project.problemStatement}</p>
                  
                  <h4 className="narrative-heading" style={{ marginTop: '1rem' }}>Solution & Functionality</h4>
                  <p className="narrative-text">{project.description}</p>
                </div>

                <div className="narrative-block">
                  <h4 className="narrative-heading">Technical Contribution</h4>
                  <p className="narrative-text contribution-text">
                    {project.technicalContribution}
                  </p>
                </div>
              </div>

              {/* Custom Designed Application Preview */}
              <div className="project-preview-wrapper" aria-hidden="true">
                {renderPreview(project.previewType)}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
