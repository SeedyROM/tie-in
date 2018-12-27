import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

export default class NavBar extends Component {
  public render() {
    return (
      <div className="NavBar">
        <div className="NavBar__container NavBar--text-shadow">
          <div className="NavBar__logo">Tie-In</div>
          <div className="NavBar__links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    );
  }
}
