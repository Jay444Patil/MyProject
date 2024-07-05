import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CounterEx from "./Components/StateHooksEx/1. CounterEx.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterEx />
  </React.StrictMode>
);
