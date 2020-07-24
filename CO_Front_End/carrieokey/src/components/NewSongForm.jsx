import React, { Component } from 'react'
import Container from "react-bootstrap/Container"
const baseUrl = 'http://localhost:3003'
export default class NewSongForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            songName: "",
            artist: "",
            lyrics: "",
            videoLink: "",
            image: ""  
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)


    }
    
    handleChange(event) {
        this.setState({[event.currentTarget.id]: event.currentTarget.value})
    }

handleSubmit (event) {
    event.preventDefault()
    fetch(baseUrl + '/song', {
        method: 'POST',
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
        // this.props.handleAddSong(resJson)
        this.setState({
            songName: '',
            artist: '',
            lyrics: '',
            videoLink: '',
            image: ''
        })
    }).catch (error => console.error({'Error': error}))
}




    render() {
        return (
            <Container>
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

                    <input type="text" id="image" value={this.state.image} onChange={this.handleChange}></input>

                <input type="submit" value="Add Song" />


            </form>
            </Container>
            
        )
    }
}
