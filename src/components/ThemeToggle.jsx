import React from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ darkMode, setDarkMode, className = "" }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-600'} shadow-lg hover:scale-110 transition-all duration-300 ${className}`}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;