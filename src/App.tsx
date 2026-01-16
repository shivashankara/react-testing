import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./Component/Application/Application";
import { Counter } from "./Component/Counter/Counter";
import Users from "./Component/Users/Users";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn react
        </a>
      </header>
      <table></table>
      <Application />
      <Counter />
      <Users />
    </div>
  );
}

export default App;
