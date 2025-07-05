import React, { useRef } from "react";

const UseRef = () => {
  const usernameref = useRef(null);
  const passwordref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameref.current.value);
    console.log(passwordqref.current.value);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">UseRef Hook In React</h1>
      <input
        type="text"
        className="border-2 border-black rounded"
        ref={usernameref}
      />
      <br />
      <input
        type="password"
        className="border-2 border-black rounded"
        ref={passwordref}
      />
      <br />
      <button className="border-2 border-black rounded" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default UseRef;
