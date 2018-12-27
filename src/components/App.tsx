import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import logo from "../../assets/logo.svg";
import "./App.scss";

import Routes from "../routes";
import NavBar from "./ui/NavBar";

class App extends Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <div className="App__container">
            <NavBar />
            <Routes />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
