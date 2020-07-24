import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar(props) {
  if (props.isLoggedIn) {
    console.log("flag");
  }

  return (
    <Container>
      <Navbar sticky="top">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Log out</Link>
          </li>
          <li>
            <Link to="/newSong">New Song</Link>
          </li>
          <li>
            <Link to="/songs">Song List</Link>
          </li>
        </ul>
      </Navbar>
    </Container>
  );
}
