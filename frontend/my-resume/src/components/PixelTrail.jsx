// // src/components/PixelTrail.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import './PixelTrail.css';

// const PixelTrail = () => {
//   const [activeCells, setActiveCells] = useState([]);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const gridSize = 8;
//   const maxCells = 20; // Maximum boxes at a time
//   const fadeDelay = 100; // ms before cell starts fading
//   const fadeDuration = 500; // ms for full fade

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Track which grid cells the mouse enters
//   useEffect(() => {
//     const gridX = Math.floor(mousePosition.x / gridSize) * gridSize;
//     const gridY = Math.floor(mousePosition.y / gridSize) * gridSize;
//     const cellKey = `${gridX}-${gridY}`;

//     // Only add if we're on screen
//     if (mousePosition.x > 0 && mousePosition.y > 0) {
//       setActiveCells((prev) => {
//         // Check if cell already exists
//         const exists = prev.some(cell => cell.key === cellKey);
//         if (exists) return prev;

//         const newCell = {
//           key: cellKey,
//           x: gridX,
//           y: gridY,
//           enteredAt: Date.now(),
//           opacity: 1
//         };

//         // Add new cell and limit to maxCells
//         const updated = [...prev, newCell];
//         if (updated.length > maxCells) {
//           return updated.slice(-maxCells);
//         }
//         return updated;
//       });
//     }
//   }, [mousePosition, gridSize, maxCells]);

//   // Handle fading cells over time
//   useEffect(() => {
//     const updateCells = () => {
//       const now = Date.now();
//       let hasChanges = false;

//       setActiveCells((prev) => {
//         const updated = prev
//           .map((cell) => {
//             const timeSinceEnter = now - cell.enteredAt;
            
//             // After fadeDelay, start fading
//             if (timeSinceEnter > fadeDelay) {
//               const fadeProgress = (timeSinceEnter - fadeDelay) / fadeDuration;
//               const newOpacity = Math.max(0, 1 - fadeProgress);
              
//               if (cell.opacity !== newOpacity) {
//                 hasChanges = true;
//                 return { ...cell, opacity: newOpacity };
//               }
//             }
//             return cell;
//           })
//           .filter((cell) => cell.opacity > 0.01); // Remove fully faded

//         return hasChanges ? updated : prev;
//       });
//     };

//     const interval = setInterval(updateCells, 50);
//     return () => clearInterval(interval);
//   }, [fadeDelay, fadeDuration]);

//   return (
//     <div className="pixel-trail-container">
//       {activeCells.map((cell) => (
//         <div
//           key={cell.key}
//           className="pixel"
//           style={{
//             left: cell.x,
//             top: cell.y,
//             width: gridSize,
//             height: gridSize,
//             opacity: cell.opacity,
//             background: `rgba(143, 168, 201, ${cell.opacity})`,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default PixelTrail;

// src/components/PixelTrail.jsx
import React, { useState, useEffect, useRef } from 'react';
import './PixelTrail.css';

const PixelTrail = () => {
  const [activeCells, setActiveCells] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const gridSize = 16; // Slightly larger for readability
  const maxCells = 25;
  const fadeDelay = 150;
  const fadeDuration = 800;

  // Generate random binary character (0 or 1)
  const getBinaryChar = () => Math.random() > 0.5 ? '1' : '0';

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
          char: getBinaryChar(),
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
          className="binary-cell"
          style={{
            left: cell.x,
            top: cell.y,
            width: gridSize,
            height: gridSize,
            opacity: cell.opacity,
            color: `rgba(143, 168, 201, ${cell.opacity})`,
          }}
        >
          {cell.char}
        </div>
      ))}
    </div>
  );
};

export default PixelTrail;