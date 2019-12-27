import React from "react";
import logo from "../images/logo.svg";
import "../style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BeerList from "../components/beer-list";
import BeerAdd from "../components/beer-add";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <header className="col-12">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Beer List</h1>
        </header>
      </div>
      <div className="row">
        <div className="col-6">
          <BeerAdd />
        </div>
        <main className="col-6">
          <BeerList />
        </main>
      </div>
    </div>
  );
};

export default Home;
