import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, FileText, Copy, Check, ArrowUpRight, Info } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactProps {
  onResumeClick: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onResumeClick }) => {
  const [copied, setCopied] = useState(false);
  const { profile } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span>06</span>
            <span>//</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Have a project, opportunity, or interesting problem?</h2>
          <p className="section-desc">
            I'm open to connecting about software development opportunities, collaborative projects, and useful ideas.
          </p>
        </div>

        {/* Contact Container */}
        <div className="contact-card-main">
          
          <div className="contact-channels-grid">
            
            {/* Email Channel */}
            <div className="contact-channel-item">
              <div className="channel-icon-col text-accent">
                <Mail size={22} />
              </div>
              <div className="channel-content">
                <span className="channel-label font-mono">DIRECT INBOX</span>
                <a 
                  href={`mailto:${profile.contact.emailPlaceholder}`}
                  className="channel-value channel-link"
                >
                  {profile.contact.emailPlaceholder}
                </a>
                <div className="channel-actions">
                  <button 
                    onClick={handleCopyEmail}
                    className="copy-btn font-mono"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-accent" /> Copied Address!
                      </>
                    ) : (
                      <>
                        <Copy size={12} /> Copy Email
                      </>
                    )}
                  </button>
                  <span className="channel-note">
                    <Info size={11} style={{ display: 'inline', marginRight: 3 }} />
                    Primary contact address
                  </span>
                </div>
              </div>
            </div>

            {/* GitHub Channel */}
            <div className="contact-channel-item">
              <div className="channel-icon-col text-accent">
                <GithubIcon size={22} />
              </div>
              <div className="channel-content">
                <span className="channel-label font-mono">CODE REPOSITORY</span>
                <a 
                  href={profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value channel-link"
                >
                  github.com/strivo23
                  <ArrowUpRight size={14} className="channel-ext-arrow" />
                </a>
                <p className="channel-subtext">
                  Browse source code, commits, and personal repositories.
                </p>
              </div>
            </div>

            {/* LinkedIn Channel */}
            <div className="contact-channel-item">
              <div className="channel-icon-col text-accent">
                <LinkedinIcon size={22} />
              </div>
              <div className="channel-content">
                <span className="channel-label font-mono">PROFESSIONAL NETWORK</span>
                <a 
                  href={profile.contact.linkedinPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value channel-link"
                >
                  linkedin.com/in/chandrakanth-reddy-dev
                  <ArrowUpRight size={14} className="channel-ext-arrow" />
                </a>
                <p className="channel-subtext">
                  Connect for professional networking, tech updates, and engineering opportunities.
                </p>
              </div>
            </div>

            {/* Resume / Profile Sheet */}
            <div className="contact-channel-item">
              <div className="channel-icon-col text-accent">
                <FileText size={22} />
              </div>
              <div className="channel-content">
                <span className="channel-label font-mono">CURRICULUM VITAE</span>
                <button
                  onClick={onResumeClick}
                  className="channel-value channel-link btn-as-link"
                >
                  View Candidate Summary & Resume
                  <ArrowUpRight size={14} className="channel-ext-arrow" />
                </button>
                <p className="channel-subtext">
                  Complete education, verified CGPA (8.7/10), and stack overview.
                </p>
              </div>
            </div>

          </div>

          {/* Quick Notice footer inside card */}
          <div className="contact-card-footer">
            <span className="footer-status-indicator"></span>
            <span>Based in SRM IST, Tiruchirappalli (IST UTC+5:30) &bull; Typically responds within 24 hours.</span>
          </div>

        </div>

      </div>
    </section>
  );
};
