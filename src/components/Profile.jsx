import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      {user ? (
        <div>
          <h2>username is : {user.userName}</h2>
        </div>
      ) : (
        "plz enter user name"
      )}
    </>
  );
}

export default Profile;
