import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSumbit = (e) => {
    e.preventDefault();
    setUser({userName, password});
    
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="Username"
        type="text"
        name="userName"
        value={userName}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSumbit}>Submit</button>
    </div>
  );
}

export default Login;
