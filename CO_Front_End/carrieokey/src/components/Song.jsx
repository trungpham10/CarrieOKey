import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class Song extends Component {
    render() {
        return (
            
            <Card className='text-center bg-dark text-white' style={{width: '20rem'}}>
                <Card.Img variant='top' src={this.props.image} alt="album cover" />
                <Card.Body>
                <Card.Title>{this.props.songName}</Card.Title>
                <Card.Subtitle>
                By {this.props.artist}
                </Card.Subtitle>
                <Card.Text>
                {this.props.lyrics}
                </Card.Text>
                <a href={this.props.videoLink}><Button variant="primary">Link to Video of this Song</Button></a>
                </Card.Body>
            </Card>
            
        )
    }
}
