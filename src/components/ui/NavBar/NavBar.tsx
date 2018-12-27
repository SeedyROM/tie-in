import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.scss";

export default class NavBar extends Component {
  public render() {
    return (
      <div className="NavBar">
        <div className="NavBar__container NavBar--text-shadow">
          <div className="NavBar__logo">
            <Link to="/">
              Tie<span>&#8208;</span>In
            </Link>
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
