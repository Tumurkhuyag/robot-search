import React, { Component } from "react";
import { CardList } from "./components/card-list";
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
    return (
      <div className="App">
        <h1>Робот хайх</h1>
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}
