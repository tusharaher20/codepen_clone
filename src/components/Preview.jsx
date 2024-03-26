import React from "react";

const Preview = ({ html, css, js }) => {
  const iframeSrcDoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>${html}</body>
      <script>${js}</script>
    </html>
  `;

  return (
    <div>
      <iframe
      id="preview-frame"
        title="preview"
        srcDoc={iframeSrcDoc}
        style={{ width: "100%", height: "500px", border: "none" }}
      />
    </div>
  );
};

export default Preview;
