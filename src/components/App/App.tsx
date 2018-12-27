import React, { Component } from "react";
import { Map } from "react-deco";
import logo from "../../assets/logo.svg";

import "./App.scss";

interface IData {
  name: string;
  age: number;
}

const fakeData = [
  {name: "bob",  age: 15},
  {name: "bowb", age: 95},
  {name: "botb", age: 25},
  {name: "boab", age: 155},
  {name: "bxob", age: 165},
];

class App extends Component {
  public render() {
    let i = 0;
    return (
      <div className="App">
        <h1>My World!</h1>
        <Map target={fakeData} with={(data: IData) => (
          <div key={i++}>{data.name} {data.age}</div>
        )}/>
      </div>
    );
  }
}

export default App;
