import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "black",
        color: "white"
      }}
    >
      <div>Facebook</div>
      <div>Twitter</div>
    </footer>
  );
};

export default Footer;
