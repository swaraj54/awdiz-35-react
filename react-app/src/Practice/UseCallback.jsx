import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const UseCallback = () => {
  const [counter1, setCounter1] = useState(11);
  const [counter2, setCounter2] = useState(22);
  // const IncrementCounter2 = () => {
  //   setCounter2(counter2 + 1);
  //   console.log("|Hello");
  // };
  const IncrementCounter2 = useCallback(() => {
    setCounter2(counter2 + 1);
    console.log("|Hello");
  }, [counter2]);
  return (
    <div>
      <h1>Counter 1 - {counter1} </h1>
      <button onClick={() => setCounter1(counter1 + 1)}>Counter 1 +</button>

      <ChildComponent
        counter2={counter2}
        IncrementCounter2={IncrementCounter2}
      />
    </div>
  );
};

export default UseCallback;
