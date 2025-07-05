import React, { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "increment") {
      return state + 1;
    }
    if (action.type === "decrement") {
      return state - 1;
    }
  };
  const [count, despatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1 className="text-2xl font-bold">UseReducer Hook in React</h1>
      <p>{count}</p>
      <button onClick={() => despatch({ type: "increment" })}>Increment</button>
      <br />
      <button onClick={() => despatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default UseReducer;
