import React, { Component } from 'react'

export default class Song extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.songName}</h2>
                <h3>{this.props.artist}</h3>
                <p>{this.props.lyrics}</p>
                <a href={this.props.urlLink}></a>
                <br></br>
            </div>
        )
    }
}
