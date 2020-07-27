import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Song from "./Song";

export default class Show extends Component {
    state = {
        Song: Song._id,
    };

render() {
    return (
    <Card
        className="text-left bg-dark text-white mb-2"
        style={{
            width: "65rem",
            height: "30rem",
            display: "flex",
            flexDirection: "row",
            background: "blue",
        }}
        >
        <Card.Img
            variant="top"
            src={this.props.image}
            alt="album cover"
            style={{ width: "20rem", height: "20rem", alignContent: "center" }}
        />
        <Card.Body>
        <Card.Title>
            <h1>{this.props.songName}</h1>
        </Card.Title>
        <Card.Subtitle>
            <p>{this.props.artist}</p>
        </Card.Subtitle><br />
        <Card.Text>
            <pre className="text-white text-left">
                {this.props.lyrics.slice(0, this.props.lyricLength)}
            </pre>
        </Card.Text>
            {this.props.videoLink ? (
            <a href={this.props.videoLink}>
            <Button variant="primary">Link to Video of this Song</Button>
            </a>
            ) : (
            ""
            )}
        <div>
           <Song 
           songID={Song._id}
           />
        </div>
        <Container
            className="text-bottom bottom-buttons"
            variant="bottom"
            style={{ marginBottom: "0" }}
        ></Container>
        </Card.Body>
    </Card>
        );
    }
}
