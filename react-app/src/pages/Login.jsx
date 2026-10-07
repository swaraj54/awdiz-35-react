import React, { useState } from "react";
import api from "../config/axiosConfig";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "user@gmail.com",
    password: "pass@123",
  });
  console.log(loginData, "loginData");

  const handleChange = (event) => {
    // console.log(event.target.value, "value");
    // console.log(event.target.name, "name");
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/auth/login", loginData);
      if (response.data.success) {
        dispatch(login(response.data.user));
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error, "error");
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
        <input
          value={loginData.email}
          onChange={handleChange}
          type="email"
          name="email"
        />
        <br />
        <label>Password :</label>
        <br />
        <input
          value={loginData.password}
          onChange={handleChange}
          type="password"
          name="password"
        />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  );
};

export default Login;
