import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NewSongForm from "./components/NewSongForm";
import SongList from "./components/SongList";
import EditSong from "./components/EditSong";

const baseUrl = "http://localhost:3003";

export default class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    logEmail: "",
    logPassword: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSignup = (event) => {
    console.log("handle signup clicked");
    event.preventDefault();
    fetch(baseUrl + "/users", {
      method: "POST",
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  handleLogin = (event) => {
    console.log("handle signin clicked");
    event.preventDefault();
    fetch(baseUrl + "/sessions", {
      method: "POST",
      body: JSON.stringify({
        logEmail: this.state.logEmail,
        logPassword: this.state.logPassword,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  render() {
    return (
      <Router>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/login"
              render={() => (
                <Login
                  logEmail={this.state.logEmail}
                  logPassword={this.state.logPassword}
                  handleChange={this.handleChange}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route exact path="/newSong" component={NewSongForm} />
            <Route exact path="/songs" component={SongList} />
            <Route exact path="/editsong" component={EditSong} />
            <Route
              exact
              path="/signup"
              render={() => (
                <Signup
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  email={this.state.email}
                  password={this.state.password}
                  handleChange={this.handleChange}
                  handleSignup={this.handleSignup}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
