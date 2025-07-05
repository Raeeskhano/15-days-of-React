import React, { useState } from "react";

const Children = (props) => {
  const [color, setcolor] = useState("lightblue");

  let handleChange = () => {
    setcolor("lightgreen");
  };

  let handleChange2 = () => {
    setcolor("lightblue");
  };
  return (
    <>
      <h1 className="text-2xl font-bold">Children props and props in React</h1>
      <div
        className="bg-emerald-800 text-center w-[200px] p-4"
        onMouseOver={handleChange}
        onMouseLeave={handleChange2}
        style={{ backgroundColor: color }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Children;
