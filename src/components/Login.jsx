import React from "react";
import "../App.css";
import { Redirect } from "react-router-dom";
import SongList from "./SongList";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


export default function Login(props) {
  if (props.isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <div className="log-in mt-5">
        <h2>Log in, see what's Poppin'!</h2>
        <form className="login-form" onSubmit={(evt) => props.handleLogin(evt)}>
          <input
            type="text"
            id="logEmail"
            name="email"
            placeholder="Email"
            onChange={(evt) => props.handleChange(evt)}
            value={props.logEmail}
            className={"m-2"}
          ></input>
          <br />
          <input
            type="password"
            id="logPassword"
            name="password"
            placeholder="Password"
            onChange={(evt) => props.handleChange(evt)}
            value={props.logPassword}
            className={"m-2"}
          ></input>
          <br></br>
          <Button type="submit" className={"m-2"} variant="warning">Login</Button>
        </form>
          <br />
          {props.warning ? <p>{props.warning}</p> : ""}
          <a href="/signup">
            <Button variant="warning">Not on Carrie O'Key yet? Sign up</Button>
          </a>
          <br />
      </div>
      <br />
      <SongList />
    </Container>
  );
}
