import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const CodeEditor = () => {
  const [html, setHtml] = useState(localStorage.getItem('html') || '');
  const [css, setCss] = useState(localStorage.getItem('css') || '');
  const [js, setJs] = useState(localStorage.getItem('js') || '');

  useEffect(() => {
    localStorage.setItem('html', html);
  }, [html]);

  useEffect(() => {
    localStorage.setItem('css', css);
  }, [css]);

  useEffect(() => {
    localStorage.setItem('js', js);
  }, [js]);

  const generateOutput = () => {
    return `
      <html>
        <style>${css}</style>
        <body>${html}</body>
        <script>${js}</script>
      </html>
    `;
  };

  const downloadAsZip = () => {
    const zip = new JSZip();
    
    // Add files to the zip
    zip.file("index.html", html);
    zip.file("styles.css", css);
    zip.file("script.js", js);

    // Generate and download the zip file
    zip.generateAsync({ type: "blob" })
      .then(content => {
        saveAs(content, "code-editor-files.zip");
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono p-8">
      {/* Download Button */}
      <div className="container mx-auto mb-4">
        <button
          onClick={downloadAsZip}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg 
                     transition-colors duration-200 font-semibold"
        >
          Download as ZIP
        </button>
      </div>

      {/* Editor Container */}
      <div className="container mx-auto space-y-8">
        {/* Input boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <textarea
            className="w-full h-80 p-4 bg-gray-800 border-2 border-orange-500 rounded-lg 
                       focus:ring-2 focus:ring-orange-500 focus:outline-none 
                       font-mono text-sm resize-none transition-all duration-200 
                       placeholder-gray-400"
            placeholder="HTML Code"
            value={html}
            onChange={(e) => setHtml(e.target.value)}
          ></textarea>

          <textarea
            className="w-full h-80 p-4 bg-gray-800 border-2 border-blue-500 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:outline-none 
                       font-mono text-sm resize-none transition-all duration-200 
                       placeholder-gray-400"
            placeholder="CSS Code"
            value={css}
            onChange={(e) => setCss(e.target.value)}
          ></textarea>

          <textarea
            className="w-full h-80 p-4 bg-gray-800 border-2 border-yellow-500 rounded-lg 
                       focus:ring-2 focus:ring-yellow-500 focus:outline-none 
                       font-mono text-sm resize-none transition-all duration-200 
                       placeholder-gray-400"
            placeholder="JavaScript Code"
            value={js}
            onChange={(e) => setJs(e.target.value)}
          ></textarea>
        </div>

        {/* Output box */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
            <h2 className="text-sm font-semibold">Output</h2>
          </div>
          <iframe
            srcDoc={generateOutput()}
            title="Output"
            sandbox="allow-scripts"
            className="w-full h-96 bg-white"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
