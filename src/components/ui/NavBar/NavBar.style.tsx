import React from "react";

import * as router from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--screen-desktop);
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(router.Link)`
  font-weight: bold;
  font-size: 2rem;
  font-style: italic;
  text-decoration: none;

  &:active,
  &:visited,
  &:link {
    color: var(--color-white);
  }
`;

export const NavLink = styled(router.NavLink)`
  margin-left: 1.5rem;
  text-decoration: none;
  border-color: transparent;
  display: block;

  &:after {
    content: " ";
    display: block;
    transition: all 0.3s ease-in-out;
    background: rgba(255, 255, 255, 0);
    width: 0px;
  }

  &.active {
    &:after {
      height: 1px;
      width: 100%;
      background: rgba(255, 255, 255, 0.9);
    }
  }

  &:active,
  &:visited,
  &:link {
    color: var(--color-white);
  }
`;

export const NavLinks = styled.div`
  display: flex;
`;
