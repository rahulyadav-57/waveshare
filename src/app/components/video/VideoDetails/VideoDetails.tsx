import { VideoPlayer } from "@app/components/common";
import { FC } from "react";

const VideoDetails: FC = () => {
  return (
    <div>
      <VideoPlayer src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
    </div>
  );
};

export default VideoDetails;
