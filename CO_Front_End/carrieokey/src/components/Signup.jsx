import React from "react";
import "../App.css";

export default function Signup() {
  return (
    <div class="sign-up">
      <h2>Sign up</h2>
      <form class="signup-form">
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First name"
        ></input>
        <br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last name"
        ></input>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email address"
        ></input>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        ></input>
        <br />
        <input type="submit" id="signup-submit" value="Agree and continue" />
      </form>
    </div>
  );
}
