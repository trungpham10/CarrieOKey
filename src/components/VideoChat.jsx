import React, { useState, useCallback } from "react";
import Lobby from "./Lobby";
import Room from "./Room";
import { Redirect, Link } from "react-router-dom";

// const fetchUrl = "http://localhost:3003";
let fetchUrl;

if (process.env.NODE_ENV === 'development') {
  fetchUrl = 'http://localhost:3003';
} else {
  fetchUrl = 'https://carrieokey-api.herokuapp.com';
}

export default function VideoChat(props) {
  const [roomName, setRoomName] = useState("");
  const [token, setToken] = useState(null);
  const [foundSong, setFoundSong] = useState(props.foundSong);

  const handleRoomNameChange = useCallback((event) => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const data = await fetch(fetchUrl + "/video/token", {
        method: "POST",
        body: JSON.stringify({
          identity: props.logEmail,
          room: roomName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      setToken(data.token);

      const songData = await fetch(fetchUrl + "/song/findOne", {
        method: "POST",
        body: JSON.stringify({
          songName: roomName,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch(() => {
          console.log("Something is wrong. Please try again.");
          alert("Song not found, please try again.");
          return <Link to="/"></Link>;
        });
      setFoundSong(songData);
    },
    [roomName]
  );

  const handleLogout = useCallback((event) => {
    setToken(null);
    setRoomName("");
  }, []);

  if (!props.isLoggedIn) {
    alert("Please login to continue");
    return <Redirect to="/login" />;
  }

  let render;
  if (token) {
    render = (
      <Room
        foundSong={foundSong}
        roomName={roomName}
        token={token}
        handleLogout={handleLogout}
        firstName={props.firstName}
      />
    );
  } else {
    render = (
      <Lobby
        username={props.logEmail}
        roomName={roomName}
        firstName={props.firstName}
        lastName={props.lastName}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
      />
    );
  }

  return render;
}
