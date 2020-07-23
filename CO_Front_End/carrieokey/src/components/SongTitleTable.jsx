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
                        {this.props.songs.map((song)=>{
                            <tr >
                                <td>{song.songName}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
