// src/components/Content.jsx
import React from "react";
import VideoPlayer from "./VideoPlayer";
import Navbar from "./Navbar";

export default function Content() {
  return (
    <div>
      <h2>Splitscreen</h2>
      <p>
        Tutorial on how to use split screen on your device.
      </p>
      <VideoPlayer />
      <Navbar />
    </div>
  );
}
