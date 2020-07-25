import React from "react";
import "../App.css";
import { Redirect } from "react-router-dom";
import SongList from "./SongList";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button'

export default function Signup(props) {
  if (props.isLoggedIn) {
    return <Redirect to="/" />;
  }

  if (props.isSignedUp) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <div className="sign-up">
        <h2>Sign up</h2>
        <form
          className="signup-form"
          onSubmit={(evt) => props.handleSignup(evt)}
        >
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
            placeholder="Create a password"
            onChange={(evt) => props.handleChange(evt)}
            value={props.password}
          ></input>
          <br />
          <a href="/login"><Button>Already a member? Sign in!</Button></a>
          <br />

          <Button type="submit"> Let's get started </Button>
        </form>
      </div>
      <br />
      <SongList />
    </Container>
  );
}
