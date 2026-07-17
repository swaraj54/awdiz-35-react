import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const name = "Awdiz";
  const age = 12;
  const age2 = 14;
  return (
    <>
      <h1 style={{ fontSize: "32px", backgroundColor: "red" }}>
        Hello Everyone! {name} {age2 - age}
      </h1>
      <p className="paraStyle">This is second session of react..</p>
    </>
  );
}

export default App;
