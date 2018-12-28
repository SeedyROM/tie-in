import React, { StatelessComponent } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: purple;
  width: 100%;
  height: 100vh;
`;

export default () => (
  <Container>
    <h1>About Page</h1>;
  </Container>
);
