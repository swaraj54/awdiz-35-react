import React, { useContext } from "react";
import { Link } from "react-router";
import { CounterContext } from "../contexts/CounterContext";

const Navbar = () => {
  const { state } = useContext(CounterContext);
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
      <p>Counter : {state.counter} </p>
      <Link
        style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        to="/"
      >
        Home
      </Link>
      <Link
        style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        to="/FakeStoreProducts"
      >
        Fakestore Products
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
