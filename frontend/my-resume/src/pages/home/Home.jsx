// src/pages/home/Home.jsx
import React, { useState, useEffect } from 'react';
import InfraAnimation from './InfraAnimation'
import './Home.css';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

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

              <div className="terminal">
                <div className="terminal-header">
                  <span className="terminal-dot"></span>
                  <span className="terminal-dot"></span>
                  <span className="terminal-dot"></span>
                  <span className="terminal-title">bash</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line">
                    <span className="terminal-command">$ terraform apply</span>
                    <span className="terminal-output">Apply complete. Resources: 28 added.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-infra">
              <InfraAnimation />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="section-content">
            <h2 className="section-title">About</h2>
            <p className="section-text">
              Add your about content here...
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="section-content">
            <h2 className="section-title">Experience</h2>
            <p className="section-text">
              Add your experience content here...
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="section-content">
            <h2 className="section-title">Projects</h2>
            <p className="section-text">
              Add your projects content here...
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="section-content">
            <h2 className="section-title">Skills</h2>
            <p className="section-text">
              Add your skills content here...
            </p>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="section">
          <div className="section-content">
            <h2 className="section-title">Resume</h2>
            <p className="section-text">
              Add your resume content here...
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="section-content">
            <h2 className="section-title">Contact</h2>
            <p className="section-text">
              Add your contact content here...
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;