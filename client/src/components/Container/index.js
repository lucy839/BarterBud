import React from 'react';

// Hold all the contents of the app
function Container({ children }) {
  return (
    <div
      style={{
        clear: "both", textAlign: "center", overflow: "scroll", background: "white",
        height: "550px", width: "80%", "margin-top": "7%", "margin-left": "10%",
        padding: "5%"
      }}
      className="container"  >
      {children}
    </div>
  );
}

export default Container;