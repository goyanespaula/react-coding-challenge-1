import React, { Component } from "react";
import PropTypes from "prop-types";
import Poster from "./Poster";

const propTypes = {
  entries: PropTypes.array.isRequired
};

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.entries.filter(ent => ent.programType === "movie")
    };
  }

  render() {
    const movies = this.state.movies.map((m, i) => (
      <Poster poster={m} key={i} />
    ));
    return (
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <h2>Movies</h2>
        {movies}
      </section>
    );
  }
}

Movies.propTypes = propTypes;

export default Movies;
