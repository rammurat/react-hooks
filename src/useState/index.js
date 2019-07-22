import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Counter from "./counter";
const initialCount = 0;
const initialRows = [
  {
    id: 1,
    name: "React"
  },
  {
    id: 2,
    name: "Redux"
  }
];

function App() {
  return (
    <div className="App">
      <h1>useState</h1>
      <Counter initialCount={initialCount} initialRows={initialRows} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
