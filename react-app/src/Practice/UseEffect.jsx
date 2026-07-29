import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);

  // initial render call  


  // when any state changes
  useEffect(() => {
    console.log("use effect");
  });

  useEffect(() => {
    console.log("use effect");
  }, []);

  // when counter2 state changes then it'll call functiobn 
  useEffect(() => {
    console.log("use effect");
  }, [counter2]);

  // from passed dependencies if anyone changes then it'll call function
  useEffect(() => {
    console.log("use effect");
  }, [counter2, counter]);
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h1>Counter 2 {counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 1)}>+</button>
    </div>
  );
};

export default UseEffect;
