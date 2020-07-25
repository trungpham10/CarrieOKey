import React from "react";
import Container from "react-bootstrap/Container";
import SongList from "./SongList";

export default function UserGreeting(props) {
  return (
    <Container>
      <h1>Welcome, {props.firstName}!</h1>
      <h2>Sing THAT song you've always wanted to, with your friends, now.</h2>
      <br />
      <SongList />
    </Container>
  );
}
