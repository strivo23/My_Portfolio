import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, FileText, Check, Copy, ExternalLink, Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { profile, education, skills } = portfolioData;

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const summaryText = `
${profile.name}
${profile.role}
Email: ${profile.contact.emailPlaceholder}
Education: ${education.degree} (${education.specialization})
Institution: ${education.institution}, ${education.campus}
Expected Graduation: ${education.expectedGraduation} | CGPA: ${education.cgpa}
Core Skills: ${skills.categories.map(c => `${c.category}: ${c.skills.join(', ')}`).join(' | ')}
GitHub: ${profile.contact.github}
LinkedIn: ${profile.contact.linkedinPlaceholder}
Career Objective: ${profile.careerObjective}
    `.trim();

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="resume-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div 
        className="resume-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resume-modal-header">
          <div className="resume-modal-title-group">
            <span className="modal-icon-badge">
              <FileText size={18} />
            </span>
            <div>
              <h3 id="resume-modal-title" className="resume-modal-title">
                {profile.name} — Curriculum Vitae
              </h3>
              <p className="resume-modal-subtitle">
                Verified Candidate Profile & Credentials
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="resume-modal-close"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        <div className="resume-modal-body">
          {/* Status Note */}
          <div className="resume-placeholder-notice">
            <div className="notice-badge">Configuration Note</div>
            <p className="notice-text">
              Direct PDF download will be activated when <code>public/resume.pdf</code> is supplied. In the meantime, here is the verified candidate summary:
            </p>
          </div>

          <div className="resume-summary-card">
            <div className="summary-section">
              <h4 className="summary-heading">Candidate Info</h4>
              <p className="summary-value"><strong>Name:</strong> {profile.name}</p>
              <p className="summary-value"><strong>Role Focus:</strong> {profile.role}</p>
              <p className="summary-value"><strong>Email:</strong> {profile.contact.emailPlaceholder}</p>
              <p className="summary-value"><strong>Status:</strong> {profile.availability.label}</p>
            </div>

            <div className="summary-section">
              <h4 className="summary-heading">Academic Profile</h4>
              <p className="summary-value">
                <strong>{education.degree}</strong> ({education.specialization})
              </p>
              <p className="summary-value text-muted">
                {education.institution} · Expected {education.expectedGraduation}
              </p>
              <p className="summary-value">
                <strong>Cumulative Grade Point Average (CGPA):</strong> {education.cgpa}
              </p>
            </div>

            <div className="summary-section">
              <h4 className="summary-heading">Core Technical Stack</h4>
              <div className="summary-tags">
                {skills.categories.flatMap(c => c.skills).slice(0, 10).map((skill, idx) => (
                  <span key={idx} className="tag tag-accent">{skill}</span>
                ))}
              </div>
            </div>

            <div className="summary-section">
              <h4 className="summary-heading">Verified Links</h4>
              <p className="summary-value">
                <strong>GitHub:</strong>{' '}
                <a 
                  href={profile.contact.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-with-icon"
                >
                  {profile.contact.github} <ExternalLink size={13} />
                </a>
              </p>
              <p className="summary-value" style={{ marginTop: '0.35rem' }}>
                <strong>LinkedIn:</strong>{' '}
                <a 
                  href={profile.contact.linkedinPlaceholder} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-with-icon"
                >
                  linkedin.com/in/chandrakanth-reddy-dev <ExternalLink size={13} />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="resume-modal-footer">
          <button 
            onClick={handleCopySummary} 
            className="btn-secondary"
            style={{ fontSize: '0.85rem' }}
          >
            {copied ? (
              <>
                <Check size={14} className="text-accent" /> Copied Summary to Clipboard
              </>
            ) : (
              <>
                <Copy size={14} /> Copy Profile Summary
              </>
            )}
          </button>
          
          <a
            href={profile.contact.resumeAvailable ? "/resume.pdf" : "#"}
            onClick={(e) => {
              if (!profile.contact.resumeAvailable) {
                e.preventDefault();
                alert("Place your actual PDF at 'public/resume.pdf' and set 'resumeAvailable: true' in 'src/data/portfolioData.ts'.");
              }
            }}
            className="btn-primary"
            style={{ fontSize: '0.85rem' }}
            download={profile.contact.resumeAvailable ? "Chandrakanth_Reddy_Resume.pdf" : undefined}
          >
            <Download size={14} /> Download PDF {profile.contact.resumeAvailable ? "" : "(Pending File)"}
          </a>
        </div>
      </div>
    </div>
  );
};
