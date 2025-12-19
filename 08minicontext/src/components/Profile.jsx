import React from "react";
import { useContext } from "react";

import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <div>
        <h2>Please login first</h2>
      </div>
    );

  return (
    <div>
      <h1>Welcome {user.username}</h1>
    </div>
  );
};

export default Profile;
