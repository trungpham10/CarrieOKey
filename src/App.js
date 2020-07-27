import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import VideoChat from "./components/VideoChat";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NewSongForm from "./components/NewSongForm";
import SongList from "./components/SongList";
import EditSong from "./components/EditSong";
import SongLookUp from "./components/SongLookUp";
import Container from "react-bootstrap/Container";
import ApiRender from "./components/ApiRender";
import Show from "./components/Show";

let baseURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "https://carrieokey-api.herokuapp.com";
}

export default class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    logEmail: "",
    logPassword: "",
    isLoggedIn: false,
    isSignedUp: false,
    currentSongID: "",
    songsCollection: [],
    searchText: "",
    isVideoConnected: false,
    warning: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  setCurrentSongID = (id) => {
    this.setState({
      currentSongID: id,
    });
  };

  handleSignup = (event) => {
    event.preventDefault();

    fetch(baseURL + "/users", {
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
          isSignedUp: true,
          firstName: "",
          lastName: "",
          email: "",
        });
      });
  };

  handleLogin = (event) => {
    event.preventDefault();
    // debugger;
    fetch(baseURL + "/sessions", {
      method: "POST",
      body: JSON.stringify({
        logEmail: this.state.logEmail,
        logPassword: this.state.logPassword,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res, err) => {
        if (err) {
          console.log(err);
        }
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          this.setState({
            warning: data.error,
          });
        } else {
          this.setState({
            isLoggedIn: true,
            logEmail: data.email,
            logPassword: "",
            firstName: data.firstName,
            lastName: data.lastName,
          });
        }
      });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      firstName: "",
      lastName: "",
      isSignedUp: false,
      logEmail: "",
      warning: "",
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
              <Route
                exact
                path="/"
                render={() => (
                  <Home
                    isLoggedIn={this.state.isLoggedIn}
                    firstName={this.state.firstName}
                  />
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/video"
                render={() => (
                  <VideoChat
                    isLoggedIn={this.state.isLoggedIn}
                    logEmail={this.state.logEmail}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                  />
                )}
              />
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
                    warning={this.state.warning}
                  />
                )}
              />
              <Route exact path="/newSong" component={NewSongForm} />
              <Route exact path="/songs" component={SongList} />
              <Route
                exact
                path="/editsong"
                component={EditSong}
                render={() => (
                  <EditSong currentSongID={this.state.currentSongID} />
                )}
              />
              <Route
                exact
                path="/songLookUp"
                component={SongLookUp}
                render={() => (
                  <SongLookUp setCurrentSongID={this.setCurrentSongID} />
                )}
              />
              <Route exact path="/songs/:id" render={() => <Show />} />
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
                    isLoggedIn={this.state.isLoggedIn}
                    isSignedUp={this.state.isSignedUp}
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
