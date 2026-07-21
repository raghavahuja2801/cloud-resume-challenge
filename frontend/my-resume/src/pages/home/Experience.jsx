// src/pages/home/Experience.jsx
import React, { useState } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import HorizonZonesLogo from './assets/horizon-zones-logo.png';
import './Experience.css';

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const experiences = [
    {
      id: 1,
      company: 'InworldAI',
      logo: 'https://mintcdn.com/inworldai/vOWfx6VxWVUNoiWL/logo/light.svg?fit=max&auto=format&n=vOWfx6VxWVUNoiWL&q=85&s=ece32847cf0349a57d2d8c3d23a97cd1',
      logoLight: 'https://mintcdn.com/inworldai/vOWfx6VxWVUNoiWL/logo/dark.svg?fit=max&auto=format&n=vOWfx6VxWVUNoiWL&q=85&s=60df17e32aa7b09eea490ff7a306a6e4',
      role: 'Software Engineer Intern',
      location: 'Remote',
      startDate: 'May 2025',
      endDate: 'August 2025',
      highlight: 'Shipped 6 core primitives for the Inworld Runtime SDK, enabling teams to build and deploy AI agents without custom orchestration or workflow logic',
      achievements: [
        'Shipped 6 core primitives for the Inworld Runtime SDK (including Knowledge and MCP nodes), enabling teams to build and deploy AI agents without custom orchestration or workflow logic',
        'Built scalable backend services and REST APIs for billing, credits, subscription tiers, and payment workflows using event-driven architecture, contributing to a 20% increase in B2C revenue',
        'Integrated Ultravox into the Realtime API by extending streaming and multimodal pipelines, enabling low-latency voice-based interactions for end users',
        'Reduced LLM cost-per-request by 20% and improved reliability by 15% through Inworld Routers, enabling cost and latency-aware model selection with automatic failover across a unified API endpoint',
        'Designed asynchronous event-driven workflows using Pub/Sub, enabling scalable communication between distributed backend services while reducing service coupling'
      ],
      technologies: ['JavaScript', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'REST APIs', 'Pub/Sub']
    },
    {
      id: 2,
      company: 'Horizon Zones International',
      logo: HorizonZonesLogo,
      logoLight: HorizonZonesLogo,
      role: 'Software Engineer Intern',
      location: 'Vancouver, BC',
      startDate: 'September 2024',
      endDate: 'December 2024',
      highlight: 'Built an internal admin CMS with RBAC from scratch, cutting manual content update effort by 60% and turnaround time for site changes by 20%',
      achievements: [
        'Built an internal admin CMS with RBAC from scratch, cutting manual content update effort by 60% and turnaround time for site changes by 20%',
        'Expanded the CMS into a multi-role project management platform, centralizing operations for $10M+ construction projects with role-based workflows and real-time data management',
        'Reduced routine project workflow overhead by ~40% by shipping AI-driven automation pipelines, directly improving team throughput and execution speed',
        'Engineered a backend reporting service with reusable templates and REST APIs for 3+ stakeholder teams, reducing report generation time and accelerating decision-making by 25%',
        'Configured CI/CD pipelines with GitHub Actions, established version control workflows, and wrote automated tests, reducing deployment errors by 50% and accelerating release cycles by 30%'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'GitHub Actions', 'REST APIs', 'CI/CD', 'RBAC', 'AI Automation']
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>

        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-header">
              {/* Company Logo */}
              <div className="company-logo-wrapper">
                <img
                  src={exp.logo || 'https://via.placeholder.com/80/cccccc/808080?text=Logo'}
                  alt={`${exp.company} logo`}
                  className="company-logo"
                  width="80"
                  height="80"
                />
                {exp.logoLight && (
                  <img
                    src={exp.logoLight}
                    alt={`${exp.company} logo dark`}
                    className="company-logo-dark"
                    width="80"
                    height="80"
                  />
                )}
              </div>

              {/* Company Info */}
              <div className="company-info">
                <h3 className="company-role">{exp.role}</h3>
                <div className="company-detail">
                  <Briefcase size={16} className="detail-icon" />
                  <span className="company-name">{exp.company}</span>
                </div>
                <div className="company-detail">
                  <MapPin size={16} className="detail-icon" />
                  <span className="company-location">{exp.location}</span>
                  <Calendar size={16} className="detail-icon" />
                  <span className="company-date">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
              </div>

              {/* Expand/Collapse Button */}
              <button
                className="expand-button"
                onClick={() => toggleExpand(exp.id)}
                aria-label={expandedItems[exp.id] ? 'Collapse' : 'Expand'}
              >
                <svg
                  className={`expand-icon ${expandedItems[exp.id] ? 'expanded' : ''}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Highlight Point */}
            {!expandedItems[exp.id] && (
              <div className="experience-highlight">
                <p>{exp.highlight}</p>
              </div>
            )}

            {/* Expanded Content */}
            {expandedItems[exp.id] && (
              <div className="experience-details">
                <h4 className="details-heading">Responsibilities and Achievements</h4>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="technologies-section">
                  <h4 className="technologies-heading">Technologies used</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;