import React, { Component } from 'react'
import Song from './Song'

const baseUrl = 'localhost:3003'


export default class SongList extends Component {
    constructor(props) {
        super(props)
        state = {
            songs =[]
        }

    }
    getSongs() {
        fetch(baseUrl + '/song') //subject to change
            .then(data => {
                return data.json()
            },
                err => console.log(err))
            .then(parsedData =>
                this.setState({
                    songs: parsedData,
                }),
                err => console.log(err))
    }
    onComponentDidMount(){
        this.getSongs()
    }

    render() {
        return (
            <div>
                {this.state.songs.map((song) =>{
                    return(
                        <Song artist={song.artist} songName={song.songName} lyrics={song.lyrics} videoLink={song.videoLink} image={song.image}/>
                    )
                })}
            </div>
        )
    }
}
