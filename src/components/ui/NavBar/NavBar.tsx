import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.scss";

export default class NavBar extends Component {
  public render() {
    return (
      <div className="NavBar">
        <div className="NavBar__container NavBar--text-shadow">
          <div className="NavBar__logo">
            Tie<span>&#8208;</span>In
          </div>
          <div className="NavBar__links">
            <NavLink exact={true} to="/">
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
