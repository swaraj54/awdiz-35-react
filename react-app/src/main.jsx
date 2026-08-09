import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import CounterContextProvider from "./contexts/CounterContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </StrictMode>
  </BrowserRouter>,
);
