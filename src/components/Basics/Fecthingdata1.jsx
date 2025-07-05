import React, { useEffect, useState } from "react";

const Fecthingdata1 = () => {
  const [User, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1")
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        setUser(data.results[0]);
      });
  }, []);

  return (
    <div className="bg-emerald-950 p-2 w-[300px] text-white">
      <h1 className="font-bold text-xl">Fetching Data in React part 2</h1>
      <h2>User Data</h2>
      {User ? (
        <>
          <p>
            Name: {User.name.title} {User.name.first} {User.name.last}
          </p>
          <p>Age: {User.dob.age}</p>
          <p>Dob: {User.dob.date}</p>
          <p>
            location: {User.location.street.name} {User.location.city}
            {User.location.state}
          </p>
          <p>Email: {User.email}</p>
          <p>Gender: {User.gender}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Fecthingdata1;
