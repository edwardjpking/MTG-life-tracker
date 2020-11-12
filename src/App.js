import React from "react";
import "./styles.css";

const App = () => {
  return (
    <div>
      <button className="button" onClick={() => alert("Help")}>
        Help
      </button>
    </div>
  );
};

export default App;
