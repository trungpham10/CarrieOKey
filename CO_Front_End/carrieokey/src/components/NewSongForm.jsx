import React, { Component } from 'react'

export default class NewSongForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            songName: String,
            artist: String,
            lyrics: String,
            urlLink: String,     
        }
    }

    render() {
        return (
            <form>
                <label htmlFor= "songName">Song Name:</label>

                <input type="text" id="name"></input><br></br>

                <label htmlFor= "artist">Artist:</label>

                <input type="text" id="name"></input><br></br>

                <label htmlFor= "lyrics">Lyrics:</label>

                <textarea placeholder= "Add your Lyrics"></textarea><br></br>

                <label htmlFor= "urlLink">URL:</label>

                <input type="text" id="name"></input><br></br>

                <input type="submit" value="Add Song"/>


            </form>
                
            
        )
    }
}
