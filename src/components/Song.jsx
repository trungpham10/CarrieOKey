import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";

export default class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewShow: false,
      editShow: false,
    };

    this.handleViewShow = this.handleViewShow.bind(this);
    this.handleViewClose = this.handleViewClose.bind(this);
    this.handleEditShow = this.handleEditShow.bind(this);
    this.handleEditClose = this.handleEditClose.bind(this);
  }

  handleViewShow = (event) => {
    this.setState({
      viewShow: true,
    });
  };

  handleViewClose = (event) => {
    this.setState({
      viewShow: false,
    });
  };
  handleEditShow = (event) => {
    this.setState({
      editShow: true,
    });
  };

  handleEditClose = (event) => {
    this.setState({
      editShow: false,
    });
  };

  render() {
    return (
      // <a href="./Show.jsx">
      <Card
        className="text-center bg-dark text-white mb-2 "
        style={{
          width: "18rem",
          height: "30rem",
        }}
        id="cardStyle"
      >
        <Card.Img
          variant="top"
          src={this.props.image}
          alt="album cover"
          style={{
            height: "15rem",
          }}
        />
        <Card.Body>
          <Card.Title>{this.props.songName}</Card.Title>
          <Card.Subtitle>By {this.props.artist}</Card.Subtitle>
          <br />
          {/* <Card.Text> */}
          {/* <pre className="text-white">
                {this.props.lyrics.slice(0, this.props.lyricLength)}
              </pre> */}
          {/* </Card.Text> */}
          {this.props.videoLink ? (
            <a href={this.props.videoLink}>
              <Button variant="primary" className="mb-2">Link</Button>
              <br />
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
          <Button
            className="mb-2"
            variant="primary"
            id="viewShow"
            onClick={(evt) => this.handleViewShow(evt)}
          >
            View Song
          </Button>
          <br></br>
          <Button
            variant="primary"
            id="editShow"
            onClick={(evt) => this.handleEditShow(evt)}
          >
            Edit Song
          </Button>
          <ViewModal
            viewShow={this.state.viewShow}
            id="viewShow"
            onHide={this.handleClose}
            dialogClassName="modal-50w"
            songName={this.props.songName}
            artist={this.props.artist}
            lyrics={this.props.lyrics}
            songID={this.props.songID}
            handleClose={this.handleViewClose}
          />
          <EditModal
            editShow={this.state.editShow}
            onHide={this.handleClose}
            songName={this.props.songName}
            artist={this.props.artist}
            lyrics={this.props.lyrics}
            deleteSong={this.props.deleteSong}
            songID={this.props.songID}
            handleClose={this.handleEditClose}
            videoLink={this.props.videoLink}
            image={this.props.image}
          ></EditModal>
          {/* <Modal
            show={this.state.viewShow}
            id='viewShow'
            onHide={this.handleClose}
            dialogClassName="modal-50w"
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {this.props.songName} by {this.props.artist} <br />
              </Modal.Title>
            </Modal.Header>
            <p style={{ textAlign: "center" }}>
              <Link to="/video">
                <Button songName={this.props.songName}>Karaoke!</Button>
              </Link>
            </p>
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
                id="viewShow"
                onClick={(evt) => this.handleShow(evt)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal> */}
        </Card.Body>
      </Card>
      // </a>
    );
  }
}
