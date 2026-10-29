import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Hero: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          
          {/* Availability Status Badge */}
          <div className="availability-indicator-wrapper">
            <div className="availability-pill">
              <span className="pulsing-dot" aria-hidden="true"></span>
              <span className="availability-text">{profile.availability.label}</span>
            </div>
          </div>

          {/* Intro Label */}
          <p className="hero-badge font-mono">
            {profile.badge}
          </p>

          {/* Main Headline */}
          <h1 className="hero-headline">
            {profile.headline}
          </h1>

          {/* Supporting Paragraph */}
          <p className="hero-paragraph">
            {profile.bio}
          </p>

          {/* Call to Actions */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <span>Explore My Projects</span>
              <ArrowDown size={15} />
            </a>
            <a href="#contact" className="btn-secondary">
              <span>Get in Touch</span>
              <Mail size={15} />
            </a>
          </div>

          {/* Quick Technical Credential Strip */}
          <div className="hero-meta-bar">
            <div className="meta-item">
              <span className="meta-label">Primary Stack</span>
              <span className="meta-value font-mono">Python · Django · PostgreSQL · React</span>
            </div>
            <div className="meta-divider" aria-hidden="true">/</div>
            <div className="meta-item">
              <span className="meta-label">Focus</span>
              <span className="meta-value">Backend & Full-Stack Systems</span>
            </div>
            <div className="meta-divider" aria-hidden="true">/</div>
            <div className="meta-item">
              <span className="meta-label">Code Repository</span>
              <a 
                href={profile.contact.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="meta-link font-mono"
              >
                <GithubIcon size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '4px' }} />
                github.com/strivo23
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
