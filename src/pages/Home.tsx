import React, { Component } from "react";
import { Map } from "react-deco";

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
      <Map
        target={fakeData}
        with={(data: IData) => (
          <div key={i++}>
            {data.name} {data.age}
          </div>
        )}
      />
    );
  }
}
