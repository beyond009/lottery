import { lottery } from "../../declarations/lottery";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
window.global = window;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
