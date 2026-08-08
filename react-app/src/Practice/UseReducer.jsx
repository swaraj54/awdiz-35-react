import React, { useReducer } from "react";

function reducer(state, action) {
  console.log(state, "current state");
  console.log(action, "action");
  switch (action.type) {
    case "Increment":
      return { ...state, counter: state.counter + 1 };
    case "Decrement":
      return { ...state, counter: state.counter - 1 };
    case "Reset":
      return { ...state, counter: 1 };
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };

    default:
      return state;
  }
}
const initialState = { counter: 1, counter2: 22, user: null };

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, "state");
  return (
    <div>
      <h1>Counter : {state.counter}</h1>
      <button onClick={() => dispatch({ type: "Increment", payload: "data" })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};

export default UseReducer;
