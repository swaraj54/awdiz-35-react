import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div
      style={{
        border: "2px solid black",
        backgroundColor: "aqua",
        height: "60px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontSize: "24px",
      }}
    >
      <Link
        style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        to="/"
      >
        Home
      </Link>
      <Link
        style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        to="/products"
      >
        Products
      </Link>
      <Link
        style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        to="/login"
      >
        Login
      </Link>
      <Link
        style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        to="/register"
      >
        Register
      </Link>
    </div>
  );
};

export default Navbar;
