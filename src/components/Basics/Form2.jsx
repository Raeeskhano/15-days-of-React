import React, { useState } from "react";

const Form2 = () => {
  const [name, setname] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    setname("");
  };
  return (
    <div>
      <h1 className="text-xl font-bold">Forms in react practice</h1>
      <div>
        <form onSubmit={handlesubmit}>                 
          <fieldset>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="name"
              value={name}
              id="name"
              name="name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <button disabled={!name} type="submit">
              submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Form2;
