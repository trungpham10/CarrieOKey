import React, { useState, useCallback } from "react";
import Lobby from "./Lobby";
import Room from "./Room";
import { Redirect } from "react-router-dom";

const fetchUrl = "http://localhost:3003";

export default function VideoChat(props) {
  const [roomName, setRoomName] = useState("");
  const [token, setToken] = useState(null);

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
    },
    [roomName]
  );

  const handleLogout = useCallback((event) => {
    setToken(null);
    setRoomName("");
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
