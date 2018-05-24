import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Series from "./components/Series";
import Movies from "./components/Movies";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { entries: [], error: false };
  }

  async componentDidMount() {
    try {
      const result = await axios.get(
        "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
      );
      const entries = result.data.entries
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
    if (this.state.error) {
      return (
        <section>
          <NavBar />
          <h2>Oops, something went wrong</h2>
          <Footer />
        </section>
      );
    }
    return (
      <section
        className="App"
        style={{ position: "relative", minHeight: "100vh" }}
      >
        <NavBar />
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
        <Footer />
      </section>
    );
  }
}

export default App;
