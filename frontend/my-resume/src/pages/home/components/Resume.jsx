// src/pages/home/Resume.jsx
import React from 'react';
import './Resume.css';
import { FaDownload, FaLinkedin, FaGraduationCap } from 'react-icons/fa';

const Resume = () => {
    return (
        <section className="resume-section" id="resume">
            <div className="resume-container">
                <header className="resume-header">
                    <h2 className="resume-title">Resume</h2>
                    <p className="resume-subtitle">
                        Download my resume to learn more about my education, work experience, and skills.
                    </p>
                </header>

                <div className="resume-grid">
                    {/* Left Column - Resume Card */}
                    <aside className="resume-left">
                        <article className="resume-card">
                            <div className="resume-card-content">
                                <h3 className="resume-name">Raghav Ahuja</h3>
                                <p className="resume-role">Full Stack Engineer · Applied AI</p>
                                <time className="resume-updated" dateTime="2026-06">
                                    Last updated: June 2026
                                </time>
                            </div>
                            <div className="resume-actions">
                                <a 
                                    href="/resume.pdf" 
                                    className="resume-btn resume-btn-primary"
                                    download
                                >
                                    <FaDownload className="btn-icon" aria-hidden="true" />
                                    Download PDF
                                </a>
                                <a 
                                    href="https://linkedin.com/in/raghavahuja" 
                                    className="resume-btn resume-btn-secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin className="btn-icon" aria-hidden="true" />
                                    View LinkedIn
                                </a>
                            </div>
                        </article>
                    </aside>

                    {/* Right Column - Education & Skills */}
                    <div className="resume-right">
                        {/* Education Section */}
                        <article className="resume-education">
                            <h3 className="resume-sub-section-title">Education</h3>
                            <div className="education-item">
                                <div className="education-header">
                                    <FaGraduationCap className="education-icon" aria-hidden="true" />
                                    <div className="education-meta">
                                        <h4 className="education-degree">Bachelor of Science, Computing Science</h4>
                                        <span className="education-minor">Minor in Economics</span>
                                        <p className="education-school">Simon Fraser University, Vancouver, BC</p>
                                    </div>
                                </div>
                                <div className="education-details">
                                    <span className="education-date">Jan 2022 – Dec 2026</span>
                                    <span className="education-gpa">GPA: 3.2 / 4.4</span>
                                </div>
                            </div>
                        </article>

                        {/* Key Skills Section */}
                        <article className="resume-skills">
                            <h3 className="resume-sub-section-title">Key Skills</h3>
                            <div className="skills-grid">
                                <SkillCategory 
                                    title="Languages" 
                                    skills={['JavaScript', 'TypeScript', 'Java', 'Python', 'Go', 'SQL']} 
                                />
                                <SkillCategory 
                                    title="Databases" 
                                    skills={['PostgreSQL', 'MySQL', 'MongoDB', 'Snowflake']} 
                                />
                                <SkillCategory 
                                    title="Frameworks" 
                                    skills={['React', 'Node.js', 'Next.js', 'Express', 'Spring Boot']} 
                                />
                                <SkillCategory 
                                    title="Cloud & DevOps" 
                                    skills={['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform']} 
                                />
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Extracted for cleaner JSX and reusability
const SkillCategory = ({ title, skills }) => (
    <div className="skill-category">
        <h4 className="skill-category-title">{title}</h4>
        <div className="skill-tags">
            {skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
            ))}
        </div>
    </div>
);

export default Resume;