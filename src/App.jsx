import React, { useState, useEffect } from 'react';
import { Play, Plus, ArrowRight, ArrowLeft, Check, Edit3, Monitor, Smartphone, Tablet, Moon, Sun } from 'lucide-react';

const ProductTourBuilder = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [editingStep, setEditingStep] = useState(null);
  const [newStep, setNewStep] = useState({ title: '', description: '', image: '' });

  const [steps, setSteps] = useState([
    {
      id: 1,
      title: "Welcome to Your Dashboard",
      description: "This is where you'll manage all your projects and see key metrics at a glance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format"
    },
    {
      id: 2,
      title: "Create Your First Project",
      description: "Click the 'New Project' button to start building something amazing.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format"
    },
    {
      id: 3,
      title: "Collaborate with Your Team",
      description: "Invite team members and work together in real-time on your projects.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop&auto=format"
    },
    {
      id: 4,
      title: "Track Your Progress",
      description: "Monitor your project's progress and stay on top of deadlines.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop&auto=format",
    },
    {
      id: 5,
      title: "Export Your Work",
      description: "Easily export your projects and share them with stakeholders.",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&h=500&fit=crop&auto=format",
    },
  ]);

  useEffect(() => {
    if (isPlaying && currentView === 'demo') {
      const timer = setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          setIsPlaying(false);
          setCurrentStep(0);
        }
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentStep, steps.length, currentView]);

  const startDemo = () => {
    setCurrentView('demo');
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const goToEditor = () => {
    setCurrentView('editor');
    setIsPlaying(false);
  };

  const addStep = () => {
    if (newStep.title && newStep.description) {
      const step = {
        id: steps.length + 1,
        ...newStep,
        image: newStep.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format"
      };
      setSteps([...steps,step]);
      setNewStep({ title: '', description: '', image: '' });
    }
  };

  const removeStep = (id) => {
    setSteps(steps.filter(step => step.id !== id));
  };

  const HeroSection = () => (
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

  const DemoView = () => (
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
                className={`w-3 h-3 rounded-full transition-all duration-500 ${index <= currentStep
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

  const EditorView = () => (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Tour Builder
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Create and customize your interactive product tour
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Add New Step
            </h3>

            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  Step Title
                </label>
                <input
                  type="text"
                  value={newStep.title}
                  onChange={(e) => setNewStep ({ ...newStep, title: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                  placeholder="Enter step title..."
                />
              </div>

              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  Description
                </label>
                <textarea
                  value={newStep.description}
                  onChange={(e) => setNewStep({ ...newStep, description: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none`}
                  rows="3"
                  placeholder="Describe this step..."
                />
              </div>

              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  Image URL (optional)
                </label>
                <input
                  type="url"
                  value={newStep.image}
                  onChange={(e) => setNewStep({ ...newStep, image: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <button
                onClick={addStep}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Step
              </button>
            </div>

            <div className="mt-8">
              <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Current Steps ({steps.length})
              </h4>
              <div className="space-y-3">
                {steps.map((step, index) => (
                  <div key={step.id} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h5 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {step.title}
                        </h5>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} truncate max-w-xs`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeStep(step.id)}
                      className={`px-3 py-1 text-sm ${darkMode ? 'text-red-400 hover:bg-red-900' : 'text-red-600 hover:bg-red-50'} rounded transition-colors duration-300`}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Live Preview
              </h3>
              <div className="flex gap-2">
                <Monitor className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <Tablet className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <Smartphone className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </div>
            </div>

            {steps.length > 0 ? (
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={step.id} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 border-l-4 border-gradient-to-b from-purple-600 to-blue-600`}>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-xs">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                          {step.title}
                        </h4>
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-3`}>
                          {step.description}
                        </p>
                        <div className="w-full h-24 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover rounded-lg"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="hidden w-full h-full items-center justify-center text-purple-600">
                            <Monitor className="w-8 h-8" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <Monitor className="w-12 h-12 mx-auto mb-4" />
                <p>Add your first step to see the preview</p>
              </div>
            )}
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

          <button
            onClick={startDemo}
            disabled={steps.length === 0}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Play className="w-4 h-4" />
            Preview Tour
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-500`}>
      {currentView === 'landing' && <HeroSection />}
      {currentView === 'demo' && <DemoView />}
      {currentView === 'editor' && <EditorView />}
    </div>
  );
};

export default ProductTourBuilder;