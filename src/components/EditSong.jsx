import React, { Component } from 'react'
import SongTitleTable from './SongTitleTable'

// const baseUrl = 'http://localhost:3003'
let baseUrl;

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3003';
} else {
  baseUrl = 'https://carrieokey-api.herokuapp.com';
}
export default class EditSongForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            songs: [],
            song_id: '',
            songName: '',
            artist: '',
            lyrics: '',
            videoLink: '',
            image: '',  
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.selectSong = this.selectSong.bind(this)

    }
    
    handleChange(event) {
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

    getSongs() {
        fetch(baseUrl + '/song',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }) //subject to change
            .then(data => {
                console.log(data)
                return data.json()
            },
                err => console.log(err))
            .then(parsedData =>
                this.setState({
                    songs: parsedData,
                }),
                err => console.log(err))

}

    componentDidMount(){
        this.getSongs()
    }

    selectSong (song) {
           // this.state.songs.indexOf(event.target.id) // something
        this.setState({
            song_id: song._id,
            songName: song.songName,
            artist: song.artist,
            lyrics: song.lyrics,
            videoLink: song.videoLink,
            image: song.image
        })
    }

    render() {
        return (
            <div className="container" >
            <SongTitleTable songs={this.state.songs} selectSong={this.selectSong} />

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
            </div>
            
        )
    }
}
