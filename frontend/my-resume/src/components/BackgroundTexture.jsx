// src/components/BackgroundTexture.jsx
import React from 'react';
import './BackgroundTexture.css';

const BackgroundTexture = ({ children, className = '' }) => {
  return (
    <div className={`bg-texture-wrapper ${className}`}>
      {/* Noise overlay */}
      <div className="bg-noise" />
      
      {/* Scanlines overlay */}
      <div className="bg-scanlines" />
      
      {/* Subtle vignette */}
      <div className="bg-vignette" />
      
      {/* Content */}
      <div className="bg-content">
        {children}
      </div>
    </div>
  );
};

export default BackgroundTexture;