import React, { StatelessComponent } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: var(--color-blue);
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 1em;
`;

export default () => (
  <Container>
    <Header>About Page</Header>;
  </Container>
);
