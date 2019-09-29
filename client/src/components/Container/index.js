import React from 'react';
import "./style.css"

// Hold all the contents of the app
function Container({ children }) {
  return (
    <div
      // style={{
      //   clear: "both", textAlign: "center", overflow: "scroll", background: "white",
      //   height: "550px", width: "80%", "marginTop": "100px", "marginLeft": "10%",
      //   padding: "5%"
      // }}
      className="container" >
      {children}
    </div>
  );
}

export default Container;