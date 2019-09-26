import React from 'react';

// Display jumbotron
function Jumbotron({ children }) {
  return (
    <div
      style={{
        clear: "both", textAlign: "center", overflow: "scroll", background: "white",
        height: "300px", width: "40%", "margin-top": "10%", "margin-left": "30%"
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;