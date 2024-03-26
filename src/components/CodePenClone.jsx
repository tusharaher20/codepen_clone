import React, { useState, useEffect } from "react";
import "./CodePenClone.css"; // Import CSS for styling

const CodePenClone = () => {
  const [html, setHtml] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample HTML</title>
  <style>
    /* Sample CSS */
    body {
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 50px;
    }
    h1 {
      color: #007bff;
    }
  </style>
</head>
<body>
  <h1>Hello, CodePenClone!</h1>
  <p>This is a sample HTML document.</p>
</body>
</html>`);

  const [css, setCss] = useState(`/* Sample CSS */
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 50px;
}
h1 {
  color: #007bff;
}`);

  const [js, setJs] = useState(`console.log("Sample JavaScript code");`);

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
      <div className="editor-container  bg-danger ">
        {/* HTML Editor */}
        <textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          className="editor  mb-3"
          placeholder="HTML code"
        ></textarea>
        {/* CSS Editor */}
        <textarea
          value={css}
          onChange={(e) => setCss(e.target.value)}
          className="editor  mb-3"
          placeholder="CSS code"
        ></textarea>
        {/* JavaScript Editor */}
        <textarea
          value={js}
          onChange={(e) => setJs(e.target.value)}
          className="editor  mb-3"
          placeholder="JavaScript code"
        ></textarea>
      </div>
      {/* Preview */}
      <iframe
        id="preview-frame"
        className="bg-warning preview_area "
        title="Preview Frame"
      ></iframe>
    </div>
  );
};

export default CodePenClone;
