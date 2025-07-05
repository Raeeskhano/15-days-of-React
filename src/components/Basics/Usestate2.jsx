import React, { useState } from "react";

const Usestate2 = () => {
  const [greeting, setgreeting] = useState({
    greet: "Hello",
    place: "world",
  });

  const updateGreet = () => {
    setgreeting((prevGreet) => {
      return { ...prevGreet, place: "World Wide Web🕸️" };
    });
  };

  return (
    <div>
      <h1 className="font-bold">Updating State object using arrow function</h1>
      <h2>
        Greeting: {greeting.greet}, {greeting.place}
      </h2>
      <button onClick={updateGreet}>Update Greet</button>
    </div>
  );
};

export default Usestate2;
