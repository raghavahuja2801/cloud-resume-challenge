// src/pages/home/Resume.jsx
import React from 'react';
import './Resume.css';
import { FaDownload, FaLinkedin, FaGraduationCap } from 'react-icons/fa';

const Resume = () => {
    return (
        <section className="resume-section" id="resume">
            <div className="resume-container">
                <h2 className="resume-title">Resume</h2>
                <p className="resume-subtitle">
                    Download my resume to learn more about my education, work experience, and skills.
                </p>

                <div className="resume-grid">
                    {/* Left Column - Resume Card */}
                    <div className="resume-left">
                        <div className="resume-card">
                            <div className="resume-card-content">
                                <h3 className="resume-name">Raghav Ahuja - Resume.pdf</h3>
                                <p className="resume-role">Full Stack Engineer | Applied AI</p>
                                <p className="resume-updated">Last updated: June 2026</p>
                            </div>
                            <div className="resume-actions">
                                <button className="resume-btn resume-btn-primary">
                                    <FaDownload className="btn-icon" />
                                    Download PDF
                                </button>
                                <button className="resume-btn resume-btn-secondary">
                                    <FaLinkedin className="btn-icon" />
                                    View on LinkedIn
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Education & Skills */}
                    <div className="resume-right">
                        {/* Education Section */}
                        <div className="resume-education">
                            <h3 className="section-title">Education</h3>
                            <div className="education-item">
                                <div className="education-header">
                                    <FaGraduationCap className="education-icon" />
                                    <div>
                                        <h4 className="education-degree">Bachelors of Science, Computing Science</h4>
                                        <h3 className="education-degree">Minor: Economics</h3>

                                        <p className="education-school">Simon Fraser University, Vancouver, BC</p>
                                    </div>
                                </div>
                                <div className="education-details">
                                    <span className="education-date">January 2022 – December 2026</span>
                                    <span className="education-gpa">GPA: 3.2/4.4</span>
                                </div>
                            </div>
                        </div>

                        {/* Key Skills Section */}
                        <div className="resume-skills">
                            <h3 className="section-title">Key Skills</h3>
                            <div className="skills-grid">
                                <div className="skill-category">
                                    <h4 className="skill-category-title">Languages</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">JavaScript</span>
                                        <span className="skill-tag">TypeScript</span>
                                        <span className="skill-tag">Java</span>
                                        <span className="skill-tag">Python</span>
                                        <span className="skill-tag">Go</span>
                                        <span className="skill-tag">SQL</span>
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h4 className="skill-category-title">Databases</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">PostgreSQL</span>
                                        <span className="skill-tag">MySQL</span>
                                        <span className="skill-tag">MongoDB</span>
                                        <span className="skill-tag">Snowflake</span>
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h4 className="skill-category-title">Frameworks</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">React</span>
                                        <span className="skill-tag">Node.js</span>
                                        <span className="skill-tag">Next.js</span>
                                        <span className="skill-tag">Express</span>
                                        <span className="skill-tag">Spring Boot</span>
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h4 className="skill-category-title">Cloud & DevOps</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">AWS</span>
                                        <span className="skill-tag">Azure</span>
                                        <span className="skill-tag">Docker</span>
                                        <span className="skill-tag">Kubernetes</span>
                                        <span className="skill-tag">Terraform</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;