import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <React.StrictMode>
    <App numbers={numbers}/>
  </React.StrictMode>,
  document.getElementById("root")
);
