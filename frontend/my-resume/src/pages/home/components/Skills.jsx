// src/pages/home/Skills.jsx
import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeGroup, setActiveGroup] = useState(0);

  const skillGroups = [
    {
      id: 1,
      title: 'Languages',
      skills: [
        {
          name: 'JavaScript',
          icon: 'javascript',
          description: 'Expert in modern JavaScript (ES6+) with a focus on asynchronous programming and functional paradigms.',
          experience: 'Built dynamic, interactive UIs using React and Node.js in enterprise applications, like "Beagle" at Decision Point Analytics.'
        },
        {
          name: 'TypeScript',
          icon: 'typescript',
          description: 'Proficient in TypeScript, leveraging type safety and generics for scalable web apps and reducing runtime errors.',
          experience: 'Used in developing enterprise platforms at Decision Point Analytics, ensuring type-safe code and robust app architecture.'
        },
        {
          name: 'Python',
          icon: 'python',
          description: 'Extensive experience in Python, with a focus on data processing, machine learning, and backend development.',
          experience: 'Developed machine learning models for real estate analysis at AI Real Estate Financial Analysis using Python and XGBoost.'
        },
        {
          name: 'Java',
          icon: 'openjdk',
          description: 'Proficient in Java, specializing in backend development, multithreading, and Spring Boot for enterprise applications.',
          experience: 'Built scalable backend services using Java and Spring Boot for enterprise applications in Decision Point Analytics.'
        },
        {
          name: 'SQL',
          icon: 'sqlite',
          description: 'Advanced SQL knowledge including complex joins, window functions, and query optimization.',
          experience: 'Optimized and managed SQL queries for enterprise applications like "Resume Matcher AI" and "Beagle" at Avenue One.'
        }
      ]
    },
    {
      id: 2,
      title: 'Frameworks & Libraries',
      skills: [
        {
          name: 'React',
          icon: 'react',
          description: 'Expert in building dynamic, component-based UIs with React and modern hooks.',
          experience: 'Built full-stack applications with React and Firebase serving 2,000+ users.'
        },
        {
          name: 'Next.js',
          icon: 'nextdotjs',
          description: 'Proficient in Next.js for server-side rendering, static site generation, and API routes.',
          experience: 'Developed scalable web applications with Next.js and TypeScript.'
        },
        {
          name: 'Node.js',
          icon: 'nodedotjs',
          description: 'Extensive experience building scalable backend services with Node.js and Express.',
          experience: 'Engineered asynchronous document-to-podcast pipelines using Node.js.'
        },
        {
          name: 'Spring Boot',
          icon: 'springboot',
          description: 'Proficient in Spring Boot for building enterprise-grade Java applications.',
          experience: 'Built scalable backend services with Spring Boot for enterprise platforms.'
        },
        {
          name: 'FastAPI',
          icon: 'fastapi',
          description: 'Experience building high-performance APIs with Python FastAPI.',
          experience: 'Developed REST APIs for AI-powered applications using FastAPI.'
        }
      ]
    },
    {
      id: 3,
      title: 'Databases',
      skills: [
        {
          name: 'PostgreSQL',
          icon: 'postgresql',
          description: 'Advanced PostgreSQL experience with complex queries, indexing, and optimization.',
          experience: 'Managed production PostgreSQL databases for enterprise applications.'
        },
        {
          name: 'MySQL',
          icon: 'mysql',
          description: 'Proficient in MySQL for relational database design and management.',
          experience: 'Built and optimized MySQL databases for web applications.'
        },
        {
          name: 'MongoDB',
          icon: 'mongodb',
          description: 'Experience with MongoDB for flexible, document-based data storage.',
          experience: 'Implemented MongoDB for scalable data storage in Node.js applications.'
        },
        {
          name: 'Redis',
          icon: 'redis',
          description: 'Proficient in Redis for caching and real-time data processing.',
          experience: 'Used Redis for caching and session management in distributed systems.'
        },
        {
          name: 'Qdrant',
          icon: 'qdrant',
          description: 'Experience with Qdrant for vector similarity search and embeddings.',
          experience: 'Implemented Qdrant for AI-powered semantic search applications.'
        }
      ]
    },
    {
      id: 4,
      title: 'Cloud & DevOps',
      skills: [
        {
          name: 'AWS',
          icon: 'amazonwebservices',
          description: 'Extensive experience with AWS services including EC2, S3, and Lambda.',
          experience: 'Deployed and managed production workloads on AWS infrastructure.'
        },
        {
          name: 'Docker',
          icon: 'docker',
          description: 'Proficient in Docker for containerization and application deployment.',
          experience: 'Containerized applications and microservices using Docker.'
        },
        {
          name: 'Kubernetes',
          icon: 'kubernetes',
          description: 'Experience with Kubernetes for container orchestration and scaling.',
          experience: 'Deployed and managed applications on Kubernetes clusters.'
        },
        {
          name: 'Terraform',
          icon: 'terraform',
          description: 'Proficient in Terraform for infrastructure as code.',
          experience: 'Provisioned and managed cloud infrastructure using Terraform.'
        },
        {
          name: 'CI/CD',
          icon: 'githubactions',
          description: 'Experience with CI/CD pipelines for automated testing and deployment.',
          experience: 'Configured GitHub Actions pipelines reducing deployment errors by 50%.'
        }
      ]
    },
    {
      id: 5,
      title: 'Version Control & Tools',
      skills: [
        {
          name: 'Git',
          icon: 'git',
          description: 'Expert in Git for version control and collaboration.',
          experience: 'Managed version control workflows for development teams.'
        },
        {
          name: 'GitHub Actions',
          icon: 'githubactions',
          description: 'Proficient in GitHub Actions for automation and CI/CD.',
          experience: 'Automated testing and deployment with GitHub Actions workflows.'
        },
        {
          name: 'Linux',
          icon: 'linux',
          description: 'Extensive experience with Linux systems and bash scripting.',
          experience: 'Managed and deployed applications on Linux servers.'
        },
        {
          name: 'Bash',
          icon: 'gnubash',
          description: 'Proficient in Bash scripting for automation and system tasks.',
          experience: 'Created automation scripts for development workflows.'
        }
      ]
    }
  ];

  // Component to render SVG icons from simple-icons CDN
  const SkillIcon = ({ iconName }) => {
    const iconUrl = `https://cdn.simpleicons.org/${iconName}`;
    
    return (
      <img 
        src={iconUrl} 
        alt={`${iconName} icon`}
        className="skill-icon"
        width="24"
        height="24"
      />
    );
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-subtitle">
          Technologies I specialize in to build solutions that scale and deliver real value.
        </p>
        
        {/* Pills/Tabs */}
        <div className="skills-pills">
          {skillGroups.map((group, index) => (
            <button
              key={group.id}
              className={`skill-pill ${activeGroup === index ? 'active' : ''}`}
              onClick={() => setActiveGroup(index)}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Cards for selected group */}
        <div className="skills-cards-container">
          {skillGroups[activeGroup].skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <SkillIcon iconName={skill.icon} />
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <p className="skill-description">{skill.description}</p>
              <p className="skill-experience">{skill.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;