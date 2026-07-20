import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';

function TextSphere({ textArray, progress }) {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      // Slow, elegant rotation
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x += 0.0005;
      
      // Scale the sphere based on loading progress
      const scale = 0.5 + (progress * 0.5);
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  const radius = 4.5; // Increased radius for better spacing

  return (
    <group ref={groupRef}>
      {textArray.map((text, index) => {
        // Even distribution on sphere using Fibonacci sphere algorithm
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        const theta = Math.acos(1 - 2 * (index + 0.5) / textArray.length);
        const phi = 2 * Math.PI * index / goldenRatio;

        const x = radius * Math.sin(theta) * Math.cos(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(theta);

        // Varying sizes for visual interest
        const size = 0.4 + Math.random() * 0.3;
        const opacity = Math.min(1, progress * 1.5);

        return (
          <Text
            key={index}
            position={[x, y, z]}
            fontSize={size}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            // This is critical - use a standard .woff font
            font="https://cdn.jsdelivr.net/npm/three@0.160.0/examples/fonts/helvetiker_regular.typeface.json"
            opacity={opacity}
            // Add a subtle glow effect
            outlineWidth={0.02}
            outlineColor="#6666ff"
          >
            {text}
          </Text>
        );
      })}
    </group>
  );
}

function LoadingSphere({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Your keywords - these will float around the sphere
  const keywords = [
    'REACT', 'VITE', 'CLOUD', 'AWS', 'JAVASCRIPT',
    'TYPESCRIPT', 'UI/UX', 'DESIGN', 'DEVELOPER',
    'CREATIVE', 'INNOVATION', 'FULL-STACK', 'PORTFOLIO',
    'RESUME', 'BUILD', 'CREATE', 'INSPIRE', 'MODERN',
    'FUTURE', 'TECH', 'CODE', 'WEB', 'APP'
  ];

  useEffect(() => {
    // Simulate loading progress
    const duration = 3000;
    const interval = 50;
    let currentProgress = 0;
    
    const timer = setInterval(() => {
      currentProgress += (interval / duration);
      if (currentProgress >= 1) {
        currentProgress = 1;
        clearInterval(timer);
        
        setTimeout(() => {
          setIsVisible(false);
          if (onLoadingComplete) onLoadingComplete();
        }, 500);
      }
      setProgress(currentProgress);
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'opacity 1s ease-in-out',
      opacity: isVisible ? 1 : 0
    }}>
      {/* Main Sphere Container */}
      <div style={{ 
        width: '80vh', 
        height: '80vh', 
        maxWidth: '700px', 
        maxHeight: '700px',
        position: 'relative'
      }}>
        <Canvas
          camera={{ position: [0, 0, 12], fov: 50 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#ffffff" intensity={1.5} />
          <pointLight position={[-10, -10, -10]} color="#4444ff" intensity={0.5} />
          <pointLight position={[0, 10, 5]} color="#ff44ff" intensity={0.3} />
          
          <TextSphere textArray={keywords} progress={progress} />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            enableRotate={false}
            autoRotate={false}
          />
        </Canvas>
      </div>

      {/* Loading Text */}
      <div style={{
        color: 'rgba(255,255,255,0.8)',
        fontFamily: 'Inter, -apple-system, sans-serif',
        fontSize: '1rem',
        letterSpacing: '6px',
        textTransform: 'uppercase',
        marginTop: '2rem',
        opacity: 0.6,
        animation: 'pulse 2s ease-in-out infinite'
      }}>
        LOADING PORTFOLIO
      </div>

      {/* Progress Bar */}
      <div style={{
        width: '200px',
        height: '2px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '2px',
        marginTop: '1rem',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${progress * 100}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #8888ff, #ffffff)',
          borderRadius: '2px',
          transition: 'width 0.1s ease-out'
        }} />
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default LoadingSphere;