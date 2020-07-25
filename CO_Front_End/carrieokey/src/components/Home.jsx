import React from "react";
import Container from "react-bootstrap/Container"
import SongList from './SongList'
export default function Home() {
  return (
    <Container>
      <h1>Carrie O'Key</h1>
      <h2>Welcome to my collection of favorite Karaoke songs!  Here you can create your own personal collection of songs, and browse the collections of others.  </h2>
      <br></br>
      <SongList />
    </Container>
  );
}
