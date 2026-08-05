import { useState } from "react";

function RevisionUseState() {
  //   const [currentValue, functionToUpdateValue] = useState(initialValue);
  const [counter, setCounter] = useState(1);
  //   const counter = 0;
  function Increment() {
    if (counter < 5) {
      let newCounter = counter + 1;
      setCounter(newCounter);
    }
  }
  function Decrement() {
    if (counter > 1) {
      let newCounter = counter - 1;
      setCounter(newCounter);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={Decrement}>-</button>
      <h1>{counter}</h1>
      <button onClick={Increment}>+</button>
    </div>
  );
}

export default RevisionUseState;
