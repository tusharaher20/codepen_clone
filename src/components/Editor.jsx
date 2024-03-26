import React from "react";

const Editor = ({ language, value, onChange, show }) => {
  return (
    <div>
      {show && (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={10}
          cols={50}
        />
      )}
    </div>
  );
};

export default Editor;
