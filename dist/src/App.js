import React, { Component } from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Series from "./containers/Series";
import Movies from "./containers/Movies";
import Home from "./containers/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { entries: [], error: false };
  }

  async componentDidMount() {
    try {
      const data = await axios.get(
        "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
      );
      const entries = data.data.entries
        .filter(ent => ent.releaseYear >= 2010)
        .sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
          return 0;
        })
        .slice(0, 21);

      this.setState({ entries });
    } catch (error) {
      this.setState({ error: true });
    }
    document.getElementById("loading").style.display = "none";
  }

  render() {
    return (
      <section
        className="App"
        style={{ position: "relative", minHeight: "100vh" }}
      >
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
        {this.state.error ? (
          <h2>"Oops, something went wrong"</h2>
        ) : (
          <Switch>
            <Route
              path="/series"
              component={props => (
                <Series entries={this.state.entries} {...props} />
              )}
            />
            <Route
              path="/movies"
              component={props => (
                <Movies entries={this.state.entries} {...props} />
              )}
            />
            <Route path="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>
        )}
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
      </section>
    );
  }
}

export default App;
