import React, { Component } from "react";
import PropTypes from "prop-types";
import Poster from "./Poster";

const propTypes = {
  entries: PropTypes.array.isRequired
};

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: this.props.entries.filter(ent => ent.programType === "series")
    };
  }

  render() {
    const series = this.state.series.map((s, i) => (
      <Poster poster={s} key={i} />
    ));
    return (
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <h2>Series</h2>
        {series}
      </section>
    );
  }
}

Series.propTypes = propTypes;

export default Series;
