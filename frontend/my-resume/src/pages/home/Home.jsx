// src/pages/home/Home.jsx
import React, { useState, useEffect } from 'react';
import TerminalHero from '../../components/TerminalHero'
import ExperienceSection from './components/Experience';
import ProjectsSection from './components/Project';
import SkillsSection from './components/Skills';
import Resume from './components/Resume';
import ContactSection from './components/Contact';
import './Home.css';

const Home = ({ isDark, toggleTheme }) => {

  return (
    <>
      {/* Background Texture Overlays */}
      <div className="bg-noise" />
      <div className="bg-scanlines" />
      <div className="bg-vignette" />
      
      <div className="home-container">

        {/* Hero Section - Home */}
        <section id="home" className="hero">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="name-wrapper">
                <h1 className="hero-name">
                  Raghav Ahuja
                </h1>
              </div>
              
              <h2 className="hero-title">
                Software Engineer
              </h2>
              
              <p className="hero-subtitle">
                Cloud • Infrastructure • AI
              </p>
              
              <p className="hero-description">
                Building production-grade software and cloud systems.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn-primary" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Projects
                </a>
                <a href="#resume" className="btn-secondary" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Resume
                </a>
              </div>
            </div>

            <div className="hero-infra">
              <TerminalHero />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <ExperienceSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <ProjectsSection />
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <SkillsSection />
        </section>

        {/* Resume Section */}
        <section id="resume" className="section">
          <Resume />
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <ContactSection />
        </section>
      </div>
    </>
  );
};

export default Home;