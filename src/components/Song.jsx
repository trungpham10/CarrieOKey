import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

export default class Song extends Component {
  render() {
    return (
      <Card
        className="text-left bg-dark text-white mb-2"
        style={{
          width: "65rem",
          height: "30rem",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Card.Img
          variant="top"
          src={this.props.image}
          alt="album cover"
          style={{ width: "20rem", height: "20rem", alignContent: "center" }}
        />
        <Card.Body>
          <Card.Title>
            <h1>{this.props.songName}</h1>
          </Card.Title>
          <Card.Subtitle>
            <p>{this.props.artist}</p>
          </Card.Subtitle>
          <br />
          <Card.Text>
            <pre className="text-white text-left">
              {this.props.lyrics.slice(0, this.props.lyricLength)}...
            </pre>
          </Card.Text>
          {this.props.videoLink ? (
            <a href={this.props.videoLink}>
              <Button variant="primary">Link to Video of this Song</Button>
            </a> //this is a note that doesnt matter
          ) : (
            ""
          )}
          <Container
            className="text-bottom bottom-buttons"
            variant="bottom"
            style={{ marginBottom: "0" }}
          >
            {/* <Card.Link href="/songs">More</Card.Link>
            <br />
            <Button>Karaoke!</Button> */}
            {/* <Button
              variant="danger"
              onClick={() => this.props.deleteSong(this.props.songID)}
            >
              Delete{" "}
            </Button> */}
          </Container>
        </Card.Body>
      </Card>
    );
  }
}
