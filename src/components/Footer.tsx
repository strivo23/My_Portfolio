import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-main">
      <div className="container footer-inner">
        
        <div className="footer-left">
          <div className="footer-wordmark font-mono">
            {profile.name} &bull; Class of 2027
          </div>
          <div className="footer-meta">
            B.Tech CSE (Cybersecurity) &bull; SRM Institute of Science and Technology
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-copyright font-mono">
            &copy; {currentYear} &bull; Built with React, TypeScript & Vite
          </div>
          <button 
            onClick={scrollToTop} 
            className="back-to-top-btn font-mono"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
};
