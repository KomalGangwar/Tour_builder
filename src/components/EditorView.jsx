import React from 'react';
import { Plus, ArrowLeft, Play, Monitor, Tablet, Smartphone } from 'lucide-react';

const EditorView = ({ 
  darkMode,
  steps,
  setSteps,
  newStep,
  setNewStep,
  setCurrentView,
  startDemo
}) => {
  const addStep = () => {
    if (newStep.title && newStep.description) {
      const step = {
        id: steps.length + 1,
        ...newStep,
        image: newStep.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format"
      };
      setSteps([...steps, step]);
      setNewStep({ title: '', description: '', image: '' });
    }
  };

  const removeStep = (id) => {
    setSteps(steps.filter(step => step.id !== id));
  };

  return (
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
                  onChange={(e) => setNewStep({...newStep, title: e.target.value})}
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
                  onChange={(e) => setNewStep({...newStep, description: e.target.value})}
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
                  onChange={(e) => setNewStep({...newStep, image: e.target.value})}
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
};

export default EditorView;