import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Company from "./company";
import Counter from "./counter";

function App() {
  return (
    <div className="App">
      <h1>useReducer</h1>
      <Counter />
      <Company />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
