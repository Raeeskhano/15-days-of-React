import React, { useEffect, useState } from "react";

const FetchingData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]); // Extracting user data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-[300px] bg-emerald-950 text-white p-2">
      <h1 className="text-2xl font-bold">Fetching data in React</h1>
      <h1>User Data</h1>
      {user ? (
        <>
          <p>
            Name: {user.name.first} {user.name.last}
          </p>
          <p>Gender: {user.gender}</p>
          <p>Age: {user.dob.age}</p>
          <p>DOB: {user.dob.date}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchingData;
