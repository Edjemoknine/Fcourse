import React from "react";

const VideoSection = () => {
  return (
    <section className="  rounded-lg overflow-hidden py-16 md:py-40 h-[900px]">
      <video className="w-full rounded-xl" controls src="/learn.mp4" />
    </section>
  );
};

export default VideoSection;
