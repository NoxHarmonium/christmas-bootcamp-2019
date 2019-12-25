import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BeerList from "./Components/BeerList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Beer List</h1>
      </header>
      <main>
        <BeerList />
      </main>
    </div>
  );
}

export default App;
