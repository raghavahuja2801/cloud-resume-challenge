// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import PixelTrail from './components/PixelTrail';
import Home from './pages/home/Home';
import UIDemo from './pages/ui-demo/UIDemo';
import LoadingScreen from './pages/LoadingScreen';
import './styles/theme.css';

// Wrapper component to conditionally show PixelTrail
const AppContent = ({ isDark, toggleTheme }) => {
  const location = useLocation();
  const showPixelTrail = location.pathname === '/';

  return (
    <div className="app">
      {showPixelTrail && <PixelTrail />}
      
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <div style={{ paddingTop: '72px' }}>
        <Routes>
          <Route path="/" element={<Home isDark={isDark} toggleTheme={toggleTheme} />} />
          <Route path="/ui-demo" element={<UIDemo isDark={isDark} toggleTheme={toggleTheme} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <BrowserRouter>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!loading && <AppContent isDark={isDark} toggleTheme={toggleTheme} />}
    </BrowserRouter>
  );
}

export default App;