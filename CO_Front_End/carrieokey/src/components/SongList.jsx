import React, { Component } from 'react'
import Song from './Song'

const baseUrl = "http://localhost:3003"


export default class SongList extends Component {
    
        state = {
            songs: [],
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
        console.log('Loading songs')
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
