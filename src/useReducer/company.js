import React, { useReducer, useRef } from "react";

function Company() {
  // initialize state
  const initialState = [
    {
      id: Math.random(),
      name: "Aidit"
    },
    {
      id: Math.random(),
      name: "Yann"
    }
  ];

  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ];
      case "delete":
        return state.filter((item, index) => {
          return index !== action.index;
        });
      default:
        return state;
    }
  }, initialState);

  function addEmployee(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  }

  return (
    <div className="employee">
      <h1>Complex reducer</h1>

      <form onSubmit={addEmployee}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() => {
                dispatch({
                  type: "delete",
                  index
                });
              }}
            >
              Del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Company;
