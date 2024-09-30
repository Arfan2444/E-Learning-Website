import React from "react";

function VideoPlayer({ videoUrl }) {
  return (
    <video width={1000} height={250} controls className="rounded-sm">
      <source src={videoUrl} type="video/mp4"></source>
    </video>
  );
}

export default VideoPlayer;
