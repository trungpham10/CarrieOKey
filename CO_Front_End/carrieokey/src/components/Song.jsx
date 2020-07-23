import React, { Component } from 'react'

export default class Song extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} />
                <h2>{this.props.songName}</h2>
                <h3>{this.props.artist}</h3>
                <p>{this.props.lyrics}</p>
                <a href={this.props.videoLink}></a>
                <br></br>
            </div>
        )
    }
}
