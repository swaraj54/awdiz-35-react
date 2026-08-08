import React, { useRef, useState } from "react";

const UseRef = () => {
  const [counter, setCounter] = useState(1);
  console.log("counter", counter);
  const counter2 = useRef(22);
  console.log(counter2, "counter2F");
  return (
    <div>
      <h1>Ref counter : {counter2.current}</h1>
      <button onClick={() => counter2.current++}>+</button>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default UseRef;
