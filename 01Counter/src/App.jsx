import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>counter Project</h1>
      <h2>ounter value: {count}</h2>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <br />
      <br />

      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;
