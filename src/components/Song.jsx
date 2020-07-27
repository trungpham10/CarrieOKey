import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Show from "./Show";

export default class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow = (event) => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleClose = (event) => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      // <a href="./Show.jsx">
      <Card
        className="text-center bg-dark text-white mb-2 "
        style={{
          width: "15rem",
          height: "22rem",
        }}
        id="cardStyle"
      >
        <Card.Img
          variant="top"
          src={this.props.image}
          alt="album cover"
          style={{ height: "15rem" }}
        />
        <Card.Body>
          <Card.Title>{this.props.songName}</Card.Title>
          <Card.Subtitle>By {this.props.artist}</Card.Subtitle>
          <Card.Text>
            {/* <pre className="text-white">
                {this.props.lyrics.slice(0, this.props.lyricLength)}
              </pre> */}
          </Card.Text>
          {this.props.videoLink ? (
            <a href={this.props.videoLink}>
              <Button variant="primary">Link to Video of this Song</Button>
            </a>
          ) : (
            ""
          )}
          {/* <Link
              songName={this.props.songName}
              to={`/songs/${this.props.songID}`}
            >
              <Button variant="warning">See full song</Button>
            </Link> */}
          {/* <Show /> */}
          <Button variant="primary" onClick={(evt) => this.handleShow(evt)}>
            Launch static backdrop modal
          </Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {this.props.songName} by {this.props.artist}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <pre>{this.props.lyrics}</pre>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="danger"
                onClick={() => this.props.deleteSong(this.props.songID)}
              >
                Delete{" "}
              </Button>
              <Button
                variant="secondary"
                onClick={(evt) => this.handleClose(evt)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
      // </a>
    );
  }
}
