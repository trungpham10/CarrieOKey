import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
