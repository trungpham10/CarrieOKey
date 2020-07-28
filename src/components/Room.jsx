import React, { useState, useEffect } from "react";
import Video from "twilio-video";
import Participant from "./Participant";
import Button from "react-bootstrap/Button";

const Room = ({ foundSong, roomName, token, handleLogout }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    Video.connect(token, {
      name: roomName,
    }).then((room) => {
      setRoom(room);
      room.on("participantConnected", participantConnected);
      room.on("participantDisconnected", participantDisconnected);
      room.participants.forEach(participantConnected);
    });

    return () => {
      setRoom((currentRoom) => {
        if (currentRoom && currentRoom.localParticipant.state === "connected") {
          currentRoom.localParticipant.tracks.forEach(function (
            trackPublication
          ) {
            trackPublication.track.stop();
          });
          currentRoom.disconnect();
          return null;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, token]);

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <div>
      <Button onClick={handleLogout} variant="warning">
        Exit Room
      </Button>

      <div>
        <br />
        <p>
          <h2>{foundSong.songName}</h2>
          <p>{foundSong.artist}</p>
        </p>
        <br />
        <div
          className="room"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            className="local-participant"
            style={{ float: "left", marginTop: "0px", marginLeft: "0px" }}
          >
            {room ? (
              <Participant
                key={room.localParticipant.sid}
                participant={room.localParticipant}
              />
            ) : (
              ""
            )}
          </div>
          <div className="song-display">
            <iframe
              width="550"
              height="315"
              src={foundSong.videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              style={{ borderRadius: "10px" }}
              allowFullScreen
            ></iframe>
            <p>LYRICS</p>
            <pre>{foundSong.lyrics}</pre>
          </div>
          <div
            className="remote-participants"
            style={{ float: "right", marginTop: "0px", marginRight: "0px" }}
          >
            {remoteParticipants}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
