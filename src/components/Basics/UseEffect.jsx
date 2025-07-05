import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [toggle, settoggle] = useState(false);
  function handleclick() {
    settoggle(!toggle);
  }

  useEffect(() => {
    document.title = toggle
      ? "welcome to little lemon 🍋"
      : "using useeffect hook";
  }, [toggle]);

  return (
    <div>
      <h1 className="text-2xl font-extrabold">useEffect Hook in React</h1>
      <button onClick={handleclick}>toggle message</button>
      {toggle && <h2>welcome to little lemon 🍋</h2>}
    </div>
  );
};

export default UseEffect;
