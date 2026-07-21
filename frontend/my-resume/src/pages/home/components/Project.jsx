// src/pages/home/Projects.jsx
import React, { useState, useRef } from 'react';
import './Project.css';
import CloudResume from '../assets/cloud-resume.png';
import Jotion from '../assets/jotion.png';
import PodcastAI from '../assets/podcast-ai.png';
import Disney from '../assets/disney.png';
import HomeLab from '../assets/Homelab.png';
import n8n from '../assets/n8n.png';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const dialogRef = useRef(null);

  const openDialog = (project) => {
    setSelectedProject(project);
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    setSelectedProject(null);
  };

  const projects = [
    {
      id: 1,
      title: "Cloud Resume Challenge",
      highlight: "A AWS Cloud-based resume website with CI/CD pipeline, serverless architecture, and automated deployment.",
      description: "The Cloud Resume Challenge is a project that demonstrates the ability to build and deploy a resume website using AWS cloud services. It includes a CI/CD pipeline for automated deployment, serverless architecture using AWS Lambda, and integration with AWS S3 for hosting. The project also features automated testing and monitoring to ensure reliability and performance.",
      image: CloudResume,
      tags: ["React", "AWS", "Terraform", "CI/CD", "Serverless"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      id: 5,
      title: "K3s HomeLab",
      highlight: "A AWS Cloud-based resume website with CI/CD pipeline, serverless architecture, and automated deployment.",
      description: "The Cloud Resume Challenge is a project that demonstrates the ability to build and deploy a resume website using AWS cloud services. It includes a CI/CD pipeline for automated deployment, serverless architecture using AWS Lambda, and integration with AWS S3 for hosting. The project also features automated testing and monitoring to ensure reliability and performance.",
      image: HomeLab,
      tags: ["k3s", "Kubernetes", "Tailscale", "Docker", "DNS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      id: 6,
      title: "n8n Workflow Automation",
      highlight: "A AWS Cloud-based resume website with CI/CD pipeline, serverless architecture, and automated deployment.",
      description: "The Cloud Resume Challenge is a project that demonstrates the ability to build and deploy a resume website using AWS cloud services. It includes a CI/CD pipeline for automated deployment, serverless architecture using AWS Lambda, and integration with AWS S3 for hosting. The project also features automated testing and monitoring to ensure reliability and performance.",
      image: n8n,
      tags: ["n8n", "LLM", "Postgres", "Qdrant", "Chunking"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      id: 3,
      title: "PodcastAI",
      highlight: "Convert any document into a high-quality podcast. Save time, reach wider audiences, and make your content more accessible",
      description: "Convert any document into a high-quality podcast. Save time, reach wider audiences, and make your content more accessible",
      image: PodcastAI,
      tags: ["React", "Firebase", "Tailwind", "WebSocket"],
      github: "https://github.com",
      demo: null,
    },
    {
      id: 2,
      title: "Collaborative Note-Taking App",
      highlight: "Real-time collaborative note-taking with rich text editing and version history.",
      description: "A real-time collaborative note-taking application that allows multiple users to edit documents simultaneously. Features include rich text editing, version history, commenting, and organization with folders and tags. The application uses WebSockets for real-time updates and implements operational transformation algorithms to handle concurrent edits without conflicts.",
      image: Jotion,
      tags: ["React", "Socket.io", "MongoDB", "Express", "Draft.js"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      id: 4,
      title: "Disney Clone",
      highlight: "A replica of the Disney Plus streaming platform built using React, Firebase, and Styled Components. This project features user authentication, personalized content browsing, and a sleek, responsive UI.",
      description: "A replica of the Disney Plus streaming platform built using React, Firebase, and Styled Components. This project features user authentication, personalized content browsing, and a sleek, responsive UI. The app leverages Firebase for real-time user data management and login functionality, while Styled Components is used for modern and maintainable styling. Users can sign in, browse through different categories, and view movie or show details seamlessly, emulating the Disney Plus experience.",
      image: Disney,
      tags: ["React", "CSS", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
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
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-highlight">{project.highlight}</p>

                <div className="project-tags">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="project-tag project-tag--more">+{project.tags.length - 3}</span>
                  )}
                </div>
              </div>

              <div className="project-actions">
                <button
                  className="project-btn project-btn-details"
                  onClick={() => openDialog(project)}
                >
                  <FaCode className="btn-icon" />
                  Details
                </button>
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

        {/* Details Dialog */}
        <dialog
          ref={dialogRef}
          className="project-dialog"
          onClick={(e) => { if (e.target === dialogRef.current) closeDialog(); }}
          onClose={closeDialog}
        >
          {selectedProject && (
            <div className="project-dialog-content">
              <button className="project-dialog-close" onClick={closeDialog} aria-label="Close">
                <FaTimes />
              </button>

              <div className="project-dialog-image-wrapper">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="project-dialog-image"
                />
              </div>

              <div className="project-dialog-body">
                <h3 className="project-dialog-title">{selectedProject.title}</h3>
                <p className="project-dialog-description">{selectedProject.description}</p>

                <div className="project-dialog-tags">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-dialog-actions">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-details"
                    >
                      <FaGithub className="btn-icon" />
                      View Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-details"
                    >
                      <FaExternalLinkAlt className="btn-icon" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </dialog>
      </div>
    </section>
  );
};

export default Projects;