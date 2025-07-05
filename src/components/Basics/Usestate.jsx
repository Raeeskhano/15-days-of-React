import React, { useState } from "react";

const Usestate = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1 className="text-2xl font-bold">Usestate in React</h1>
      <p>count: {count}</p>
      <button onClick={() => setcount(count + 1)}>click</button>
    </div>
  );
};

export default Usestate;
