import React, { Component } from 'react'
import SongList from './SongList'

export default class User extends Component {
    constructor(props){
        super(props)
        state ={
            user: "", //first name
        }
    }
    render() {
        return (
            <div>
                <h1>Welcome {this.state.user}</h1>

                <h2>Karaoke Song List</h2>
                <SongList />
            </div>
        )
    }
}
