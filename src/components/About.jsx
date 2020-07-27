import React from "react";
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button'


export default function Home() {
  const callSeedRoute= () =>{
    fetch("http://localhost:3003/seed", {
      method: 'GET'
    })
  }

  return (
    <Container>
      <h1>About Page</h1>
      <Button onClick={callSeedRoute()}>Seed Database</Button>
    </Container>
  );
}
