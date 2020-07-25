import React from "react";
import Container from "react-bootstrap/Container";
import SongList from "./SongList";

export default function UserGreeting(props) {
  return (
    <Container>
      <h1>Welcome, {props.firstName}!</h1>
      <h2>
        See what people are listening too, pick a song, and start singing.
      </h2>
      <br />
      <SongList />
    </Container>
  );
}
