import React from "react";

const Basics = (props) => {
  let name = "Raees khan";
  let Rollno = 12361;
  let CGpa = 3.4;
  let isstudent = "true";
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold p-4">Basics of React</h1>
        <div>
          <h1>uses of jsxs</h1>
          <p>Name: {name}</p>
          <p>Rollno: {Rollno}</p>
          <p>CGPA: {CGpa}</p>
          <p>isStudent: {isstudent}</p>
          <p>First hobby: {props.studenthobbies.first}</p>
          <p>Second hobby: {props.studenthobbies.second}</p>
        </div>
      </div>
    </>
  );
};

export default Basics;
