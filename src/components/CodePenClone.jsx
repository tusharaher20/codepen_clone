import React, { useState, useEffect } from "react";
import "./CodePenClone.css"; // Import CSS for styling

const CodePenClone = () => {
  const [html, setHtml] = useState(""); // State for HTML code
  const [css, setCss] = useState(""); // State for CSS code
  const [js, setJs] = useState(""); // State for JavaScript code

  useEffect(() => {
    const iframe = document.getElementById("preview-frame");
    const iframeDoc = iframe.contentDocument;
    const combinedCode = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>${html}</body>
        <script>${js}</script>
      </html>
    `;
    iframeDoc.open();
    iframeDoc.write(combinedCode);
    iframeDoc.close();
  }, [html, css, js]);

  return (
    <div className="codepen-container ">
      <div className="editor-container bg-danger">
        {/* HTML Editor */}
        <textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          className="editor"
          placeholder="HTML code"
        ></textarea>
        {/* CSS Editor */}
        <textarea
          value={css}
          onChange={(e) => setCss(e.target.value)}
          className="editor"
          placeholder="CSS code"
        ></textarea>
        {/* JavaScript Editor */}
        <textarea
          value={js}
          onChange={(e) => setJs(e.target.value)}
          className="editor"
          placeholder="JavaScript code"
        ></textarea>
      </div>
      {/* Preview */}
      <iframe
        id="preview-frame"
        className="bg-warning preview_area"
        title="Preview Frame"
      ></iframe>
    </div>
  );
};

export default CodePenClone;
