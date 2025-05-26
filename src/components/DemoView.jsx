import React from 'react';
import { ArrowLeft, ArrowRight, Edit3 } from 'lucide-react';

const DemoView = ({ 
  darkMode, 
  steps, 
  currentStep, 
  setCurrentStep,
  setCurrentView,
  goToEditor 
}) => {
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Interactive Product Demo
          </h2>
          <div className="flex justify-center gap-2 mb-8">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index <= currentStep 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
                    : darkMode ? 'bg-gray-700' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl overflow-hidden`}>
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} px-6 py-4 flex items-center gap-3`}>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className={`${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-lg px-4 py-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex-1 max-w-md`}>
                https://app.example.com/dashboard
              </div>
            </div>
            
            <div className="relative aspect-video">
              <img
                src={steps[currentStep]?.image}
                alt={steps[currentStep]?.title}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 max-w-md mx-4 shadow-2xl animate-pulse`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{currentStep + 1}</span>
                    </div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {steps[currentStep]?.title}
                    </h3>
                  </div>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {steps[currentStep]?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => setCurrentView('landing')}
              className={`px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors duration-300 flex items-center gap-2`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
            
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className={`px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400'} transition-colors duration-300 disabled:cursor-not-allowed`}
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                disabled={currentStep === steps.length - 1}
                className={`px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400'} transition-colors duration-300 disabled:cursor-not-allowed`}
              >
                Next
              </button>
            </div>
            
            <button
              onClick={goToEditor}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Edit3 className="w-4 h-4" />
              Edit Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoView;