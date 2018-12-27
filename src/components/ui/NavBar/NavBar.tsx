import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

export default class NavBar extends Component {
  public render() {
    return (
      <div className="NavBar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}
