import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span>03</span>
            <span>//</span>
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills & Tooling</h2>
          <p className="section-desc">
            Technologies and tools I work with regularly and can discuss in technical interviews.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="skills-categories-grid">
          {skills.categories.map((cat) => (
            <div key={cat.category} className="skill-category-card">
              <div className="category-header">
                <h3 className="category-title">{cat.category}</h3>
                {cat.description && (
                  <span className="category-desc">{cat.description}</span>
                )}
              </div>
              
              <div className="skills-pill-wrap">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-pill font-mono">
                    <span className="skill-dot"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Interests */}
        <div className="additional-interests-card">
          <div className="interests-header">
            <span className="interests-icon text-accent">
              <Sparkles size={16} />
            </span>
            <div>
              <h4 className="interests-title">Additional Technical Focus & Interests</h4>
              <p className="interests-subtitle">
                Domains I am actively exploring, practicing, and studying:
              </p>
            </div>
          </div>

          <div className="interests-tags">
            {skills.additionalInterests.map((interest) => (
              <span key={interest} className="tag tag-accent">
                {interest}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
