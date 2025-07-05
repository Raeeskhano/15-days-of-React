import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, despatch] = useReducer(reducer, initialState);
  return (
    <div className="bg-emerald-950 p-2 text-white">
      <h1 className="text-2xl font-bold">UseReducer Hook improved version</h1>
      <p>{state.count}</p>
      <button onClick={() => despatch({ type: "increment" })}>Increment</button>
      <br />
      <button onClick={() => despatch({ type: "decrement" })}>Decrement</button>
      <br />
      <button onClick={() => despatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducer; 
