import React from "react";

export default function VideoChat(props) {
  return (
    <div>
      Video Chat Room, where users are connected! Current user:{" "}
      {props.firstName} | {props.logEmail}
    </div>
  );
}
