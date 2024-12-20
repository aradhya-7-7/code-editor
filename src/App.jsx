import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CodeEditor from "./pages/CodeEditor";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-mono">
        <nav className="bg-gray-800 border-b border-gray-700 shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                The Code Editor
              </h1>
              
              <div className="flex items-center space-x-4">
              
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto">
          <Routes>
            <Route path="/" element={<CodeEditor />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
