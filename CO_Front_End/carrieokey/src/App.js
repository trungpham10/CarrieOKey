import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NewSongForm from './components/NewSongForm'

let baseUrl = 'http://localhost:3000'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      songName: [],
      artist: String, 
      lyrics: String,
      user: '' //after login this will have user name
    }
  }

  render() {
    return (
      <Router>
        <NavBar />
        <NewSongForm/>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
}
