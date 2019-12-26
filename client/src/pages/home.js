import React from "react";
import logo from "../images/logo.svg";
import "../style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BeerList from "../components/beer-list";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <header className="col-12">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Beer List</h1>
        </header>
        <div className="row">
          <main className="col-12">
            <BeerList />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
