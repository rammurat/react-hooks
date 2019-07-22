import React, { useState, useEffect } from "react";

function Counter({ initialCount, initialRows }) {
  const [count, setCount] = useState(initialCount);
  const [rows, setRows] = useState(initialRows);

  const addItem = () => {
    setRows([...rows, { id: "3", name: "Hooks" }]);
  };

  useEffect(() => {
    console.log("render"); // fires on every componenetDidMount()
    return () => {
      console.log("unmounting..."); // fires on componentWillUnMount()
      // setCount(count => 0);
    };
  }, [count]); // previous state can be passed here, so helps to mount this method only when it is needed; componentDidUpdate()

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count => count + 1)}>+</button>
      <button onClick={() => setCount(count => count - 1)}>-</button>
      Rows:
      <ul>
        {rows.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add item</button>
    </div>
  );
}

export default Counter;
