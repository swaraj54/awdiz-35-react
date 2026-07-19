import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  function checkUser() {
    // alert("Hello");
    const user = false;
    if (user) {
      alert("Login successfull.");
      navigate("/");
    } else {
      alert("Login failed.");
      navigate("/register");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={checkUser}>Login</button>
    </div>
  );
};

export default Login;
