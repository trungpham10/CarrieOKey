import React, { Component } from 'react'

export default class SongTitleTable extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Song Title</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.songs.map((song) => {
                            return (
                                <tr onClick={() => this.props.selectSong(song)}><td>{song.songName}</td></tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
