import React from "react";
import "../App.css";
import { Redirect } from "react-router-dom";

export default function Login(props) {
  if (props.isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="log-in">
      <h2>Log in</h2>
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
        <input type="submit" id="login-submit" value="Log in" />
      </form>
    </div>
  );
}
