import React from "react";
import "../App.css";

export default function Login() {
  return (
    <div class="log-in">
      <form class="login-form">
        <input type="text" id="email" name="email" placeholder="Email"></input>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        ></input>
        <br />
        <input type="submit" id="login-submit" value="Log in" />
      </form>
    </div>
  );
}
