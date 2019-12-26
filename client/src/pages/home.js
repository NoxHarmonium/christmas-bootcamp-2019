import React from "react";
import logo from "../images/logo.svg";
import "../style/App.css";
import BeerList from "../components/beer-list";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Beer List</h1>
      </header>
      <main className="container">
        <BeerList />
      </main>
    </div>
  );
};

export default Home;
