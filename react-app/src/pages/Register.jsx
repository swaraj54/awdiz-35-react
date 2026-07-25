import React, { useState } from "react";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [userName, setUserName] = useState("");
  console.log(userName, "userName");
  const [userEmail, setUserEmail] = useState("");
  console.log(userEmail, "userEmail");
  const [userPassword, setUserPassword] = useState("");
  console.log(userPassword, "userPassword");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  console.log(userConfirmPassword, "userConfirmPassword");

  function handleChange(event) {
    console.log(event.target.value, "- user typed value");
    console.log(event.target.name, "- user typed name");
    // setUserData()
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <br />
        <input
          type="text"
          onChange={(event) => setUserName(event.target.value)}
          name="name"
        />
        <br />
        <label>Email :</label>
        <br />
        <input
          type="email"
          onChange={(event) => setUserEmail(event.target.value)}
          name="email"
        />
        <br />
        <label>Password :</label>
        <br />
        <input
          type="password"
          onChange={(event) => setUserPassword(event.target.value)}
          name="password"
        />
        <br />
        <label>Confirm Password :</label>
        <br />
        <input
          type="password"
          onChange={(event) => setUserConfirmPassword(event.target.value)}
          name="confirmPassword"
        />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  );
};

export default Register;
