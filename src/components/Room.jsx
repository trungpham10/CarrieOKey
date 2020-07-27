import React, { useState, useEffect } from "react";
import Video from "twilio-video";
import Participant from "./Participant";

const Room = ({ roomName, token, handleLogout }) => {
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
      <button onClick={handleLogout}>Exit Room</button>
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
          style={{ float: "left", marginTop: "150px", marginLeft: "0px" }}
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
          <h2>Song: {roomName}</h2>
          <pre>
            Lyrics: <br />
            I don't know about you <br />
            But I got to get it out <br />
            And I don't know how soon <br />
            But if we die <br />
            I want to bring the whole thing <br />
          </pre>
        </div>
        <div
          className="remote-participants"
          style={{ float: "right", marginTop: "150px", marginRight: "0px" }}
        >
          {remoteParticipants}
        </div>
      </div>
    </div>
  );
};

export default Room;
