import React, { Component } from "react";

import "./NavBar.scss";
import { Container, Logo, NavLink, NavLinks } from "./NavBar.style";

export default class NavBar extends Component {
  public render() {
    return (
      <div className="NavBar">
        <Container className="NavBar--text-shadow">
          <Logo to="/">
            Tie<span>&#8208;</span>In
          </Logo>
          <NavLinks>
            <NavLink exact={true} to="/">
              Home
            </NavLink>
            <NavLink to="/about">
              About
            </NavLink>
          </NavLinks>
        </Container>
      </div>
    );
  }
}
