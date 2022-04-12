import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York"/>
    </div>
    <footer>
 
            <a
              href="https://github.com/emidumigan/weather-react"
              target="blank"
            >
              Open-source code
            </a>{" "}
            by Emi Dumigan
       
    </footer>
    </div>
  );
}

export default App;
