import React, { useState, useCallback } from "react";
import Lobby from "./Lobby";
import Room from "./Room";
import { Redirect } from "react-router-dom";

// const fetchUrl = "http://localhost:3003";
let fetchUrl;

if (process.env.NODE_ENV === 'development') {
  fetchUrl = 'http://localhost:3003';
} else {
  fetchUrl = 'https://carrieokey-api.herokuapp.com';
}

export default function VideoChat(props) {
  const [username, setUsername] = useState(props.logEmail);
  const [roomName, setRoomName] = useState("");
  const [token, setToken] = useState(null);

  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback((event) => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const data = await fetch(fetchUrl + "/video/token", {
        method: "POST",
        body: JSON.stringify({
          identity: username,
          room: roomName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      setToken(data.token);
    },
    [username, roomName]
  );

  const handleLogout = useCallback((event) => {
    setToken(null);
  }, []);

  if (!props.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  let render;
  if (token) {
    render = (
      <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    );
  } else {
    render = (
      <Lobby
        username={username}
        roomName={roomName}
        handleUsernameChange={handleUsernameChange}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
      />
    );
  }

  return render;
}
