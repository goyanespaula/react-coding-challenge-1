import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  poster: PropTypes.object.isRequired
};

const Poster = ({ poster }) => {
  const { title, images } = poster;
  return (
    <figure>
      <caption>{title}</caption>
      <img
        src={images["Poster Art"].url}
        alt="poster art"
        style={{ height: "200px" }}
      />
    </figure>
  );
};

Poster.propTypes = propTypes;

export default Poster;
