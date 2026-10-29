import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="education-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span>04</span>
            <span>//</span>
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-desc">
            Formal undergraduate computer science coursework and current academic standing.
          </p>
        </div>

        {/* Education Editorial Block */}
        <div className="education-card">
          <div className="education-card-header">
            <div className="edu-title-group">
              <div className="edu-icon-wrapper text-accent">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="edu-degree">{education.degree}</h3>
                <div className="edu-specialization font-mono">
                  Specialization: {education.specialization}
                </div>
                <div className="edu-institution">
                  {education.institution} &bull; <span className="text-muted">{education.campus}</span>
                </div>
              </div>
            </div>

            <div className="edu-badges-col">
              <div className="cgpa-pill">
                <Award size={15} className="text-accent" />
                <span>CGPA: <strong>{education.cgpa}</strong></span>
              </div>
              <div className="grad-date font-mono">
                <Calendar size={13} />
                <span>Expected: {education.expectedGraduation}</span>
              </div>
              <div className="edu-location font-mono">
                <MapPin size={13} />
                <span>Tiruchirappalli, India</span>
              </div>
            </div>
          </div>

          <div className="edu-coursework-section">
            <h4 className="coursework-heading font-mono">RELEVANT TECHNICAL FOUNDATIONS & COURSEWORK</h4>
            <div className="coursework-grid">
              {education.coreFocus.map((topic, idx) => (
                <div key={idx} className="coursework-item">
                  <span className="coursework-bullet">&bull;</span>
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
