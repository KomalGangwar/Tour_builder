import React from 'react';
import { Play, Edit3, Moon, Sun, ArrowRight } from 'lucide-react';

const HeroSection = ({ darkMode, setDarkMode, startDemo, goToEditor }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-white to-blue-50'}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 ${darkMode ? 'bg-purple-900' : 'bg-purple-200'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 ${darkMode ? 'bg-blue-900' : 'bg-blue-200'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000`}></div>
      </div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <h1 className={`text-6xl md:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} leading-tight`}>
          Build Interactive
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block">
            Product Tours
          </span>
        </h1>
        <p className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
          Create engaging, step-by-step guides that help users discover your product's value faster than ever.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={startDemo}
            className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center gap-3"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Start Interactive Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={goToEditor}
            className={`px-8 py-4 rounded-xl font-semibold text-lg border-2 ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} hover:scale-105 transform transition-all duration-300 flex items-center gap-3`}
          >
            <Edit3 className="w-5 h-5" />
            Try the Editor
          </button>
        </div>
      </div>
      
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute top-6 right-6 p-3 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-600'} shadow-lg hover:scale-110 transition-all duration-300`}
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default HeroSection;