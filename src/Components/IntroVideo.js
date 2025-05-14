import "../css/introVideo.css";
import React from "react";

const IntroVideo = () => {
  return (
    <main className="videoWrapper">
      <video controls className="video" preload="metadata">
        <source src="/videos/ericIntro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  );
};

export default IntroVideo;
