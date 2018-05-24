import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "black",
        color: "white"
      }}
    >
      <h1>DEMO Streaming</h1>
      <div style={{ display: "flex" }}>
        <h3>Log In</h3>
        <h3>Start your free trial</h3>
        <Link to="/home">Home</Link>
      </div>
    </nav>
  );
};

export default NavBar;
