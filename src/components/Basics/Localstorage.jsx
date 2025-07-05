import { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState(() => {
    // Load initial value from local storage
    return localStorage.getItem("name") || "";
  });

  // Update local storage when state changes
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div>
      <h1 className="font-bold">Local storage in React</h1>
      <h2>Welcome {name}</h2>
      <input
        className="border-2 border-emerald-950s rounded"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default App;
