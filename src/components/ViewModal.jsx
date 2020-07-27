import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default class ViewModal extends Component {
    render() {
        return (
            <Modal
            show={this.props.viewShow}
            onHide={this.props.handleClose}
            dialogClassName="modal-50w"
          >
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
                onClick={(evt) => this.props.handleClose(evt)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )
    }
}
