import React, { Component } from "react";
import { Map } from "react-deco";
import styled from "styled-components";

import { Container, Header, Wrapper } from "../styles/components";

interface IData {
  name: string;
  age: number;
}

const fakeData = [
  { name: "bob", age: 15 },
  { name: "bowb", age: 95 },
  { name: "botb", age: 25 },
  { name: "boab", age: 155 },
  { name: "bxob", age: 165 },
];

export default class Home extends Component {
  public render() {
    let i = 0;
    return (
      <Wrapper>
        <Container>
          <Header>Home</Header>
          <Map
            target={fakeData}
            with={(data: IData) => (
              <div key={i++}>
                {data.name} {data.age}
              </div>
            )}
          />
        </Container>
      </Wrapper>
    );
  }
}
