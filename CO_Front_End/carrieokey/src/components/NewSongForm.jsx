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
            <div>
                
            </div>
        )
    }
}
