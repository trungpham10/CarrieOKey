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
import Container from "react-bootstrap/Container";

const baseUrl = "http://localhost:3003";

export default class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    logEmail: "",
    logPassword: "",
    isLoggedIn: false,
    songsCollection: [],
    isVideoConnected: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSignup = (event) => {
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
        this.setState({
          password: "",
          firstName: "",
          lastName: "",
          email: "",
        });
      });
  };

  handleLogin = (event) => {
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
        console.log("User's first name:", data.firstName);
        this.setState({
          isLoggedIn: true,
          logEmail: "",
          logPassword: "",
          firstName: data.firstName,
        });
      });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <Container>
        <Router>
          <NavBar
            isLoggedIn={this.state.isLoggedIn}
            handleLogout={this.handleLogout}
          />
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
                    isLoggedIn={this.state.isLoggedIn}
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
      </Container>
    );
  }
}
