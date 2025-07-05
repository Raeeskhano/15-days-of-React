import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "increment") {
    return state + 1;
  } else if (action.type === "decrement") {
    return state - 1;
  }
};

const Advancehooks = () => {
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 className="text-2xl font-bold">Advance Hook i React</h1>
      {<div>Count: {state}</div>}
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        increment
      </button>

      <br />

      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decrement
      </button>
    </div>
  );
};

export default Advancehooks;
