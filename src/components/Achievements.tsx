import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2, BookmarkCheck } from 'lucide-react';

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData;

  if (!achievements.enabled) {
    return null;
  }

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span>05</span>
            <span>//</span>
            <span>Verified Milestones</span>
          </div>
          <h2 className="section-title">Learning & Milestones</h2>
          <p className="section-desc">
            Verified academic milestones and active engineering development.
          </p>
        </div>

        {achievements.items.length === 0 ? (
          <div className="empty-achievements-box">
            <BookmarkCheck size={20} className="text-muted" />
            <p className="empty-achievements-text">
              Certifications, internships, and confirmed achievements will be documented here as they are verified.
            </p>
          </div>
        ) : (
          <div className="achievements-grid">
            {achievements.items.map((item, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-top">
                  <span className="tag font-mono">{item.tag}</span>
                  <span className="achievement-verified font-mono">
                    <CheckCircle2 size={13} className="text-accent" /> Verified
                  </span>
                </div>
                <h3 className="achievement-title">{item.title}</h3>
                <div className="achievement-org font-mono">{item.organization}</div>
                <p className="achievement-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
