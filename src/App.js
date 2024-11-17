import React, { Component } from "react";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }

  render() {
    console.log(this.state.robots);
    return (
      <div className="app-container">
        <h1>Робот хайх</h1>
        {this.state.robots.map((el) => (
          <div key={el.id}>{el.name}</div>
        ))}
      </div>
    );
  }
}
