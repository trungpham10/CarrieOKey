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
    deleteSong = (id)=>{
        fetch(baseUrl + '/song/' + id,{
            method: 'DELETE'
        }).then( response => {
            const findIndex = this.state.songs.findIndex(song => song._id === id)
            const copySongs = [...this.state.songs]
            copySongs.splice(findIndex, 1)
            this.setState({songs : copySongs})
        })
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
                        <div>
                            <Song artist={song.artist} songName={song.songName} lyrics={song.lyrics} videoLink={song.videoLink} image={song.image}/>
                            <a href="/editSong"><button>EDIT</button></a>

                            <button onClick={()=>this.deleteSong(song._id)}>DELETE</button>
                        </div>
                    )
                    
                })}
            </div>
        )
    }
}
