import React from "react";
import "../App.css";
import { propTypes } from "react-bootstrap/esm/Image";
import Button from "react-bootstrap/Button";

const Lobby = ({
  username,
  firstName,
  lastName,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
}) => {
  return (
    <div style={{ height: "700px" }}>
      <form onSubmit={handleSubmit}>
        <h1>
          Good luck have fun, {firstName} {lastName}!
        </h1>
        <br />

        <div>
          <input
            type="text"
            id="room"
            value={roomName}
            onChange={handleRoomNameChange}
            placeholder="Enter a song ... "
            required
          />
        </div>
        <br />
        <Button type="submit" variant="warning">
          GO!
        </Button>
      </form>
    </div>
  );
};

export default Lobby;
