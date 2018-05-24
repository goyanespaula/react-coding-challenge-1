import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { entries: [] };
  }

  render() {
    return (
      <section>
        <h2>Popular Titles</h2>
        <Link to="/series">Series</Link>
        <Link to="/movies">Movies</Link>
      </section>
    );
  }
}

export default Home;
