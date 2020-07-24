import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

export default function NavBar(props) {
  return (
    <Container>
      <Navbar sticky='top'>
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
          <Link to="/newSong">New Song</Link>
        </li>
        <li>
          <Link to="/songs">Song List</Link>
        </li>
        <li>
          <Link to="/songLookUp">Look Up Song</Link>
        </li>
      </ul>
      </Navbar>
    </Container>
  );
}