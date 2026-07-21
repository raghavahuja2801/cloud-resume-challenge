// src/components/PixelTrail.jsx
import React, { useState, useEffect } from 'react';
import './PixelTrail.css';

const PixelTrail = () => {
  const [activeCells, setActiveCells] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const gridSize = 10;
  const maxCells = 30;
  const fadeDelay = 120;
  const fadeDuration = 600;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const gridX = Math.floor(mousePosition.x / gridSize) * gridSize;
    const gridY = Math.floor(mousePosition.y / gridSize) * gridSize;
    const cellKey = `${gridX}-${gridY}`;

    if (mousePosition.x > 0 && mousePosition.y > 0) {
      setActiveCells((prev) => {
        const exists = prev.some(cell => cell.key === cellKey);
        if (exists) return prev;

        const newCell = {
          key: cellKey,
          x: gridX,
          y: gridY,
          enteredAt: Date.now(),
          opacity: 1
        };

        const updated = [...prev, newCell];
        if (updated.length > maxCells) {
          return updated.slice(-maxCells);
        }
        return updated;
      });
    }
  }, [mousePosition, gridSize, maxCells]);

  useEffect(() => {
    const updateCells = () => {
      const now = Date.now();
      let hasChanges = false;

      setActiveCells((prev) => {
        const updated = prev
          .map((cell) => {
            const timeSinceEnter = now - cell.enteredAt;
            
            if (timeSinceEnter > fadeDelay) {
              const fadeProgress = (timeSinceEnter - fadeDelay) / fadeDuration;
              const newOpacity = Math.max(0, 1 - fadeProgress);
              
              if (cell.opacity !== newOpacity) {
                hasChanges = true;
                return { ...cell, opacity: newOpacity };
              }
            }
            return cell;
          })
          .filter((cell) => cell.opacity > 0.01);

        return hasChanges ? updated : prev;
      });
    };

    const interval = setInterval(updateCells, 50);
    return () => clearInterval(interval);
  }, [fadeDelay, fadeDuration]);

  return (
    <div className="pixel-trail-container">
      {activeCells.map((cell) => (
        <div
          key={cell.key}
          className="pixel-cell"
          style={{
            left: cell.x,
            top: cell.y,
            width: gridSize,
            height: gridSize,
            opacity: cell.opacity * 0.25,
          }}
        />
      ))}
    </div>
  );
};

export default PixelTrail;