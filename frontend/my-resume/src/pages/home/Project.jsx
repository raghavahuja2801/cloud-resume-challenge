// src/pages/home/Projects.jsx
import React from 'react';
import './Project.css';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Dashboard",
      description: "A real-time analytics dashboard with AI-driven insights and predictive modeling for business intelligence.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React", "Python", "TensorFlow", "D3.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      details: "/projects/1"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment processing, inventory management, and real-time order tracking.",
      image: "https://via.placeholder.com/600x400",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      details: "/projects/2"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team workspaces, and automated workflows.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React", "Firebase", "Tailwind", "WebSocket"],
      github: "https://github.com",
      demo: null,
      details: "/projects/3"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with dark mode support and smooth animations.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React", "CSS", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo.com",
      details: "/projects/4"
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "Beautiful weather forecasting app with interactive maps, hourly predictions, and severe weather alerts.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React", "Tailwind", "Chart.js", "OpenWeather"],
      github: "https://github.com",
      demo: "https://demo.com",
      details: "/projects/5"
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "Social media monitoring and analytics tool with sentiment analysis and engagement metrics.",
      image: "https://via.placeholder.com/600x400",
      tags: ["Python", "Django", "React", "PostgreSQL"],
      github: "https://github.com",
      demo: null,
      details: "/projects/6"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">
          Here are some of my recent projects that showcase my skills and expertise.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Image */}
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
              </div>

              {/* Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="project-actions">
                <a href={project.details} className="project-btn project-btn-details">
                  <FaInfoCircle className="btn-icon" />
                  Details
                </a>
                <div className="project-actions-right">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn project-btn-icon"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn project-btn-icon"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;