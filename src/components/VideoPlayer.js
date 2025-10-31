// src/components/VideoPlayer.jsx
import React from "react";

export default function VideoPlayer() {
  return (
    <div>
      <video width="300" controls>
        <source src="sample.mp4" type="video/mp4" />
        Your browser does not support video.
      </video>
    </div>
  );
}
