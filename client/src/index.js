import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./state/store";
import "./style/index.css";
import Home from "./pages/home";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
