import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div classNAme="App">
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


