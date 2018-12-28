import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Initial assets and modules
import logo from "../../assets/logo.svg";
import "./App.scss";

// styled-components hack
// @ts-ignore
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/theme.scss'); // tslint:disable-line

// Components
import Routes from "../routes";
import NavBar from "./ui/NavBar";

class App extends Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <div className="App__container">
              <NavBar />
              <Routes />
            </div>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
