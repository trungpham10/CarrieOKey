import React from "react";
import "../App.css";

export default function Signup(props) {
  return (
    <div className="sign-up">
      <h2>Sign up</h2>
      <form className="signup-form" onSubmit={(evt) => props.handleSignup(evt)}>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First name"
          onChange={(evt) => props.handleChange(evt)}
          value={props.firstName}
        ></input>
        <br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last name"
          onChange={(evt) => props.handleChange(evt)}
          value={props.lastName}
        ></input>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email address"
          onChange={(evt) => props.handleChange(evt)}
          value={props.email}
        ></input>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(evt) => props.handleChange(evt)}
          value={props.password}
        ></input>
        <br />
        <input type="submit" id="signup-submit" value="Sign up" />
      </form>
    </div>
  );
}
