import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
// import { Redirect } from 'react-router-dom'
// import { useHistory } from "react-router-dom";
// const baseUrl = "http://localhost:3003";
let baseUrl;

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3003';
} else {
  baseUrl = 'https://carrieokey-api.herokuapp.com';
}
export default class ApiRender extends Component {

  constructor(props) {
    super(props)
    this.state = {
      songName: "",
      artist: "",
      lyrics: "",
      videoLink: "",
      image: "",
      
        
       
    }
    this.addSong = this.addSong.bind(this)
}

addSong(event) {
  event.preventDefault();
  fetch(baseUrl + "/song", {
    method: "POST",
    body: JSON.stringify({
      songName: this.props.song.result.track.name,
      artist: this.props.song.result.artist.name,
      lyrics: this.props.song.result.track.text,
      // videoLink: this.state.videoLink,
      image: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      console.log(resJson);
      console.log(typeof(resJson))
      this.props.setCurrentSongID(resJson._id)
      this.setState({
        songName: "",
        artist: "",
        lyrics: "",
        videoLink: "",
        image: "",
      });
    })
    .catch((error) => console.error({ Error: error }));
}

    render() {
        return (
            <div>
              {
                  this.props.song.error ? (
                  <h3>Results not found</h3> 
                  ) : (
                    <Card
                      className="text-center bg-dark text-white mb-50 "
                      style={{
                        width: "40rem",
                        height: "80rem",
                        
                      }}
                      id="cardStyle1"
              
                    >
              <Card.Body>
                   <ul style={{ 'list-style-type': 'none'}}> 
                         <h5 style={{'textDecoration': 'underline'}}>SONG</h5>
                         <Card.Title>{this.props.song.result.track.name}</Card.Title>
                        <h5 style={{'textDecoration': 'underline'}}>ARTIST</h5>
                          <li>{this.props.song.result.artist.name}</li>
                        <h5 style={{'textDecoration': 'underline'}}>LYRICS</h5>
                        <Card.Text>{this.props.song.result.track.text}  </Card.Text>
                         <Button type="submit" variant="warning" id="searchbtn" onClick={(event)=>this.addSong(event)}>Add to List</Button>
                   </ul> 
                   </Card.Body>
                   </Card>
                  )
    }
                     
            
            </div>
        )
    }
}
