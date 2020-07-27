import React from "react";
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button'



let baseUrl;

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3003';
} else {
  baseUrl = 'https://carrieokey-api.herokuapp.com';
}

export default function Home() {
  const callSeedRoute= () =>{
    fetch(`${baseUrl}/seed`, {
      method: 'GET'
    })
  }

  return (
    <Container id="about">
      <h1>About Page</h1>
      <Button onClick={callSeedRoute()} id="aboutbtn">Seed Database</Button>
    </Container>
  );
}
