import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="portfolio-app">
        <Navbar onResumeClick={() => setIsResumeModalOpen(true)} />
      
      <main id="main-content">
        <Hero />
        <div className="editorial-divider container" />
        <Projects />
        <div className="editorial-divider container" />
        <About />
        <div className="editorial-divider container" />
        <Skills />
        <div className="editorial-divider container" />
        <Education />
        <div className="editorial-divider container" />
        <Achievements />
        <div className="editorial-divider container" />
        <Contact onResumeClick={() => setIsResumeModalOpen(true)} />
      </main>

      <Footer />

      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
      </div>
    </ThemeProvider>
  );
};

export default App;
