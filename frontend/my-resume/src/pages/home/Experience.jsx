// src/pages/home/Experience.jsx
import React, { useState, useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      year: '2026',
      role: 'Software Engineer Intern',
      company: 'Inworld AI',
      location: 'Remote',
      logo: {
        light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 18" fill="none" class="h-[22px]"><g fill="currentColor" clip-path="url(#inworldLogo)"><path d="m23.969 3.006.095.019c.951.185 1.183.422 1.183 1.204v10.42c0 .783-.232 1.018-1.183 1.204l-.095.019v1.02h4.948v-1.02l-.095-.019c-.921-.18-1.16-.432-1.16-1.227V4.229c0-.786.228-1.022 1.16-1.204l.095-.019v-1.02h-4.948v1.02ZM40.811 14.718v-4.577c0-2.6-1.242-4.092-3.41-4.092-1.616 0-2.843.701-3.835 1.43V6.212l-.1.042a9.958 9.958 0 0 1-2.092.612l-1.335.237v.986l.098.017c.767.132 1.11.324 1.11 1.111v5.502c0 .764-.33.96-1.116 1.136l-.092.02v1.018h4.783V15.87l-.098-.017c-.72-.128-1.063-.333-1.063-1.158V8.478a5.743 5.743 0 0 1 2.581-.602c1.507 0 2.178.798 2.178 2.589v4.23c0 .821-.35 1.027-1.086 1.158l-.097.017v1.022h4.782v-1.017l-.092-.02c-.786-.177-1.115-.373-1.115-1.137h-.001ZM59.076 7.246V6.212H55.24v1.052l.106.01c.426.046.696.16.825.351.117.173.124.418.022.75l-1.927 6.21-2.704-8.234h-1.688l-2.772 8.234-1.881-6.254c-.093-.325-.09-.545.009-.696.117-.177.392-.291.865-.36l.1-.016V6.212h-4.71v1.025l.073.03c.65.263.815.504 1.046 1.202l2.963 8.423h2.229l2.472-7.062 2.448 7.062h2.254l2.915-8.424c.242-.71.542-1.034 1.105-1.197l.085-.025ZM64.138 6.05c-1.458 0-2.78.549-3.724 1.545-.971 1.025-1.484 2.426-1.484 4.05 0 1.623.499 2.93 1.443 3.913.927.965 2.247 1.496 3.718 1.496 1.47 0 2.86-.557 3.827-1.568.967-1.011 1.5-2.433 1.5-4.003 0-3.148-2.22-5.433-5.28-5.433Zm.42 9.873c-1.635.125-2.833-1.58-3.054-4.344-.099-1.236.052-2.3.437-3.08.39-.788 1.004-1.236 1.778-1.295 1.65-.125 2.856 1.56 3.074 4.294.163 2.044-.338 4.28-2.235 4.425ZM77.695 1.996v.989l.098.017c.767.132 1.11.324 1.11 1.111v10.605c0 .764-.33.96-1.115 1.136l-.092.02v1.017h4.806v-1.016l-.091-.02c-.787-.181-1.116-.379-1.116-1.136V1.178a13.492 13.492 0 0 1-3.6.819ZM89.146 2.005v.986l.098.017c.767.132 1.11.324 1.11 1.111v2.248a3.065 3.065 0 0 0-1.09-.284c-1.655-.133-3.234.584-4.43 1.643-1.223 1.084-1.897 2.541-1.897 4.103 0 3.4 2.677 5.21 4.608 5.21 0 0 1.815.079 3.084-1.62l.01.322v1.22c.8-.308 1.633-.53 2.482-.663l.88-.136v-.99l-.103-.014c-.865-.114-1.13-.379-1.13-1.134V1.178c-1.123.44-2.328.721-3.621.827h-.001ZM88.6 15.312c-.735-.012-1.482-.391-2.05-1.041-.472-.54-1.035-1.52-1.035-3.119 0-3.723 2.3-3.767 2.782-3.768.475 0 1.916.286 2.13 1.814l.01-.057.154 5.018c-.446.666-1.24 1.152-1.99 1.152ZM76.37 8.171c-1.228 0-2.735 1.835-2.76 3.667l.032 2.858c0 .812.375 1.027 1.11 1.157l.098.018v1.02h-4.83v-1.016l.092-.02c.787-.176 1.115-.373 1.115-1.136V9.217c0-.787-.342-.98-1.11-1.112l-.098-.016v-.986l1.336-.237a9.994 9.994 0 0 0 2.092-.613l.1-.042.025 2.239c.565-1.606 1.886-2.397 2.838-2.396.884 0 .987.158.987.158V8.31s-.274-.138-1.03-.138h.002ZM4.321 2.988c-.029.006-.03-.021-.013-.03.57-.326 1.381-.404 1.442-.448.054-.075-.371-.07-.52-.07a4.2 4.2 0 0 0-2.777 1.138C1.268 4.564.88 6.187 1.043 7.645a5.597 5.597 0 0 0 2.301 3.817c2.627 1.724 6.335.9 8.3-1.446 2.42-2.864 1.697-6.942-.832-8.806A6.956 6.956 0 0 0 8.664.213C8.303.108 7.8.007 7.569 0c-.354-.011-.236.273-.299.343-.062.07-.71.098.023.35.434.148.17.157-.161.45-.293.258-.037.548-.139.65-.434.437.231.629.574.82 1.664.867 2.58 2.427 2.277 4.264-.426 2.428-4.128 3.476-5.766 1.557-1.26-1.456-.784-3.878 1.01-4.668.249-.118.81-.289.569-.269-.929.076-1.654.558-1.888.733-.02.015-.047-.008-.035-.03.17-.291 1.155-.972 3.091-1.211.346-.073-.956-.34-2.504-.001ZM5.116 17.583c.105 0 .21.014.308.024.253.008.537-.02.815.015.604.033 1.212.165 1.817.18.418.03.816.011 1.242.027.322.04.704.016.992.058.18.02.345.011.525.037.478.067.954.077 1.438.07.184.006.372.01.556-.002.196-.011.41-.003.567-.126.093-.053.089-.163.108-.238.024-.04.075-.063.098-.104a.713.713 0 0 0 .042-.22V17.3c.005-.25-.117-.496-.21-.727a8.62 8.62 0 0 0-.537-.965c-.22-.304-.332-.72-.707-.884-.676-.29-1.372-.26-2.12-.348a59.988 59.988 0 0 0-4.217-.228c-1.222.017-3.381.095-4.493.191-1.974.172-1.055.478-1.117 1.019-.023.2-.246.183-.221.378.041.283.585.638.859.71 1.204.314-.394.36-.215.675.148.262.811.187 1.082.29l3.387.172Z"/></g><defs><clipPath id="inworldLogo"><path fill="#fff" d="M0 0h94v18H0z"/></clipPath></defs></svg>`,
        dark: `<svg width="853" height="168" viewBox="0 0 853 168" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1848_799)"><path d="M39.2484 27.7964C38.9849 27.8555 38.9634 27.6029 39.1247 27.5115C44.3023 24.4845 51.6734 23.764 52.2219 23.3501C52.7165 22.6565 48.8508 22.6941 47.5067 22.6995C37.7268 23.0382 29.2857 26.6781 22.2748 33.2912C11.5111 42.4635 7.98408 57.5553 9.47337 71.1255C11.2154 85.1582 18.9252 98.3413 30.3718 106.632C54.2273 122.67 87.911 115.008 105.761 93.1799C127.74 66.534 121.181 28.5975 98.2016 11.2583C92.2391 7.11842 85.7228 3.84952 78.6903 1.9785C75.4107 1.00535 70.846 0.0698446 68.7492 -4.97611e-05C65.534 -0.102203 66.604 2.54303 66.0341 3.19359C65.4641 3.84414 59.5769 4.10759 66.2384 6.44636C70.1793 7.82812 67.7814 7.90877 64.776 10.6293C62.1146 13.0379 64.4372 15.7369 63.5179 16.6832C59.5715 20.7478 65.6147 22.5328 68.7331 24.3071C83.841 32.3718 92.1638 46.8883 89.411 63.9802C85.5453 86.5615 51.9154 96.3144 37.0333 78.4591C25.5867 64.9211 29.9148 42.3828 46.2109 35.0332C48.4691 33.9417 53.566 32.3503 51.3777 32.5331C42.942 33.2374 36.3558 37.7268 34.2267 39.3559C34.0439 39.4957 33.802 39.2806 33.9149 39.0817C35.458 36.3665 44.3991 30.033 61.9909 27.8072C65.1362 27.1297 53.3025 24.6512 39.2484 27.7964Z" fill="#FAF7F5"/><path d="M46.4572 163.574C47.4142 163.563 48.3659 163.703 49.2584 163.795C51.5541 163.864 54.1349 163.601 56.6564 163.929C62.1404 164.241 67.6675 165.472 73.1676 165.606C76.9581 165.886 80.5764 165.714 84.4475 165.859C87.3669 166.235 90.8348 166.004 93.4531 166.397C95.0876 166.585 96.5876 166.504 98.2275 166.746C102.566 167.365 106.889 167.456 111.282 167.397C112.954 167.451 114.669 167.483 116.335 167.375C118.115 167.273 120.056 167.348 121.486 166.209C122.336 165.709 122.293 164.692 122.47 163.993C122.69 163.612 123.153 163.407 123.357 163.02C123.583 162.354 123.728 161.66 123.739 160.977V160.934C123.787 158.612 122.674 156.327 121.825 154.171C120.411 151.047 118.75 148.127 116.954 145.203C114.948 142.369 113.943 138.504 110.534 136.971C104.389 134.278 98.0715 134.563 91.2703 133.74C78.4688 132.605 64.8717 131.772 52.9735 131.611C41.8711 131.772 22.2576 132.498 12.1606 133.396C-5.77538 134.993 2.57431 137.837 2.00978 142.869C1.80547 144.724 -0.221468 144.574 0.00434428 146.391C0.380699 149.025 5.32169 152.321 7.80563 152.988C18.7468 155.913 4.23027 156.348 5.85397 159.273C7.20347 161.708 13.2251 161.009 15.6822 161.977L46.4465 163.574H46.4572Z" fill="#FAF7F5"/><path d="M217.726 27.1834L218.591 27.3554C227.231 29.0813 229.339 31.2802 229.339 38.56V128.885C229.339 136.165 227.231 138.358 218.591 140.09L217.726 140.262V149.746H262.673V140.262L261.808 140.09C253.442 138.418 251.275 136.068 251.275 128.67V38.56C251.275 31.248 253.345 29.049 261.808 27.3554L262.673 27.1834V17.6992H217.726V27.1834Z" fill="#FAF7F5"/><path d="M370.698 129.525V86.943C370.698 62.7542 359.412 48.8774 339.729 48.8774C325.04 48.8774 313.895 55.3991 304.889 62.1843V50.3829L303.986 50.77C297.884 53.3722 291.507 55.2862 284.98 56.469L272.851 58.6734V67.8457L273.738 68.0016C280.706 69.2328 283.819 71.0178 283.819 78.3406V129.525C283.819 136.627 280.83 138.455 273.684 140.09L272.851 140.283V149.74H316.293V140.24L315.411 140.079C308.868 138.891 305.755 136.977 305.755 129.31V71.4748C313.266 67.7059 320.938 65.8672 329.196 65.8672C342.88 65.8672 348.982 73.2975 348.982 89.9538V129.31C348.982 136.944 345.799 138.864 339.111 140.079L338.229 140.24V149.74H381.671V140.283L380.838 140.09C373.692 138.455 370.708 136.627 370.708 129.525Z" fill="#FAF7F5"/><path d="M536.59 60.0067V50.3882H501.75V60.1734L502.713 60.2756C506.584 60.6949 509.036 61.7595 510.208 63.5337C511.272 65.1413 511.331 67.4209 510.401 70.507L492.906 128.283L468.341 51.6785H453.013L427.829 128.277L410.743 70.0984C409.893 67.0822 409.92 65.0284 410.823 63.6305C411.888 61.9799 414.388 60.9154 418.684 60.2702L419.598 60.1304V50.3882H376.801V59.9261L377.467 60.2003C383.376 62.6466 384.876 64.894 386.968 71.3834L413.882 149.746H434.13L456.583 84.0504L478.825 149.746H499.293L525.778 71.3726C527.977 64.7703 530.697 61.7541 535.816 60.2379L536.585 60.0121L536.59 60.0067Z" fill="#FAF7F5"/><path d="M582.59 48.8823C569.348 48.8823 557.337 53.99 548.761 63.2591C539.938 72.797 535.277 85.8242 535.277 100.927C535.277 116.029 539.809 128.186 548.39 137.336C556.804 146.31 568.799 151.251 582.16 151.251C595.52 151.251 608.139 146.068 616.924 136.664C625.709 127.261 630.548 114.035 630.548 99.4267C630.548 70.141 610.381 48.8877 582.59 48.8877V48.8823ZM587.655 140.6C572.848 142.218 561.476 126.696 558.675 101.061C557.423 89.5985 558.487 79.6574 561.756 72.3077C565.063 64.8666 570.52 60.5278 577.531 59.7643C592.467 58.1353 603.902 73.4636 606.677 98.8245C608.747 117.793 604.838 138.729 587.66 140.605L587.655 140.6Z" fill="#FAF7F5"/><path d="M737.348 129.525V0.0644531C730.519 2.91937 723.358 4.91405 716.035 6.0001L704.658 7.68294V16.8821L705.546 17.038C712.514 18.2693 715.627 20.0542 715.627 27.377V129.53C715.627 136.633 712.637 138.461 705.497 140.095L704.664 140.289V149.746H748.321V140.294L747.493 140.101C740.342 138.418 737.353 136.579 737.353 129.536L737.348 129.525Z" fill="#FAF7F5"/><path d="M851.837 133.622C843.981 132.563 841.584 130.095 841.584 123.073V0.0644531C834.589 2.92475 827.32 5.06997 819.895 6.46248L808.679 8.57006V17.7424L809.567 17.8983C816.534 19.1295 819.647 20.9145 819.647 28.2373V51.8347C817.024 50.5282 813.669 49.5174 809.755 49.1948C794.717 47.9582 780.372 54.6251 769.512 64.4802C758.404 74.5611 752.285 88.1152 752.285 102.643C752.285 134.267 776.593 151.106 794.136 151.106C794.136 151.106 810.62 151.848 822.153 136.036L822.244 139.036V150.38C829.513 147.52 837.073 145.456 844.788 144.224L852.772 142.95V133.74L851.842 133.616L851.837 133.622ZM803.728 135.047C797.045 134.939 790.26 131.407 785.104 125.364C780.818 120.337 775.705 111.223 775.705 96.352C775.705 61.7167 796.598 61.3081 800.97 61.2973C805.292 61.2865 818.373 63.9587 820.325 78.1687L820.416 77.6365L821.809 124.326C817.76 130.514 810.54 135.041 803.733 135.041L803.728 135.047Z" fill="#FAF7F5"/><path d="M701.809 49.6946C699.718 49.3129 697.551 48.9204 694.621 48.9204C682.18 48.9204 673.438 56.2701 668.303 71.2113L668.077 50.3882L667.174 50.7753C661.072 53.3775 654.695 55.2916 648.168 56.4744L636.039 58.6787V67.851L636.926 68.007C643.894 69.2382 647.007 71.0232 647.007 78.3459V129.53C647.007 136.632 644.018 138.46 636.878 140.095L636.044 140.288V149.746H679.916V140.245L679.035 140.084C672.346 138.869 668.948 136.869 668.948 129.315L668.653 102.191C668.873 85.1526 676.685 68.0822 694.255 68.0822C697.223 68.0822 699.282 68.3457 701.374 68.9909L702.6 69.3672V49.8344L701.82 49.6946H701.809Z" fill="#FAF7F5"/></g><defs><clipPath id="clip0_1848_799"><rect width="852.771" height="167.451" fill="white"/></clipPath></defs></svg>`
      },
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
      logo: null,
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
            const logoSvg = exp.logo ? (isDark ? exp.logo.dark : exp.logo.light) : null;
            
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
                      <div className="experience-company-row">
                        {logoSvg && (
                          <div 
                            className="experience-logo"
                            dangerouslySetInnerHTML={{ __html: logoSvg }}
                          />
                        )}
                        <h3 className="experience-role">{exp.role}</h3>
                      </div>
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