import React, { Component } from 'react';
import ApiRender from './ApiRender';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


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
              }).then(json => this.setState({
                  song: json,
              }),
                err => console.log(err))
                
               
          })
        }
        
    

    render() {
        // console.log(this.state.songs)
        return (
            <Container>
                <h1>Search</h1>
            <div>

                <Form onSubmit={this.handleSubmit}>
                <Form.Group id="songLookup">
                <Form.Control
                    
                   type="text" id="artist" placeholder= "Artist" value={this.state.artist} onChange={this.handleChange}
                   />
                   <br />
                   
            <Form.Control
                
                    type="text" id="songName" placeholder="Song" value={this.state.songName} onChange={this.handleChange}
                    />
            <br />

                    <Button type="submit" variant="warning" id="searchbtn" >Submit</Button>
                    </Form.Group>
                </Form>
                
               {this.state.song 
               ? < ApiRender song={this.state.song} setCurrentSongID={this.props.setCurrentSongID}/>
               : null
               }
            </div>
            </Container>
        )
      
    }
}
