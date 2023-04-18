import React, { useState } from "react";
import { joinMeeting } from "../zoom";

const ZoomIntegration = () => {
  const [meetingNumber, setMeetingNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [meetingPassword, setMeetingPassword] = useState("");

  const handleJoinMeeting = () => {
    // Replace this URL with the actual URL of your Node.js server on Replit
    const signatureEndpoint = "https://backendzoomthingy.mikaelbelanger.repl.co";

    fetch(signatureEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ meetingNumber, role: 0 }),
    })
      .then((response) => response.json())
      .then(({ signature, apiKey }) => {
        joinMeeting(meetingNumber, userName, signature, apiKey, meetingPassword);
      })
      .catch((error) => {
        console.error("Error fetching signature", error);
      });
  };

  return (
    <div>
      <h2>Join a Zoom Meeting</h2>
      <label>
        Meeting Number:
        <input
          type="text"
          value={meetingNumber}
          onChange={(e) => setMeetingNumber(e.target.value)}
        />
      </label>
      <label>
        User Name:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label>
        Meeting Password:
        <input
          type="password"
          value={meetingPassword}
          onChange={(e) => setMeetingPassword(e.target.value)}
          placeholder="Leave empty if not required"
        />
      </label>
      <button onClick={handleJoinMeeting}>Join Meeting</button>
    </div>
  );
};

export default ZoomIntegration;