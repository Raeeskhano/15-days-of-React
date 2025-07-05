import React, { useState } from "react";

const Events = () => {
  const [result, setresult] = useState(null);

  function add(a, b) {
    const sum = a + b;
    setresult(sum);
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">Events in React</h1>
      <button onClick={() => add(20, 30)}>add</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default Events;
