import React, { Component } from "react";
import Song from "./Song";
import CardDeck from "react-bootstrap/CardDeck";

const baseUrl = "http://localhost:3003";

export default class SongList extends Component {
  state = {
    songs: [],
  };

  getSongs() {
    fetch(baseUrl + "/song", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }) //subject to change
      .then(
        (data) => {
          console.log(data);
          return data.json();
        },
        (err) => console.log(err)
      )
      .then(
        (parsedData) =>
          this.setState({
            songs: parsedData,
          }),
        (err) => console.log(err)
      );
  }
  deleteSong = (id) => {
    fetch(baseUrl + "/song/" + id, {
      method: "DELETE",
    }).then((response) => {
      const findIndex = this.state.songs.findIndex((song) => song._id === id);
      const copySongs = [...this.state.songs];
      copySongs.splice(findIndex, 1);
      this.setState({ songs: copySongs });
    });
  };

  componentDidMount() {
    console.log("Loading songs");
    this.getSongs();
  }

    render() {
        return (
            <CardDeck className="justify-content-center mt-5">
                {this.state.songs.map((song) => {
                    return (
                        <div id="cardDeck" key= {song._id}>
                            <Song
                                artist={song.artist}
                                songName={song.songName}
                                lyrics={song.lyrics}
                                videoLink={song.videoLink}
                                image={song.image}
                                lyricLength='300'
                                deleteSong={this.deleteSong}
                                songID={song._id}
                            />
                            {/* {/* <a href="/editSong">}
                            <button>EDIT</button>=   </a> */}
                        </div>
                    );
                })}
      </CardDeck>
    );
  }
}
