import React from "react";
import Container from "react-bootstrap/Container";
import SongList from "./SongList";
import UserGreeting from "./UserGreeting";

export default function Home(props) {
  if (props.isLoggedIn) {
    return (
      <UserGreeting isLoggedIn={props.isLoggedIn} firstName={props.firstName} />
    );
  }

  return (
    <Container>
      <h1>Welcome to Carrie O'Key!</h1>
      <h2>
        Create your own songs, see what your friends are up to, and have a
        karaoke with them.
      </h2>
      <br></br>
    </Container>
  );
}
