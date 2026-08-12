import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const ContextCounter = () => {
  const { state, dispatch } = useContext(CounterContext);
  // const { state : themeSate, dispatch : themeDispatch } = useContext(ThemeContext);
  return (
    <div>
      <h1>Counter from Context : {state.counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <br />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <br />
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default ContextCounter;
