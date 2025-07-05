import React, { useState } from "react";

const States = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1 className="text-2xl font-extrabold">States in React</h1>
      <h1>cout:{count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setcount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default States;
