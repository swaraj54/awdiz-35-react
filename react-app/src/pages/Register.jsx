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

  const [userRole, setUserRole] = useState("user");
  console.log(userRole, "userRole");
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
        email: userEmail,
        name: userName,
        password: userPassword,
        role: userRole,
      });
      if (response.data.success == true) {
        toast.success(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message)
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
        <br/>
        <select onChange={(event)=> setUserRole(event.target.value)}>
          <option value="user">User</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>
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
