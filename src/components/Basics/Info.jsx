import React, { useContext } from "react";
import Usercontext from "./Usercontext";

const Info = () => {
  const user = useContext(Usercontext);
  return (
    <div>
      <h1>my information</h1>
      <p>Name: {user.name}</p>
      <p>age: {user.age}</p>
    </div>
  );
};

export default Info;
