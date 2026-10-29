import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Compass, Layers, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const { profile } = portfolioData;

  const engineeringPrinciples = [
    {
      icon: <Code2 size={18} />,
      title: "Readable Code Over Cleverness",
      description: "I write Python and JavaScript that teammates can inspect, maintain, and reason about without guesswork."
    },
    {
      icon: <Layers size={18} />,
      title: "Strong Relational Fundamentals",
      description: "Clean data models, explicit foreign keys, and normalized SQL schemas save more debugging time than quick hacks."
    },
    {
      icon: <Compass size={18} />,
      title: "Pragmatic Problem Solving",
      description: "I focus on addressing concrete technical bottlenecks rather than overcomplicating systems with trendy buzzwords."
    },
    {
      icon: <Terminal size={18} />,
      title: "Active Learning & Verification",
      description: "As a student graduating in 2027, I continuously test ideas in code, consult documentation, and refine my fundamentals."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span>02</span>
            <span>//</span>
            <span>Background</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-desc">
            How I approach software development, learning, and engineering fundamentals.
          </p>
        </div>

        {/* Narrative & Principles Layout */}
        <div className="about-grid">
          
          {/* Main Narrative Column */}
          <div className="about-narrative">
            {profile.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about-objective-callout">
              <h4 className="objective-label font-mono">CAREER OBJECTIVE</h4>
              <p className="objective-text">
                {profile.careerObjective}
              </p>
            </div>
          </div>

          {/* Core Principles Column */}
          <div className="about-principles">
            <h3 className="principles-header font-mono">CORE PRINCIPLES</h3>
            <div className="principles-list">
              {engineeringPrinciples.map((item, index) => (
                <div key={index} className="principle-card">
                  <div className="principle-icon-wrapper text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="principle-title">{item.title}</h4>
                    <p className="principle-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
