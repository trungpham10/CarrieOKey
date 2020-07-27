import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
let baseUrl;

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3003';
} else {
  baseUrl = 'https://carrieokey-api.herokuapp.com';
}

export default class EditModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            song_id: '',
            songName: '',
            artist: '',
            lyrics: '',
            videoLink: '',
            image: '',  
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setSongData = this.setSongData.bind(this)

    }
    handleChange (event) {
        this.setState({[event.currentTarget.id]: event.currentTarget.value})
    }
    handleSubmit (event) {
        event.preventDefault()
        fetch(baseUrl + '/song/' + this.state.song_id, {
            method: 'PUT',
            body: JSON.stringify({
                songName: this.state.songName,
                artist: this.state.artist,
                lyrics: this.state.lyrics,
                videoLink: this.state.videoLink,
                image: this.state.image
            }),
            headers: {
            'Content-Type': 'application/json'
            }
        }).then (res => res.json())
            .then (resJson => {
                console.log(resJson)
            this.props.handleAddSong(resJson)
            this.setState({
                songName: resJson.songName,
                artist: resJson.artist,
                lyrics: resJson.lyrics,
                videoLink: resJson.videoLink,
                image: resJson.image,
            })
            this.getSongs()
        }).catch (error => console.error({'Error': error}))
    }
    setSongData () {
        // this.state.songs.indexOf(event.target.id) // something
    this.setState({
        song_id: this.props.songID,
        songName: this.props.songName,
        artist: this.props.artist,
        lyrics: this.props.lyrics,
        videoLink: this.props.videoLink,
        image: this.props.image
    })
}
    componentDidMount(){
        this.setSongData()
    }
    render() {
        return (
            <Modal
                show={this.props.editShow}
                onHide={this.props.handleClose}
                dialogClassName="modal-50w"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Song
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                <label htmlFor= "songName" >Song Name:</label>

                    <input type="text" id="songName" value={this.state.songName} onChange={this.handleChange}></input><br></br>

                <label htmlFor= "artist">Artist:</label>

                    <input type="text" id="artist" value={this.state.artist} onChange={this.handleChange}></input><br></br>

                <label htmlFor= "lyrics">Lyrics:</label>

                    <textarea placeholder= "Add your Lyrics" id="lyrics" onChange={this.handleChange} value={this.state.lyrics}></textarea><br></br>

                <label htmlFor= "videoLink">Video Link:</label>

                    <input type="text" id="videoLink" value={this.state.videoLink} onChange={this.handleChange}></input><br></br>

                <label htmlFor="image">Image:</label>

                    <input type="text" id="image" value={this.state.image} onChange={this.handleChange}></input><br></br>

                <input type="submit" value="Update Song" />
            </form>
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
