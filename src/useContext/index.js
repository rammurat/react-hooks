import React, { useContext } from "react";
import ReactDOM from "react-dom";

// Create a Context
const NumberContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

function App() {
  // const companies = [{ id: 1, name: "Sapient" }, { id: 2, name: "Mobify" }];
  const companies = { id: 1, name: "Sapient" };
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <NumberContext.Provider value={companies}>
      <div>
        <DisplayViaUseContext />

        <Display />
      </div>
    </NumberContext.Provider>
  );
}

function Display() {
  return (
    <NumberContext.Consumer>
      {value => <div>Names {value.name}.</div>}
    </NumberContext.Consumer>
  );
}

function DisplayViaUseContext() {
  const value = useContext(NumberContext);
  return <div>The answer is {value.name}.</div>;
}

ReactDOM.render(<App />, document.querySelector("#root"));
