import React from "react";
import "../App.css";

export default function Login(props) {
  return (
    <div class="log-in">
      <h2>Log in</h2>
      <form class="login-form" onSubmit={(evt) => props.handleLogin(evt)}>
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
