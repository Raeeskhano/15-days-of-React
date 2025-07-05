import React, { useState } from "react";

const Usestate1 = () => {
  const [greeting, setgreeting] = useState({ greet: "hello world" });

  function updateGreet() {
    const newGreeting = { ...greeting };
    newGreeting.greet = "hello world wide web🌍";
    setgreeting(newGreeting);
  }
  return (
    <div>
      <h1 className="font-bold">working with complex data in Usestate</h1>

      <h2>Greet: {greeting.greet}</h2>
      <button onClick={updateGreet}>update Greet</button>
    </div>
  );
};

export default Usestate1;
