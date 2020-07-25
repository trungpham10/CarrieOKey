import React from "react";
import "../App.css";
import { Redirect } from "react-router-dom";
import SongList from "./SongList";
import Container from "react-bootstrap/Container";

export default function Login(props) {
  if (props.isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <div className="log-in">
        <h2>Log in, see what's Poppin'!</h2>
        <form className="login-form" onSubmit={(evt) => props.handleLogin(evt)}>
          <input
            type="text"
            id="logEmail"
            name="email"
            placeholder="Email"
            onChange={(evt) => props.handleChange(evt)}
            value={props.logEmail}
          ></input>
          <br />
          <input
            type="password"
            id="logPassword"
            name="password"
            placeholder="Password"
            onChange={(evt) => props.handleChange(evt)}
            value={props.logPassword}
          ></input>
          <br />
          {props.warning ? <p>{props.warning}</p> : ""}
          <a href="/signup">Not on Carrie O'Key yet? Sign up</a>
          <br />

          <input type="submit" id="login-submit" value="I'm in!" />
        </form>
      </div>
      <br />
      <SongList />
    </Container>
  );
}
