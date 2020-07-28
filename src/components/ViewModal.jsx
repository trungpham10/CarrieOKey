import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import EditModal from './EditModal.jsx'


export default class ViewModal extends Component {
  // constructor(props){
  //   super(props);
  //   this.state ={
  //     editShow: false,
  //   }
  //   this.handleShow = this.handleShow.bind(this);
  //   this.handleClose = this.handleClose.bind(this);
  // }

  // handleShow = () => {
  //   this.setState({
  //     editShow: true,
  //   });
  // };

  // handleClose = () => {
  //   this.setState({
  //     editShow: false,
  //   });
  // };

    render() {
        return (
          <>
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
                variant="secondary"
                onClick={(evt) => this.props.handleClose(evt)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          
          </>
        )
    }
}
