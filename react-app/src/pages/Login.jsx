import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  console.log(loginData, "loginData");

  const handleChange = (event) => {
    // console.log(event.target.value, "value");
    // console.log(event.target.name, "name");
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted.");
    if (loginData.password.length < 8) {
    }
  };

  // const data = { email: "abc@gmail.com", password: "pass@123" };
  // data.email;
  // data["password"] = "akjb djwsh";
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email :</label>
        <br />
        <input onChange={handleChange} type="email" name="email" />
        <br />
        <label>Password :</label>
        <br />
        <input onChange={handleChange} type="password" name="password" />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  );
};

export default Login;
