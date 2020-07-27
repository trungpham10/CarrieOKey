
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// const baseUrl = "http://localhost:3003";
let baseUrl;

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3003';
} else {
  baseUrl = 'https://carrieokey-api.herokuapp.com';
}
export default class NewSongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songName: "",
      artist: "",
      lyrics: "",
      videoLink: "",
      image: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(baseUrl + "/song", {
      method: "POST",
      body: JSON.stringify({
        songName: this.state.songName,
        artist: this.state.artist,
        lyrics: this.state.lyrics,
        videoLink: this.state.videoLink,
        image: this.state.image,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        // this.props.handleAddSong(resJson)
        this.setState({
          songName: "",
          artist: "",
          lyrics: "",
          videoLink: "",
          image: "",
        });
      })
      .catch((error) => console.error({ Error: error }));
  }

  render() {
    return (
      <Container>
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Song Title"
              id="songName"
              value={this.state.songName}
              onChange={this.handleChange}
            />
            <br />

            <Form.Control
              type="text"
              placeholder="Artist"
              id="artist"
              value={this.state.artist}
              onChange={this.handleChange}
            />
            <br />

            <Form.Group controlId="Form.ControlTextarea" />
            <Form.Control
              as="textarea"
              placeholder="Lyrics"
              id="lyrics"
              value={this.state.lyrics}
              onChange={this.handleChange}
            />
            <br />

            <Form.Control
              type="text"
              placeholder="Video Link"
              id="videoLink"
              value={this.state.videoLink}
              onChange={this.handleChange}
            />
            <br />

            <Form.Control
              type="text"
              id="image"
              placeholder="Image Link"
              value={this.state.image}
              onChange={this.handleChange}
            />
            <br></br>

            <Button type="submit" variant="warning" id="btn">
              Add Song
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
