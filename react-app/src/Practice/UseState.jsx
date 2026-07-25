import { useState } from "react";

function UseState() {
  console.log("component rederering.");
  // const [current value, function to update state ] = useState(initital value)
  const [counter, setCounter] = useState(1);
  function increment() {
    if (counter < 10) {
      setCounter(counter + 1);
    } else {
    }
  }
  function decrement() {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert("Not less than 1");
    }
  }
  function reset() {
    setCounter(1);
    // alert("Reset function called.");
  }

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={increment}>+</button>
      <br />
      {counter == 1 ? (
        <button>Delete</button>
      ) : (
        <button onClick={decrement}>-</button>
      )}
      <br />
      <button onClick={decrement}>{counter == 1 ? "Delete" : "-"}</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
    </div>
  );
}

export default UseState;
