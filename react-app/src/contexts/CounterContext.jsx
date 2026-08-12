import { createContext, useReducer } from "react";

export const CounterContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "RESET":
      return { ...state, counter: 111 };
    default:
      return state;
  }
}

function CounterContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { counter: 111, theme: null });
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider; // HOC
