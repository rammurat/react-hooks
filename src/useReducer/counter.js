import React, { useReducer } from "react";

function Counter() {
  // initialize state
  const initialState = {
    count: 0,
    rows: []
  };

  const [state, dispatch] = useReducer(r, initialState);
  // same as redux
  function r(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default Counter;
