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
                  songs: json,
              }),
                err => console.log(err))
                
               
          })
        }
        
    

    render() {
        // console.log(this.state.songs)
        return (
            <Container>
            <div>

                <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                <Form.Label>Artist</Form.Label>
                <Form.Control
                    
                   type="text" id="artist" value={this.state.artist} onChange={this.handleChange}
                   />
                   <br />
                   <Form.Label>SONG</Form.Label>
            <Form.Control
                
                    type="text" id="songName" value={this.state.songName} onChange={this.handleChange}
                    />
            <br />

                    <Button type="submit" variant="warning">Look up Song</Button>
                    </Form.Group>
                </Form>
                
               {this.state.songs 
               ? < ApiRender songs={this.state.songs}/>
               : null
               }
            </div>
            </Container>
        )
      
    }
}
