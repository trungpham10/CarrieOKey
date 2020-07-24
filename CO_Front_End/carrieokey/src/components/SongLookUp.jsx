import React, { Component } from 'react'

export default class SongLookUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            baseURL: 'https://orion.apiseeds.com/api/music/lyric/',
            key:'?apikey=EMvxpFHfby2rEWssJnkr8rFYmQ1y8WONbq9qiWJKELQPfYgvz9Rm29AqIlNTglYo',
            songName: '',
            artist: '',
            searchURL: '',
            results: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value })

    }

    handleSubmit (event) {
        event.preventDefault()
        this.setState({
          searchURL: this.state.baseURL + this.state.artist + '/'+ this.state.songName + this.state.key 
        }, () => {
            console.log(this.state.searchURL)
            fetch(this.state.searchURL)
              .then(response => {
                return response.json()
              }).then(json => console.log(json),
                err => console.log(err))
          })
        }
        
    

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="artist">Artist:</label>

                    <input type="text" id="artist" value={this.state.artist} onChange={this.handleChange} ></input><br></br>

                    <label htmlFor="songName" >Song Name:</label>

                    <input type="text" id="songName" value={this.state.songName} onChange={this.handleChange}></input><br></br>

                    <input type="submit" value="Look up song" />
                </form>
            </div>
        )
    }
}
