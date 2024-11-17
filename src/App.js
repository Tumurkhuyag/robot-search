import React, { Component } from "react";
import { CardList } from "./components/card-list";
import { SearchField } from "./components/search-box";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    // Initial state has two properties
    this.state = {
      robots: [], // Array to store all robots
      filterValue: "", // String to store search input value
    };
  }

  // This method updates searchValue whenever user types
  searchingRobot = (event) => {
    this.setState({ filterValue: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }

  render() {
    const { robots, filterValue } = this.state;

    // Filter robots based on search value
    const filterResult = robots.filter((el) =>
      el.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Робот хайх</h1>
        <SearchField searchingRobot={this.searchingRobot} />
        <CardList robots={filterResult} /> {/* Pass filtered robots instead */}
      </div>
    );
  }
}
