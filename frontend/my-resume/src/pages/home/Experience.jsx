// src/pages/home/Experience.jsx
import React, { useState, useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const experiences = [
    {
      id: 1,
      year: '2026',
      role: 'Software Engineer Intern',
      company: 'Inworld AI',
      location: 'Remote',
      achievements: [
        'Shipped 6 core primitives for the Inworld Runtime SDK (including Knowledge and MCP nodes), enabling teams to build and deploy AI agents without custom orchestration or workflow logic',
        'Built scalable backend services and REST APIs for billing, credits, subscription tiers, and payment workflows using event-driven architecture, contributing to a 20% increase in B2C revenue',
        'Integrated Ultravox into the Realtime API by extending streaming and multimodal pipelines, enabling low-latency voice-based interactions for end users',
        'Reduced LLM cost-per-request by 20% and improved reliability by 15% through Inworld Routers, enabling cost and latency-aware model selection with automatic failover across a unified API endpoint',
        'Designed asynchronous event-driven workflows using Pub/Sub, enabling scalable communication between distributed backend services while reducing service coupling'
      ],
      technologies: ['TypeScript', 'Node.js', 'REST APIs', 'Pub/Sub', 'LLM', 'MCP', 'AI Agents']
    },
    {
      id: 2,
      year: '2025',
      role: 'Software Engineer Intern',
      company: 'Horizon Zones International',
      location: 'Remote',
      achievements: [
        'Built an internal admin CMS with RBAC from scratch, cutting manual content update effort by 60% and turnaround time for site changes by 20%',
        'Expanded the CMS into a multi-role project management platform, centralizing operations for $10M+ construction projects with role-based workflows and real-time data management',
        'Reduced routine project workflow overhead by ~40% by shipping AI-driven automation pipelines, directly improving team throughput and execution speed',
        'Engineered a backend reporting service with reusable templates and REST APIs for 3+ stakeholder teams, reducing report generation time and accelerating decision-making by 25%',
        'Configured CI/CD pipelines with GitHub Actions, established version control workflows, and wrote automated tests, reducing deployment errors by 50% and accelerating release cycles by 30%'
      ],
      technologies: ['React', 'Node.js', 'REST APIs', 'CI/CD', 'GitHub Actions', 'RBAC', 'AI Automation']
    }
  ];

  const toggleExpand = (id) => {
    if (isMobile) {
      setExpandedId(expandedId === id ? null : id);
    }
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            
            return (
              <div 
                key={exp.id} 
                className={`experience-item ${isExpanded ? 'expanded' : ''}`}
                onClick={() => toggleExpand(exp.id)}
              >
                {/* Year - Terracotta */}
                <div className="experience-year" style={{ color: 'var(--accent-terracotta)' }}>
                  {exp.year}
                </div>
                
                {/* Line & Dot */}
                <div className="experience-line">
                  <div className="experience-dot"></div>
                </div>
                
                {/* Content */}
                <div className="experience-content">
                  <div className="experience-header">
                    <div className="experience-title-group">
                      <h3 className="experience-role">{exp.role}</h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <span className="experience-location">
                      {exp.location}
                    </span>
                  </div>
                  
                  {/* Tech Tags - Mobile */}
                  {isMobile && (
                    <div className="experience-tech-tags-mobile">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="experience-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Expandable Details */}
                  <div className={`experience-details ${isExpanded || !isMobile ? 'expanded' : ''}`}>
                    <ul className="experience-achievements">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="experience-achievement">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Tech Tags - Desktop */}
                    {!isMobile && (
                      <div className="experience-tech-tags">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="experience-tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;