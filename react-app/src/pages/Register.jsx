import React, { useState } from "react";
import { useNavigate } from "react-router";
import api from "../config/axiosConfig";
import { toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
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

  async function handleSubmit(event) {
    event.preventDefault();
    if (userConfirmPassword !== userPassword) {
      return toast.error("Password and confirm password are not same.");
    }
    try {
      const response = await api.post("/auth/register", {
        userEmail,
        userName,
        userPassword,
      });
      if (response.data.success == true) {
        toast.success("Registeration Successfull.");
        navigate("/login");
      }
    } catch (error) {
      console.log(error, "error");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name : {userName}</label>
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
